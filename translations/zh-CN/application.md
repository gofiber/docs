---
description: 该应用程序实例通常表示Fiber应用程序。
---

# 🚀 应用实例

## New

此方法创建一个新的名为**Fiber**的实例。 创建新实例时，可以传递可选的[settings](application.md#setting)。

**签名**

```go
app := fiber.New(settings ...Settings)
```

**示例**

```go
package main

import "github.com/gofiber/fiber"

func main() {
    app := fiber.New()
    
    // Your app logic here ...
    
    app.Listen(3000)
}
```

## 设置

您可以在调用`New`时传递应用程序设置，或在调用`Listen`之前更改设置。

**示例**

```go
func main() {
    // Pass Settings creating a new app
		app := fiber.New(&fiber.Settings{
				Prefork:       true,
				CaseSensitive: true,
				StrictRouting: true,
				ServerHeader:  "Fiber",
				// etc...
		})
		
		// Or change Settings after initiating app
		app.Settings.Prefork = true
    app.Settings.CaseSensitive = true
    app.Settings.StrictRouting = true
    app.Settings.ServerHeader = "Fiber"
		// etc...
		
		app.Listen(3000)
}
```

**常用选项**

<table>
  <thead>
    <tr>
      <th style="text-align:left">属性</th>
      <th style="text-align:left">类型</th>
      <th style="text-align:left">描述</th>
      <th style="text-align:left">默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Prefork</td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td>启用对<a href="https://lwn.net/Articles/542629/"><code>SO_REUSEPORT</code></a>套接字选项的使用。 这将在同一端口上侦听多个Go进程。 有关<a href="https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/"><code>套接字分片</code></a>的更多信息。
      <td
      style="text-align:left"><code>false</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">ServerHeader</td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">使用给定值启用<code>服务器</code>HTTP头。</td>
      <td
      style="text-align:left"><code>&quot;&quot;</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">StrictRouting</td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">启用后，路由会将<code>/foo</code>和<code>/foo/</code>视为不同。 否则，路由会将<code>/foo</code>和<code>/foo/</code>视为相同。</td>
      <td style="text-align:left"><code>false</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">CaseSensitive</td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">启用后，<code>/Foo</code>和<code>/foo</code>是不同的路由。 禁用后，<code>/Foo</code>和<code>/foo</code>被视为相同。</td>
      <td
      style="text-align:left"><code>false</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">Immutable</td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">启用时，上下文方法返回的所有值都是不可变的。默认情况下，它们是有效的，直到您从处理程序返回，见问题<a href="https://github.com/gofiber/fiber/issues/185">#185</a>。</td>
      <td
      style="text-align:left"><code>false</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">Compression</td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">为所有响应启用GZip/Deflate压缩。</td>
      <td style="text-align:left"><code>false</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">BodyLimit</td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">设置请求主体的最大允许大小，如果大小超过配置的限制，则发送 <code>413 - Request Entity Too Large</code> response.</td>
      <td
      style="text-align:left"><code>4 * 1024 * 1024</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">TemplateFolder</td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">
        <p>应用程序视图的目录。如果设置了一个目录，这将是所有模板路径的前缀。</p>
        <p><code>c.Render(&quot;home.pug&quot;, d) -&gt; /views/home.pug</code>
        </p>
      </td>
      <td style="text-align:left"><code>&quot;&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">TemplateEngine</td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">要使用的模板引擎: <code>html</code>, <a href="https://github.com/eknkc/amber"><code>amber</code></a>,
        <a
        href="ttps://github.com/aymerick/raymond"><code>handlebars</code>
          </a>, <code>mustache</code> or <a href="https://github.com/Joker/jade"><code>pug</code></a>.</td>
      <td
      style="text-align:left"><code>&quot;&quot;</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">TemplateExtension</td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">如果你预先设置了模板文件扩展名，你不需要在渲染函数中提供完整的文件名: <code>c.Render(&quot;home&quot;, data) -&gt; home.pug</code>
      </td>
      <td style="text-align:left"><code>&quot;html&quot;</code>
      </td>
    </tr>
  </tbody>
</table>

## 静态文件

提供静态文件，例如**图像**，**CSS**和**JavaScript**文件，可以使用**Static**方法。

{% hint style="info" %}
默认情况下，此方法将发送`index.html`文件以响应对目录的请求。
{% endhint %}

**签名**

```go
app.Static(prefix, root string) // => with prefix
```

**示例**

使用以下代码将处理名为`./public`目录中的文件

```go
app.Static("./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```

要提供多个静态目录服务，可以多次使用**Staic** 。

```go
// Serve files from "./public" directory:
app.Static("./public")

// Serve files from "./files" directory:
app.Static("./files")
```

{% hint style="info" %}
使用[NGINX](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/)之类的反向代理缓存来提高提供静态文件的性能。
{% endhint %}

要为**Static**方法提供服务的文件创建虚拟路径前缀\(路径在文件系统中实际上不存在\)。请为静态目录指定前缀路径，如下所示：

```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```

## HTTP方法

路由HTTP请求，其中**METHOD**是请求的[HTTP方法](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) 。

**签名**

```go
// HTTP方法支持:param，:可选?和*通配符
// 您需要为每个方法传递一个路径
app.All(path string, handlers ...func(*Ctx))
app.Get(...)
app.Put(...)
app.Post(...)
app.Head(...)
app.Patch(...)
app.Trace(...)
app.Delete(...)
app.Connect(...)
app.Options(...)

// Use()将只匹配每个路径的初始化
// 列如 "/john" 只匹配 "/john/doe", "/johnnnn"
// Use() 不支持 :param & :optional?
app.Use(handlers ...func(*Ctx))
app.Use(prefix string, handlers ...func(*Ctx))
```

**示例**

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

## WebSocket

Fiber支持通过fasthttp实现的[Gorilla WebSocket](https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index)。  `*Conn`结构具有gorilla/websocket库中的所有功能，您可以在[此处](https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index)找到所有方法。

**签名**

```go
app.WebSocket(path string, handler func(*Conn))
```

{% hint style="warning" %}
WebSocket不支持路径参数和通配符。
{% endhint %}

**示例**

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
        if c.Get("host") != "localhost:3000" {
            c.Status(403).Send("Request origin not allowed")
        } else {
            c.Next()
        }
    })
    // Upgraded websocket request
    app.WebSocket("/ws", func(c *fiber.Conn) {
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
  // ws://localhost:3000/ws
    app.Listen(3000)
}
```

## 组路由

您可以通过创建一个`*Group`结构来对路由进行分组。

**签名**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**示例**

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

通过注册一个`Recover`方法，您可以从任何程序中的Panic的中恢复。你可以使用`.Error()`访问错误信息。

{% hint style="info" %}
默认情况下，`Recover`是禁用的，除非您注册了一个处理程序。
{% endhint %}

**签名**

``` go
app.Recover(handler ...func(*Ctx))
```

**示例**

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

绑定并侦听指定地址上的连接。这可以是端口的`int`或地址的`string` 。

**签名**

```go
app.Listen(address interface{}, tls ...*tls.Config)
```

**示例**

```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```

要启用**TLS/HTTPS，**您可以添加[**TLS config**](https://golang.org/pkg/crypto/tls/#Config)。

```go
cer, err := tls.LoadX509KeyPair("server.crt", "server.key")
if err != nil {
    log.Fatal(err)
}
config := &tls.Config{Certificates: []tls.Certificate{cer}}

app.Listen(443, config)
```

## Test

使用**Test**方法对应用程序进行测试。

{% hint style="info" %}
该方法主要用于`_test.go`文件和应用程序调试。
{% endhint %}

**签名**

```go
app.Test(req *http.Request) (*http.Response, error)
```

**示例**

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
