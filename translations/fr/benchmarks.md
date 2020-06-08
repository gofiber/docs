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

### Texte simple

The Plaintext test is an exercise of the request-routing fundamentals only, designed to demonstrate the capacity of high-performance platforms in particular. Requests will be sent using HTTP pipelining. The response payload is still small, meaning good performance is still necessary in order to saturate the gigabit Ethernet of the test environment.

See [Plaintext requirements](https://github.com/TechEmpower/FrameworkBenchmarks/wiki/Project-Information-Framework-Tests-Overview#single-database-query)

**Fiber**      -   **6,162,556** responses per second with an average latency of     **2.0** ms.  
**Express** -      **367,069** responses per second with an average latency of **354.1** ms.

![](.gitbook/assets/plaintext%20%281%29.png)

![Fiber vs Express](.gitbook/assets/plaintext_express.png)

### Mise à jour de données

**Fiber** a géré **11,846** réponses par seconde avec un temps moyen de **42.8** ms.  
**Express** a géré **2,066** réponses par seconde avec un temps moyen de **390.44** ms.

![](.gitbook/assets/data_updates.png)

![Fiber vs Express](.gitbook/assets/data_updates_express%20%281%29.png)

### Requêtes multiples

**Fiber** a géré **19,664** réponses par seconde avec un temps moyen de **25.7** ms.  
**Express** a géré **4,302** réponses par seconde avec un temps moyen de **117.2** ms.

![](.gitbook/assets/multiple_queries%20%281%29.png)

![Fiber vs Express](.gitbook/assets/multiple_queries_express.png)

### Requête seule

**Fiber** a géré **368,647** réponses par seconde avec un temps moyen de **0.7** ms.  
**Express** a géré **57,880** réponses par seconde avec un temps moyen de **4.4** ms.

![](.gitbook/assets/single_query%20%282%29.png)

![Fiber vs Express](.gitbook/assets/single_query_express.png)

### Sérialisation JSON

**Fiber** a géré **1,146,667** réponses par seconde avec un temps moyen de **0.4** ms.  
**Express** a géré **244,847** réponses par seconde avec un temps moyen de **1.1** ms.

![](.gitbook/assets/json%20%281%29.png)

![Fiber vs Express](.gitbook/assets/json_express.png)

## Go web framework benchmark

[https://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

* **Processeur** Intel\(R\) Xeon\(R\) Gold 6140 CPU @ 2.30GHz
* **Mémoire** 4Gio
* **GO** go1.13.6 linux/amd64
* **OS** Linux

Le premier cas de test consiste à mesurer les temps de traitement des handler pour **0 ms**, **10 ms**, **100 ms** et **500 ms**.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

Le nombre de clients en parallèle est de **5000**.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_latency.png)

La latence est le temps de traitement réel pris par les serveurs web. _Le plus petit est le meilleur._

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

"Allocations" est la quantité de mémoire allouée par les serveurs pendant que le test est en cours. L'unité est en Mio. _Le plus petit est le meilleur._

Si nous activons le **http pipelining**, voici les résulats du test :

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

Test en fonction du nombre de clients avec un temps de traitement de **30 ms** pour **100**, **1000** et **5000** clients :

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

Si nous activons le **http pipelining**, voici les résulats du test :

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)

Tests effectués avec la version `v1.9.0`

![](.gitbook/assets/graph.svg)

