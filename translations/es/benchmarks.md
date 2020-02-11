---
description: Este punto de referencia tiene como objetivo comparar el rendimiento de Fiber y otros marcos web Go.
---

# 🤖 Puntos de referencia

## TechEmpower

🔗 [https://www.techempower.com/benchmarks/](https://www.techempower.com/benchmarks/)

- **CPU** Intel Xeon Gold 5120
- **MEM** 32GB
- **GO** go1.13.6 linux / amd64
- **OS** Linux
- **NET** Conmutador Cisco de 10 gigabits Ethernet dedicado.

Para ver todos los marcos de lenguaje, visite [Texto sin formato Todos los resultados](https://www.techempower.com/benchmarks/#section=test&runid=350f0783-cc9b-4259-9831-28987799782a&hw=ph&test=plaintext) .
 Para ver la lista usted mismo, visite [Plaintext Go Results](https://www.techempower.com/benchmarks/#section=test&runid=350f0783-cc9b-4259-9831-28987799782a&hw=ph&test=plaintext&l=zijocf-1r) .

### Texto sin formato

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-plaintext.png)

### Latencia de texto sin formato

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-plaintext-latency.png)

### Serialización JSON

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-json.png)

### Consulta única

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-single-query.png)

### Múltiples consultas

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-multiple-queries.png)

### Actualizaciones de datos

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-updates.png)

## Ir referencia de marco web

🔗 [https://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

- **CPU** Intel (R) Xeon (R) Gold 6140 CPU @ 2.30GHz
- **MEM** 4GB
- **GO** go1.13.6 linux / amd64
- **OS** Linux

El primer caso de prueba es simular **0 ms** , **10 ms** , **100 ms** , **500 ms de** tiempo de procesamiento en los controladores.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

Los clientes de concurrencia son **5000** .

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_latency.png)

La latencia es el tiempo de procesamiento real de los servidores web. *Cuanto más pequeño, mejor.*

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

Allocs es la asignación de almacenamiento dinámico por parte de los servidores web cuando se ejecuta la prueba. La unidad es MB. *Cuanto más pequeño, mejor.*

Si habilitamos la **canalización de http** , pruebe el resultado de la siguiente manera:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

Prueba de concurrencia en **30 ms de** tiempo de procesamiento, el resultado de la prueba para **100** , **1000** , **5000** clientes es:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

Si habilitamos la **canalización de http** , pruebe el resultado de la siguiente manera:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)
