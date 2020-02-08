---
description: The app instance conventionally denotes the Fiber application.
---

# Application

## New

Creates an new Fiber instance that we named `app`.

```go
app := fiber.New()
// ...
// Application logic here...
// ...
app.Listen(8080)
```

## Server

Fiber by default does not send a [Server header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server), but you can enable this by changing the server value.

```go
app := fiber.New()

app.Server = "Windows 95"
// => Server: Windows 95

app.Listen(8080)
```

## Banner

When you launch your Fiber application, the console will print a banner containing the package version and listening port. This is enabled by default, disable it by setting `Banner` to `false`.

![](https://i.imgur.com/96l7g9l.png)

```go
app := fiber.New()

app.Banner = false

app.Listen(8080)
```

## Engine

You can change the `Fasthttp` [server settings](https://github.com/valyala/fasthttp/blob/master/server.go#L150) via the Fiber instance.  
These settings need to be set before you start the [Listen](application.md#listen) method.

{% hint style="warning" %}
Only change these settings if you know what your are doing.
{% endhint %}

```go
app := fiber.New()

// These are the default fasthttp settings
app.Engine.Concurrency = 256 * 1024
app.Engine.DisableKeepAlive = false
app.Engine.ReadBufferSize = 4096
app.Engine.WriteBufferSize = 4096
app.Engine.ReadTimeout = 0
app.Engine.WriteTimeout = 0
app.Engine.IdleTimeout = 0
app.Engine.MaxConnsPerIP = 0
app.Engine.MaxRequestsPerConn = 0
app.Engine.TCPKeepalive = false
app.Engine.TCPKeepalivePeriod = 0
app.Engine.MaxRequestBodySize = 4 * 1024 * 1024
app.Engine.ReduceMemoryUsage = false
app.Engine.GetOnly = false
app.Engine.DisableHeaderNamesNormalizing = false
app.Engine.SleepWhenConcurrencyLimitsExceeded = 0
app.Engine.NoDefaultContentType = false
app.Engine.KeepHijackedConns = false

// Start your app
app.Listen(8080)
```

## Prefork

The `Prefork` option enables use of the [**SO\_REUSEPORT**](https://lwn.net/Articles/542629/) socket option, which is available in newer versions of many operating systems, including DragonFly BSD and Linux \(kernel version 3.9 and later\). This will spawn multiple go processes listening on the same port.

NGINX has a great article about [Socket Sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/), these pictures are taken from the same article.

![](https://cdn.wp.nginx.com/wp-content/uploads/2015/05/Slack-for-iOS-Upload-1-e1432652484191.png)  
![](https://cdn.wp.nginx.com/wp-content/uploads/2015/05/Slack-for-iOS-Upload-e1432652376641.png)

You can enable the prefork feature by adding the `-prefork` flag.

```bash
./server -prefork
```

Or set the `Prefork` option  to `true`.

```go
app := fiber.New()

app.Prefork = true

app.Get("/", func(c *fiber.Ctx) {
  c.Send(fmt.Sprintf("Hi, I'm worker #%v", os.Getpid()))
  // => Hi, I'm worker #16858
  // => Hi, I'm worker #16877
  // => Hi, I'm worker #16895
})

app.Listen(8080)
```

## Methods

Routes an HTTP request, where METHOD is the [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) of the request, such as GET, PUT, POST, and so on capitalized. Thus, the actual methods are `app.Get()`, `app.Post()`, `app.Put()`, and so on.

```go
// Function signature
app.METHOD(handler func(*Ctx))
app.METHOD(path string, handler func(*Ctx))

// Methods
app.Connect(...)
app.Delete(...)
app.Get(...)
app.Head(...)
app.Options(...)
app.Patch(...)
app.Post(...)
app.Put(...)
app.Trace(...)

// Matches all methods & complete path
app.All(...)
// Matches all methods & urls starting with a specified path
app.Use(...)
```

## Static

To serve static files such as images, CSS files, and JavaScript files, you can use the `Static` method.  
By default this method will send `index.html` files in response to a request on a directory.

```go
// Function signature
app.Static(root string)
app.Static(prefix, root string)
```

For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:

```go
app.Static("./public")
```

Now, you can load the files that are in the public directory:

```text
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

To use multiple static assets directories, call the Static function multiple times:

```go
app.Static("./public")
app.Static("./files")
```

{% hint style="info" %}
Use a reverse proxy cache like [NGINX](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) to improve performance of serving static assets.
{% endhint %}

To create a virtual path prefix \(where the path does not actually exist in the file system\) for files that are served by the `Static` method, specify a prefix path for the static directory, as shown below:

```go
app.Static("/static", "./public")
```

Now, you can load the files that are in the public directory from the `/static` path prefix.

```text
http://localhost:8080/static/hello.html
http://localhost:8080/static/js/jquery.js
http://localhost:8080/static/css/style.css
```

## Listen

Binds and listens for connections on the specified address. This can be a **INT** for port or **STRING** for address. To enable **TLS/HTTPS** you can append your **cert** and **key** path.

```go
// Function signature
app.Listen(address interface{}, tls ...string)

// Examples
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")

// Enable TLS/HTTPS
app.Listen(443, "server.crt", "server.key")
```

## Test

Test is used for testing your application and package internals. You can send a http request locally.  
This method is mostly used for `_test` files, application debugging and automated tests.

```go
// Function signature
app.Test(req *http.Request) (*http.Response, error)

// Example
app := New()
app.Get("/", func(c *Ctx) {
  fmt.Println(c.BaseURL()) // => http://google.com
  fmt.Println(c.Get("X-Custom-Header")) // => hi
})

// http.Request
req, _ := http.NewRequest("GET", "http://google.com", nil)
req.Header.Set("X-Custom-Header", "hi")
// http.Response
resp, _ := app.Test(req)
// Do something with results
if resp.StatusCode == 200 {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body))
}
```

