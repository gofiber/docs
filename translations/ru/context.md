---
description: Структура Ctx представляет Контекст, который содержит HTTP-запрос и ответ. У этого есть методы для строки запроса запроса, параметров, тела, заголовков HTTP и так далее.
---

# 🧠 Контекст

## Принимает

Проверяет, являются ли указанные **расширения** или **типы** **контента** приемлемыми.

{% hint style = "info"%} На основе HTTP-заголовка [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) запроса. {% endhint%}

**Подпись**

```go
c.Accepts(types ...string) string
```

**пример**

```go
// Accept: text/*, application/json

app.Get("/", func(c *fiber.Ctx) {
  c.Accepts("html")             // => "html"
  c.Accepts("text/html")        // => "text/html"
  c.Accepts("json", "text")     // => "json" "text"
  c.Accepts("application/json") // => "application/json"
  c.Accepts("image/png")        // => ""
  c.Accepts("png")              // => ""
})
```

## AcceptsCharsets

Проверяет, является ли указанная **кодировка** приемлемой.

{% hint style = "info"%} На основе HTTP-заголовка [Accept-Charset](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset) запроса. {% endhint%}

**Подпись**

```go
c.AcceptsCharsets(charsets ...string) string
```

**пример**

```go
// Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsCharsets("utf-8")                // => "utf-8"
  c.AcceptsCharsets("utf-16", "iso-8859-1") // => "iso-8859-1"
  c.AcceptsCharsets("utf-16")               // => ""
})
```

## AcceptsEncodings

Проверяет, является ли указанная **кодировка** приемлемой.

{% hint style = "info"%} На основе HTTP-заголовка [Accept-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) запроса. {% endhint%}

**Подпись**

```go
c.AcceptsEncodings(encodings ...string) string
```

**пример**

```go
// Accept-Encoding: gzip, compress;q=0.2

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsEncodings("gzip")           // => "gzip"
  c.AcceptsEncodings("compress", "br") // => "compress"
  c.AcceptsEncodings("deflate")        // => ""
})
```

## AcceptsLanguages

Проверяет, является ли указанный **язык** приемлемым.

{% hint style = "info"%} На основе HTTP-заголовка [Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) запроса. {% endhint%}

**Подпись**

```go
c.AcceptsLanguages(languages ...string) string
```

**пример**

```go
// Accept-Language: en;q=0.8, nl, ru

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsLanguages("en")             // => "en"
  c.AcceptsLanguages("pt", "nl", "ru") // => "nl" "ru"
  c.AcceptsLanguages("fr")             // => ""
})
```

## Append

Добавляет указанное **значение** в поле заголовка ответа HTTP.

{% hint style = "warning"%} Если заголовок еще **не** установлен, он создает заголовок с указанным значением. {% endhint%}

**Подпись**

```go
c.Append(field, values ...string)
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Append("Link", "http://google.com", "http://localhost")
  // => Link: http://localhost, http://google.com

  c.Append("Link", "Test")
  // => Link: http://localhost, http://google.com, Test
})
```

## прикрепление

Устанавливает поле заголовка [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) ответа HTTP для `attachment` .

**Подпись**

```go
c.Attachment(file ...string)
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Attachment()
  // => Content-Disposition: attachment

  c.Attachment("./upload/images/logo.png")
  // => Content-Disposition: attachment; filename="logo.png"
  // => Content-Type: image/png
})
```

## BaseUrl

Возвращает базовый URL ( **протокол** + **хост** ) в виде `string` .

**Подпись**

```go
c.BaseURL() string
```

**пример**

```go
// GET https://example.com/page#chapter-1

app.Get("/", func(c *fiber.Ctx) {
  c.BaseURL() // => https://example.com
})
```

## BasicAuth

Возвращает **имя пользователя** и **пароль,** указанные в заголовке [авторизации](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) запроса, если запрос использует [базовую аутентификацию HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) .

**Подпись**

```go
c.BasicAuth() (user, pass string, ok bool)
```

**пример**

```go
// curl --user john:doe http://localhost:8080/auth

app.Get("/auth", func(c *fiber.Ctx) {
  user, pass, ok := c.BasicAuth()

  if !ok || user != "john" || pass != "doe" {
    c.Status(403).Send("Forbidden")
    return
  }

  c.Send("Welcome " + user)
})
```

## тело

Содержит **необработанное тело,** отправленное в запросе **POST** .

**Подпись**

```go
c.Body() string
c.Body(key string) string
c.Body(key []byte) string
c.Body(func(key, value string)) func(string, string)
```

