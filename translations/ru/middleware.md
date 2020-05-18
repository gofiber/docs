---
description: >-
  Middleware — это функция, привязанная к циклу HTTP-запросов, с доступом к контексту, который используется для выполнения конкретного действия. Например, ведение журнала каждого запроса или включение CORS.
---

# 🧬 Middleware

## Basic Auth

Basic auth middleware обеспечивает базовую HTTP-аутентификацию. Он вызывает обработчик для правильных учетных данных и `401 Unauthorized` для отсутствующих или недействительных учетных данных.

**Установка**

```bash
go get -u github.com/gofiber/basicauth
```

**Signature**

```go
basicauth.New(config ...Config) func(*fiber.Ctx)
```

**Конфигурация**

| Свойство     | Тип                         | Описание                                                                          | По умолчанию   |
|:------------ |:--------------------------- |:--------------------------------------------------------------------------------- |:-------------- |
| Filter       | `func(*fiber.Ctx) bool`     | Определяет функцию для пропуска (skip) middleware                                 | `nil`          |
| Users        | `map[string][string]`       | Определяет допустимые учетные данные                                              | `nil`          |
| Realm        | `string`                    | Realm — это строка для определения атрибута области                               | `"Restricted"` |
| Authorizer   | `func(string, string) bool` | Функция, которую вы можете передать для проверки учетных данных, если необходимо. | `nil`          |
| Unauthorized | `func(*fiber.Ctx)`          | Пользовательское тело ответа для несанкционированных ответов                      | `nil`          |

**Пример**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/basicauth"
)

func main() {
  app := fiber.New()

  cfg := basicauth.Config{
    Users: map[string]string{
      "john":   "doe",
      "admin":  "123456",
    },
  }
  app.Use(basicauth.New(cfg))

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welcome!")
  })

  app.Listen(3000)
}
```

## CORS

CORS middleware реализует спецификацию CORS. CORS предоставляет веб серверы междоменного доступа, которые позволяют осуществлять безопасную междоменную передачу данных.

**Установка**

```bash
go get -u github.com/gofiber/cors
```

**Signature**

```go
cors.New(config ...Config) func(*fiber.Ctx)
```

**Конфигурация**

| Свойство         | Тип               | Описание                                                                                                                                                                                                               | По умолчанию                                                |
|:---------------- |:----------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------------------------------------------------- |
| Filter           | `func(*Ctx) bool` | Определяет функцию для пропуска (skip) middleware                                                                                                                                                                      | `nil`                                                       |
| AllowOrigins     | `[]string`        | AllowOrigin определяет список источников, которые могут получить доступ к ресурсу.                                                                                                                                     | `[]string{"*"}`                                             |
| AllowMethods     | `[]string`        | Определяет список методов, разрешенных при доступе к ресурсу. Используется в ответ на предполетный запрос.                                                                                                             | `[]string{"GET", "POST", "HEAD", "PUT", "DELETE", "PATCH"}` |
| AllowCredentials | `bool`            | Указывает, могут ли отображаться ответы на запрос, когда true. При использовании в качестве части ответа на предполетный запрос — это означает, что реальный запрос может быть сделан с использованием учетных данных. | `false`                                                     |
| ExposeHeaders    | `[]string`        | Определяют заголовки белого списка, к которым клиент имеет доступ.                                                                                                                                                     | `[]string{}`                                                |
| MaxAge           | `int`             | Показывает время кэширования результатов запроса preflight \(в секундах\).                                                                                                                                           | `0`                                                         |

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/cors"
)

func main() {
  app := fiber.New()

  app.Use(cors.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welcome!")
  })

  app.Listen(3000)
  // curl -H "Origin: http://example.com" --verbose http://localhost:3000
}
```

## Compression

