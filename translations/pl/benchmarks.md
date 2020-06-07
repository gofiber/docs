---
description: >-
  Celem tego benchmarku jest porównanie wydajności Fiber i innych frameworków internetowych.
---

# 📊 Benchmarks

## TechEmpower

🔗 [https://www.techempower.com/benchmarks/](https://www.techempower.com/benchmarks/#section=test&runid=c7152e8f-5b33-4ae7-9e89-630af44bc8de&hw=ph&test=plaintext)

* **CPU** Intel Xeon Gold 5120
* **Pamięć RAM** 32GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux
* **NET** Dedykowany 10-gigabitowy switch Ethernet Cisco.

### Plaintext

**Fiber** obsłużył **6,162,556** odpowiedzi na sekundę ze średnim opóźnieniem **2.0** ms.  
**Express** obsłużył **367,069** odpowiedzi na sekundę ze średnim opóźnieniem **354.1** ms.

![](.gitbook/assets/plaintext%20%281%29.png)

![Fiber vs Express](.gitbook/assets/plaintext_express.png)

### Aktualizowanie danych

**Fiber** obsłużył **11,846** odpowiedzi na sekundę ze średnim opóźnieniem **42.8** ms.  
**Express** obsłużył **2,066** odpowiedzi na sekundę ze średnim opóźnieniem **390.44** ms.

![](.gitbook/assets/data_updates.png)

![Fiber vs Express](.gitbook/assets/data_updates_express%20%281%29.png)

### Wiele zapytań

**Fiber** obsłużył **19,664** odpowiedzi na sekundę ze średnim opóźnieniem **25.7** ms.  
**Express** obsłużył **4,302** odpowiedzi na sekundę ze średnim opóźnieniem **117.2** ms.

![](.gitbook/assets/multiple_queries%20%281%29.png)

![Fiber vs Express](.gitbook/assets/multiple_queries_express.png)

### Pojedyncze zapytanie

**Fiber** obsłużył **368,647** odpowiedzi na sekundę ze średnim opóźnieniem **0.7** ms.  
**Express** obsłużył **57,880** odpowiedzi na sekundę ze średnim opóźnieniem **4.4** ms.

![](.gitbook/assets/single_query%20%282%29.png)

![Fiber vs Express](.gitbook/assets/single_query_express.png)

### Serializacja JSON

**Fiber** obsłużył **1,146,667** odpowiedzi na sekundę ze średnim opóźnieniem **0.4** ms.  
**Express** obsłużył **244,847** odpowiedzi na sekundę ze średnim opóźnieniem **1.1** ms.

![](.gitbook/assets/json%20%281%29.png)

![Fiber vs Express](.gitbook/assets/json_express.png)

## Go web framework benchmark

🔗 [https://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

* **CPU** Intel\(R\) Xeon\(R\) Gold 6140 CPU @ 2.30GHz
* **Pamięć RAM** 4GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux

Pierwszy test polega na sztucznym wymuszeniu **0 ms**, **10 ms**, **100 ms**, **500 ms** czasu przetwarzania w handlerach.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

Ilość jednoczesnych połączeń wynosi **5000**.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_latency.png)

Latency to rzeczywisty czas przetwarzania przez serwery. _Im niższy, tym lepiej_

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

Allocations to ilość zaalokowanej pamięci przez serwery podczas działania testu. W megabajtach. _Im niższy, tym lepiej_

Jeżeli włączymy **http pipelining**, test daje poniższe rezultaty:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

Test na konkurencję z **30 ms** czasem przetwarzania, wyniki dla **100**, **1000**, **5000** klientów są następujące:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

Jeżeli włączymy **http pipelining**, test daje poniższe rezultaty:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)

Schemat zależnych pakietów dla wersji `v1.9.0`

![](.gitbook/assets/graph.svg)

