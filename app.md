---
description: The app instance conventionally denotes the Fiber application.
---

# 🚀 Application

## Default

## New

This method creates a new **App** named instance with a custom configuration.

```go
func New(config Config) *App
```

```go
package main

import "github.com/gofiber/fiber"

func main() {
    app := fiber.New(fiber.Config{
        Prefork:       true,
        CaseSensitive: true,
        StrictRouting: true,
        ServerHeader:  "Fiber",
    })

    // ...

    if err := app.Listen(":3000"); err != nil {
        println(err)
    }
}
```

## Config

When creating a new Fiber instance, you can use different configurations for your application.

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

Or change the settings after initializing an `app`.

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

**Settings** **fields**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Prefork | `bool` | Enables use of the[`SO_REUSEPORT`](https://lwn.net/Articles/542629/)socket option. This will spawn multiple Go processes listening on the same port. learn more about [socket sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false` |
| ServerHeader | `string` | Enables the `Server` HTTP header with the given value. | `""` |
| StrictRouting | `bool` | When enabled, the router treats `/foo` and `/foo/` as different. Otherwise, the router treats `/foo` and `/foo/` as the same. | `false` |
| CaseSensitive | `bool` | When enabled, `/Foo` and `/foo` are different routes. When disabled, `/Foo`and `/foo` are treated the same. | `false` |
| Immutable | `bool` | When enabled, all values returned by context methods are immutable. By default, they are valid until you return from the handler; see the issue [\#185](https://github.com/gofiber/fiber/issues/185). | `false` |
| UnescapePath | `bool` | Converts all encoded characters in the route back before setting the path for the context, so that the routing can also work with urlencoded special characters | `false` |
| BodyLimit | `int` | Sets the maximum allowed size for a request body, if the size exceeds the configured limit, it sends `413 - Request Entity Too Large` response. | `4 * 1024 * 1024` |
| CompressedFileSuffix | `string` | Adds suffix to the original file name and tries saving the resulting compressed file under the new file name. | `".fiber.gz"` |
| Concurrency | `int` | Maximum number of concurrent connections. | `256 * 1024` |
| DisableKeepalive | `bool` | Disable keep-alive connections, the server will close incoming connections after sending the first response to client | `false` |
| DisableDefaultDate | `bool` | When set to true causes the default date header to be excluded from the response. | `false` |
| DisableDefaultContentType | `bool` | When set to true, causes the default Content-Type header to be excluded from the Response. | `false` |
| DisableStartupMessage | `bool` | When set to true, it will not print out the fiber ASCII and "listening" on message | `false` |
| DisableHeaderNormalizing | `bool` | By default all header names are normalized: conteNT-tYPE -&gt; Content-Type | `false` |
| ETag | `bool` | Enable or disable ETag header generation, since both weak and strong etags are generated using the same hashing method \(CRC-32\). Weak ETags are the default when enabled. | `false` |
| Views | `Views` | Views is the interface that wraps the Render function. See our **Template Middleware** for supported engines. | `nil` |
| ReadTimeout | `time.Duration` | The amount of time allowed to read the full request, including body. The default timeout is unlimited. | `nil` |
| WriteTimeout | `time.Duration` | The maximum duration before timing out writes of the response. The default timeout is unlimited. | `nil` |
| IdleTimeout | `time.Duration` | The maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is zero, the value of ReadTimeout is used. | `nil` |
| ReadBufferSize | `int` | per-connection buffer size for requests' reading. This also limits the maximum header size. Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers \(for example, BIG cookies\). | `4096` |
| WriteBufferSize | `int` | Per-connection buffer size for responses' writing. | `4096` |

## Static

Use the **Static** method to serve static files such as **images**, **CSS** and **JavaScript**.

{% hint style="info" %}
By default, **Static** will serve `index.html` files in response to a request on a directory.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => with prefix
```
{% endcode %}

Use the following code to serve files in a directory named `./public`

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

To serve from multiple directories, you can use **Static** numerous times.

{% code title="Example" %}
```go
// Serve files from "./public" directory:
app.Static("/", "./public")

// Serve files from "./files" directory:
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
    // Enables byte-range requests if set to true.
    // Optional. Default value false
    ByteRange bool
    // Enable directory browsing.
    // Optional. Default value false.
    Browse bool
    // File to serve when requesting a directory path.
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
// Add allows you to specifiy a method as value
app.Add(method, path string, handlers ...func(*Ctx)) Router

// All will register the route on all methods
app.All(path string, handlers ...func(*Ctx)) Router

// HTTP methods
app.Get(path string, handlers ...func(*Ctx)) Router
app.Put(path string, handlers ...func(*Ctx)) Router
app.Post(path string, handlers ...func(*Ctx)) Router
app.Head(path string, handlers ...func(*Ctx)) Router
app.Patch(path string, handlers ...func(*Ctx)) Router
app.Trace(path string, handlers ...func(*Ctx)) Router
app.Delete(path string, handlers ...func(*Ctx)) Router
app.Connect(path string, handlers ...func(*Ctx)) Router
app.Options(path string, handlers ...func(*Ctx)) Router

// Use is mostly used for middleware modules
// These routes will only match the beggining of each path
// i.e. "/john" will match "/john/doe", "/johnnnn"
app.Use(handlers ...func(*Ctx)) Router
app.Use(prefix string, handlers ...func(*Ctx)) Router
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
app.Group(prefix string, handlers ...func(*Ctx)) Router
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

## Stack

This method returns the original router stack

{% code title="Signature" %}
```go
app.Stack() [][]*Route
```
{% endcode %}

{% code title="Example" %}
```go
app := fiber.New()

app.Use(handler)
app.Get("/john", handler)
app.Post("/register", handler)
app.Get("/v1/users", handler)
app.Put("/user/:id", handler)
app.Head("/xhr", handler)

data, _ := json.MarshalIndent(app.Stack(), "", "  ")
fmt.Println(string(data))
```
{% endcode %}

## Listen

Binds and listens for connections on the specified address. This can be an `int` for port or `string` for address. This will listen either on `tcp4` or `tcp6` depending on the address input \(i.e. `:3000` / `[::1]:3000` \).

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

## Listener

You can pass your own [`net.Listener`](https://golang.org/pkg/net/#Listener) using the `Listener` method.

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

