---
description: >-
  The Ctx struct represents the Context which hold the HTTP request and
  response. It has methods for the request query string, parameters, body, HTTP
  headers, and so on.
---

# 🧠 Context

## Accepts

Checks, if the specified **extensions** or **content** **types** are acceptable.

{% hint style="info" %}
Based on the request’s [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP header.
{% endhint %}

{% code title="Signature" %}
```go
func (c *Ctx) Accepts(offers ...string)          string
func (c *Ctx) AcceptsCharsets(offers ...string)  string
func (c *Ctx) AcceptsEncodings(offers ...string) string
func (c *Ctx) AcceptsLanguages(offers ...string) string
```
{% endcode %}

{% code title="Example" %}
```go
// Accept: text/*, application/json

app.Get("/", func(c *fiber.Ctx) error {
  c.Accepts("html")             // "html"
  c.Accepts("text/html")        // "text/html"
  c.Accepts("json", "text")     // "json"
  c.Accepts("application/json") // "application/json"
  c.Accepts("image/png")        // ""
  c.Accepts("png")              // ""
  // ...
})
```
{% endcode %}

Fiber provides similar functions for the other accept headers.

```go
// Accept-Charset: utf-8, iso-8859-1;q=0.2
// Accept-Encoding: gzip, compress;q=0.2
// Accept-Language: en;q=0.8, nl, ru

app.Get("/", func(c *fiber.Ctx) error {
  c.AcceptsCharsets("utf-16", "iso-8859-1") 
  // "iso-8859-1"

  c.AcceptsEncodings("compress", "br") 
  // "compress"

  c.AcceptsLanguages("pt", "nl", "ru") 
  // "nl"
  // ...
})
```

## Append

Appends the specified **value** to the HTTP response header field.

{% hint style="warning" %}
If the header is **not** already set, it creates the header with the specified value.
{% endhint %}

{% code title="Signature" %}
```go
func (c *Ctx) Append(field string, values ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Append("Link", "http://google.com", "http://localhost")
  // => Link: http://localhost, http://google.com

  c.Append("Link", "Test")
  // => Link: http://localhost, http://google.com, Test

  // ...
})
```
{% endcode %}

## Attachment

Sets the HTTP response [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header field to `attachment`.

{% code title="Signature" %}
```go
func (c *Ctx) Attachment(filename ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Attachment()
  // => Content-Disposition: attachment

  c.Attachment("./upload/images/logo.png")
  // => Content-Disposition: attachment; filename="logo.png"
  // => Content-Type: image/png

  // ...
})
```
{% endcode %}

## App

Returns the [\*App](ctx.md) reference so you could easily access all application settings.

{% code title="Signature" %}
```go
func (c *Ctx) App() *App
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/stack", func(c *fiber.Ctx) error {
  return c.JSON(c.App().Stack())
})
```
{% endcode %}

## BaseURL

Returns the base URL \(**protocol** + **host**\) as a `string`.

{% code title="Signature" %}
```go
func (c *Ctx) BaseURL() string
```
{% endcode %}

{% code title="Example" %}
```go
// GET https://example.com/page#chapter-1

app.Get("/", func(c *fiber.Ctx) error {
  c.BaseURL() // https://example.com
  // ...
})
```
{% endcode %}

## Body

Returns the raw request **body**.

{% code title="Signature" %}
```go
func (c *Ctx) Body() []byte
```
{% endcode %}

{% code title="Example" %}
```go
// curl -X POST http://localhost:8080 -d user=john

app.Post("/", func(c *fiber.Ctx) error {
  // Get raw body from POST request:
  return c.Send(c.Body()) // []byte("user=john")
})
```
{% endcode %}

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](ctx.md) _setting instead._ [_Read more..._](../#zero-allocation)

## BodyParser

Binds the request body to a struct.

It is important to specify the correct struct tag based on the content type to be parsed. For example, if you want to parse a JSON body with a field called Pass, you would use a struct field of `json:"pass"`.

| content-type | struct tag |
|---|---|
| `application/x-www-form-urlencoded` | form |
| `multipart/form-data` | form |
| `application/json` | json |
| `application/xml` | xml |
| `text/xml` | xml |

{% code title="Signature" %}
```go
func (c *Ctx) BodyParser(out interface{}) error
```
{% endcode %}

{% code title="Example" %}
```go
// Field names should start with an uppercase letter
type Person struct {
    Name string `json:"name" xml:"name" form:"name"`
    Pass string `json:"pass" xml:"pass" form:"pass"`
}

app.Post("/", func(c *fiber.Ctx) error {
        p := new(Person)

        if err := c.BodyParser(p); err != nil {
            return err
        }

        log.Println(p.Name) // john
        log.Println(p.Pass) // doe

        // ...
})

// Run tests with the following curl commands

// curl -X POST -H "Content-Type: application/json" --data "{\"name\":\"john\",\"pass\":\"doe\"}" localhost:3000

// curl -X POST -H "Content-Type: application/xml" --data "<login><name>john</name><pass>doe</pass></login>" localhost:3000

// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" --data "name=john&pass=doe" localhost:3000

// curl -X POST -F name=john -F pass=doe http://localhost:3000

// curl -X POST "http://localhost:3000/?name=john&pass=doe"
```
{% endcode %}

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](ctx.md) _setting instead._ [_Read more..._](../#zero-allocation)

## ClearCookie

Expire a client cookie \(_or all cookies if left empty\)_

{% code title="Signature" %}
```go
func (c *Ctx) ClearCookie(key ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  // Clears all cookies:
  c.ClearCookie()

  // Expire specific cookie by name:
  c.ClearCookie("user")

  // Expire multiple cookies by names:
  c.ClearCookie("token", "session", "track_id", "version")
  // ...
})
```
{% endcode %}

{% hint style="warning" %}
Web browsers and other compliant clients will only clear the cookie if the given options are identical to those when creating the cookie, excluding expires and maxAge. ClearCookie will not set these values for you - a technique similar to the one shown below should be used to ensure your cookie is deleted.
{% endhint %}

{% code title="Example" %}
```go
app.Get("/set", func(c *fiber.Ctx) error {
    c.Cookie(&fiber.Cookie{
        Name:     "token",
        Value:    "randomvalue",
        Expires:  time.Now().Add(24 * time.Hour),
        HTTPOnly: true,
        SameSite: "lax",
    })

    // ...
})

app.Get("/delete", func(c *fiber.Ctx) error {
    c.Cookie(&fiber.Cookie{
        Name:     "token",
        // Set expiry date to the past
        Expires:  time.Now().Add(-(time.Hour * 2)),
        HTTPOnly: true,
        SameSite: "lax",
    })

    // ...
})
```
{% endcode %}

## Context

Returns [\*fasthttp.RequestCtx](https://godoc.org/github.com/valyala/fasthttp#RequestCtx) that is compatible with the context.Context interface that requires a deadline, a cancellation signal, and other values across API boundaries.

{% code title="Signature" %}
```go
func (c *Ctx) Context() *fasthttp.RequestCtx
```
{% endcode %}

{% hint style="info" %}
Please read the [Fasthttp Documentation](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) for more information.
{% endhint %}

## Cookie

Set cookie

{% code title="Signature" %}
```go
func (c *Ctx) Cookie(cookie *Cookie)
```
{% endcode %}

```go
type Cookie struct {
    Name     string    `json:"name"`
    Value    string    `json:"value"`
    Path     string    `json:"path"`
    Domain   string    `json:"domain"`
    MaxAge   int       `json:"max_age"`
    Expires  time.Time `json:"expires"`
    Secure   bool      `json:"secure"`
    HTTPOnly bool      `json:"http_only"`
    SameSite string    `json:"same_site"`
}
```

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  // Create cookie
  cookie := new(fiber.Cookie)
  cookie.Name = "john"
  cookie.Value = "doe"
  cookie.Expires = time.Now().Add(24 * time.Hour)

  // Set cookie
  c.Cookie(cookie)
  // ...
})
```
{% endcode %}

## Cookies

Get cookie value by key, you could pass an optional default value that will be returned if the cookie key does not exist.

**Signatures**

```go
func (c *Ctx) Cookies(key string, defaultValue ...string) string
```

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  // Get cookie by key:
  c.Cookies("name")         // "john"
  c.Cookies("empty", "doe") // "doe"
  // ...
})
```
{% endcode %}

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](ctx.md) _setting instead._ [_Read more..._](../#zero-allocation)

## Download

Transfers the file from path as an `attachment`.

Typically, browsers will prompt the user to download. By default, the [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header `filename=` parameter is the file path \(_this typically appears in the browser dialog_\).

Override this default with the **filename** parameter.

{% code title="Signature" %}
```go
func (c *Ctx) Download(file string, filename ...string) error
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  return c.Download("./files/report-12345.pdf");
  // => Download report-12345.pdf

  return c.Download("./files/report-12345.pdf", "report.pdf");
  // => Download report.pdf
})
```
{% endcode %}

## Request

Request return the [\*fasthttp.Request](https://godoc.org/github.com/valyala/fasthttp#Request) pointer

**Signature**

{% code title="Signature" %}
```go
func (c *Ctx) Request() *fasthttp.Request
```
{% endcode %}

**Example**

```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Request().Header.Method()
  // => []byte("GET")
})
```

## Response

Response return the [\*fasthttp.Response](https://godoc.org/github.com/valyala/fasthttp#Response) pointer

**Signature**

{% code title="Signature" %}
```go
func (c *Ctx) Response() *fasthttp.Response
```
{% endcode %}

**Example**

```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Response().Write([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## Format

Performs content-negotiation on the [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP header. It uses [Accepts](ctx.md#accepts) to select a proper format.

{% hint style="info" %}
If the header is **not** specified or there is **no** proper format, **text/plain** is used.
{% endhint %}

{% code title="Signature" %}
```go
func (c *Ctx) Format(body interface{}) error
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  // Accept: text/plain
  c.Format("Hello, World!")
  // => Hello, World!

  // Accept: text/html
  c.Format("Hello, World!")
  // => <p>Hello, World!</p>

  // Accept: application/json
  c.Format("Hello, World!")
  // => "Hello, World!"
  // ..
})
```
{% endcode %}

## FormFile

MultipartForm files can be retrieved by name, the **first** file from the given key is returned.

{% code title="Signature" %}
```go
func (c *Ctx) FormFile(key string) (*multipart.FileHeader, error)
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) error {
  // Get first file from form field "document":
  file, err := c.FormFile("document")

  // Save file to root directory:
  return c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
})
```
{% endcode %}

## FormValue

Any form values can be retrieved by name, the **first** value from the given key is returned.

{% code title="Signature" %}
```go
func (c *Ctx) FormValue(key string, defaultValue ...string) string
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) error {
  // Get first value from form field "name":
  c.FormValue("name")
  // => "john" or "" if not exist

  // ..
})
```
{% endcode %}

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](ctx.md) _setting instead._ [_Read more..._](../#zero-allocation)

## Fresh

[https://expressjs.com/en/4x/api.html\#req.fresh](https://expressjs.com/en/4x/api.html#req.fresh)

{% code title="Signature" %}
```go
func (c *Ctx) Fresh() bool
```
{% endcode %}

## GetReqHeaders

Returns the HTTP request headers.

{% code title="Signature" %}
```go
func (c *Ctx) GetReqHeaders() map[string]string
```
{% endcode %}

## GetRespHeaders

Returns the HTTP response headers.

{% code title="Signature" %}
```go
func (c *Ctx) GetRespHeaders() map[string]string
```
{% endcode %}

## Get

Returns the HTTP request header specified by the field.

{% hint style="success" %}
The match is **case-insensitive**.
{% endhint %}

{% code title="Signature" %}
```go
func (c *Ctx) Get(key string, defaultValue ...string) string
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Get("Content-Type")       // "text/plain"
  c.Get("CoNtEnT-TypE")       // "text/plain"
  c.Get("something", "john")  // "john"
  // ..
})
```
{% endcode %}

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](ctx.md) _setting instead._ [_Read more..._](../#zero-allocation)

## GetRespHeader

Returns the HTTP response header specified by the field.

{% hint style="success" %}
The match is **case-insensitive**.
{% endhint %}

{% code title="Signature" %}
```go
func (c *Ctx) GetRespHeader(key string, defaultValue ...string) string
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  c.GetRespHeader("X-Request-Id")       // "8d7ad5e3-aaf3-450b-a241-2beb887efd54"
  c.GetRespHeader("Content-Type")       // "text/plain"
  c.GetRespHeader("something", "john")  // "john"
  // ..
})
```
{% endcode %}

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](ctx.md) _setting instead._ [_Read more..._](../#zero-allocation)

## Hostname

Returns the hostname derived from the [Host](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) HTTP header.

{% code title="Signature" %}
```go
func (c *Ctx) Hostname() string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://google.com/search

