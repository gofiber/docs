---
description: >-
  This benchmarks aims to compare the performance of Fiber and other web frameworks.
---

# 📊 Benchmarks

## TechEmpower

🔗 [https://www.techempower.com/benchmarks/](https://www.techempower.com/benchmarks/#section=test&runid=c7152e8f-5b33-4ae7-9e89-630af44bc8de&hw=ph&test=plaintext)

* **Prozessor** Intel Xeon Gold 5120
* **Arbeitsspeicher** 32GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux
* **NET** Dedicated Cisco 10-gigabit Ethernet switch.

### Einfacher Text

**Fiber** behandelte **6,162,556** Antworten pro Sekunde mit einer durchschnittlichen Latenz von **2.0** ms.  
**Express** behandelte **367,069** Antworten pro Sekunde mit einer durchschnittlichen Latenz von **354.1** ms.

![](.gitbook/assets/plaintext%20%281%29.png)

![Fiber gegen Express](.gitbook/assets/plaintext_express.png)

### Datenaktualisierung

**Fiber** behandelte **11,846**</strong> Antworten pro Sekunde mit einer durchschnittlichen Latenz von **42.8** ms.  
**Express** behandelte **2,066** Antworten pro Sekunde mit einer durchschnittlichen Latenz von **390.44** ms.

![](.gitbook/assets/data_updates.png)

![Fiber gegen Express](.gitbook/assets/data_updates_express%20%281%29.png)

### Mehrfach Abfragen

**Fiber** behandelte **19,664** Antworten pro Sekunde mit einer durchschnittlichen Latenz von **25.7** ms.  
**Express** behandelte **4,302** Antworten pro Sekunde mit einer durchschnittlichen Latenz von **117.2** ms.

![](.gitbook/assets/multiple_queries%20%281%29.png)

![Fiber gegen Express](.gitbook/assets/multiple_queries_express.png)

### Einzel Abfrage

**Fiber** behandelte **368,647** Antworten pro Sekunde mit einer durchschnittlichen Latenz von **0.7** ms.  
**Express** behandelte **57,880** Antworten pro Sekunde mit einer durchschnittlichen Latenz von **4.4** ms.

![](.gitbook/assets/single_query%20%282%29.png)

![Fiber gegen Express](.gitbook/assets/single_query_express.png)

### JSON-Serialisierung

**Fiber** behandelte **1,146,667** Antworten pro Sekunde mit einer durchschnittlichen Latenz von **0.4** ms.  
**Express** behandelte **244,847** Antworten pro Sekunde mit einer durchschnittlichen Latenz von **1.1** ms.

![](.gitbook/assets/json%20%281%29.png)

![Fiber gegen Express](.gitbook/assets/json_express.png)

## Go web framework benchmark

🔗 [https://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

* **CPU** Intel\(R\) Xeon\(R\) Gold 6140 CPU @ 2.30GHz
* **MEM** 4GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux

The first test case is to mock **0 ms**, **10 ms**, **100 ms**, **500 ms** processing time in handlers.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

Die Parallele-Clients sind **5000**.

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

Wenn wir **http Pipelining** aktivieren, Testergebnis unten:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)

Dependency graph for `v1.9.0`

![](.gitbook/assets/graph.svg)

