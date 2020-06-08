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

### Простой текст

The Plaintext test is an exercise of the request-routing fundamentals only, designed to demonstrate the capacity of high-performance platforms in particular. Requests will be sent using HTTP pipelining. The response payload is still small, meaning good performance is still necessary in order to saturate the gigabit Ethernet of the test environment.

See [Plaintext requirements](https://github.com/TechEmpower/FrameworkBenchmarks/wiki/Project-Information-Framework-Tests-Overview#single-database-query)

**Fiber**      -   **6,162,556** responses per second with an average latency of     **2.0** ms.  
**Express** -      **367,069** responses per second with an average latency of **354.1** ms.

![](.gitbook/assets/plaintext%20%281%29.png)

![Fiber vs Express](.gitbook/assets/plaintext_express.png)

### Обновление данных

**Fiber** обрабатывает **11,846** ответов в секунду со средней задержкой **42.8** мс.  
**Express** обрабатывается **2,066** ответов в секунду со средней задержкой **390.44** мс.

![](.gitbook/assets/data_updates.png)

![Fiber vs Express](.gitbook/assets/data_updates_express%20%281%29.png)

### Множественные запросы

**Fiber** обрабатывает **19,664** ответов в секунду со средней задержкой **25.7** мс.  
**Express** обрабатывает **4,302** ответов в секунду со средней задержкой **117.2** мс.

![](.gitbook/assets/multiple_queries%20%281%29.png)

![Fiber vs Express](.gitbook/assets/multiple_queries_express.png)

### Одиночный запрос

**Fiber** обрабатывает **368,647** ответов в секунду со средней задержкой **0.7** мс.  
**Express** обрабатывает **57,880** ответов в секунду со средней задержкой **4.4** мс.

![](.gitbook/assets/single_query%20%282%29.png)

![Fiber vs Express](.gitbook/assets/single_query_express.png)

### Сериализация JSON

**Fiber** обрабатывает **1,146,667** ответов в секунду со средней задержкой **0.4** мс.  
**Express** обрабатывает **244,847** ответов в секунду со средней задержкой **1.1** мс.

![](.gitbook/assets/json%20%281%29.png)

![Fiber vs Express](.gitbook/assets/json_express.png)

## Go web framework benchmark

🔗 [https://github.com/smallnest/go-web-framework-benchmark/](https://github.com/smallnest/go-web-framework-benchmark)

* **CPU** Intel\(R\) Xeon\(R\) Gold 6140 CPU @ 2.30GHz
* **MEM** 4GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux

Первый тестовый случай — это симулирование времени обработки в обработчиках с **0 мс**, **10 мс**, **100 мс**, **500 мс**.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

Параллелизм клиентов: **5000**.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_latency.png)

Задержка — это время реальной работы веб серверов. _Чем меньше — тем лучше._

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

Allocs — это перераспределение heap по веб серверам при выполнении теста. Единица измерения — Мб. _Чем меньше — тем лучше._

Если мы включим **http pipelining**, то результат теста будет вот таким:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

Тест на концентрацию в **30 мс** время обработки, результат теста для **100**, **1000**, **5000** клиентов:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

Если мы включим **http pipelining**, то результат теста будет вот таким:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)

График зависимостей для `v1.9.0`

![](.gitbook/assets/graph.svg)