app.Get("/", func(c *fiber.Ctx) error {
  c.Hostname() // "google.com"

  // ...
})
```
{% endcode %}

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](ctx.md) _setting instead._ [_Read more..._](../#zero-allocation)

## IP

Returns the remote IP address of the request.

{% code title="Signature" %}
```go
func (c *Ctx) IP() string
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  c.IP() // "127.0.0.1"

  // ...
})
```
{% endcode %}

## IPs

Returns an array of IP addresses specified in the [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) request header.

{% code title="Signature" %}
```go
func (c *Ctx) IPs() []string
```
{% endcode %}

{% code title="Example" %}
```go
// X-Forwarded-For: proxy1, 127.0.0.1, proxy3

app.Get("/", func(c *fiber.Ctx) error {
  c.IPs() // ["proxy1", "127.0.0.1", "proxy3"]

  // ...
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
func (c *Ctx) Is(extension string) bool
```
{% endcode %}

{% code title="Example" %}
```go
// Content-Type: text/html; charset=utf-8

app.Get("/", func(c *fiber.Ctx) error {
  c.Is("html")  // true
  c.Is(".html") // true
  c.Is("json")  // false

  // ...
})
```
{% endcode %}

## JSON

Converts any **interface** or **string** to JSON using the [segmentio/encoding](https://github.com/segmentio/encoding%20) package.

{% hint style="info" %}
JSON also sets the content header to **application/json**.
{% endhint %}

{% code title="Signature" %}
```go
func (c *Ctx) JSON(data interface{}) error
```
{% endcode %}

{% code title="Example" %}
```go
type SomeStruct struct {
  Name string
  Age  uint8
}

app.Get("/json", func(c *fiber.Ctx) error {
  // Create data struct:
  data := SomeStruct{
    Name: "Grame",
    Age:  20,
  }

  return c.JSON(data)
  // => Content-Type: application/json
  // => "{"Name": "Grame", "Age": 20}"

  return c.JSON(fiber.Map{
    "name": "Grame",
    "age": 20,
  })
  // => Content-Type: application/json
  // => "{"name": "Grame", "age": 20}"
})
```
{% endcode %}

## JSONP

Sends a JSON response with JSONP support. This method is identical to [JSON](ctx.md#json), except that it opts-in to JSONP callback support. By default, the callback name is simply callback.

Override this by passing a **named string** in the method.

{% code title="Signature" %}
```go
func (c *Ctx) JSONP(data interface{}, callback ...string) error
```
{% endcode %}

{% code title="Example" %}
```go
type SomeStruct struct {
  name string
  age  uint8
}

app.Get("/", func(c *fiber.Ctx) error {
  // Create data struct:
  data := SomeStruct{
    name: "Grame",
    age:  20,
  }

  return c.JSONP(data)
  // => callback({"name": "Grame", "age": 20})

  return c.JSONP(data, "customFunc")
  // => customFunc({"name": "Grame", "age": 20})
})
```
{% endcode %}

## Links

Joins the links followed by the property to populate the response’s [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) HTTP header field.

{% code title="Signature" %}
```go
func (c *Ctx) Links(link ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Links(
    "http://api.example.com/users?page=2", "next",
    "http://api.example.com/users?page=5", "last",
  )
  // Link: <http://api.example.com/users?page=2>; rel="next",
  //       <http://api.example.com/users?page=5>; rel="last"

  // ...
})
```
{% endcode %}

## Locals

A method that stores variables scoped to the request and, therefore, are available only to the routes that match the request.

{% hint style="success" %}
This is useful if you want to pass some **specific** data to the next middleware.
{% endhint %}

{% code title="Signature" %}
```go
func (c *Ctx) Locals(key string, value ...interface{}) interface{}
```
{% endcode %}

{% code title="Example" %}
```go
app.Use(func(c *fiber.Ctx) error {
  c.Locals("user", "admin")
  return c.Next()
})

app.Get("/admin", func(c *fiber.Ctx) error {
  if c.Locals("user") == "admin" {
    return c.Status(fiber.StatusOK).SendString("Welcome, admin!")
  }
  return c.SendStatus(fiber.StatusForbidden)

})
```
{% endcode %}

## Location

Sets the response [Location](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) HTTP header to the specified path parameter.

{% code title="Signature" %}
```go
func (c *Ctx) Location(path string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) error {
  return c.Location("http://example.com")

  return c.Location("/foo/bar")
})
```
{% endcode %}

## Method

Returns a string corresponding to the HTTP method of the request: `GET`, `POST`, `PUT`, and so on.  
Optionally, you could override the method by passing a string.

{% code title="Signature" %}
```go
func (c *Ctx) Method(override ...string) string
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) error {
  c.Method() // "POST"

  c.Method("GET")
  c.Method() // GET

  // ...
})
```
{% endcode %}

## MultipartForm

To access multipart form entries, you can parse the binary with `MultipartForm()`. This returns a `map[string][]string`, so given a key, the value will be a string slice.

{% code title="Signature" %}
```go
func (c *Ctx) MultipartForm() (*multipart.Form, error)
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) error {
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
      if err := c.SaveFile(file, fmt.Sprintf("./%s", file.Filename)); err != nil {
        return err
      }
    }
  }

  return err
})
```
{% endcode %}

## Next

When **Next** is called, it executes the next method in the stack that matches the current route. You can pass an error struct within the method that will end the chaining and call the [error handler](https://docs.gofiber.io/guide/error-handling).

{% code title="Signature" %}
```go
func (c *Ctx) Next() error
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  fmt.Println("1st route!")
  return c.Next()
})

