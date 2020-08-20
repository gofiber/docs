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
    // result ist jetzt unveränderbar
})
```

Alternativ kannst du auch das [**Immutable Option**](app.md#settings) benutzen. Es wird alle Werte die man vom Kontext erhält unveränderbar machen, was dir erlaubt sie überall zu benutzen/speichern. Natürlich kommt das auf Kosten von Geschwindigkeit.

Weitere Informationen finden Sie unter [**\#426**](https://github.com/gofiber/fiber/issues/426) **und** [**\#185**](https://github.com/gofiber/fiber/issues/185).

## Hallo, Welt!

Unten eingebettet ist im Wesentlichen die einfachste **Fiber** Applikation, die du erstellen kannst.

```go
package main

import "github.com/gofiber/fiber"

func main() {
  app := fiber.New()

  app. et("/", func(c *fiber.Ctx) {
    c.Send("Hallo, Welt!")
  })

  app.Listen(3000)
}
```

```text
go run server.go
```

Besuche `http://localhost:3000` im Browser und du solltest `Hello, World!` auf der Seite sehen.

## Grundlegendes Routing

Routing bezieht sich darauf, wie eine Anwendung auf einen bestimmten Endpunkt antworten soll die eine URI \(oder path\) und eine bestimmte HTTP-Anfragemethode \(GET, PUT, POST usw.) ist.

{% hint style="info" %}
Jede Route kann **mehrere Händler-Funktionen**haben, die ausgeführt werden, wenn die Route übereinstimmt.
{% endhint %}

Eine Routendefinition benötigt folgende Strukturen:

```go
// Funktionssignatur
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` ist eine Instanz von **Fiber**.
* `Methode` ist eine [HTTP-Anfragemethode](https://fiber.wiki/application#methods), in Großschreibung: `Get`, `Put`, `Post`, etc.
* `path` ist ein virtueller Pfad auf dem Server.
* `func(*fiber.Ctx)` ist eine Callback-Funktion, die den [Kontext](https://fiber.wiki/context) enthält, der ausgeführt wird, wenn die Route übereinstimmt.

**Einfache Route**

```go
// Antworte mit "Hallo, Welt!" am Root-Pfad, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hallo, Welt!")
})
```

**Parameter**

```go
// GET http://localhost:8080/Hallo%20Welt

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Anfrage mit Wert holen: " + c.Params("value"))
  // => Anfrage mit Wert holen: Hallo Welt
})
```

**Optionaler Parameter**

```go
// GET http://localhost:3000/john

app.Get("/:name?", func(c *fiber.Ctx) {
  if c.Params("name") != "" {
    c.Send("Hallo " + c.Params("name"))
    // => Hallo john
  } else {
    c.Send("Wo ist john?")
  }
})
```

**Platzhalter (Wildcards)**

```go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path: " + c.Params("*"))
  // => API path: user/john
})
```

## Statische Dateien

Um statische Dateien wie z.B. **Bilder**, **CSS** und **JavaScript** Dateien zu liefern, muss man den Funktionshändler durch einen Datei- oder Verzeichnisstring ersetzen.

Funktionssignatur:

```go
app.Static(prefix, root string)
```

Verwende den folgenden Code, um Dateien in einem Verzeichnis mit dem Namen `./public` auszugeben:

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

## Notiz

Für weitere Informationen, wie man APIs in Go mit Fiber baut, bitte schaue dir diesen ausgezeichneten Artikel [an, um eine Express-Style-API in Go mit Fiber zu erstellen](https://blog.logrocket.com/express-style-api-go-fiber/)

