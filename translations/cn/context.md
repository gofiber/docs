---
description: >-
  Ctx struct 结构代表了持有HTTP请求和响应的上下文。 它拥有用于请求查询字符串、参数、物体、HTTP头字段等的方法。
---

# 🧠 上下文

## Accepts

检查指定的 **extensions 扩展** 或 **content 内容** **types 类型** 是否可接受。

{% hint style="info" %}
基于请求的 [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP 头字段.
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

Fiber也为其他 aceept 头字段提供了类似的功能。

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

将 HTTP 响应头字段附加指定的 **value 值**。

{% hint style="warning" %}
如果头字段 **还未** 设置 ，它将创建以指定值的头字段。
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
  // => 链接: http://localhost, http://google.com

  c.Append("Link", "Test")
  // => 链接: http://localhost, http://google.com, Test
})
```
{% endcode %}

## Attachment

将 HTTP 响应 [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) 头字段设置为 `attachment` 附件。

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

返回以 `string` 字符串表示的基础 URL \(**protocol 协议** + **host 主机**\)

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

包含在 **POST** 请求中提交的 **原始主体**

{% code title="Signature" %}
```go
c.Body() string
```
{% endcode %}

{% code title="Example" %}
```go
// curl -X POST http://localhost:8080 -d user=john

app.Post("/", func(c *fiber.Ctx) {
  // 获取POST请求中的原始主体:
  c.Body() // user=john
})
```
{% endcode %}

## BodyParser

将请求主体绑定到 struct 结构中。 `BodyParser` 支持解码查询参数以及基于 `Content-Type` 头字段的以下内容类型：

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
// 领域名字需以大写字母作为开头
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
// 使用一下 curl 指令测试

// curl -X POST -H "Content-Type: application/json" --data "{\"name\":\"john\",\"pass\":\"doe\"}" localhost:3000

// curl -X POST -H "Content-Type: application/xml" --data "<login><name>john</name><pass>doe</pass></login>" localhost:3000

// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" --data "name=john&pass=doe" localhost:3000

// curl -X POST -F name=john -F pass=doe http://localhost:3000

// curl -X POST "http://localhost:3000/?name=john&pass=doe"
```
{% endcode %}

## ClearCookie

清理过期的客户端 cookie \(_或所有cookie 如果留空\)_

{% code title="Signature" %}
```go
c.ClearCookie(key ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  // 清理所有 cookies:
  c.ClearCookie()

  // 以名字清理特定 cookie:
  c.ClearCookie("user")

  // 以名字清理多个特定 cookie:
  c.ClearCookie("token", "session", "track_id", "version")
})
```
{% endcode %}

## Cookie

设置 Cookie

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

通过键获取 cookie 值。

**Signature**s

