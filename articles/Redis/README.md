# NewLife.Redis 介绍与使用

- Redis入门，基础知识与使用，使用技巧，100亿数据使用经验技巧分享
- [国内地址](http://www.redis.cn)，[国外地址](https://redis.io/)
- [Redis相关文章列表](http://www.redis.cn/articles.html)
- [Redis命令大全](http://www.redis.cn/commands.html)
- [Redis FAQ](http://www.redis.cn/topics/faq.html)
- [文档项目地址](https://github.com/antirez/redis-doc/)（建议看原版）
- Redis安装包：
  - 项目用到的包： http://x.newlifex.com/Redis-x64-3.2.100.msi
  - win安装包：https://github.com/MicrosoftArchive/redis/releases
  - 源码包：http://www.redis.cn/download.html

## 基础知识准备

- Redis的意思是**RE**mote **DI**ctionary **S**erver，远程字典服务。
- Redis 是一个开源（BSD许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件。
- Redis与其他Key-Value存储有何不同
  - Redis有着更为复杂的数据结构并且提供对他们的原子性操作，这是一个不同于其他数据库的进化路径。Redis的数据类型都是基于基本数据结构的同时对程序员透明，无需进行额外的抽象。
  - Redis运行在内存中但是可以持久化到磁盘，所以在对不同数据集进行高速读写时需要权衡内存，应为数据量不能大于硬件内存。在内存数据库方面的另一个优点是， 相比在磁盘上相同的复杂的数据结构，在内存中操作起来非常简单，这样Redis可以做很多内部复杂性很强的事情。 同时，在磁盘格式方面他们是紧凑的以追加的方式产生的，因为他们并不需要进行随机访问。
- Redis其实很简单，最主要的操作是`Get`和`Set`，操作的数据就是`Key-Value`键值对，键为字符串，值是基础数据类型、复杂数据类型

### 数据类型

- [类型介绍](https://github.com/antirez/redis-doc/blob/master/topics/data-types.md)
- [详细介绍](https://github.com/antirez/redis-doc/blob/master/topics/data-types-intro.md)

#### 字符串（Strings）

- 字符串是一种最基本的Redis值类型。

#### 列表（Lists）

- Redis列表是简单的字符串列表，按照插入顺序排序。

#### 集合（Sets）

- Redis集合是一个无序的字符串合集。

#### 哈希（Hashes）

- Redis Hashes是字符串字段和字符串值之间的映射，因此它们是表示对象的完美数据类型（例如，具有多个字段的用户，如姓名，姓氏，年龄等）。

#### 有序集合（Sorted sets）

- Redis有序集合和Redis集合类似，是非重复的字符串集合。不同之处在于，排序集的每个成员都与得分相关联，用于从最小得分到最高得分排序。虽然成员是独一无二的，但可以重复分数。

#### 其它类型

- [戳这里查看更多类型](https://github.com/antirez/redis-doc/blob/master/topics/data-types-intro.md)

### 命令

- 命令大全，方便查询： http://www.redis.cn/commands/
- 向Redis服务端发送命令，对数据进行操作，客户端只需要发送命令，接收结果

#### 设置 SET

- `SET key value [EX seconds] [PX milliseconds] [NX|XX]`
  - EX seconds – 设置键key的过期时间，单位时秒
  - PX milliseconds – 设置键key的过期时间，单位时毫秒
  - NX – 只有键key不存在的时候才会设置key的值
  - XX – 只有键key存在的时候才会设置key的值

#### 获取 GET

- `GET key`

#### 删除 DEL

- `DEL key [key ...]`

#### 搜索 KEYS

- `KEYS pattern`

## NewLife.Redis

- 有了以上知识，那么你就可以很容易地理解NewLife.Redis了
- NewLife.Redis实际上就是实现了常用数据类型，发送命令给Redis服务端对数据进行操作

### 介绍

- NewLife.Redis是一个Redis客户端组件，以高性能处理大数据实时计算为目标。
- Redis协议基础实现Redis/RedisClient位于[X组件](https://github.com/NewLifeX/X/blob/master/NewLife.Core/Caching/Redis.cs)，包含基础字符串操作。完整实现由独立开源项目[NewLife.Redis](https://github.com/NewLifeX/NewLife.Redis)提供。`NewLife.Redis`为扩展实现，主要增加列表结构、哈希结构、队列等高级功能。
- 采取连接池加同步阻塞架构，具有超低延迟（200~600us）以及超高吞吐量的特点。在物流行业大数据实时计算中广泛应有，经过日均100亿次调用量验证。

### 安装

- [下载安装](http://x.newlifex.com/Redis-x64-3.2.100.msi)，默认为6379
> 一般安装实例在服务器，建议端口号从6001开始，一路排下去，方便计数。
- 安装完打开命令行窗口，输入`redis-cli`回车，即可进入redis环境，输入命令可进行Redis操作，如果输入正确的命令，它会自动出现提示，空格后输入下一个参数即可

```powershell
PS C:\Users\12504> redis-cli
127.0.0.1:6379> KEYS *
(empty list or set)
127.0.0.1:6379> KEYS *
(empty list or set)
127.0.0.1:6379>
```

### 连接

- 连接Redis可以设置密码，有两种写法，可以不用密码和端口
- 第二个参数是数据库，0-15号，共16个，不写默认是0号

```csharp
// 实例化Redis，默认端口6379可以省略，密码有两种写法
var ic1 = Redis.Create("127.0.0.1", 7);
var ic2 = Redis.Create("pass@127.0.0.1:6379", 7);
var ic3 = Redis.Create("server=127.0.0.1:6379;password=pass", 7);
ic1.Log = XTrace.Log; // 调试日志。正式使用时注释掉
```

### 基础操作

- 使用之前，进行注册，将FullRedis注册到对象容器，此对象容器2010年就已经存在了。不注册将使用基础Redis，无法使用高级功能
- 查看说明：使用了日志输出，`=>`代表执行结果，`=>`的上一行代表发送到Redis执行的命令。所有时间开头、数字、字母，比如`22:32:33.354  1 N - 为NewLife.Caching.Redis自动注册`这种格式都是X组件的日志输出格式。

```csharp
// 激活FullRedis，否则Redis.Create会得到默认的Redis对象
FullRedis.Register();
```

#### 简单操作

执行

```csharp
XTrace.UseConsole(); // 将操作日志重定向到控制台

// 激活FullRedis，否则Redis.Create会得到默认的Redis对象
FullRedis.Register();

var ic = Redis.Create("127.0.0.1:6379", 3);
ic.Log = XTrace.Log;

// 简单操作
Console.WriteLine("共有缓存对象 {0} 个", ic.Count);

ic.Set("name", "大石头");
Console.WriteLine(ic.Get<String>("name"));

ic.Set("time", DateTime.Now, 1);
Console.WriteLine(ic.Get<DateTime>("time").ToFullString());
Thread.Sleep(1100);
Console.WriteLine(ic.Get<DateTime>("time").ToFullString());
```

输出

```csharp
22:32:33.354  1 N - 为NewLife.Caching.Redis自动注册NewLife.Caching.FullRedis
22:32:33.441  1 N - SELECT 3
22:32:33.444  1 N - => OK
22:32:33.446  1 N - FullRedisPool.Init NewLife.Caching.RedisClient Min=2 Max=1000 IdleTime=20s AllIdleTime=120s
22:32:33.446  1 N - FullRedisPool.Acquire Create Free=0 Busy=1
22:32:33.447  1 N - DBSIZE
22:32:33.449  1 N - => 5
共有缓存对象 5 个
22:32:33.456  1 N - SET name 大石头
22:32:33.458  1 N - => OK
22:32:33.459  1 N - GET name
22:32:33.463  1 N - => 大石头
大石头
22:32:33.467  1 N - SETEX time 1 2018-11-12 22:32:33
22:32:33.470  1 N - => OK
22:32:33.472  1 N - GET time
22:32:33.474  1 N - => 2018-11-12 22:32:33
2018-11-12 22:32:33
22:32:34.584  1 N - GET time
0001-01-01 00:00:00
```

- Set方法第一个参数是key，第二个参数是value，可以是任意类型，第三个是过期时间
> 字符串和字节数组是特殊处理，原封不动传到Redis保存。其它复杂类型默认进行Json序列化，传过去的是Json。所以取回来的时候根据类型处理，字符串或字节数据原样返回，其它复杂类型进行Json反序列化处理。

#### 保存对象

执行

```csharp
    class Program
    {
        static void Main(String[] args)
        {
            XTrace.UseConsole();

            // 激活FullRedis，否则Redis.Create会得到默认的Redis对象
            FullRedis.Register();

            Test5();

            Console.ReadKey();
        }
        class User
        {
            public String Name { get; set; }
            public DateTime CreateTime { get; set; }
        }
        static void Test5()
        {
            var user = new User { Name = "NewLife", CreateTime = DateTime.Now };
            var rds = Redis.Create("127.0.0.1",2);
            rds.Log = XTrace.Log;
            rds.Set("user", user, 3600);
            var user2 = rds.Get<User>("user");
            XTrace.WriteLine("Json: {0}", user2.ToJson());
            XTrace.WriteLine("Json: {0}", rds.Get<String>("user"));
            if (rds.ContainsKey("user")) XTrace.WriteLine("存在！");
            rds.Remove("user");
        }
    }
```

输出

```csharp
23:01:36.447  1 N - 为NewLife.Caching.Redis自动注册NewLife.Caching.FullRedis
23:01:36.531  1 N - SELECT 2
23:01:36.534  1 N - => OK
23:01:36.536  1 N - FullRedisPool.Init NewLife.Caching.RedisClient Min=2 Max=1000 IdleTime=20s AllIdleTime=120s
23:01:36.536  1 N - FullRedisPool.Acquire Create Free=0 Busy=1
23:01:36.540  1 N - SETEX user 3600 [53]
23:01:36.544  1 N - => OK
23:01:36.546  1 N - GET user
23:01:36.550  1 N - => [53]
23:01:36.556  1 N - Json: {"Name":"NewLife","CreateTime":"2018-11-12 23:01:36"}
23:01:36.556  1 N - GET user
23:01:36.559  1 N - => [53]
23:01:36.560  1 N - Json: {"Name":"NewLife","CreateTime":"2018-11-12 23:01:36"}
23:01:36.561  1 N - EXISTS user
23:01:36.563  1 N - => 1
23:01:36.564  1 N - 存在！
23:01:36.565  1 N - DEL user
23:01:36.568  1 N - => 1
```

- 保存复杂对象时，默认采用Json序列化，所以上面可以按字符串把结果取回来，发现正是Json字符串。Redis的strings，实质上就是带有长度前缀的二进制数据，[53]表示一段53字节长度的二进制数据。
- 所以这个Set操作，在那边对应的数据类型都是strings.