---
description: >-
  An online API documentation with examples so you can start building web apps with Fiber right away!
---

# 📖 Introduzione

**Fiber** è un **web framework** ispirato da [Express](https://github.com/expressjs/express) e costruito su [Fasthttp](https://github.com/valyala/fasthttp), l'engine HTTP **più veloce** per [Go](https://golang.org/doc/). Creato per **semplificare** le cose per uno sviluppo **veloce**, con **zero memoria occupata** e **performance**.

## Installation

Prima di tutto, [scarica](https://golang.org/dl/) e installa Go. La versione `1.11` o superiore è richiesta.

L'installazione viene eseguita usando il comando [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

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

Qui trovi l'app più semplice che puoi creare con **Fiber**.

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

Visita `http://localhost:3000` e dovresti vedere `Ciao, Mondo!` nella pagina.

## Basic routing

Il routing si riferisce alla determinazione di come un'applicazione risponde ad una richiesta di un client ad un determinato endpoint, che è un URI (o path) e un metodo di richiesta HTTP specifico (GET, PUT, POST e così via).

{% hint style="info" %}
Ogni route può avere **funzioni multiple di gestione**, che vengono eseguite quando la route è soddisfatta.
{% endhint %}

La definizione di routes utilizza queste strutture:

```go
// Firma della funzione
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` è un'istanza di **Fiber**.
* `Method` è un [metodo di richiesta HTTP](https://fiber.wiki/application#methods), in maiuscolo: `Get`, `Put`, `Post`, ecc.
* `path` è un percorso virtuale sul server.
* `func(*fiber.Ctx)` è una funzione di callback contenente il [Contesto](https://fiber.wiki/context) eseguito quando il percorso è soddisfatto.

**Route semplice**

```go
// Respond with "Hello, World!" on root path, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

**Parametri**

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Get request with value: " + c.Params("value"))
  // => Get request with value: hello world
})
```

**Parametri opzionali**

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

Per servire file statici come **immagini**, **CSS** e **JavaScript**, sostituisci il gestore dellea funzione con un file o una stringa di directory.

Firma della funzione:

```go
app.Static(prefix, root string)
```

Usa il seguente codice per servire i file in una directory `./public`:

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

Ora puoi caricare i file che sono nella directory `./public`:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```


## Note

For more information on how to build APIs in Go with Fiber, please check out this awesome article [on building an express-style API in Go with Fiber](https://blog.logrocket.com/express-style-api-go-fiber/)