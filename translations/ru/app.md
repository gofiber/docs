---
description: Инстанс приложения, обычно, обозначает Fiber приложение.
---

# 🚀 Приложение

## New

Этот метод создает новый экземпляр **Приложения**. Вы можете указать дополнительные [настройки](app.md#settings) при создании нового экземпляра

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

Вы можете передать настройки приложения при вызове метода `New`.

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

Или измените настройки после инициализации `приложения`.

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

**Настройки** **полей**

| Свойство                  | Тип             | Описание                                                                                                                                                                                                                                                                      | По умолчанию      |
|:------------------------- |:--------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`          | Позволяет использовать опцию сокета[`SO_REUSEPORT`](https://lwn.net/Articles/542629/). Это приведет к появлению нескольких Go процессов прослушивания на одном порту. узнайте больше о [сокетах в шардинге](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false`           |
| ServerHeader              | `string`        | Включает HTTP-заголовок `Server` с заданным значением.                                                                                                                                                                                                                        | `""`              |
| StrictRouting             | `bool`          | Если этот параметр включен, маршрутизатор обрабатывает `/foo` и `/foo/`, как разные маршруты. В противном случае, маршрутизатор обрабатывает `/foo` и `/foo/`, как одинаковые маршруты.                                                                                       | `false`           |
| CaseSensitive             | `bool`          | Если включено, `/Foo` и `/foo` являются разными маршрутами. Когда отключено, `/Foo` и `/foo` обрабатываются одинаково.                                                                                                                                                        | `false`           |
| Immutable                 | `bool`          | Когда включено, все значения, возвращаемые методами контекста, не изменяются. По умолчанию они действительны до тех пор, пока вы не вернетесь из обработчика, см. проблему [\#185](https://github.com/gofiber/fiber/issues/185).                                            | `false`           |
| BodyLimit                 | `int`           | Устанавливает максимально допустимый размер для тела запроса. Если размер превышает сконфигурированный предел, то он отправляет `413 - Request Entity Too Large` в качестве ответа.                                                                                           | `4 * 1024 * 1024` |
| CompressedFileSuffix      | `string`        | Adds suffix to the original file name and tries saving the resulting compressed file under the new file name.                                                                                                                                                                 | `".fiber.gz"`     |
| Concurrency               | `int`           | Максимальное количество одновременных подключений.                                                                                                                                                                                                                            | `256 * 1024`      |
| DisableKeepalive          | `bool`          | Отключение keep-alive соединений, приведет к закрытию входящих соединений после отправки первого ответа клиенту                                                                                                                                                               | `false`           |
| DisableDefaultDate        | `bool`          | Если установлено значение true, то заголовок даты по умолчанию будет исключён из ответа.                                                                                                                                                                                      | `false`           |
| DisableDefaultContentType | `bool`          | Если установлено значение true, то заголовок Content-Type по умолчанию будет исключён из ответа.                                                                                                                                                                              | `false`           |
| DisableStartupMessage     | `bool`          | Когда установлено значение true, не будет отображаться лого Fiber в ASCII-графике и сообщение «слушает на порту ...»                                                                                                                                                          | `false`           |
| DisableHeaderNormalizing  | `bool`          | По умолчанию, все заголовки нормализуются: conteNT-tYPE -&gt; Content-Type                                                                                                                                                                                              | `false`           |
| ETag                      | `bool`          | Включение или отключение генерации заголовков ETag, так как слабые и сильные ETag генерируются с использованием одного и того же метода хэширования \(CRC-32\). Слабые ETags по умолчанию, когда включено.                                                                  | `false`           |
| Templates                 | `Templates`     | Шаблоны — это интерфейс, который завершает Render функцию. See our [**Template Middleware**]() for supported engines.                                                                                                                                                         | `nil`             |
| ReadTimeout               | `time.Duration` | Время, отведенное на прочтение полного запроса, включая тело. Время ожидания по умолчанию не ограничено.                                                                                                                                                                      | `nil`             |
| WriteTimeout              | `time.Duration` | Максимальная длительность до истечения времени записи ответа. Время ожидания по умолчанию не ограничено.                                                                                                                                                                      | `nil`             |
| IdleTimeout               | `time.Duration` | Максимальное время ожидания следующего запроса при включенном keep-alive. Если IdleTimeout равен нулю, то используется значение ReadTimeout.                                                                                                                                  | `nil`             |

## Static

Используйте метод **Static** для обработки статических файлов, таких как **изображения**, **CSS** и **JavaScript**.

{% hint style="info" %}
По умолчанию, **Static** будет обрабатывать`index.html` файл в ответ на запрос в каталоге.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => with prefix
```
{% endcode %}

Используйте следующий код для отображения файлов в каталоге `./public`

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

Чтобы обслуживать файлы из нескольких каталогов, вы можете использовать метод **Static** несколько раз.

{% code title="Example" %}
```go
// Serve files from "./public" directory:
app.Static("/", "./public")

// Serve files from "./files" directory:
app.Static("/", "./files")
```
{% endcode %}

{% hint style="info" %}
Используйте кэш реверсивных прокси, типа [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/), для улучшения производительности статических ассетов.
{% endhint %}

Вы можете использовать любой виртуальный префикс пути \(_где путь фактически не существует в файловой системе_\) для файлов, которые обслуживаются методом **Static**, указав путь префикса для статического каталога, как показано ниже:

{% code title="Example" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

Если вы хотите иметь немного больше контроля над настройками для обработки статических файлов. You could use the `fiber.Static` struct to enable specific settings.

{% code title="fiber.Static{}" %}
```go
// Static represents settings for serving static files
type Static struct {
    // Transparently compresses responses if set to true
    // This works differently than the github.com/gofiber/compression middleware
    // The server tries minimizing CPU usage by caching compressed files.
    // Добавляется суффикс ".fiber.gz" к оригинальному имени файла.
    // Необязательный. Значение по умолчанию false
    Compress bool
    // Включает запросы диапазона байтов, если установлено значение true.
    // Необязательный. Значение по умолчанию false
    ByteRange bool
    // Разрешить просмотр каталогов.
    // Необязательный. Значение по умолчанию: false.
    Browse bool
    // Индексный файл для работы с каталогом.
    // Необязательный. Значение по умолчанию "index.html".
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

Маршрутизирует HTTP-запрос, где **METHOD** является [HTTP методом](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) запроса.

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

Вы можете группировать маршруты, создав структуру `*Group`.

**Сигнатура**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**Пример**

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

## Routes

Routes returns all registered routes

{% code title="Signature" %}
```go
app.Routes() []*Route
```
{% endcode %}

{% code title="Example" %}
```go
app := fiber.New()

handler := func(c *fiber.Ctx) { }

app.Get("/sample", handler)
app.Post("/john", handler)
app.Put("/doe", handler)

for _, r := range app.Routes() {
    fmt.Printf("%s\t%s\n", r.Method, r.Path)
}
// GET      /sample
// POST     /john
// PUT      /doe
```
{% endcode %}

## Listen

Binds and listens for connections on the specified address. This can be a `int` for port or `string` for address.

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

To enable **TLS/HTTPS** you can append a [**TLS config**](https://golang.org/pkg/crypto/tls/#Config).

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
**Serve** does not support the [**Prefork**](app.md#settings) feature.
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

Testing your application is done with the **Test** method. Use this method for creating `_test.go` files or when you need to debug your routing logic. The default timeout is `200ms` if you want to disable a timeout completely, pass `-1` as a second argument.

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

