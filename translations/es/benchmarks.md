---
description: >-
  Estas pruebas tienen como objetivo comparar el rendimiento de Fiber y otros web frameworks.
---

# 📊 Benchmarks

## TechEmpower

🔗 [https://www.techempower.com/benchmarks/](https://www.techempower.com/benchmarks/#section=test&runid=c7152e8f-5b33-4ae7-9e89-630af44bc8de&hw=ph&test=plaintext)

* **CPU** Intel Xeon Gold 5120
* **MEM** 32GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux
* **NET** Dedicated Cisco 10-gigabit Ethernet switch.

### Texto simple

**Fiber** gestionó **6,162,556** respuestas por segundo con una latencia promedio de **2.0** ms.  
**Express** gestionó **367,069** respuestas por segundo con una latencia promedio de **354.1** ms.

![](.gitbook/assets/plaintext%20%281%29.png)

![Fiber vs Express](.gitbook/assets/plaintext_express.png)

### Actualizaciones de datos

**Fiber** gestionó **11,846** respuestas por segundo con una latencia promedio de **42.8** ms.  
**Express** gestionó **2,066** respuestas por segundo con una latencia media de **390.44** ms.

![](.gitbook/assets/data_updates.png)

![Fiber vs Express](.gitbook/assets/data_updates_express%20%281%29.png)

### Múltiples consultas

**Fiber** gestionó **19,664** respuestas por segundo con una latencia promedio de **25,7** ms.  
**Express** gestionó **4,302** respuestas por segundo con una latencia promedio de **117.2** ms.

![](.gitbook/assets/multiple_queries%20%281%29.png)

![Fiber vs Express](.gitbook/assets/multiple_queries_express.png)

### Consulta individual

**Fiber** gestionó **368,647** respuestas por segundo con una latencia promedio de **0.7** ms.  
**Express** gestionó **57, 80** respuestas por segundo con una latencia promedio de **4.4** ms.

![](.gitbook/assets/single_query%20%282%29.png)

![Fiber vs Express](.gitbook/assets/single_query_express.png)

### Serialización JSON

**Fiber** gestionó **1,146,667** respuestas por segundo con una latencia promedio de **0.4** ms.  
**Express** gestionó **244,847** respuestas por segundo con una latencia promedio de **1.1** ms.

![](.gitbook/assets/json%20%281%29.png)

![Fiber vs Express](.gitbook/assets/json_express.png)

## Go web framework benchmark

🔗 [https://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

* **CPU** Intel\(R\) Xeon\(R\) Gold 6140 CPU @ 2.30GHz
* **MEM** 4GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux

El primer caso de prueba es simular **0 ms**, **10 ms**, **100 ms**, **500 ms** tiempo de procesamiento en los manejadores.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

Los clientes en concurrencia son **5000**.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_latency.png)

Latency es el tiempo de procesamiento real por los servidores web. _Cuanto más pequeño mejor._

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

Allocs son la pila de asignaciones por servidores web cuando se está ejecutando la prueba. La unidad es MB. _Cuanto más pequeño mejor._

Si habilitamos **http pipelining**, este es el resultado:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

Prueba de concurrencia con **30 ms** de tiempo de procesamiento, el resultado de la prueba para **100**, **1000** y **5000** clientes es:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

Si habilitamos **http pipelining**, este es el resultado:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)

Gráfico de dependencia para `v1.9.0`

![](.gitbook/assets/graph.svg)

