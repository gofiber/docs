---
description: >-
  Структура Ctx представляет контекст, который содержит HTTP запрос и ответ. Он имеет методы для строки запроса, параметров, тела, HTTP-заголовков и так далее.
---

# 🧠 Контекст

## Accepts

Проверяет, являются ли указанные **расширения** или **типы контента** разрешенными.

{% hint style="info" %}
Основан на запросе HTTP-заголовка [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept).
{% endhint %}

{% code title="Signature" %}
```go
c.Accepts(types ...string)                 string
c.AcceptsCharsets(charsets ...string)      string
c.AcceptsEncodings(encodings ...string)    string
c.AcceptsLanguages(langs ...string)        string
```
{% endcode %}

{% code title="Example" %}
```go
// Accept: text/*, application/json

app.Get("/", func(c *fiber.Ctx) {
  c.Accepts("html")             // "html"
  c.Accepts("text/html")        // "text/html"
  c.Accepts("json", "text")     // "json"
  c.Accepts("application/json") // "application/json"
  c.Accepts("image/png")        // ""
  c.Accepts("png")              // ""
})
```
{% endcode %}

Fiber предоставляет аналогичные функции для других заголовков приёма.

```go
// Accept-Charset: utf-8, iso-8859-1;q=0.2
// Accept-Encoding: gzip, compress;q=0.2
// Accept-Language: en;q=0.8, nl, ru

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsCharsets("utf-16", "iso-8859-1") 
  // "iso-8859-1"

  c.AcceptsEncodings("compress", "br") 
  // "compress"

  c.AcceptsLanguages("pt", "nl", "ru") 
  // "nl"
})
```

## Append

Добавляет указанное **значение** в поле HTTP-заголовка ответа.

{% hint style="warning" %}
Если заголовок еще **не** установлен, он создает заголовок с указанным значением.
{% endhint %}

{% code title="Signature" %}
```go
c.Append(field, values ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Append("Link", "http://google.com", "http://localhost")
  // => Link: http://localhost, http://google.com

  c.Append("Link", "Test")
  // => Link: http://localhost, http://google.com, Test
})
```
{% endcode %}

## Attachment

Устанавливает поле заголовка HTTP-ответа [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) для `вложения`.

{% code title="Signature" %}
```go
c.Attachment(file ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Attachment()
  // => Content-Disposition: attachment

  c.Attachment("./upload/images/logo.png")
  // => Content-Disposition: attachment; filename="logo.png"
  // => Content-Type: image/png
})
```
{% endcode %}

## App

