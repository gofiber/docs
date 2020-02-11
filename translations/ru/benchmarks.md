---
description: Этот тест предназначен для сравнения производительности Fiber и других веб-платформ Go.
---

# 🤖 Тесты

## TechEmpower

🔗 [https://www.techempower.com/benchmarks/](https://www.techempower.com/benchmarks/)

- **Процессор** Intel Xeon Gold 5120
- **МЕМ** 32 ГБ
- **GO** go1.13.6 linux / amd64
- **ОС** Linux
- **NET** Выделенный Cisco 10-гигабитный коммутатор Ethernet.

Чтобы просмотреть все языковые рамки, посетите страницу « [Все тексты»](https://www.techempower.com/benchmarks/#section=test&runid=350f0783-cc9b-4259-9831-28987799782a&hw=ph&test=plaintext) .
 Чтобы просмотреть список самостоятельно, посетите [Plaintext Go Results](https://www.techempower.com/benchmarks/#section=test&runid=350f0783-cc9b-4259-9831-28987799782a&hw=ph&test=plaintext&l=zijocf-1r) .

### Простой текст

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-plaintext.png)

### Латентность открытого текста

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-plaintext-latency.png)

### JSON-сериализация

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-json.png)

### Одиночный запрос

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-single-query.png)

### Несколько запросов

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-multiple-queries.png)

### Обновление данных

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-updates.png)

## Go Web Framework Benchmark

🔗 [https://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

- **Процессор** Intel® R Xeon® Gold 6140 с тактовой частотой 2,30 ГГц
- **МЕМ** 4 ГБ
- **GO** go1.13.6 linux / amd64
- **ОС** Linux

Первый тестовый случай - это имитация времени обработки в обработчиках **0 мс** , **10 мс** , **100 мс** , **500 мс** .

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

Число клиентов параллелизма составляет **5000** .

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_latency.png)

Задержка - это время реального времени обработки веб-серверами. *Чем меньше, тем лучше.*

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

Allocs - это распределение кучи веб-серверами во время выполнения теста. Единица измерения МБ. *Чем меньше, тем лучше.*

Если мы включим **http-конвейеризацию** , результат теста будет следующим:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

Тест параллелизма за **30 мс** времени обработки, результат теста для **100** , **1000** , **5000** клиентов:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

Если мы включим **http-конвейеризацию** , результат теста будет следующим:

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)