**пример**

```go
// curl -X POST http://localhost:8080 -d user=john

app.Post("/", func(c *fiber.Ctx) {
  // Get raw body from POST request:
  c.Body()
  // => user=john

  // Get body value by specific key:
  c.Body("user")
  // => "john"

  // Loop trough all body params:
  c.Body(func(key string, val string) {
    fmt.Printl(key, val)
    // => "user" "john"
  })
})
```

## ClearCookie

Удаляет **все** файлы cookie клиента или определенный файл cookie по **имени** ( *путем установки даты истечения срока действия в прошлом* ).

**Подпись**

```go
c.ClearCookie()
c.ClearCookie(key string)
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  // Clears all cookies:
  c.ClearCookie()

  // Expire specific cookie by name:
  c.ClearCookie("user")

  // Expire multiple cookies by names:
  c.ClearCookie("token", "session", "track_id", "version")
})
```

## печенье

Устанавливает cookie с **именем** и **значением** .

**Подпись**

```go
c.Cookie(name, value string)
c.Cookie(name, value string, options *Cookie{})
```

**Структура куки**

{% hint style = "warning"%} **Параметр Expire** **не** будет использоваться, если установлен **MaxAge** . {% endhint%}

```go
&fiber.Cookie{
  Expire   int64  // Unix timestamp
  MaxAge   int    // Seconds
  Domain   string
  Path     string
  HttpOnly bool
  Secure   bool
  SameSite string
}
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Cookie("name", "john")
  // => Cookie: name=john;

  c.Cookie("name", "john", &fiber.Cookie{
    MaxAge:   60,
    Domain:   "example.com",
    Path:     "/",
    HttpOnly: true,
    Secure:   true,
    SameSite: "lax",
  })
  // => name=john; max-age=60; domain=example.com; path=/;
  //    HttpOnly; secure; SameSite=Lax

})
```

## Печенье

Получает печенье.

**Подпись** с

```go
c.Cookies() string
c.Cookies(key string) string
c.Cookies(key []byte) string
c.Cookies(func(key, value string)) string
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  // Get raw cookie header:
  c.Cookies()
  // => name=john;

  // Get cookie by key:
  c.Cookies("name")
  c.Cookies([]byte("name"))
  // => "john"

  // Show all cookies:
  c.Cookies(func(key, val string) {
    fmt.Println(key, val)
    // => "name", "john"
  })
})
```

## Скачать

Переносит файл из пути в качестве `attachment` .

Как правило, браузеры предлагают пользователю загрузить файл. По умолчанию заголовок [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) `filename=` параметр является путем ( *это обычно появляется в диалоговом окне браузера* ).

Переопределите это значение по умолчанию с помощью параметра **имени файла** .

**Подпись**

```go
c.Download(path, filename ...string)
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Download("./files/report-12345.pdf")
  // => Download report-12345.pdf

  c.Download("./files/report-12345.pdf", "report.pdf")
  // => Download report.pdf
})
```

## Конец

{% hint style = "danger"%} Запланировано для **Fiber** v2. {% endhint%}

## Fasthttp

Вы все еще можете **получить доступ** и использовать все методы и свойства **Fasthttp** .

**Подпись**

