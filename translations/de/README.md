---
description: Eine API-Dokumentation, damit du mit der Entwicklung von Webanwendungen mit Fiber beginnen kannst.
---

# 📖 Erste Schritte

 [![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases)  [![](https://img.shields.io/badge/go.dev-007d9c?logo=go&logoColor=white&style=flat-square)](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc)   [![](https://goreportcard.com/badge/github.com/gofiber/fiber?style=flat-square)](https://goreportcard.com/report/github.com/gofiber/fiber)  [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Test?label=tests&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3ATest)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Gosec?label=gosec&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3AGosec)

**Fiber** ist ein an [Express](https://github.com/expressjs/express) angelehntes **Webframework**, welches auf [Fasthttp](https://github.com/valyala/fasthttp), der **schnellsten** HTTP-Engine für [Go](https://golang.org/doc/), aufbaut. Konzipiert, um die Voraussetzungen für eine **schnelle** und **einfache** Entwicklung mit **null Speicherzuweisung** und **hoher Leistung** zu schaffen.

## Installation

Zunächst einmal musst du Go [downloaden](https://golang.org/dl/) und installieren. `1.11` oder höher wird benötigt.

Die Installation erfolgt mit dem Befehl [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

```bash
go get -u github.com/gofiber/fiber
```

## Hello, World!

Eingebettet unten ist im Wesentlichen die einfachste **Fiber** App, die du erstellen kannst.

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

Besuche `http://localhost:3000` und du solltest ` Hello, World!` auf der Seite sehen.

## Basic routing

Routing bezieht sich darauf, wie eine Anwendung auf einen bestimmten Endpunkt antworten soll die eine URI \(oder path\) und eine bestimmte HTTP-Anfragemethode \(GET, PUT, POST usw.) ist.

{% hint style="info" %}
Jede Route kann **mehrere Handler-Funktionen**haben, die ausgeführt werden, wenn die Route übereinstimmt.
{% endhint %}

Die Routendefinition benötigt folgende Strukturen:

```go
// Funktionssignatur
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` ist eine Instanz von **Fiber**.
* `Method` is an [HTTP request method](https://fiber.wiki/application#methods), in capitalization: `Get`, `Put`, `Post`, etc.
* `path` ist ein virtueller Pfad auf dem Server.
* `func(*fiber.Ctx)` ist eine Callback-Funktion, die den [Kontext](https://fiber.wiki/context) enthält, der ausgeführt wird, wenn die Route übereinstimmt.

**Einfache Route**

```go
// Antworte mit "Hello, World!" im Root-Pfad, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

**Parameter**

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Anfrage mit Wert bekommen: " + c.Params("value"))
  // => Bekomme den Wert: hello world
})
```

**Optionale Parameter**

```go
// GET http://localhost:3000/john

app.Get("/:name?", func(c *fiber.Ctx) {
  if c.Params("name") != "" {
    c.Send("Hallo " + c.Params("name"))
    // => Hello john
  } else {
    c.Send("Wo ist John?")
  }
})
```

**Platzhalter**

```go
app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API Pfad: " + c.Params("*"))
  // => API Pfad: user/john
})
```

## Static files

Um statische Dateien wie z. B. **Bilder**, **CSS** und **JavaScript** Dateien zu liefern muss man den Funktionshandler durch einen Datei- oder Verzeichnisstring ersetzen.

Funktionssignatur:

```go
app.Static(prefix, root string)
```

Verwende folgenden Code, um Dateien in einem Verzeichnis mit dem Namen `./public` auszugeben:

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

Du kannst nun auf die Dateien im `./public` Verzeichnis zugreifen:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

