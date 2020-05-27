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

import (
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

Session middleware – это реализация сессии; функция, которая позволяет Fiber поддерживать идентичность пользователя и хранить данные о пользователе во время нескольких взаимодействий запросов/ответа между браузером и Fiber. По умолчанию, middleware использует провайдер `memory` в качестве ключ-значения в хранилище сессии (key:value store). Однако, мы обеспечиваем поддержку дополнительных провайдеров сессий, таких как memcache, MySQL, Postgres, Redis и SQLite3.

**Установка**

```bash
go get -u github.com/gofiber/session
```

**Signature**

```go
session.New(config ...session.Config) *Session
```

**Конфигурация**

| Свойство   | Тип             | Описание                                                                                                                                                                                | По умолчанию          |
|:---------- |:--------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------------- |
| Lookup     | `string`        | Где искать идентификатор сессии `<source>:<name>`, возможные значения: `cookie:key`, `header:key` или `query:key`                                                           | `"cookie:session_id"` |
| Domain     | `string`        | Cookie domain                                                                                                                                                                           | `""`                  |
| Expiration | `time.Duration` | Session expiration time, possible values: `0` means no expiry \(24 years\), `-1` means when the browser closes, `>0` is the time.Duration which the session cookies should expire. | `12 * time.Hour`      |
| Secure     | `bool`          | Если куки должны быть отправлены только по HTTPS                                                                                                                                        | `false`               |
| Provider   | `Provider`      | Содержит интерфейс провайдера                                                                                                                                                           | `memory.Provider`     |
| Generator  | `func() []byte` | Генератор — это функция, которая генерирует уникальный id                                                                                                                               | `uuid`                |
| GCInterval | `time.Duration` | Интервал для сборщика мусора                                                                                                                                                            | `uuid`                |

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

This middleware package contains `8 template engines` that can be used with [Fiber v1.10.0](https://github.com/gofiber/fiber) using Go version `1.13` or higher is required.

**Установка**

```bash
go get -u github.com/gofiber/template
```

**Signature**

```go
<engine>.New(directory, extension string, funcmap ...map[string]interface{}) *Engine
```

**Шаблонизаторы**

| Engines      | Repo                                                                           |
|:------------ |:------------------------------------------------------------------------------ |
| `ace`        | [https://github.com/yosssi/ace](https://github.com/yosssi/ace)                 |
| `amber`      | [https://github.com/eknkc/amber](https://github.com/eknkc/amber)               |
| `django`     | [https://github.com/flosch/pongo2](https://github.com/flosch/pongo2)           |
| `handlebars` | [https://github.com/aymerick/raymond](https://github.com/aymerick/raymond)     |
| `jet`        | [https://github.com/CloudyKit/jet](https://github.com/CloudyKit/jet)           |
| `mustache`   | [https://github.com/cbroglie/mustache](https://github.com/cbroglie/mustache)   |
| `pug`        | [https://github.com/Joker/jade](https://github.com/Joker/jade)                 |
| `html`       | [https://golang.org/pkg/html/template/](https://golang.org/pkg/html/template/) |

**Пример**

```go
package main

import (
    "github.com/gofiber/fiber"

    // "github.com/gofiber/template/ace"
    // "github.com/gofiber/template/amber"
    // "github.com/gofiber/template/django"
    // "github.com/gofiber/template/handlebars"
  // "github.com/gofiber/template/jet"
    // "github.com/gofiber/template/mustache"
    // "github.com/gofiber/template/pug"
    "github.com/gofiber/template/html"
)

func main() {
    app := fiber.New()

    // app.Settings.Templates = ace.New("./views", ".ace")
    // app.Settings.Templates = amber.New("./views", ".amber")
    // app.Settings.Templates = django.New("./views", ".django")
    // app.Settings.Templates = handlebars.New("./views", ".hbs")
  // app.Settings.Templates = jet.New("./views", ".jet")
    // app.Settings.Templates = mustache.New("./views", ".mustache")
    // app.Settings.Templates = pug.New("./views", ".pug")
    app.Settings.Templates = html.New("./views", ".html")

    app.Get("/", func(c *fiber.Ctx) {
        c.Render("index", fiber.Map{
            "Title": "Hello, World!",
        })
    })

    app.Listen(3000)
}
```

## WebSocket

Fiber поддерживает обновление websocket через middleware. Структура `*Conn` имеет всю функциональность из библиотеки [**gorilla/websocket**](https://github.com/gorilla/websocket).

**Установка**

```bash
go get -u github.com/gofiber/websocket
```

**Signature**

```go
websocket.New(handler func(*Conn), config ...Config) func(*Ctx)
```

**Конфигурация**

| Свойство          | Тип             | Описание                                                                                                                                                                                                              | По умолчанию    |
|:----------------- |:--------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------- |
| HandshakeTimeout  | `time.Duration` | Определяет продолжительность handshake.                                                                                                                                                                               | `0`             |
| Subprotocols      | `[]string`      | Определяет протоколы, поддерживаемые сервером в порядке предпочтений. Если это поле не пустое, то метод Upgrade согласовывает подпротокол, выбрав первое совпадение в этом списке с протоколом, запрошенным клиентом. | `nil`           |
| Origins           | `[]string`      | Origins — это фрагмент строк, которые являются приемлемыми. По умолчанию допускаются все исходные тексты.                                                                                                             | `[]string{"*"}` |
| ReadBufferSize    | `int`           | ReadBufferSize задает размер буфера ввода-вывода (I/O) для чтения в байтах.                                                                                                                                           | `1024`          |
| WriteBufferSize   | `int`           | WriteBufferSize задает размер буфера ввода-вывода (I/O) для записи в байтах.                                                                                                                                          | `1024`          |
| EnableCompression | `bool`          | Включите, если сервер должен попытаться сообщить о сжатии сообщений \(RFC 7692\)                                                                                                                                    | `false`         |

**Пример**

```go
package main

import (
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

Request ID добавляет идентификатор к запросу, используя заголовок `X-Request-ID`

**Установка**

```bash
go get -u github.com/gofiber/requestid
```

**Signature**

```go
go get -u github.com/gofiber/requestid
```

**Конфигурация**

| Свойство  | Тип                       | Описание                                          | По умолчанию                 |
|:--------- |:------------------------- |:------------------------------------------------- |:---------------------------- |
| Filter    | `func(*fiber.Ctx) bool`   | Определяет функцию для пропуска (skip) middleware | `nil`                        |
| Generator | `func(*fiber.Ctx) string` | Определяет функцию для генерации ID.              | `return uuid.New().String()` |

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

Helmet middleware обеспечивает защиту от межсайтовых сценариев \(XSS\) атаки, типа sniffing контента, clickjacking, небезопасного подключения и других атак со вставкой кода.

**Установка**

```bash
go get -u github.com/gofiber/helmet
```

**Signature**

```go
helmet.New(config ...Config) func(*Ctx)
```

**Конфигурация**

| Свойство              | Тип                     | Описание                                                                                                                                                                                                                                                                                                                           | По умолчанию      |
|:--------------------- |:----------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Filter                | `func(*fiber.Ctx) bool` | Определяет функцию для пропуска (skip) middleware                                                                                                                                                                                                                                                                                  | `nil`             |
| XSSProtection         | `string`                | Обеспечивает защиту от атаки на межсайтовый скриптинг \(XSS\) путем установки заголовка `X-XSS-Protection`.                                                                                                                                                                                                                      | `"1; mode=block"` |
| ContentTypeNosniff    | `string`                | Обеспечивает защиту от переопределения заголовка Content-Type путем установки заголовка `X-Content-Type-Options`.                                                                                                                                                                                                                  | `"nosniff"`       |
| XFrameOptions         | `string`                | Может использоваться для указания того, должен ли браузер отображать страницу во `frame`, `iframe` или `object`. Сайты могут использовать это для того, чтобы избежать clickjacking, когда их содержимое было встроено в другие сайты. Обеспечивает защиту от clickjacking. Возможные значения: `SAMEORIGIN, DENY, ALLOW-FROM uri` | `"SAMEORIGIN"`    |
| HSTSMaxAge            | `int`                   | HSTSMaxAge устанавливает заголовок `Strict-Transport-Security`, указывающий, сколько времени браузеры \(в секундах\) должны помнить, что этот сайт доступен только через HTTPS. Это уменьшает вашу подверженность некоторым атакам SSL-stripping man-in-the-middle \(MITM\).                                                   | `0`               |
| HSTSExcludeSubdomains | `bool`                  | HSTSExcludeSubdomains не содержат тег субдоменов в заголовке `Strict Transport Security`, исключая все субдомены из политики безопасности. Не имеет эффекта, если у HSTSMaxAge не задано нулевое значение.                                                                                                                         | `false`           |
| ContentSecurityPolicy | `string`                | Устанавливает заголовок `Content-Security-Policy`, обеспечивающий безопасность от межсайтовых скриптов \(XSS\), clickjacking и другие атаки на инъекции кода в результате выполнения вредоносного содержимого в контексте доверенных веб-страниц                                                                                 | `""`              |
| CSPReportOnly         | `bool`                  |                                                                                                                                                                                                                                                                                                                                    | `false`           |
| HSTSPreloadEnabled    | `bool`                  |                                                                                                                                                                                                                                                                                                                                    | `false`           |
| ReferrerPolicy        | `string`                |                                                                                                                                                                                                                                                                                                                                    | `""`              |

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

Redirect middleware обеспечивает HTTP-переадресацию на URL, полученную по указанному пути, с указанным статусом, положительным целым числом, которое соответствует коду HTTP-статуса.

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

