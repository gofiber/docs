---
id: ctx
title: 🧠 Ctx
description: >-
  The Ctx struct represents the Context which hold the HTTP request and
  response. It has methods for the request query string, parameters, body, HTTP
  headers, and so on.
sidebar_position: 2
---

## Accepts

Checks, if the specified **extensions** or **content** **types** are acceptable.

:::info
Based on the request’s [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP header.
:::

```go title="Signature"
c.Accepts(types ...string)                 string
c.AcceptsCharsets(charsets ...string)      string
c.AcceptsEncodings(encodings ...string)    string
c.AcceptsLanguages(langs ...string)        string
```

```go title="Example"
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

Fiber provides similar functions for the other accept headers.

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

Appends the specified **value** to the HTTP response header field.

:::caution
If the header is **not** already set, it creates the header with the specified value.
:::

```go title="Signature"
c.Append(field, values ...string)
```

```go title="Example"
app.Get("/", func(c *fiber.Ctx) {
  c.Append("Link", "http://google.com", "http://localhost")
  // => Link: http://localhost, http://google.com

  c.Append("Link", "Test")
  // => Link: http://localhost, http://google.com, Test
})
```

## Attachment

Sets the HTTP response [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header field to `attachment`.

```go title="Signature"
c.Attachment(file ...string)
```

```go title="Example"
app.Get("/", func(c *fiber.Ctx) {
  c.Attachment()
  // => Content-Disposition: attachment

  c.Attachment("./upload/images/logo.png")
  // => Content-Disposition: attachment; filename="logo.png"
  // => Content-Type: image/png
})
```

## App

Returns the [\*App](app#new) reference so you could easily access all application settings.

```go title="Signature"
c.App() *App
```

```go title="Example"
app.Get("/bodylimit", func(c *fiber.Ctx) {
  bodylimit := c.App().Settings.BodyLimit
  c.Send(bodylimit)
})
```

## BaseURL

Returns the base URL \(**protocol** + **host**\) as a `string`.

```go title="Signature"
c.BaseURL() string
```

```go title="Example"
// GET https://example.com/page#chapter-1

app.Get("/", func(c *fiber.Ctx) {
  c.BaseURL() // https://example.com
})
```

## Body

Returns the request **body**.

```go title="Signature"
c.Body() string
```

```go title="Example"
// curl -X POST http://localhost:8080 -d user=john

app.Post("/", func(c *fiber.Ctx) {
  // Get raw body from POST request:
  c.Body() // user=john
})
```

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app#settings) _setting instead._ [_Read more..._](../#zero-allocation)

## BodyParser

Binds the request body to a struct. `BodyParser` supports decoding query parameters and the following content types based on the `Content-Type` header:

* `application/json`
* `application/xml`
* `application/x-www-form-urlencoded`
* `multipart/form-data`

```go title="Signature"
c.BodyParser(out interface{}) error
```

```go title="Example"
// Field names should start with an uppercase letter
type Person struct {
    Name string `json:"name" xml:"name" form:"name"`
    Pass string `json:"pass" xml:"pass" form:"pass"`
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

## ClearCookie

Expire a client cookie \(_or all cookies if left empty\)_

```go title="Signature"
c.ClearCookie(key ...string)
```

```go title="Example"
app.Get("/", func(c *fiber.Ctx) {
  // Clears all cookies:
  c.ClearCookie()

  // Expire specific cookie by name:
  c.ClearCookie("user")

  // Expire multiple cookies by names:
  c.ClearCookie("token", "session", "track_id", "version")
})
```

:::caution
Web browsers and other compliant clients will only clear the cookie if the given options are identical to those when creating the cookie, excluding expires and maxAge. ClearCookie will not set these values for you - a technique similar to the one shown below should be used to ensure your cookie is deleted.
:::

```go title="Example"
app.Get("/set", func(c *fiber.Ctx) {
    c.Cookie(&fiber.Cookie{
        Name:     "token",
        Value:    "randomvalue",
        Expires:  time.Now().Add(24 * time.Hour),
        HTTPOnly: true,
        SameSite: "lax",
    })
})

app.Get("/delete", func(c *fiber.Ctx) {
    c.Cookie(&fiber.Cookie{
        Name:     "token",
        // Set expiry date to the past
        Expires:  time.Now().Add(-(time.Hour * 2)),
        HTTPOnly: true,
        SameSite: "lax",
    })
})
```

## Context

Returns context.Context that carries a deadline, a cancellation signal, and other values across API boundaries.

**Signature**

```go
c.Context() context.Context
```

## Cookie

Set cookie

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

```go title="Example"
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

## Cookies

Get cookie value by key, you could pass an optional default value that will be returned if the cookie key does not exist.

**Signatures**

```go
c.Cookies(key string, defaultValue ...string) string
```

```go title="Example"
app.Get("/", func(c *fiber.Ctx) {
  // Get cookie by key:
  c.Cookies("name")         // "john"
  c.Cookies("empty", "doe") // "doe"
})
```

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app#settings) _setting instead._ [_Read more..._](../#zero-allocation)

## Download

Transfers the file from path as an `attachment`.

Typically, browsers will prompt the user to download. By default, the [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header `filename=` parameter is the file path \(_this typically appears in the browser dialog_\).

Override this default with the **filename** parameter.

```go title="Signature"
c.Download(path, filename ...string) error
```

```go title="Example"
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

## Fasthttp

You can still **access** and use all **Fasthttp** methods and properties.

**Signature**

:::info
Please read the [Fasthttp Documentation](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) for more information.
:::

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

This contains the error information that thrown by a panic or passed via the [`Next(err)`](https://github.com/gofiber/docs/tree/8d965e1e05fb67f965934586c78335ef29f52128/context/README.md#error) method.

```go title="Signature"
c.Error() error
```

```go title="Example"
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

Performs content-negotiation on the [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP header. It uses [Accepts](#accepts) to select a proper format.

:::info
If the header is **not** specified or there is **no** proper format, **text/plain** is used.
:::

```go title="Signature"
c.Format(body interface{})
```

```go title="Example"
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

## FormFile

MultipartForm files can be retrieved by name, the **first** file from the given key is returned.

```go title="Signature"
c.FormFile(name string) (*multipart.FileHeader, error)
```

```go title="Example"
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

Any form values can be retrieved by name, the **first** value from the given key is returned.

```go title="Signature"
c.FormValue(name string) string
```

```go title="Example"
app.Post("/", func(c *fiber.Ctx) {
  // Get first value from form field "name":
  c.FormValue("name")
  // => "john" or "" if not exist
})
```

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app#settings) _setting instead._ [_Read more..._](../#zero-allocation)

## Fresh

[https://expressjs.com/en/4x/api.html\#req.fresh](https://expressjs.com/en/4x/api.html#req.fresh)

:::info
Not implemented yet, pull requests are welcome!
:::

## Get

Returns the HTTP request header specified by the field.

:::tip
The match is **case-insensitive**.
:::

```go title="Signature"
c.Get(field string) string
```

```go title="Example"
app.Get("/", func(c *fiber.Ctx) {
  c.Get("Content-Type") // "text/plain"
  c.Get("CoNtEnT-TypE") // "text/plain"
  c.Get("something")    // ""
})
```

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app#settings) _setting instead._ [_Read more..._](../#zero-allocation)

## Hostname

Returns the hostname derived from the [Host](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) HTTP header.

```go title="Signature"
c.Hostname() string
```

```go title="Example"
// GET http://google.com/search

app.Get("/", func(c *fiber.Ctx) {
  c.Hostname() // "google.com"
})
```

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app#settings) _setting instead._ [_Read more..._](../#zero-allocation)

## IP

Returns the remote IP address of the request.

```go title="Signature"
c.IP() string
```

```go title="Example"
app.Get("/", func(c *fiber.Ctx) {
  c.IP() // "127.0.0.1"
})
```

## IPs

Returns an array of IP addresses specified in the [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) request header.

```go title="Signature"
c.IPs() []string
```

```go title="Example"
// X-Forwarded-For: proxy1, 127.0.0.1, proxy3

app.Get("/", func(c *fiber.Ctx) {
  c.IPs() // ["proxy1", "127.0.0.1", "proxy3"]
})
```

## Is

Returns the matching **content type**, if the incoming request’s [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP header field matches the [MIME type](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types) specified by the type parameter.

:::info
If the request has **no** body, it returns **false**.
:::

```go title="Signature"
c.Is(t string) bool
```

```go title="Example"
// Content-Type: text/html; charset=utf-8

app.Get("/", func(c *fiber.Ctx) {
  c.Is("html")  // true
  c.Is(".html") // true
  c.Is("json")  // false
})
```

## JSON

Converts any **interface** or **string** to JSON using [Jsoniter](https://github.com/json-iterator/go).

:::info
JSON also sets the content header to **application/json**.
:::

```go title="Signature"
c.JSON(v interface{}) error
```

```go title="Example"
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

## JSONP

Sends a JSON response with JSONP support. This method is identical to [JSON](#json), except that it opts-in to JSONP callback support. By default, the callback name is simply callback.

Override this by passing a **named string** in the method.

```go title="Signature"
c.JSONP(v interface{}, callback ...string) error
```

```go title="Example"
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

```go title="Signature"
c.Links(link ...string)
```

```go title="Example"
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

A method that stores variables scoped to the request and, therefore, are available only to the routes that match the request.

:::tip
This is useful if you want to pass some **specific** data to the next middleware.
:::

```go title="Signature"
c.Locals(key string, value ...interface{}) interface{}
```

```go title="Example"
app.Use(func(c *fiber.Ctx) {
  c.Locals("user", "admin")
  c.Next()
})

app.Get("/admin", func(c *fiber.Ctx) {
  if c.Locals("user") == "admin" {
    c.Status(200).Send("Welcome, admin!")
  } else {
    c.SendStatus(403) // => 403 Forbidden
  }
})
```

## Location

Sets the response [Location](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) HTTP header to the specified path parameter.

```go title="Signature"
c.Location(path string)
```

```go title="Example"
app.Post("/", func(c *fiber.Ctx) {
  c.Location("http://example.com")
  c.Location("/foo/bar")
})
```

## Method

Returns a string corresponding to the HTTP method of the request: `GET`, `POST`, `PUT`, and so on.  
Optionally, you could override the method by passing a string.

```go title="Signature"
c.Method(override ...string) string
```

```go title="Example"
app.Post("/", func(c *fiber.Ctx) {
  c.Method() // "POST"
})
```

## MultipartForm

To access multipart form entries, you can parse the binary with `MultipartForm()`. This returns a `map[string][]string`, so given a key, the value will be a string slice.

```go title="Signature"
c.MultipartForm() (*multipart.Form, error)
```

```go title="Example"
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

## Next

When **Next** is called, it executes the next method in the stack that matches the current route. You can pass an error struct within the method that will end the chaining and call the [error handler](https://github.com/gofiber/docs/tree/aa2680660c0b661b8e9d215b32cb03e766277131/api/error-handling.md).

```go title="Signature"
c.Next(err ...error)
```

```go title="Example"
app.Get("/", func(c *fiber.Ctx) {
  fmt.Println("1st route!")
  c.Next()
})

app.Get("*", func(c *fiber.Ctx) {
  fmt.Println("2nd route!")
  c.Next()
})

app.Get("/", func(c *fiber.Ctx) {
  fmt.Println("3rd route!")
  c.Send("Hello, World!")
})
```

## OriginalURL

Returns the original request URL.

```go title="Signature"
c.OriginalURL() string
```

```go title="Example"
// GET http://example.com/search?q=something

app.Get("/", func(c *fiber.Ctx) {
  c.OriginalURL() // "/search?q=something"
})
```

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app#settings) _setting instead._ [_Read more..._](../#zero-allocation)

## Params

Method can be used to get the route parameters, you could pass an optional default value that will be returned if the param key does not exist.

:::info
Defaults to empty string \(`""`\), if the param **doesn't** exist.
:::

```go title="Signature"
c.Params(param string, defaultValue ...string) string
```

```go title="Example"
// GET http://example.com/user/fenny

app.Get("/user/:name", func(c *fiber.Ctx) {
  c.Params("name")      // "fenny"
  c.Params("age", "21") // "21"
})
```

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app#settings) _setting instead._ [_Read more..._](../#zero-allocation)\_\_

## Path

Contains the path part of the request URL. Optionally, you could override the path by passing a string.

```go title="Signature"
c.Path(override ...string) string
```

```go title="Example"
// GET http://example.com/users?sort=desc

app.Get("/users", func(c *fiber.Ctx) {
  c.Path() // "/users"
})
```

## Protocol

Contains the request protocol string: `http` or `https` for **TLS** requests.

```go title="Signature"
c.Protocol() string
```

```go title="Example"
// GET http://example.com

app.Get("/", func(c *fiber.Ctx) {
  c.Protocol() // "http"
})
```

## Query

This property is an object containing a property for each query string parameter in the route, you could pass an optional default value that will be returned if the query key does not exist.

:::info
If there is **no** query string, it returns an **empty string**.
:::

```go title="Signature"
c.Query(parameter string, defaultValue ...string) string
```

```go title="Example"
// GET http://example.com/shoes?order=desc&brand=nike

app.Get("/", func(c *fiber.Ctx) {
  c.Query("order")         // "desc"
  c.Query("brand")         // "nike"
  c.Query("empty", "nike") // "nike"
})
```

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app#settings) _setting instead._ [_Read more..._](../#zero-allocation)

## QueryParser

This method is similar to [BodyParser](#bodyparser), but for query parameters.

```go title="Signature"
c.QueryParser(out interface{}) error
```

```go title="Example"
// Field names should start with an uppercase letter
type Person struct {
    Name     string     `query:"name"`
    Pass     string     `query:"pass"`
    Products []string   `query:"products"`
}

app.Post("/", func(c *fiber.Ctx) {
        p := new(Person)

        if err := c.QueryParser(p); err != nil {
            log.Fatal(err)
        }

        log.Println(p.Name)     // john
        log.Println(p.Pass)     // doe
        log.Println(p.Products) // [shoe, hat]
})
// Run tests with the following curl command

// curl -X POST "http://localhost:3000/?name=john&pass=doe&products=shoe,hat"
```

## Range

A struct containing the type and a slice of ranges will be returned.

```go title="Signature"
c.Range(int size)
```

```go title="Example"
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

## Redirect

Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code.

:::info
If **not** specified, status defaults to **302 Found**.
:::

```go title="Signature"
c.Redirect(path string, status ...int)
```

```go title="Example"
app.Get("/coffee", func(c *fiber.Ctx) {
  c.Redirect("/teapot")
})

app.Get("/teapot", func(c *fiber.Ctx) {
  c.Status(fiber.StatusTeapot).Send("🍵 short and stout 🍵")
})
```

```go title="More examples"
app.Get("/", func(c *fiber.Ctx) {
  c.Redirect("/foo/bar")
  c.Redirect("../login")
  c.Redirect("http://example.com")
  c.Redirect("http://example.com", 301)
})
```

## Render

Renders a view with data and sends a `text/html` response. By default `Render` uses the default [**Go Template engine**](https://golang.org/pkg/html/template/). If you want to use another View engine, please take a look at our [**Template middleware**](https://github.com/gofiber/template).

```go title="Signature"
c.Render(file string, data interface{}, layout ...string) error
```

## Route

Returns the matched [Route](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route) struct.

```go title="Signature"
c.Route() *Route
```

```go title="Example"
// http://localhost:8080/hello

handler := func(c *fiber.Ctx) {
  r := c.Route()
  fmt.Println(r.Method, r.Path, r.Params, r.Handlers)
  // GET /hello/:name handler [name] 
}

app.Get("/hello/:name", handler )
```

## SaveFile

Method is used to save **any** multipart file to disk.

```go title="Signature"
c.SaveFile(fh *multipart.FileHeader, path string)
```

```go title="Example"
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

## Secure

A boolean property that is `true` , if a **TLS** connection is established.

```go title="Signature"
c.Secure() bool
```

```go title="Example"
// Secure() method is equivalent to:
c.Protocol() == "https"
```

## Send

Sets the HTTP response body. The **Send** body can be of any type.

:::caution
Send **doesn't** append like the [Write](https://fiber.wiki/context#write) method.
:::

```go title="Signature"
c.Send(body ...interface{})
```

```go title="Example"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")         // => "Hello, World!"
  c.Send([]byte("Hello, World!")) // => "Hello, World!"
  c.Send(123)                     // => 123
})
```

Fiber also provides `SendBytes` ,`SendString` and `SendStream` methods for raw inputs.

:::tip
Use this if you **don't need** type assertion, recommended for **faster** performance.
:::

```go title="Signature"
c.SendBytes(b []byte)
c.SendString(s string)
c.SendStream(r io.Reader, s ...int)
```

```go title="Example"
app.Get("/", func(c *fiber.Ctx) {
  c.SendByte([]byte("Hello, World!"))
  // => "Hello, World!"

  c.SendString("Hello, World!")
  // => "Hello, World!"

  c.SendStream(bytes.NewReader([]byte("Hello, World!")))
  // => "Hello, World!"
})
```

## SendFile

Transfers the file from the given path. Sets the [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) response HTTP header field based on the **filenames** extension.

:::caution
Method use **gzipping** by default, set it to **true** to disable.
:::

```go title="Signature"
c.SendFile(path string, compress ...bool) error
```

```go title="Example"
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

## SendStatus

Sets the status code and the correct status message in the body, if the response body is **empty**.

:::tip
You can find all used status codes and messages [here](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244).
:::

```go title="Signature"
c.SendStatus(status int)
```

```go title="Example"
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendStatus(415)
  // => 415 "Unsupported Media Type"

  c.Send("Hello, World!")
  c.SendStatus(415)
  // => 415 "Hello, World!"
})
```

## Set

Sets the response’s HTTP header field to the specified `key`, `value`.

```go title="Signature"
c.Set(field, value string)
```

```go title="Example"
app.Get("/", func(c *fiber.Ctx) {
  c.Set("Content-Type", "text/plain")
  // => "Content-type: text/plain"
})
```

## Stale

[https://expressjs.com/en/4x/api.html\#req.fresh](https://expressjs.com/en/4x/api.html#req.fresh)

:::info
Not implemented yet, pull requests are welcome!
:::

## Status

Sets the HTTP status for the response.

:::info
Method is a **chainable**.
:::

```go title="Signature"
c.Status(status int)
```

```go title="Example"
app.Get("/", func(c *fiber.Ctx) {
  c.Status(200)
  c.Status(400).Send("Bad Request")
  c.Status(404).SendFile("./public/gopher.png")
})
```

## Subdomains

Returns a string slice of subdomains in the domain name of the request.

The application property subdomain offset, which defaults to `2`, is used for determining the beginning of the subdomain segments.

```go title="Signature"
c.Subdomains(offset ...int) []string
```

```go title="Example"
// Host: "tobi.ferrets.example.com"

app.Get("/", func(c *fiber.Ctx) {
  c.Subdomains()  // ["ferrets", "tobi"]
  c.Subdomains(1) // ["tobi"]
})
```

## Type

Sets the [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP header to the MIME type listed [here](https://github.com/nginx/nginx/blob/master/conf/mime.types) specified by the file **extension**.

```go title="Signature"
c.Type(t string) string
```

```go title="Example"
app.Get("/", func(c *fiber.Ctx) {
  c.Type(".html") // => "text/html"
  c.Type("html")  // => "text/html"
  c.Type("json")  // => "application/json"
  c.Type("png")   // => "image/png"
})
```

## Vary

Adds the given header field to the [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) response header. This will append the header, if not already listed, otherwise leaves it listed in the current location.

:::info
Multiple fields are **allowed**.
:::

```go title="Signature"
c.Vary(field ...string)
```

```go title="Example"
app.Get("/", func(c *fiber.Ctx) {
  c.Vary("Origin")     // => Vary: Origin
  c.Vary("User-Agent") // => Vary: Origin, User-Agent

  // No duplicates
  c.Vary("Origin") // => Vary: Origin, User-Agent

  c.Vary("Accept-Encoding", "Accept")
  // => Vary: Origin, User-Agent, Accept-Encoding, Accept
})
```

## Write

Appends **any** input to the HTTP body response.

```go title="Signature"
c.Write(body ...interface{})
```

```go title="Example"
app.Get("/", func(c *fiber.Ctx) {
  c.Write("Hello, ")         // => "Hello, "
  c.Write([]byte("World! ")) // => "Hello, World! "
  c.Write(123)               // => "Hello, World! 123"
})
```

## XHR

A Boolean property, that is `true`, if the request’s [X-Requested-With](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) header field is [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), indicating that the request was issued by a client library \(such as [jQuery](https://api.jquery.com/jQuery.ajax/)\).

```go title="Signature"
c.XHR() bool
```

```go title="Example"
// X-Requested-With: XMLHttpRequest

app.Get("/", func(c *fiber.Ctx) {
  c.XHR() // true
})
```
