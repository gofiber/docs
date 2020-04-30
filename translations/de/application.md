---
description: Die App-Instanz bezeichnet die Fiber-Anwendung.
---

# 🚀 Anwendung

## New

Diese Methode erstellt eine neue **App** Instanz.  
Sie können optionale [Einstellungen ](application.md#settings)beim Erstellen einer neuen Instanz übergeben

{% code title="Signature" %}
```go
fiber.New(settings ...Settings) *App
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

| Eigenschaft               | Typ                                                  | Beschreibung                                                                                                                                                                                                                                                               | Standardwert      |
|:------------------------- |:---------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`                                               | Aktiviert die Verwendung der[`SO_REUSEPORT`](https://lwn.net/Articles/542629/)Socket-Option. Dies erzeugt mehrere Go-Prozesse, die auf demselben Port lauschen. Erfahren Sie mehr über [Socket-Sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false`           |
| ServerHeader              | `string`                                             | Aktiviert den `Server` HTTP-Header mit dem angegebenen Wert.                                                                                                                                                                                                               | `""`              |
| StrictRouting             | `bool`                                               | Wenn aktiviert, behandelt der Router `/foo` und `/foo/` unterschiedlich. Ansonsten behandelt der Router `/foo` und `/foo/` gleich.                                                                                                                                         | `false`           |
| CaseSensitive             | `bool`                                               | Wenn aktiviert, sind `/Foo` und `/foo` unterschiedliche Routen. Wenn deaktiviert, werden `/Foo`und `/foo` gleich behandelt.                                                                                                                                                | `false`           |
| Immutable                 | `bool`                                               | Wenn aktiviert, sind alle Werte, die durch Kontext-Methoden zurückgegeben werden, unveränderbar. Standardmäßig sind sie gültig, bis Sie vom Handler zurückkehren. Siehe Problem [\#185](https://github.com/gofiber/fiber/issues/185).                                    | `false`           |
| BodyLimit                 | `int`                                                | Legt die maximal zulässige Größe für einen Request-Body fest, falls die Größe das konfigurierte Limit überschreitet, wird eine `413 - Request Entity Too Large` Antwort gesendet.                                                                                          | `4 * 1024 * 1024` |
| Concurrency               | `int`                                                | Maximale Anzahl gleichzeitiger Verbindungen.                                                                                                                                                                                                                               | `256 * 1024`      |
| DisableKeepalive          | `bool`                                               | Deaktiviere "keep-alive"-Verbindungen, der Server schließt eingehende Verbindungen nach dem Senden der ersten Antwort an den Client                                                                                                                                        | `false`           |
| DisableDefaultDate        | `bool`                                               | Wenn auf "true" gesetzt wird, wird der Standard-Datumskopf von der Antwort ausgeschlossen.                                                                                                                                                                                 | `false`           |
| DisableDefaultContentType | `bool`                                               | Wenn der Wert auf "true" gesetzt wird, wird der Standard Content-Type Header von der Antwort ausgeschlossen.                                                                                                                                                               | `false`           |
| DisableStartupMessage     | `bool`                                               | Wenn auf "true" gesetzt, wird die Fiber ASCII und "listen"  Nachricht nicht ausgegeben                                                                                                                                                                                     | `false`           |
| ETag                      | `bool`                                               | Aktivieren oder deaktivieren Sie die ETag Header-Generation, da sowohl schwache als auch starke etags mit der gleichen Hashing-Methode \(CRC-32\) erzeugt werden. Schwache ETags sind die Standards, wenn aktiviert.                                                     | `false`           |
| TemplateEngine            | `func(raw string, bind interface{}) (string, error)` | Sie können eine benutzerdefinierte Template-Funktion angeben, um verschiedene Template-Sprachen zu rendern. Schauen Sie sich unsere [**Template Middleware**](middleware.md#template) _\*\*_für Vorlagen an.                                                         | `nil`             |
| TemplateFolder            | `string`                                             | Ein Verzeichnis für die Views der Anwendung. Wenn ein Verzeichnis gesetzt ist, wird dies das Präfix für alle Template-Pfade. `c.Render("home", data) -> ./views/home.pug`                                                                                               | `""`              |
| TemplateExtension         | `string`                                             | Wenn Sie die Template-Dateiendung voreinstellen, müssen Sie in der Render-Funktion nicht den vollständigen Dateinamen angeben: `c. ender("home", data) -> home.pug`                                                                                                     | `"html"`          |
| ReadTimeout               | `time.Duration`                                      | Die Zeitspanne, die erlaubt ist, die vollständige Anfrage einschließlich des Körpers zu lesen. Standard Timeout ist unbegrenzt.                                                                                                                                            | `nil`             |
| WriteTimeout              | `time.Duration`                                      | Die maximale Zeitspanne für das Schreiben der Antwort. Standard Timeout ist unbegrenzt.                                                                                                                                                                                    | `nil`             |
| IdleTimeout               | `time.Duration`                                      | Die maximale Zeitspanne, um auf die nächsten Anfrage zu warten, wenn 'keep-alive' aktiviert ist. Wenn IdleTimeout null ist, wird der Wert von ReadTimeout verwendet.                                                                                                       | `nil`             |

## Static

Verwenden Sie die **Static** Methode, um statische Dateien wie **Bilder**, **CSS** und **JavaScript** auszuliefern.

{% hint style="info" %}
Standardmäßig liefert **Static** `index.html` Dateien als Antwort auf eine Anfrage in einem Verzeichnis.
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
Use a reverse proxy cache like [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) to improve performance of serving static assets.
{% endhint %}

You can use any virtual path prefix \(_where the path does not actually exist in the file system_\) for files that are served by the **Static** method, specify a prefix path for the static directory, as shown below:

{% code title="Example" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

If you want to have a little bit more control regarding the settings for serving static files. You could use the `fiber.Static` struct to enable specific settings.

{% code title="fiber.Static{}" %}
```go
// Static represents settings for serving static files
type Static struct {
    // Transparently compresses responses if set to true
    // This works differently than the github.com/gofiber/compression middleware
    // The server tries minimizing CPU usage by caching compressed files.
    // It adds ".fiber.gz" suffix to the original file name.
    // Optional. Default value false
    Compress bool
    // Enables byte range requests if set to true.
    // Optional. Default value false
    ByteRange bool
    // Enable directory browsing.
    // Optional. Default value false.
    Browse bool
    // Index file for serving a directory.
    // Optional. Default value "index.html".
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

Routes an HTTP request, where **METHOD** is the [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) of the request.

{% code title="Signatures" %}
```go
// HTTP methods support :param, :optional? and *wildcards
// You are required to pass a path to each method
app.All(path string, handlers ...func(*Ctx)) *Fiber
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
app.Use(handlers ...func(*Ctx))
app.Use(prefix string, handlers ...func(*Ctx)) *Fiber
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

You can group routes by creating a `*Group` struct.

**Signature**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**Example**

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
**Serve** does not support the ****[**Prefork** ](application.md#settings)feature.
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
req, _ := http.NewRequest("GET", "http://google.com", nil)
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