Returns the [\*App](app.md#new) reference so you could easily access all application settings.

{% code title="Signature" %}
```go
c.App() *App
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/bodylimit", func(c *fiber.Ctx) {
  bodylimit := c.App().Settings.BodyLimit
  c.Send(bodylimit)
})
```
{% endcode %}

## BaseURL

Возвращает базовый URL \(**протокол** + **хост**\) в виде `string`.

{% code title="Signature" %}
```go
c.BaseURL() string
```
{% endcode %}

{% code title="Example" %}
```go
// GET https://example.com/page#chapter-1

app.Get("/", func(c *fiber.Ctx) {
  c.BaseURL() // https://example.com
})
```
{% endcode %}

## Body

Содержит **raw body**, представленное в **POST** запросе.

{% code title="Signature" %}
```go
c.Body() string
```
{% endcode %}

{% code title="Example" %}
```go
// curl -X POST http://localhost:8080 -d user=john

app.Post("/", func(c *fiber.Ctx) {
  // Get raw body from POST request:
  c.Body() // user=john
})
```
{% endcode %}

> _Возвращаемое значение допустимо только внутри обработчика. Не храните ссылки.  
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](app.md#settings) _._ [_Подробнее..._](./#zero-allocation)

## BodyParser

Привязывает тело запроса к структуре. `BodyParser` поддерживает декодирование параметров запроса (и последующих типов содержимого) на основе заголовка `Content-Type`:

* `application/json`
* `application/xml`
* `application/x-www-form-urlencoded`
* `multipart/form-data`

{% code title="Signature" %}
```go
c.BodyParser(out interface{}) error
```
{% endcode %}

{% code title="Example" %}
```go
// Field names should start with an uppercase letter
type Person struct {
    Name string `json:"name" xml:"name" form:"name" query:"name"`
    Pass string `json:"pass" xml:"pass" form:"pass" query:"pass"`
}

app.Post("/", func(c *fiber.Ctx) {
        p := new(Person)

        if err := c.BodyParser(p); err != nil {
            log.Fatal(err)
        }

        log.Println(p.Name) // john
        log.Println(p.Pass) // doe
})
// Run tests with the following curl commands

// curl -X POST -H "Content-Type: application/json" --data "{\"name\":\"john\",\"pass\":\"doe\"}" localhost:3000

// curl -X POST -H "Content-Type: application/xml" --data "<login><name>john</name><pass>doe</pass></login>" localhost:3000

// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" --data "name=john&pass=doe" localhost:3000

// curl -X POST -F name=john -F pass=doe http://localhost:3000

// curl -X POST "http://localhost:3000/?name=john&pass=doe"
```
{% endcode %}

## ClearCookie

Истечение клиентского cookie \(_или всех cookie-файлов, если оставить пустым\)_

{% code title="Signature" %}
```go
c.ClearCookie(key ...string)
```
{% endcode %}

{% code title="Example" %}
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
{% endcode %}

## Context

Returns context.Context that carries a deadline, a cancellation signal, and other values across API boundaries.

**Сигнатура**

```go
c.Context() context.Context
```

## Cookie

Установить cookie

**Сигнатура**

```text
c.Cookie(*Cookie)
```

```go
type Cookie struct {
    Name     string
    Value    string
    Path     string
    Domain   string
    Expires  time.Time
    Secure   bool
    HTTPOnly bool
    SameSite string // lax, strict, none
}
```

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  // Create cookie
  cookie := new(fiber.Cookie)
  cookie.Name = "john"
  cookie.Value = "doe"
  cookie.Expires = time.Now().Add(24 * time.Hour)

  // Set cookie
  c.Cookie(cookie)
})
```
{% endcode %}

## Cookies

Получить значение cookie по ключу.

**Сигнатура**

```go
c.Cookies(key string) string
```

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  // Get cookie by key:
  c.Cookies("name") // "john"
})
```
{% endcode %}

