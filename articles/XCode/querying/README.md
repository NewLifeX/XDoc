# 查询数据

- 本节介绍XCode查询数据的各种方法

```csharp
            var id = 1;

            // 根据主键查找
            var student = Student.FindByKey(id);
            Console.WriteLine("FindByKey：{0}", student.Name);
            Console.WriteLine();


            // 带条件查找
            student = Student.Find(Student._.ID == id & Student._.Sex == SexKinds.男);
            Console.WriteLine("Find：{0}", student.Name);
            Console.WriteLine();

            // 单对象缓存查找
            student = Student.Meta.SingleCache[id];
            Console.WriteLine("SingleCache：{0}", student.Name);
            Console.WriteLine();

            // 带分页查找
            var page = new PageParameter();
            page.Desc = true;
            page.Sort = Student._.ID;
            page.PageIndex = 1;
            page.PageSize = 5;
            student = Student.FindAll(Student._.ID == id, page).FirstOrDefault();
            Console.WriteLine("FindAll：{0}", student?.Name);
            Console.WriteLine();

            // 手写SQL查找
            student = Student.FindAll("Select * From  Student").FirstOrDefault();
            Console.WriteLine("FindAll SQL：{0}", student?.Name);
            Console.WriteLine();

            // 实体缓存查找
            student = Student.Meta.Cache.Entities.FindAll(f=>f.ID == id).FirstOrDefault();
            Console.WriteLine("FindAll Cache：{0}", student?.Name);
            Console.WriteLine();
```

## 根据主键查询

实体类自带一个根据主键查询的方法，不论主键字段名以及类型

## 缓存

- [单体缓存](../cache/single-cache.html)适用于需要单行数据查询的场合，比如用户表等。
- [实体缓存](../cache/entity-cache.html)适用于系统参数表、栏目分类表等。