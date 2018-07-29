# 魔方core说明

## 菜单注册

### 区域使用AreaBaseX区域特性

- 自定义一个继承AreaBaseX的区域特性类，命名为“区域名”+“Area”
- 继承构造函数base(areaName)
- 定义的新区域特性要声明一个静态构造函数，调用RegisterArea静态方法
- 示例

```csharp
    /// <summary>权限管理区域注册</summary>
    [DisplayName("系统管理")]
    public class AdminArea : AreaBaseX
    {
        public static string AreaName => nameof(AdminArea).TrimEnd("Area");

        /// <inheritdoc />
        public AdminArea() : base(AreaName)
        {

        }

        static AdminArea()
        {
            RegisterArea<AdminArea>();
        }
    }
```

- 如果不使用AreaBaseX区域特性路由，添加权限特性EntityAuthorizeAttribute，会自动添加此菜单

- 在区域控制器加上上面区域特性类

```csharp
[AdminArea]
 public class UserController : EntityController<UserX>
{

}
```

### 控制器设置

- 如果控制器继承自魔方的功能控制器，那么会默认菜单相关选项
- 如果需要自定义，则需要继承自`ControllerBaseX`
- 重载`ScanActionMenu`方法，将菜单设置为可见`menu.Visible = true`
- 声明一个静态变量设置菜单顺序`protected static Int32 MenuOrder { get; set; } = 100;`
- 示例

```csharp
    [ApiArea]
    [DisplayName("SwaggerApi")]
    [Description("SwaggerApi")]
    public class SwaggerController : ControllerBaseX
    {

        protected static Int32 MenuOrder { get; set; } = 100;

        protected override IDictionary<MethodInfo, int> ScanActionMenu(IMenu menu)
        {
            // 设置显示名
            if (menu.DisplayName.IsNullOrEmpty())
            {
                menu.DisplayName = typeof(SwaggerController).GetCustomAttribute<DisplayNameAttribute>().DisplayName;
                menu.Visible = true;
            }

            var dic = base.ScanActionMenu(menu);

            return dic;
        }

        // GET: Swagger
        [EntityAuthorize(PermissionFlags.Detail)]
        public ActionResult Index()
        {
            return View();
        }
    }
```

或者

```csharp
    [ApiArea]
    public class HomeController : EntityController<UserX>
    {
        public override ActionResult Index(Pager p = null)
        {
            return View();
        }
    }
```

## 视图

### 覆盖优先级

- 如果项目添加并引用Razor类库，那么它的优先级仅次于项目自身的视图
- 其次，要引用nuget包里面的视图或者直接引用一个视图dll，需要手动进行注册，否则不会被出现在系统的查找范围
- 可以同时存在多个视图资源，通过这个优先级选择对应视图，请查看下面更多说明
- 魔方的视图结构请[查看这里](查看这里还什么也没有)

### 注册方法

- 可通过`typeof(Areas_Admin_Views_Index_Index).Assembly.FullName`这样子的名称获得视图所在程序集名称，注册方法如下

```csharp
    services.AddCustomApplicationParts(asmNaneList =>
    {
        asmNaneList.Add(typeof(Areas_Admin_Views_Index_Index).Assembly.FullName);
    });
```

- 如果你想进行模块化开发，加载多个包含控制器的程序集，也是使用上面的方法进行注册
- 但请注意控制名不要重复，否则你需要在对[路由命名空间优先级](这部分还没有说明)进行设置

### 更多说明

- 所有编译之后的视图程序集，生成的类名和命名空间都是一样的，所以如果同时引用多个含有视图的nuget包，编译器会`typeof(Areas_Admin_Views_Index_Index)`在这里报错
- 那为什么Razor类库和项目本身都存在同样名字的视图，又不会报错呢？因为它们都还是源代码，还没编译啊。
- core mvc 加载项目本身的控制器和视图的方法`ApplicationPartManager.PopulateDefaultParts`是内部的，不能调用，里面会根据引入的外部控制器所在程序集（比如你的项目引用了A程序集），寻找所有依赖于A程序集的程序集（比如A程序集对应的`A.Views.dll`），一起加载进系统成为系统的一部分。魔方提供`AddCustomApplicationParts`拓展方法自定义加载程序集，即使`A.Views.dll`依赖于A,你也可以选择不加载`A.Views.dll`，通过自己实现自己视图来呈现页面，给你更多的选择！