```go
c.Cookies(key string) string
```

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  // 通过键获取 cookie:
  c.Cookies("name") // "john"
})
```
{% endcode %}

## Download

将文件从路径传送为 `附件`。

通常情况下，浏览器会提示用户下载。 默认情况下， [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) 头字段 `filename=` 参数是文件路径\(_这通常出现在浏览器对话框_\)。

用 **filename** 参数覆盖此默认值。

{% code title="Signature" %}
```go
c.Download(path, filename ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Download("./files/report-12345.pdf")
  // => 下载 report-12345.pdf

  c.Download("./files/report-12345.pdf", "report.pdf")
  // => 下载 report.pdf
})
```
{% endcode %}

## Fasthttp

您仍然可以 **访问** 并使用所有 **Fasthttp** 方法和属性。

**Signature**

{% hint style="info" %}
请阅读 [Fasthttp文档](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) 了解更多详情。
{% endhint %}

**示例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Fasthttp.Request.Header.Method()
  // => []byte("GET")

  c.Fasthttp.Response.Write([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## Error

这包含由 panic  错误或通过 [`Nex(err)`](https://github.com/gofiber/docs/tree/8d965e1e05fb67f965934586c78335ef29f52128/context/README.md#error) 方法投掷的错误信息。

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

## Format

基于请求的 [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP 头字段作出对应的内容处理。 使用 [Accepts](context.md#accepts) 选择一个适当的格式。

{% hint style="info" %}
倘若头字段 **尚未** 设置或 **没有** 对应的格式, 将会自动使用 **text/plain**。
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

多片段格式文件可以通过名称检索，返回给定键的 **第一个** 文件。

{% code title="Signature" %}
```go
c.FormFile(name string) (*multipart.FileHeader, error)
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  // 从表中的 "document" 获取第一个文件:
  file, err := c.FormFile("document")

  // 检查错误:
  if err == nil {
    // Save file to root directory:
    c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
  }
})
```
{% endcode %}

## FormValue

任何表单值都可以通过名称检索，会返回给予键的 **第一** 值。

{% code title="Signature" %}
```go
c.FormValue(name string) string
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  // 从表中的 "name" 获取第一个值:
  c.FormValue("name")
  // => "john" or "" if not exist
})
```
{% endcode %}

## Fresh

[https://expressjs.com/en/4x/api.html\#req.fresh](https://expressjs.com/en/4x/api.html#req.fresh)

{% hint style="info" %}
尚未实施，欢迎提交贡献。
{% endhint %}

## Get

返回指定的 HTTP 请求头字段

{% hint style="success" %}
匹配的头字段 **大小写不敏感**。
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

## Hostname

包含来自 [Host](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) HTTP 头字段中的主机名。

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

## IP

返回请求的IP地址。

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

返回 [X-Forwarded-for](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) 请求头中指定的 IP 地址数组。

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

如果传入请求的 [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP 头字段与 [MIME 类型](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types)指定的参数匹配，返回对或错以表示 **内容类型** 是否匹配。

{% hint style="info" %}
如果请求 **没有** 实体, 返回 **false**。
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

使用 [Jsoniter](https://github.com/json-iterator/go) 将任意 **interface 接口** 或 **string 字符串** 转换为 JSON 。

{% hint style="info" %}
JSON 将内容头字段设置为 **application/json**。
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
  // 创建数据 struct:
  data := SomeStruct{
    Name: "Grame",
    Age:  20,
  }

  c.JSON(data)
  // => Content-Type: application/json
  // => "{"Name": "Grame", "Age": 20}"

  c.JSON(fiber.Map{
    "name": "Grame",
    "age": 20,
  })
  // => Content-Type: application/json
  // => "{"name": "Grame", "age": 20}"
})
```
{% endcode %}

## JSONP