app.Get("*", func(c *fiber.Ctx) error {
  fmt.Println("2nd route!")
  return c.Next()
})

app.Get("/", func(c *fiber.Ctx) error {
  fmt.Println("3rd route!")
  return c.SendString("Hello, World!")
})
```
{% endcode %}

## OriginalURL

Returns the original request URL.

{% code title="Signature" %}
```go
func (c *Ctx) OriginalURL() string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/search?q=something

app.Get("/", func(c *fiber.Ctx) error {
  c.OriginalURL() // "/search?q=something"

  // ...
})
```
{% endcode %}

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](ctx.md) _setting instead._ [_Read more..._](../#zero-allocation)

## Params

Method can be used to get the route parameters, you could pass an optional default value that will be returned if the param key does not exist.

{% hint style="info" %}
Defaults to empty string \(`""`\), if the param **doesn't** exist.
{% endhint %}

{% code title="Signature" %}
```go
func (c *Ctx) Params(key string, defaultValue ...string) string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/user/fenny
app.Get("/user/:name", func(c *fiber.Ctx) error {
  c.Params("name") // "fenny"

  // ...
})

// GET http://example.com/user/fenny/123
app.Get("/user/*", func(c *fiber.Ctx) error {
  c.Params("*")  // "fenny/123"
  c.Params("*1") // "fenny/123"

  // ...
})
```
{% endcode %}

Unnamed route parameters\(\*, +\) can be fetched by the **character** and the **counter** in the route.

{% code title="Example" %}
```go
// ROUTE: /v1/*/shop/*
// GET:   /v1/brand/4/shop/blue/xs
c.Params("*1")  // "brand/4"
c.Params("*2")  // "blue/xs"
```
{% endcode %}

For reasons of **downward compatibility**, the first parameter segment for the parameter character can also be accessed without the counter.

{% code title="Example" %}
```go
app.Get("/v1/*/shop/*", func(c *fiber.Ctx) error {
  c.Params("*") // outputs the values of the first wildcard segment
})
```
{% endcode %}

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](ctx.md) _setting instead._ [_Read more..._](../#zero-allocation)

## ParamsInt

Method can be used to get an integer from the route parameters.
Please note if that parameter is not in the request, zero
will be returned. If the parameter is NOT a number, zero and an error
will be returned

{% hint style="info" %}
Defaults to empty string \(`""`\), if the param **doesn't** exist.
{% endhint %}

{% code title="Signature" %}
```go
func (c *Ctx) Params(key string) (int, error)
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/user/123
app.Get("/user/:id", func(c *fiber.Ctx) error {
  id, err := c.ParamsInt("id") // int 123 and no error

  // ...
})

