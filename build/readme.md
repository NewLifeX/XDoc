# 构建说明

- 此文件夹工程可在vs打开进行调试，使用上可以单个脚本运行

## build-toc.ps1

### build-toc.ps1说明

- 根据文件夹结构生成一个栏目下的目录

### 用法

- 在一栏目下新建`ps1`脚本文件，填写一下内容保存

```ps
. ../build/build-toc.ps1 $PSScriptRoot
```

- 选中该脚本，点击右键选择`使用PowerShell`运行
- 运行之后该目录会生成一个`toc-temp.md`目录文件，如果不存在`toc.md`，则自动创建一个
- 第二次运行只会生成新的`toc-temp.md`，不会覆盖`toc.md`，这样当`toc.md`内容调整时，可以从`toc-temp.md`复制新的目录内容到`toc.md`进行手工调整

## build.ps1

### build.ps1说明

- 根据配置文件的`build`-`content`配置，找到并生成所有栏目
- 覆盖原则同上