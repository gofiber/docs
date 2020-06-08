---
description: Appインスタンスは、慣習的にFiberアプリケーション自身を表します。
---

# 🚀 アプリケーション

## New

このメソッドは、新しい**App**という名前のインスタンスを作成します。 新しいインスタンスを作成するときにオプションの [設定 ](app.md#settings)を渡すことができます

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

`New` を呼び出すときにアプリケーションの設定を渡すことができます。

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

`app` を初期化した後に設定を変更することもできます。

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

| プロパティ                     | 型               | 説明                                                                                                                                                                                            | デフォルト値            |
|:------------------------- |:--------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`          | [`SO_REUSEPORT`](https://lwn.net/Articles/542629/)ソケットオプションの使用を有効にします。 同じポートで複数の Go プロセスがリッスンされます。 [ソケットシャーディング](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/) の詳細をご覧ください。 | `false`           |
| ServerHeader              | `string`        | 指定した値で `サーバー` HTTP ヘッダーを有効にします。                                                                                                                                                               | `""`              |
| StrictRouting             | `bool`          | 有効にすると、ルーターは `/foo` と `/foo/` を異なるものとして扱います。 そうでなければ、ルータは `/foo` と `/foo/` を同じように扱います。                                                                                                        | `false`           |
| CaseSensitive             | `bool`          | 有効にすると、 `/Foo` と `/foo` は異なるルートになります。 無効にすると、 `/Foo`と `/foo` が同じ扱いになります。                                                                                                                      | `false`           |
| Immutable                 | `bool`          | 有効な場合、コンテキストメソッドによって返されるすべての値は変更不能です。 デフォルトでは、ハンドラから戻るまで有効です。issue[\#185](https://github.com/gofiber/fiber/issues/185) を参照してください。                                                           | `false`           |
| BodyLimit                 | `int`           | リクエストボディが許可する最大サイズを設定します。最大サイズを超えた場合、それは `413 - Request Entity Too Large` レスポンスを返します。                                                                                                         | `4 * 1024 * 1024` |
| CompressedFileSuffix      | `string`        | Adds suffix to the original file name and tries saving the resulting compressed file under the new file name.                                                                                 | `".fiber.gz"`     |
| Concurrency               | `int`           | 同時接続数の最大値を設定します。                                                                                                                                                                              | `256 * 1024`      |
| DisableKeepalive          | `bool`          | Keep-alive接続を無効にすると、クライアントに最初のレスポンスを送信した後、サーバーは接続を閉じます。                                                                                                                                       | `false`           |
| DisableDefaultDate        | `bool`          | true に設定すると、デフォルトの日付ヘッダーがレスポンスから除外されます。                                                                                                                                                       | `false`           |
| DisableDefaultContentType | `bool`          | true に設定すると、デフォルトの Content-Type ヘッダーがレスポンスから除外されます。                                                                                                                                           | `false`           |
| DisableStartupMessage     | `bool`          | trueに設定すると、fiber ASCIIと"listening"がメッセージに出力されません                                                                                                                                              | `false`           |
| DisableHeaderNormalizing  | `bool`          | デフォルトではすべてのヘッダ名は正規化されます: conteNT-tYPE -&gt; Content-Type                                                                                                                                | `false`           |
| ETag                      | `bool`          | ETagヘッダの生成を有効または無効にします。弱いETagと強いETagの両方が同じハッシュメソッド \(CRC-32\)を使用して生成されるためです。 有効にすると、弱いETagがデフォルトになります。                                                                                      | `false`           |
| Templates                 | `Templates`     | テンプレートは、Render 関数をラップするインターフェイスです。 サポートされているエンジンについては、 [**テンプレートミドルウェア**](middleware.md#template) をご覧ください。                                                                                    | `nil`             |
| ReadTimeout               | `time.Duration` | リクエストボディを含む全てのリクエストを読むことができる時間。 デフォルトのタイムアウトは無制限です。                                                                                                                                           | `nil`             |
| WriteTimeout              | `time.Duration` | レスポンスが書き込まれるタイミングをタイミングアウトするまでの最大時間。 デフォルトのタイムアウトは無制限です。                                                                                                                                      | `nil`             |
| IdleTimeout               | `time.Duration` | keep-aliveが有効な場合に、次のリクエストを待つ最大時間。 IdleTimeout が 0 の場合、ReadTimeout の値が使用されます。                                                                                                                  | `nil`             |

## Static

**Static** メソッドを使用して、 **image**、 **CSS** および **JavaScript** などの静的ファイルを提供します。

{% hint style="info" %}
デフォルトでは、 **Static** は `index.html` ファイルをディレクトリのリクエストに応答して提供します。
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => with prefix
```
{% endcode %}

`./public` というディレクトリ内のファイルを扱うには、次のコードを使用します。

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

複数のディレクトリから提供するために、 **Static** を複数回使用できます。

{% code title="Example" %}
```go
// Serve files from "./public" directory:
app.Static("/", "./public")

// Serve files from "./files" directory:
app.Static("/", "./files")
```
{% endcode %}

{% hint style="info" %}
静的アセットを提供するパフォーマンスを向上させるために、 [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) のようなリバースプロキシキャッシュを使用します。
{% endhint %}

**Static** メソッドが提供するファイルには、任意のvirtual path prefix \(_ファイルシステムに実際に存在しないパス_\) を使用することができます。

{% code title="Example" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

静的ファイルを提供するための設定について、もう少し制御したい場合、 You could use the `fiber.Static` struct to enable specific settings.

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

HTTP リクエストをルーティングします。ここで、 **METHOD** は リクエストの [HTTP メソッド](https://developer. mozilla. org/en-US/docs/Web/HTTP/Methods) です。

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

`*Group` 構造体を作成することでルートをグループ化できます。

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

## Listen

指定されたアドレスの接続をバインドし、リッスンします。 ポートでは `int` 、アドレスでは `string` を指定できます。

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

**TLS/HTTPS** を有効にするには、 [**TLS config**](https://golang. org/pkg/crypto/tls/#Config) を追加します。

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
**Serve** は [**Prefork**](app.md#settings) 機能をサポートしていません。
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

アプリケーションのテストは、 **Test** メソッドで行います。 `_test.go` ファイルを作成する場合や、ルーティングのロジックをデバッグする場合は、このメソッドを使用します。 デフォルトのタイムアウト時間は `200ms` です。タイムアウトを完全に無効にしたい場合は、第2引数として `-1` を渡します。

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

