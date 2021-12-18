---
description: The app instance conventionally denotes the Fiber application.
---

# 🚀 App

## Static

Use the **Static** method to serve static files such as **images**, **CSS,** and **JavaScript**.

{% hint style="info" %}
By default, **Static** will serve `index.html` files in response to a request on a directory.
{% endhint %}

{% code title="Signature" %}
```go
func (app *App) Static(prefix, root string, config ...Static) Router
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

{% code title="Example" %}
```go
// Serve files from multiple directories
app.Static("/", "./public")

// Serve files from "./files" directory:
app.Static("/", "./files")
```
{% endcode %}

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
// Static defines configuration options when defining static assets.
type Static struct {
    // When set to true, the server tries minimizing CPU usage by caching compressed files.
    // This works differently than the github.com/gofiber/compression middleware.
    // Optional. Default value false
    Compress bool `json:"compress"`

    // When set to true, enables byte range requests.
    // Optional. Default value false
    ByteRange bool `json:"byte_range"`

    // When set to true, enables directory browsing.
    // Optional. Default value false.
    Browse bool `json:"browse"`

    // The name of the index file for serving a directory.
    // Optional. Default value "index.html".
    Index string `json:"index"`

    // Expiration duration for inactive file handlers.
    // Use a negative time.Duration to disable it.
    //
    // Optional. Default value 10 * time.Second.
    CacheDuration time.Duration `json:"cache_duration"`

    // The value for the Cache-Control HTTP-header
    // that is set on the file response. MaxAge is defined in seconds.
    //
    // Optional. Default value 0.
    MaxAge int `json:"max_age"`

    // Next defines a function to skip this middleware when returned true.
    //
    // Optional. Default: nil
    Next func(c *Ctx) bool
}
```
{% endcode %}

{% code title="Example" %}
```go
// Custom config
app.Static("/", "./public", fiber.Static{
  Compress:      true,
  ByteRange:     true,
  Browse:        true,
  Index:         "john.html"
  CacheDuration: 10 * time.Second,
  MaxAge:        3600,
})
```
{% endcode %}

## Route Handlers

