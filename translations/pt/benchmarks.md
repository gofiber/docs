---
description: Este benchmark tem como objetivo comparar o desempenho das estruturas da Web Fiber e outros Go.
---

# 🤖 Benchmarks

## TechEmpower

🔗 [https://www.techempower.com/benchmarks/](https://www.techempower.com/benchmarks/)

- **CPU** Intel Xeon Gold 5120
- **MEM** 32GB
- **GO** go1.13.6 linux / amd64
- **OS** Linux
- Switch Cisco dedicado de 10 gigabits Ethernet da **NET** .

Para ver todas as estruturas de idiomas, visite [Todos os resultados em texto sem formatação](https://www.techempower.com/benchmarks/#section=test&runid=350f0783-cc9b-4259-9831-28987799782a&hw=ph&test=plaintext) .
 Para visualizar a lista, visite [Resultados em texto sem formatação](https://www.techempower.com/benchmarks/#section=test&runid=350f0783-cc9b-4259-9831-28987799782a&hw=ph&test=plaintext&l=zijocf-1r) .

### Texto simples

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-plaintext.png)

### Latência de texto sem formatação

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-plaintext-latency.png)

### Serialização JSON

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-json.png)

### Consulta única

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-single-query.png)

### Várias consultas

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-multiple-queries.png)

### Atualizações de dados

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-updates.png)

## Ir referência da estrutura da web

🔗 [https://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

- **CPU** Intel (R) Xeon (R) Gold 6140 CPU a 2,30 GHz
- **MEM** 4GB
- **GO** go1.13.6 linux / amd64
- **OS** Linux

O primeiro caso de teste é simular o tempo de processamento de **0 ms** , **10 ms** , **100 ms** , **500 ms** nos manipuladores.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

Os clientes de simultaneidade são **5000** .

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_latency.png)

Latência é o tempo de tempo real de processamento pelos servidores da web. *Quanto menor, melhor.*

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

Allocs são as alocações de heap pelos servidores da web quando o teste está em execução. A unidade é MB. *Quanto menor, melhor.*

Se **ativarmos o pipelining http** , resultado do teste como abaixo:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

Teste de simultaneidade em **30 ms de** tempo de processamento, o resultado do teste para **100** , **1000** , **5000** clientes é:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

Se **ativarmos o pipelining http** , resultado do teste como abaixo:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)
