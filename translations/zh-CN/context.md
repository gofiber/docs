---
description: Ctx结构表示保存HTTP请求和响应的上下文。它具有用于请求查询字符串，参数，正文，HTTP标头等的方法。
---

# 🧠 上下文

## Accepts

检查指定的**扩展名**或**内容类型**是否可接受。

{% hint style="info" %}
基于请求的[Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP标头。
{% endhint %}

**签名**

```go
c.Accepts(types ...string) string
```

**示例**

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

## 可接受的字符集

检查指定的**字符集**是否可接受。

{% hint style="info" %}
基于请求的[Accept-Charset](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset) HTTP标头。
{% endhint %}

**签名**

```go
c.AcceptsCharsets(charsets ...string) string
```

**示例**

```go
// Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsCharsets("utf-8")                // => "utf-8"
  c.AcceptsCharsets("utf-16", "iso-8859-1") // => "iso-8859-1"
  c.AcceptsCharsets("utf-16")               // => ""
})
```

## 可接受的编码

检查指定的**编码**是否可接受。

{% hint style="info" %}
基于请求的[Accept-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) HTTP标头。
{% endhint %}

**签名**

```go
c.AcceptsEncodings(encodings ...string) string
```

**示例**

```go
// Accept-Encoding: gzip, compress;q=0.2

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsEncodings("gzip")           // => "gzip"
  c.AcceptsEncodings("compress", "br") // => "compress"
  c.AcceptsEncodings("deflate")        // => ""
})
```

## 可接受的语言

检查指定的**语言**是否可接受。

{% hint style="info" %}
基于请求的[Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) HTTP头。
{% endhint %}

**签名**

```go
c.AcceptsLanguages(languages ...string) string
```

**示例**

```go
// Accept-Language: en;q=0.8, nl, ru

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsLanguages("en")             // => "en"
  c.AcceptsLanguages("pt", "nl", "ru") // => "nl" "ru"
  c.AcceptsLanguages("fr")             // => ""
})
```

## 附加

将指定的**值**附加到HTTP响应标头字段。

{% hint style="warning" %}
如果标题**尚未**设置，它将创建一个具有指定值的请求头。
{% endhint %}

**签名**

```go
c.Append(field, values ...string)
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Append("Link", "http://google.com", "http://localhost")
  // => Link: http://localhost, http://google.com

  c.Append("Link", "Test")
  // => Link: http://localhost, http://google.com, Test
})
```

## 附件

将HTTP响应的[Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)标头字段设置为`attachment`。

**签名**

```go
c.Attachment(file ...string)
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Attachment()
  // => Content-Disposition: attachment

  c.Attachment("./upload/images/logo.png")
  // => Content-Disposition: attachment; filename="logo.png"
  // => Content-Type: image/png
})
```

## 请求路径

以`string`返回请求路径(**协议**和**主机**)。

**签名**

```go
c.BaseURL() string
```

**示例**

```go
// GET https://example.com/page#chapter-1

app.Get("/", func(c *fiber.Ctx) {
  c.BaseURL() // => https://example.com
})
```

## 认证

如果请求使用[HTTP认证](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) ，则返回[授权](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)的请求头中提供的**用户名**和**密码**。

**签名**

```go
c.BasicAuth() (user, pass string, ok bool)
```

**示例**

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

## 响应体

包含在**POST**请求中提交的**原始正文**。

**签名**

```go
c.Body() string
c.Body(key string) string
c.Body(key []byte) string
c.Body(func(key, value string)) func(string, string)
```

**示例**

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

## 清除Cookie

按**名称**清除**所有**客户端cookie或特定的cookie(*通过设置过期日期*)。

**签名**

```go
c.ClearCookie()
c.ClearCookie(key string)
```

**示例**

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

设置cookie的**名称**和**值** 。

**签名**

```go
c.Cookie(name, value string)
c.Cookie(name, value string, options *Cookie{})
```

**Cookie结构**

{% hint style="warning" %}
如果设置了**MaxAge** ，将**不**使用**Expire**选项。
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

**示例**

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

获取cookie。

**签名**

```go
c.Cookies() string
c.Cookies(key string) string
c.Cookies(key []byte) string
c.Cookies(func(key, value string)) string
```

**示例**

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

## 下载

从path传输文件作为`attachment` 。

通常，浏览器会提示用户下载。默认情况下， [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)标头的`filename=`参数是path(*通常显示在浏览器对话框中*)。

使用**filename**参数覆盖此默认值。

**签名**

```go
c.Download(path, filename ...string)
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Download("./files/report-12345.pdf")
  // => Download report-12345.pdf

  c.Download("./files/report-12345.pdf", "report.pdf")
  // => Download report.pdf
})
```

## 最后

{% hint style="danger" %}
已针对**Fiber** v2进行了计划。
{% endhint %}

## Fasthttp

您仍然可以**访问**和使用所有**Fasthttp**方法和属性。

**签名**

{% hint style="info" %}
请阅读[Fasthttp文档](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc)以获取更多信息。
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

包含由panic抛出或通过`Next(err)`方法传递的错误信息.

#### 签名

```go
c.Error() error
```

#### 示例

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

## 格式化

在[Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP标头上执行内容协商。它使用[接受](context.md#accepts)来选择适当的格式。

{% hint style="info" %}
如果**未**指定标题或格式**不正确**，则使用**text/plain**。
{% endhint %}

**签名**

```go
c.Format(body interface{})
```

**示例**

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

## 表单

可以按名称检索MultipartForm文件，并返回给定键的**第一个**。

**签名**

```go
c.FormFile(name string) (*multipart.FileHeader, error)
```

**示例**

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

## 表单值

可以按名称检索MultipartForm值，并返回给定键的**第一个**值。

**签名**

```go
c.FormValue(name string) string
```

**例**

```go
app.Post("/", func(c *fiber.Ctx) {
  // Get first value from form field "name":
  c.FormValue("name")
  // => "john" or "", if not exist
})
```

## 规划

{% hint style="danger" %}
已针对**Fiber** v2进行了计划。
{% endhint %}

## 得到

返回由字段指定的HTTP请求标头。匹配不区分大小写。

**签名**

```go
c.Get(field string) string
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Get("Content-Type") // => "text/plain"
  c.Get("content-type") // => "text/plain"
  c.Get("something")    // => ""
})
```

## 请求头

{% hint style="danger" %}
已针对**Fiber** v2进行了计划。
{% endhint %}

## 主机名

包含从[Host](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) HTTP标头派生的[主机](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host)名。

**签名**

```go
c.Hostname() string
```

**示例**

```go
// GET http://google.com/search

app.Get("/", func(c *fiber.Ctx) {
  c.Hostname() // => "google.com"
})
```

## IP

返回请求的远程IP地址。

**签名**

```go
c.IP() string
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.IP() // => "127.0.0.1"
})
```

## IPs

返回在[X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)请求标头中指定的IP地址数组。

**签名**

```go
c.IPs() []string
```

**示例**

```go
// X-Forwarded-For: proxy1, 127.0.0.1", proxy3

app.Get("/", func(c *fiber.Ctx) {
  c.IPs() // => ["proxy1", "127.0.0.1", "proxy3"]
})
```

## 判断Content-Type格式

如果传入请求的[Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP标头字段与type参数指定的[MIME类型](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types)匹配，则返回匹配的**内容类型**。

{% hint style="info" %}
如果请求**没有**正文，则返回**false**。
{% endhint %}

**签名**

```go
c.Is(t string) bool
```

**示例**

```go
// Content-Type: text/html; charset=utf-8

app.Get("/", func(c *fiber.Ctx) {
  c.Is("html")  // => true
  c.Is(".html") // => true
  c.Is("json")  // => false
})
```

## JSON

使用[Jsoniter](https://github.com/json-iterator/go)将任何**接口**或**字符串**转换为JSON。

{% hint style="info" %}
方法还将内容标头设置为**application/json**。
{% endhint %}

**签名**

```go
c.JSON(v interface{}) error
```

**示例**

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

## Bytes格式JSON

原始JSON方法。

{% hint style="success" %}
如果您**不需要** JSON序列化，则在使用**原始**输入时建议使用此方法。
{% endhint %}

**签名**

```go
c.JSONBytes(b []byte) error
```

**示例**

```go
app.Get("/json", func(c *fiber.Ctx) {
  c.JSONBytes([]byte(`{"Name": "Grame", "Age": 20}`))
  // => "{"Name": "Grame", "Age": 20}"
})
```

## String格式JSON

原始JSON方法。

{% hint style="success" %}
如果您**不需要** JSON序列化，则在使用**原始**输入时建议使用此方法。
{% endhint %}

**签名**

```go
c.JSONString(s string) error
```

**示例**

```go
app.Get("/json", func(c *fiber.Ctx) {
  c.JSONString(`{"Name": "Grame", "Age": 20}`)
  // => "{"Name": "Grame", "Age": 20}"
})
```

## JSONP

发送带有JSONP支持的JSON响应。此方法与[JSON](context.md#json)相同，除了它选择加入JSONP回调支持。默认情况下，JSONP回调名称只是回调。

通过在方法中传递**命名字符串**来覆盖此方法。

**签名**

```go
c.JSONP(v interface{}, callback ...string) error
```

**示例**

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

## 链接

在链接后面加上属性，以填充响应的[链接](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Link) HTTP头。

**签名**

```go
c.Links(link ...string)
```

**示例**

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

## 本地

存储范围为请求的字符串变量的方法，因此仅适用于与请求匹配的路由。

{% hint style="success" %}
如果要将一些**特定的值**传递给下一个中间件，这很有用。
{% endhint %}

**签名**

```go
c.Locals(key string, value ...interface{}) interface{}
```

**示例**

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
你可以把任何类型的**局部变量**里面，但不要忘了将其转换回，当您使用的变量。
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

## 位置

将响应[位置](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) HTTP设置为指定的path参数。

**签名**

```go
c.Location(path string)
```

**示例**

```go
app.Post("/", func(c *fiber.Ctx) {
  c.Location("http://example.com")
  c.Location("/foo/bar")
})
```

## 方法

包含与请求的HTTP方法相对应的字符串：GET，POST，PUT等。

**签名**

```go
c.Method() string
```

**示例**

```go
app.Post("/", func(c *fiber.Ctx) {
  c.Method() // => "POST"
})
```

## 多表格

要访问多部分表单条目，可以使用`MultipartForm()`解析二进制文件。这将返回`map[string][]string` ，因此给定键的值将是字符串切片。

**签名**

```go
c.MultipartForm() (*multipart.Form, error)
```

**示例**

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

调用**Next时** ，它将在堆栈中执行与当前路由匹配的next方法。您可以在方法中传递一个用于自定义错误处理的错误结构。

**签名**

```go
c.Next(err ...error)
```

**示例**

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

## 原始地址

包含原始请求URL。

**签名**

```go
c.OriginalURL() string
```

**示例**

```go
// GET http://example.com/search?q=something

app.Get("/", func(c *fiber.Ctx) {
  c.OriginalURL() // => "/search?q=something"
})
```

## 参数

方法可用于获取路线参数。

{% hint style="info" %}
如果参数**不**存在，则默认为空字符串(`""`)。
{% endhint %}

**签名**

```go
c.Params(param string) string
```

**示例**

```go
// GET http://example.com/user/tj

app.Get("/user/:name", func(c *fiber.Ctx) {
  c.Params("name") // => "tj"
})
```

## 路径

包含请求URL的路径部分。

**签名**

```go
c.Path() string
```

**示例**

```go
// GET http://example.com/users?sort=desc

app.Get("/users", func(c *fiber.Ctx) {
  c.Path() // => "/users"
})
```

## 协议

包含请求协议字符串： **TLS**请求的`http`或`https` 。

**签名**

```go
c.Protocol() string
```

**示例**

```go
// GET http://example.com

app.Get("/", func(c *fiber.Ctx) {
  c.Protocol() // => "http"
})
```

## Query查询

此属性是一个对象，其中包含路由中每个查询字符串参数的属性。

{% hint style="info" ％}
如果**没有**查询字符串，则返回一个**空字符串**。
{% endhint %}

**签名**

```go
c.Query(parameter string) string
```

**示例**

```go
// GET http://example.com/shoes?order=desc&brand=nike

app.Get("/", func(c *fiber.Ctx) {
  c.Query("order") // => "desc"
  c.Query("brand") // => "nike"
})
```

## Range

{% hint style="danger" %}
已针对**Fiber** v2进行了计划。
{% endhint %}

## 重定向

重定向到具有指定状态的URL，该状态为与HTTP状态代码相对应的正整数。

{% hint style="info" %}
如果**未**指定，则状态默认为**302 Found**。
{% endhint %}

**签名**

```go
c.Redirect(path string, status ...int)
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Redirect("/foo/bar")
  c.Redirect("../login")
  c.Redirect("http://example.com")
  c.Redirect("http://example.com", 301)
})
```

## 渲染

{% hint style="danger" %}
已针对**Fiber** v2进行了计划。
{% endhint %}

## 路由

包含当前匹配的[Route](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route)结构。

{% hint style =“ warning” %}
**仅**将此方法用于调试。
{% endhint %}

**签名**

```go
c.Route() *Route
```

**示例**

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

## 保存文件

方法用于将**任何**多部分文件保存到磁盘。

**签名**

```go
c.SaveFile(fh *multipart.FileHeader, path string)
```

**示例**

{% hint style="success" %}
您可以在[MultipartForm](https://fiber.wiki/context#multipartform)方法中看到一个有效的示例。
{% endhint %}

## 安全

一个布尔型属性，如果已建立**TLS**连接，则为`true` 。

**签名**

```go
c.Secure() bool
```

**示例**

```go
// Secure() method is equivalent to:
c.Protocol() == "https"
```

## 发送

发送HTTP响应。 **发送**正文可以是任何类型。

{% hint style="warning" %}
方法**不会**像[Write](https://fiber.wiki/context#write)方法**那样**追加。
{% endhint %}

**签名**

```go
c.Send(body ...interface{})
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")         // => "Hello, World!"
  c.Send([]byte("Hello, World!")) // => "Hello, World!"
  c.Send(123)                     // => 123
})
```

## 发送字节

原始方法。

{% hint style="success" %}
如果**不需要**类型声明，请使用此方法，建议使用此方法以**提高**性能。
{% endhint %}

**签名**

```go
c.SendBytes(b []byte)
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendByte([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## 发送字符串

原始方法。

{% hint style="success" %}
如果**不需要**类型声明，请使用此方法，建议使用此方法以**提高**性能。
{% endhint %}

**签名**

```go
c.SendString(s string)
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendString("Hello, World!")
  // => "Hello, World!"
})
```

## 发送文件

从给定的路径传输文件。根据**文件名**扩展**名**设置[Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)响应HTTP标头字段。

{% hint style="info" %}
默认情况下使用**gzipping**方法，将其设置为**false**可禁用。
{% endhint %}

**签名**

```go
c.SendFile(path string, gzip ...bool)
```

**示例**

```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendFile("./public/404.html")

  // Disable gzipping:
  c.SendFile("./static/index.html", false)
})
```

## 发送状态

如果响应主体为**空** ，则在主体中设置状态代码和正确的状态信息。

{% hint style="success" %}
您可以[在此处](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244)找到所有使用的状态代码和和状态信息。
{% endhint %}

**签名**

```go
c.SendStatus(status int)
```

**示例**

```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendStatus(415)
  // 415 "Unsupported Media Type"

  c.Send("Hello, World!")
  c.SendStatus(415)
  // 415 "Hello, World!"
})
```

## 设置

将响应的HTTP标头字段设置为`value` 。

**签名**

```go
c.Set(field, value string)
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Set("Content-Type", "text/plain")
  // => "Content-type: text/plain"
})
```

## 签名Cookie

{% hint style="danger" %}
已针对**Fiber** v2进行了计划。
{% endhint %}

## 过期

{% hint style="danger" %}
已针对**Fiber** v2进行了计划。
{% endhint %}

## 状态

设置响应的HTTP状态。

{% hint style="info" %}
方法是可**链接的**。
{% endhint %}

**签名**

```go
c.Status(status int)
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Status(200)
  c.Status(400).Send("Bad Request")
  c.Status(404).SendFile("./public/gopher.png")
})
```

## 子域名

请求的域名中的子域数组。

应用程序属性子域偏移量（默认为`2`） 用于确定子域段的开头。

**签名**

```go
c.Subdomains(offset ...int) []string
```

**示例**

```go
// Host: "tobi.ferrets.example.com"