使用 JSONP 发送JSON 响应。 这个方法与 [JSON](context.md#json) 完全相同，只是加入了支持 JSONP 的回调。 默认情况下，回调名称是 callback。

可以在方法中通过传入一个 **命名字符串** 来更改回调名称。

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

集合所有在属性中定义的链接来填充响应的 [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) HTTP 头字段.

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

将字符串变量存储到请求范围内的方法，因此仅适用于匹配请求的路由。

{% hint style="success" %}
这可以让您将一些 **特定的** 数据传递给下一个中间件。
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

设置响应 [Location 位置](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) HTTP 头字段到指定的路径参数。

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

包含与请求的 HTTP 方法相对应的字符串： `GET`， `POST`, `PUT` 等。  
如果需要，您可以通过传入一个字符串来覆盖这个方法。

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

要访问多部分表单项，您可以使用 `MultipartForm()` 来解析二进制文件。 This returns a `map[string][]string`, so given a key the value will be a string slice.

{% code title="Signature" %}
```go
c.MultipartForm() (*multipart.Form, error)
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  // 解析多部分表单:
  if form, err := c.MultipartForm(); err == nil {
    // => *multipart.Form

    if token := form.Value["token"]; len(token) > 0 {
      // 获取键值:
      fmt.Println(token[0])
    }

    // 从 "documents" 键中获取所有文件:
    files := form.File["documents"]
    // => []*multipart.FileHeader

    // 遍历所有文件:
    for _, file := range files {
      fmt.Println(file.Filename, file.Size, file.Header["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      // 储存文件:
      c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
    }
  }
})
```
{% endcode %}

## Next

当调用 **Next** 时，它会执行与当前路由匹配的堆栈中的 next 方法。 您可以在 next 方法中传入一个 error struct 结构用于自定义错误处理。

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

包含原始请求的 URL。

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

## Params

可以用来获取路由参数的方法。

{% hint style="info" %}
默认值为空字符串 \(`""`\), 如果参数 **不存在**
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

## Path

包含请求 URL 的路径部分。 如果需要，您可以通过传入一个字符串来覆盖路径。

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

包含请求协议字符串： `htp` 或 `https` 的 **TLS** 请求。

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

此属性是一个包含路由中每个查询字符串参数的属性的对象。

{% hint style="info" %}
如果有 **没有** 查询字符串，它将返回 **空字符串**。
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

## Range

将返回一个包含该类型和范围切片的结构。

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

重定向到指定路径的 URL ，且具有指定的状态，是一个对应于HTTP状态代码的正整数。

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

渲染一个带有数据的模板并发送一个 `text/html` 响应。 默认情况下 `Render` 使用 [**Go 模版引擎**](https://golang.org/pkg/html/template/)。 如果您想要使用其他的模版引擎，请查看我们的 [**模板中间件**](middleware.md#template)。

{% code title="Signature" %}
```go
c.Render(file string, data interface{}) error
```
{% endcode %}

## Route

包含匹配的 [路由](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route) 结构。

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

此方法用于保存 **任意** 多部分文件到磁盘。

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

布尔属性将为 `true` , 如果已建立 **TLS** 连接。

{% code title="Signature" %}
```go
c.Secure() bool
```
{% endcode %}

{% code title="Example" %}
```go
// Secure() 方法等价于:
c.Protocol() == "https"
```
{% endcode %}

## Send

设置 HTTP 响应正文。 **Send 发送** 的正文可以是任何类型。

{% hint style="warning" %}
此方法 **不会** 类似 [Write 写入](https://fiber.wiki/context#write) 方法一般在原有的正文中进行附加。
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

Fiber还提供了 `SendBytes` & `SendString` 的原始输入方法。

{% hint style="success" %}
如果您 **不需要** 类型断言，建议使用以获取 **更快** 的性能。
{% endhint %}

{% code title="Signature" %}
```go
c.SendBytes(b []byte)
c.SendString(s string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendByte([]byte("Hello, World!"))
  // => "Hello, World!"

  c.SendString("Hello, World!")
  // => "Hello, World!"
})
```
{% endcode %}

## SendFile

将文件从指定的路径传输。 基于 **文件名** 的扩展，设置对应的 [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) 响应 HTTP 头字段。

{% hint style="warning" %}
默认情况下，此方法使用 **gzipping** ，设置为 **true** 禁用。
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

  // 禁用 gzipping:
  c.SendFile("./static/index.html", true)
})
```
{% endcode %}

## SendStatus

如果响应正文为 **空**，设置状态码和正文中的状态信息。

{% hint style="success" %}
您可以在[这里](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244)找到所有的状态码和消息 。
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

设置响应的HTTP头字段到指定的 `key 键`， `value 值`。

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
尚未实施，欢迎提交贡献。
{% endhint %}

## Status

设置响应的 HTTP 状态。

{% hint style="info" %}
方法是 **可链的**。
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

请求域名中的子域名数组。

应用程序中的子域名偏移属性，默认为 `2`，用于确定子域段的开头位置。

{% code title="Signature" %}
```go
c.Subdomains(offset ...int) []string
```
{% endcode %}

{% code title="Example" %}
```go
// 域名: "tobi.ferrets.example.com"

app.Get("/", func(c *fiber.Ctx) {
  c.Subdomains()  // ["ferrets", "tobi"]
  c.Subdomains(1) // ["tobi"]
})
```
{% endcode %}

## 类型

设置对应由文件 **扩展** 所指定的 [类型](https://github.com/nginx/nginx/blob/master/conf/mime.types) [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP 头字段  .

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

将给予的头字段添加到 [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) 响应头。 如果尚未列出，这将附加在原有的头字段，否则它将留在当前位置中。

{% hint style="info" %}
**允许** 多个领域名。
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

  // 不能重复
  c.Vary("Origin") // => Vary: Origin, User-Agent

  c.Vary("Accept-Encoding", "Accept")
  // => Vary: Origin, User-Agent, Accept-Encoding, Accept
})
```
{% endcode %}

## Write

将 **任意** 的输入附加到 HTTP 实体响应中。

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

布尔属性为 `true` 时, 即为请求中的 [X-Requested-With](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) 头字段是 [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), 表示该请求是由客户端的库所发起 \(例如 [jQuery](https://api.jquery.com/jQuery.ajax/)\).

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

