---
description: >-
  La struct Ctx représente le Context qui contient la requête HTTP, ainsi que la réponse.
  Elle contient des méthodes pour pour la requête, les paramètres, le body, les headers HTTP, et ainsi de suite.
---

# 🧠  Context

## Accepts

Vérifie si les **extensions** ou **content types** sont acceptables.

{% hint style="info" %}
Basé sur le header de requête HTTP [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept).
{% endhint %}

**Signature**

```go
c.Accepts(types ...string) string
```

**Example**

```go
// Accept: text/*, application/json

app.Get("/", func(c *fiber.Ctx) {
  c.Accepts("html")             // "html"
  c.Accepts("text/html")        // "text/html"
  c.Accepts("json", "text")     // "json" "text"
  c.Accepts("application/json") // "application/json"
  c.Accepts("image/png")        // ""
  c.Accepts("png")              // ""
})
```
Fiber dispose de fonctions similaires, pour les autres headers acceptés. 

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
  // "nl" "ru"
})
```

## Append

Ajoute la **valeur** spécifié, dans le champ header de la réponse HTTP.

{% hint style="warning" %}
Si le header n'est **pas** déja défini, cela crée un header avec les valeurs spécifiées.
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

Défini le champ [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) du header de la réponse HTTP à `attachment`.

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

Retourne l'URL de base \(**protocol** + **host**\) en tant que `string`.

**Signature**

```go
c.BaseURL() string
```

**Example**

```go
// GET https://example.com/page#chapter-1

app.Get("/", func(c *fiber.Ctx) {
  c.BaseURL() // https://example.com
})
```

## Body

Contient le **raw body** envoyé lors d'une requête **POST**.

**Signature**

```go
c.Body(key ...string) string
```

**Example**

```go
// curl -X POST http://localhost:8080 -d user=john

app.Post("/", func(c *fiber.Ctx) {
  // Get raw body from POST request:
  c.Body() // user=john

  // Get body value by specific key:
  c.Body("user") // "john"
})
```

## BodyParser

Lie le body de la requête à une struct. `BodyParser` prend en charge le décodage des types de contenu suivants en fonction du header `Content-Type`:

* `application/json`
* `application/xml`
* `application/x-www-form-urlencoded`
* `multipart/form-data`

**Signature**

```go
c.BodyParser(v interface{})
```

**Example**

```go
// curl -X POST -H "Content-Type: application/json" \ 
// --data '{"name":"john","pass":"doe"}'  localhost:3000

// curl -X POST -H "Content-Type: application/xml" \ 
// --data '<Login><name>john</name><pass>doe</pass><Login>'  localhost:3000

// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" \
// --data 'name=john&pass=doe'  localhost:3000

// curl -v -F name=john -F pass=doe http://localhost:3000

type Person struct {
    Name string `json:"name" xml:"name" form:"name"`
    Pass string `json:"pass" xml:"pass" form:"pass"`
}