```
{% endcode %}

This method is equivalent of using `atoi` with ctx.Params

## Path

Contains the path part of the request URL. Optionally, you could override the path by passing a string.

{% code title="Signature" %}
```go
func (c *Ctx) Path(override ...string) string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/users?sort=desc

app.Get("/users", func(c *fiber.Ctx) error {
  c.Path() // "/users"

  c.Path("/john")
  c.Path() // "/john"

  // ...
})
```
{% endcode %}

## Protocol

Contains the request protocol string: `http` or `https` for **TLS** requests.

{% code title="Signature" %}
```go
func (c *Ctx) Protocol() string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com

app.Get("/", func(c *fiber.Ctx) error {
  c.Protocol() // "http"

  // ...
})
```
{% endcode %}

## Query

This property is an object containing a property for each query string parameter in the route, you could pass an optional default value that will be returned if the query key does not exist.

{% hint style="info" %}
If there is **no** query string, it returns an **empty string**.
{% endhint %}

{% code title="Signature" %}
```go
func (c *Ctx) Query(key string, defaultValue ...string) string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/shoes?order=desc&brand=nike

app.Get("/", func(c *fiber.Ctx) error {
  c.Query("order")         // "desc"
  c.Query("brand")         // "nike"
  c.Query("empty", "nike") // "nike"

  // ...
})
```
{% endcode %}

> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](ctx.md) _setting instead._ [_Read more..._](../#zero-allocation)

## QueryParser

This method is similar to [BodyParser](ctx.md#bodyparser), but for query parameters.
It is important to use the struct tag "query". For example, if you want to parse a query parameter with a field called Pass, you would use a struct field of `query:"pass"`.

{% code title="Signature" %}
```go
func (c *Ctx) QueryParser(out interface{}) error
```
{% endcode %}

{% code title="Example" %}
```go
// Field names should start with an uppercase letter
type Person struct {
    Name     string     `query:"name"`
    Pass     string     `query:"pass"`
    Products []string   `query:"products"`
}