{% hint style = "info"%} Пожалуйста, прочитайте [документацию Fasthttp](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) для получения дополнительной информации. {% endhint%}

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Fasthttp.Request.Header.Method()
  // => []byte("GET")

  c.Fasthttp.Response.Write([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## Формат

Выполняет согласование содержимого для заголовка [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP. Он использует [Accepts,](context.md#accepts) чтобы выбрать правильный формат.

{% hint style = "info"%} Если заголовок **не** указан или **отсутствует** правильный формат, используется **text / plain** . {% endhint%}

**Подпись**

```go
c.Format(body interface{})
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  // Accept: text/plain
  c.Format("Hello, World!")
  // => Hello, World!

  // Accept: text/html
  c.Format("Hello, World!")
  // => <p>Hello, World!</p

  // Accept: application/json
  c.Format("Hello, World!")
  // => "Hello, World!"
})
```

## FormFile

Файлы MultipartForm можно получить по имени, возвращается **первый** файл с заданным ключом.

**Подпись**

```go
c.FormFile(name string) (*multipart.FileHeader, error)
```

**пример**

```go
app.Post("/", func(c *fiber.Ctx) {
  // Get first file from form field "document":
  file, err := c.FormFile("document")

  // Check for errors:
  if err == nil {
    // Save file to root directory:
    c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
  }
})
```

## FormValue

Значения MultipartForm могут быть получены по имени, возвращается **первое** значение из данного ключа.

**Подпись**

```go
c.FormValue(name string) string
```

**пример**

```go
app.Post("/", func(c *fiber.Ctx) {
  // Get first value from form field "name":
  c.FormValue("name")
  // => "john" or "", if not exist
})
```

## пресная

{% hint style = "danger"%} Запланировано для **Fiber** v2. {% endhint%}

## Получить

Возвращает заголовок HTTP-запроса, указанный в поле. В совпадении регистр не учитывается.

**Подпись**

```go
c.Get(field string) string
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Get("Content-Type") // => "text/plain"
  c.Get("content-type") // => "text/plain"
  c.Get("something")    // => ""
})
```

## HeadersSent

{% hint style = "danger"%} Запланировано для **Fiber** v2. {% endhint%}

## Hostname

Содержит имя хоста, полученное из заголовка HTTP [узла](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) .

**Подпись**

```go
c.Hostname() string
```

**пример**

```go
// GET http://google.com/search

app.Get("/", func(c *fiber.Ctx) {
  c.Hostname() // => "google.com"
})
```

## IP

Возвращает удаленный IP-адрес запроса.

**Подпись**

```go
c.IP() string
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.IP() // => "127.0.0.1"
})
```

## IP-адрес

Возвращает массив IP-адресов, указанных в заголовке запроса [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) .

**Подпись**

```go
c.IPs() []string
```

**пример**

```go
// X-Forwarded-For: proxy1, 127.0.0.1", proxy3

app.Get("/", func(c *fiber.Ctx) {
  c.IPs() // => ["proxy1", "127.0.0.1", "proxy3"]
})
```

## Является

Возвращает соответствующий **тип содержимого** , если поле заголовка HTTP [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) входящего запроса соответствует **типу** [MIME,](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types) указанному параметром type.

{% hint style = "info"%} Если у запроса **нет** тела, он возвращает **false** . {% endhint%}

**Подпись**

```go
c.Is(t string) bool
```

**пример**

```go
// Content-Type: text/html; charset=utf-8

app.Get("/", func(c *fiber.Ctx) {
  c.Is("html")  // => true
  c.Is(".html") // => true
  c.Is("json")  // => false
})
```

## JSON

Преобразует любой **интерфейс** или **строку** в JSON, используя [Jsoniter](https://github.com/json-iterator/go) .

{% hint style = "info"%} Метод также устанавливает заголовок содержимого в **application / json** . {% endhint%}

**Подпись**

```go
c.JSON(v interface{}) error
```

**пример**

```go
type SomeStruct struct {
  Name string
  Age  uint8
}

app.Get("/json", func(c *fiber.Ctx) {
  // Create data struct:
  data := SomeStruct{
    Name: "Grame",
    Age:  20,
  }

  c.JSON(data)
  // => "{"Name": "Grame", "Age": 20}"

  c.JSON("Hello, World!")
  // => "Hello, World!"
})
```

## JSONBytes

Необработанный метод JSON.

{% hint style = "success"%} Используйте это, если вам **не нужна** сериализация JSON, рекомендуется при работе с **необработанными** входами. {% endhint%}

**Подпись**

```go
c.JSONBytes(b []byte) error
```

**пример**

```go
app.Get("/json", func(c *fiber.Ctx) {
  c.JSONBytes([]byte(`{"Name": "Grame", "Age": 20}`))
  // => "{"Name": "Grame", "Age": 20}"
})
```

## JSONString

Необработанный метод JSON.

{% hint style = "success"%} Используйте это, если вам **не нужна** сериализация JSON, рекомендуется при работе с **необработанными** входами. {% endhint%}

**Подпись**

```go
c.JSONString(s string) error
```

**пример**

```go
app.Get("/json", func(c *fiber.Ctx) {
  c.JSONString(`{"Name": "Grame", "Age": 20}`)
  // => "{"Name": "Grame", "Age": 20}"
})
```

## JSONP

Посылает ответ JSON с поддержкой JSONP. Этот метод идентичен [JSON](context.md#json) , за исключением того, что он включает поддержку обратного вызова JSONP. По умолчанию имя обратного вызова JSONP является просто обратным вызовом.

Переопределите это, передав **именованную строку** в метод.

**Подпись**

```go
c.JSONP(v interface{}, callback ...string) error
```

**пример**

```go
type SomeStruct struct {
  name string
  age  uint8
}

app.Get("/", func(c *fiber.Ctx) {
  // Create data struct:
  data := SomeStruct{
    name: "Grame",
    age:  20,
  }

  c.JSONP(data)
  // => callback({"name": "Grame", "age": 20})

  c.JSONP(data, "customFunc")
  // => customFunc({"name": "Grame", "age": 20})
})
```

## связи

Объединяет ссылку следует свойства для заполнения ответа по [Link](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Link) HTTP заголовок поля.

**Подпись**

```go
c.Links(link ...string)
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Link(
    "http://api.example.com/users?page=2", "next",
    "http://api.example.com/users?page=5", "last",
  )
  // Link: <http://api.example.com/users?page=2>; rel="next",
  //       <http://api.example.com/users?page=5>; rel="last"
})
```

## Местные жители

Метод, который хранит строковые переменные в области запроса и поэтому доступен только для маршрутов, соответствующих запросу.

{% hint style = "success"%} Это полезно, если вы хотите передать некоторые **конкретные значения** следующему промежуточному программному обеспечению. {% endhint%}

**Подпись**

```go
c.Locals(key string, value ...interface{}) interface{}
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Locals("user", "admin")
  c.Next()
})

app.Get("/admin", func(c *fiber.Ctx) {
  if c.Locals("user") == "admin" {
    c.Status(200).Send("Welcome, admin!")
  } else {
    c.SendStatus(403)
    // => 403 Forbidden
  }
})
```

{% hint style = "info"%} Вы можете поместить любой тип в **Locals** , но не забудьте преобразовать его обратно, когда вы используете переменную. {% endhint%}

```go
type SomeStruct struct {
  Message string `json:"message"`
}

app.Get("/", func(c *fiber.Ctx) {
  c.Locals("user", SomeStruct{"Hello, World!"})
  // => user: {"message":"Hello, World!"}

  c.Next()
})

app.Get("/", func(c *fiber.Ctx) {
  if val, ok := c.Locals("user").(SomeStruct); ok {
    fmt.Println(val.Message)
    // => "Hello, World!"
  }
})
```

## Место расположения

Устанавливает HTTP-заголовок [Location](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) в соответствии с указанным параметром пути.

**Подпись**

```go
c.Location(path string)
```

**пример**

```go
app.Post("/", func(c *fiber.Ctx) {
  c.Location("http://example.com")
  c.Location("/foo/bar")
})
```

## метод

Содержит строку, соответствующую методу HTTP запроса: GET, POST, PUT и так далее.

**Подпись**

```go
c.Method() string
```

**пример**

```go
app.Post("/", func(c *fiber.Ctx) {
  c.Method() // => "POST"
})
```

## MultipartForm

Чтобы получить доступ к элементам многочастной формы, вы можете проанализировать двоичный файл с помощью `MultipartForm()` . Это возвращает `map[string][]string` , поэтому при заданном ключе значение будет срезом строки.

**Подпись**

```go
c.MultipartForm() (*multipart.Form, error)
```

**пример**

```go
app.Post("/", func(c *fiber.Ctx) {
  // Parse the multipart form:
  if form, err := c.MultipartForm(); err == nil {
    // => *multipart.Form

    if token := form.Value["token"]; len(token) > 0 {
      // Get key value:
      fmt.Println(token[0])
    }

    // Get all files from "documents" key:
    files := form.File["documents"]
    // => []*multipart.FileHeader

    // Loop trough files:
    for _, file := range files {
      fmt.Println(file.Filename, file.Size, file.Header["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      // Save the files to disk:
      c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
    }
  }
})
```

## следующий

Когда вызывается **Next** , он выполняет следующий метод в стеке, который соответствует текущему маршруту.

**Подпись**

```go
c.Next()
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  fmt.Printl("1st route!")
  c.Next()
})

app.Get("*", func(c *fiber.Ctx) {
  fmt.Printl("2nd route!")
  c.Next()
})

app.Get("/", func(c *fiber.Ctx) {
  fmt.Printl("3rd route!")
  c.Send("Hello, World!")
})
```

## OriginalURL

Содержит исходный URL-адрес запроса.

**Подпись**

```go
c.OriginalURL() string
```

**пример**

```go
// GET http://example.com/search?q=something

app.Get("/", func(c *fiber.Ctx) {
  c.OriginalURL() // => "/search?q=something"
})
```

## Params

Метод может быть использован для получения параметров маршрута.

{% hint style = "info"%} По умолчанию используется пустая строка ( `""` ), если параметр **не** существует. {% endhint%}

**Подпись**

```go
c.Params(param string) string
```

**пример**

```go
// GET http://example.com/user/tj

app.Get("/user/:name", func(c *fiber.Ctx) {
  c.Params("name") // => "tj"
})
```

## Путь

Содержит часть пути URL запроса.

**Подпись**

```go
c.Path() string
```

**пример**

```go
// GET http://example.com/users?sort=desc

app.Get("/users", func(c *fiber.Ctx) {
  c.Path() // => "/users"
})
```

## протокол

Содержит строку протокола запроса: `http` или `https` для запросов **TLS** .

**Подпись**

```go
c.Protocol() string
```

**пример**

```go
// GET http://example.com

app.Get("/", func(c *fiber.Ctx) {
  c.Protocol() // => "http"
})
```

## запрос

Это свойство является объектом, содержащим свойство для каждого параметра строки запроса в маршруте.

{% hint style = "info"%} Если **нет** строки запроса, она возвращает **пустую строку** . {% endhint%}

**Подпись**

```go
c.Query(parameter string) string
```

**пример**

```go
// GET http://example.com/shoes?order=desc&brand=nike

app.Get("/", func(c *fiber.Ctx) {
  c.Query("order") // => "desc"
  c.Query("brand") // => "nike"
})
```

## Ассортимент

{% hint style = "danger"%} Запланировано для **Fiber** v2. {% endhint%}

## Перенаправление

Перенаправляет на URL-адрес, полученный по указанному пути, с указанным состоянием, положительное целое число, соответствующее коду статуса HTTP.

{% hint style = "info"%} Если **не** указан, статус по умолчанию равен **302 Найдено** . {% endhint%}

**Подпись**

```go
c.Redirect(path string, status ...int)
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Redirect("/foo/bar")
  c.Redirect("../login")
  c.Redirect("http://example.com")
  c.Redirect("http://example.com", 301)
})
```

## оказывать

{% hint style = "danger"%} Запланировано для **Fiber** v2. {% endhint%}

## маршрут

Содержит текущую структуру [Route](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route) .

{% hint style = "warning"%} Используйте этот метод **только** для отладки. {% endhint%}

**Подпись**

```go
c.Route() *Route
```

**пример**

```go
// http://localhost:8080/hello

app.Get("/hello", func(c *fiber.Ctx) {
  c.Route()
  // => {GET /hello false false <nil> [] 0x7b4ab0}
})

app.Post("/:api?", func(c *fiber.Ctx) {
  c.Route()
  // => {POST / false false ^(?:/([^/]+?))?/?$ [api] 0x7b49e0}
})
```

## Сохранить файл

Метод используется для сохранения **любого** файла из нескольких частей на диск.

**Подпись**

```go
c.SaveFile(fh *multipart.FileHeader, path string)
```

**пример**

{% hint style = "success"%} Вы можете увидеть рабочий пример в методе [MultipartForm](https://fiber.wiki/context#multipartform) . {% endhint%}

## Безопасный

Логическое свойство, которое имеет значение `true` , если установлено соединение **TLS** .

**Подпись**

```go
c.Secure() bool
```

**пример**

```go
// Secure() method is equivalent to:
c.Protocol() == "https"
```

## послать

Отправляет ответ HTTP. Тело **отправки** может быть любого типа.

{% hint style = "warning"%} Метод **не** добавляется как метод [Write](https://fiber.wiki/context#write) . {% endhint%}

**Подпись**

```go
c.Send(body ...interface{})
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")         // => "Hello, World!"
  c.Send([]byte("Hello, World!")) // => "Hello, World!"
  c.Send(123)                     // => 123
})
```

## SendBytes

Грубый метод.

{% Стиль намек = «Успех»%} Используйте это, если **не требуется** утверждение типа, рекомендуется для **повышения** производительности. {% endhint%}

**Подпись**

```go
c.SendBytes(b []byte)
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendByte([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## SendString

Грубый метод.

{% Стиль намек = «Успех»%} Используйте это, если **не требуется** утверждение типа, рекомендуется для **повышения** производительности. {% endhint%}

**Подпись**

```go
c.SendString(s string)
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendString("Hello, World!")
  // => "Hello, World!"
})
```

## Послать файл

Переносит файл по указанному пути. Устанавливает поле заголовка HTTP ответа [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) на основе расширения **имени файла** .

{% hint style = "info"%} Метод по умолчанию использует **gzipping** , для отключения установите значение **false** . {% endhint%}

**Подпись**

```go
c.SendFile(path string, gzip ...bool)
```

**пример**

```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendFile("./public/404.html")

  // Disable gzipping:
  c.SendFile("./static/index.html", false)
})
```

## SendStatus

Устанавливает код состояния и правильное сообщение о состоянии в теле, если тело ответа **пусто** .

{% hint style = "success"%} Вы можете найти все используемые коды состояния и сообщения [здесь](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244) . {% endhint%}

**Подпись**

```go
c.SendStatus(status int)
```

**пример**

```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendStatus(415)
  // 415 "Unsupported Media Type"

  c.Send("Hello, World!")
  c.SendStatus(415)
  // 415 "Hello, World!"
})
```

## Устанавливать

Устанавливает поле в ответ в HTTP заголовок `value` .

**Подпись**

```go
c.Set(field, value string)
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Set("Content-Type", "text/plain")
  // => "Content-type: text/plain"
})
```

## SignedCookies

{% hint style = "danger"%} Запланировано для **Fiber** v2. {% endhint%}

## несвежий

{% hint style = "danger"%} Запланировано для **Fiber** v2. {% endhint%}

## Положение дел

Устанавливает статус HTTP для ответа.

{% hint style = "info"%} Метод может работать в **цепочке** . {% endhint%}

**Подпись**

```go
c.Status(status int)
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Status(200)
  c.Status(400).Send("Bad Request")
  c.Status(404).SendFile("./public/gopher.png")
})
```

## Поддомены

Массив поддоменов в доменном имени запроса.

Смещение субдомена свойства приложения, которое по умолчанию равно `2` , используется для определения начала сегментов субдомена.

**Подпись**

```go
c.Subdomains(offset ...int) []string
```

**пример**

```go
// Host: "tobi.ferrets.example.com"

