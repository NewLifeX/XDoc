#
# 生成一个栏目里面所有内容的菜单
#

param($Directory)

# 目录文件
$tocPath = $Directory + "/toc.md"

# 目录内容
[Collections.Generic.List[string]] $tocContent

#新目录内容
[String[]] $newTocContent

# 获取目录内容
If (Test-Path $tocPath) {
    $tocContent = Get-Content -Path $tocPath -Encoding UTF8
}

# 构建目录
function buildToc($dirPath) {

    # 首先判断当前目录是否有md文件或者文件夹，没有则返回

    #If(Test-Path ($dirPath + "/index.md")){
    #	$tocContent = Get-Content -Encoding UTF8
    #}

	[String[]] $newTocContent

    # 获取文件信息，-Recurse表示遍历子目录
    $fileInfo = Get-ChildItem  $dirPath -Recurse -Include *.md -Exclude index.md,toc*.md

    # 记录上一次父级文件夹到该栏目 $Directory 的路径
    $pPath = ""

    $fileInfo | foreach {
        # 链接地址
        $linkName = $_.FullName.Replace($Directory, "").TrimStart("\\")

        # 深度，根据深度来生成层级关系
        $depth = $linkName.Split('\\').Length - 1

        # 文件到栏目文件夹的路径
        $linkPath = $linkName.Replace($_.Name, "").TrimEnd("\\")

        # 如果当前路径与上一次记录的路径不同，则检查生成父级 items
        If (!($linkPath -eq $pPath)) {

            #生成父级标题
			$titleContent = $null
            $titleContent = buildItems($linkPath, $dirPath)
			$newTocContent = $newTocContent + $titleContent

            # 更新父级
            $pPath = $linkPath
        }

        $sharps = getSharp($depth)

        $newTocContent = $newTocContent + ($sharps + "[" + $_.BaseName + "](" + ($linkName -replace "\\","/") + ")")
    }

	# 如果根目录含有index.md，添加一个目录
	if(Test-Path ([System.IO.Path]::Combine($dirPath, "index.md")))
	{
		$newTocContent = @("# [介绍](index.md)") + $newTocContent
	}

	return $newTocContent
}

# 生成父级标题
function buildItems($arg) {

	$linkPath = $arg[0]
	$base = $arg[1]

    $arr = $linkPath -split "\\"
	$content = @()

    for ($i = 0; $i -lt $arr.Length; $i++) {

        $_ = $arr[$i]

        # 获取间隔
        $sharps = getSharp($i)

		$title = $null

		$indexMDFile = [System.IO.Path]::Combine($base,  $_, "index.md")

		if(Test-Path $indexMDFile)
		{
			$title = $sharps + "[" + $_ + "](" + $_ + "/" + "index.md)"
		}else
		{
			$title = $sharps + $_
		}

		# 如果已经存在此标题，跳过
		if(-not($newTocContent -contains $title))
		{
			# 如果这次是顶级标题，则加一空行
			if($sharps -eq "# ")
			{
				$content = $content + "" + $title
			}
			else
			{
				$content = $content + $title
			}		
		}		
    }

	return $content
}

# 根据深度获取 # 符号
function getSharp($depth) {
	$depth++
    $share = ""
    for ($i = 0; $i -lt $depth; $i++) {
        $share += "#"
    }

	return $share + " "
}

$newToc = buildToc($Directory);

# 保存内容
$newToc | Out-File "utf8" -FilePath ([System.IO.Path]::Combine($Directory, "toc-temp.md"))

if(Test-Path ([System.IO.Path]::Combine($Directory, "toc.md"))
{
    $newToc | Out-File "utf8" -FilePath ([System.IO.Path]::Combine($Directory, "toc.md"))
}