---
description: >-
  Esse benchmark tem como objetivo comparar o desempenho do Fiber em relação a outros frameworks web.
---

# 🤖 Benchmarks

## TechEmpower

🔗 [https://www.techempower.com/benchmarks/](https://www.techempower.com/benchmarks/#section=test&runid=c7152e8f-5b33-4ae7-9e89-630af44bc8de&hw=ph&test=plaintext)

* **CPU** Intel Xeon Gold 5120
* **MEM** 32GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux
* **REDE** Switch Ethernet Cisco de 10 gigabits dedicado.

### Texto Simples

O **Fiber** lida com **6,162,556** respostas por segundo com uma latência média de **2.0 **ms.  
O **Express** lida com **367,909** respostas por segundo com uma latência média de **354.1** ms.

![](.gitbook/assets/plaintext%20%281%29.png)

![Fiber vs Express](.gitbook/assets/plaintext_express.png)

### Atualização de dados

O **Fiber** lida com **11,846** respostas por segundo com uma latência média de **42.8 **ms.  
O **Express** lida com **2,066** respostas por segundo com uma latência média de **390.44** ms.

![](.gitbook/assets/data_updates.png)

![Fiber vs Express](.gitbook/assets/data_updates_express%20%281%29.png)

### Queries Múltiplas

O **Fiber** lida com **19,664** respostas por segundo com uma latência média de **25.7 **ms.  
O **Express** lida com **4,302** respostas por segundo com uma latência média de **117.2** ms.

![](.gitbook/assets/multiple_queries%20%281%29.png)

![Fiber vs Express](.gitbook/assets/multiple_queries_express.png)

### Query Única

O **Fiber** lida com **368,647** respostas por segundo com uma latência média de **0.7** ms.  
O **Express** lida com **57,880** respostas por segundo com uma latência média de **4.4** ms.

![](.gitbook/assets/single_query%20%282%29.png)

![Fiber vs Express](.gitbook/assets/single_query_express.png)

### Serialização JSON

O **Fiber** lida com **1,146,667** respostas por segundo com uma latência média de **0.4** ms.  
O**Express** lida com **244,847** respostas por segundo com uma latência média de **1.1** ms.

![](.gitbook/assets/json%20%281%29.png)

![Fiber vs Express](.gitbook/assets/json_express.png)

## Go web framework benchmark

🔗 [https://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

* **CPU** Intel\(R\) Xeon\(R\) Gold 6140 CPU @ 2.30GHz
* **MEM** 4GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux

O primeiro caso de teste é simular o tempo de processamento de **0 ms**, **10 ms**, **100 ms**, **500 ms** nos handlers.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

A quantidade de clientes simultâneos é de **5000**.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_latency.png)

Latência é o tempo de processamento real dos servidores web. _O menor é melhor._

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

Allocs é a alocação de heap pelos servidores web quando o teste está em execução. A unidade é MB. _O menor é melhor._

Se habilitarmos **http pipelining**, resultado do teste abaixo:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

Para teste de simultaneidade com tempo de processamento igual a **30 ms**, o resultado do teste para **100**, **1000**, **5000** clientes é:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

Se habilitarmos **http pipelining**, resultado do teste abaixo:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)

Gráfico de dependência para `v1.9.0`

![](.gitbook/assets/graph.svg)

