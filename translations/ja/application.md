---
description: アプリインスタンスは通常、Fiberアプリケーションを示します。
---

# 🚀アプリケーション

## 新着

メソッドは、新しい**Fiber**という名前のインスタンスを作成します。

```go
app := fiber.New()
```

## 静的

**画像** 、 **CSS** 、 **JavaScript**ファイルなどの静的ファイルを提供するには、 **Static**メソッドを使用できます。

{％hint style = "info"％}デフォルトでは、このメソッドはディレクトリのリクエストに応じて`index.html`ファイルを送信します。 {％endhint％}

#### 署名

```go
app.Static(root string)         // => without prefix
app.Static(prefix, root string) // => with prefix
```

#### 例

次のコードを使用して、。 `./public`という名前のディレクトリ内のファイルを提供します

```go
app.Static("./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```

複数のディレクトリから提供するには、 **Staticを**複数回使用できます。

```go
// Serve files from "./public" directory:
app.Static("./public")

// Serve files from "./files" directory:
app.Static("./files")
```

{％hint style = "info"％} [NGINXの](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/)ようなリバースプロキシキャッシュを使用して、静的アセットを提供するパフォーマンスを改善します。 {％endhint％}

**Static**メソッドによって提供されるファイルの仮想パスプレフィックス（ *ファイルシステムに実際にパスが存在しない場所* ）を作成するには、以下に示すように、静的ディレクトリのプレフィックスパスを指定します。

```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```

## 方法

HTTPリクエストをルーティングします**。METHOD**はリクエストの[HTTPメソッド](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)です。

#### 署名

```go
app.METHOD(handler func(*Ctx))              // match any path
app.METHOD(path string, handler func(*Ctx)) // match specific path
```

#### 例

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

## 聴く

指定されたアドレスで接続をバインドおよびリッスンします。これは、ポートの`int`またはアドレスの`string`することができます。

#### 署名

```go
app.Listen(address interface{}, tls ...string)
```

#### 例

```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```

**TLS / HTTPSを**有効にするには、あなたの**証明書**と**キーの**パスを追加することができます。

```go
app.Listen(443, "server.crt", "server.key")
```

## 設定

### エンジン

**Fiber**インスタンスを介して、デフォルトの**Fasthttp** [サーバー設定](https://github.com/valyala/fasthttp/blob/master/server.go#L150)を変更できます。これらの設定は、 [Listen](application.md#listen)メソッドの**前に**設定する必要があります。

{％hint style = "danger"％}これらの設定は、自分が**何をし**ているかわかって**いる**場合にのみ変更し**て**ください。 {％endhint％}

```go
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
```

### プリフォーク

Preforkオプションは、 [**SO_REUSEPORT**](https://lwn.net/Articles/542629/)ソケットオプションの使用を有効にします。これは、 **DragonFly BSD**および**Linux** （カーネルバージョン**3.9**以降）を含む多くのオペレーティングシステムの新しいバージョンで利用可能です。これにより、同じポートでリッスンする複数のGoプロセスが生成されます。

**NGINXに**は[Socket Sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/)に関する素晴らしい記事があります。これらの写真は同じ記事からのものです。

![Schema, when Prefork disabled (by default)](https://cdn.wp.nginx.com/wp-content/uploads/2015/05/Slack-for-iOS-Upload-1-e1432652484191.png)

![Schema, when Prefork enabled](https://cdn.wp.nginx.com/wp-content/uploads/2015/05/Slack-for-iOS-Upload-e1432652376641.png)

`-prefork`フラグを追加して、Prefork機能を有効にできます。

```bash
./server -prefork
```

または、 `Prefork`オプションを`true`設定し`true` 。

```go
app.Prefork = true // Prefork enabled

app.Get("/", func(c *fiber.Ctx) {
  msg := fmt.Sprintf("Worker #%v", os.Getpid())
  c.Send(msg)
  // => Worker #16858
  // => Worker #16877
  // => Worker #16895
})
```

### サーバ

デフォルトでは、ファイバーは[サーバーヘッダーを](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server)送信しませんが、サーバーの値を変更することでこれを有効にできます。

```go
app.Server = "Windows 95" // => Server: Windows 95
```

### バナー

Fiberアプリケーションを起動すると、コンソールはパッケージバージョンとリスニングポートを含むバナーを印刷します。 *これはデフォルトで有効になっています。*

![](../../.gitbook/assets/screenshot-2020-02-08-at-13.18.27.png)

無効にするには、 `Banner`を`false`に設定し`false` 。

```go
app.Banner = false // Hide banner
```

## テスト

アプリケーションの**テスト**は、 **Test**メソッドを使用して行われます。

{％hint style = "info"％}メソッドは、主に`_test.go`ファイルとアプリケーションのデバッグに使用されます。 {％endhint％}

#### 署名

```go
app.Test(req *http.Request) (*http.Response, error)
```

#### 例

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
