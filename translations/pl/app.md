---
description: Instancja aplikacji standardowo stanowi aplikacje Fiber.
---

# 🚀 Aplikacja

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

Możesz ustanowić ustawienia aplikacji przy wywoływaniu `New`.

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

Lub zmień ustawienia po zainicjalizowaniu instancji `app`.

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

**Właściwości** **ustawień**

| Właściwość                | Typ             | Opis                                                                                                                                                                                                                                             | Domyślna wartość  |
|:------------------------- |:--------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:----------------- |
| Prefork                   | `bool`          | Włącza opcję gniazd [`SO_REUSEPORT`](https://lwn.net/Articles/542629/). Uruchamia wiele procesów Go nasłuchujących na tym samym porcie. dowiedz się więcej o [socket sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false`           |
| ServerHeader              | `string`        | Ustawia nagłówek HTTP `Server` z daną wartością.                                                                                                                                                                                                 | `""`              |
| StrictRouting             | `bool`          | Przełącza traktowanie `/foo` i `/foo/` jako innych routeów. Gdy wartość jest fałszywa, router traktuje `/foo` oraz `/foo/` jako takie same.                                                                                                      | `false`           |
| CaseSensitive             | `bool`          | Gdy włączone, `/Foo` i `/foo` są innymi routeami. W przeciwnym razie `/Foo` i `/foo` są traktowane jako identyczne.                                                                                                                              | `false`           |
| Immutable                 | `bool`          | Gdy włączone, wszystkie wartości zwrócone przez context są niezmienne. Domyślnie są prawidłowe dopóki ich nie zwrócisz z handlera, zobacz [\#185](https://github.com/gofiber/fiber/issues/185).                                                | `false`           |
| BodyLimit                 | `int`           | Ustawia maksymalny dozwolony rozmiar body żądania, jeżeli rozmiar przekroczy ustawiony limit, wysyła `413 - Request Entity Too Large`.                                                                                                           | `4 * 1024 * 1024` |
| CompressedFileSuffix      | `string`        | Adds suffix to the original file name and tries saving the resulting compressed file under the new file name.                                                                                                                                    | `".fiber.gz"`     |
| Concurrency               | `int`           | Maksymalna liczba jednoczesnych połączeń.                                                                                                                                                                                                        | `256 * 1024`      |
| DisableKeepalive          | `bool`          | Wyłącza utrzymywanie połączeń keep-alive, serwer będzie zamykał przychodzące połączenia po wysłaniu odpowiedzi do klienta                                                                                                                        | `false`           |
| DisableDefaultDate        | `bool`          | Gdy ustawione na true, domyślny nagłówek z datą nie będzie załączany w odpowiedzi.                                                                                                                                                               | `false`           |
| DisableDefaultContentType | `bool`          | Gdy ustawione na true, domyślny nagłówek Content-Type nie będzie uwzględniany w odpowiedzi.                                                                                                                                                      | `false`           |
| DisableStartupMessage     | `bool`          | Gdy ustawione na true, Fiber nie będzie wyświetlał ASCII arta i wiadomości o nasłuchiwaniu                                                                                                                                                       | `false`           |
| DisableHeaderNormalizing  | `bool`          | Domyślnie wszystkie nazwy nagłówków są normalizowane: conteNT-tYPE -&gt; Content-Type                                                                                                                                                      | `false`           |
| ETag                      | `bool`          | Wyłącza lub włącza generowanie nagłówków ETag, ponieważ zarówno słabe, jak i mocne ETagi są generowane tą samą metodą hashowania \(CRC-32\). Słabe ETagi są domyślnie ustawione, gdy włączone.                                                 | `false`           |
| Templates                 | `Templates`     | Templates to interfejs, który wrapuje funkcję Render. Zobacz wspierane silniki na [**Template Middleware**](middleware.md#template).                                                                                                             | `nil`             |
| ReadTimeout               | `time.Duration` | Dozwolona ilość czasu na przeczytanie pełnego zapytania z body. Domyślnie jest nieograniczona.                                                                                                                                                   | `nil`             |
| WriteTimeout              | `time.Duration` | Maksymalny czas trwania przed przedawnieniem zapisywania odpowiedzi. Domyślnie jest nieograniczona.                                                                                                                                              | `nil`             |
| IdleTimeout               | `time.Duration` | Maksymalna długość czasu dla czekania na następny request, kiedy keep-alive jest włączone. Jeżeli IdleTimeout ma wartość zerową, wartość ReadTimeout jest używana.                                                                               | `nil`             |

## Static

Użyj metody **Static**, żeby serwować statyczne pliki takie jak **zdjęcia**, **arkusze CSS** czy **JavaScript**.

{% hint style="info" %}
Domyślnie **Static** serwuje `index.html` w odpowiedzi na zapytanie na katalog.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => with prefix
```
{% endcode %}

Użyj poniższego kodu, aby serwowac pliki znajdujące się w katalogu `./public`

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

Aby serwować z wielu katalogów, po prostu możesz użyć metody **Static** wiele razy.

{% code title="Example" %}
```go
// Serve files from "./public" directory:
app.Static("/", "./public")

// Serve files from "./files" directory:
app.Static("/", "./files")
```
{% endcode %}

{% hint style="info" %}
Warto używać reverse proxy cache jak [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/), aby poprawić wydajność serwowania statycznych assetsów.
{% endhint %}

Można użyć dowolnego wirtualnego prefixu dla ścieżek \(_gdzie ścieżka nie istnieje w żadnym systemie plików_\) dla plików, które są serwowane przez metodę **Static**, określając ścieżkę prefixu dla katalogu statycznych plików, jak pokazano poniżej:

{% code title="Example" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

Jeżeli chcesz mieć trochę więcej kontroli nad ustawieniami serwowania assetsów. You could use the `fiber.Static` struct to enable specific settings.

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

Przekierowuje zapytanie HTTP, gdzie **METHOD** jest [metodą HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) zapytania.

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

Możesz grupować routy tworząc structy `*Group`.

**Signature**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**Przykład**

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

