# 入门

### 打开Visual Studio，新建一个控制台应用

### 使用NuGet安装到你的项目

PM> Install-Package NewLife.XCode

### 编写一个简单Xml模型（如果你已有现成的数据库，则可以使用XCoder.exe工具生成）
```xml
<?xml version="1.0" encoding="utf-8"?>
<Tables Version="9.6.6644.19804" Output="MyEntity" NameSpace="Model" BaseClass="Entity" ConnName="DB">
  <Table Name="UserInfo" Description="用户信息">
    <Columns>
      <Column Name="UserId" DataType="Int32" Identity="True" PrimaryKey="True" Description="会员id" />
      <Column Name="UserName" DataType="String" Nullable="False" Description="会员名称" />
      <Column Name="Password" DataType="String" Nullable="False" Description="会员密码" />
      <Column Name="Age" DataType="Int32" Description="会员年龄" />
    </Columns>
  </Table>
</Tables>
```
这是一个简单的XCode映射模型，跟hibernate原理相似，依靠这个模型，我们可以自动生成我们想要的数据库而不用写任何sql语句，所以也不用打开你的Sqlserver管理工具、navicat、mysqladminister等等
，这个xml会自动帮你生成，一切都来得如此简单快捷。
### 生成C#模型
* 右击 生成实体类.tt 文件,选择“运行自定义工具”，单击右上角的“显示所有文件”，这时你会看到
生成一个MyEntity文件目录(上面的XML中 Output="MyEntity" 所指定的文件夹)，目录包含了两个文件：用户信息.Biz.cs、用户信息.cs，然后右击文件夹，选择“包括在项目中”，我们可以大概预览一下里面的
代码。作为一个orm组件，你完全不用关心里面代码的写法，我们只需会用就行了。

### 使用XCode实现简单的增删改查
* Program.cs文件最上面
```
using XCode.Code;
```
不然会使用不了Save、Update、Delete等扩展方法。

* 新增一条数据。注：这里没有指定数据库，所以XCode默认的是sqlite数据库
```csharp
            var user = new UserInfo();
            user.UserName = "张三";
            user.Password = "123456";
            user.Age = 18;
            user.Insert();//user.Save()等效

            Console.WriteLine("插入一条新数据，用户id为：" + user.UserId);
```
* 修改一条数据
```csharp
            var user = new UserInfo();// var user = UserInfo.FindByUserId(1);
            user.UserId = 1;
            user.UserName = "张三";
            user.Password = "123456";
            user.Age = 19;
            user.Update();//user.Save()等效

            user = UserInfo.FindByUserId(1);
            Console.WriteLine($"用户ID={user.UserId}已修改岁数，岁数为：{user.Age}");
```
* 删除一条数据
```csharp
            var user = new UserInfo();// var user = UserInfo.FindByUserId(1);
            user.UserId = 1;
            user.Delete();

            user = UserInfo.FindByUserId(1);
            Console.WriteLine("用户" + (user == null ? "已删除" : "还存在"));
```
* 查询数据，查询是一个十分复杂的需求，这里只举一些简单的例子，如果你想学更高级更复杂的查询，可以浏览页面底部的链接
```csharp
            //根据UserId查询用户信息
            var userId = 2;
            var user = UserInfo.FindByUserId(userId);
            Console.WriteLine($"ID为{user.UserId}用户姓名为：{user.UserName}");

            //根据用户名称查询
            var userList= UserInfo.FindAll(UserInfo._.UserName, "张三");
            Console.WriteLine($"查询符合姓名为张三的记录有{userList.Count}");

            //多复合条件查询
            userList = UserInfo.FindAll(UserInfo._.UserName == "张三" & UserInfo._.Age == 19);
            Console.WriteLine($"查询符合姓名为张三年龄为19的记录有{userList.Count}");

```

## 一些高级的用法
* 更新（注：XCode是使用缓存，所以有些高级方法会绕过缓存直接更新数据库，这样会导致缓存数据与数据库的数据不一致。）
	更新某些字段。
