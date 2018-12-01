# 获取XCode

## XCode 安装

XCode的最新版本可在Nuget获取[NewLife.XCode Nuget包](https://www.nuget.org/packages/NewLife.XCode/)（以前Nuget名称为`XCode`，现已修改为`NewLife.XCode`）。如果您不熟悉使用 NuGet 程序包管理器中，我们建议您阅读[NuGet 概述](https://docs.microsoft.com/zh-cn/nuget/consume-packages/overview-and-workflow)。

### 安装 XCode Nuget 包

可以通过右键项目里面的**引用**并选择**管理 NuGet 程序包**来安装XCode

![ ](/images/xcode/fundamentals/install/1.png)

![ ](/images/xcode/fundamentals/install/2.png)

点击安装可能会弹出下面的提示框，这里选择**Packages.config**，安装完之后就会有脚本处理一些事情。
> 如果选择**PackageReference**，则安装脚本不会生效（后续会支持这种方式，正在测试）[PackageReference介绍](https://docs.microsoft.com/zh-cn/nuget/consume-packages/package-references-in-project-files)，[PackageReference好处以及迁移方式](https://docs.microsoft.com/zh-cn/nuget/reference/migrate-packages-config-to-package-reference)。如果您是 .NET Core 项目，建议另外新建一个 .Net Framework 项目来处理代码生成，指定输出目录到目标项目即可。

![ ](/images/xcode/fundamentals/install/3.png)

### 从包管理器控制台安装

通过在[程序包管理器控制台](https://docs.microsoft.com/zh-cn/nuget/tools/package-manager-console)执行以下命令安装

```powershell
Install-Package NewLife.XCode
```

## 安装结果

![ ](/images/xcode/fundamentals/install/4.png)

安装完之后会多两个文件，`Build.tt`和`Model.xml`。`Model.xml`是模型文件，`Build.tt`会根据模型文件生成实体类。
> 安装结束后会报一个错，找不到`NewLife.Core.dll`，这是因为安装完之后会立马执行`Build.tt`，但此时安装脚本还没有复制dll，再次运行`Build.tt`即可。

![ ](/images/xcode/fundamentals/install/5.png)

显示所有文件，将生成的实体类包含在项目中即可。
> 如果是 .Net Core项目，XCode还不支持PackageReference方式的话，可新建一个 .Net Framework项目，将模型文件的`Tables`元素的`Output`属性改成自己期待的地址，再生成即可。比如`Output="../AnOtherDir"`。

![ ](/images/xcode/fundamentals/install/6.png)

## 总结

- XCode的安装到此结束，此时您已经可以使用XCode自动生成数据库表，并进行添删改查了，其它所有的事情都让XCode代劳了。
- 很多人搞不懂为什么报错，为什么没有生成实体类等等。这些操作的目的都是为了得到实体类，您也完全可以手写一个实体类，但那太麻烦了，并且不方便修改。如果您非要这么做，此处[Membership](https://github.com/NewLifeX/X/tree/master/XCode/Membership)内置了用户管理实体类供您参考。