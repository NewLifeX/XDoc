$basePath = "../"

# 生成菜单

# 生成顶部栏菜单

# 读取配置文件
$docfxJson = Get-Content -Path ($basePath + "docfx.json")

# 解析成对象
$docfxJsonObj = $docfxJson | ConvertFrom-Json

# 获取需要编译的内容
$content = $docfxJsonObj.build.content

# 循环编译的内容条目，获得所有文件夹
$dirList = $null
foreach($item in $content){
    $files = $item.files
    foreach($file in $files){
        $i = $file.IndexOf("/")
        If($i -gt 0){
            $dirName = $file.Substring(0,$i)
			$dirList = $dirList, $dirName
            break;
        }
    }
}

# 生成栏目内容
$topTocContent = $null
foreach($item in $dirList){
	$topTocContent = $topTocContent + ("- name: "+$item), ("  href: "+$item+"/")
}

# 每一个文件夹视为一个栏目，生成根目录下的toc.yml
$topTocPath = ($basePath + "toc.yml")

$topTocContent | Out-File  -FilePath $($basePath + "toc-temp.yml") -Encoding utf8

If(!(Test-Path $topTocPath)){
    $topTocContent | Out-File  -FilePath $topTocPath -Encoding utf8
}