---
description: >-
  Deze benchmarks zijn bedoeld om de prestaties van glasvezel en andere 
  webframeworks te vergelijken.
---

# 🤖 Benchmarks

## TechEmpower

🔗 [https://www.techempower.com/benchmarks/](https://www.techempower.com/benchmarks/#section=test&runid=c7152e8f-5b33-4ae7-9e89-630af44bc8de&hw=ph&test=plaintext)

* **CPU** Intel Xeon Gold 5120
* **MEM** 32GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux
* **NET** Dedicated Cisco 10-gigabit Ethernet switch.

### Platte tekst

**Fiber** verwerktte **6,162,556** requests per seconde met een gemiddelde latency van **2.0** ms.  
**Express** verwerktte **367,069** requests per seconde met een gemiddelde latency van **354.1** ms.

![](.gitbook/assets/plaintext%20%281%29.png)

![Fiber vs Express](.gitbook/assets/plaintext_express.png)

### Data updates

**Fiber** verwerktte **11,846** requests per seconde met een gemiddelde latency van **42.8** ms.  
**Express** verwerktte **2,066** requests per seconde met een gemiddelde latency van **390.44** ms.

![](.gitbook/assets/data_updates.png)

![Fiber vs Express](.gitbook/assets/data_updates_express%20%281%29.png)

### Meerdere zoekopdrachten

**Fiber** verwerktte **19,664** requests per seconde met een gemiddelde latency van **25.7** ms.  
**Express** verwerktte **4,302** requests per seconde met een gemiddelde latency van **117.2** ms.

![](.gitbook/assets/multiple_queries%20%281%29.png)

![Fiber vs Express](.gitbook/assets/multiple_queries_express.png)

### Enkele zoekopdracht

**Fiber** verwerktte **368,647** requests per seconde met een gemiddelde latency van **0.7** ms.  
**Express** verwerktte **57,880** requests per seconde met een gemiddelde latency van **4.4** ms.

![](.gitbook/assets/single_query%20%282%29.png)

![Fiber vs Express](.gitbook/assets/single_query_express.png)

### JSON-serialisering

**Fiber** verwerktte **1,146,667** requests per seconde met een gemiddelde latency van **0.4** ms.  
**Express** verwerktte **244,847** requests per seconde met een gemiddelde latency van **1.1** ms.

![](.gitbook/assets/json%20%281%29.png)

![Fiber vs Express](.gitbook/assets/json_express.png)

## Go web framework benchmark

🔗 [https://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

* **CPU** Intel\(R\) Xeon\(R\) Gold 6140 CPU @ 2.30GHz
* **MEM** 4GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux

The first test case is to mock **0 ms**, **10 ms**, **100 ms**, **500 ms** processing time in handlers.

De eerste testcase is om **0 ms**, **10 ms**, **100 ms** en **500 ms** verwerkingstijd in handlers na te bootsen.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

De gelijkstijdige clients zijn **5000**.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_latency.png)

Latency is de verwerkingstijd door webservers. _The smaller is the better._

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

Allocs is de heap-toewijzing door webservers wanneer de test wordt uitgevoerd. De eenheid is MB. _Hoe kleiner, hoe beter._

Als we **http pipelining** inschakelen, wordt het test resultaat zoals hieronder:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

Gelijktijdigheidstest in **30 ms** verwerkingstijd, het testresultaat voor **100**, **1000** en **5000** clients is:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

Als we **http pipelining** inschakelen, wordt het test resultaat zoals hieronder:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)

Dependency grafiek voor `v1.9.0`

![](.gitbook/assets/graph.svg)