Этот middleware позволяет использовать динамическое сжатие для gzip и deflate, если ответ сервера больше 4 Кб. Если вы хотите включить сжатие только для статических файлов, то, пожалуйста, используйте параметр [**Compression**](application.md#static) внутри метода [**Static**](application.md#static).

**Установка**

```bash
go get -u github.com/gofiber/compression
```

**Signature**

```go
compression.New(config ...Config) func(*fiber.Ctx)
```

**Config**

| Свойство | Тип               | Описание                                          | По умолчанию |
|:-------- |:----------------- |:------------------------------------------------- |:------------ |
| Filter   | `func(*Ctx) bool` | Определяет функцию для пропуска (skip) middleware | `nil`        |
| Level    | `int`             | Уровень сжатия `0`, `1`, `2`, `3`, `4`            | `0`          |

```go
package main

import 
  "github.com/gofiber/fiber"
  "github.com/gofiber/compression"
)

func main() {
  app := fiber.New()

  app.Use(compression.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welcome!")
  })

  app.Listen(3000)
}
```

## Limiter

Используйте для ограничения повторных запросов публичных API и/или конечных точек, таких как сброс пароля. Этот middleware не делится состоянием с другими процессами/серверами.

**Установка**

```bash
go get -u github.com/gofiber/limiter
```

**Signature**

```go
limiter.New(config ...Config) func(*Ctx)
```

**Конфигурация**

| Свойство   | Тип                     | Описание                                                                                           | По умолчанию                                   |
|:---------- |:----------------------- |:-------------------------------------------------------------------------------------------------- |:---------------------------------------------- |
| Filter     | `func(*fiber.Ctx) bool` | Определяет функцию для пропуска (skip) middleware                                                  | `nil`                                          |
| Timeout    | `int`                   | Таймаут в секундах по времени хранения записей запросов в памяти                                   | `60`                                           |
| Max        | `int`                   | Максимальное количество последних соединений в течение `Timeout` секунд перед отправкой 429 ответа | `10`                                           |
| Message    | `string`                | Тело ответа                                                                                        | `"Too many requests, please try again later."` |
| StatusCode | `int`                   | Код статуса ответа                                                                                 | `429`                                          |
| Key        | `func(*Ctx) string`     | Функция, которая позволяет создавать пользовательские ключи. По умолчанию используется `c.IP()`.   | `nil`                                          |
| Handler    | `func(*Ctx)`            | Обработчик вызывается при достижении лимита запроса                                                | `nil`                                          |

**Пример**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/limiter"
)

func main() {
  app := fiber.New()

  // 3 requests per 10 seconds max
  cfg := limiter.Config{
    Timeout: 10,
    Max: 3,
  }

  app.Use(limiter.New(cfg))

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welcome!")
  })

  app.Listen(3000)
}
```

## Logger

Logger middleware записывает информацию о каждом HTTP-запросе.

**Установка**

```bash
go get -u github.com/gofiber/logger
```

**Signature**

```go
logger.new(config ...Config) func(*Ctx)
```

**Конфигурация**

| Свойство   | Тип                     | Описание                                                                                                                                                    | По умолчанию                                       |
|:---------- |:----------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------- |:-------------------------------------------------- |
| Filter     | `func(*fiber.Ctx) bool` | Определяет функцию для пропуска (skip) middleware                                                                                                           | `nil`                                              |
| Format     | `string`                | Возможные значения: `time, ip, url, host, method, path, protocol, referer, ua, header:<key>, query:<key>, form:<key>, cookie:<key>` | `"${time} - ${ip} - ${method} ${path}\t${ua}\n"` |
| TimeFormat | `string`                | Подробнее про TimeFormat: [читайте тут](https://programming.guide/go/format-parse-string-time-date-example.html)                                            | `15:04:05`                                         |
| Output     | `io.Writer`             | Это writer, в который записываются логи                                                                                                                     | `os.Stderr`                                        |

**Пример**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/logger"
)

func main() {
  app := fiber.New()

  app.Use(logger.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welcome!")
  })

  app.Listen(3000)
}
```

## Recover

Вы можете восстановить работу Fiber приложения после ошибки, приведшей к вызову panic(), в любом маршруте. По умолчанию, middleware Recover ответит на `500 Internal Server Error`, когда возникнет panic(). Вы, также, можете указать свой собственный обработчик ошибок.

**Установка**

```bash
go get -u github.com/gofiber/recover
```

**Signature**

```go
recover.New(config ...Config) func(*Ctx)
```

**Пример**

```go
package main

import (
    "github.com/gofiber/fiber"
    "github.com/gofiber/recover"
)

func main() {
    app := fiber.New()

  // Optional
    cfg := recover.Config{
        Handler: func(c *fiber.Ctx, err error) {
            c.SendString(err.Error())
            c.SendStatus(500)
        },
    }

    app.Use(recover.New(cfg))

    app.Get("/", func(c *fiber.Ctx) {
        panic("Hi, I'm a error!")
    })

    app.Listen(3000)
}
```

## Session

The session middleware is a session implementation; a feature that allows Fiber to maintain user identity and to store user-specific data during multiple request/response interactions between a browser and Fiber. По умолчанию, middleware использует провайдер `memory` в качестве ключ-значения в хранилище сессии (key:value store). Однако, мы обеспечиваем поддержку дополнительных провайдеров сессий, таких как memcache, MySQL, Postgres, Redis и SQLite3.

**Установка**

```bash
go get -u github.com/gofiber/session
```

**Signature**

```go
session.New(config ...session.Config) *Session
```

**Конфигурация**

