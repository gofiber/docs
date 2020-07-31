---
description: >-
  Онлайн документация по API с примерами, так что вы можете начать создавать веб-приложения с Fiber прямо сейчас!
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

Because fiber is optimized for  **high-performance**, values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default and **will** be re-used across requests. As a rule of thumb, you **must** only use context values within the handler, and you **must not** keep any references. As soon as you return from the handler, any values you have obtained from the context will be re-used in future requests and will change below your feet. Here is an example:

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

We created a custom `ImmutableString` function that does the above and is available in the [gofiber/utils](https://github.com/gofiber/utils) package.

```go
app.Get("/:foo", func(c *fiber.Ctx) {
    result := utils.ImmutableString(c.Param("foo")) 
    // result is now immutable
}
```

Alternatively, you can also use the[ **Immutable setting**](app.md#settings). It will make all values returned from the context immutable, allowing you to persist them anywhere. Of course, this comes at the cost of performance.

For more information, please check [**\#426**](https://github.com/gofiber/fiber/issues/426) ****and ****[**\#185**](https://github.com/gofiber/fiber/issues/185).

## Hello, World!

Embedded below is essentially the most straightforward **Fiber** app, which you can create.

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

Browse to `http://localhost:3000,` and you should see `Hello, World!` on the page.

## Базовая маршрутизация

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI \(or path\) and a specific HTTP request method \(GET, PUT, POST and so on\).

{% hint style="info" %}
Each route can have **multiple handler functions**, that is executed when the route is matched.
{% endhint %}

Route definition takes the following structures:

```go
// Function signature
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` является экземпляром **Fiber**.
* `Method` — это [метод HTTP запроса](https://fiber.wiki/application#methods), начинающийся с заглавной буквы: `Get`, `Put`, `Post` и так далее.
* `path` — это виртуальный путь на сервере.
* `func(*fiber.Ctx)` является функцией обратного вызова (callback), содержащей [Context](https://fiber.wiki/context), который выполняется при совпадении маршрута.

**Simple route**

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

**Optional parameter**

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

**Wildcards**

```go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path: " + c.Params("*"))
  // => API path: user/john
})
```

## Static files

To serve static files such as **images**, **CSS**, and **JavaScript** files, replace your function handler with a file or directory string.

Function signature:

```go
app.Static(prefix, root string)
```

Use the following code to serve files in a directory named `./public`:

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

Now, you can load the files that are in the `./public` directory:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

## Note

For more information on how to build APIs in Go with Fiber, please check out this excellent article [on building an express-style API in Go with Fiber](https://blog.logrocket.com/express-style-api-go-fiber/)

