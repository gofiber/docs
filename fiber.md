---
description: Fiber represents the fiber package where you start to create an instance.
---

# 📦 Fiber

## New

This method creates a new **App** named instance. You can pass optional [config ](app.md#config)when creating a new instance

{% code title="Signature" %}
```go
func New(config ...Config) *App
```
{% endcode %}

{% code title="Example" %}
```go
// Default config
app := fiber.New()

// ...
```
{% endcode %}

## Config

You can pass an optional Config when creating a new Fiber instance.

{% code title="Example" %}
```go
// Custom config
app := fiber.New(fiber.Config{
    Prefork:       true,
    CaseSensitive: true,
    StrictRouting: true,
    ServerHeader:  "Fiber",
})

// ...
```
{% endcode %}

**Config fields**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Prefork | `bool` | Enables use of the[`SO_REUSEPORT`](https://lwn.net/Articles/542629/)socket option. This will spawn multiple Go processes listening on the same port. Learn more about [socket sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false` |
| ServerHeader | `string` | Enables the `Server` HTTP header with the given value. | `""` |
| StrictRouting | `bool` | When enabled, the router treats `/foo` and `/foo/` as different. Otherwise, the router treats `/foo` and `/foo/` as the same. | `false` |
| CaseSensitive | `bool` | When enabled, `/Foo` and `/foo` are different routes. When disabled, `/Foo`and `/foo` are treated the same. | `false` |
| Immutable | `bool` | When enabled, all values returned by context methods are immutable. By default, they are valid until you return from the handler; see issue [\#185](https://github.com/gofiber/fiber/issues/185). | `false` |
| UnescapePath | `bool` | Converts all encoded characters in the route back before setting the path for the context, so that the routing can also work with URL encoded special characters. | `false` |
| ETag | `bool` | Enable or disable ETag header generation, since both weak and strong etags are generated using the same hashing method \(CRC-32\). Weak ETags are the default when enabled. | `false` |
| BodyLimit | `int` | Sets the maximum allowed size for a request body, if the size exceeds the configured limit, it sends `413 - Request Entity Too Large` response. | `4 * 1024 * 1024` |
| Concurrency | `int` | Maximum number of concurrent connections. | `256 * 1024` |
| Views | `Views` | Views is the interface that wraps the Render function. See our **Template Middleware** for supported engines. | `nil` |
| ReadTimeout | `time.Duration` | The amount of time allowed to read the full request, including the body. The default timeout is unlimited. | 0 |
| WriteTimeout | `time.Duration` | The maximum duration before timing out writes of the response. The default timeout is unlimited. | 0 |
| IdleTimeout | `time.Duration` | The maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is zero, the value of ReadTimeout is used. | 0 |
| ReadBufferSize | `int` | Per-connection buffer size for requests' reading. This also limits the maximum header size. Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers \(for example, BIG cookies\). | `4096` |
| WriteBufferSize | `int` | Per-connection buffer size for responses' writing. | `4096` |
| CompressedFileSuffix | `string` | Adds a suffix to the original file name and tries saving the resulting compressed file under the new file name. | `".fiber.gz"` |
| ProxyHeader | `string` | This will enable `c.IP()` to return the value of the given header key. By default `c.IP()` will return the Remote IP from the TCP connection, this property can be useful if you are behind a load balancer e.g. _X-Forwarded-\*_. | `""` |
| GETOnly | `bool` | Rejects all non-GET requests if set to true. This option is useful as anti-DoS protection for servers accepting only GET requests. The request size is limited by ReadBufferSize if GETOnly is set. | `false` |
| ErrorHandler | `ErrorHandler` | ErrorHandler is executed when an error is returned from fiber.Handler. | `DefaultErrorHandler` |
| DisableKeepalive | `bool` | Disable keep-alive connections, the server will close incoming connections after sending the first response to client. | `false` |
| DisableDefaultDate | `bool` | When set to true causes the default date header to be excluded from the response. | `false` |
| DisableDefaultContentType | `bool` | When set to true, causes the default Content-Type header to be excluded from the Response. | `false` |
| DisableHeaderNormalizing | `bool` | By default all header names are normalized: conteNT-tYPE -&gt; Content-Type. | `false` |
| DisableStartupMessage | `bool` | When set to true, it will not print out debug information. | `false` |

## NewError

NewError creates a new HTTPError instance with an optional message

{% code title="Signature" %}
```go
func NewError(code int, message ...string) *Error
```
{% endcode %}

{% code title="Example" %}
```go
app.Get(func(c *fiber.Ctx) error {
    return fiber.NewError(782, "Custom error message")
})
```
{% endcode %}

## IsChild

IsChild determines if the current process is a result of Prefork

{% code title="Signature" %}
```go
func IsChild() bool
```
{% endcode %}

{% code title="Example" %}
```go
// Prefork will spawn child processes
app := fiber.New(fiber.Config{
    Prefork: true,
})

if !fiber.IsChild() {
    fmt.Println("I'm the parent process")
} else {
    fmt.Println("I'm a child process")
}

// ...
```
{% endcode %}

