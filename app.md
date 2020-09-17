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
// Custom config
app.Static("/", "./public", fiber.Static{
  Compress:   true,
  ByteRange:  true,
  Browse:     true,
  Index:      "john.html"
})
```
{% endcode %}

## Route Handlers

Registers a route bound to a specific [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) and the path.

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

**Use** can be used for middleware packages and prefix catchers. These routes will only match the beginning of each path i.e. "/john" will match "/john/doe", "/johnnnn"

{% code title="Signatures" %}
```text
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

## Group

You can group routes by calling `Group` method.

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

  app.Listen(3000)
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
var handler = func(c *fiber.Ctx) {}

func main() {
    app := fiber.New()

    app.Get("/john", handler)
    app.Post("/register", handler)

    data, _ := json.MarshalIndent(app.Stack(), "", "  ")
    fmt.Println(string(data))
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

## Config

Config returns the app config as value \( read-only \).

{% code title="Signature" %}
```go
func (app *App) Config() Config
```
{% endcode %}

## Handler

Handler returns the server handler that can be used to serve custom `*fasthttp.RequestCtx` requests.

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
// Listen on port 0.0.0.0:8080 
app.Listen(":8080")

// Custom host
app.Listen("127.0.0.1:8080")
```
{% endcode %}

## Listener

You can pass your own [`net.Listener`](https://golang.org/pkg/net/#Listener) using the `Listener` method. This method can be used to enable **TLS/HTTPS**.

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

Testing your application is done with the **Test** method. Use this method for creating `_test.go` files or when you need to debug your routing logic. The default timeout is `1000ms` if you want to disable a timeout altogether, pass `-1` as the `msTimeout` argument.

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
if resp.StatusCode == 200 {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hello, World!
}
```
{% endcode %}

