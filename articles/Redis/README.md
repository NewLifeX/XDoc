# NewLife.Redis 100亿数据使用经验技巧分享

- 本文包括Redis入门，基础知识，NewLife.Redis使用，Redis使用技巧，100亿小数据使用经验技巧分享

## 介绍

- NewLife.Redis主要作者及经验介绍来源：[大石头](https://www.cnblogs.com/nnhy/)
- 源码： https://github.com/NewLifeX/NewLife.Redis
- Nuget：NewLife.Redis
- NewLife.Redis是一个Redis客户端组件，以高性能处理大数据实时计算为目标。
- Redis协议基础实现Redis/RedisClient位于[X组件](https://github.com/NewLifeX/X/blob/master/NewLife.Core/Caching/Redis.cs)，包含基础字符串操作。完整实现由独立开源项目[NewLife.Redis](https://github.com/NewLifeX/NewLife.Redis)提供。`NewLife.Redis`为扩展实现，主要增加列表结构、哈希结构、队列等高级功能。
- 采取连接池加同步阻塞架构，具有超低延迟（200~600us）以及超高吞吐量的特点。在物流行业大数据实时计算中广泛应有，经过日均100亿次调用量验证。

## 特性

- 在ZTO大数据实时计算广泛应用，200多个Redis实例稳定工作一年多，每天处理近1亿包裹数据，日均调用量80亿次
- 低延迟，Get/Set操作平均耗时200~600us（含往返网络通信）
- 大吞吐，自带连接池，最大支持1000并发
- 高性能，支持二进制序列化

## 基础知识准备

### 相关资源地址

- [国内地址](http://www.redis.cn)，[国外地址](https://redis.io/)
- [Redis相关文章列表](http://www.redis.cn/articles.html)
- [Redis命令大全](http://www.redis.cn/commands.html)
- [Redis FAQ](http://www.redis.cn/topics/faq.html)
- [文档项目地址](https://github.com/antirez/redis-doc/)（建议看原版）
- Redis安装包：
  - 项目用到的包： http://x.newlifex.com/Redis-x64-3.2.100.msi
  - win安装包：https://github.com/MicrosoftArchive/redis/releases
  - 源码包：http://www.redis.cn/download.html

### Redis介绍

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

- 集合操作的 `GetList/GetDictionary/GetQueue/GetSet` 四个类型集合，分别代表Redis的列表、哈希、队列、Set集合等。基础版Redis不支持这四个集合，完整版[NewLife.Redis](https://github.com/NewLifeX/NewLife.Redis)支持，MemoryCache则直接支持。

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

- Set方法第一个参数是key；第二个参数是value，可以是任意类型；第三个是过期时间,单位是秒
> 字符串和字节数组是特殊处理，原封不动传到Redis保存。其它复杂类型默认进行Json序列化，传过去的是Json。所以取回来的时候根据类型处理，字符串或字节数据原样返回，其它复杂类型进行Json反序列化处理。
> Set命令一定一定要指定过期时间，不然一直留在内存里很麻烦，宁愿过期后重新写入也不要让它一直留在数据库。

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
- 所以这个Set操作，在Redis那边对应的数据类型都是strings。

#### 列表List操作

执行

```csharp
// 列表
var list = ic.GetList<DateTime>("list");
list.Add(DateTime.Now);
list.Add(DateTime.Now.Date);
list.RemoveAt(1);
Console.WriteLine(list[list.Count - 1].ToFullString());
```

输出

```csharp
16:09:44.571  1 N - RPUSH list 2018-11-14 16:09:44
16:09:44.576  1 N - => 5
16:09:44.613  1 N - RPUSH list 2018-11-14 00:00:00
16:09:44.618  1 N - => 6
16:09:44.619  1 N - LINDEX list 1
16:09:44.623  1 N - => 2018-11-12 00:00:00
16:09:44.624  1 N - LREM list 1 2018-11-12 00:00:00
16:09:44.628  1 N - => 1
16:09:44.634  1 N - LLEN list
16:09:44.645  1 N - => 5
16:09:44.646  1 N - LINDEX list 4
16:09:44.651  1 N - => 2018-11-14 00:00:00
2018-11-14 00:00:00
```

- 通过`GetList`返回一个`IList`结构，这一操作没有向Redis发送命令，只有`Add`、`Remove`或者计算`Count`的时候会向Redis发送命令
- > **用途**，举个物联网的栗子：物联网设备源源不断上传数据，如果每次上传数据都写入数据，数据库可能会受不了的，怎么办？这时候就可以把每一条数据放到Redis，放到上面说的List里面，凑到一定程度，然后整批拿出来。比如一分钟来了一万行数据，从Redis里面拿出来，再来个批操作把这些数据一次写入数据库。这个功能XCode有实现，如何提升批操作性能？后面XCode教程会讲。
- > **技巧**，key构建：根据自己的数据构造，比如一分钟或者十分钟插入一次，以这个时间为单位，用一个前缀，加上年月日时分作为一个key，新的数据写入新的key。这样在数据写入数据库的时候，新的数据写入新的key，两边都不影响。在数据都写入数据库之后，再通过这个key干掉这一万数据。

#### 字典操作

执行

```csharp
var dic = ic.GetDictionary<DateTime>("dic");
dic.Add("xxx", DateTime.Now);
Console.WriteLine(dic["xxx"].ToFullString());
```

输出

```csharp
17:03:42.526  1 N - HSET dic xxx 2018-11-14 17:03:42
17:03:42.578  1 N - => 0
17:03:42.639  1 N - HGET dic xxx
17:03:42.664  1 N - => 2018-11-14 17:03:42
2018-11-14 17:03:42
```

- `GetDictionary`方法也是返回`IDictionary`接口类型变量，此类型适合存对象，比如用户对象，有很多个属性。相比存json，它的优势是按需读取。当对象的属性特别多时，优势更加明显。

#### 队列操作

执行

```csharp
var mq = ic.GetQueue<String>("queue");
mq.Add(new[] { "abc", "g", "e", "m" });
var arr = mq.Take(3);
Console.WriteLine(arr.Join(","));
```

输出

```csharp
17:03:42.710  1 N - RPUSH queue abc g e m
17:03:42.781  1 N - => 9
17:03:42.917  1 N - LPOP queue
17:03:43.096  1 N - => abc
17:03:43.101  1 N - LPOP queue
17:03:43.105  1 N - => g
17:03:43.106  1 N - LPOP queue
17:03:43.118  1 N - => e
abc,g,e
```

- 队列其实也是List实现的，这里做了个优化，可以添加一批。示例加了一批数据，也拿了一批。
- > 一个使用场景是消峰、错峰。上下游系统中，上游数据量突然爆发，下游一时处理不了，最简单的方案就是就Redis队列。上游往队列推数据，下游慢慢消费、处理数据。
- > 另一个变态的用途，是可以用来实现跨语言网络通信。所有语言都支持Redis，使用队列，一个接收数据放入队列一个消费数据写入数据库等。比如前面使用go语言，消耗内存少，接收消息推进队列；后面使用C#或者Java从队列拿出来处理业务，写入数据库。这样就实现了跨语言的高效通信，效率极高。此功能虽然没实践过，不过挺好用，有需要的可以试下。

#### 集合操作

执行

```csharp
var set = ic.GetSet<String>("181110_1234");
set.Add("xx1");
set.Add("xx2");
set.Add("xx3");
Console.WriteLine(set.Count);
Console.WriteLine(set.Contains("xx2"));
```

输出

```csharp
17:03:43.129  1 N - SADD 181110_1234 xx1
17:03:43.134  1 N - => 0
17:03:43.140  1 N - SADD 181110_1234 xx2
17:03:43.150  1 N - => 0
17:03:43.166  1 N - SADD 181110_1234 xx3
17:03:43.185  1 N - => 0
17:03:43.191  1 N - SCARD 181110_1234
17:03:43.198  1 N - => 3
3
17:03:43.249  1 N - SISMEMBER 181110_1234 xx2
17:03:43.254  1 N - => 1
True
```

- 集合也比较常用，它其实是个Set结构，往里面添加数据，然后判断下是否包含。所以集合比较合适精确判断的**去重**功能的场景。比如业务上有几千万订单一天，订单号可能会重复，想要统计一下今天一共有多少订单，如果在数据库执行`GroupBy`分组不太方便，所以业务统计可以用这个Set结构去重，实际使用可能还要更复杂一点。一般我们做五千万级别的去重，所占内存也不少，也就是写入五千万个订单号，后面处理的时候判断一下这个订单号处理过没有。
- > **实战经验：**有一个功能是快递揽收，就是商家发货了，快递网点要把它收回来，但是收回来之前，网点不知道它有多少货。所以做一个功能，商家发货了就把订单号发到快递公司，以时间和网点编号为key，比如key为上面的`181110_1234`。也就是编号为`1234`的网点在`18-11-10`这天快递公司收到所有的订单都放在这个key里面，然后利用Set结构的去重功能，写过一次的订单不会再次添加，所以订单重复提交都没有问题。这是第一个功能，第二个功能是，网点揽收之后，再告诉快递公司这个单被揽收了，这时候把这个订单从`181110_1234`这个key里面删掉，最后Set里面剩下的订单，就是`18-11-10`这天`1234`网点未揽收订单。
- > 另外，如果网点太多，订单太多，可以用网点id做个哈希，再分摊到32甚至64台Redis上，这样不管多少网点多少订单都可以把数据摊开。
- > Redis还有个类型[HyperLogLogs](https://github.com/antirez/redis-doc/blob/master/topics/data-types-intro.md#hyperloglogs)可以去重，能达到百亿级别，但是有一定几率误判。还有一个去重过滤的是[布隆过滤器（Bloom Filter）](https://baike.baidu.com/item/%E5%B8%83%E9%9A%86%E8%BF%87%E6%BB%A4%E5%99%A8/5384697)，可用于爬虫url去重等。

#### 批量操作

执行：

```csharp
var dic = new Dictionary<String, Object>
{
    ["name"] = "NewLife",
    ["time"] = DateTime.Now,
    ["count"] = 1234
};
rds.SetAll(dic, 120);

var vs = rds.GetAll<String>(dic.Keys);
XTrace.WriteLine(vs.Join(",", e => $"{e.Key}={e.Value}"));
```

结果：

```csharp
MSET name NewLife time 2018-09-25 15:56:26 count 1234
=> OK
EXPIRE name 120
EXPIRE time 120
EXPIRE count 120
MGET name time count
name=NewLife,time=2018-09-25 15:56:26,count=1234
```

- GetAll/SetAll 在Redis上是很常用的批量操作，同时获取或设置多个key，一般有10倍以上吞吐量。
- 一次GetAll的时间大概是一次Get的一点几倍，一般建议如果需要两次以上的Get操作，直接用GetAll。

### 高级操作

- Add 添加，当key不存在时添加，已存在时返回false。
- Replace 替换，替换已有值为新值，返回旧值。
- Increment 累加，原子操作
- Decrement 递减，原子操作
- > Add跟Replace就是实现Redis分布式锁的关键，分布式锁源码：https://github.com/NewLifeX/X/blob/master/NewLife.Core/Caching/CacheLock.cs

执行：

```csharp
var flag = rds.Add("count", 5678);
XTrace.WriteLine(flag ? "Add成功" : "Add失败");
var ori = rds.Replace("count", 777);
var count = rds.Get<Int32>("count");
XTrace.WriteLine("count由{0}替换为{1}", ori, count);

rds.Increment("count", 11);
var count2 = rds.Decrement("count", 10);
XTrace.WriteLine("count={0}", count2);
```

结果：

```csharp
SETNX count 5678
=> 0
Add失败
GETSET count 777
=> 1234
GET count
=> 777
count由1234替换为777
INCRBY count 11
=> 788
DECRBY count 10
=> 778
count=778
```

### 性能测试

执行：

```csharp
var ic = Redis.Create("127.0.0.1:6379", 5);
//var ic = new MemoryCache();
ic.Bench();
```

输出：

```csharp
10:39:56.509  1 N - 为NewLife.Caching.Redis自动注册NewLife.Caching.FullRedis
10:39:56.512  1 N - 目标服务器：127.0.0.1:6379/5
10:39:56.514  1 N - FullRedis性能测试[随机]，批大小[100]，逻辑处理器 4 个 3,192MHz-Intel(R) Core(TM) i5-6500 CPU @ 3.20GHz
10:39:56.515  1 N -
10:39:56.515  1 N - 测试 100,000 项，  1 线程
10:39:57.063  1 N - 赋值 100,000 项，  1 线程，耗时     457ms 速度   218,818 ops
10:39:58.227  1 N - 读取 100,000 项，  1 线程，耗时   1,162ms 速度    86,058 ops
10:39:58.854  1 N - 删除 100,000 项，  1 线程，耗时     625ms 速度   160,000 ops
10:39:59.518  1 N - 累加 100,000 项，  1 线程，耗时     662ms 速度   151,057 ops
10:39:59.529  1 N -
10:39:59.536  1 N - 测试 200,000 项，  2 线程
10:40:00.407  1 N - 赋值 200,000 项，  2 线程，耗时     829ms 速度   241,254 ops
10:40:02.110  1 N - 读取 200,000 项，  2 线程，耗时   1,688ms 速度   118,483 ops
10:40:03.244  1 N - 删除 200,000 项，  2 线程，耗时   1,133ms 速度   176,522 ops
10:40:04.502  1 N - 累加 200,000 项，  2 线程，耗时   1,256ms 速度   159,235 ops
10:40:04.502  1 N -
10:40:04.502  1 N - 测试 800,000 项，  8 线程
10:40:07.641  1 N - 赋值 800,000 项，  8 线程，耗时   3,132ms 速度   255,427 ops
10:40:13.937  1 N - 读取 800,000 项，  8 线程，耗时   6,282ms 速度   127,347 ops
10:40:18.735  1 N - 删除 800,000 项，  8 线程，耗时   4,796ms 速度   166,805 ops
10:40:23.519  1 N - 累加 800,000 项，  8 线程，耗时   4,782ms 速度   167,294 ops
10:40:23.523  1 N -
10:40:23.523  1 N - 测试 400,000 项，  4 线程
10:40:24.999  1 N - 赋值 400,000 项，  4 线程，耗时   1,466ms 速度   272,851 ops
10:40:28.035  1 N - 读取 400,000 项，  4 线程，耗时   3,019ms 速度   132,494 ops
10:40:30.318  1 N - 删除 400,000 项，  4 线程，耗时   2,282ms 速度   175,284 ops
10:40:32.694  1 N - 累加 400,000 项，  4 线程，耗时   2,375ms 速度   168,421 ops
10:40:32.695  1 N -
10:40:32.695  1 N - 测试 400,000 项， 64 线程
10:40:34.342  1 N - 赋值 400,000 项， 64 线程，耗时   1,639ms 速度   244,051 ops
10:40:37.460  1 N - 读取 400,000 项， 64 线程，耗时   3,106ms 速度   128,783 ops
10:40:40.201  1 N - 删除 400,000 项， 64 线程，耗时   2,739ms 速度   146,038 ops
10:40:42.737  1 N - 累加 400,000 项， 64 线程，耗时   2,535ms 速度   157,790 ops
```

- 测试性能和机器配置有关，Bench方法用不同线程数量分多组进行添删改压力测试，
- rand参数设置是否随机读写
- batch设置批大小，分批执行操作，借助GetAll/SetAll进行优化
- 管道，`StartPipeline`方法开启管道，`StopPipeline`结束管道，`Commit`方法提交变更，发送那两个方法中间的所有进入管道的命令。可用`AutoPipeline`属性，设置自动管道，默认设置100，达到设置值自动提交，无分批时打开管道操作，对添删改优化。

## 经验技巧总结

抄自源码的README：

- 在Linux上多实例部署，实例个数等于处理器个数，各实例最大内存直接为本机物理内存，避免单个实例内存撑爆
- 把海量数据（10亿+）根据key哈希（Crc16/Crc32）存放在多个实例上，读写性能成倍增长
- 采用二进制序列化，而非常见Json序列化
- 合理设计每一对Key的Value大小，包括但不限于使用批量获取，原则是让每次网络包控制在1.4k字节附近，减少通信次数
- Redis客户端的Get/Set操作平均耗时200~600us（含往返网络通信），以此为参考评估网络环境和Redis客户端组件
- 使用管道Pipeline合并一批命令
- Redis的主要性能瓶颈是序列化、网络带宽和内存大小，滥用时处理器也会达到瓶颈
- 以上经验，源自于300多个实例4T以上空间一年多稳定工作的经验，并按照重要程度排了先后顺序，可根据场景需要酌情采用！

### Redis的兄弟姐妹

- Redis实现ICache接口，它的孪生兄弟MemoryCache，内存缓存，千万级吞吐率。各应用强烈建议使用ICache接口编码设计，小数据时使用MemoryCache实现；数据增大（10万）以后，改用Redis实现，不需要修改业务代码。

## 写在最后

- 切不可道听途说，不可完全照搬，真假自己试一下就知道啦，试一下比什么都强！
- 不常用功能没有封装，暂不支持集群，后面一定会支持。