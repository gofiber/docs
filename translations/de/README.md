---
description: >-
  Eine Online-API-Dokumentation mit Beispielen, damit Sie sofort mit dem Erstellen von Web-Apps mit Fiber beginnen können!
---

# 📖 Erste Schritte

**Fiber** ist ein an [Express](https://github.com/expressjs/express) angelehntes **Webframework**, welches auf [Fasthttp](https://github.com/valyala/fasthttp), der **schnellsten** HTTP-Engine für [Go](https://golang.org/doc/), aufbaut. Konzipiert, um die Voraussetzungen für eine **schnelle** und **einfache** Entwicklung mit **null Speicherzuweisung** und **hoher Leistung** zu schaffen.

## Installation

Zuerst einmal musst du Go [herunterladen](https://golang.org/dl/) und installieren. `1.11` oder höher wird benötigt.

Die Installation erfolgt mit dem Befehl [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

```bash
go get -u github.com/gofiber/fiber
```

## Keine Speicherzuweisung

{% hint style="warning" %}
Manche Werte die von [**fiber.Ctx**](ctx.md) zurückgegeben werden, sind standardmäßig **nicht** unveränderbar
{% endhint %}

Weil fiber für **Hochleistung** optimiert ist, sind zurückgegebene Werte von [**fiber.Ctx**](ctx.md) standardmäßig **nicht** unveränderbar und **werden** zwischen Anfragen wiederverwendet. Als eine Faustregel, du **darfst** Kontext Werte nur im Anfragen Handler benutzen, und du **darfst keine** Referenzen auf diese Werte speichern. Sobald du vom Anfragen Handler zurückkehrst, werden alle Werte die du vom Kontext erhalten hast, in späteren Anfragen wiederverwendet und werden sich spontan ändern. Hier ein Beispiel:

```go
func handler(c *fiber.Ctx) {
    result := c.Param("foo") // Ergebnis ist nur innerhalb dieser Methode gültig
}
```

Wenn Sie solche Werte außerhalb des Handlers weiterverwenden möchten, erstellen Sie Kopien ihres **darunterliegenden Puffers** unter Verwendung der Funktion [copy](https://golang.org/pkg/builtin/#copy). Hier ist ein Beispiel für das Fortbestehen einer Zeichenkette (String):

```go
func handler(c *fiber.Ctx) {
    result := c. aram("foo") // Ergebnis ist nur gültig innerhalb dieser Methode
    newBuffer := make([]byte, len(result))
    copy(newBuffer, Ergebnis)
    newResult := string(newBuffer) // newResult ist unveränderbar und gültig für immer
}
```

Wir haben eine benutzerdefinierte Funktion `ImmutableString` erstellt, die das obige tut und im Paket [gofiber/utils](https://github.com/gofiber/utils) verfügbar ist.

```go
app.Get("/:foo", func(c *fiber.Ctx) {
    result := utils.ImmutableString(c.Param("foo")) 
    // result is now immutable
})
```

Alternatively, you can also use the[ **Immutable setting**](app.md#settings). It will make all values returned from the context immutable, allowing you to persist them anywhere. Of course, this comes at the cost of performance.

For more information, please check [**\#426**](https://github.com/gofiber/fiber/issues/426) **and** [**\#185**](https://github.com/gofiber/fiber/issues/185).

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

## Basic routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI \(or path\) and a specific HTTP request method \(GET, PUT, POST and so on\).

{% hint style="info" %}
Each route can have **multiple handler functions**, that is executed when the route is matched.
{% endhint %}

Route definition takes the following structures:

```go
// Function signature
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` ist eine Instanz von **Fiber**.
* `Methode` ist eine [HTTP-Anfragemethode](https://fiber.wiki/application#methods), in Großschreibung: `Get`, `Put`, `Post`, etc.
* `path` ist ein virtueller Pfad auf dem Server.
* `func(*fiber.Ctx)` ist eine Callback-Funktion, die den [Kontext](https://fiber.wiki/context) enthält, der ausgeführt wird, wenn die Route übereinstimmt.

**Simple route**

```go
// Respond with "Hello, World!" on root path, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

**Parameter**

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

