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

实体类自带一个根据主键查询的方法，不论主键字段名以及类型，即`FindByKey`方法

## 缓存

- [单体缓存](../cache/single-cache.html)适用于需要单行数据查询的场合，比如用户表等。
- [实体缓存](../cache/entity-cache.html)适用于系统参数表、栏目分类表等。

## 复杂查询

```csharp
        /// <summary>高级查询</summary>
        /// <param name="key"></param>
        /// <param name="roleId"></param>
        /// <param name="isEnable"></param>
        /// <param name="start"></param>
        /// <param name="end"></param>
        /// <param name="p"></param>
        /// <returns></returns>
        public static IList<TEntity> Search(String key, Int32 roleId, Boolean? isEnable, DateTime start, DateTime end, Pager p)
        {
            var exp = _.LastLogin.Between(start, end);
            if (roleId > 0) exp &= _.RoleID == roleId | _.RoleIDs.Contains("," + roleId + ",");
            if (isEnable != null) exp &= _.Enable == isEnable;

            // 先精确查询，再模糊
            if (!key.IsNullOrEmpty())
            {
                var list = FindAll(exp & (_.Code == key | _.Name == key | _.DisplayName == key | _.Mail == key | _.Mobile == key), p);
                if (list.Count > 0) return list;

                exp &= (_.Code.Contains(key) | _.Name.Contains(key) | _.DisplayName.Contains(key) | _.Mail.Contains(key) | _.Mobile.Contains(key));

                // exp &= SearchWhereByKeys(key); 生成所有字段的模糊查询
            }

            return FindAll(exp, p);
        }
```

以上例子来自XCode自带的[用户业务类](https://github.com/NewLifeX/X/blob/master/XCode/Membership/%E7%94%A8%E6%88%B7.Biz.cs#L286)的搜索方法。主要关注`FindAll`方法，以及exp参数。

由[Field](https://github.com/NewLifeX/X/blob/master/XCode/Configuration/FieldItem.cs#L506)生成表达式[WhereExpression](https://github.com/NewLifeX/X/blob/master/XCode/Model/WhereExpression.cs)，最后实际生成sql就是where后面其中一段，分页可由[Pager](https://github.com/NewLifeX/X/blob/master/NewLife.Core/Web/Pager.cs)提供。

WhereExpression部分演示

```csharp
            var exp = new WhereExpression();
            exp &= _.Did.In(dids);

            // 以下仅为演示，Field（继承自FieldItem）重载了==、!=、>、<、>=、<=等运算符
            if (userid > 0) exp &= _.OperatorID == userid;
            if (isSign != null) exp &= _.IsSign == isSign.Value;
            exp &= _.OccurTime.Between(start, end); // 大于等于start，小于end，当start/end大于MinValue时有效
```

模糊搜索可通过[SearchWhereByKey](https://github.com/NewLifeX/X/blob/master/XCode/Entity/Entity.cs#L1028)方法生成指定字段的模糊查找语句

```csharp
exp &= SearchWhereByKeys(key); 生成所有字段的模糊查询
```

## 多表查询

- “不支持”多表查询！为何不支持要加双引号？那是因为XCode实际上支持多表查询，只是用起来非常复杂，也不容易讲清楚，会严重影响基本功能的学习理解。
- 不支持多表查询，所以不是万能的，仅仅支持单表，所以是简单的，增删改查都得到了直接支持，完全能解决80%-90%以上的场景，所以是实用的。
- 另外10%-20%，还有什么语法比sql更简洁?
- 通过以下语句获取DataSet

```csharp
DAL dal=DAL.Create("Common");
DataSet ds=dal.Select("select * from table1");
```