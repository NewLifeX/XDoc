# 模型文件

模型文件配合[tt文件](./tt-file.html)完成代码生成部分功能，一个Table元素生成一个实体类，对应一个表。模型文件可从现有数据库生成，也可手动编写。

```xml
<?xml version="1.0" encoding="utf-8"?>
<Tables Version="9.9.6881.41313" NameSpace="XCode.Membership" ConnName="Membership" BaseClass="Entity"
        xmlns="http://www.newlifex.com/ModelSchema.xsd"
        xmlns:xs="http://www.w3.org/2001/XMLSchema-instance"
        xs:schemaLocation="http://www.newlifex.com https://raw.githubusercontent.com/NewLifeX/X/master/XCode/ModelSchema.xsd" >
  <Table Name="Student" Description="学生" >
    <Columns>
      <Column Name="ID" DataType="Int32" Identity="true" PrimaryKey="true" Description="编号" />
      <Column Name="Name" DataType="String" Master="True" Nullable="false" Description="名称。登录用户名" />
      <Column Name="DisplayName" DataType="String" Description="昵称" />
      <Column Name="Sex" DataType="Int32" Description="性别。未知、男、女" Type="SexKinds" />
    </Columns>
    <Indexes>
      <Index Columns="Name" Unique="true" />
    </Indexes>
  </Table>
</Tables>
```

上面就是一个简单的例子，模型文件基本结构。`xmlns`、`xmlns:xs`、`xs:schemaLocation`这些东西给该模型文件添加了架构，上面的元素就会有提示

![ ](/images/xcode/modeling/modeling-file/1.png)

## 新数据库

- 以上是个简单的例子，复制到模型文件，然后调用[XCode.Code.EntityBuilder.Build](https://github.com/NewLifeX/X/blob/master/XCode/Code/EntityBuilder.cs#L48)方法，根据该模型文件生成实体类。也可使用[tt文件](./tt-file.html)生成，本质上都是调用该方法生成实体类。
- 生成实体类之后包含在项目中即可使用

```csharp
    class Program
    {
        static void Main(string[] args)
        {
            XTrace.UseConsole();

            var student = new Student
            {
                Name = Rand.NextString(5),
                Sex = SexKinds.男,
                DisplayName = Rand.NextString(6),
            };
            student.Insert();

            Console.WriteLine("ID：{0}",student.ID);
            Console.WriteLine(student.ToJson());
            Console.ReadKey();
        }
    }
```

新建控制台项目，运行以上代码，即可自动创建sqlite数据库，并插入一条数据。

## 使用现有数据库

使用[码神工具](https://github.com/NewLifeX/XCoder)连接数据库并生成实体类

![ ](/images/xcode/modeling/modeling-file/2.png)

## 索引

`Indexes`元素代表的是索引，XCode会自动生成对应索引以及相应拓展方法。

## 结构

- 生成的实体类文件分两部分，一部分是基本数据，值得注意的是`BindTable`特性

```csharp
    [BindTable("Student", Description = "学生", ConnName = "Membership", DbType = DatabaseType.None)]
    public partial class Student : IStudent
    {}
```

- 其中ConnName对应的是数据库字符串连接名，实体类的所有数据库操作，将发生在该连接名指定的数据库连接上。DbType对应的是数据库类型，仅用于记录实体类由何种类型数据库生成，当且仅当目标数据库同为该数据库类型时，采用实体属性信息上的RawType作为反向工程的目标字段类型，以期获得开发和生产的最佳兼容。
- 另一部分是带有`Biz`的实体类，用来写业务，每次生成新的实体类，该文件不会被覆盖，仅在第一次生成。

## 分组

如果模型文件过多，全部放一起太乱，可以新建文件夹，复制一份tt文件和XML模型文件到新的文件夹即可