---
description: Die App-Instanz bezeichnet die Fiber-Anwendung.
---

# 🚀 Anwendung

## New

Diese Methode erstellt eine neue **App** Instanz.  
Sie können optionale [Einstellungen ](application.md#settings)beim Erstellen einer neuen Instanz übergeben

{% code title="Signature" %}
```go
fiber.New(settings ...*Settings) *App
```
{% endcode %}

{% code title="Example" %}
```go
package main

import "github.com/gofiber/fiber"

func main() {
    app := fiber.New()

    // ...

    app.Listen(3000)
}
```
{% endcode %}

## Settings

Sie können die Anwendungseinstellungen übergeben, wenn Sie `New` aufrufen.

{% code title="Example" %}
```go
func main() {
    // Übergeben der Einstellungen und erzeugen einer neuen Instanz
    app := fiber.New(&fiber.Settings{
        Prefork:       true,
        CaseSensitive: true,
        StrictRouting: true,
        ServerHeader:  "Fiber",
    })

    // ...

    app.Listen(3000)
}
```
{% endcode %}

Oder ändern Sie die Einstellungen nach der Initialisierung einer `app`.

{% code title="Example" %}
```go
func main() {
    app := fiber.New()

    // Oder ändern Sie die Einstellungen nach dem Erstellen der Instanz
    app.Settings.Prefork = true
    app.Settings.CaseSensitive = true
    app.Settings.StrictRouting = true
    app.Settings.ServerHeader = "Fiber"

    // ...

    app.Listen(3000)
}
```
{% endcode %}

**Einstellungen** **Felder**

| Eigenschaft               | Typ             | Beschreibung                                                                                                                                                                                                                                                               | Standardwert      |
|:------------------------- |:--------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`          | Aktiviert die Verwendung der[`SO_REUSEPORT`](https://lwn.net/Articles/542629/)Socket-Option. Dies erzeugt mehrere Go-Prozesse, die auf demselben Port lauschen. Erfahren Sie mehr über [Socket-Sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false`           |
| ServerHeader              | `string`        | Aktiviert den `Server` HTTP-Header mit dem angegebenen Wert.                                                                                                                                                                                                               | `""`              |
| StrictRouting             | `bool`          | Wenn aktiviert, behandelt der Router `/foo` und `/foo/` unterschiedlich. Ansonsten behandelt der Router `/foo` und `/foo/` gleich.                                                                                                                                         | `false`           |
| CaseSensitive             | `bool`          | Wenn aktiviert, sind `/Foo` und `/foo` unterschiedliche Routen. Wenn deaktiviert, werden `/Foo`und `/foo` gleich behandelt.                                                                                                                                                | `false`           |
| Immutable                 | `bool`          | Wenn aktiviert, sind alle Werte, die durch Kontext-Methoden zurückgegeben werden, unveränderbar. Standardmäßig sind sie gültig, bis Sie vom Handler zurückkehren. Siehe Problem [\#185](https://github.com/gofiber/fiber/issues/185).                                    | `false`           |
| BodyLimit                 | `int`           | Legt die maximal zulässige Größe für einen Request-Body fest, falls die Größe das konfigurierte Limit überschreitet, wird eine `413 - Request Entity Too Large` Antwort gesendet.                                                                                          | `4 * 1024 * 1024` |
| Concurrency               | `int`           | Maximale Anzahl gleichzeitiger Verbindungen.                                                                                                                                                                                                                               | `256 * 1024`      |
| DisableKeepalive          | `bool`          | Deaktiviere "keep-alive"-Verbindungen, der Server schließt eingehende Verbindungen nach dem Senden der ersten Antwort an den Client                                                                                                                                        | `false`           |
| DisableDefaultDate        | `bool`          | Wenn auf "true" gesetzt wird, wird der Standard-Datumskopf von der Antwort ausgeschlossen.                                                                                                                                                                                 | `false`           |
| DisableDefaultContentType | `bool`          | Wenn der Wert auf "true" gesetzt wird, wird der Standard Content-Type Header von der Antwort ausgeschlossen.                                                                                                                                                               | `false`           |
| DisableStartupMessage     | `bool`          | Wenn auf "true" gesetzt, wird die Fiber ASCII und "listen"  Nachricht nicht ausgegeben                                                                                                                                                                                     | `false`           |
| ETag                      | `bool`          | Aktivieren oder deaktivieren Sie die ETag Header-Generation, da sowohl schwache als auch starke etags mit der gleichen Hashing-Methode \(CRC-32\) erzeugt werden. Schwache ETags sind die Standards, wenn aktiviert.                                                     | `false`           |
| Templates                 | `*Templates`    | Templates is the interface that wraps the Render function. See our [**Template Middleware**](middleware.md#template) for supported engines.                                                                                                                                | `nil`             |
| ReadTimeout               | `time.Duration` | The amount of time allowed to read the full request including body. Default timeout is unlimited.                                                                                                                                                                          | `nil`             |
| WriteTimeout              | `time.Duration` | The maximum duration before timing out writes of the response. Default timeout is unlimited.                                                                                                                                                                               | `nil`             |
| IdleTimeout               | `time.Duration` | The maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is zero, the value of ReadTimeout is used.                                                                                                                              | `nil`             |

## Static

Verwenden Sie die **Static** Methode, um statische Dateien wie **Bilder**, **CSS** und **JavaScript** auszuliefern.

{% hint style="info" %}
By default, **Static** will serve `index.html` files in response to a request on a directory.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => mit Präfix
```
{% endcode %}

Verwenden Sie den folgenden Code, um Dateien in einem Verzeichnis mit dem Namen `./public` auszuliefern

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

Um mehrere Verzeichnisse zu bedienen, können Sie **Static** mehrfach verwenden.

{% code title="Example" %}
```go
// Dateien aus dem Verzeichnis "./public" ausliefern:
app.Static("/", "./public")

// Dateien aus dem Verzeichnis "./files" ausliefern:
app.Static("/", "./files")
```
{% endcode %}

{% hint style="info" %}
Verwenden Sie einen Reverse-Proxy-Cache wie [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) um die Leistung der Bereitstellung statischer Assets zu verbessern.
{% endhint %}

Sie können jedes virtuelle Pfadpräfix \(_, wo der Pfad im Dateisystem nicht wirklich vorhanden ist_\) für Dateien verwenden, die von der **Static** Methode ausgeliefert werden. Dafür müssen Sie einen Präfixpfad für das statische Verzeichnis angeben, so wie unten gezeigt:

{% code title="Example" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

Wenn Sie ein bisschen mehr Kontrolle über die Einstellungen für das Bereitstellen statischer Dateien haben möchten. Können Sie die `fiber.Static` Struktur verwenden, um bestimmte Einstellungen zu aktivieren.

{% code title="fiber.Static{}" %}
```go
// Static repräsentiert Einstellungen für das Ausliefern statischer Dateien
type Static struct {
    // Transparent komprimiert Antworten wenn auf true gesetzt
    // Dies funktioniert anders als der github.com/gofiber/compression Middleware
    // Der Server versucht die CPU-Auslastung durch das Caching komprimierter Dateien zu minimieren.
    // Es fügt dem ursprünglichen Dateinamen den ".fiber.gz" Suffix hinzu.
    // Optional. Standardwert false
    Compress bool
    //  Aktiviert Byte-Bereichsanfrage, wenn es auf true gesetzt wird.
    // Optional. Standardwert false
    ByteRange bool
    // Aktiviert Verzeichnisbrowsing.
    // Optional. Standardwert false.
    Browse bool
    // Indexdatei für das Bereitstellen eines Verzeichnisses.
    // Optional. Standardwert "index.html".
    Index string
}
```
{% endcode %}

{% code title="Example" %}
```go
app.Static("/", "./public", fiber.Static{
  Compress:   true,
  ByteRange:  true,
  Browse:     true,
  Index:      "john.html"
})
```
{% endcode %}

## HTTP Methods

Routet eine HTTP-Anfrage, wobei **METHOD** die [HTTP-Methode](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) der Anfrage ist.

{% code title="Signatures" %}
```go
// HTTP Methoden unterstützen :param, :optional? and *wildcards
// You are required to pass a path to each method
app.All(path string, handlers ...func(*Ctx)) []*Route
app.Get
app.Put
app.Post
app.Head
app.Patch
app.Trace
app.Delete
app.Connect
app.Options

// Use() will only match the beggining of each path
// i.e. "/john" will match "/john/doe", "/johnnnn"
// Use() does not support :param & :optional? in path
app.Use(handlers ...func(*Ctx)) *Route
app.Use(prefix string, handlers ...func(*Ctx)) *Route
```
{% endcode %}

{% code title="Example" %}
```go
app.Use("/api", func(c *fiber.Ctx) {
  c.Set("X-Custom-Header", random.String(32))
  c.Next()
})
app.Get("/api/list", func(c *fiber.Ctx) {
  c.Send("Ich bin eine GET-Anfrage!")
})
app.Post("/api/register", func(c *fiber.Ctx) {
  c.Send("Ich bin eine POST-Anfrage!")
})
```
{% endcode %}

## Group

Sie können Routen gruppieren, indem Sie eine `*Group` Struktur erstellen.

**Signature**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**Beispiel**

```go
func main() {
  app := fiber.New()

  api := app.Group("/api", cors())  // /api

  v1 := api.Group("/v1", mysql())   // /api/v1
  v1.Get("/list", handler)          // /api/v1/list
  v1.Get("/user", handler)          // /api/v1/user

  v2 := api.Group("/v2", mongodb()) // /api/v2
  v2.Get("/list", handler)          // /api/v2/list
  v2.Get("/user", handler)          // /api/v2/user

  app.Listen(3000)
}
```

## Listen

Bindet und hört auf Verbindungen für die angegebenen Adresse. Dies kann ein `int` für Port oder `string` für die Adresse sein.

{% code title="Signature" %}
```go
app.Listen(address interface{}, tls ...*tls.Config) error
```
{% endcode %}

{% code title="Examples" %}
```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```
{% endcode %}

Um **TLS/HTTPS** zu aktivieren, können Sie eine [**TLS Konfiguration**](https://golang.org/pkg/crypto/tls/#Config) anhängen.

{% code title="Example" %}
```go
cer, err := tls.LoadX509KeyPair("server.crt", "server.key")
if err != nil {
    log.Fatal(err)
}
config := &tls.Config{Certificates: []tls.Certificate{cer}}

app.Listen(443, config)
```
{% endcode %}

## Serve

Sie können Ihren eigenen [`net.Listener`](https://golang.org/pkg/net/#Listener) mit der `Serve` Methode übergeben.

{% code title="Signature" %}
```go
app.Serve(ln net.Listener, tls ...*tls.Config) error
```
{% endcode %}

{% hint style="warning" %}
**Serve** does not support the **\*\*\[**Prefork\*\* \]\(application.md\#settings\)feature.
{% endhint %}

{% code title="Example" %}
```go
if ln, err = net.Listen("tcp4", ":8080"); err != nil {
    log.Fatal(err)
}

app.Serve(ln)
```
{% endcode %}

## Test

Das Testen Ihrer Anwendung erfolgt mit der **Test** Methode. Verwenden Sie diese Methode, um `_test.go` Dateien zu erstellen oder wenn Sie Ihre Routing-Logik debuggen müssen. Der Standard-Timeout ist `200ms` wenn Sie einen Timeout komplett deaktivieren möchten, übergeben Sie `-1` als zweites Argument.

{% code title="Signature" %}
```go
app.Test(req *http.Request, msTimeout ...int) (*http.Response, error)
```
{% endcode %}

{% code title="Example" %}
```go
// Erstelle eine Route mit GET Methode für den Test:
app.Get("/", func(c *Ctx) {
  fmt.Println(c.BaseURL())              // => http://google.com
  fmt.Println(c.Get("X-Custom-Header")) // => hi

  c.Send("Hallo, Welt!")
})

// http.Request
req, _ := http.NewRequest("GET", "http://google.com", nil)
req.Header.Set("X-Custom-Header", "hi")

// http.Response
resp, _ := app.Test(req)

// Prüfe das Resultat:
if resp.StatusCode == 200 {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hallo, Welt!
}
```
{% endcode %}

