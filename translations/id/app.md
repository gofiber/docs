---
description: The app instance conventionally denotes the Fiber application.
---

# 🚀 Application

## New

Method ini untuk membuat named instance **App** baru. Opsional [setting ](app.md#settings) bisa diterapkan saat membuat instance

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

Application settings dapat diterapkan saat memanggil `New`.

{% code title="Example" %}
```go
func main() {
    // Terapkan settings saat membuat instance
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

Atau ubah settings setelah inisialisasi `app`.

{% code title="Example" %}
```go
func main() {
    app := fiber.New()

    // Atau ubah settings setelah inisialisasi instance
    app.Settings.Prefork = true
    app.Settings.CaseSensitive = true
    app.Settings.StrictRouting = true
    app.Settings.ServerHeader = "Fiber"

    // ...

    app.Listen(3000)
}
```
{% endcode %}

**Settings** **fields**

| Property                  | Type            | Description                                                                                                                                                                                                                                               | Default           |
|:------------------------- |:--------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`          | Enables use of the[`SO_REUSEPORT`](https://lwn.net/Articles/542629/)socket option. This will spawn multiple Go processes listening on the same port. learn more about [socket sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false`           |
| ServerHeader              | `string`        | Enables the `Server` HTTP header with the given value.                                                                                                                                                                                                    | `""`              |
| StrictRouting             | `bool`          | When enabled, the router treats `/foo` and `/foo/` as different. Otherwise, the router treats `/foo` and `/foo/` as the same.                                                                                                                             | `false`           |
| CaseSensitive             | `bool`          | When enabled, `/Foo` and `/foo` are different routes. When disabled, `/Foo`and `/foo` are treated the same.                                                                                                                                               | `false`           |
| Immutable                 | `bool`          | When enabled, all values returned by context methods are immutable. By default, they are valid until you return from the handler; see the issue [\#185](https://github.com/gofiber/fiber/issues/185).                                                   | `false`           |
| UnescapePath              | `bool`          | Converts all encoded characters in the route back before setting the path for the context, so that the routing can also work with urlencoded special characters                                                                                           | `false`           |
| BodyLimit                 | `int`           | Sets the maximum allowed size for a request body, if the size exceeds the configured limit, it sends `413 - Request Entity Too Large` response.                                                                                                           | `4 * 1024 * 1024` |
| CompressedFileSuffix      | `string`        | Adds suffix to the original file name and tries saving the resulting compressed file under the new file name.                                                                                                                                             | `".fiber.gz"`     |
| Concurrency               | `int`           | Maximum number of concurrent connections.                                                                                                                                                                                                                 | `256 * 1024`      |
| DisableKeepalive          | `bool`          | Disable keep-alive connections, the server will close incoming connections after sending the first response to client                                                                                                                                     | `false`           |
| DisableDefaultDate        | `bool`          | When set to true causes the default date header to be excluded from the response.                                                                                                                                                                         | `false`           |
| DisableDefaultContentType | `bool`          | When set to true, causes the default Content-Type header to be excluded from the Response.                                                                                                                                                                | `false`           |
| DisableStartupMessage     | `bool`          | When set to true, it will not print out the fiber ASCII and "listening" on message                                                                                                                                                                        | `false`           |
| DisableHeaderNormalizing  | `bool`          | By default all header names are normalized: conteNT-tYPE -&gt; Content-Type                                                                                                                                                                         | `false`           |
| ETag                      | `bool`          | Enable or disable ETag header generation, since both weak and strong etags are generated using the same hashing method \(CRC-32\). Weak ETags are the default when enabled.                                                                             | `false`           |
| Views                     | `Views`         | Views is the interface that wraps the Render function. See our **Template Middleware** for supported engines.                                                                                                                                             | `nil`             |
| ReadTimeout               | `time.Duration` | The amount of time allowed to read the full request, including body. The default timeout is unlimited.                                                                                                                                                    | `nil`             |
| WriteTimeout              | `time.Duration` | The maximum duration before timing out writes of the response. The default timeout is unlimited.                                                                                                                                                          | `nil`             |
| IdleTimeout               | `time.Duration` | The maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is zero, the value of ReadTimeout is used.                                                                                                             | `nil`             |
| ReadBufferSize            | `int`           | per-connection buffer size for requests' reading. This also limits the maximum header size. Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers \(for example, BIG cookies\).                                        | `4096`            |
| WriteBufferSize           | `int`           | Per-connection buffer size for responses' writing.                                                                                                                                                                                                        | `4096`            |

## Static

Gunakan method **Static** untuk menggunakan file static seperti **images**, **CSS** and **JavaScript**.

{% hint style="info" %}
Secara default, **Static** akan menggunakan file `index.html` saat merespon request pada sebuah direktori.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => dengan prefix
```
{% endcode %}

Gunakan code ini untuk menggunakan file di direktori `./public`

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

Untuk menggunakan lebih dari satu direktori, gunakan **Static** beberapa kali.

{% code title="Example" %}
```go
// Gunakan file dari direktori "./public":
app.Static("/", "./public")

// Gunakan file dari direktori "./files":
app.Static("/", "./files")
```
{% endcode %}

{% hint style="info" %}
Gunakan reverse proxy cache seperti [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) untuk meningkatkan performa penggunaan assets static.
{% endhint %}

Virtual path prefix \(_dimana path tidak benar-benar tersedia di file system_\) dapat digunakan untuk file yang disediakan oleh **Static** method, tentukan prefix path untuk direktori static, seperti di bawah ini:

{% code title="Example" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

Jika membutuhkan kontrol yang lebih untuk melakukan setting pada static file. Gunakan `fiber.Static` struct untuk mengaktifkan spesifik settings.

{% code title="fiber.Static{}" %}
```go
// Static merepresentasikan settings untuk menyajikan file statis
type Static struct {
    // Secara transparant mengompres responses jika diset ke true
    // Cara kerjanya berbeda dari github.com/gofiber/compression middleware
    // Server mencoba meminimalkan penggunaan CPU dengan caching compressed files.
    // Ini akan menambahkan akhiran ".fiber.gz" pada nama asli file.
    // Opsional. Default value false
    Compress bool
    // Aktifkan byte-range requests jika diset ke true.
    // Opsional. Default value false
    ByteRange bool
    // Izinkan pencarian di directori.
    // Opsional. Default value false.
    Browse bool
    // File yang digunakan saat request ke direktori.
    // Opsional. Default value "index.html".
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

Routes HTTP request, dimana **METHOD** adalah sebuah [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) dari request.

{% code title="Signatures" %}
```go
// Add mengizinkan penggunaan method sebagai value
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

You can group routes by creating a `*Group` struct.

**Signature**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**Example**

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

This method returns all registered routes.

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

Binds and listens for connections on the specified address. This can be an `int` for port or `string` for address.

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

Testing your application is done with the **Test** method. Use this method for creating `_test.go` files or when you need to debug your routing logic. The default timeout is `200ms` if you want to disable a timeout altogether, pass `-1` as a second argument.

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