```csharp
            UserInfo.Update(UserInfo._.UserName == "李四" & UserInfo._.Age == 18, UserInfo._.UserId == 1);
            // 相当于Update UserInfo Set UserName='李四' And Age=18 Where UserId=1
            // 绕过了缓存，不推荐这种写法。建议先查出来对象，然后修改并Update回去
```

复杂的查询语句

```csharp
            var userList = UserInfo.FindAll(UserInfo._.UserName == "张三" & UserInfo._.Age == 19, UserInfo._.UserName.Desc(), string.Join(",", UserInfo._.UserName, UserInfo._.Age), 0, 0);
            // 相当于Select UserName,Age From UserInfo Where UserName='张三' And Age=19 Order By  UserName desc
```

带分页排序的复杂查询  
一般写在实体类业务文件（.Biz.cs）里面
```csharp
public static IList<UserInfo> Search(String name, Int32 age, Pager p)
{
    // 多条件复杂查询
    var exp = new WhereExpression();
    if(!name.IsNullOrEmpty()) exp &= _.UserName == name;
    if(age > 0) exp &= _.Age == age;

    return FindAll(exp, p);
}

void Test()
{
    // 默认第一页，每页20行。魔方NewLife.Cube自动从页面Request获取以下参数
    var p = new Pager();
    p.PageIndex = 3;
    p.PageSize = 10;
    p.Sort = UserInfo.__.Age;
    p.Desc = true;

    // 需要总记录数来分页，FindAll后p.TotalCount有总记录数，用于计算页数PageCount
    p.RetrieveTotalCount = true;

    // 相当于Select * From UserInfo Where UserName='张三' And Age=19 Order By Age Desc limit 20, 10
    var list = UserInfo.Search("张三", 19, p);
}
```
以上的分页有缺点，就是只应用单字段排序

复合排序的分页查询语句

```csharp
    var pageIndex = 2;//第二页
    var pageSize = 10;//每页十行

    var userList = UserInfo.FindAll(UserInfo._.UserName == "张三" & UserInfo._.Age == 19, " UserName desc,Age asc", string.Join(",", UserInfo._.UserName, UserInfo._.Age), (pageIndex - 1) * pageSize, pageSize);
    //相当于Select UserName,Age From UserInfo Where UserName='张三' And Age=19 Order By  UserName desc,Age asc limit 10, 10
```

## 更多
因为时间有限，只写了一些简单的例子，这个markdown会持续更新，敬请期待

## 相关教程
* 初级
[ORM组件XCode（简介）](http://www.cnblogs.com/nnhy/archive/2010/09/13/1824666.html)  
[ORM组件XCode（动手）](http://www.cnblogs.com/nnhy/archive/2010/09/15/1826602.html)  
---
* 系列
[NewLife.XCode 上手指南](http://www.cnblogs.com/JangoJing/archive/2012/07/26/2610034.html)  
[NewLife.XCode 上手指南(二) 反向工程使用举例](http://www.cnblogs.com/JangoJing/archive/2012/07/26/2610368.html)  
[NewLife.Xcode 上手指南(三) 扩展属性的使用](http://www.cnblogs.com/JangoJing/archive/2012/07/31/2616238.html)  
[NewLife.XCode 上手指南(四) 级联操作](http://www.cnblogs.com/JangoJing/archive/2012/08/02/2619311.html)  
[NewLife.XCode 上手指南(五) 复杂查询](http://www.cnblogs.com/JangoJing/archive/2012/08/17/2644124.html)  
---
* 进阶
> [充血模型的ORM能做什么？——ORM组件XCode（十八般武艺）](http://www.cnblogs.com/nnhy/archive/2010/09/25/1834320.html)  
>[NewLife.XCode中如何借助分部抽象多个具有很多共同字段的实体类](http://www.cnblogs.com/nnhy/archive/2012/04/27/2473052.html)  
>[ORM组件XCode（撬动千万级数据）](http://www.cnblogs.com/nnhy/archive/2010/09/15/1827477.html)  
>[ORM组件XCode（动手）](http://www.cnblogs.com/nnhy/archive/2010/09/15/1826602.html)  



 
#### 新生命开发团队  
网站：http://www.NewLifeX.com  
QQ群：1600800  
