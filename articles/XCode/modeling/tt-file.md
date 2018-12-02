# tt文件

- 即T4模板文件，`Text Template Transformation Toolkit`的简称，[官方文档](https://docs.microsoft.com/zh-cn/visualstudio/modeling/code-generation-and-t4-text-templates?view=vs-2017)

- 从Nuget安装XCode之后，项目会出现`Build.tt`文件，并自动复制所需dll。. Net Core项目暂不支持此方式。

## 内容

```t4
<#@ template language="C#" hostSpecific="true" debug="true" #>
<#@ assembly name="$(SolutionDir)\DLL\NewLife.Core.dll" #>
<#@ assembly name="$(SolutionDir)\DLL\XCode.dll" #>
<#@ import namespace="System.Diagnostics" #>
<#@ import namespace="System.IO" #>
<#@ import namespace="XCode.Code" #>
<#@ output extension=".log" #>
<#
    // 设置当前工作目录
	PathHelper.BaseDirectory = Host.ResolvePath(".");
	// 导入模型文件并生成实体类，模型文件、输出目录、命名空间、连接名
	EntityBuilder.Build();

	//var tables = DAL.ImportFrom("Company.Project.xml");
	//EntityBuilder.Build(tables);
#>
```

- `$(SolutionDir)`代表当前项目解决方案文件所在目录，加上后面Dll的路径拼接成完整文件路径。所以如果没有自动复制可手动复制过去。
- 中间的内容就是设置基础目录，调用Build方法生成实体类，下面的注释演示另外的用法，更多用法可自行查看源码探索。

## 使用方式

- 右键该tt文件，选择**运行自定义工具**，即可开始运行tt文件。第一次运行会因为需要初始化运行tt文件的资源，所以会稍微久一点，第二次开始会很快。
- 等鼠标转圈结束就代表运行结束，如果报错则会直接提示，比如找不到dll之类的。
- 把生成的实体类包含在项目中即可使用。

## 总结

曾经有同学使用虚拟机，Mac上用win10虚拟机，win10中使用Mac的映射磁盘，最后怎么生成都找不到生成的实体类，后面改成win10虚拟机的磁盘才可以。