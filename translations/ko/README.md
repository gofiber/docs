---
description: Fiber를 이용해 웹 어플리케이션 구축을 시작할 수 있는 호스트 문서

---

# 📖  시작하기

[![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases) [![](https://img.shields.io/badge/api-documentation-blue?style=flat-square)](https://fiber.wiki) ![](https://img.shields.io/badge/goreport-A%2B-brightgreen?style=flat-square) [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber) [![](https://img.shields.io/travis/gofiber/fiber/master.svg?label=linux&style=flat-square)](https://travis-ci.org/gofiber/fiber) [![](https://img.shields.io/travis/gofiber/fiber/master.svg?label=windows&style=flat-square)](https://travis-ci.org/gofiber/fiber)

**Fiber**는 [Expressjs](https://github.com/expressjs/express)에서 영감을 받아 [Go](https://golang.org/doc/)를 위한 **가장 빠른** HTTP 엔진인 [Fasthttp](https://github.com/valyala/fasthttp)을 바탕으로 만들어진 **웹 프레임워크** 입니다. **비 메모리 할당**과 **성능**을 고려한 **빠른** 개발을 위해서 **쉽게** 사용할 수 있도록 설계하였습니다.

## 설치하기

먼저, Go를 [다운로드](https://golang.org/dl/)하고 설치합니다.

{% hint style="success" %}
\(사용 가능한 [Go Modules](https://golang.org/doc/go1.11#modules)과 함께) Go **1.11** 버전 이상이 필요합니다.
{% endhint %}

[`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) 명령어를 이용해 설치가 완료됩니다:

```bash
go get -u github.com/gofiber/fiber
```

## Hello, World!

아래는 가장 기본적이고 간단한 **Fiber** app을 만들 수 있는 코드입니다.

```text
touch server.go
```

```go
package main

import "github.com/gofiber/fiber"

func main() {
  // Create new Fiber instance:
  app := fiber.New()

  // Create route on root path, "/":
  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Hello, World!")
    // => "Hello, World!"
  })

  // Start server on "localhost" with port "8080":
  app.Listen(8080)
}
```

```text
go run server.go
```

`http://localhost:8080`에 접속하면 웹페이지에서 `Hello, World!` 가 출력된 것을 볼 수 있습니다.

## 기본 라우팅

라우팅은 어플리케이션이 특정 endpoint에 대한 클라이언트의 요청에 응답하는 방법을 결정하는 것입니다. 클라이언트의 요청은 URI (또는 path)와 특정 HTTP 요청 메서드 (GET, PUT, POST 등)으로 구성됩니다.

{% hint style="info" %}
각각의 라우트는 라우트가 일치할 때 실행되는 **1개의 핸들러 함수**를 가질 수 있습니다.
{% endhint %}

라우트는 다음과 같은 구조로 정의되어 있습니다.

```go
// Function signature
app.Method(func(*fiber.Ctx))
app.Method(path string, func(*fiber.Ctx))
```

* `app` 는 **Fiber**의 인스턴스입니다.
* `Method` 는 대문자로 시작하며,  `Get`, `Put`, `Post` 등의 [HTTP request method](https://fiber.wiki/application#methods) 입니다.
* `path` 는 서버에서의 path입니다.
* `func(*fiber.Ctx)` 는 라우트가 일치할 때 실행되는 [Context](https://fiber.wiki/context)를 포함하는 콜백 함수입니다.

### 간단한 라우팅

```go
// Respond with "Hello, World!" on root path, "/":
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

### 파라미터가 있는 라우팅

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Get request with value: " + c.Params("value"))
  // => Get request with value: hello world
})
```

### 선택적인 파라미터(optional parameter)가 있는 라우팅

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value?", func(c *fiber.Ctx) {
  if c.Params("value") != "" {
    c.Send("Get request with value: " + c.Params("Value"))
    // => Get request with value: hello world
    return
  }

  c.Send("Get request without value")
})
```

### 임의의 문자(wildcard)가 있는 라우팅

```go
// GET http://localhost:8080/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path with wildcard: " + c.Params("*"))
  // => API path with wildcard: user/john
})
```

## 정적 파일

**이미지**, **CSS**, 그리고 **JavaScript** 파일과 같은 정적 파일을 사용하려면 파일이나 디렉토리 문자열로 함수 핸들러를 바꿔야 합니다.  

함수 시그내처:

```go
app.Static(root string)         // => without prefix
app.Static(prefix, root string) // => with prefix
```

`./public` 디렉토리 안의 파일을 사용하려면 아래의 코드를 사용합니다:

```go
app := fiber.New()

app.Static("./public") // => Serve all files into ./public

app.Listen(8080)
```

이제 `./public` 디렉토리 안의 파일을 불러올 수 있습니다:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```