app.Get("/", func(c *fiber.Ctx) {
  c.Subdomains()  // => ["ferrets", "tobi"]
  c.Subdomains(1) // => ["tobi"]
})
```

## 类型

将[Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP标头设置为文件**扩展名** [在此处](https://github.com/nginx/nginx/blob/master/conf/mime.types)列出的MIME类型。

**签名**

```go
c.Type(t string) string
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Type(".html") // => "text/html"
  c.Type("html")  // => "text/html"
  c.Type("json")  // => "application/json"
  c.Type("png")   // => "image/png"
})
```

## 变化

将给定的标头字段添加到[Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary)响应标头中。如果标题尚未列出，它将附加在标题之后，否则将其保留在当前位置列出。

{% hint style="info" %}
**允许**多个字段。
{% endhint %}

**签名**

```go
c.Vary(field ...string)
```

**示例**

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

## 写

将**任何**输入追加到HTTP正文响应。

**签名**

```go
c.Write(body ...interface{})
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Write("Hello, ")         // => "Hello, "
  c.Write([]byte("World! ")) // => "Hello, World! "
  c.Write(123)               // => "Hello, World! 123"
})
```

## XHR

一个布尔型属性，如果请求的[X-Requested-With](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)标头字段为[XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) ，则为`true` ，指示该请求是由客户端库（例如[jQuery](https://api.jquery.com/jQuery.ajax/)）发出的。

**签名**

```go
c.XHR() bool
```

**示例**

```go
// X-Requested-With: XMLHttpRequest

app.Get("/", func(c *fiber.Ctx) {
  c.XHR() // => true
})
```

## XML格式

XML将标头设置为`application/xml`然后将您的接口解组为XML。

**签名**

```go
c.XML(xml interface{}) error
```

**示例**

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
