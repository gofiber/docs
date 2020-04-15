---
description: Een API-documentatie om te beginnen met het bouwen van web-apps met Fiber.
---

# 📖 Aan de slag

[![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases) ![](https://img.shields.io/badge/goreport-A%2B-brightgreen?style=flat-square) [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber) [![](https://img.shields.io/travis/gofiber/fiber/master.svg?label=linux&style=flat-square)](https://travis-ci.org/gofiber/fiber) [![](https://img.shields.io/travis/gofiber/fiber/master.svg?label=windows&style=flat-square)](https://travis-ci.org/gofiber/fiber)

**Fiber** is een **web framework** geïnspireerd door [Express](https://github.com/expressjs/express) gebouwd bovenop [Fasthttp](https://github.com/valyala/fasthttp), de **snelste** HTTP-engine voor [Go](https://golang.org/doc/). Ontworpen om **snelle** ontwikkeling **gemakkelijker** te maken **zonder geheugenallocatie** tezamen met **hoge prestaties**.

## Installatie

Allereerst, [download](https://golang.org/dl/) en installeer Go. `1.11` of hoger is vereist.

Installatie wordt gedaan met behulp van het [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) commando:

```bash
go get -u github.com/gofiber/fiber
```

## Hallo, Wereld!

Hieronder staat de eenvoudigste **Fiber**-app ingesloten, welke jij kunt maken.

```go
package main

import "github.com/gofiber/fiber"

func main() {
  app := fiber.New()

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Hallo, Wereld!")
  })

  app.Listen(3000)
}
```

```text
go run server.go
```

Navigeer naar `http://localhost:3000` en je zal `Hallo, Wereld!` op de pagina zien verschijnen.

## Basis routering

Routing verwijst naar het bepalen hoe een applicatie reageert op een client request naar een bepaald endpoint, dat is een URI (of pad) en een specifieke HTTP request methode (GET, PUT, POST enzovoort).

{% hint style="info" %}
Elke route kan **meerdere handler functies** hebben die worden uitgevoerd wanneer de route overeenkomt.
{% endhint %}

Routedefinities hebben de volgende structuren:

```go
// Functie signatuur
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` is een instance van **Fiber**.
* `Method` is een [HTTP request methode](https://fiber.wiki/application#methods), met hoofdletters: `Get`, `Put`, `Post`, etc.
* `path` is een virtueel pad op de server.
* `func(*fiber.Ctx)` is een callback-functie die de [Context](https://fiber.wiki/context) bevat die wordt uitgevoerd wanneer de route overeenkomt.

**Simpele route**

```go
// Antwoord met "Hallo, Wereld!" op rootpad, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hallo, Wereld!")
})
```

**Parameters**

```go
// GET http://localhost:8080/hallo%20wereld

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Request ontvangen met waarde: " + c.Params("value"))
  // => Request ontvangen met waarde: hallo wereld
})
```

**Optionele parameter**

```go
// GET http://localhost:3000/john

app.Get("/:naam?", func(c *fiber.Ctx) {
  if c.Params("naam") != "" {
    c.Send("Hallo " + c.Params("naam"))
    // => Hallo john
  } else {
    c.Send("Waar is john?")
  }
})
```

**Wildcards**

```go
// GET http://localhost:3000/api/gebruiker/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API pad: " + c.Params("*"))
  // => API pad: gebruiker/john
})
```

## Statische bestanden

Vervang de functie handler door een bestand of directory string om statische bestanden zoals **afbeeldingen**, **CSS** en **JavaScript** bestanden weer te geven.

Functie signatuur:

```go
app.Static(prefix, root string)
```

Gebruik de volgende code om bestanden weer te geven in een map met de naam `./public`:

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

Nu kunt u door de bestanden in de map `./public` bladeren:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

