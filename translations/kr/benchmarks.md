---
description: >-
  These benchmarks aim to compare the performance of Fiber and other web frameworks.
---

# 📊 Benchmarks

## TechEmpower

[TechEmpower](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite) provides  a performance comparison of many web application frameworks executing fundamental tasks such as JSON serialization, database access, and server-side template composition.

Each framework is operating in a realistic production configuration. Results are captured on cloud instances and on physical hardware. The test implementations are largely community-contributed and all source is available at the [GitHub repository](https://github.com/TechEmpower/FrameworkBenchmarks).

* Fiber `v1.10.0`
* 28 HT Cores Intel\(R\) Xeon\(R\) Gold 5120 CPU @ 2.20GHz
* 32GB RAM
* Ubuntu 18.04.3 4.15.0-88-generic
* Dedicated Cisco 10-Gbit Ethernet switch.

### Plaintext

The Plaintext test is an exercise of the request-routing fundamentals only, designed to demonstrate the capacity of high-performance platforms in particular. Requests will be sent using HTTP pipelining. The response payload is still small, meaning good performance is still necessary in order to saturate the gigabit Ethernet of the test environment.

See [Plaintext requirements](https://github.com/TechEmpower/FrameworkBenchmarks/wiki/Project-Information-Framework-Tests-Overview#single-database-query)

**Fiber**      -   **6,162,556** responses per second with an average latency of     **2.0** ms.  
**Express** -      **367,069** responses per second with an average latency of **354.1** ms.

![](.gitbook/assets/plaintext%20%281%29.png)

![Fiber vs Express](.gitbook/assets/plaintext_express.png)

### Data Updates

**Fiber** 는 초당 **11,846** 건의 응답과 평균 **42.8** ms의 지연 속도를 보였습니다.  
**Express** 는 초당 **2,066** 건의 응답과 평균 **390.44** ms의 지연 속도를 보였습니다

![](.gitbook/assets/data_updates.png)

![Fiber vs Express](.gitbook/assets/data_updates_express%20%281%29.png)

### Multiple Queries

**Fiber** 는 초당 **19,664** 건의 응답과 평균 **25.7** ms의 지연 속도를 보였습니다.  
**Express** 는 초당 **4,302** 건의 응답과 평균 **117.2** ms의 지연 속도를 보였습니다.

![](.gitbook/assets/multiple_queries%20%281%29.png)

![Fiber vs Express](.gitbook/assets/multiple_queries_express.png)

### Single Query

**Fiber** 는 초당 **368,647** 건의 응답과 평균 **0.7** ms의 지연 속도를 보였습니다.  
**Express** 는 초당 **57,880** 건의 응답과 평균 **4.4** ms의 지연 속도를 보였습니다.

![](.gitbook/assets/single_query%20%282%29.png)

![Fiber vs Express](.gitbook/assets/single_query_express.png)

### JSON Serialization

**Fiber** 는 초당 **1,146,667** 건의 응답과 평균 **0.4** ms의 지연 속도를 보였습니다.  
**Express** 는 초당 **244,847** 건의 응답과 평균 **1.1** ms의 지연 속도를 보였습니다.

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

지연 속도는 웹 서버의 실제 처리 시간을 말합니다. _낮은 값이 좋습니다._

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

할당량은 테스트 중 웹서버의 힙 할당량을 말합니다. 단위는 MB입니다. _낮은 값이 좋습니다._

만약 **http pipelining** 을 사용하게 되면, 테스트 결과는 다음과 같습니다:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

**30 ms** 처리 시간 동안의 동시성 테스트이며, **100**, **1000**, **5000** 개의 클라이언트들에 대한 테스트 결과입니다:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

만약 **http pipelining** 을 사용하게 되면, 테스트 결과는 다음과 같습니다:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)

Dependency graph for `v1.9.0`

![](.gitbook/assets/graph.svg)

