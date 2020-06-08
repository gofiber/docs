---
description: Die App-Instanz bezeichnet die Fiber-Anwendung.
---

# 🚀 Anwendung

## New

This method creates a new **App** named instance. You can pass optional [settings ](app.md#settings)when creating a new instance

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
    // Pass Settings creating a new instance
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

    // Or change Settings after creating an instance
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
| CompressedFileSuffix      | `string`        | Adds suffix to the original file name and tries saving the resulting compressed file under the new file name.                                                                                                                                                              | `".fiber.gz"`     |
| Concurrency               | `int`           | Maximale Anzahl gleichzeitiger Verbindungen.                                                                                                                                                                                                                               | `256 * 1024`      |
| DisableKeepalive          | `bool`          | Deaktiviere "keep-alive"-Verbindungen, der Server schließt eingehende Verbindungen nach dem Senden der ersten Antwort an den Client                                                                                                                                        | `false`           |
| DisableDefaultDate        | `bool`          | Wenn auf "true" gesetzt wird, wird der Standard-Datumskopf von der Antwort ausgeschlossen.                                                                                                                                                                                 | `false`           |
| DisableDefaultContentType | `bool`          | Wenn der Wert auf "true" gesetzt wird, wird der Standard Content-Type Header von der Antwort ausgeschlossen.                                                                                                                                                               | `false`           |
| DisableStartupMessage     | `bool`          | Wenn auf "true" gesetzt, wird die Fiber ASCII und "listen"  Nachricht nicht ausgegeben                                                                                                                                                                                     | `false`           |
| DisableHeaderNormalizing  | `bool`          | By default all header names are normalized: conteNT-tYPE -&gt; Content-Type                                                                                                                                                                                          | `false`           |
| ETag                      | `bool`          | Aktivieren oder deaktivieren Sie die ETag Header-Generation, da sowohl schwache als auch starke etags mit der gleichen Hashing-Methode \(CRC-32\) erzeugt werden. Schwache ETags sind die Standards, wenn aktiviert.                                                     | `false`           |
| Templates                 | `Templates`     | Templates is the interface that wraps the Render function. See our [**Template Middleware**](middleware.md#template) for supported engines.                                                                                                                                | `nil`             |
| ReadTimeout               | `time.Duration` | Die Zeitspanne, die erlaubt ist, die vollständige Anfrage einschließlich des Körpers zu lesen. Standard Timeout ist unbegrenzt.                                                                                                                                            | `nil`             |
| WriteTimeout              | `time.Duration` | Die maximale Zeitspanne für das Schreiben der Antwort. Standard Timeout ist unbegrenzt.                                                                                                                                                                                    | `nil`             |
| IdleTimeout               | `time.Duration` | Die maximale Zeitspanne, um auf die nächsten Anfrage zu warten, wenn 'keep-alive' aktiviert ist. Wenn IdleTimeout null ist, wird der Wert von ReadTimeout verwendet.                                                                                                       | `nil`             |

## Static

Verwenden Sie die **Static** Methode, um statische Dateien wie **Bilder**, **CSS** und **JavaScript** auszuliefern.

{% hint style="info" %}
By default, **Static** will serve `index.html` files in response to a request on a directory.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => with prefix
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
// Serve files from "./public" directory:
app.Static("/", "./public")

// Serve files from "./files" directory:
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

Wenn Sie ein bisschen mehr Kontrolle über die Einstellungen für das Bereitstellen statischer Dateien haben möchten. You could use the `fiber.Static` struct to enable specific settings.

{% code title="fiber.Static{}" %}
```go
// Static represents settings for serving static files
type Static struct {
    // Transparently compresses responses if set to true
    // This works differently than the github.com/gofiber/compression middleware
    // The server tries minimizing CPU usage by caching compressed files.
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
// Add allows you to specifiy a method as value
app.Add(method, path string, handlers ...func(*Ctx)) *Route

// All will register the route on all methods
app.All(path string, handlers ...func(*Ctx)) []*Route

// HTTP methods
app.Get(path string, handlers ...func(*Ctx)) *Route
app.Put(path string, handlers ...func(*Ctx)) *Route
app.Post(path string, handlers ...func(*Ctx)) *Route
app.Head(path string, handlers ...func(*Ctx)) *Route
app.Patch(path string, handlers ...func(*Ctx)) *Route
app.Trace(path string, handlers ...func(*Ctx)) *Route
app.Delete(path string, handlers ...func(*Ctx)) *Route
app.Connect(path string, handlers ...func(*Ctx)) *Route
app.Options(path string, handlers ...func(*Ctx)) *Route

// Use is mostly used for middleware modules
// These routes will only match the beggining of each path
// i.e. "/john" will match "/john/doe", "/johnnnn"
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
  c.Send("I'm a GET request!")
})
app.Post("/api/register", func(c *fiber.Ctx) {
  c.Send("I'm a POST request!")
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

  api := app.Group("/api", handler)  // /api

  v1 := api.Group("/v1", handler)   // /api/v1
  v1.Get("/list", handler)          // /api/v1/list
  v1.Get("/user", handler)          // /api/v1/user

  v2 := api.Group("/v2", handler) // /api/v2
  v2.Get("/list", handler)          // /api/v2/list
  v2.Get("/user", handler)          // /api/v2/user

  app.Listen(3000)
}
```

## Routes

Routes returns all registered routes

{% code title="Signature" %}
```go
app.Routes() []*Route
```
{% endcode %}

{% code title="Example" %}
```go
app := fiber.New()

handler := func(c *fiber.Ctx) { }

app.Get("/sample", handler)
app.Post("/john", handler)
app.Put("/doe", handler)

for _, r := range app.Routes() {
    fmt.Printf("%s\t%s\n", r.Method, r.Path)
}
// GET      /sample
// POST     /john
// PUT      /doe
```
{% endcode %}

## Listen

Binds and listens for connections on the specified address. This can be a `int` for port or `string` for address.

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

To enable **TLS/HTTPS** you can append a [**TLS config**](https://golang.org/pkg/crypto/tls/#Config).

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

You can pass your own [`net.Listener`](https://golang.org/pkg/net/#Listener) using the `Serve` method.

{% code title="Signature" %}
```go
app.Serve(ln net.Listener, tls ...*tls.Config) error
```
{% endcode %}

{% hint style="warning" %}
**Serve** does not support the [**Prefork**](app.md#settings) feature.
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

Testing your application is done with the **Test** method. Use this method for creating `_test.go` files or when you need to debug your routing logic. The default timeout is `200ms` if you want to disable a timeout completely, pass `-1` as a second argument.

{% code title="Signature" %}
```go
app.Test(req *http.Request, msTimeout ...int) (*http.Response, error)
```
{% endcode %}

{% code title="Example" %}
```go
// Create route with GET method for test:
app.Get("/", func(c *Ctx) {
  fmt.Println(c.BaseURL())              // => http://google.com
  fmt.Println(c.Get("X-Custom-Header")) // => hi

  c.Send("hello, World!")
})

// http.Request
req := httptest.NewRequest("GET", "http://google.com", nil)
req.Header.Set("X-Custom-Header", "hi")

// http.Response
resp, _ := app.Test(req)

// Do something with results:
if resp.StatusCode == 200 {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hello, World!
}
```
{% endcode %}

