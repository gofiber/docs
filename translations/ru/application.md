---
description: Экземпляр приложения условно обозначает приложение Fiber.
---

# 🚀 Применение

## новый

Метод создает новый экземпляр с именем **Fiber** .

```go
app := fiber.New()
```

## статический

Служите статическим файлам, таким как **изображения** , файлы **CSS** и **JavaScript** , вы можете использовать метод **Static** .

{% hint style = "info"%} По умолчанию этот метод отправляет файлы `index.html` в ответ на запрос к каталогу. {% endhint%}

#### Подпись

```go
app.Static(root string)         // => without prefix
app.Static(prefix, root string) // => with prefix
```

#### Примеры

Используйте следующий код для обслуживания файлов в каталоге с именем `./public`

```go
app.Static("./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```

Для обслуживания из нескольких каталогов вы можете использовать **Static** несколько раз.

```go
// Serve files from "./public" directory:
app.Static("./public")

// Serve files from "./files" directory:
app.Static("./files")
```

{% hint style = "info"%} Используйте кеш обратного прокси-сервера, такой как [NGINX,](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) для повышения производительности обслуживания статических активов. {% endhint%}

Чтобы создать префикс виртуального пути ( *где путь фактически не существует в файловой системе* ) для файлов, обслуживаемых методом **Static** , укажите путь префикса для статического каталога, как показано ниже:

```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```

## методы

Направляет HTTP-запрос, где **METHOD** - это [HTTP-метод](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) запроса.

#### Подпись

```go
app.METHOD(handler func(*Ctx))              // match any path
app.METHOD(path string, handler func(*Ctx)) // match specific path
```

#### пример

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

## Слушать

Связывает и прослушивает соединения по указанному адресу. Это может быть `int` для порта или `string` для адреса.

#### Подпись

```go
app.Listen(address interface{}, tls ...string)
```

#### пример

```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```

Чтобы включить **TLS / HTTPS,** вы можете добавить свой **сертификат** и путь к **ключу** .

```go
app.Listen(443, "server.crt", "server.key")
```

## настройки

### двигатель

Вы можете изменить настройки [сервера](https://github.com/valyala/fasthttp/blob/master/server.go#L150) **Fasthttp по** [умолчанию](https://github.com/valyala/fasthttp/blob/master/server.go#L150) через экземпляр **Fiber** . Эти настройки должны быть установлены **до** метода [Listen](application.md#listen) .

{% hint style = "danger"%} Изменяйте эти настройки, только если вы знаете, **что** делаете. {% endhint%}

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

Параметр Prefork позволяет использовать параметр сокета [**SO_REUSEPORT**](https://lwn.net/Articles/542629/) , который доступен в более новых версиях многих операционных систем, включая **DragonFly BSD** и **Linux** (версия ядра **3.9** и выше). Это приведет к появлению нескольких процессов Go, прослушивающих один и тот же порт.

**У NGINX** есть отличная статья о [Socket Sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/) , эти фотографии взяты из той же статьи.

![Schema, when Prefork disabled (by default)](https://cdn.wp.nginx.com/wp-content/uploads/2015/05/Slack-for-iOS-Upload-1-e1432652484191.png)

![Schema, when Prefork enabled](https://cdn.wp.nginx.com/wp-content/uploads/2015/05/Slack-for-iOS-Upload-e1432652376641.png)

Вы можете включить функцию Prefork, добавив флаг `-prefork` :

```bash
./server -prefork
```

Или установите для параметра `Prefork` значение `true` :

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

### сервер

Fiber по умолчанию не отправляет [заголовок сервера](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server) , но вы можете включить его, изменив значение сервера.

```go
app.Server = "Windows 95" // => Server: Windows 95
```

### Баннер

При запуске приложения Fiber консоль распечатает баннер, содержащий версию пакета и порт прослушивания. *Это включено по умолчанию.*

![](../../.gitbook/assets/screenshot-2020-02-08-at-13.18.27.png)

Чтобы отключить его, установите `Banner` в `false` :

```go
app.Banner = false // Hide banner
```

## Тестовое задание

Тестирование вашего приложения выполняется методом **Test** .

{% hint style = "info"%} Метод в основном используется для `_test.go` файлов и отладки приложений. {% endhint%}

#### Подпись

```go
app.Test(req *http.Request) (*http.Response, error)
```

#### пример

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