Registeres a route bound to a specific [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

{% code title="Signatures" %}
```go
// HTTP methods
func (app *App) Get(path string, handlers ...Handler) Router
func (app *App) Head(path string, handlers ...Handler) Router
func (app *App) Post(path string, handlers ...Handler) Router
func (app *App) Put(path string, handlers ...Handler) Router
func (app *App) Delete(path string, handlers ...Handler) Router
func (app *App) Connect(path string, handlers ...Handler) Router
func (app *App) Options(path string, handlers ...Handler) Router
func (app *App) Trace(path string, handlers ...Handler) Router
func (app *App) Patch(path string, handlers ...Handler) Router

// Add allows you to specifiy a method as value
func (app *App) Add(method, path string, handlers ...Handler) Router

// All will register the route on all HTTP methods
// Almost the same as app.Use but not bound to prefixes
func (app *App) All(path string, handlers ...Handler) Router
```
{% endcode %}

{% code title="Example" %}
```go
// Simple GET handler
app.Get("/api/list", func(c *fiber.Ctx)error{
  return c.SendString("I'm a GET request!")
})

// Simple POST handler
app.Post("/api/register", func(c *fiber.Ctx) error {
  return c.SendString("I'm a POST request!")
})
```
{% endcode %}

**Use** can be used for middleware packages and prefix catchers. These routes will only match the beginning of each path i.e. `/john` will match `/john/doe`, `/johnnnnn` etc

{% code title="Signatures" %}
```go
func (app *App) Use(args ...interface{}) Router
```
{% endcode %}

{% code title="Example" %}
```go
// Match any request
app.Use(func(c *fiber.Ctx) error {
    return c.Next()
})

// Match request starting with /api
app.Use("/api", func(c *fiber.Ctx) error {
    return c.Next()
})

// Attach multiple handlers 
app.Use("/api",func(c *fiber.Ctx) error {
  c.Set("X-Custom-Header", random.String(32))
    return c.Next()
}, func(c *fiber.Ctx) error {
    return c.Next()
})
```
{% endcode %}

## Mount

You can Mount Fiber instance by creating a `*Mount`

**Signature**

```go
func (a *App) Mount(prefix string, app *App) Router
```

**Example**

```go
func main() {
    micro := fiber.New()
    micro.Get("/doe", func(c *fiber.Ctx) error {
        return c.SendStatus(fiber.StatusOK)
    })

    app := fiber.New()
    app.Mount("/john", micro) // GET /john/doe -> 200 OK

    log.Fatal(app.Listen(":3000"))
}
```

## Group

You can group routes by creating a `*Group` struct.

**Signature**

```go
func (app *App) Group(prefix string, handlers ...Handler) Router
```

**Example**

```go
func main() {
  app := fiber.New()

  api := app.Group("/api", handler)  // /api

  v1 := api.Group("/v1", handler)   // /api/v1
  v1.Get("/list", handler)          // /api/v1/list
  v1.Get("/user", handler)          // /api/v1/user

  v2 := api.Group("/v2", handler)   // /api/v2
  v2.Get("/list", handler)          // /api/v2/list
  v2.Get("/user", handler)          // /api/v2/user

  log.Fatal(app.Listen(":3000"))
}
```

## Server

Server returns the underlying [fasthttp server](https://godoc.org/github.com/valyala/fasthttp#Server)

```go
func (app *App) Server() *fasthttp.Server
```

```go
func main() {
    app := fiber.New()

    app.Server().MaxConnsPerIP = 1

    // ...
}
```

## Stack

This method returns the original router stack

{% code title="Signature" %}
```go
func (app *App) Stack() [][]*Route
```
{% endcode %}

{% code title="Example" %}
```go
var handler = func(c *fiber.Ctx) error { return nil }

func main() {
	app := fiber.New()

	app.Get("/john/:age", handler)
	app.Post("/register", handler)

	data, _ := json.MarshalIndent(app.Stack(), "", "  ")
	fmt.Println(string(data))

	app.Listen(":3000")
}
```
{% endcode %}

{% code title="Result" %}
```javascript
[
  [
    {
      "method": "GET",
      "path": "/john/:age",
      "params": [
        "age"
      ]
    }
  ],
  [
    {
      "method": "HEAD",
      "path": "/john/:age",
      "params": [
        "age"
      ]
    }
  ],
  [
    {
      "method": "POST",
      "path": "/register",
      "params": null
    }
  ]
]
```
{% endcode %}

## Name

This method assigns the name of latest created route.

{% code title="Signature" %}
```go
func (app *App) Name(name string) Router
```
{% endcode %}

{% code title="Example" %}
```go
var handler = func(c *fiber.Ctx) error { return nil }

func main() {
	app := fiber.New()

	app.Get("/", handler)
	app.Name("index")

	app.Get("/doe", handler).Name("home")

	app.Trace("/tracer", handler).Name("tracert")

	app.Delete("/delete", handler).Name("delete")

	a := app.Group("/a")
	a.Name("fd.")

	a.Get("/test", handler).Name("test")

	data, _ := json.MarshalIndent(app.Stack(), "", "  ")
	fmt.Print(string(data))

	app.Listen(":3000")

}
```
{% endcode %}

{% code title="Result" %}
```javascript
[
  [
    {
      "method": "GET",
      "name": "index",
      "path": "/",
      "params": null
    },
    {
      "method": "GET",
      "name": "home",
      "path": "/doe",
      "params": null
    },
    {
      "method": "GET",
      "name": "fd.test",
      "path": "/a/test",
      "params": null
    }
  ],
  [
    {
      "method": "HEAD",
      "name": "",
      "path": "/",
      "params": null
    },
    {
      "method": "HEAD",
      "name": "",
      "path": "/doe",
      "params": null
    },
    {
      "method": "HEAD",
      "name": "",
      "path": "/a/test",
      "params": null
    }
  ],
  null,
  null,
  [
    {
      "method": "DELETE",
      "name": "delete",
      "path": "/delete",
      "params": null
    }
  ],
  null,
  null,
  [
    {
      "method": "TRACE",
      "name": "tracert",
      "path": "/tracer",
      "params": null
    }
  ],
  null
]
```
{% endcode %}

## Config

Config returns the app config as value \( read-only \).

{% code title="Signature" %}
```go
func (app *App) Config() Config
```
{% endcode %}

## Handler

Handler returns the server handler that can be used to serve custom \*fasthttp.RequestCtx requests.

{% code title="Signature" %}
```go
func (app *App) Handler() fasthttp.RequestHandler
```
{% endcode %}

## Listen

Listen serves HTTP requests from the given address.

{% code title="Signature" %}
```go
func (app *App) Listen(addr string) error
```
{% endcode %}

{% code title="Examples" %}
```go
// Listen on port :8080 
app.Listen(":8080")

// Custom host
app.Listen("127.0.0.1:8080")
```
{% endcode %}

## ListenTLS

ListenTLS serves HTTPs requests from the given address using certFile and keyFile paths to as TLS certificate and key file.

{% code title="Signature" %}
```go
func (app *App) ListenTLS(addr, certFile, keyFile string) error
```
{% endcode %}

{% code title="Examples" %}
```go
app.ListenTLS(":443", "./cert.pem", "./cert.key");
```
{% endcode %}

Using `ListenTLS` defaults to the following config \( use `Listener` to provide your own config \)

{% code title="Default \*tls.Config" %}
```go
&tls.Config{
    MinVersion:               tls.VersionTLS12,
    PreferServerCipherSuites: true,
    Certificates: []tls.Certificate{
        cert,
    },
}
```
{% endcode %}

## Listener

You can pass your own [`net.Listener`](https://golang.org/pkg/net/#Listener) using the `Listener` method. This method can be used to enable **TLS/HTTPS** with a custom tls.Config.

{% code title="Signature" %}
```go
func (app *App) Listener(ln net.Listener) error
```
{% endcode %}

{% code title="Example" %}
```go
ln, _ := net.Listen("tcp", ":3000")

cer, _:= tls.LoadX509KeyPair("server.crt", "server.key")

ln = tls.NewListener(ln, &tls.Config{Certificates: []tls.Certificate{cer}})

app.Listener(ln)
```
{% endcode %}

## Test

Testing your application is done with the **Test** method. Use this method for creating `_test.go` files or when you need to debug your routing logic. The default timeout is `1s` if you want to disable a timeout altogether, pass `-1` as a second argument.

{% code title="Signature" %}
```go
func (app *App) Test(req *http.Request, msTimeout ...int) (*http.Response, error)
```
{% endcode %}

{% code title="Example" %}
```go
// Create route with GET method for test:
app.Get("/", func(c *fiber.Ctx) error {
  fmt.Println(c.BaseURL())              // => http://google.com
  fmt.Println(c.Get("X-Custom-Header")) // => hi

  return c.SendString("hello, World!")
})

// http.Request
req := httptest.NewRequest("GET", "http://google.com", nil)
req.Header.Set("X-Custom-Header", "hi")

// http.Response
resp, _ := app.Test(req)

// Do something with results:
if resp.StatusCode == fiber.StatusOK {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hello, World!
}
```
{% endcode %}