app.Get("/", func(c *fiber.Ctx) error {
        p := new(Person)

        if err := c.QueryParser(p); err != nil {
            return err
        }

        log.Println(p.Name)     // john
        log.Println(p.Pass)     // doe
        log.Println(p.Products) // [shoe, hat]

        // ...
})
// Run tests with the following curl command

// curl "http://localhost:3000/?name=john&pass=doe&products=shoe,hat"
```
{% endcode %}

## ReqHeaderParser

This method is similar to [BodyParser](ctx.md#bodyparser), but for request headers.
It is important to use the struct tag "reqHeader". For example, if you want to parse a request header with a field called Pass, you would use a struct field of `reqHeader:"pass"`.

{% code title="Signature" %}
```go
func (c *Ctx) ReqHeaderParser(out interface{}) error
```
{% endcode %}

{% code title="Example" %}
```go
// Field names should start with an uppercase letter
type Person struct {
    Name     string     `reqHeader:"name"`
    Pass     string     `reqHeader:"pass"`
    Products []string   `reqHeader:"products"`
}

app.Get("/", func(c *fiber.Ctx) error {
        p := new(Person)

        if err := c.ReqHeaderParser(p); err != nil {
            return err
        }

        log.Println(p.Name)     // john
        log.Println(p.Pass)     // doe
        log.Println(p.Products) // [shoe, hat]

        // ...
})
// Run tests with the following curl command

