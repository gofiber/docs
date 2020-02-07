# Context

The `Ctx` struct represents the HTTP request and response and has methods for the request query string, parameters, body, HTTP headers, and so on. In this documentation and by convention, the context is always referred to as `c` but its actual name is determined by the parameters to the callback function in which you’re working.

#### Accepts

Checks if the specified content types are acceptable, based on the request’s `Accept HTTP header` field. You can use an extention or content-type format

```go
// Function signature
c.Accepts(types ...string) string

// Example
app.Get("/", func(c *fiber.Ctx) {
  // Accept: text/html
  c.Accepts("html")
  // => "html"

  // Accept: text/*, application/json
  c.Accepts("html")
  // => "html"
  c.Accepts("text/html")
  //=> "text/html"
  c.Accepts("json", "text")
  // => "json"
  c.Accepts("application/json")
  // => "application/json"

  // Accept: text/*, application/json
  c.Accepts("image/png")
  c.Accepts("png")
  // => ""
})
```

#### AcceptsCharsets

Returns the first accepted charset of the specified character sets, based on the request’s `Accept-Charset HTTP header` field

```go
// Function signature
c.AcceptsCharsets(charsets ...string) string

// Example
app.Get("/", func(c *fiber.Ctx) {
  // Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5
  c.AcceptsCharsets("utf-8")
  // => "utf-8"

  c.AcceptsCharsets("utf-16", "iso-8859-1")
  // => "iso-8859-1"

  c.AcceptsCharsets("utf-16")
  // => ""
})
```

#### AcceptsEncodings

Returns the first accepted encoding of the specified encodings, based on the request’s `Accept-Encoding HTTP header` field.

```go
// Function signature
c.AcceptsEncodings(encodings ...string) string

// Example
app.Get("/", func(c *fiber.Ctx) {
  // Accept-Encoding: gzip, compress;q=0.2
  c.AcceptsEncodings("gzip")
  // => "gzip"

  c.AcceptsEncodings("compress", "br")
  // => "compress"

  c.AcceptsEncodings("deflate")
  // => ""
})
```

#### AcceptsLanguages

Returns the first accepted language of the specified languages, based on the request’s `Accept-Language HTTP header` field.

```go
// Function signature
c.AcceptsLanguages(languages ...string) string

// Example
app.Get("/", func(c *fiber.Ctx) {
  // Accept-Language: en;q=0.8, es, pt
  c.AcceptsLanguages("en")
  // => "en"

  c.AcceptsLanguages("pt", "nl")
  // => "pt"

  c.AcceptsLanguages("fr")
  // => ""
})
```

#### Append

Appends the specified value to the HTTP response header field. If the header is not already set, it creates the header with the specified value. The values parameter must be a `string.`

```go
// Function signature
c.Append(field, values ...string)

// Example
app.Get("/", func(c *fiber.Ctx) {
  // Let's see if the Link header exist
  c.Get("Link")
  // => ""

  c.Append("Link", "http://google.com", "http://localhost")
  // => Link: http://localhost, http://google.com

  c.Append("Link", "Test")
  // => Link: http://localhost, http://google.com, Test

})
```

#### Attachment

