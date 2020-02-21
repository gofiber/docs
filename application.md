---
description: The app instance conventionally denotes the Fiber application.
---

# 🚀  Application

## New

This method creates a new **Fiber** named instance. You can pass optional [settings ](application.md#settings)when creating a new instance.

**Signature**

```go
fiber.New(settings ...*Settings)
```

**Example**

```go
package main

import "github.com/gofiber/fiber"

func main() {
    app := fiber.New()
    
    app.Static("/assets")
    
    app.Listen(3000)
}
```

## Static

Serve static files such as **images**, **CSS** and **JavaScript** files, you can use the **Static** method.

{% hint style="info" %}
By default, this method will send `index.html` files in response to a request on a directory.
{% endhint %}

#### Signature

```go
app.Static(root string)         // => without prefix
app.Static(prefix, root string) // => with prefix
```

#### Examples

Use the following code to serve files in a directory named `./public`

```go
app.Static("./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```

To serve from multiple directories, you can use **Static** multiple times.

```go
// Serve files from "./public" directory:
app.Static("./public")

// Serve files from "./files" directory:
app.Static("./files")
```

{% hint style="info" %}
Use a reverse proxy cache like [NGINX](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) to improve performance of serving static assets.
{% endhint %}

To create a virtual path prefix \(_where the path does not actually exist in the file system_\) for files that are served by the **Static** method, specify a prefix path for the static directory, as shown below:

```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```

## HTTP Methods

Routes an HTTP request, where **METHOD** is the [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) of the request.

#### Signature

```go
app.METHOD(handlers ...func(*Ctx))              // match any path
app.METHOD(path string, handlers ...func(*Ctx)) // match specific path
```

#### Example

```go
// Single method
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

// Matches all methods & URLs starting with a specified path
app.Use(...)
```

## WebSocket

Fiber supports a [Gorilla WebSocket](https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index) implementation for fasthttp. The `*Conn` struct has all the functionality from the gorilla/websocket library, you can find all methods [here](https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index).

 **Signature**

```go
app.WebSocket(handler func(*Conn))              // match any path
app.WebSocket(path string, handler func(*Conn)) // match specific path
```

**Example**

```go
package main

import (
	"log"
	"github.com/gofiber/fiber"
)

func main() {
	app := fiber.New()
	// Optional middleware
	app.Use("/ws", func(c *fiber.Ctx) {
		if c.Get("host") == "localhost" {
			c.Status(403).Send("Request origin not allowed")
		} else {
			c.Next()
		}
	})
	// Upgraded websocket request
	app.WebSocket("/ws/:id", func(c *fiber.Conn) {
	  log.Println(c.Params("id")) // 123
		for {
			mt, msg, err := c.ReadMessage()
      if err != nil {
      	log.Println("read:", err)
        break
      }
      log.Printf("recv: %s", msg)
      err = c.WriteMessage(mt, msg)
      if err != nil {
      	log.Println("write:", err)
        break
      }
		}
	})
  // ws://localhost:3000/ws/123
	app.Listen(3000)
}

```

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

## Recover

You can recover from panic errors in any handler by registering a `Recover` method. You can access the panic error by calling [`Error()`](https://github.com/gofiber/docs/tree/2f0839895190c02779e91237531b27445d4427c6/context/README.md#error)

{% hint style="info" %}
Recover is disabled by default unless you register a handler.
{% endhint %}

#### Signature

```go
app.Recover(handler ...func(*Ctx))
```

#### Example

```go
func main() {
  app := fiber.New()

  app.Get("/", func(c *fiber.Ctx) {
    panic("Something went wrong!")
  })

  app.Recover(func(c *fiber.Ctx) {
    c.Status(500).Send(c.Error())
    // => 500 "Something went wrong!"
  })

  app.Listen(3000)
}
```

## Listen

Binds and listens for connections on the specified address. This can be a `int` for port or `string` for address.

#### Signature

```go
app.Listen(address interface{}, tls ...string)
```

#### Example

```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```

To enable **TLS/HTTPS** you can append your **cert** and **key** path.

```go
app.Listen(443, "server.crt", "server.key")
```

## Test

Testing your application is done with the **Test** method.

{% hint style="info" %}
Method is mostly used for `_test.go` files and application debugging.
{% endhint %}

#### Signature

```go
app.Test(req *http.Request) (*http.Response, error)
```

#### Example

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

## Settings

**Example**

```go
func main() {
    // Pass Settings creating a new app
		app := fiber.New(&fiber.Settings{
				Prefork:       true,
				CaseSensitive: true,
				StrictRouting: true,
				ServerHeader:  "Go",
				// etc...
		})
		
		// Or change Settings after initiating app
		app.Settings.Prefork = true
		app.Settings.CaseSensitive = true
		app.Settings.StrictRouting = true
		app.Settings.ServerHeader = true
		// etc...
		
		app.Listen(3000)
}
```

**Routing options**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Prefork</td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">Enables use of the<a href="https://lwn.net/Articles/542629/"><code>SO_REUSEPORT</code></a>socket
        option. This will spawn multiple Go processes listening on the same port.</td>
      <td
      style="text-align:left"><code>false</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">ServerHeader</td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">Enables the <code>Server</code> HTTP header with the given value.</td>
      <td
      style="text-align:left"><code>&quot;&quot;</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">StrictRouting</td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">When enabled, the router treats <code>/foo</code> and <code>/foo/</code> as
        different. Otherwise, the router treats <code>/foo</code> and <code>/foo/</code> as
        the same.</td>
      <td style="text-align:left"><code>false</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">CaseSensitive</td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">When enabled, <code>/Foo</code> and <code>/foo</code> are different routes.
        When disabled, <code>/Foo</code>and <code>/foo</code> are treated the same.</td>
      <td
      style="text-align:left"><code>false</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">ViewFolder</td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">
        <p>A directory for the application&apos;s views. If a directory is set, this
          will be the prefix for all template paths.</p>
        <p><code>c.Render(&quot;home.pug&quot;, d) -&gt; /views/home.pug</code>
        </p>
      </td>
      <td style="text-align:left"><code>&quot;&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">ViewCache</td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">Enables view template compilation caching.</td>
      <td style="text-align:left"><code>false</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">ViewEngine</td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">The template engine to use: <code>html</code>, <a href="https://github.com/eknkc/amber"><code>amber</code></a>,
        <a
        href="ttps://github.com/aymerick/raymond"><code>handlebars</code>
          </a>, <code>mustache</code> or <a href="https://github.com/Joker/jade"><code>pug</code></a>.</td>
      <td
      style="text-align:left"><code>&quot;&quot;</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">ViewExtension</td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">If you preset the template file extension, you do not need to provide
        the full filename in the Render function: <code>c.Render(&quot;home&quot;, d) -&gt; home.pug</code> 
      </td>
      <td style="text-align:left"><code>&quot;&quot;</code>
      </td>
    </tr>
  </tbody>
</table>**Server settings**

{% hint style="warning" %}
Only change these settings, if you know **what** your are doing.
{% endhint %}

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| GetOnly | `bool` | Rejects all non-GET requests if set to `true`. This option is useful as anti-DoS protection for servers accepting only GET requests. The request size is limited by `ReadBufferSize` if `GetOnly` is set. | `false` |
| IdleTimeout | `time.Duration` | IdleTimeout is the maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is `0`, the value of `ReadTimeout` is used. | `0` |
| Concurrency | `int` | The maximum number of concurrent connections the server may serve. | `0` |
| ReadTimeout | `time.Duration` | The amount of time allowed to read the full request including body. The connection's read deadline is reset when the connection opens, or for keep-alive connections after the first byte has been read. | `0` |
| WriteTimeout | `time.Duration` | The maximum duration before timing out writes of the response. It is reset after the request handler has returned. | `0` |
| TCPKeepalive | `bool` | Whether to enable tcp keep-alive connections and the operating system should send tcp keep-alive messages on the tcp connection. | `false` |
| MaxConnsPerIP | `int` | Maximum number of concurrent client connections allowed per IP. By default `unlimited`number of concurrent connections may be established to the server from a single IP address. | `0` |
| ReadBufferSize | `int` | Per-connection buffer size for requests reading. This also limits the maximum header size. Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers \(for example, BIG cookies\). | `4096` |
| WriteBufferSize | `int` | Per-connection buffer size for responses writing. | `4096` |
| ConcurrencySleep | `time.Duration` | A duration to be slept of if the `concurrency` limit in exceeded, default is `0`: don't sleep and accept new connections immidiatelly. | `0` |
| DisableKeepAlive | `bool` | Whether to disable keep-alive connections. The server will close all the incoming connections after sending the first response to client if this option is set to `true`. | `false` |
| ReduceMemoryUsage | `bool` | Aggressively reduces memory usage at the cost of higher CPU usage if set to `true`. Try enabling this option only if the server consumes too much memory serving mostly idle keep-alive connections. This may reduce memory usage by more than `50%`. | `false` |
| MaxRequestsPerConn | `int` | Maximum number of requests served per connection. The server closes connection after the last request. `Connection: close` header is added to the last response. | `0` |
| TCPKeepalivePeriod | `time.Duration` | Period between tcp keep-alive messages. TCP keep-alive period is determined by operation system by default. | `0` |
| MaxRequestBodySize | `int` | Maximum request body size. The server rejects requests with bodies exceeding this limit. | `0` |
| NoHeaderNormalizing | `bool` | By default request and response header names are normalized, for example:_`HOST -> Host`_ ,`cONTENT-lenGTH -> Content-Length` | `false` |
| NoDefaultContentType | `bool` | When set to `true`, causes the default Content-Type header to be excluded from the Response. | `false` |

