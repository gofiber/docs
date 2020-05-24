---
description: Dokumentacja API, aby zacząć tworzyć aplikacje z Fiber.
---

# 📖 Pierwsze kroki

 [![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases)  [![](https://img.shields.io/badge/go.dev-007d9c?logo=go&logoColor=white&style=flat-square)](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc)   [![](https://goreportcard.com/badge/github.com/gofiber/fiber?style=flat-square)](https://goreportcard.com/report/github.com/gofiber/fiber)  [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Test?label=tests&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3ATest)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Gosec?label=gosec&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3AGosec)

**Fiber** to framework do **tworzenia aplikacji internetowych**, inspirowany przez [Express](https://github.com/expressjs/express) oparty o [Fasthttp](https://github.com/valyala/fasthttp), **najszybszy** silnik HTTP dla [Go](https://golang.org/doc/). Zaprojektowany z myślą o **łatwym** i **szybkim** tworzeniu **wydajnych** i z **zerową alokacją pamięci** aplikacji.

## Installation

Po pierwsze [pobierz](https://golang.org/dl/) i zainstaluj Go. Wymagana jest wersja `1.11` lub wyższa.

Instalujacja jest wykonywana za pomocą [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

```bash
go get -u github.com/gofiber/fiber
```

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
// Wysyła "Hello, World!" na głównej ścieżce, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

**Parametry**

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Zapytanie GET z wartością: " + c.Params("value"))
  // => Zapytanie GET z wartością: hello world
})
```

**Opcjonalne parametry**

```go
// GET http://localhost:3000/john

app.Get("/:name?", func(c *fiber.Ctx) {
  if c.Params("name") != "" {
    c.Send("Witaj " + c.Params("name"))
    // => Witaj john!
  } else {
    c.Send("Gdzie jest john?")
  }
})
```

**Wildcardy**

```go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("Ścieżka API: " + c.Params("*"))
  // => Ścieżka API: user/john
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