Sets the HTTP response [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header field to `attachment`. If a filename is given, then it sets the Content-Type based on the extension name via [Type](#type), and sets the `Content-Disposition` `filename=` parameter.

```go
// Function signature
c.Attachment(file ...string)

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.Attachment()
  // => Content-Disposition: attachment

  c.Attachment("./static/img/logo.png")
  // => Content-Disposition: attachment; filename="logo.png"
  // => Content-Type: image/png
})
```

#### BaseURL

#### AcceptsLanguages

Returns the base URL, protocol and hostname combined.

```go
// Function signature
c.BaseURL() bool

// Example
app.Get("/", func(c *fiber.Ctx) {
  // http://webtech.oregonstate.edu/faq/page/2?sort=date
  c.BaseURL()
  // => "http://webtech.oregonstate.edu"
})
```

#### BasicAuth

Returns the username and password provided in the request's `Authorization header`, if the request uses [HTTP Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication).

```go
// Function signature
c.BasicAuth() (user, pass string, ok bool)

// Example
// curl --user john:doe http://localhost:8080
app.Get("/", func(c *fiber.Ctx) {

  user, pass, ok := c.BasicAuth()

  if !ok || user != "john" || pass != "doe" {
    c.Status(403).Send("Forbidden")
    return
  }

  c.Send("Welcome " + user)
})
```

#### Body

Contains the raw post body submitted in the request.  
Calling a key in body returns a string value if exist or you loop trough the body params using a key value function callback.

The following example shows how to use the body function.

```go
// Function signature
c.Body() string
c.Body(key string) string
c.Body(key []byte) string
c.Body(func(key value string)) func(string, string)

// Example
// curl -X POST http://localhost:8080 -d user=john
app.Post("/", func(c *fiber.Ctx) {
  // Get the raw body post
  c.Body()
  // => user=john

  // Get the body value using specific key
  c.Body("user")
  // => "john"

  // Loop trough all body params
  c.Body(func(key string, val string) {
    fmt.Printl(key, val)
    // => "user" "john"
  })
})
```

#### ClearCookie

Clears all client cookies or a specific cookie by name by setting the expire date in the past.

```go
// Function signature
c.ClearCookie()
c.ClearCookie(key string)

// Example
app.Get("/", func(c *fiber.Ctx) {
  // Clears all cookies
  c.ClearCookie()

  // Expire specific cookie
  c.ClearCookie("user")

  // Expire multiple cookies
  c.ClearCookie("token", "session", "track_id", "version")
})
```

#### Cookie

Sets cookie name to value, the third options parameter is not implemented yet.

```go
// Function signature
c.Cookie(name, value string)
c.Cookie(name, value string, options *Cookie{})

// Cookie options struct
&fiber.Cookie{
  Expire int64 // Unix timestamp
  MaxAge int // Seconds
  Domain string
  Path string
  HttpOnly bool
  Secure bool
  SameSite string // "lax", "strict", "none", ""
}
// Example
app.Get("/", func(c *fiber.Ctx) {
  // Set cookie
  c.Cookie("name", "john")
  // => Cookie: name=john;

  // Set cookie with optionss
  options := &fiber.Cookie{
    Expire:   1579033664,
    // Use MaxAge instead of Expire, its 2019
    // Expire will not be used if MaxAge is set
    MaxAge:   60,
    Domain:   "example.com",
    Path:     "/",
    HttpOnly: true,
    Secure:   true,
    SameSite: "lax",
  }
  c.Cookie("name", "john", options)
  // => name=john; max-age=60; domain=example.com; path=/; HttpOnly; secure; SameSite=Lax

})

```

#### Cookies

Get cookies

```go
// Function signature
c.Cookies() string
c.Cookies(key string) string
c.Cookies(key []byte) string
c.Cookies(func(key, value string)) string

// Example
app.Get("/", func(c *fiber.Ctx) {
  // Get raw cookie header
  c.Cookies()
  // => name=john;

  // Get cookie by key
  c.Cookies("name")
  c.Cookies([]byte("name"))
  // => "john"

  // Show all cookies
  c.Cookies(func(key, val string) {
    fmt.Println(key, val)
    // => "name", "john"
  })
})
```

#### Download

Transfers the file at path as an “attachment”. Typically, browsers will prompt the user for download. By default, the Content-Disposition header “filename=” parameter is path (this typically appears in the browser dialog). Override this default with the filename parameter.

```go
// Function signature
c.Download(path string)
c.Download(path, filename string)

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.Download("./files/report-12345.pdf")
  // => Download report-12345.pdf

  c.Download("./files/report-12345.pdf", "report.pdf")
  // => Download report.pdf
})
```

#### !End

!> Planned for v2.0.0

#### Fasthttp

You can still access and use all Fasthttp methods and properties.  
Please read the [Fasthttp Documentation](https://godoc.org/github.com/valyala/fasthttp) for more information

```go
// Function signature
c.Fasthttp...

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.Fasthttp.Request.Header.Method()
  // => []byte("GET")

  c.Fasthttp.Response.Write([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

#### Format

Performs content-negotiation on the Accept HTTP header. It uses [Accepts](#accepts) to select a proper format. If the header is not specified or there is no proper format, text/plain is used.

```go
// Function signature
c.Format(body string)
c.Format(body []byte)

// Example
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

#### FormFile

MultipartForm files can be retrieved by name, the first file from the given key is returned.

```go
// Function signature
c.FormFile(name string) (*multipart.FileHeader, error)

// Example
app.Post("/", func(c *fiber.Ctx) {
  // Get first file from form field "document"
  file, err := c.FormFile("document")

  // Check for errors
  if err == nil {
    // Save file to root directory
    c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
  }
})
```

#### FormValue

MultipartForm values can be retrieved by name, the first value from the given key is returned.

```go
// Function signature
c.FormValue(name string) string

// Example
app.Post("/", func(c *fiber.Ctx) {
  // Get first value from form field "name"
  c.FormValue("name")
  // => "john" or "" if not exist
})
```

#### !Fresh

!> Planned for v2.0.0

#### Get

Returns the HTTP response header specified by field. The match is case-insensitive.

```go
// Function signature
c.Get(field string) string

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.Get("Content-Type")
  // => "text/plain"

  c.Get("content-type")
  // => "text/plain"

  c.Get("something")
  // => ""
})
```

#### !HeadersSent

!> Planned for v2.0.0

#### Hostname

Contains the hostname derived from the Host HTTP header.

```go
// Function signature
c.Hostname() string

// Example
app.Get("/", func(c *fiber.Ctx) {
  // Host: "localhost:8080"
  c.Hostname()
  // => "localhost"
})
```

#### IP

Contains the remote IP address of the request.

```go
// Function signature
c.IP() string

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.IP()
  // => "127.0.0.1"
})
```

#### IPs

contains an array of IP addresses specified in the X-Forwarded-For request header.

```go
// Function signature
c.IPs() []string

// Example
// X-Forwarded-For: proxy1, 127.0.0.1", proxy3
app.Get("/", func(c *fiber.Ctx) {
  c.IPs()
  // => ["proxy1", "127.0.0.1", "proxy3"]
})
```

#### Is

Returns the matching content type if the incoming request’s “Content-Type” HTTP header field matches the MIME type specified by the type parameter. If the request has no body, returns false.

```go
// Function signature
c.Is(typ string) bool

// Example
app.Get("/", func(c *fiber.Ctx) {
  // Content-Type: text/html; charset=utf-8
  c.Is("html")
  // => true

  c.Is(".html")
  // => true

  c.Is("json")
  // => false
})
```

#### JSON

Converts any interface or string to json using [Jsoniter](https://github.com/json-iterator/go), this function also sets the content header to application/json.

```go
// Function signature
c.JSON(v interface{}) error

// Example
type SomeStruct struct {
  Name string
  Age  uint8
}

app := fiber.New()
app.Get("/json", func(c *fiber.Ctx) {
  data := SomeStruct{
    Name: "Grame",
    Age:  20,
  }
  c.JSON(data)
  // => "{"Name": "Grame", "Age": 20}"

  c.JSON("Hello, World!")
  // => "Hello, World!"
})
app.Listen(8080)
```

Or with error checking

```go
app.Get("/json", func(c *fiber.Ctx) {
  data := SomeStruct{
    Name: "Grame",
    Age:  20,
  }
  if err := c.JSON(data); err != nil {
    c.Status(500).Send("Bad Request")
  }
  // => "{"Name": "Grame", "Age": 20}"
})
```

#### JSONBytes

This function accepts a raw `[]byte` body and sets the content header to `application/json`. This function is used if you do not need json serialization.

```go
// Function signature
c.JSON(json []byte)

// Example
app := fiber.New()
app.Get("/json", func(c *fiber.Ctx) {
  c.JSONBytes([]byte(`"{"hello": "world"}"`))
})
app.Listen(8080)
```

#### JSONP

Sends a JSON response with JSONP support. This method is identical to [JSON()](#json), except that it opts-in to JSONP callback support.

By default, the JSONP callback name is simply callback. Override this by passing a named string in the function.

```go
// Function signature
c.JSONP(v interface{}) error
c.JSONP(v interface{}, callback string) error

// Example
type SomeStruct struct {
  name string
  age  uint8
}

app := fiber.New()
app.Get("/", func(c *fiber.Ctx) {
  data := SomeStruct{
    name: "Grame",
    age:  20,
  }
  c.JSONP(data)
  // => callback({"name": "Grame", "age": 20})

  c.JSONP(data, "customFunc")
  // => customFunc({"name": "Grame", "age": 20})
})
app.Listen(8080)
```

#### JSONString

This function accepts a raw `string` body and sets the content header to `application/json`. This function is used if you do not need json serialization.

```go
// Function signature
c.JSONString(json string)

// Example
app := fiber.New()
app.Get("/json", func(c *fiber.Ctx) {
  c.JSONString(`"{"hello": "world"}"`)
})
app.Listen(8080)
```

#### Links

Joins the links followed by the propery to populate the response’s Link HTTP header field.

```go
// Function signature
c.Links(link ...string)

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.Link(
    "http://api.example.com/users?page=2", "next",
    "http://api.example.com/users?page=5", "last",
  )
  // Link: <http://api.example.com/users?page=2>; rel="next",
  //       <http://api.example.com/users?page=5>; rel="last"
})
```

#### Locals

A function that stores string variables scoped to the request, and therefore available only to the routes that match the request.

This is usefull if you want to pass some specific values to the next middleware.

```go
// Function signature
c.Locals(key string)
c.Locals(key string, value interface{}) interface{}

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.Locals("user", "admin")
  c.Next()
})
app.Get("/", func(c *fiber.Ctx) {
  if c.Locals("user") == "admin" {
    c.Status(200).Send("Welcome admin!")
  } else {
    c.SendStatus(403)
    // => 403 Forbidden
  }
})
```

You can put any type inside the locals, don't forget to convert it back when you are using the variable

```go
type JSON struct {
  Message string `json:"message"`
}

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.Locals("user", JSON{"Hello, World!"})
  // => user: {"message":"Hello, World!"}
  c.Next()
})
app.Get("/", func(c *fiber.Ctx) {
  if val, ok := c.Locals("user").(JSON); ok {
    fmt.Println(val.Message)
  }
})
```

#### Location

Sets the response Location HTTP header to the specified path parameter.

```go
// Function signature
c.Location(path string)

// Example
app.Post("/", func(c *fiber.Ctx) {
  c.Location("http://example.com")
  c.Location("/foo/bar")
})
```

#### Method

Contains a string corresponding to the HTTP method of the request: `GET`, `POST`, `PUT`, and so on.

```go
// Function signature
c.Method() string

// Example
app.Post("/", func(c *fiber.Ctx) {
  c.Method()
  // => "POST"
})
```

#### MultipartForm

To access multipart form entries, you can parse the binary with `MultipartForm()`.  
This returns a `map[string][]string`, so given a key the value will be a string slice.  
So accepting multiple files or values is easy, as shown below!

```go
// Function signature
c.MultipartForm() (*multipart.Form, error)

// Example
app.Post("/", func(c *fiber.Ctx) {
  // Parse the multipart form
  if form, err := c.MultipartForm(); err == nil {
    // => *multipart.Form

    if token := form.Value["token"]; len(token) > 0 {
      // Get key value
      fmt.Println(token[0])
    }

    // Get all files from "documents" key
    files := form.File["documents"]
    // => []*multipart.FileHeader

    // Loop trough files
    for _, file := range files {
      fmt.Println(file.Filename, file.Size, file.Header["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      // Save the files to disk
      c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
    }
  }
})
```

#### Next

When `Next()` is called, it executes the next function in the stack that matches the current route.

```go
// Function signature
c.Next()

// Example
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

#### OriginalURL

Contains the original request URL.

```go
// Function signature
c.OriginalURL() string

// Example
app.Get("/", func(c *fiber.Ctx) {
  // GET /search?q=something
  c.OriginalURL()
  // => '/search?q=something'
})
```

#### Params

This method can be used to get the route parameters. For example, if you have the route `/user/:name`, then the `“name”` property is available as `c.Params("name")`. This method defaults to blank `""` if the param does not exist.

```go
// Function signature
c.Params(param string) string

// Example
app.Get("/user/:name", func(c *fiber.Ctx) {
  // GET /user/tj
  c.Params("name")
  // => "tj"
})
```

#### Path

Contains the path part of the request URL.

```go
// Function signature
c.Path() string

// Example
app.Get("/users", func(c *fiber.Ctx) {
  // example.com/users?sort=desc
  c.Path()
  // => "/users"
})
```

#### Protocol

Contains the request protocol string: either http or (for TLS requests) https.

```go
// Function signature
c.Protocol() string

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.Protocol()
  // => "http"
})
```

#### Query

This property is an object containing a property for each query string parameter in the route. If there is no query string, it returns an empty string

```go
// Function signature
c.Query(parameter string) string

// Example
app.Get("/", func(c *fiber.Ctx) {
  // GET /search?q=tobi+ferret
  c.Query("q")
  // => "tobi ferret"

  // GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
  c.Query("order")
  // => "desc"
})
```

#### !Range

!> Planned for v2.0.0

#### Redirect

Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code . If not specified, status defaults to `302 “Found`.

```go
// Function signature
c.Redirect(path string)
c.Redirect(path string, status int)

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.Redirect("/foo/bar")
  c.Redirect("../login")
  c.Redirect("http://example.com")
  c.Redirect("http://example.com", 301)
})
```

#### !Render

!> Planned for v2.0.0

#### Route

Contains the currently-matched route struct, **only use this for debugging**.
It returns the [Route struct](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route).

```go
// Function signature
c.Route() *Route

// Example
app.Get("/hello", func(c *fiber.Ctx) {
  c.Route()
  // => {GET /hello false false <nil> [] 0x7b4ab0}
})
// http://localhost:8080/hello
app.Post("/:api?", func(c *fiber.Ctx) {
  c.Route()
  // => {POST / false false ^(?:/([^/]+?))?/?$ [api] 0x7b49e0}
})
```

#### SaveFile

This function is used to save any multipart file to disk.  
You can see a working example here: [Multiple file upload](#multipartform)

```go
// Function signature
c.SaveFile(fh *multipart.FileHeader, path string)
```

#### Secure

A Boolean property that is true if a TLS connection is established.

```go
// Function signature
c.Secure() bool

// Equivalent to:
c.Protocol() == "https"
```

#### Send

Sends the HTTP response.
The `Send()` body can be of any type

```go
// Function signature
c.Send(body ...interface{})

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
  // => "Hello, World!"

  c.Send([]byte("Hello, World!"))
  // => "Hello, World!"

  c.Send(123)
  // => "123"
})
```

#### SendBytes

Same as `Send()` but without type assertion.  
We suggest using this if your body is a `byte slice`.

```go
// Function signature
c.SendBytes(body []byte)

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.SendBytes([]byte("Hello, World!"))
})
```

#### SendFile

Transfers the file at the given path. Sets the `Content-Type` response HTTP header field based on the filename’s extension.

```go
// Function signature
c.SendFile(path string)
c.SendFile(path string, gzip bool)

