---
description: 이 앱 인스턴스는 일반적으로 Fiber 어플리케이션을 나타냅니다.
---

# 🚀 Application

## New

이 메소드는 새로운 **App** 이라는 이름을 가진 인스턴스를 생성합니다.  
여러분은 선택적인 [settings](application.md#settings) 를 새 인스턴스를 생성할 때 넣을 수 있습니다.

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

여러분은 `New` 를 호출할 때 어플리케이션 설정을 넣어줄 수 있습니다.

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

또는 `app` 을 시작한 후 설정을 변경할 수 있습니다.

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

**설정** **항목들**

| 속성                        | 타입              | 설명                                                                                                                                                                                                    | 기본값               |
|:------------------------- |:--------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`          | [`SO_REUSEPORT`](https://lwn.net/Articles/542629/)소켓 옵션을 활성화합니다. 이는 같은 포트에서 요청 대기하는 여러 Go 프로세스들을 생성합니다. [socket sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/)에서 더 배워보세요. | `false`           |
| ServerHeader              | `string`        | `Server` HTTP 헤더를 주어진 값으로 활성화합니다.                                                                                                                                                                     | `""`              |
| StrictRouting             | `bool`          | 활성화되면, 라우터는 `/foo` 와 `/foo/` 를 다르게 취급합니다. 그렇지 않으면, 라우터는 `/foo` 와 `/foo/` 를 똑같게 취급합니다.                                                                                                                 | `false`           |
| CaseSensitive             | `bool`          | 활성화되면, `/Foo` 와 `/foo` 는 서로 다른 라우트입니다. 비활성화시, `/Foo` 와 `/foo` 는 같다고 취급됩니다.                                                                                                                            | `false`           |
| Immutable                 | `bool`          | 비활성화시, context 메소드들의 모든 반환값은 불변입니다. 기본적으로 그것들은 여러분이 핸들러에서 반환할 때 까지는 유효합니다, 이슈 [\#185](https://github.com/gofiber/fiber/issues/185) 를 보세요.                                                           | `false`           |
| BodyLimit                 | `int`           | Request body의 최대 허용 크기를 설정합니다, 만약 크기가 확인된 한계를 초과한다면, `413 - Request Entity Too Large` 응답을 보냅니다.                                                                                                       | `4 * 1024 * 1024` |
| Concurrency               | `int`           | 최대 동시 접속수.                                                                                                                                                                                            | `256 * 1024`      |
| DisableKeepalive          | `bool`          | Keep-alive 연결을 비활성화합니다, 서버는 첫 응답을 클라이언트에 전송 후 들어오는 연결을 끊습니다.                                                                                                                                          | `false`           |
| DisableDefaultDate        | `bool`          | true로 설정되면, 날짜 헤더 기본값이 응답에서 제외됩니다.                                                                                                                                                                    | `false`           |
| DisableDefaultContentType | `bool`          | true로 설정되면, Content-Type 헤더 기본값이 응답에서 제외됩니다.                                                                                                                                                          | `false`           |
| DisableStartupMessage     | `bool`          | true로 설정되면, fiber ASCII 와 "listening" 문구를 메시지로 출력하지 않습니다.                                                                                                                                             | `false`           |
| DisableHeaderNormalizing  | `bool`          | 기본적으로 모든 헤더 이름들은 노말라이즈됩니다: conteNT-tYPE -&gt; Content-Type                                                                                                                                      | `false`           |
| ETag                      | `bool`          | ETag 헤더 생성을 활성화 혹은 비활성화합니다, 약한 etag와 강한 etag 모두 같은 해시 함수인 \(CRC-32\) 를 사용해서 생성되기 때문입니다. 활성화시 약한 ETag들이 기본 값입니다.                                                                                     | `false`           |
| Templates                 | `Templates`     | Templates는 Render 함수를 래핑하는 인터페이스 입니다. 지원하는 엔진을 위해 [**Template Middleware**](middleware.md#template)를 확인하세요.                                                                                           | `nil`             |
| ReadTimeout               | `time.Duration` | 바디를 포함한 전체 요청을 읽는데 허용되는 시간의 양입니다. 기본값은 제한 없음 입니다.                                                                                                                                                     | `nil`             |
| WriteTimeout              | `time.Duration` | 응답을 작성하다 타임 아웃되기 전까지의 최대 시간입니다. 기본값은 제한 없음 입니다.                                                                                                                                                       | `nil`             |
| IdleTimeout               | `time.Duration` | keep-alive 활성화시 다음 요청을 기다리는 최대 시간. IdleTimeout이 0이면, ReadTimeout값이 사용됩니다.                                                                                                                             | `nil`             |

## Static

**이미지**, **CSS** 와 **자바스크립트** 같은 static 파일들을 제공하기 위해서 **Static** 메소드를 사용하세요.

{% hint style="info" %}
기본적으로, **Static** 은 `index.html` 파일을 디렉토리에 대한 요청에 응답하여 제공합니다.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => with prefix
```
{% endcode %}

`./public` 디렉토리의 파일들을 제공하려면 다음의 코드를 사용하세요

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

여러 디렉토리들을 제공하기 위해서, 여러분은 **Static**을 여러번 사용하는 것이 가능합니다.

{% code title="Example" %}
```go
// Serve files from "./public" directory:
app.Static("/", "./public")

// Serve files from "./files" directory:
app.Static("/", "./files")
```
{% endcode %}

{% hint style="info" %}
Static asset들을 제공하는 것의 성능을 높이기 위해 [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) 와 같은 reverse proxy cache를 사용하세요.
{% endhint %}

여러분은 제공되는 파일들을 위한 가상 경로의 접두사 \(_파일 시스템에 실재하지 않는 경로_\) 또한 **Static** 메소드를 통해 사용할 수 있습니다, 아래에 나타난 것과 같이 static 디렉토리의 접두사 경로를 명시하세요:

{% code title="Example" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

만약 여러분이 조금 더 static 파일들을 제공하는 것을 설정을 통해 제어하고 싶다면. 여러분은 `fiber.Static` 구조체를 통해 구체적인 설정을 활성화할 수 있습니다.

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

**METHOD** 가 요청의 [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) 인 HTTP 요청을 라우트합니다.

{% code title="Signatures" %}
```go
// HTTP methods support :param, :optional? and *wildcards
// You are required to pass a path to each method
app.All(path string, handlers ...func(*Ctx)) []*Route
app.Get
app.Put
app.Post
app.Head
app.Patch
app.Trace
app.Delete
app.Connect
app.Options

// Use() will only match the beggining of each path
// i.e. "/john" will match "/john/doe", "/johnnnn"
// Use() does not support :param & :optional? in path
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

`*Group` 구조체를 생성해 라우트를 그룹화할 수 있습니다.

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

특정 주소의 연결을 bind하고 listen합니다. 이것은 `int` 의 포트 또는 `string` 의 주소일 수 있습니다.

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

**TLS/HTTPS** 를 사용하기 위해서 여러분은 [**TLS config**](https://golang.org/pkg/crypto/tls/#Config) 를 덧붙일 수 있습니다.

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

여러분만의 [`net.Listener`](https://golang.org/pkg/net/#Listener) 를 `Serve` 메소드를 사용해 넣을 수 있습니다.

{% code title="Signature" %}
```go
app.Serve(ln net.Listener, tls ...*tls.Config) error
```
{% endcode %}

{% hint style="warning" %}
**Serve** does not support the **\*\*\[**Prefork\*\* \]\(application.md\#settings\)feature.
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

여러분의 어플리케이션을 테스트하는 것은 **Test** 메소드를 통해 진행됩니다. `_test.go` 파일들을 만들거나 여러분의 라우팅 로직을 디버그할 필요가 있을 때 이 메소드를 사용하세요. 기본 타임아웃은 `200ms` 이고 만약 여러분이 타임아웃을 완전히 비활성화하고 싶으면, 두 번째 인자로 `-1`을 넣으세요.

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
{% endcode %}

