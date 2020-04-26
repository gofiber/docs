---
description: Una documentazione API per iniziare a costruire web apps con Fiber.
---

# 📖 Introduzione

 [![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases)  [![](https://img.shields.io/badge/go.dev-007d9c?logo=go&logoColor=white&style=flat-square)](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc)   [![](https://goreportcard.com/badge/github.com/gofiber/fiber?style=flat-square)](https://goreportcard.com/report/github.com/gofiber/fiber)  [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Test?label=tests&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3ATest)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Gosec?label=gosec&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3AGosec)

**Fiber** è un **web framework** ispirato da [Express](https://github.com/expressjs/express) e costruito su [Fasthttp](https://github.com/valyala/fasthttp), l'engine HTTP **più veloce** per [Go](https://golang.org/doc/). Creato per **semplificare** le cose per uno sviluppo **veloce**, con **zero memoria occupata** e **performance**.

## Installation

Prima di tutto, [scarica](https://golang.org/dl/) e installa Go. La versione `1.11` o superiore è richiesta.

L'installazione viene eseguita usando il comando [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

```bash
go get -u github.com/gofiber/fiber
```

## Hello, World!

Qui trovi l'app più semplice che puoi creare con **Fiber**.

```go
package main

import "github.com/gofiber/fiber"

func main() {
  app := fiber.New()

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Ciao Mondo!")
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
// Rispondi con "Ciao, Mondo!" sul percorso root, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

**Parametri**

```go
// GET http://localhost:8080/ciao%20mondo

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Richiesta Get con valore: " + c.Params("value"))
  // => Richiesta Get con valore: ciao mondo
})
```

**Parametri opzionali**

```go
// GET http://localhost:3000/john

app.Get("/:name?", func(c *fiber.Ctx) {
  if c.Params("name") != "" {
    c.Send("Ciao " + c.Params("name"))
    // => Ciao john
  } else {
    c.Send("Dov'è john?")
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