> _Возвращаемое значение допустимо только внутри обработчика. Не храните ссылки.  
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](app.md#settings) _._ [_Подробнее..._](./#zero-allocation)

## Download

Передаёт файл из пути в качестве `вложения` (attachment).

Как правило, браузеры запрашивают скачивание у пользователя. По умолчанию, параметр [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header `filename=` – это путь к файлу \(_обычно, отображается в диалоговом окне браузера_\).

Переопределить значение по умолчанию с помощью параметра **filename**.

{% code title="Signature" %}
```go
c.Download(path, filename ...string) error
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  if err := c.Download("./files/report-12345.pdf"); err != nil {
    c.Next(err) // Pass err to fiber
  }
  // => Download report-12345.pdf

  if err := c.Download("./files/report-12345.pdf", "report.pdf"); err != nil {
    c.Next(err) // Pass err to fiber
  }
  // => Download report.pdf
})
```
{% endcode %}

## Fasthttp

Вы все еще можете **получить доступ** и использовать все **Fasthttp** методы и свойства.

**Сигнатура**

{% hint style="info" %}
Пожалуйста, прочитайте [Fasthttp Documentation](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) для получения дополнительной информации.
{% endhint %}

**Пример**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Fasthttp.Request.Header.Method()
  // => []byte("GET")

  c.Fasthttp.Response.Write([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## Error

Содержит информацию об ошибке, вызванную паникой или передаваемую через метод [`Next(err)`](https://github.com/gofiber/docs/tree/8d965e1e05fb67f965934586c78335ef29f52128/context/README.md#error).

{% code title="Signature" %}
```go
c.Error() error
```
{% endcode %}

{% code title="Example" %}
```go
func main() {
  app := fiber.New()
  app.Post("/api/register", func (c *fiber.Ctx) {
    if err := c.JSON(&User); err != nil {
      c.Next(err)
    }
  })
  app.Get("/api/user", func (c *fiber.Ctx) {
    if err := c.JSON(&User); err != nil {
      c.Next(err)
    }
  })
  app.Put("/api/update", func (c *fiber.Ctx) {
    if err := c.JSON(&User); err != nil {
      c.Next(err)
    }
  })
  app.Use("/api", func(c *fiber.Ctx) {
    c.Set("Content-Type", "application/json")
    c.Status(500).Send(c.Error())
  })
  app.Listen(1337)
}
```
{% endcode %}

## Формат

Выполняет согласование содержимого в HTTP-заголовке [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept). Он использует [Accepts](ctx.md#accepts) для выбора надлежащего формата.

{% hint style="info" %}
Если заголовок **не указан** или **не существует** корректный формат, то используется **text/plain**.
{% endhint %}

{% code title="Signature" %}
```go
c.Format(body interface{})
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  // Accept: text/plain
  c.Format("Hello, World!")
  // => Hello, World!

  // Accept: text/html
  c.Format("Hello, World!")
  // => <p>Hello, World!</p>

  // Accept: application/json
  c.Format("Hello, World!")
  // => "Hello, World!"
})
```
{% endcode %}

## FormFile

Файлы в MultipartForm могут быть получены по имени. Возвращается **первый** файл с данного ключа.

{% code title="Signature" %}
```go
c.FormFile(name string) (*multipart.FileHeader, error)
```
{% endcode %}

{% code title="Example" %}
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
{% endcode %}

## FormValue

Значения любой формы могут быть получены по имени. Возвращается значение **первого** из заданного ключа.

{% code title="Signature" %}
```go
c.FormValue(name string) string
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  // Get first value from form field "name":
  c.FormValue("name")
  // => "john" or "" if not exist
})
```
{% endcode %}

> _Возвращаемое значение допустимо только внутри обработчика. Не храните ссылки.  
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](app.md#settings) _._ [_Подробнее..._](./#zero-allocation)

## Fresh

[https://expressjs.com/en/4x/api.html\#req.fresh](https://expressjs.com/en/4x/api.html#req.fresh)

{% hint style="info" %}
Пока что не реализовано, вы можете прислать Pull Request!
{% endhint %}

## Get

Возвращает заголовок HTTP-запроса, указанный по полю.

{% hint style="success" %}
**Не** чувствителен к регистру.
{% endhint %}

{% code title="Signature" %}
```go
c.Get(field string) string
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Get("Content-Type") // "text/plain"
  c.Get("CoNtEnT-TypE") // "text/plain"
  c.Get("something")    // ""
})
```
{% endcode %}

> _Возвращаемое значение допустимо только внутри обработчика. Не храните ссылки.  
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](app.md#settings) _._ [_Подробнее..._](./#zero-allocation)

## Hostname

Содержит имя хоста, полученное из HTTP-заголовка [Host](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host).

{% code title="Signature" %}
```go
c.Hostname() string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://google.com/search

app.Get("/", func(c *fiber.Ctx) {
  c.Hostname() // "google.com"
})
```
{% endcode %}

> _Возвращаемое значение допустимо только внутри обработчика. Не храните ссылки.  
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](app.md#settings) _._ [_Подробнее..._](./#zero-allocation)

## IP

Возвращает удаленный IP адрес запроса.

{% code title="Signature" %}
```go
c.IP() string
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.IP() // "127.0.0.1"
})
```
{% endcode %}

## IPs

Возвращает массив IP адресов, указанных в заголовке запроса [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For).

{% code title="Signature" %}
```go
c.IPs() []string
```
{% endcode %}

{% code title="Example" %}
```go
// X-Forwarded-For: proxy1, 127.0.0.1, proxy3

app.Get("/", func(c *fiber.Ctx) {
  c.IPs() // ["proxy1", "127.0.0.1", "proxy3"]
})
```
{% endcode %}

## Is

Возвращает подходящий **тип содержимого**, если поле заголовка [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) входящего запроса соответствует типу [MIME](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types), указанному параметром типа.

{% hint style="info" %}
Если запрос **не** имеет тела, то он возвращает **false**.
{% endhint %}

{% code title="Signature" %}
```go
c.Is(t string) bool
```
{% endcode %}

{% code title="Example" %}
```go
// Content-Type: text/html; charset=utf-8

app.Get("/", func(c *fiber.Ctx) {
  c.Is("html")  // true
  c.Is(".html") // true
  c.Is("json")  // false
})
```
{% endcode %}

## JSON

Преобразует любой **interface** или **string** в JSON, используя [Jsoniter](https://github.com/json-iterator/go).

{% hint style="info" %}
JSON, также, устанавливает заголовок содержимого на **application/json**.
{% endhint %}

{% code title="Signature" %}
```go
c.JSON(v interface{}) error
```
{% endcode %}

{% code title="Example" %}
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

  if err := c.JSON(data); err != nil {
    c.Status(500).Send(err)
    return
  }
  // => Content-Type: application/json
  // => "{"Name": "Grame", "Age": 20}"

  if err := c.JSON(fiber.Map{
    "name": "Grame",
    "age": 20,
  }); err != nil {
    c.Status(500).Send(err)
    return
  }
  // => Content-Type: application/json
  // => "{"name": "Grame", "age": 20}"
})
```
{% endcode %}

## JSONP

Отправляет JSON ответ с поддержкой JSONP. Этот метод идентичен [JSON](ctx.md#json), но он поддерживает обратный вызов (callback) JSONP. По умолчанию, просто вызывается имя обратного вызова (callback).

Переопределить это, указав **именованную строку** метода.

{% code title="Signature" %}
```go
c.JSONP(v interface{}, callback ...string) error
```
{% endcode %}

{% code title="Example" %}
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
{% endcode %}

## Links

Присоединяется к ссылкам, за которыми следует свойство для заполнения поля заголовка ответа [Link](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Link).

{% code title="Signature" %}
```go
c.Links(link ...string)
```
{% endcode %}

{% code title="Example" %}
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
{% endcode %}

## Locals

Метод, который хранит строковые переменные (видимые в запросе), и поэтому доступен только для маршрутов, соответствующих запросу.

{% hint style="success" %}
Это полезно, если вы хотите передать **специфические** данные следующему middleware.
{% endhint %}

{% code title="Signature" %}
```go
c.Locals(key string, value ...interface{}) interface{}
```
{% endcode %}

{% code title="Example" %}
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
{% endcode %}

## Location

Устанавливает ответ HTTP-заголовка [Location](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) к указанному параметру пути.

{% code title="Signature" %}
```go
c.Location(path string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  c.Location("http://example.com")
  c.Location("/foo/bar")
})
```
{% endcode %}

## Method

Содержит строку, соответствующую методу HTTP-запроса: `GET`, `POST`, `PUT` и так далее.  
При желании вы можете переопределить метод путём передачи строки.

{% code title="Signature" %}
```go
c.Method(override ...string) string
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  c.Method() // "POST"
})
```
{% endcode %}

## MultipartForm

Для доступа к множественным элементам, вы можете разобрать бинарный файл с помощью `MultipartForm()`. Это возвращает `map[string][]string`, поэтому значение с таким ключом будет слайсом строки.

{% code title="Signature" %}
```go
c.MultipartForm() (*multipart.Form, error)
```
{% endcode %}

{% code title="Example" %}
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

    // Loop through files:
    for _, file := range files {
      fmt.Println(file.Filename, file.Size, file.Header["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      // Save the files to disk:
      c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
    }
  }
})
```
{% endcode %}

## Next

Когда **Next** вызывается, он выполняет следующий метод в стеке, соответствующий текущему маршруту. Вы можете передать структуру ошибки внутри метода для обработки пользовательских ошибок.

{% code title="Signature" %}
```go
c.Next(err ...error)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  fmt.Println("1st route!")
  c.Next()
})

app.Get("*", func(c *fiber.Ctx) {
  fmt.Println("2nd route!")
  c.Next(fmt.Errorf("Some error"))
})

app.Get("/", func(c *fiber.Ctx) {
  fmt.Println(c.Error()) // => "Some error"
  fmt.Println("3rd route!")
  c.Send("Hello, World!")
})
```
{% endcode %}

## OriginalURL

Содержит исходный URL запроса.

{% code title="Signature" %}
```go
c.OriginalURL() string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/search?q=something

app.Get("/", func(c *fiber.Ctx) {
  c.OriginalURL() // "/search?q=something"
})
```
{% endcode %}

> _Возвращаемое значение допустимо только внутри обработчика. Не храните ссылки.  
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](app.md#settings) _._ [_Подробнее..._](./#zero-allocation)

## Params

Можно использовать метод для получения параметров маршрута.

{% hint style="info" %}
По умолчанию пустая строка \(`""`\), если параметра **не** существует.
{% endhint %}

{% code title="Signature" %}
```go
c.Params(param string) string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/user/fenny

app.Get("/user/:name", func(c *fiber.Ctx) {
  c.Params("name") // "fenny"
})
```
{% endcode %}

> _Возвращаемое значение допустимо только внутри обработчика. Не храните ссылки.  
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](app.md#settings) _._ [_Подробнее..._](./#zero-allocation)\_\_

## Path

Содержит часть пути URL-адреса. При желании, вы можете переопределить путь через передачу строки.

{% code title="Signature" %}
```go
c.Path(override ...string) string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/users?sort=desc

app.Get("/users", func(c *fiber.Ctx) {
  c.Path() // "/users"
})
```
{% endcode %}

## Protocol

Содержит строку протокола запроса: `http` или `https` для **TLS** запросов.

{% code title="Signature" %}
```go
c.Protocol() string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com

app.Get("/", func(c *fiber.Ctx) {
  c.Protocol() // "http"
})
```
{% endcode %}

## Query

Это свойство представляет собой объект, содержащий свойство для каждого параметра строки запроса в маршруте.

{% hint style="info" %}
Если **нет** строки запроса, то он возвращает **пустую строку**.
{% endhint %}

{% code title="Signature" %}
```go
c.Query(parameter string) string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/shoes?order=desc&brand=nike

app.Get("/", func(c *fiber.Ctx) {
  c.Query("order") // "desc"
  c.Query("brand") // "nike"
})
```
{% endcode %}

> _Возвращаемое значение допустимо только внутри обработчика. Не храните ссылки.  
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](app.md#settings) _._ [_Подробнее..._](./#zero-allocation)

## Range

Возвращается структура, передающая тип и слайс диапазона.

{% code title="Signature" %}
```go
c.Range(int size)
```
{% endcode %}

{% code title="Example" %}
```go
// Range: bytes=500-700, 700-900
app.Get("/", func(c *fiber.Ctx) {
  b := c.Range(1000)
  if b.Type == "bytes" {
      for r := range r.Ranges {
      fmt.Println(r)
      // [500, 700]
    }
  }
})
```
{% endcode %}

## Redirect

Перенаправляет на URL, полученный от указанного пути (с указанным статусом). Также, возвращает положительное целое число, соответствующее HTTP-коду состояния.

{% hint style="info" %}
Если **не** указан, то статус по умолчанию **302 Found**.
{% endhint %}

{% code title="Signature" %}
```go
c.Redirect(path string, status ...int)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Redirect("/foo/bar")
  c.Redirect("../login")
  c.Redirect("http://example.com")
  c.Redirect("http://example.com", 301)
})
```
{% endcode %}

## Render

Отображает шаблон с данными и отправляет ответ `text/html`. По умолчанию, метод `Render` использует стандартный [**движок шаблонов Go**](https://golang.org/pkg/html/template/). Если вы хотите использовать другой движок, то, пожалуйста, посмотрите примеры в [**Template middleware**](middleware.md#template).

{% code title="Signature" %}
```go
c.Render(file string, data interface{}) error
```
{% endcode %}

## Route

Содержит соответствующую структуру [Route](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route).

{% code title="Signature" %}
```go
c.Route() *Route
```
{% endcode %}

{% code title="Example" %}
```go
// http://localhost:8080/hello

app.Get("/hello", func(c *fiber.Ctx) {
  r := c.Route()
  fmt.Println(r.Method, r.Path, r.Params, r.Regexp, r.Handler)
})

app.Post("/:api?", func(c *fiber.Ctx) {
  c.Route()
  // => {GET /hello [] nil 0x7b49e0}
})
```
{% endcode %}

## SaveFile

Метод используется для сохранения **любого** файла с multipart на диск.

{% code title="Signature" %}
```go
c.SaveFile(fh *multipart.FileHeader, path string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  // Parse the multipart form:
  if form, err := c.MultipartForm(); err == nil {
    // => *multipart.Form

    // Get all files from "documents" key:
    files := form.File["documents"]
    // => []*multipart.FileHeader

    // Loop through files:
    for _, file := range files {
      fmt.Println(file.Filename, file.Size, file.Header["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      // Save the files to disk:
      c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
    }
  }
})
```
{% endcode %}

## Secure

Логическое свойство `true`, если установлено соединение **TLS**.

{% code title="Signature" %}
```go
c.Secure() bool
```
{% endcode %}

{% code title="Example" %}
```go
// Secure() method is equivalent to:
c.Protocol() == "https"
```
{% endcode %}

## Send

Устанавливает тело HTTP-ответа. Отправляемые данные в методе **Send** могут быть любого типа.

{% hint style="warning" %}
Send **не** добавляет данные, как [Write](https://fiber.wiki/context#write) метод.
{% endhint %}

{% code title="Signature" %}
```go
c.Send(body ...interface{})
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")         // => "Hello, World!"
  c.Send([]byte("Hello, World!")) // => "Hello, World!"
  c.Send(123)                     // => 123
})
```
{% endcode %}

Fiber also provides `SendBytes` ,`SendString` and `SendStream` methods for raw inputs.

{% hint style="success" %}
Используйте это, если **не требуется утверждение типа**. Рекомендуется для **ускорения** производительности.
{% endhint %}

{% code title="Signature" %}
```go
c.SendBytes(b []byte)
c.SendString(s string)
c.SendStream(r io.Reader, s ...int)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendByte([]byte("Hello, World!"))
  // => "Hello, World!"

  c.SendString("Hello, World!")
  // => "Hello, World!"

  c.SendStream(bytes.NewReader([]byte("Hello, World!")))
  // => "Hello, World!"
})
```
{% endcode %}

## SendFile

Передает файл из заданного пути. Устанавливает поле HTTP-заголовка [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) на основе расширения **имен файлов**.

{% hint style="warning" %}
Метод использует **gzip** по умолчанию. Установите его в **true** для отключения.
{% endhint %}

{% code title="Signature" %}
```go
c.SendFile(path string, compress ...bool) error
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/not-found", func(c *fiber.Ctx) {
  if err := c.SendFile("./public/404.html"); err != nil {
    c.Next(err) // pass err to ErrorHandler
  }

  // Enable compression
  if err := c.SendFile("./static/index.html", true); err != nil {
    c.Next(err) // pass err to ErrorHandler
  }
})
```
{% endcode %}

## SendStatus

Устанавливает статусный код и корректное статусное сообщение в теле, если тело ответа **пустое**.

{% hint style="success" %}
Вы можете найти все используемые статусные коды и сообщения [здесь](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244).
{% endhint %}

{% code title="Signature" %}
```go
c.SendStatus(status int)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendStatus(415)
  // => 415 "Unsupported Media Type"

  c.Send("Hello, World!")
  c.SendStatus(415)
  // => 415 "Hello, World!"
})
```
{% endcode %}

## Set

Устанавливает поле HTTP-заголовка ответа на указанный `ключ` и `значение`.

{% code title="Signature" %}
```go
c.Set(field, value string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Set("Content-Type", "text/plain")
  // => "Content-type: text/plain"
})
```
{% endcode %}

## Stale

[https://expressjs.com/en/4x/api.html\#req.fresh](https://expressjs.com/en/4x/api.html#req.fresh)

{% hint style="info" %}
Пока что не реализовано, вы можете прислать Pull Request!
{% endhint %}

## Status

Устанавливает HTTP статус для ответа.

{% hint style="info" %}
Метод является **цепочкой**.
{% endhint %}

{% code title="Signature" %}
```go
c.Status(status int)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Status(200)
  c.Status(400).Send("Bad Request")
  c.Status(404).SendFile("./public/gopher.png")
})
```
{% endcode %}

## Subdomains

Массив субдоменов в доменном имени запроса.

Свойство оффсета поддомена приложения, которое по умолчанию имеет значение `2`, используется для определения начала сегментов поддомена.

{% code title="Signature" %}
```go
c.Subdomains(offset ...int) []string
```
{% endcode %}

{% code title="Example" %}
```go
// Host: "tobi.ferrets.example.com"

app.Get("/", func(c *fiber.Ctx) {
  c.Subdomains()  // ["ferrets", "tobi"]
  c.Subdomains(1) // ["tobi"]
})
```
{% endcode %}

## Тип

Устанавливает HTTP-заголовок [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) для MIME типа, перечисленных [здесь](https://github.com/nginx/nginx/blob/master/conf/mime.types), указанного файлом **расширения**.

{% code title="Signature" %}
```go
c.Type(t string) string
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Type(".html") // => "text/html"
  c.Type("html")  // => "text/html"
  c.Type("json")  // => "application/json"
  c.Type("png")   // => "image/png"
})
```
{% endcode %}

## Vary

Добавляет данное поле заголовка в заголовок ответа [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary). Это добавит заголовок, если он еще не в списке. В противном случае, оставляет его в текущем месте.

{% hint style="info" %}
Несколько полей **разрешены**.
{% endhint %}

{% code title="Signature" %}
```go
c.Vary(field ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Vary("Origin")     // => Vary: Origin
  c.Vary("User-Agent") // => Vary: Origin, User-Agent

  // No duplicates
  c.Vary("Origin") // => Vary: Origin, User-Agent

  c.Vary("Accept-Encoding", "Accept")
  // => Vary: Origin, User-Agent, Accept-Encoding, Accept
})
```
{% endcode %}

## Write

Добавляет **любой** входной элемент в ответ HTTP.

{% code title="Signature" %}
```go
c.Write(body ...interface{})
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Write("Hello, ")         // => "Hello, "
  c.Write([]byte("World! ")) // => "Hello, World! "
  c.Write(123)               // => "Hello, World! 123"
})
```
{% endcode %}

## XHR

Логическое свойство `true`, если поле заголовка [X-Requested-With](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) является [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), указывающее, что запрос был вызван клиентской библиотекой \(такой, как [jQuery](https://api.jquery.com/jQuery.ajax/)\).

{% code title="Signature" %}
```go
c.XHR() bool
```
{% endcode %}

{% code title="Example" %}
```go
// X-Requested-With: XMLHttpRequest

app.Get("/", func(c *fiber.Ctx) {
  c.XHR() // true
})
```
{% endcode %}

