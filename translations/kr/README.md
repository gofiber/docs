---
description: 여러분이 Fiber로 웹앱 만들기를 시작할 수 있는 API 문서입니다.
---

# 📖 시작하기

 [![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases)  [![](https://img.shields.io/badge/go.dev-007d9c?logo=go&logoColor=white&style=flat-square)](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc)   [![](https://goreportcard.com/badge/github.com/gofiber/fiber?style=flat-square)](https://goreportcard.com/report/github.com/gofiber/fiber)  [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Test?label=tests&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3ATest)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Gosec?label=gosec&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3AGosec)

**Fiber**는 [Express](https://github.com/expressjs/express)에서 영감을 받고, [Go](https://golang.org/doc/)를 위한 가장 빠른 HTTP 엔진인 [Fasthttp](https://github.com/valyala/fasthttp)를 토대로 만들어진 **웹 프레임워크** 입니다. **비 메모리 할당**과 **성능**을 고려한 **빠른** 개발을 위해 **손쉽게** 사용되도록 설계되었습니다.

## Installation

우선, Go를 [다운로드](https://golang.org/dl/)하고 설치합니다. `1.11` 버전 이상이 요구됩니다.

[`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) 명령어를 이용해 설치가 완료됩니다.

```bash
go get -u github.com/gofiber/fiber
```

## Hello, World!

아래의 코드는 여러분이 만들 수 있는 가장 간단하고 기본적인 **Fiber** 앱입니다.

```go
package main

import "github.com/gofiber/fiber"

func main() {
  app := fiber.New()

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Hello, World!")
  })

  app.Listen(3000)
}
```

```text
go run server.go
```

`http://localhost:3000` 에 접속해보면 화면에 `Hello, World!` 가 보일 것 입니다.

## Basic routing

라우팅은 어플리케이션이 URI \(또는 경로\) 와 구체적인 HTTP 요청 메소드 \(GET, PUT, POST 등\) 인 특정 엔드포인트의 클라이언트 요청에 대해 어떻게 응답할 것 인지를 결정하는 것을 나타냅니다.

{% hint style="info" %}
각 라우트는 라우트가 매치될 때 실행되는 **여러 핸들러 함수들**을 가질 수 있습니다.
{% endhint %}

라우트 정의는 다음의 구조를 가집니다:

```go
// Function signature
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` 은 **Fiber**의 인스턴스 입니다.
* `Method` 는 첫 글자가 대문자인 [HTTP request method](https://fiber.wiki/application#methods) 입니다: `Get`, `Put`, `Post` 등.
* `path` 는 서버의 가상 경로입니다.
* `func(*fiber.Ctx)` 는 라우트가 매치될 때 실행된 [Context](https://fiber.wiki/context) 를 가지고 있는 콜백 함수입니다.

**Simple route**

```go
// Respond with "Hello, World!" on root path, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

**Parameters**

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Get request with value: " + c.Params("value"))
  // => Get request with value: hello world
})
```

**Optional parameter**

```go
// GET http://localhost:3000/john

app.Get("/:name?", func(c *fiber.Ctx) {
  if c.Params("name") != "" {
    c.Send("Hello " + c.Params("name"))
    // => Hello john
  } else {
    c.Send("Where is john?")
  }
})
```

**Wildcards**

```go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path: " + c.Params("*"))
  // => API path: user/john
})
```

## Static files

**이미지**, **CSS** 와 **자바스크립트** 파일들과 같은 static file들을 제공하기 위해서, 여러분의 함수 핸들러를 파일 또는 디렉토리 문자열로 대체하세요.

Function signature:

```go
app.Static(prefix, root string)
```

`./public` 디렉토리의 파일들을 제공하려면 다음의 코드를 사용하세요:

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

이제, 여러분은 `./public` 디렉토리의 파일들을 로드할 수 있습니다:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