app.Post("/", func(c *fiber.Ctx) {
    var person Person

    if err := c.BodyParser(&person); err != nil {
        // Handle error
    }

    // Do something with person.Name or person.Pass
})
```

## ClearCookie

Efface **tous** les cookies clients \(_ou un unique cookie spécifique, en se basant sur son **nom**_\) en définissant une date d'expiration antérieure.

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

Définit un cookie avec un **nom** et une **valeur**.

**Signature**

```go
c.Cookie(name, value string, options ...*Cookie{})
```

**Cookie struct**

{% hint style="warning" %}
l'option **Expire** ne sera pas utilisée, si **MaxAge** est défini.
{% endhint %}

```go
&fiber.Cookie{
  Expire   int64  // Unix timestamp
  MaxAge   int    // Seconds
  Domain   string
  Path     string
  HTTPOnly bool
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
    HTTPOnly: true,
    Secure:   true,
    SameSite: "lax",
  })
  // => name=john; max-age=60; domain=example.com; path=/;
  //    HttpOnly; secure; SameSite=Lax

})
```

## Cookies

Récupère les cookies.

**Signature**s

```go
c.Cookies(key ...string) string
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  // Get raw cookie header:
  c.Cookies() // name=john;

  // Get cookie by key:
  c.Cookies("name") // "john"
})
```

## Download

Transfère le ficher en `attachment`, à partir de son path.

En général, les navigateurs interrogeront l'utilisateur, pour un téléchargement. Par défaut, le paramètre `filename=` du header [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) est le chemin du fichier\(_qui apparaît généralement dans la boite de dialogue du navigateur_\).

Remplace la valeur par défaut par le paramètre **filename**.
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

## Fasthttp

Vous pouvez toujours accéder et utiliser toutes les méthodes et propriétés de **Fasthttp**.

**Signature**

{% hint style="info" %}
Pour plus d'information, rendez vous sur la [documentation de Fasthttp](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc).
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

Contient les informations sur les erreurs renvoyées par une "panique", ou transmises via la méthode [`Next(err)`](https://github.com/gofiber/docs/tree/8d965e1e05fb67f965934586c78335ef29f52128/context/README.md#error).

**Signature**

```go
c.Error() error
```

**Example**

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
  // => "john" or "" if not exist
})
```

## Fresh

{% hint style="danger" %}
Planned for **Fiber** v2.
{% endhint %}

## Get

Returns the HTTP request header specified by field. 

{% hint style="success" %}
The match is **case-insensitive**.
{% endhint %}

**Signature**

```go
c.Get(field string) string
```

**Example**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Get("Content-Type") // "text/plain"
  c.Get("CoNtEnT-TypE") // "text/plain"
  c.Get("something")    // ""
})
```

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
  c.Hostname() // "google.com"
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
  c.IP() // "127.0.0.1"
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
// X-Forwarded-For: proxy1, 127.0.0.1, proxy3

app.Get("/", func(c *fiber.Ctx) {
  c.IPs() // ["proxy1", "127.0.0.1", "proxy3"]
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
  c.Is("html")  // true
  c.Is(".html") // true
  c.Is("json")  // false
})
```

## JSON

Converts any **interface** or **string** to JSON using [Jsoniter](https://github.com/json-iterator/go).

{% hint style="info" %}
JSON also sets the content header to **application/json**.
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

## JSONP

Sends a JSON response with JSONP support. This method is identical to [JSON](context.md#json), except that it opts-in to JSONP callback support. By default, the callback name is simply callback.

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
This is useful, if you want to pass some **specific** data to the next middleware.
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

Contains a string corresponding to the HTTP method of the request: `GET`, `POST`, `PUT` and so on.

**Signature**

```go
c.Method() string
```

**Example**

```go
app.Post("/", func(c *fiber.Ctx) {
  c.Method() // "POST"
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
  c.OriginalURL() // "/search?q=something"
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
// GET http://example.com/user/fenny

app.Get("/user/:name", func(c *fiber.Ctx) {
  c.Params("name") // "fenny"
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
  c.Path() // "/users"
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
  c.Protocol() // "http"
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
  c.Query("order") // "desc"
  c.Query("brand") // "nike"
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

Contains the matched [Route](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route) struct.

{% hint style="warning" %}
We do not recommend using this function in production.
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

```go

```

```go

```

```go

```

```go

```

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
  // => 415 "Unsupported Media Type"

  c.Send("Hello, World!")
  c.SendStatus(415)
  // => 415 "Hello, World!"
})
```

## Set

Sets the response’s HTTP header field to the specified `key`, `value`.

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
  c.Subdomains()  // ["ferrets", "tobi"]
  c.Subdomains(1) // ["tobi"]
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
  
  // No duplicates
  c.Vary("Origin") // => Vary: Origin, User-Agent

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
  c.XHR() // true
})
```