// Example
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendFile("./public/404.html")

  // SendFile using gzipping by default, set it to false to disable.
  c.SendFile("./public/404.html", false)
})
```

#### SendStatus

Sets the status code, but also the correct status message in the body if the response body is still empty. You can find all status codes and messages in [status.go](https://github.com/gofiber/fiber/blob/master/status.go)

```go
// Function signature
c.SendStatus(status int)

// Example
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendStatus(415)
  // Status: 415
  // Body: "Unsupported Media Type"

  c.Send("Hello, World!")
  c.SendStatus(415)
  // Status: 415
  // Body: "Hello, World!"
})
```

#### SendString

Same as `Send()` but without type assertion.  
We suggest using this in production when your body is a `string`.

```go
// Function signature
c.SendString(body string)

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.SendString("Hello, World!")
})
```

#### Set

Sets the response’s `HTTP header` field to `value`.

```go
// Function signature
c.Set(field, value string)

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.Set("Content-Type", "text/plain")
  // => "Content-type: text/plain"
})
```

#### !SignedCookies

!> Planned for v2.0.0

#### !Stale

!> Planned for v2.0.0

#### Status

Sets the `HTTP status` for the response, it is a chainable method.

```go
// Function signature
c.Status(status int)

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.Status(200)
  c.Status(400).Send("Bad Request")
  c.Status(404).SendFile("./public/gopher.png")
})
```

#### Subdomains

An array of subdomains in the domain name of the request.  
The application property subdomain offset, which defaults to `2`, is used for determining the beginning of the subdomain segments.

```go
// Function signature
c.Subdomains() []string

