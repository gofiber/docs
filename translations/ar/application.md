---
description: نموذج التطبيق يشير تقليدياً إلى تطبيق Fiber.
---

# 🚀 Application

## New

This method creates a new **App** named instance. You can pass optional [settings ](application.md#settings)when creating a new instance

{% code title="Signature" %}
```go
fiber.New(settings ...*Settings) *App
```
{% endcode %}

{% code title="Example" %}
```go
package main

import "github.com/gofiber/fiber"

func main() {
    app := fiber.New()

    // ...

    app.Listen(3000)
}
```
{% endcode %}

## Settings

يمكنك اجتياز إعدادات التطبيق عند الاتصال `New`.

{% code title="Example" %}
```go
func main() {
    // Pass Settings creating a new instance
    app := fiber.New(&fiber.Settings{
        Prefork:       true,
        CaseSensitive: true,
        StrictRouting: true,
        ServerHeader:  "Fiber",
    })

    // ...

    app.Listen(3000)
}
```
{% endcode %}

أو تغيير الإعدادات بعد تهيئة تطبيق `app`.

{% code title="Example" %}
```go
func main() {
    app := fiber.New()

    // Or change Settings after creating an instance
    app.Settings.Prefork = true
    app.Settings.CaseSensitive = true
    app.Settings.StrictRouting = true
    app.Settings.ServerHeader = "Fiber"

    // ...

    app.Listen(3000)
}
```
{% endcode %}

**إعدادات** **حقول**

| Property                  | Type            | Description                                                                                                                                                                                                                      | Default           |
|:------------------------- |:--------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`          | تمكين استخدام[`SO_REUSEPORT`](https://lwn.net/Articles/542629/)خيار المقطع. هذا سوف يولد عدة عمليات اذهب للاستماع على نفس الميناء. اعرف المزيد عن [قصف المقبس](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false`           |
| ServerHeader              | `string`        | تمكين `server` HTTP مع القيمة المحددة.                                                                                                                                                                                           | `""`              |
| StrictRouting             | `bool`          | عند التمكين، يتعامل جهاز التوجيه مع `/foo` و `/foo/` باعتبارهما مختلفين. عند التمكين، يتعامل جهاز التوجيه مع `/foo` و `/foo/` باعتبارهما مختلفين.                                                                                | `false`           |
| CaseSensitive             | `bool`          | عند التمكين، `/Foo` و `/foo` طرق مختلفة. عند التعطيل، يتم معاملة `/Foo`و `/foo` بنفس المعاملة.                                                                                                                                   | `false`           |
| Immutable                 | `bool`          | عند التمكين، جميع القيم المرتجعة بأساليب السياق غير قابلة للتغيير. بشكل افتراضي تكون صالحة حتى تعود من المعالج ، انظر المشكلة [\#185](https://github.com/gofiber/fiber/issues/185).                                            | `false`           |
| BodyLimit                 | `int`           | يعين الحد الأقصى المسموح به لحجم هيئة الطلب، إذا تجاوز الحجم الحد المكون، يرسل `413 - طلب كيان كبير جدا` رد.                                                                                                                     | `4 * 1024 * 1024` |
| Concurrency               | `int`           | الحد الأقصى لعدد الاتصالات المتزامنة.                                                                                                                                                                                            | `256 * 1024`      |
| DisableKeepalive          | `bool`          | تعطيل اتصالات البقاء على قيد الحياة، سيقوم الخادم بإغلاق الاتصالات الواردة بعد إرسال أول استجابة إلى العميل                                                                                                                      | `false`           |
| DisableDefaultDate        | `bool`          | عند تعيين إلى حقيقة، يؤدي رأس التاريخ الافتراضي إلى استبعاده من الاستجابة.                                                                                                                                                       | `false`           |
| DisableDefaultContentType | `bool`          | عند تعيين إلى صحيح، يؤدي إلى استبعاد رأس المحتوى الافتراضي من الاستجابة.                                                                                                                                                         | `false`           |
| DisableStartupMessage     | `bool`          | When set to true, it will not print out the fiber ASCII and "listening" on message                                                                                                                                               | `false`           |
| DisableHeaderNormalizing  | `bool`          | By default all header names are normalized: conteNT-tYPE -&gt; Content-Type                                                                                                                                                | `false`           |
| ETag                      | `bool`          | Enable or disable ETag header generation, since both weak and strong etags are generated using the same hashing method \(CRC-32\). Weak ETags are the default when enabled.                                                    | `false`           |
| Templates                 | `Templates`     | Templates is the interface that wraps the Render function. See our [**Template Middleware**](middleware.md#template) for supported engines.                                                                                      | `nil`             |
| ReadTimeout               | `time.Duration` | The amount of time allowed to read the full request including body. Default timeout is unlimited.                                                                                                                                | `nil`             |
| WriteTimeout              | `time.Duration` | The maximum duration before timing out writes of the response. Default timeout is unlimited.                                                                                                                                     | `nil`             |
| IdleTimeout               | `time.Duration` | The maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is zero, the value of ReadTimeout is used.                                                                                    | `nil`             |

## Static

استخدم طريقة **ثابت** لخدمة الملفات الثابتة مثل **صور**و **CSS** و **جافا سكريبت**.

{% hint style="info" %}
By default, **Static** will serve `index.html` files in response to a request on a directory.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => with prefix
```
{% endcode %}

استخدم التعليمة البرمجية التالية لتقديم الملفات في دليل يسمى `./public`

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

للخدمة من دلائل متعددة، يمكنك استخدام **Static** عدة مرات.

{% code title="Example" %}
```go
// Serve files from "./public" directory:
app.Static("/", "./public")

// Serve files from "./files" directory:
app.Static("/", "./files")
```
{% endcode %}

{% hint style="info" %}
استخدم ذاكرة التخزين المؤقت للوكيل العكسي مثل [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) لتحسين أداء خدمة الأصول الثابتة.
{% endhint %}

يمكنك استخدام أي بادئة المسار الظاهري \(_حيث المسار غير موجود بالفعل في نظام الملفات_\) للملفات التي يتم خدمتها بواسطة **الأسلوب الثابت** ، حدد مسار بادئة للدليل الثابت، كما هو موضح أدناه:

{% code title="Example" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

إذا كنت ترغب في أن يكون لديك تحكم أكثر قليلاً فيما يتعلق بإعدادات تقديم الملفات الثابتة. يمكنك استخدام `fiber.Static` التي تم تركيبها لتمكين إعدادات محددة.

{% code title="fiber.Static{}" %}
```go
// Static represents settings for serving static files
type Static struct {
    // Transparently compresses responses if set to true
    // This works differently than the github.com/gofiber/compression middleware
    // The server tries minimizing CPU usage by caching compressed files.
    // It adds ".fiber.gz" suffix to the original file name.
    // Optional. Default value false
    Compress bool
    // Enables byte range requests if set to true.
    // Optional. Default value false
    ByteRange bool
    // Enable directory browsing.
    // Optional. Default value false.
    Browse bool
    // Index file for serving a directory.
    // Optional. Default value "index.html".
    Index string
}
```
{% endcode %}

{% code title="Example" %}
```go
app.Static("/", "./public", fiber.Static{
  Compress:   true,
  ByteRange:  true,
  Browse:     true,
  Index:      "john.html"
})
```
{% endcode %}

## HTTP Methods

Routes an HTTP request, where **METHOD** is the [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) of the request.

{% code title="Signatures" %}
```go
// HTTP methods support :param, :optional? and *wildcards
// You are required to pass a path to each method
app.All(path string, handlers ...func(*Ctx)) []*Route
app.Get
app.Put
app.Post
app.Head
app.Patch
app.Trace
app.Delete
app.Connect
app.Options

// Use() will only match the beggining of each path
// i.e. "/john" will match "/john/doe", "/johnnnn"
// Use() does not support :param & :optional? in path
app.Use(handlers ...func(*Ctx)) *Route
app.Use(prefix string, handlers ...func(*Ctx)) *Route
```
{% endcode %}

{% code title="Example" %}
```go
app.Use("/api", func(c *fiber.Ctx) {
  c.Set("X-Custom-Header", random.String(32))
  c.Next()
})
app.Get("/api/list", func(c *fiber.Ctx) {
  c.Send("I'm a GET request!")
})
app.Post("/api/register", func(c *fiber.Ctx) {
  c.Send("I'm a POST request!")
})
```
{% endcode %}

## Group

يمكنك تجميع المسارات عن طريق إنشاء `*Group` struct.

**Signature**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**Example**

```go
func main() {
  app := fiber.New()

  api := app.Group("/api", handler)  // /api

  v1 := api.Group("/v1", handler)   // /api/v1
  v1.Get("/list", handler)          // /api/v1/list
  v1.Get("/user", handler)          // /api/v1/user

  v2 := api.Group("/v2", handler) // /api/v2
  v2.Get("/list", handler)          // /api/v2/list
  v2.Get("/user", handler)          // /api/v2/user

  app.Listen(3000)
}
```

## Listen

Binds and listens for connections on the specified address. This can be a `int` for port or `string` for address.

{% code title="Signature" %}
```go
app.Listen(address interface{}, tls ...*tls.Config) error
```
{% endcode %}

{% code title="Examples" %}
```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```
{% endcode %}

To enable **TLS/HTTPS** you can append a [**TLS config**](https://golang.org/pkg/crypto/tls/#Config).

{% code title="Example" %}
```go
cer, err := tls.LoadX509KeyPair("server.crt", "server.key")
if err != nil {
    log.Fatal(err)
}
config := &tls.Config{Certificates: []tls.Certificate{cer}}

app.Listen(443, config)
```
{% endcode %}

## Serve

You can pass your own [`net.Listener`](https://golang.org/pkg/net/#Listener) using the `Serve` method.

{% code title="Signature" %}
```go
app.Serve(ln net.Listener, tls ...*tls.Config) error
```
{% endcode %}

{% hint style="warning" %}
**Serve** does not support the [**Prefork**](application.md#settings) feature.
{% endhint %}

{% code title="Example" %}
```go
if ln, err = net.Listen("tcp4", ":8080"); err != nil {
    log.Fatal(err)
}

app.Serve(ln)
```
{% endcode %}

## Test

Testing your application is done with the **Test** method. Use this method for creating `_test.go` files or when you need to debug your routing logic. The default timeout is `200ms` if you want to disable a timeout completely, pass `-1` as a second argument.

{% code title="Signature" %}
```go
app.Test(req *http.Request, msTimeout ...int) (*http.Response, error)
```
{% endcode %}

{% code title="Example" %}
```go
// Create route with GET method for test:
app.Get("/", func(c *Ctx) {
  fmt.Println(c.BaseURL())              // => http://google.com
  fmt.Println(c.Get("X-Custom-Header")) // => hi

  c.Send("hello, World!")
})

// http.Request
req, _ := http.NewRequest("GET", "http://google.com", nil)
req.Header.Set("X-Custom-Header", "hi")

// http.Response
resp, _ := app.Test(req)

// Do something with results:
if resp.StatusCode == 200 {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hello, World!
}
```
{% endcode %}

