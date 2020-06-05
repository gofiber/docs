---
description: >-
  このベンチマークは、Fiber と他のウェブフレームワークの性能を比較することを目的としています。
---

# 🤖 ベンチマーク

## TechEmpower

🔗 [https://www.techempower.com/benchmarks/](https://www.techempower.com/benchmarks/#section=test&runid=c7152e8f-5b33-4ae7-9e89-630af44bc8de&hw=ph&test=plaintext)

* **CPU** Intel Xeon Gold 5120
* **MEM** 32GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux
* **NET** Dedicated Cisco 10-gigabit Ethernet switch.

### プレーンテキスト

**Fiber** handled **6,162,556** responses per second with an average latency of **2.0** ms.  
**Express** handled **367,069** responses per second with an average latency of **354.1** ms.

![](.gitbook/assets/plaintext%20%281%29.png)

![Fiber vs Express](.gitbook/assets/plaintext_express.png)

### データの更新

**Fiber** handled **11,846** responses  per second with an average latency of **42.8** ms.  
**Express** handled **2,066** responses  per second with an average latency of **390.44** ms.

![](.gitbook/assets/data_updates.png)

![Fiber vs Express](.gitbook/assets/data_updates_express%20%281%29.png)

### 複数クエリ

**Fiber** handled **19,664** responses per second with an average latency of **25.7** ms.  
**Express** handled **4,302** responses  per second with an average latency of **117.2** ms.

![](.gitbook/assets/multiple_queries%20%281%29.png)

![Fiber vs Express](.gitbook/assets/multiple_queries_express.png)

### 単一クエリ

**Fiber** handled **368,647** responses per second with an average latency of **0.7** ms.  
**Express** handled **57,880** responses  per second with an average latency of **4.4** ms.

![](.gitbook/assets/single_query%20%282%29.png)

![Fiber vs Express](.gitbook/assets/single_query_express.png)

### JSON シリアライズ

**Fiber** handled **1,146,667** responses per second with an average latency of **0.4** ms.  
**Express** handled **244,847** responses  per second with an average latency of **1.1** ms.

![](.gitbook/assets/json%20%281%29.png)

![Fiber vs Express](.gitbook/assets/json_express.png)

## Go web framework benchmark

🔗 [https://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

* **CPU** Intel\(R\) Xeon\(R\) Gold 6140 CPU @ 2.30GHz
* **MEM** 4GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux

最初のテストケースは、ハンドラーの処理時間**0ms**、**10ms**、**100ms**、**500ms**をモックします。

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

The concurrency clients are **5000**.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_latency.png)

Latency is the time of real processing time by web servers. _The smaller is the better._

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

Allocs is the heap allocations by web servers when test is running. The unit is MB. _The smaller is the better._

If we enable **http pipelining**, test result as below:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

Concurrency test in **30 ms** processing time, the test result for **100**, **1000**, **5000** clients is:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

If we enable **http pipelining**, test result as below:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)

Dependency graph for `v1.9.0`

![](.gitbook/assets/graph.svg)

