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

## 静态文件

提供静态文件，例如**图像**，**CSS**和**JavaScript**文件，可以使用**Static**方法。

{% hint style="info" %}
默认情况下，此方法将发送`index.html`文件以响应对目录的请求。
{% endhint %}

**签名**

```go
app.Static(root string)         // => without prefix
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
app.METHOD(handler func(*Ctx))              // match any path
app.METHOD(path string, handler func(*Ctx)) // match specific path
```

**示例**

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

Fiber支持通过fasthttp实现的[Gorilla WebSocket](https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index)。  `*Conn`结构具有gorilla/websocket库中的所有功能，您可以在[此处](https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index)找到所有方法。

**签名**

```go
app.WebSocket(handler func(*Conn))              // match any path
app.WebSocket(path string, handler func(*Conn)) // match specific path
```

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
app.Listen(address interface{}, tls ...string)
```

**示例**

```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```

要启用**TLS/HTTPS，**您可以附加**证书**和**密钥**的路径。

```go
app.Listen(443, "server.crt", "server.key")
```

## 测试

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

## 设置

**示例**

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

**路由选项**

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
      <td style="text-align:left">ViewFolder</td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">
        <p>应用程序视图的目录。 如果设置了目录，它将是所有模板路径的前缀。</p>
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
      <td style="text-align:left">启用视图模板编译缓存。</td>
      <td style="text-align:left"><code>false</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">ViewEngine</td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">使用模板引擎: <code>html</code>, <a href="https://github.com/eknkc/amber"><code>amber</code></a>,
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
      <td style="text-align:left">如果预设了模板文件扩展名，则无需在渲染功能中提供完整的文件名: <code>c.Render(&quot;home&quot;, d) -&gt; home.pug</code> 
      </td>
      <td style="text-align:left"><code>&quot;html&quot;</code>
      </td>
    </tr>
  </tbody>
</table>

**Server 设置**

{% hint style="warning" %}
如果您知道自己在做什么，请仅更改这些设置。
{% endhint %}

| 属性 | 类型 | 描述 | 默认值 |
| :--- | :--- | :--- | :--- |
| GetOnly | `bool` | 如果设置为true，则拒绝所有非GET请求。 对于仅接受GET请求的服务器，此选项可用作反DoS攻击。 如果设置了`GetOnly`，则请求大小受`ReadBufferSize`限制。 | `false` |
| IdleTimeout | `time.Duration` | IdleTimeout是启用保持活动状态后等待下一个请求的最长时间。 如果IdleTimeout为`0`，则使用`ReadTimeout`的值。 | `0` |
| Concurrency | `int` | 服务器可以支持的最大并发连接数。 | `0` |
| ReadTimeout | `time.Duration` | 读取完整请求（包括正文）所允许的时间。 连接打开时或在读取第一个字节后进行保持活动的连接时，将重置连接的读取截止时间。 | `0` |
| WriteTimeout | `time.Duration` | 超时之前写入响应的最大超时时间。 请求处理程序返回后，将其重置。 | `0` |
| TCPKeepalive | `bool` | 是否启用tcp保持活动连接，并且操作系统应在tcp连接上发送tcp保持活动消息。 | `false` |
| MaxConnsPerIP | `int` | 每个IP允许的最大并发客户端连接数。 默认情况下，可以从单个IP地址到服务器建立`无限数量`的并发连接。 | `0` |
| ReadBufferSize | `int` | 每个连接的缓冲区大小，用于读取请求。 这也限制了最大标头大小。 如果您的客户端发送multi-KB RequestURI或多multi-KB标头\(例如 BIG cookie\)，则增加此缓冲区。 | `4096` |
| WriteBufferSize | `int` | 每个连接的缓冲区大小，用于写入响应。 | `4096` |
| ConcurrencySleep | `time.Duration` | 如果超过`并发`限制，则需要要等待的时间(默认为`0`)：不要等待，立即接受新的连接。 | `0` |
| DisableKeepAlive | `bool` | 是否禁用保持活动连接。 如果将此选项设置为`true`，则在将第一个响应发送给客户端之后，服务器将关闭所有传入连接。 | `false` |
| ReduceMemoryUsage | `bool` | 如果设置为`true`，则以降低CPU使用率为代价来积极减少内存使用。 仅当服务器消耗过多的内存(主要用于空闲的保持活动连接)时，才尝试启用此选项。 这样可以将内存使用量减少50％以上。 | `false` |
| MaxRequestsPerConn | `int` |每个连接服务的最大请求数。 服务器在最后一个请求后关闭连接。 `连接: 关闭`请求头添加到最后一个响应。 | `0` |
| TCPKeepalivePeriod | `time.Duration` | TCP 保持活动消息之间的时间间隔。 默认情况下，TCP保持活动时间由操作系统确定。 | `0` |
| MaxRequestBodySize | `int` | 最大请求体大小。 服务器拒绝请求体超过此限制的请求。 | `0` |
| NoHeaderNormalizing | `bool` | 默认情况下，请求和响应头的名称是规范化的， 例如: _`HOST -> Host`_ ,`cONTENT-lenGTH -> Content-Length` | `false` |
| NoDefaultContentType | `bool` | 设置为`true`时，将导致默认的Content-Type头从响应中排除。 | `false` |