// Example
// Host: "tobi.ferrets.example.com"
app.Get("/", func(c *fiber.Ctx) {
  c.Subdomains()
  // => ["ferrets", "tobi"]
})
```

#### Type

Sets the Content-Type HTTP header to the MIME type listed [here](https://github.com/nginx/nginx/blob/master/conf/mime.types) specified by the file extension.

```go
// Function signature
c.Type(typ string) string

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.Type(".html")
  // => 'text/html'

  c.Type("html")
  // => 'text/html'

  c.Type("json")
  // => 'application/json'

  c.Type("png")
  // => 'image/png'
})
```

#### Vary

Adds the given header field to the Vary response header of res. This can be a single field, or multiple fields.

This will append the header if not already listed, otherwise leaves it listed in the current location.

```go
// Function signature
c.Vary(field ...string)

// Example
app.Get("/", func(c *fiber.Ctx) {
  // Let's assume there are no values in Vary yet
  c.Get("Vary")
  // =>

  c.Vary("Origin")
  // => Vary: Origin

  c.Vary("User-Agent")
  // => Vary: Origin, User-Agent

  // It checks for duplicates
  c.Vary("Origin")
  // => Vary: Origin, User-Agent

  c.Vary("Accept-Encoding", "Accept")
  // => Vary: Origin, User-Agent, Accept-Encoding, Accept
})
```

#### Write

Appends to the HTTP response.

The Write parameter can be any type

```go
// Function signature
c.Write(bodies ...interface{})

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.Write("Hello, ")
  // => "Hello, "

  c.Write([]byte("World! "))
  // => "Hello, World! "

  c.Write(123)
  // => "Hello, World! 123"
  // Send sets the body, and does not append
  c.Send("My name is Jeff")
  // => "My name is Jeff"
})
```

#### XHR

A Boolean property that is true if the request’s `X-Requested-With` header field is `XMLHttpRequest`, indicating that the request was issued by a client library such as [jQuery](https://api.jquery.com/jQuery.ajax/).

```go
// Function signature
c.XHR() bool

// Example
app.Get("/", func(c *fiber.Ctx) {
  c.XHR()
  // => true
})
```

#### XML

XML sets the header to `application/xml` and marshals your interface to xml.

```go
// Function signature
c.XML(xml interface{}) error

// Example
type person struct {
	Name  string `xml:"name"`
	Stars int    `xml:"stars"`
}

app := fiber.New()
app.Get("/", func(c *fiber.Ctx) {
	c.XML(person{"John", 50})
	// => Content-Type: application/xml
	// => <person><name>John</name><stars>50</stars></person>

})
app.Listen(8080)

```

_Caught a mistake? [Edit this page on GitHub!](https://github.com/gofiber/docs/blob/master/context.md)_
