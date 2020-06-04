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
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](application.md#settings) _._ [_Подробнее..._](./#zero-allocation)

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
// Имена полей должны начинаться с прописной буквы
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

// Запуск тестов следующими командами:

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

Возвращает context.Context, который несет крайний срок, сигнал отмены и другие значения через границы API.

**Signature**

```go
c.Context() context.Context
```

## Cookie

Установить cookie

**Signature**

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
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](application.md#settings) _._ [_Подробнее..._](./#zero-allocation)

## Download

Передаёт файл из пути в качестве `вложения` (attachment).

Как правило, браузеры запрашивают скачивание у пользователя. По умолчанию, параметр [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header `filename=` – это путь к файлу \(_обычно, отображается в диалоговом окне браузера_\).

Переопределить значение по умолчанию с помощью параметра **filename**.

{% code title="Signature" %}
```go
c.Download(path, filename ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Download("./files/report-12345.pdf")
  // => Download report-12345.pdf

  c.Download("./files/report-12345.pdf", "report.pdf")
  // => Download report.pdf
})
```
{% endcode %}

## Fasthttp

Вы все еще можете **получить доступ** и использовать все методы и свойства **Fasthttp**.

**Signature**

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

Выполняет согласование содержимого [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) в HTTP-заголовке. Он использует [Accepts](context.md#accepts) для выбора соответствующего формата.

{% hint style="info" %}
Если заголовок **не** указан или **нет** подходящего формат, тогда используется **text/plain**.
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

MultipartForm files can be retrieved by name, the **first** file from the given key is returned.

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

Any form values can be retrieved by name, the **first** value from the given key is returned.

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
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](application.md#settings) _._ [_Подробнее..._](./#zero-allocation)

## Fresh

[https://expressjs.com/en/4x/api.html\#req.fresh](https://expressjs.com/en/4x/api.html#req.fresh)

{% hint style="info" %}
Not implemented yet, pull requests are welcome!
{% endhint %}

## Get

Returns the HTTP request header specified by field.

{% hint style="success" %}
The match is **case-insensitive**.
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
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](application.md#settings) _._ [_Подробнее..._](./#zero-allocation)

## Hostname

Contains the hostname derived from the [Host](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) HTTP header.

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
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](application.md#settings) _._ [_Подробнее..._](./#zero-allocation)

## IP

Returns the remote IP address of the request.

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

Returns an array of IP addresses specified in the [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) request header.

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

Returns the matching **content type**, if the incoming request’s [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP header field matches the [MIME type](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types) specified by the type parameter.

{% hint style="info" %}
If the request has **no** body, it returns **false**.
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

Converts any **interface** or **string** to JSON using [Jsoniter](https://github.com/json-iterator/go).

{% hint style="info" %}
JSON also sets the content header to **application/json**.
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

Sends a JSON response with JSONP support. This method is identical to [JSON](context.md#json), except that it opts-in to JSONP callback support. By default, the callback name is simply callback.

Override this by passing a **named string** in the method.

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

Joins the links followed by the property to populate the response’s [Link](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Link) HTTP header field.

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

Method that stores string variables scoped to the request and therefore available only to the routes that match the request.

{% hint style="success" %}
This is useful, if you want to pass some **specific** data to the next middleware.
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

Sets the response [Location](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) HTTP header to the specified path parameter.

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

Contains a string corresponding to the HTTP method of the request: `GET`, `POST`, `PUT` and so on.  
Optionally, you could override the method by passing a string.

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

To access multipart form entries, you can parse the binary with `MultipartForm()`. This returns a `map[string][]string`, so given a key the value will be a string slice.

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

When **Next** is called, it executes the next method in the stack that matches the current route. You can pass an error struct within the method for custom error handling.

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

Contains the original request URL.

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
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](application.md#settings) _._ [_Подробнее..._](./#zero-allocation)

## Params

Method can be used to get the route parameters.

{% hint style="info" %}
Defaults to empty string \(`""`\), if the param **doesn't** exist.
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

> _Возвращаемое значение допустимо только внутри обработчика. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](application.md#settings) _setting instead._ [_Read more..._](./#zero-allocation)\_\_

## Path

Contains the path part of the request URL. Optionally, you could override the path by passing a string.

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

Contains the request protocol string: `http` or `https` for **TLS** requests.

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

This property is an object containing a property for each query string parameter in the route.

{% hint style="info" %}
If there is **no** query string, it returns an **empty string**.
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
> Сделайте копии или используйте параметр_ [_**`Immutable`**_](application.md#settings) _._ [_Подробнее..._](./#zero-allocation)

## Range

An struct containg the type and a slice of ranges will be returned.

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

Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code.

{% hint style="info" %}
If **not** specified, status defaults to **302 Found**.
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

Renders a template with data and sends a `text/html` response. By default `Render` uses the default [**Go Template engine**](https://golang.org/pkg/html/template/). If you want to use another engine, please take a look at our [**Template middleware**](middleware.md#template).

{% code title="Signature" %}
```go
c.Render(file string, data interface{}) error
```
{% endcode %}

## Route

Contains the matched [Route](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route) struct.

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

Method is used to save **any** multipart file to disk.

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

A boolean property, that is `true` , if a **TLS** connection is established.

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

Sets the HTTP response body. The **Send** body can be of any type.

{% hint style="warning" %}
Send **doesn't** append like the [Write](https://fiber.wiki/context#write) method.
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
Use this, if you **don't need** type assertion, recommended for **faster** performance.
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

Transfers the file from the given path. Sets the [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) response HTTP header field based on the **filenames** extension.

{% hint style="warning" %}
Method use **gzipping** by default, set it to **true** to disable.
{% endhint %}

{% code title="Signature" %}
```go
c.SendFile(path string, gzip ...bool)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendFile("./public/404.html")

  // Disable gzipping:
  c.SendFile("./static/index.html", true)
})
```
{% endcode %}

## SendStatus

Sets the status code and the correct status message in the body, if the response body is **empty**.

{% hint style="success" %}
You can find all used status codes and messages [here](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244).
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

Sets the response’s HTTP header field to the specified `key`, `value`.

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
Not implemented yet, pull requests are welcome!
{% endhint %}

## Status

Sets the HTTP status for the response.

{% hint style="info" %}
Method is a **chainable**.
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

An array of subdomains in the domain name of the request.

The application property subdomain offset, which defaults to `2`, is used for determining the beginning of the subdomain segments.

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

Sets the [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP header to the MIME type listed [here](https://github.com/nginx/nginx/blob/master/conf/mime.types) specified by the file **extension**.

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

Adds the given header field to the [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) response header. This will append the header, if not already listed, otherwise leaves it listed in the current location.

{% hint style="info" %}
Multiple fields are **allowed**.
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

Appends **any** input to the HTTP body response.

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

A Boolean property, that is `true`, if the request’s [X-Requested-With](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) header field is [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), indicating that the request was issued by a client library \(such as [jQuery](https://api.jquery.com/jQuery.ajax/)\).

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