| Свойство   | Тип             | Описание                                                                                                                                                                            | По умолчанию          |
|:---------- |:--------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------------- |
| Lookup     | `string`        | Where to look for the session id `<source>:<name>`, possible values: `cookie:key`, `header:key` or `query:key`                                                          | `"cookie:session_id"` |
| Domain     | `string`        | Cookie domain                                                                                                                                                                       | `""`                  |
| Expiration | `time.Duration` | Session expiration time, possible values: `0` means no expiry (24 years), `-1` means when the browser closes, `>0` is the time.Duration which the session cookies should expire. | `12 * time.Hour`      |
| Secure     | `bool`          | If the cookie should only be send over HTTPS                                                                                                                                        | `false`               |
| Provider   | `Provider`      | Holds the provider interface                                                                                                                                                        | `memory.Provider`     |
| Generator  | `func() []byte` | Generator is a function that generates an unique id                                                                                                                                 | `uuid`                |
| GCInterval | `time.Duration` | Interval for the garbage collector                                                                                                                                                  | `uuid`                |

**Пример**

```go
package main

import (
  "fmt"

  "github.com/gofiber/fiber"
  "github.com/gofiber/session"
)

func main() {
  app := fiber.New()

  // create session handler
  sessions := session.New()

  app.Get("/", func(c *fiber.Ctx) {
    store := sessions.Get(c)    // get/create new session
    defer store.Save()

    store.ID()                   // returns session id
    store.Destroy()              // delete storage + cookie
    store.Get("john")            // get from storage
    store.Regenerate()           // generate new session id
    store.Delete("john")         // delete from storage
    store.Set("john", "doe")     // save to storage
  })

  app.Listen(3000)
}
```

## Template

