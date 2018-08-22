(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{193:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"魔方core说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#魔方core说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 魔方core说明")]),t._v(" "),a("h2",{attrs:{id:"菜单注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#菜单注册","aria-hidden":"true"}},[t._v("#")]),t._v(" 菜单注册")]),t._v(" "),a("h3",{attrs:{id:"区域使用areabasex区域特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区域使用areabasex区域特性","aria-hidden":"true"}},[t._v("#")]),t._v(" 区域使用AreaBaseX区域特性")]),t._v(" "),a("ul",[a("li",[t._v("自定义一个继承AreaBaseX的区域特性类，命名为“区域名”+“Area”")]),t._v(" "),a("li",[t._v("继承构造函数base(areaName)")]),t._v(" "),a("li",[t._v("定义的新区域特性要声明一个静态构造函数，调用RegisterArea静态方法")]),t._v(" "),a("li",[t._v("示例")])]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("/// <summary>权限管理区域注册</summary>")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token class-name"}},[t._v("DisplayName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"系统管理"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AdminArea")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AreaBaseX")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" AreaName "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("nameof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AdminArea"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("TrimEnd")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Area"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("/// <inheritdoc />")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("AdminArea")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("base")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AreaName"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("AdminArea")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token generic-method"}},[a("span",{attrs:{class:"token function"}},[t._v("RegisterArea")]),a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token class-name"}},[t._v("AdminArea")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("如果不使用AreaBaseX区域特性路由，添加权限特性EntityAuthorizeAttribute，会自动添加此菜单")])]),t._v(" "),a("li",[a("p",[t._v("在区域控制器加上上面区域特性类")])])]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token class-name"}},[t._v("AdminArea")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("UserController")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EntityController")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("UserX"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"控制器设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制器设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 控制器设置")]),t._v(" "),a("ul",[a("li",[t._v("如果控制器继承自魔方的功能控制器，那么会默认菜单相关选项")]),t._v(" "),a("li",[t._v("如果需要自定义，则需要继承自"),a("code",[t._v("ControllerBaseX")])]),t._v(" "),a("li",[t._v("重载"),a("code",[t._v("ScanActionMenu")]),t._v("方法，将菜单设置为可见"),a("code",[t._v("menu.Visible = true")])]),t._v(" "),a("li",[t._v("声明一个静态变量设置菜单顺序"),a("code",[t._v("protected static Int32 MenuOrder { get; set; } = 100;")])]),t._v(" "),a("li",[t._v("示例")])]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token class-name"}},[t._v("ApiArea")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token class-name"}},[t._v("DisplayName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"SwaggerApi"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token class-name"}},[t._v("Description")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"SwaggerApi"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SwaggerController")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ControllerBaseX")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Int32")]),t._v(" MenuOrder "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" IDictionary"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("MethodInfo"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ScanActionMenu")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token class-name"}},[t._v("IMenu")]),t._v(" menu"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 设置显示名")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("menu"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DisplayName"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("IsNullOrEmpty")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                menu"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DisplayName "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SwaggerController"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token generic-method"}},[a("span",{attrs:{class:"token function"}},[t._v("GetCustomAttribute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token class-name"}},[t._v("DisplayNameAttribute")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DisplayName"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                menu"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Visible "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dic "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("base")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("ScanActionMenu")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("menu"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dic"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// GET: Swagger")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token class-name"}},[t._v("EntityAuthorize")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PermissionFlags"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Detail"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ActionResult")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Index")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("View")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("或者")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token class-name"}},[t._v("ApiArea")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("HomeController")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EntityController")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("UserX"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ActionResult")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Index")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token class-name"}},[t._v("Pager")]),t._v(" p "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("View")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视图","aria-hidden":"true"}},[t._v("#")]),t._v(" 视图")]),t._v(" "),a("h3",{attrs:{id:"覆盖优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#覆盖优先级","aria-hidden":"true"}},[t._v("#")]),t._v(" 覆盖优先级")]),t._v(" "),a("ul",[a("li",[t._v("如果项目添加并引用Razor类库，那么它的优先级仅次于项目自身的视图")]),t._v(" "),a("li",[t._v("其次，要引用nuget包里面的视图或者直接引用一个视图dll，需要手动进行注册，否则不会被出现在系统的查找范围")]),t._v(" "),a("li",[t._v("可以同时存在多个视图资源，通过这个优先级选择对应视图，请查看下面更多说明")]),t._v(" "),a("li",[t._v("魔方的视图结构请"),a("a",{attrs:{href:"%E6%9F%A5%E7%9C%8B%E8%BF%99%E9%87%8C%E8%BF%98%E4%BB%80%E4%B9%88%E4%B9%9F%E6%B2%A1%E6%9C%89"}},[t._v("查看这里")])])]),t._v(" "),a("h3",{attrs:{id:"注册方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 注册方法")]),t._v(" "),a("ul",[a("li",[t._v("可通过"),a("code",[t._v("typeof(Areas_Admin_Views_Index_Index).Assembly.FullName")]),t._v("这样子的名称获得视图所在程序集名称，注册方法如下")])]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("    services"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("AddCustomApplicationParts")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("asmNaneList "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        asmNaneList"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Areas_Admin_Views_Index_Index"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Assembly"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FullName"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("如果你想进行模块化开发，加载多个包含控制器的程序集，也是使用上面的方法进行注册")]),t._v(" "),a("li",[t._v("但请注意控制名不要重复，否则你需要在对"),a("a",{attrs:{href:"%E8%BF%99%E9%83%A8%E5%88%86%E8%BF%98%E6%B2%A1%E6%9C%89%E8%AF%B4%E6%98%8E"}},[t._v("路由命名空间优先级")]),t._v("进行设置")])]),t._v(" "),a("h3",{attrs:{id:"更多说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 更多说明")]),t._v(" "),a("ul",[a("li",[t._v("所有编译之后的视图程序集，生成的类名和命名空间都是一样的，所以如果同时引用多个含有视图的nuget包，编译器会"),a("code",[t._v("typeof(Areas_Admin_Views_Index_Index)")]),t._v("在这里报错")]),t._v(" "),a("li",[t._v("那为什么Razor类库和项目本身都存在同样名字的视图，又不会报错呢？因为它们都还是源代码，还没编译啊。")]),t._v(" "),a("li",[t._v("core mvc 加载项目本身的控制器和视图的方法"),a("code",[t._v("ApplicationPartManager.PopulateDefaultParts")]),t._v("是内部的，不能调用，里面会根据引入的外部控制器所在程序集（比如你的项目引用了A程序集），寻找所有依赖于A程序集的程序集（比如A程序集对应的"),a("code",[t._v("A.Views.dll")]),t._v("），一起加载进系统成为系统的一部分。魔方提供"),a("code",[t._v("AddCustomApplicationParts")]),t._v("拓展方法自定义加载程序集，即使"),a("code",[t._v("A.Views.dll")]),t._v("依赖于A,你也可以选择不加载"),a("code",[t._v("A.Views.dll")]),t._v("，通过自己实现自己视图来呈现页面，给你更多的选择！")])])])}],!1,null,null,null);s.default=e.exports}}]);