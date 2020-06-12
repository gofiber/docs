---
description: >-
  An online API documentation with examples so you can start building web apps with Fiber right away!
---

# 📖 Приступая к работе

**Fiber** — это веб фреймворк, который был вдохновлен [Express](https://github.com/expressjs/express) и основан на [Fasthttp](https://github.com/valyala/fasthttp), самом **быстром** HTTP-движке написанном на [Go](https://golang.org/doc/). Фреймворк был разработан с целью **упростить** процесс **быстрой** разработки **высокопроизводительных** веб-приложений с **нулевым распределением памяти**.

## Installation

Прежде всего, [скачайте](https://golang.org/dl/) и установите Go. `1.11` или выше является обязательным.

Установите Fiber, используя команду [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

```bash
go get -u github.com/gofiber/fiber
```

## Zero Allocation

{% hint style="warning" %}
Some values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default
{% endhint %}

Because fiber is optimized for **high performance**, values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default and **will** be re-used across requests. As a rule of thumb, you **must** only use context values within the handler, and you **must not** keep any references. As soon as you return from the handler, any values you have obtained from the context will be re-used in future requests and will change below your feet. Here is an example:

```go
func handler(c *fiber.Ctx) {
    result := c.Param("foo") // result is only valid within this method
}
```

If you need to persist such values outside the handler, make copies of their **underlying buffer** using the [copy](https://golang.org/pkg/builtin/#copy) builtin. Here is an example for persisting a string:

```go
func handler(c *fiber.Ctx) {
    result := c.Param("foo") // result is only valid within this method
    newBuffer := make([]byte, len(result))
    copy(newBuffer, result)
    newResult := string(newBuffer) // newResult is immutable and valid forever
}
```

Alternatively, you can also use the[ **Immutable setting**](app.md#settings). It will make all values returned from the context immutable, allowing you to persist them anywhere. Of course, this comes at the cost of performance.

For more information, please check ****[**\#426**](https://github.com/gofiber/fiber/issues/426) and ****[**\#185**](https://github.com/gofiber/fiber/issues/185).

## Hello, World!

Показанный ниже пример — это самое простое **Fiber** приложение, которое вы можете создать.

```go
package main

import "github.com/gofiber/fiber"

func main() {
  app := fiber.New()

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Hello, World!")
  })

  app.Listen(3000)
}
```

```text
go run server.go
```

Перейдите на `http://localhost:3000` в вашем браузере и вы увидите `Hello, World!` на странице.

## Базовая маршрутизация

Маршрутизация относится к определению того, как приложение отвечает на клиентский запрос на определенную конечную точку (endpoint), которая является URI \(или путь\) и определенным методом HTTP запроса \(GET, PUT, POST и так далее\).

{% hint style="info" %}
Каждый маршрут может иметь **функции обработчика**, который выполняется при совпадении маршрута.
{% endhint %}

Определение маршрута принимает следующие структуры:

```go
// Function signature
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` является экземпляром **Fiber**.
* `Method` — это [метод HTTP запроса](https://fiber.wiki/application#methods), начинающийся с заглавной буквы: `Get`, `Put`, `Post` и так далее.
* `path` — это виртуальный путь на сервере.
* `func(*fiber.Ctx)` является функцией обратного вызова (callback), содержащей [Context](https://fiber.wiki/context), который выполняется при совпадении маршрута.

**Простой маршрут**

```go
// Respond with "Hello, World!" on root path, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

**Параметры**

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Get request with value: " + c.Params("value"))
  // => Get request with value: hello world
})
```

**Необязательные параметры**

```go
// GET http://localhost:3000/john

app.Get("/:name?", func(c *fiber.Ctx) {
  if c.Params("name") != "" {
    c.Send("Hello " + c.Params("name"))
    // => Hello john
  } else {
    c.Send("Where is john?")
  }
})
```

**Шаблоны (wildcards)**

```go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path: " + c.Params("*"))
  // => API path: user/john
})
```

## Static files

Для обработки статических файлов, таких как **изображения**, **CSS** и **JavaScript**, замените ваш обработчик функции на строку файла или каталога.

Сигнатура функции:

```go
app.Static(prefix, root string)
```

Используйте следующий код для отображения файлов в каталоге `./public`:

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

Теперь вы можете получить доступ к файлам, которые находятся в папке `./public`, вот так:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```


## Note

For more information on how to build APIs in Go with Fiber, please check out this awesome article [on building an express-style API in Go with Fiber](https://blog.logrocket.com/express-style-api-go-fiber/)