// curl "http://localhost:3000/" -H "name: john" -H "pass: doe" -H "products: shoe,hat"
```
{% endcode %}


## SetParserDecoder

Allow you to config BodyParser/QueryParser decoder, base on schema's options, providing possibility to add custom type for pausing.

{% code title="Signature" %}
```go
func SetParserDecoder(parserConfig fiber.ParserConfig{
  IgnoreUnknownKeys bool,
  ParserType        []fiber.ParserType{
      Customtype interface{},
      Converter  func(string) reflect.Value,
  },
  ZeroEmpty         bool,
  SetAliasTag       string,
})
```
{% endcode %}

{% code title="Example" %}
```go

type CustomTime time.Time

// String() returns the time in string
func (ct *CustomTime) String() string {
	t := time.Time(*ct).String()
	return t
}

// Register the converter for CustomTime type format as 2006-01-02
var timeConverter = func(value string) reflect.Value {
  fmt.Println("timeConverter", value)
  if v, err := time.Parse("2006-01-02", value); err == nil {
    return reflect.ValueOf(v)
  }
  return reflect.Value{}
}

customTime := fiber.ParserType{
  Customtype: CustomTime{},
  Converter:  timeConverter,
} 

// Add setting to the Decoder
fiber.SetParserDecoder(fiber.ParserConfig{
  IgnoreUnknownKeys: true,
  ParserType:        []fiber.ParserType{customTime},
  ZeroEmpty:         true,
})

// Example to use CustomType, you pause custom time format not in RFC3339
type Demo struct {
	Date  CustomTime `form:"date" query:"date"`
	Title string     `form:"title" query:"title"`
	Body  string     `form:"body" query:"body"`
}

app.Post("/body", func(c *fiber.Ctx) error {
	var d Demo
	c.BodyParser(&d)
	fmt.Println("d.Date", d.Date.String())
	return c.JSON(d)
})

app.Get("/query", func(c *fiber.Ctx) error {
	var d Demo
	c.QueryParser(&d)
	fmt.Println("d.Date", d.Date.String())
	return c.JSON(d)
})

// curl -X POST -F title=title -F body=body -F date=2021-10-20 http://localhost:3000/body

// curl -X GET "http://localhost:3000/query?title=title&body=body&date=2021-10-20"

