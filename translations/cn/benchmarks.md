---
description: >-
  这基准测试的宗旨是为了比较 Fiber 和其他网络框架的性能表现。
---

# 📊 Benchmarks

## TechEmpower

🔗 [https://www.techempower.com/benchmarks/](https://www.techempower.com/benchmarks/#section=test&runid=c7152e8f-5b33-4ae7-9e89-630af44bc8de&hw=ph&test=plaintext)

* **CPU** Intel Xeon Gold 5120
* **MEM** 32GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux
* **NET** Dedicated Cisco 10-gigabit Ethernet switch.

### 纯文本

**Fiber** 每秒处理了 **6,162,556** 的响应，平均延迟为 **2.0** 毫秒。  
**Express** 每秒处理了 **367,069** 的响应，平均延迟为 **354.1** 毫秒。

![](.gitbook/assets/plaintext%20%281%29.png)

![Fiber 对比 Express](.gitbook/assets/plaintext_express.png)

### 数据更新

**Fiber** 每秒处理了 **11,846** 的响应，平均延迟为 **42.8** 毫秒。  
**Express** 每秒处理了 **2,066** 的响应，平均延迟为 **390.44** 毫秒。

![](.gitbook/assets/data_updates.png)

![Fiber 对比 Express](.gitbook/assets/data_updates_express%20%281%29.png)

### 多重查询

**Fiber** 每秒处理了 **19,664** 的响应，平均延迟为 **25.7** 毫秒。  
**Express** 每秒处理了 **4,302** 的响应，平均延迟为 **117.2** 毫秒。

![](.gitbook/assets/multiple_queries%20%281%29.png)

![Fiber 对比 Express](.gitbook/assets/multiple_queries_express.png)

### 单次查询

**Fiber** 每秒处理了 **368,647** 的响应，平均延迟为 **0.7** 毫秒。  
**Express** 每秒处理了 **57,880** 的响应，平均延迟为 **4.4** 毫秒。

![](.gitbook/assets/single_query%20%282%29.png)

![Fiber 对比 Express](.gitbook/assets/single_query_express.png)

### JSON 序列化

**Fiber** 每秒处理了 **1,146,667** 的响应，平均延迟为 **0.4** 毫秒。  
**Express** 每秒处理了 **244,847** 的响应，平均延迟为 **1.1** 毫秒。

![](.gitbook/assets/json%20%281%29.png)

![Fiber 对比 Express](.gitbook/assets/json_express.png)

## Go web framework benchmark

🔗 [https://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

* **CPU** Intel\(R\) Xeon\(R\) Gold 6140 CPU @ 2.30GHz
* **MEM** 4GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux

第一个测试案例是模拟 **0 ms**, **10 ms**, **100 毫秒**、 **500 毫秒** 的处理时间

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

并发客户端 **5000**。

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_latency.png)

Latency 延迟是指网络服务器的实际处理时间。 _越小越好。_

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

Allocs 是网络服务器在运行测试是的堆分配。 单位是MB。 _越小越好。_

如果我们启用 **http 管道**，测试结果如下：

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

在 **30 毫秒** 处理时间内的并发测试中·， **100**，**1000**, **5000** 客户端的测试结果为：

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

如果我们启用 **http 管道**，测试结果如下：

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)

`v1.9.0 的依赖关系图`

![](.gitbook/assets/graph.svg)

