---
description: The app instance conventionally denotes the Fiber application.
---

# 🚀 Application

## New

Method New digunakan untuk membuat named instance **App** baru. Opsional [setting ](app.md#settings) bisa diterapkan saat membuat instance ini

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

    // Ubah settings setelah inisialisasi instance
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
| ServerHeader              | `string`        | Izinkan `Server` HTTP header sesuai value yang diisi.                                                                                                                                                                                                     | `""`              |
| StrictRouting             | `bool`          | Saat diaktifkan, router membaca `/foo` dan `/foo/` sebagai sesuatu yang berbeda. Jika tidak diaktifkan, router membaca `/foo` dan `/foo/` sebagai sesuatu yang sama.                                                                                      | `false`           |
| CaseSensitive             | `bool`          | Jika Diaktifkan, `/Foo` dan `/foo` adalah routes yang berbeda. Jika disabled, `/Foo` dan `/foo` dianggap sama.                                                                                                                                            | `false`           |
| Immutable                 | `bool`          | Jika diaktifkan, semua values yang dikembalikan oleh context methods adalah immutable. Secara default, values akan valid hingga Anda me-return dari handler; lihat issue [\#185](https://github.com/gofiber/fiber/issues/185).                          | `false`           |
| UnescapePath              | `bool`          | Converts all encoded characters in the route back before setting the path for the context, so that the routing can also work with urlencoded special characters                                                                                           | `false`           |
| BodyLimit                 | `int`           | Set ukuran maksimum yang diizinkan pada request body, jika ukuran melebihi batasan yang ditentukan, akan diresponse dengan `413 - Request Entity Too Large`.                                                                                              | `4 * 1024 * 1024` |
| CompressedFileSuffix      | `string`        | Tambahkan akhiran pada nama asli file, dan mencoba menyimpan hasil compres dengan nama baru.                                                                                                                                                              | `".fiber.gz"`     |
| Concurrency               | `int`           | Jumlah maksimum dari concurrent connections.                                                                                                                                                                                                              | `256 * 1024`      |
| DisableKeepalive          | `bool`          | Nonaktifkan keep-alive connections, server akan menutup koneksi sesaat setelah memberi response pertama pada client                                                                                                                                       | `false`           |
| DisableDefaultDate        | `bool`          | When set to true causes the default date header to be excluded from the response.                                                                                                                                                                         | `false`           |
| DisableDefaultContentType | `bool`          | When set to true, causes the default Content-Type header to be excluded from the Response.                                                                                                                                                                | `false`           |
| DisableStartupMessage     | `bool`          | When set to true, it will not print out the fiber ASCII and "listening" on message                                                                                                                                                                        | `false`           |
| DisableHeaderNormalizing  | `bool`          | Secara default semua header akan dinormalkan: conteNT-tYPE -&gt; Content-Type                                                                                                                                                                       | `false`           |
| ETag                      | `bool`          | Enable or disable ETag header generation, since both weak and strong etags are generated using the same hashing method \(CRC-32\). Weak ETags are the default when enabled.                                                                             | `false`           |
| Views                     | `Views`         | Views is the interface that wraps the Render function. See our **Template Middleware** for supported engines.                                                                                                                                             | `nil`             |
| ReadTimeout               | `time.Duration` | The amount of time allowed to read the full request, including body. The default timeout is unlimited.                                                                                                                                                    | `nil`             |
| WriteTimeout              | `time.Duration` | The maximum duration before timing out writes of the response. The default timeout is unlimited.                                                                                                                                                          | `nil`             |
| IdleTimeout               | `time.Duration` | The maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is zero, the value of ReadTimeout is used.                                                                                                             | `nil`             |
| ReadBufferSize            | `int`           | per-connection buffer size untuk requests' reading. This also limits the maximum header size. Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers \(for example, BIG cookies\).                                      | `4096`            |
| WriteBufferSize           | `int`           | Per-connection buffer size untuk responses' writing.                                                                                                                                                                                                      | `4096`            |

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
// Static merepresentasikan settings dalam menyajikan file statis
type Static struct {
    // Secara transparant mengompres responses jika diset ke true
    // Cara kerjanya berbeda dari github.com/gofiber/compression middleware
    // Server mencoba meminimalkan penggunaan CPU dengan men-cache compressed files.
    // Ini akan menambahkan akhiran ".fiber.gz" pada nama asli file.
    // Opsional. Default value false
    Compress bool
    // Aktifkan byte-range requests jika diset ke true.
    // Opsional. Default value false
    ByteRange bool
    // Izinkan pencarian dalam direktori.
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

// All akan me-register route pada semua methods
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

// Use biasanya digunakan untuk middleware modules
// Routes ini hanya akan melakukan pencocokan dengan awalan pada masing-masing path
// misalnya "/john" akan cocok dengan "/john/doe", "/johnnnn"
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

Group routes dapat dibuat dengan `*Group` struct.

**Signature**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**Contoh**

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

Method ini menampilkan semua route yang terdaftar.

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

Binds dan listens untuk koneksi pada address yang ditentukan. Dapat berupa `int` untuk port atau `string` untuk address. This will listen either on `tcp4` or `tcp6` depending on the address input \(i.e. `:3000` / `[::1]:3000` \).

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
app.Listen("[::1]:8080")
```
{% endcode %}

Untuk mengaktifkan **TLS/HTTPS** tambahkan [**TLS config**](https://golang.org/pkg/crypto/tls/#Config).

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

## Listener

Anda dapat menggunakan [`net.Listener`](https://golang.org/pkg/net/#Listener) yang telah dibuat menggunakan `Serve` method.

{% code title="Signature" %}
```go
app.Listener(ln net.Listener, tls ...*tls.Config) error
```
{% endcode %}

{% hint style="warning" %}
**Listener** does not support the [**Prefork**](app.md#settings) feature.
{% endhint %}

{% code title="Example" %}
```go
if ln, err = net.Listen("tcp", ":8080"); err != nil {
    log.Fatal(err)
}

app.Listener(ln)
```
{% endcode %}

## Test

Testing aplikasi dapat dilakukan cukup dengan **Test** method. Gunakan method ini untuk membuat file `_test.go` atau saat Anda butuh men-debug routing logic. Default timeout adalah `200ms` jika Anda ingin men-disable timeout keseluruhan gunakan `-1` sebagai argument kedua.

{% code title="Signature" %}
```go
app.Test(req *http.Request, msTimeout ...int) (*http.Response, error)
```
{% endcode %}

{% code title="Example" %}
```go
// Buat route dengan GET method untuk tes:
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

// Lakukan sesuatu dengan results:
if resp.StatusCode == 200 {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hello, World!
}
```
{% endcode %}

