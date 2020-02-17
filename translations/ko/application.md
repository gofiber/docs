---
description: app 인스턴스는 일반적으로 Fiber 어플리케이션을 나타냅니다.
---

# 🚀  어플리케이션

## New

메서드는 새로운 **Fiber** 인스턴스를 생성합니다.

```go
app := fiber.New()
```

## Static

**이미지**, **CSS**, 그리고 **JavaScript** 같은 정적 파일을 이용하기 위해, **Static** 메서드를 사용할 수 있습니다.

{% hint style="info" %}
기본적으로 이 메서드는 디렉토리의 요청에 대한 응답으로 `index.html` 파일을 전송합니다.
{% endhint %}

#### 시그내처 (Signature)

```go
app.Static(root string)         // => without prefix
app.Static(prefix, root string) // => with prefix
```

#### 예시

`./public`라는 이름의 디렉토리 안에 있는 파일을 이용하기 위해서 아래 코드를 사용합니다.

```go
app.Static("./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```

여러 디렉토리를 이용하기 위해, **Static**을 여러번 사용할 수 있습니다.

```go
// Serve files from "./public" directory:
app.Static("./public")

// Serve files from "./files" directory:
app.Static("./files")
```

{% hint style="info" %}
정적 파일 제공에 관한 서비스 성능 개선을 위해서 [NGINX](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/)와 같은 리버스 프록시 캐시를 이용할 수 있습니다.
{% endhint %}

**Static** 메서드에 의해 제공되는 파일에 대한 가상 경로 prefix (virtual path prefix)를 생성하려면 아래 코드와 같이 정적 디렉토리를 위한 prefix 경로를 지정해야 합니다.

```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```

## Methods

HTTP 요청을 라우트하며, 여기서 **METHOD**는 HTTP 요청의 [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)입니다.

#### 시그내처 (Signature)

```go
app.METHOD(handler func(*Ctx))              // match any path
app.METHOD(path string, handler func(*Ctx)) // match specific path
```

#### 예시

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

## Recover

`Recover` 메서드를 등록하면 모든 핸들러의 패닉 에러(panic errors)로부터 복구할 수 있습니다. [`Error()`](context#error)를 통해 에러 정보를 확인할 수 있습니다.

{% hint style="info" %}
기본적으로, `Recover`은 핸들러는 등록하지 않으면 사용할 수 없습니다.
{% endhint %}

#### 시그내처 (Signature)

```go
app.Recover(handler ...func(*Ctx))
```

#### 예시

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

특정 주소에서 연결을 바인딩하고 수신합니다. 포트의 경우에는 `int`, 주소의 경우에는 `string`이 될 수 있습니다.

#### 시그내처 (Signature)

```go
app.Listen(address interface{}, tls ...string)
```

#### 예시

```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```

**TLS/HTTPS**를 허용하기 위해 **cert**와 **key** 경로를 추가할 수 있습니다.

```go
app.Listen(443, "server.crt", "server.key")
```

## 설정

### Engine

**Fiber** 인스턴스를 통해서 **Fasthttp** 기본 [서버 설정](https://github.com/valyala/fasthttp/blob/master/server.go#L150)을 변경할 수 있습니다. 이 설정은 Listen 메서드 전에 설정해야 합니다. 

{% hint style="danger" %}
당신이 **무엇**을 하는지 아는 경우에만 이 설정을 변경하시기 바랍니다.
{% endhint %}

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

### Prefork

Prefork 옵션은  **DragonFly BSD**와 **Linux** \(커널 버전 **3.9** 이상\)를 포함한 여러 운영체제의 최신 버전에서 사용할 수 있는 [**SO\_REUSEPORT**](https://lwn.net/Articles/542629/) 소켓 옵션을 허용합니다. 이는 동일한 포트에서 수신하는 여러 개의 Go 프로세스를 생성합니다.

**NGINX**는 [Socket Sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/)에 관한 멋진 글을 제공합니다. 이 그림도 같은 글에서 가져왔습니다.

![Prefork가 허용되지 않았을 때 스키마 \(기본 상태\)](https://cdn.wp.nginx.com/wp-content/uploads/2015/05/Slack-for-iOS-Upload-1-e1432652484191.png)

![Prefork가 허용됐을 때 스키마](https://cdn.wp.nginx.com/wp-content/uploads/2015/05/Slack-for-iOS-Upload-e1432652376641.png)

`-prefork` 플래그를 추가하여 Prefork를 허용할 수 있습니다:

```bash
./server -prefork
```

또는 `Prefork` 옵션을 `true`로 설정하여 허용할 수 있습니다:

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

### Server

기본적으로 Fiber는 [서버 헤더(Server header)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server)를 보내지 않습니다. 그러나 server 값을 변경하여 이를 허용할 수 있습니다.

```go
app.Server = "Windows 95" // => Server: Windows 95
```

### Banner

Fiber 어플리케이션을 시작하면, 콘솔은 패키지 버전과 수신 포트를 포함한 배너를 출력하게 됩니다. _이는 기본적으로 허용되어 있습니다._

![](.gitbook/assets/screenshot-2020-02-08-at-13.18.27.png)

이를 허용하지 않기 위해서는 `Banner`를 `false`로 설정해야 합니다:

```go
app.Banner = false // Hide banner
```

## Test

어플리케이션 테스팅은 **Test** 메서드로 수행합니다.

{% hint style="info" %}
메서드는 대부분 `_test.go` 파일과 어플리케이션 디버깅에 이용됩니다.
{% endhint %}

#### 시그내처 (Signature)

```go
app.Test(req *http.Request) (*http.Response, error)
```

#### 예시

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
