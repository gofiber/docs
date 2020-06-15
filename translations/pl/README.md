---
description: >-
  An online API documentation with examples so you can start building web apps with Fiber right away!
---

# 📖 Pierwsze kroki

**Fiber** to framework do **tworzenia aplikacji internetowych**, inspirowany przez [Express](https://github.com/expressjs/express) oparty o [Fasthttp](https://github.com/valyala/fasthttp), **najszybszy** silnik HTTP dla [Go](https://golang.org/doc/). Zaprojektowany z myślą o **łatwym** i **szybkim** tworzeniu **wydajnych** i z **zerową alokacją pamięci** aplikacji.

## Installation

Po pierwsze [pobierz](https://golang.org/dl/) i zainstaluj Go. Wymagana jest wersja `1.11` lub wyższa.

Instalujacja jest wykonywana za pomocą [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

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

For more information, please check **\*\*\[**\#426**\]\(**[https://github.com/gofiber/fiber/issues/426](https://github.com/gofiber/fiber/issues/426)**\) and \*\***[**\#185**](https://github.com/gofiber/fiber/issues/185).

## Hello, World!

Poniżej jest przedstawiona zasadniczo najprostsza aplikacja **Fiber**, która można stworzyć.

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

Przejdź do `http://localhost:3000` i na stronie powinno ci się ukazać `Hello, World!`.

## Basic routing

Routing określa jak aplikacja powinna odpowiedzieć na zapytanie na określony endpoint, którym jest URI \(lub ścieżka\) i metoda zapytania HTTP \(GET, PUT, POST i tym podobne\).

{% hint style="info" %}
Każdy route może mieć **wiele funkcji-handlerów**, które są uruchamiane, kiedy route jest poprawnie dopasowane.
{% endhint %}

Definicja route przyjmuje następującą strukturę:

```go
// Podpis funkcji
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` jest instancją **Fiber**.
* `Method` to [Metoda wysyłania zapytania HTTP](https://fiber.wiki/application#methods), rozpoczynająca się wielką literą, np. `Get`, `Put` czy `Post`.
* `path` to wirtualna ścieżka na serwerze.
* `func(*Fiber.Ctx)` to funkcja-callback zawierająca [Context](https://fiber.wiki/context), która się uruchamia, kiedy route jest dopasowany.

**Prosty route**

```go
// Respond with "Hello, World!" on root path, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

**Parametry**

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Get request with value: " + c.Params("value"))
  // => Get request with value: hello world
})
```

**Opcjonalne parametry**

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

**Wildcardy**

```go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path: " + c.Params("*"))
  // => API path: user/john
})
```

## Static files

Aby serwować statyczne pliki takie jak **zdjęcia**, **arkusze CSS** czy **JavaScript**, zastąp swoją funkcję-handler na ścieżkę pliku lub katalogu.

Function signature:

```go
app.Static(prefix, root string)
```

Użyj poniższego kodu, aby serwować pliki statyczne w katalogu o nazwie `./public`:

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

Teraz możesz ładować pliki, które znajdują się w katalogu `./public`:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

## Note

For more information on how to build APIs in Go with Fiber, please check out this awesome article [on building an express-style API in Go with Fiber](https://blog.logrocket.com/express-style-api-go-fiber/)

