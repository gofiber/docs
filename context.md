---
description: >-
  The Ctx struct represents the Context which hold the HTTP request and
  response. It has methods for the request query string, parameters, body, HTTP
  headers and so on.
---

# 🧠  Context

## Accepts

Checks, if the specified **extensions** or **content** **types** are acceptable.

{% hint style="info" %}
Based on the request’s [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP header.
{% endhint %}

**Signature**

```go
c.Accepts(types ...string) string
```

**Example**

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

Checks, if the specified **charset** is acceptable.

{% hint style="info" %}
Based on the request’s [Accept-Charset](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset) HTTP header.
{% endhint %}

**Signature**

```go
c.AcceptsCharsets(charsets ...string) string
```

**Example**

```go
// Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsCharsets("utf-8")                // => "utf-8"
  c.AcceptsCharsets("utf-16", "iso-8859-1") // => "iso-8859-1"
  c.AcceptsCharsets("utf-16")               // => ""
})
```

## AcceptsEncodings

Checks, if the specified **encoding** is acceptable.

{% hint style="info" %}
Based on the request’s [Accept-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) HTTP header.
{% endhint %}

**Signature**

```go
c.AcceptsEncodings(encodings ...string) string
```

**Example**

```go
// Accept-Encoding: gzip, compress;q=0.2

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsEncodings("gzip")           // => "gzip"
  c.AcceptsEncodings("compress", "br") // => "compress"
  c.AcceptsEncodings("deflate")        // => ""
})
```

## AcceptsLanguages

Checks if the specified **language** is acceptable.

{% hint style="info" %}
Based on the request’s [Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) HTTP header.
{% endhint %}

**Signature**

```go
c.AcceptsLanguages(languages ...string) string
```

**Example**

```go
// Accept-Language: en;q=0.8, nl, ru

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsLanguages("en")             // => "en"
  c.AcceptsLanguages("pt", "nl", "ru") // => "nl" "ru"
  c.AcceptsLanguages("fr")             // => ""
})
```

## Append

Appends the specified **value** to the HTTP response header field.

{% hint style="warning" %}
If the header is **not** already set, it creates the header with the specified value.
{% endhint %}

**Signature**

```go
c.Append(field, values ...string)
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Append("Link", "http://google.com", "http://localhost")
  // => Link: http://localhost, http://google.com

  c.Append("Link", "Test")
  // => Link: http://localhost, http://google.com, Test
})
```

## Attachment

Sets the HTTP response [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header field to `attachment`.

**Signature**

```go
c.Attachment(file ...string)
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Attachment()
  // => Content-Disposition: attachment

  c.Attachment("./upload/images/logo.png")
  // => Content-Disposition: attachment; filename="logo.png"
  // => Content-Type: image/png
})
```

## BaseURL

Returns base URL \(**protocol** + **host**\) as a `string`.

**Signature**

```go
c.BaseURL() string
```

**Example**

```go
// GET https://example.com/page#chapter-1

app.Get("/", func(c *fiber.Ctx) {
  c.BaseURL() // => https://example.com
})
```

## BasicAuth

Returns **username** and **password** provided in [Authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) header of request, if request uses [HTTP Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication).

**Signature**

```go
c.BasicAuth() (user, pass string, ok bool)
```

**Example**

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

## Body

Contains the **raw body** submitted in a **POST** request.

**Signature**

```go
c.Body() string
c.Body(key string) string
c.Body(key []byte) string
c.Body(func(key, value string)) func(string, string)
```

**Example**

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

Clears **all** client cookies or a specific cookie by **name** \(_by setting expire date in the past_\).

**Signature**

```go
c.ClearCookie()
c.ClearCookie(key string)
```

**Example**

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

## Cookie

Sets cookie with **name** and **value**.

**Signature**

```go
c.Cookie(name, value string)
c.Cookie(name, value string, options *Cookie{})
```

**Cookie struct**

{% hint style="warning" %}
**Expire** option will **not** be used, if **MaxAge** is set.
{% endhint %}

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

**Example**

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

## Cookies

Gets cookies.

**Signature**s

```go
c.Cookies() string
c.Cookies(key string) string
c.Cookies(key []byte) string
c.Cookies(func(key, value string)) string
```

**Example**

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

## Download

Transfers the file from path as an `attachment`.

Typically, browsers will prompt the user for download. By default, the [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header `filename=` parameter is path \(_this typically appears in the browser dialog_\).

Override this default with the **filename** parameter.

**Signature**

```go
c.Download(path, filename ...string)
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Download("./files/report-12345.pdf")
  // => Download report-12345.pdf

  c.Download("./files/report-12345.pdf", "report.pdf")
  // => Download report.pdf
})
```

## End

{% hint style="danger" %}
Planned for **Fiber** v2.
{% endhint %}

## Fasthttp

You can still **access** and use all **Fasthttp** methods and properties.

**Signature**

{% hint style="info" %}
Please read the [Fasthttp Documentation](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) for more information.
{% endhint %}

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Fasthttp.Request.Header.Method()
  // => []byte("GET")

  c.Fasthttp.Response.Write([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## Error

This contains the error information that thrown by a panic or passed via the [`Next(err)`](https://fiber.wiki/context#error) method.

#### Signature

```go
c.Error() error
```

#### Example

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

## Format

Performs content-negotiation on the [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP header. It uses [Accepts](context.md#accepts) to select a proper format.

{% hint style="info" %}
If the header is **not** specified or there is **no** proper format, **text/plain** is used.
{% endhint %}

**Signature**

```go
c.Format(body interface{})
```

**Example**

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

MultipartForm files can be retrieved by name, the **first** file from the given key is returned.

**Signature**

```go
c.FormFile(name string) (*multipart.FileHeader, error)
```

**Example**

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

MultipartForm values can be retrieved by name, the **first** value from the given key is returned.

**Signature**

```go
c.FormValue(name string) string
```

**Example**

```go
app.Post("/", func(c *fiber.Ctx) {
  // Get first value from form field "name":
  c.FormValue("name")
  // => "john" or "", if not exist
})
```

## Fresh

{% hint style="danger" %}
Planned for **Fiber** v2.
{% endhint %}

## Get

Returns the HTTP request header specified by field. The match is case-insensitive.

**Signature**

```go
c.Get(field string) string
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Get("Content-Type") // => "text/plain"
  c.Get("content-type") // => "text/plain"
  c.Get("something")    // => ""
})
```

## HeadersSent

{% hint style="danger" %}
Planned for **Fiber** v2.
{% endhint %}

## Hostname

Contains the hostname derived from the [Host](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) HTTP header.

**Signature**

```go
c.Hostname() string
```

**Example**

```go
// GET http://google.com/search

app.Get("/", func(c *fiber.Ctx) {
  c.Hostname() // => "google.com"
})
```

## IP

Returns the remote IP address of the request.

**Signature**

```go
c.IP() string
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.IP() // => "127.0.0.1"
})
```

## IPs

Returns an array of IP addresses specified in the [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) request header.

**Signature**

```go
c.IPs() []string
```

**Example**

```go
// X-Forwarded-For: proxy1, 127.0.0.1", proxy3

app.Get("/", func(c *fiber.Ctx) {
  c.IPs() // => ["proxy1", "127.0.0.1", "proxy3"]
})
```

## Is

Returns the matching **content type**, if the incoming request’s [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP header field matches the [MIME type](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types) specified by the type parameter.

{% hint style="info" %}
If the request has **no** body, it returns **false**.
{% endhint %}

**Signature**

```go
c.Is(t string) bool
```

**Example**

```go
// Content-Type: text/html; charset=utf-8

app.Get("/", func(c *fiber.Ctx) {
  c.Is("html")  // => true
  c.Is(".html") // => true
  c.Is("json")  // => false
})
```

## JSON

Converts any **interface** or **string** to JSON using [Jsoniter](https://github.com/json-iterator/go).

{% hint style="info" %}
Method also sets the content header to **application/json**.
{% endhint %}

**Signature**

```go
c.JSON(v interface{}) error
```

**Example**

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
  // => Content-Type: application/json
  // => "{"Name": "Grame", "Age": 20}"

  c.JSON("Hello, World!")
  // => Content-Type: application/json
  // => "Hello, World!"
})
```

Fiber also provides `JSONBytes` & `JSONString` methods for raw inputs.

{% hint style="success" %}
Use this, if you **don't need** JSON serialization, recommended when working with **raw** inputs.
{% endhint %}

**Signature**

```go
c.JSONBytes(b []byte) error
c.JSONString(s string) error
```

**Example**

```go
app.Get("/json", func(c *fiber.Ctx) {
  c.JSONBytes([]byte(`{"Name": "Grame", "Age": 20}`))
  // => Content-Type: application/json
  // => "{"Name": "Grame", "Age": 20}"

  c.JSONString(`{"Name": "Grame", "Age": 20}`)
  // => Content-Type: application/json
  // => "{"Name": "Grame", "Age": 20}"
})
```

## JSONP

Sends a JSON response with JSONP support. This method is identical to [JSON](context.md#json), except that it opts-in to JSONP callback support. By default, the JSONP callback name is simply callback.

Override this by passing a **named string** in the method.

**Signature**

```go
c.JSONP(v interface{}, callback ...string) error
```

**Example**

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

## Links

Joins the links followed by the property to populate the response’s [Link](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Link) HTTP header field.

**Signature**

```go
c.Links(link ...string)
```

**Example**

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

## Locals

Method that stores string variables scoped to the request and therefore available only to the routes that match the request.

{% hint style="success" %}
This is useful, if you want to pass some **specific values** to the next middleware.
{% endhint %}

**Signature**

```go
c.Locals(key string, value ...interface{}) interface{}
```

**Example**

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

{% hint style="info" %}
You can put any type inside the **Locals**, but don't forget to convert it back, when you are using the variable.
{% endhint %}

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

## Location

Sets the response [Location](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) HTTP header to the specified path parameter.

**Signature**

```go
c.Location(path string)
```

**Example**

```go
app.Post("/", func(c *fiber.Ctx) {
  c.Location("http://example.com")
  c.Location("/foo/bar")
})
```

## Method

Contains a string corresponding to the HTTP method of the request: GET, POST, PUT and so on.

**Signature**

```go
c.Method() string
```

**Example**

```go
app.Post("/", func(c *fiber.Ctx) {
  c.Method() // => "POST"
})
```

## MultipartForm

To access multipart form entries, you can parse the binary with `MultipartForm()`. This returns a `map[string][]string`, so given a key the value will be a string slice.

**Signature**

```go
c.MultipartForm() (*multipart.Form, error)
```

**Example**

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

## Next

When **Next** is called, it executes the next method in the stack that matches the current route. You can pass an error struct within the method for custom error handling.

**Signature**

```go
c.Next(err ...error)
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  fmt.Printl("1st route!")
  c.Next()
})

app.Get("*", func(c *fiber.Ctx) {
  fmt.Printl("2nd route!")
  c.Next(fmt.Errorf("Some error"))
})

app.Get("/", func(c *fiber.Ctx) {
  fmt.Println(c.Error()) // => "Some error"
  fmt.Println("3rd route!")
  c.Send("Hello, World!")
})
```

## OriginalURL

Contains the original request URL.

**Signature**

```go
c.OriginalURL() string
```

**Example**

```go
// GET http://example.com/search?q=something

app.Get("/", func(c *fiber.Ctx) {
  c.OriginalURL() // => "/search?q=something"
})
```

## Params

Method can be used to get the route parameters.

{% hint style="info" %}
Defaults to empty string \(`""`\), if the param **doesn't** exist.
{% endhint %}

**Signature**

```go
c.Params(param string) string
```

**Example**

```go
// GET http://example.com/user/tj

app.Get("/user/:name", func(c *fiber.Ctx) {
  c.Params("name") // => "tj"
})
```

## Path

Contains the path part of the request URL.

**Signature**

```go
c.Path() string
```

**Example**

```go
// GET http://example.com/users?sort=desc

app.Get("/users", func(c *fiber.Ctx) {
  c.Path() // => "/users"
})
```

## Protocol

Contains the request protocol string: `http` or `https` for **TLS** requests.

**Signature**

```go
c.Protocol() string
```

**Example**

```go
// GET http://example.com

app.Get("/", func(c *fiber.Ctx) {
  c.Protocol() // => "http"
})
```

## Query

This property is an object containing a property for each query string parameter in the route.

{% hint style="info" %}
If there is **no** query string, it returns an **empty string**.
{% endhint %}

**Signature**

```go
c.Query(parameter string) string
```

**Example**

```go
// GET http://example.com/shoes?order=desc&brand=nike

app.Get("/", func(c *fiber.Ctx) {
  c.Query("order") // => "desc"
  c.Query("brand") // => "nike"
})
```

## Range

{% hint style="danger" %}
Planned for **Fiber** v2.
{% endhint %}

## Redirect

Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code.

{% hint style="info" %}
If **not** specified, status defaults to **302 Found**.
{% endhint %}

**Signature**

```go
c.Redirect(path string, status ...int)
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Redirect("/foo/bar")
  c.Redirect("../login")
  c.Redirect("http://example.com")
  c.Redirect("http://example.com", 301)
})
```

## Render

{% hint style="danger" %}
Planned for **Fiber** v2.
{% endhint %}

## Route

Contains the currently-matched [Route](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route) struct.

{% hint style="warning" %}
Use this method **only** for debugging.
{% endhint %}

**Signature**

```go
c.Route() *Route
```

**Example**

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

## SaveFile

Method is used to save **any** multipart file to disk.

**Signature**

```go
c.SaveFile(fh *multipart.FileHeader, path string)
```

**Example**

{% hint style="success" %}
You can see a working example at [MultipartForm](https://fiber.wiki/context#multipartform) method.
{% endhint %}

## Secure

A boolean property, that is `true` , if a **TLS** connection is established.

**Signature**

```go
c.Secure() bool
```

**Example**

```go
// Secure() method is equivalent to:
c.Protocol() == "https"
```

## Send

Sets the HTTP response body. The **Send** body can be of any type.

{% hint style="warning" %}
Send **doesn't** append like the [Write](https://fiber.wiki/context#write) method.
{% endhint %}

**Signature**

```go
c.Send(body ...interface{})
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")         // => "Hello, World!"
  c.Send([]byte("Hello, World!")) // => "Hello, World!"
  c.Send(123)                     // => 123
})
```

Fiber also provides `SendBytes` & `SendString` methods for raw inputs.

{% hint style="success" %}
Use this, if you **don't need** type assertion, recommended for **faster** performance.
{% endhint %}

**Signature**

```go
c.SendBytes(b []byte)
c.SendString(s string)
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendByte([]byte("Hello, World!"))
  // => "Hello, World!"

  c.SendString("Hello, World!")
  // => "Hello, World!"
})
```

## SendFile

Transfers the file from the given path. Sets the [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) response HTTP header field based on the **filenames** extension.

{% hint style="info" %}
Method use **gzipping** by default, set it to **false** to disable.
{% endhint %}

**Signature**

```go
c.SendFile(path string, gzip ...bool)
```

**Example**

```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendFile("./public/404.html")

  // Disable gzipping:
  c.SendFile("./static/index.html", false)
})
```

## SendStatus

Sets the status code and the correct status message in the body, if the response body is **empty**.

{% hint style="success" %}
You can find all used status codes and messages [here](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244).
{% endhint %}

**Signature**

```go
c.SendStatus(status int)
```

**Example**

```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendStatus(415)
  // 415 "Unsupported Media Type"

  c.Send("Hello, World!")
  c.SendStatus(415)
  // 415 "Hello, World!"
})
```

## Set

Sets the response’s HTTP header field to `value`.

**Signature**

```go
c.Set(field, value string)
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Set("Content-Type", "text/plain")
  // => "Content-type: text/plain"
})
```

## SignedCookies

{% hint style="danger" %}
Planned for **Fiber** v2.
{% endhint %}

## Stale

{% hint style="danger" %}
Planned for **Fiber** v2.
{% endhint %}

## Status

Sets the HTTP status for the response.

{% hint style="info" %}
Method is a **chain able**.
{% endhint %}

**Signature**

```go
c.Status(status int)
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Status(200)
  c.Status(400).Send("Bad Request")
  c.Status(404).SendFile("./public/gopher.png")
})
```

## Subdomains

An array of subdomains in the domain name of the request.

The application property subdomain offset, which defaults to `2`, is used for determining the beginning of the subdomain segments.

**Signature**

```go
c.Subdomains(offset ...int) []string
```

**Example**

```go
// Host: "tobi.ferrets.example.com"