By default Fiber comes with the [**default HTML template**](https://golang.org/pkg/html/template/) engine, but this middleware contains third party rendering engines.

**Установка**

```bash
go get -u github.com/gofiber/template
```

**Signature**

```go
template.Engine() func(raw string, bind interface{}) (out string, err error)
```

**Template Engines**

| Keyword        | Engine                                                               |
|:-------------- |:-------------------------------------------------------------------- |
| `Amber()`      | [github.com/eknkc/amber](https://github.com/eknkc/amber)             |
| `Handlebars()` | [github.com/aymerick/raymond](https://github.com/aymerick/raymond)   |
| `Mustache()`   | [github.com/cbroglie/mustache](https://github.com/cbroglie/mustache) |
| `Pug()`        | [github.com/Joker/jade](https://github.com/Joker/jade)               |

**Пример**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/template"
)

func main() {
  app := fiber.New()

  app.Settings.TemplateEngine = template.Mustache()
  // app.Settings.TemplateEngine = template.Amber()
  // app.Settings.TemplateEngine = template.Handlebars()
  // app.Settings.TemplateEngine = template.Pug()

  app.Get("/", func(c *fiber.Ctx) {
    bind := fiber.Map{
      "name": "John",
      "age":  35,
    }
    if err := c.Render("./views/index.mustache", bind); err != nil {
      c.Status(500).Send(err.Error())
    }
    // <html><head><title>Template Demo</title></head>
    // <body>Hi, my name is John and im 35 years old
    // </body></html>
  })

  app.Listen(3000)
}
```

## WebSocket

Fiber supports a websocket upgrade middleware. The `*Conn` struct has all the functionality from the [**gorilla/websocket**](https://github.com/gorilla/websocket) library.

**Установка**

```bash
go get -u github.com/gofiber/websocket
```

**Signature**

```go
websocket.New(handler func(*Conn), config ...Config) func(*Ctx)
```

**Конфигурация**

| Свойство          | Тип             | Описание                                                                                                                                                                                                                         | По умолчанию    |
|:----------------- |:--------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------- |
| HandshakeTimeout  | `time.Duration` | Specifies the duration for the handshake to complete.                                                                                                                                                                            | `0`             |
| Subprotocols      | `[]string`      | specifies the server's supported protocols in order of preference. If this field is not nil, then the Upgrade method negotiates a subprotocol by selecting the first match in this list with a protocol requested by the client. | `nil`           |
| Origins           | `[]string`      | Origins is a string slice of origins that are acceptable, by default all origins are allowed.                                                                                                                                    | `[]string{"*"}` |
| ReadBufferSize    | `int`           | ReadBufferSize specify I/O buffer sizes in bytes.                                                                                                                                                                                | `1024`          |
| WriteBufferSize   | `int`           | WriteBufferSize specify I/O buffer sizes in bytes.                                                                                                                                                                               | `1024`          |
| EnableCompression | `bool`          | EnableCompression specify if the server should attempt to negotiate per message compression \(RFC 7692\)                                                                                                                       | `false`         |

**Пример**

```go
package main

import 
  "github.com/gofiber/fiber"
  "github.com/gofiber/websocket"
)

func main() {
  app := fiber.New()

  app.Use(func(c *fiber.Ctx) {
    c.Locals("Hello", "World")
    c.Next()
  })

  app.Get("/ws", websocket.New(func(c *websocket.Conn) {
    fmt.Println(c.Locals("Hello")) // "World"
    // Websocket logic...
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
  }))

  app.Listen(3000) // ws://localhost:3000/ws
}
```

## Request ID

Request ID adds an identifier to the request using the `X-Request-ID` header

**Установка**

```bash
go get -u github.com/gofiber/requestid
```

**Signature**

```go
requestid.New(config ...Config) func(*Ctx)
```

**Конфигурация**

| Свойство  | Тип                       | Описание                                          | По умолчанию                 |
|:--------- |:------------------------- |:------------------------------------------------- |:---------------------------- |
| Filter    | `func(*fiber.Ctx) bool`   | Определяет функцию для пропуска (skip) middleware | `nil`                        |
| Generator | `func(*fiber.Ctx) string` | Generator defines a function to generate an ID.   | `return uuid.New().String()` |

**Пример**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/requestid"
)

func main() {
  app := fiber.New()

  app.Use(requestid.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send(requestid.Get(c))
  })

  app.Listen(3000)
}
```

## Helmet

Helmet middleware provides protection against cross-site scripting \(XSS\) attack, content type sniffing, clickjacking, insecure connection and other code injection attacks.

**Установка**

```bash
go get -u github.com/gofiber/helmet
```

**Signature**

```go
helmet.New(config ...Config) func(*Ctx)
```

**Конфигурация**

| Свойство              | Тип                     | Описание                                                                                                                                                                                                                                                                                                                       | По умолчанию     |
|:--------------------- |:----------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:---------------- |
| Filter                | `func(*fiber.Ctx) bool` | Определяет функцию для пропуска (skip) middleware                                                                                                                                                                                                                                                                              | `nil`            |
| XSSProtection         | `string`                | XSSProtection provides protection against cross-site scripting attack \(XSS\) by setting the `X-XSS-Protection` header.                                                                                                                                                                                                      | `1; mode=block"` |
| ContentTypeNosniff    | `string`                | ContentTypeNosniff provides protection against overriding Content-Type header by setting the `X-Content-Type-Options` header.                                                                                                                                                                                                  | `"nosniff"`      |
| XFrameOptions         | `string`                | XFrameOptions can be used to indicate whether or not a browser should be allowed to render a page in a ,  or . Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites.provides protection against clickjacking. Possible values: `SAMEORIGIN, DENY, ALLOW-FROM uri` | `"SAMEORIGIN"`   |
| HSTSMaxAge            | `int`                   | HSTSMaxAge sets the `Strict-Transport-Security` header to indicate how long \(in seconds\) browsers should remember that this site is only to be accessed using HTTPS. This reduces your exposure to some SSL-stripping man-in-the-middle \(MITM\) attacks.                                                                | `0`              |
| HSTSExcludeSubdomains | `bool`                  | HSTSExcludeSubdomains won't include subdomains tag in the `Strict Transport Security` header, excluding all subdomains from security policy. It has no effect unless HSTSMaxAge is set to a non-zero value.                                                                                                                    | `false`          |
| ContentSecurityPolicy | `string`                | ContentSecurityPolicy sets the `Content-Security-Policy` header providing security against cross-site scripting \(XSS\), clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context                                                                         | `""`             |
| CSPReportOnly         | `bool`                  |                                                                                                                                                                                                                                                                                                                                | `false`          |
| HSTSPreloadEnabled    | `bool`                  |                                                                                                                                                                                                                                                                                                                                | `false`          |
| ReferrerPolicy        | `string`                |                                                                                                                                                                                                                                                                                                                                | `""`             |

**Пример**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/helmet"
)

func main() {
  app := fiber.New()

  app.Use(helmet.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welcome!")
  })

  app.Listen(3000)
  // curl -I http://localhost:3000
}
```

## Redirect

Redirects middleware provides an HTTP redirect to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code.

**Installation**

```bash
go get -u github.com/gofiber/redirect
```

**Signature**

```go
redirect.New(config ...Config) func(*Ctx)
```

**Пример**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/redirect"
)

func main() {
  app := fiber.New()

  app.Use(redirect.New(redirect.Config{
    Rules: map[string]string{
      "/old":   "/new",
      "/old/*": "/new/$1",
    },
    StatusCode: 301,
  }))

  app.Get("/new", func(c *fiber.Ctx) {
    c.Send("Hello, World!")
  })
  app.Get("/new/*", func(c *fiber.Ctx) {
    c.Send("Wildcard: ", c.Params("*"))
  })

  app.Listen(3000)
}
```