app.Get("/", func(c *fiber.Ctx) {
  c.Subdomains()  // => ["ferrets", "tobi"]
  c.Subdomains(1) // => ["tobi"]
})
```

## Тип

Устанавливает HTTP-заголовок [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) на тип MIME, указанный [здесь,](https://github.com/nginx/nginx/blob/master/conf/mime.types) указанный **расширением** файла.

**Подпись**

```go
c.Type(t string) string
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Type(".html") // => "text/html"
  c.Type("html")  // => "text/html"
  c.Type("json")  // => "application/json"
  c.Type("png")   // => "image/png"
})
```

## изменяться

Добавляет данное поле заголовка в заголовок ответа [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) . Это добавит заголовок, если он еще не указан, в противном случае он останется в списке в текущем местоположении.

{% hint style = "info"%} **Допускается** несколько полей. {% endhint%}

**Подпись**

```go
c.Vary(field ...string)
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Vary("Origin")     // => Vary: Origin
  c.Vary("User-Agent") // => Vary: Origin, User-Agent

  // Checks for duplicates:
  c.Vary("Origin")
  // => Vary: Origin, User-Agent

  c.Vary("Accept-Encoding", "Accept")
  // => Vary: Origin, User-Agent, Accept-Encoding, Accept
})
```

## Написать

Добавляет **любой** ввод к ответу тела HTTP.

**Подпись**

```go
c.Write(body ...interface{})
```

**пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Write("Hello, ")         // => "Hello, "
  c.Write([]byte("World! ")) // => "Hello, World! "
  c.Write(123)               // => "Hello, World! 123"
})
```

## XHR

Логическое свойство, которое имеет значение `true` , если в поле заголовка [X-Requested-With](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) запроса указано значение [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) , указывающее, что запрос был выполнен клиентской библиотекой (например, [jQuery](https://api.jquery.com/jQuery.ajax/) ).

**Подпись**

```go
c.XHR() bool
```

**пример**

```go
// X-Requested-With: XMLHttpRequest

app.Get("/", func(c *fiber.Ctx) {
  c.XHR() // => true
})
```

## XML

XML устанавливает заголовок `application/xml` и отменяет маршализацию вашего интерфейса в XML.

**Подпись**

```go
c.XML(xml interface{}) error
```

**пример**

```go
type SomeStruct struct {
    Name  string `xml:"name"`
    Stars int    `xml:"stars"`
}

app.Get("/", func(c *fiber.Ctx) {
  // Create data struct:
  data := SomeStruct{
    "John",
    50,
  }

  c.XML(data)
  // => Content-Type: application/xml
  // => <some-struct><name>John</name><stars>50</stars></some-struct>
})
```
