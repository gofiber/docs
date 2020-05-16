---
description: کلمه app معمولا به یک برنامه Fiber اشاره می کند.
---

# 🚀 Application

## New

این متد یک **App** جدید ایجاد می کند.  
شما می توانید هنگام ایجاد یک app جدید [تنظیمات ](application.md#settings) اختیاری آن را ارسال کنید

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

شما می توانید هنگام فراخوانی `New` تنظیمات برنامه را ارسال کنید.

{% code title="Example" %}
```go
func main() {
    // ارسال تنظیمات هنگام ایجاد یک app جدید
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

یا بعد از ایجاد یک `app` تنظیمات آن را تغییر دهید.

{% code title="Example" %}
```go
func main() {
    app := fiber.New()

    // تغییر تنظیمات بعد از ایجاد یک app
    app.Settings.Prefork = true
    app.Settings.CaseSensitive = true
    app.Settings.StrictRouting = true
    app.Settings.ServerHeader = "Fiber"

    // ...

    app.Listen(3000)
}
```
{% endcode %}

**پارامترهای** **تنظیمات**

| ویژگی                     | نوع                                                  | توضیحات                                                                                                                                                                                                                                                                 | پیش‌فرض           |
|:------------------------- |:---------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`                                               | استفاده از گزینه سوکت [`SO_REUSEPORT`](https://lwn.net/Articles/542629/) را فعال می کند. این گزینه باعث می شود تا چندین پردازش Go از یک پورت استفاده کنند. در مورد [socket sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/) بیشتر یاد بگیرید. | `false`           |
| ServerHeader              | `string`                                             | هدر HTTP `Server` را با مقدار داده شده مقداردهی می کند.                                                                                                                                                                                                                 | `""`              |
| StrictRouting             | `bool`                                               | در صورت فعال بودن، روتر برای `/foo` و `/foo/` تمایز قائل می شود. در غیر این صورت، روتر برای `/foo` و `/foo/` یکسان عمل می کند.                                                                                                                                          | `false`           |
| CaseSensitive             | `bool`                                               | در صورت فعال بودن، `/Foo` و `/foo` مسیرهای متفاوتی هستند. در صورت غیرفعال بودن، `/Foo`و `/foo` یکسان تلقی می شوند.                                                                                                                                                      | `false`           |
| Immutable                 | `bool`                                               | درصورت فعال بودن، تمام مقادیر به صورت تغییرناپذیر توسط context بازگشت داده می شوند. به صورت پیش‌فرض تمام مقادیر تا هنگامی که از هندلر برمی گردید معتبر هستند، این موضوع را ببینید [\#185](https://github.com/gofiber/fiber/issues/185).                               | `false`           |
| BodyLimit                 | `int`                                                | حداکثر اندازه بدنه ی یک درخواست را تنظیم می کند، اگر اندازه از حد تنظیم شده تجاوز کند، خطای `413 - Request Entity Too Large` ارسال می کند.                                                                                                                              | `4 * 1024 * 1024` |
| Concurrency               | `int`                                                | حداکثر تعداد کانکشن های همزمان.                                                                                                                                                                                                                                         | `256 * 1024`      |
| DisableKeepalive          | `bool`                                               | با غیرفعال کردن کانکشن های keep-alive، سرور کانکشن های ورودی را بعد از ارسال اولین پاسخ به کلاینت خواهد بست                                                                                                                                                             | `false`           |
| DisableDefaultDate        | `bool`                                               | در صورت مقداردهی با true، هدر پیش‌فرض تاریخ حذف می شود.                                                                                                                                                                                                                 | `false`           |
| DisableDefaultContentType | `bool`                                               | در صورت مقداردهی با true، باعث می شود تا هدر Content-Type از ریسپانس حذف شود.                                                                                                                                                                                           | `false`           |
| DisableStartupMessage     | `bool`                                               | در صورت مقداردهی با true، پیغام fiber ASCII و "listening" چاپ نمی شود                                                                                                                                                                                                   | `false`           |
| ETag                      | `bool`                                               | فعال یا غیرفعال کردن ساختن هدر ETag، در صورت فعال بودن هر دو حالت ETag ضعیف و قوی با استفاده از یک متد هش یکسان ساخته می شوند \(CRC-32\). در صورت فعال بودن، ETagهای ضعیف پیش‌فرض هستند.                                                                              | `false`           |
| TemplateEngine            | `func(raw string, bind interface{}) (string, error)` | شما می توانید یک تابع شخصی سازی شده قالب بندی، برای رندر کردن زبان های مختلف قالب بندی، مشخص کنید. [**میان افزار قالب بندی**](middleware.md#template) پیش فرض را ببینید.                                                                                                | `nil`             |
| TemplateFolder            | `string`                                             | یک دایرکتوری برای تمپلیت های برنامه. اگر یک دایرکتوری تنظیم شود، به عنوان پیشوندی برای مسیر تمام تمپلیت ها نیز خواهد بود. `c.Render("home", data) -> ./views/home.pug`                                                                                               | `""`              |
| TemplateExtension         | `string`                                             | اگر فرمت فایل تمپلیت را تنظیم کنید، نیازی به ارسال نام کامل فایل به تابع Render نخواهید داشت: `c.Render("home", data) -> home.pug`                                                                                                                                   | `""`              |
| ReadTimeout               | `time.Duration`                                      | مقدار زمان مجاز به خواندن کامل درخواست شامل بدنه. مهلت پیش‌فرض نامحدود است.                                                                                                                                                                                             | `nil`             |
| WriteTimeout              | `time.Duration`                                      | حداکثر مدت زمان قبل از پایان زمان نوشتن پاسخ. مهلت پیش‌فرض نامحدود است.                                                                                                                                                                                                 | `nil`             |
| IdleTimeout               | `time.Duration`                                      | حداکثر مدت زمان برای منتظر ماندن تا درخواست بعدی هنگامی که keep-alive فعال شده است. اگر IdleTimeout صفر باشد، از مقدار ReadTimeout استفاده می شود.                                                                                                                      | `nil`             |

## Static

از متد **Static** برای پردازش فایل های استاتیک مثل **images** ،**CSS** و **JavaScript** استفاده کنید.

{% hint style="info" %}
By default, **Static** will serve `index.html` files in response to a request on a directory.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => با پیشوند
```
{% endcode %}

از کد زیر برای پردازش فایل های یک دایرکتوری به اسم `./public` استفاده کنید

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

برای پردازش از چند دایرکتوری، می توانید از **Static** چندین بار استفاده کنید.

{% code title="Example" %}
```go
// پردازش فایل های دایرکتوری "public/.":
app.Static("/", "./public")

// پردازش فایل های دایرکتوری "files/.":
app.Static("/", "./files")
```
{% endcode %}

{% hint style="info" %}
از یک reverse proxy cache مثل [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) برای افزایش کارایی پردازش فایل های استاتیک استفاده کنید.
{% endhint %}

از هر پیشوند مسیر مجازی \(_در حالی که این مسیر در سیستم فایل وجود ندارد_\) برای پردازش فایل هایی که توسط متد **Static** انجام می شود، می توانید استفاده کنید. مانند مثال زیر، برای مسیر دایرکتوری استاتیک یک پشوند تعیین کنید:

{% code title="Example" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

اگر می خواهید کنترل بیشتری روی پردازش فایل های استاتیک داشته باشید، می توانید از استراکت `fiber.Static` برای تنظیمات بیشتر استفاده کنید.

{% code title="fiber.Static{}" %}
```go
// Static نمایانگر تنظیمات برای پردازش فایل های استاتیک است
type Static struct {
    // اگر با true مقداردهی شود خروجی ها را فشرده سازی می کند
    // عملکرد این ویژگی با میان افزار github.com/gofiber/compression متفاوت است
    // سرور تلاش می کند تا با کش کردن فایل های فشرده شده، میزان استفاده از CPU را کاهش دهد.
    پسوند "fiber.gz." را به نام اصلی فایل اضافه می کند.
    // اختیاری. مقدار پیش‌فرض false
    Compress bool
    // اگر به true تنظیم شود، درخواست های byte range را فعال می کند.
    // اختیاری. مقدار پیش‌فرض false
    ByteRange bool
    // فعال کردن جستجوگر دایرکتوری.
    // اختیاری. مقدار پیش‌فرض false.
    Browse bool
    // فایل ایندکس برای پردازش دایرکتوری.
    // اختیاری. مقدار پیش‌فرض "index.html".
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

یک درخواست HTTP را مسیریابی می کند، در حالی که **METHOD** همان [HTTP متد](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) است.

{% code title="Signatures" %}
```go
// متدهای HTTP از param: ، :optional? و *wildcards
// ارسال یک مسیر به هر متد اجباری است
app.All(path string, handlers ...func(*Ctx)) *Fiber
app.Get
app.Put
app.Post
app.Head
app.Patch
app.Trace
app.Delete
app.Connect
app.Options

// ()Use فقط ابتدای هر مسیر را مطابقت می دهد
// برای مثال "john/" این موارد را هم مطابقت می دهد "/john/doe", "/johnnnn"
// ()Use از :param و :optional? پشتیبانی نمی کند 
app.Use(handlers ...func(*Ctx))
app.Use(prefix string, handlers ...func(*Ctx)) *Fiber
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

You can group routes by creating a `*Group` struct.

**Signature**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**Example**

```go
func main() {
  app := fiber.New()

  api := app.Group("/api", cors())  // /api

  v1 := api.Group("/v1", mysql())   // /api/v1
  v1.Get("/list", handler)          // /api/v1/list
  v1.Get("/user", handler)          // /api/v1/user

  v2 := api.Group("/v2", mongodb()) // /api/v2
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
**Serve** does not support the ****[**Prefork** ](application.md#settings)feature.
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

