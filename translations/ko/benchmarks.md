---
description: >-
  이 벤치마크는 Fiber와 다른 웹 프레임워크들을 비교하는 것에 목표를 둡니다.
---

# 🤖 Benchmarks

## TechEmpower

🔗 [https://www.techempower.com/benchmarks/](https://www.techempower.com/benchmarks/#section=test&runid=c7152e8f-5b33-4ae7-9e89-630af44bc8de&hw=ph&test=plaintext)

* **CPU** Intel Xeon Gold 5120
* **MEM** 32GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux
* **NET** Dedicated Cisco 10-gigabit Ethernet switch.

### Plaintext

**Fiber** 는 초당 **6,162,556** 건의 응답과 평균 **2.0** ms의 지연율을 보였습니다.  
**Express** 는 초당 **367,069** 건의 응답과 평균 **354.1** ms의 지연율을 보였습니다.

![](.gitbook/assets/plaintext%20%281%29.png)

![Fiber vs Express](.gitbook/assets/plaintext_express.png)

### Data Updates

**Fiber** 는 초당 **11,846** 건의 응답과 평균 **42.8** ms의 지연율을 보였습니다.  
**Express** 는 초당 **2,066** 건의 응답과 평균 **390.44** ms의 지연율을 보였습니다.

![](.gitbook/assets/data_updates.png)

![Fiber vs Express](.gitbook/assets/data_updates_express%20%281%29.png)

### Multiple Queries

**Fiber** 는 초당 **19,664** 건의 응답과 평균 **25.7** ms의 지연율을 보였습니다.  
**Express** 는 초당 **4,302** 건의 응답과 평균 **117.2** ms의 지연율을 보였습니다.

![](.gitbook/assets/multiple_queries%20%281%29.png)

![Fiber vs Express](.gitbook/assets/multiple_queries_express.png)

### Single Query

**Fiber** 는 초당 **368,647** 건의 응답과 평균 **0.7** ms의 지연율을 보였습니다.  
**Express** 는 초당 **57,880** 건의 응답과 평균 **4.4** ms의 지연율을 보였습니다.

![](.gitbook/assets/single_query%20%282%29.png)

![Fiber vs Express](.gitbook/assets/single_query_express.png)

### JSON Serialization

**Fiber** 는 초당 **1,146,667** 건의 응답과 평균 **0.4** ms의 지연율을 보였습니다.  
**Express** 는 초당 **244,847** 건의 응답과 평균 **1.1** ms의 지연율을 보였습니다.

![](.gitbook/assets/json%20%281%29.png)

![Fiber vs Express](.gitbook/assets/json_express.png)

## Go web framework benchmark

🔗 [https://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

* **CPU** Intel\(R\) Xeon\(R\) Gold 6140 CPU @ 2.30GHz
* **MEM** 4GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux

첫 번째 테스트 케이스는 **0ms**, **10ms**, **100ms**, **500ms** 의 처리 시간에 맞추어져 있습니다.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

동시 접속 클라이언트들은 **5000**개 입니다.

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

