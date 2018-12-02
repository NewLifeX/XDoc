Write-Host "********************generate sidebar start!***********************"

<#
vuepress 生成侧边栏json，需要配置输入输出
$targetDir
$output
$PSScriptRoot 为当前脚本所在目录
#>


# 搜索md文件的目录
$targetDir = $PSScriptRoot + "/../articles/"

# 输出文件名
$output = "/../articles/.vuepress/sidebar.json"

Write-Host "脚本执行所在目录：" $PSScriptRoot
Write-Host "md文件搜索目录：" $targetDir
Write-Host "sidebar.json输出目录：" $output

# 初始化文件夹信息对象
$buildPath = [System.IO.DirectoryInfo]::new($targetDir).FullName

# 搜索所有md文件，排除readme.md
$fileInfos = Get-ChildItem -Path $buildPath -Recurse -Include *.md -Exclude readme.md

$tocContent = @("") # 记录输出内容，数组形式
$lastRPath = "" # 记录上一次文件夹信息，用来判断当前md文件是否与上个文件处于同一文件夹
$indentation = "" # 缩进

$fileInfos | ForEach-Object{

    $fileInfo = $_
    # 获取当前文件所在文件夹，将反斜杠换成正斜杠
    $rPath = $fileInfo.DirectoryName.Replace($buildPath, "\").Replace("\","/")+"/"

    # 判断当前文件夹是否与上次记录的文件夹相同，不相同则新建一组
    if (!($rPath -eq $lastRPath )) {

        # $lastRPath为空，说明第一次进来，不用处理
        if (!($lastRPath -eq "")) {
            $lastIndex = $tocContent.Length - 1
            # 去掉children的最后一个逗号
            $tocContent[$lastIndex] = $tocContent[$lastIndex].Replace('",','"')
            # 补全中括号和括号
            $tocContent =  $tocContent + ($indentation + '        ]') + ($indentation + '    }],')
        }

        # 输出title和children
        $tocContent =  $tocContent + ($indentation + '    "' + $rPath + '": [{') + ($indentation + '        "title": "' + $fileInfo.Directory.Name + '",') + ($indentation + '        "children": [')
        # 输出""，表示readme.md也作为侧边栏菜单
        $tocContent = $tocContent + ($indentation + '            "",')
        # 记录父级
        $lastRPath = $rPath
    }

    # 文件名
    $tocContent = $tocContent + ($indentation + '            "'+$fileInfo.Name+'",')
}

# 去掉children的最后一个逗号
$lastIndex = $tocContent.Length - 1
$tocContent[$lastIndex] = $tocContent[$lastIndex].Replace('",','"')

# 补全中括号和括号
$tocContent =  $tocContent + ($indentation + '        ]') + ($indentation + '    }]')
$tocContent[0] = $indentation + '{'
$tocContent  = $tocContent + ($indentation + '}')

# 输出到文件
$tocContent | Out-File -FilePath ($PSScriptRoot + $output) -Encoding "utf8"
Write-Host $tocContent
Write-Host "********************generate sidebar end!***********************"