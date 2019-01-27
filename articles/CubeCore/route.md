# 路由

## 方法跳转到另一个控制器方法

- asp net core 中多了 page 类型，可能因此变得有点跟 asp net mvc 不一样，`RedirectToAction`方法跳转到控制器，可能会生成不正确的路由，经过查看源码和测试发现，最后生成的路由带不带区域名取决于第一个注册的路由, 比如

```csharp
return RedirectToAction("Login", "User", new
{
    // area = ""
});
```

- 第一个注册的路由如果是区域路由，area 默认为`Admin`，那么上述结果最终跳转的路由是`/Admin/User/Login`，区域被默认带上
- 反之，第一个注册的路由不带区域名，如果上述方法带了 area 参数，最终得到`/User/Login?area=Admin`
- **解决方法**：采用`RedirectToRoute`，指定路由名称和参数，让人一看代码就知道会跳转到哪里，拒绝采用默认值

```csharp
return RedirectToRoute("CubeAreas", new
{
    area = "Admin",
    controller = "User",
    action = "Login"
});
```