```
{% endcode %} 

## Range

A struct containing the type and a slice of ranges will be returned.

{% code title="Signature" %}
```go
func (c *Ctx) Range(size int) (Range, error)
```
{% endcode %}

{% code title="Example" %}
```go
// Range: bytes=500-700, 700-900
app.Get("/", func(c *fiber.Ctx) error {
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
func (c *Ctx) Redirect(location string, status ...int) error
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/coffee", func(c *fiber.Ctx) error {
  return c.Redirect("/teapot")
})

app.Get("/teapot", func(c *fiber.Ctx) error {
  return c.Status(fiber.StatusTeapot).Send("🍵 short and stout 🍵")
})
```
{% endcode %}

{% code title="More examples" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  return c.Redirect("/foo/bar")
  return c.Redirect("../login")
  return c.Redirect("http://example.com")
  return c.Redirect("http://example.com", 301)
})
```
{% endcode %}

## Render

Renders a view with data and sends a `text/html` response. By default `Render` uses the default [**Go Template engine**](https://golang.org/pkg/html/template/). If you want to use another View engine, please take a look at our [**Template middleware**](https://github.com/gofiber/template).

{% code title="Signature" %}
```go
func (c *Ctx) Render(name string, bind interface{}, layouts ...string) error
```
{% endcode %}

## Route

Returns the matched [Route](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route) struct.

{% code title="Signature" %}
```go
func (c *Ctx) Route() *Route
```
{% endcode %}

{% code title="Example" %}
```go
// http://localhost:8080/hello


app.Get("/hello/:name", func(c *fiber.Ctx) error {
  r := c.Route()
  fmt.Println(r.Method, r.Path, r.Params, r.Handlers)
  // GET /hello/:name handler [name] 

  // ...
})
```
{% endcode %}

{% hint style="warning" %}
Do not rely on `c.Route()` in middlewares **before** calling `c.Next()` - `c.Route()` returns the **last executed route**.
{% endhint %}

{% code title="Example" %}
```go
func MyMiddleware() fiber.Handler {
  return func(c *fiber.Ctx) error {
    beforeNext := c.Route().Path // Will be '/'
    err := c.Next()
    afterNext := c.Route().Path // Will be '/hello/:name'
    return err
  }
}
```
{% endcode %}

## SaveFile

Method is used to save **any** multipart file to disk.

{% code title="Signature" %}
```go
func (c *Ctx) SaveFile(fh *multipart.FileHeader, path string) error
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) error {
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
      if err := c.SaveFile(file, fmt.Sprintf("./%s", file.Filename)); err != nil {
        return err
      }
    }
    return err
  }
})
```
{% endcode %}

## Secure

A boolean property that is `true` , if a **TLS** connection is established.

{% code title="Signature" %}
```go
func (c *Ctx) Secure() bool
```
{% endcode %}

{% code title="Example" %}
```go
// Secure() method is equivalent to:
c.Protocol() == "https"
```
{% endcode %}

## Send

Sets the HTTP response body.

{% code title="Signature" %}
```go
func (c *Ctx) Send(body []byte) error
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  return c.Send([]byte("Hello, World!")) // => "Hello, World!"
})
```
{% endcode %}

Fiber also provides `SendString` and `SendStream` methods for raw inputs.

{% hint style="success" %}
Use this if you **don't need** type assertion, recommended for **faster** performance.
{% endhint %}

{% code title="Signature" %}
```go
func (c *Ctx) SendString(body string) error
func (c *Ctx) SendStream(stream io.Reader, size ...int) error
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  return c.SendString("Hello, World!")
  // => "Hello, World!"

  return c.SendStream(bytes.NewReader([]byte("Hello, World!")))
  // => "Hello, World!"
})
```
{% endcode %}

## SendFile

Transfers the file from the given path. Sets the [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) response HTTP header field based on the **filenames** extension.

{% hint style="warning" %}
Method doesn´t use **gzipping** by default, set it to **true** to enable.
{% endhint %}

{% code title="Signature" %}
```go
func (c *Ctx) SendFile(file string, compress ...bool) error
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/not-found", func(c *fiber.Ctx) error {
  return c.SendFile("./public/404.html");

  // Disable compression
  return c.SendFile("./static/index.html", false);
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
func (c *Ctx) SendStatus(status int) error
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/not-found", func(c *fiber.Ctx) error {
  return c.SendStatus(415)
  // => 415 "Unsupported Media Type"

  c.SendString("Hello, World!")
  return c.SendStatus(415)
  // => 415 "Hello, World!"
})
```
{% endcode %}

## Set

Sets the response’s HTTP header field to the specified `key`, `value`.

{% code title="Signature" %}
```go
func (c *Ctx) Set(key string, val string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Set("Content-Type", "text/plain")
  // => "Content-type: text/plain"

  // ...
})
```
{% endcode %}

## SetUserContext

Sets the user specified implementation for context interface.

{% code title="Signature" %}
```go
func (c *Ctx) SetUserContext(ctx context.Context)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  ctx := context.Background()
  c.SetUserContext(ctx)
  // Here ctx could be any context implementation

  // ...
})
```
{% endcode %}

## Stale

[https://expressjs.com/en/4x/api.html\#req.stale](https://expressjs.com/en/4x/api.html#req.stale)

{% code title="Signature" %}
```go
func (c *Ctx) Stale() bool
```
{% endcode %}

## Status

Sets the HTTP status for the response.

{% hint style="info" %}
Method is a **chainable**.
{% endhint %}

{% code title="Signature" %}
```go
func (c *Ctx) Status(status int) *Ctx
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/fiber", func(c *fiber.Ctx) error {
  c.Status(fiber.StatusOK)
  return nil
}

app.Get("/hello", func(c *fiber.Ctx) error {
  return c.Status(fiber.StatusBadRequest).SendString("Bad Request")
}

app.Get("/world", func(c *fiber.Ctx) error {
  return c.Status(fiber.StatusNotFound).SendFile("./public/gopher.png")
})
```
{% endcode %}

## Subdomains

Returns a string slice of subdomains in the domain name of the request.

The application property subdomain offset, which defaults to `2`, is used for determining the beginning of the subdomain segments.

{% code title="Signature" %}
```go
func (c *Ctx) Subdomains(offset ...int) []string
```
{% endcode %}

{% code title="Example" %}
```go
// Host: "tobi.ferrets.example.com"

app.Get("/", func(c *fiber.Ctx) error {
  c.Subdomains()  // ["ferrets", "tobi"]
  c.Subdomains(1) // ["tobi"]

  // ...
})
```
{% endcode %}

## Type

Sets the [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP header to the MIME type listed [here](https://github.com/nginx/nginx/blob/master/conf/mime.types) specified by the file **extension**.

{% code title="Signature" %}
```go
func (c *Ctx) Type(ext string, charset ...string) *Ctx
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Type(".html") // => "text/html"
  c.Type("html")  // => "text/html"
  c.Type("png")   // => "image/png"

  c.Type("json", "utf-8")  // => "application/json; charset=utf-8"

  // ...
})
```
{% endcode %}

## UserContext

UserContext returns a context implementation that was set by user earlier
or returns a non-nil, empty context, if it was not set earlier.

{% code title="Signature" %}
```go
func (c *Ctx) UserContext() context.Context
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  ctx := c.UserContext()
  // ctx is context implementation set by user

  // ...
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
func (c *Ctx) Vary(fields ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Vary("Origin")     // => Vary: Origin
  c.Vary("User-Agent") // => Vary: Origin, User-Agent

  // No duplicates
  c.Vary("Origin") // => Vary: Origin, User-Agent

  c.Vary("Accept-Encoding", "Accept")
  // => Vary: Origin, User-Agent, Accept-Encoding, Accept

  // ...
})
```
{% endcode %}

## Write

Write adopts the Writer interface

{% code title="Signature" %}
```go
func (c *Ctx) Write(p []byte) (n int, err error)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Write([]byte("Hello, World!")) // => "Hello, World!"

  fmt.Fprintf(c, "%s\n", "Hello, World!") // "Hello, World!Hello, World!"
})
```
{% endcode %}

## XHR

A Boolean property, that is `true`, if the request’s [X-Requested-With](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) header field is [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), indicating that the request was issued by a client library \(such as [jQuery](https://api.jquery.com/jQuery.ajax/)\).

{% code title="Signature" %}
```go
func (c *Ctx) XHR() bool
```
{% endcode %}

{% code title="Example" %}
```go
// X-Requested-With: XMLHttpRequest

app.Get("/", func(c *fiber.Ctx) error {
  c.XHR() // true

  // ...
})
```
{% endcode %}

## IsFromLocal

Returns true if request came from localhost
{% code title="Signature" %}
```go
func (c *Ctx) IPs() []string
```
{% endcode %}

{% code title="Example" %}
```go

app.Get("/", func(c *fiber.Ctx) error {
  // If request came from localhost, return true else return false
  c.isFromLocal()

  // ...
})
```
{% endcode %}
