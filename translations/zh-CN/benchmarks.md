---
description: 该基准旨在比较Fiber和其他Go Web框架的性能。
---

# 🤖基准

## 技术赋能者

🔗https [:](https://www.techempower.com/benchmarks/) //www.techempower.com/benchmarks/

- **CPU** Intel Xeon金牌5120
- **内存** 32GB
- **转到** go1.13.6 linux / amd64
- **操作系统** Linux
- **NET**专用思科10千兆位以太网交换机。

要查看所有语言框架，请访问[纯文本所有结果](https://www.techempower.com/benchmarks/#section=test&runid=350f0783-cc9b-4259-9831-28987799782a&hw=ph&test=plaintext) 。
要自己查看列表，请访问[Plaintext Go Results](https://www.techempower.com/benchmarks/#section=test&runid=350f0783-cc9b-4259-9831-28987799782a&hw=ph&test=plaintext&l=zijocf-1r) 。

### 纯文本

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-plaintext.png)

### 纯文本延迟

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-plaintext-latency.png)

### JSON序列化

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-json.png)

### 单查询

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-single-query.png)

### 多个查询

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-multiple-queries.png)

### 资料更新

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-updates.png)

## Go Web框架基准

🔗https [://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

- **CPU** Intel（R）至强（R）Gold 6140 CPU @ 2.30GHz
- **记忆体** 4GB
- **转到** go1.13.6 linux / amd64
- **操作系统** Linux

第一个测试用例是在处理程序中模拟**0 ms** ， **10 ms** ， **100 ms** ， **500 ms的**处理时间。

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

并发客户端为**5000** 。

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_latency.png)

延迟是Web服务器实际处理时间的时间。 *越小越好。*

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

Allocs是测试运行时Web服务器的堆分配。单位是MB。 *越小越好。*

如果启用**http pipelining** ，则测试结果如下：

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

在**30毫秒**的并发测试的处理时间，测试结果为******100，1000，5000****个**客户端是：

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

如果启用**http pipelining** ，则测试结果如下：

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)