app.Get("/", func(c *fiber.Ctx) {
  c.Subdomains()  // => ["ferrets", "tobi"]
  c.Subdomains(1) // => ["tobi"]
})
```

## Type

Sets the [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP header to the MIME type listed [here](https://github.com/nginx/nginx/blob/master/conf/mime.types) specified by the file **extension**.

**Signature**

```go
c.Type(t string) string
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Type(".html") // => "text/html"
  c.Type("html")  // => "text/html"
  c.Type("json")  // => "application/json"
  c.Type("png")   // => "image/png"
})
```

## Vary

Adds the given header field to the [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) response header. This will append the header, if not already listed, otherwise leaves it listed in the current location.

{% hint style="info" %}
Multiple fields are **allowed**.
{% endhint %}

**Signature**

```go
c.Vary(field ...string)
```

**Example**

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

## Write

Appends **any** input to the HTTP body response.

**Signature**

```go
c.Write(body ...interface{})
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Write("Hello, ")         // => "Hello, "
  c.Write([]byte("World! ")) // => "Hello, World! "
  c.Write(123)               // => "Hello, World! 123"
})
```

## XHR

A Boolean property, that is `true`, if the request’s [X-Requested-With](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) header field is [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), indicating that the request was issued by a client library \(such as [jQuery](https://api.jquery.com/jQuery.ajax/)\).

**Signature**

```go
c.XHR() bool
```

**Example**

```go
// X-Requested-With: XMLHttpRequest

app.Get("/", func(c *fiber.Ctx) {
  c.XHR() // => true
})
```

## XML

XML sets the header to `application/xml` and unmarshals your interface to XML.

**Signature**

```go
c.XML(xml interface{}) error
```

**Example**

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
