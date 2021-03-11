---
description: >-
  The Client struct represents the Fiber HTTP Client.
  
  
---

# ⚡ Client

## Start request
Start a http request with http method and url.

{% code title="Signatures" %}
```go
// Client http methods
func (c *Client) Get(url string) *Agent
func (c *Client) Head(url string) *Agent
func (c *Client) Post(url string) *Agent
func (c *Client) Put(url string) *Agent
func (c *Client) Patch(url string) *Agent
func (c *Client) Delete(url string) *Agent
```
{% endcode %}

## ✨ Agent
`Agent` is built on top of FastHTTP's [`HostClient`](https://github.com/valyala/fasthttp/blob/master/client.go#L603) which has lots of convenient helper methods such as dedicated methods for request methods.

### Parse
Parse initializes a HostClient.

{% code title="Parse" %}
```go
a := AcquireAgent()
req := a.Request()
req.Header.SetMethod(MethodGet)
req.SetRequestURI("http://example.com")

if err := a.Parse(); err != nil {
	panic(err)
}

code, body, errs := a.Bytes() // ...
```
{% endcode %}

### Set
Set sets the given `key: value` header.

{% code title="Signature" %}
```go
func (a *Agent) Set(k, v string) *Agent
func (a *Agent) SetBytesK(k []byte, v string) *Agent
func (a *Agent) SetBytesV(k string, v []byte) *Agent
func (a *Agent) SetBytesKV(k []byte, v []byte) *Agent
```
{% endcode %}

{% code title="Example" %}
```go

agent.Set("k1", "v1").
    SetBytesK([]byte("k1"), "v1").
    SetBytesV("k1", []byte("v1")).
    SetBytesKV([]byte("k2"), []byte("v2"))
// ...
```
{% endcode %}

### Add
Add adds the given `key: value` header. Multiple headers with the same key may be added with this function.

{% code title="Signature" %}
```go
func (a *Agent) Add(k, v string) *Agent
func (a *Agent) AddBytesK(k []byte, v string) *Agent
func (a *Agent) AddBytesV(k string, v []byte) *Agent
func (a *Agent) AddBytesKV(k []byte, v []byte) *Agent
```
{% endcode %}

{% code title="Example" %}
```go

agent.Add("k1", "v1").
    AddBytesK([]byte("k1"), "v1").
    AddBytesV("k1", []byte("v1")).
    AddBytesKV([]byte("k2"), []byte("v2"))
// Headers:
// K1: v1
// K1: v1
// K1: v1
// K2: v2
```
{% endcode %}

### ConnectionClose
ConnectionClose adds the `Connection: close` header.

{% code title="Signature" %}
```go
func (a *Agent) ConnectionClose() *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.ConnectionClose()
// ...
```
{% endcode %}

### UserAgent
UserAgent sets `User-Agent` header value.

{% code title="Signature" %}
```go
func (a *Agent) UserAgent(userAgent string) *Agent
func (a *Agent) UserAgentBytes(userAgent []byte) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.UserAgent("fiber")
// ...
```
{% endcode %}

### Cookie
Cookie sets a cookie in `key: value` form. `Cookies` can be used to set multiple cookies.

{% code title="Signature" %}
```go
func (a *Agent) Cookie(key, value string) *Agent
func (a *Agent) CookieBytesK(key []byte, value string) *Agent
func (a *Agent) CookieBytesKV(key, value []byte) *Agent
func (a *Agent) Cookies(kv ...string) *Agent
func (a *Agent) CookiesBytesKV(kv ...[]byte) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.Cookie("k", "v")
agent.Cookies("k1", "v1", "k2", "v2")
// ...
```
{% endcode %}

### Referer
Referer sets the Referer header value.

{% code title="Signature" %}
```go
func (a *Agent) Referer(referer string) *Agent
func (a *Agent) RefererBytes(referer []byte) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.Referer("https://docs.gofiber.io")
// ...
```
{% endcode %}

### ContentType
ContentType sets Content-Type header value.

{% code title="Signature" %}
```go
func (a *Agent) ContentType(contentType string) *Agent
func (a *Agent) ContentTypeBytes(contentType []byte) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.ContentType("custom-type")
// ...
```
{% endcode %}

### Host
Host sets the Host header.

{% code title="Signature" %}
```go
func (a *Agent) Host(host string) *Agent
func (a *Agent) HostBytes(host []byte) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.Host("example.com")
// ...
```
{% endcode %}

### QueryString
QueryString sets the URI query string.

{% code title="Signature" %}
```go
func (a *Agent) QueryString(queryString string) *Agent
func (a *Agent) QueryStringBytes(queryString []byte) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.QueryString("foo=bar")
// ...
```
{% endcode %}

### BasicAuth
BasicAuth sets the URI username and password using HTTP Basic Auth.

{% code title="Signature" %}
```go
func (a *Agent) BasicAuth(username, password string) *Agent
func (a *Agent) BasicAuthBytes(username, password []byte) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.BasicAuth("foo", "bar")
// ...
```
{% endcode %}

### Body
There are several ways to set request body.

{% code title="Signature" %}
```go
func (a *Agent) BodyString(bodyString string) *Agent
func (a *Agent) Body(body []byte) *Agent

// BodyStream sets request body stream and, optionally body size.
//
// If bodySize is >= 0, then the bodyStream must provide exactly bodySize bytes
// before returning io.EOF.
//
// If bodySize < 0, then bodyStream is read until io.EOF.
//
// bodyStream.Close() is called after finishing reading all body data
// if it implements io.Closer.
//
// Note that GET and HEAD requests cannot have body.
func (a *Agent) BodyStream(bodyStream io.Reader, bodySize int) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.BodyString("foo=bar")
agent.Body([]byte("bar=baz"))
agent.BodyStream(strings.NewReader("body=stream"), -1)
// ...
```
{% endcode %}

### JSON
JSON sends a JSON request by setting the Content-Type header to `application/json`.

{% code title="Signature" %}
```go
func (a *Agent) JSON(v interface{}) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.JSON(fiber.Map{"success": true})
// ...
```
{% endcode %}

### XML
XML sends an XML request by setting the Content-Type header to `application/xml`.

{% code title="Signature" %}
```go
func (a *Agent) XML(v interface{}) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.XML(fiber.Map{"success": true})
// ...
```
{% endcode %}

### Form
Form sends a form request by setting the Content-Type header to `application/x-www-form-urlencoded`.

{% code title="Signature" %}
```go
// Form sends form request with body if args is non-nil.
//
// It is recommended obtaining args via AcquireArgs and release it
// manually in performance-critical code.
func (a *Agent) Form(args *Args) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
args := AcquireArgs()
args.Set("foo", "bar")

agent.Form(args)
// ...
ReleaseArgs(args)
```
{% endcode %}

### MultipartForm
MultipartForm sends multipart form request by setting the Content-Type header to `multipart/form-data`. These requests can include key-value's and files.

{% code title="Signature" %}
```go
// MultipartForm sends multipart form request with k-v and files.
//
// It is recommended to obtain args via AcquireArgs and release it
// manually in performance-critical code.
func (a *Agent) Form(args *Args) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
args := AcquireArgs()
args.Set("foo", "bar")

agent.MultipartForm(args)
// ...
ReleaseArgs(args)
```
{% endcode %}

Fiber provides several methods for sending files. Note that they must be called before `MultipartForm`. 

#### Boundary
Boundary sets boundary for multipart form request.

{% code title="Signature" %}
```go
func (a *Agent) Boundary(boundary string) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.Boundary("myBoundary")
    .MultipartForm(nil)
// ...
```
{% endcode %}

#### SendFile(s)
SendFile read a file and appends it to a multipart form request. Sendfiles can be used to append multiple files.

{% code title="Signature" %}
```go
func (a *Agent) SendFile(filename string, fieldname ...string) *Agent
func (a *Agent) SendFiles(filenamesAndFieldnames ...string) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.SendFile("f", "field name")
    .SendFiles("f1", "field name1", "f2").
    .MultipartForm(nil)
// ...
```
{% endcode %}

#### FileData
FileData appends file data for multipart form request.

```go
// FormFile represents multipart form file
type FormFile struct {
    // Fieldname is form file's field name
    Fieldname string
    // Name is form file's name
    Name string
    // Content is form file's content
    Content []byte
}
```

{% code title="Signature" %}
```go
// FileData appends files for multipart form request.
//
// It is recommended obtaining formFile via AcquireFormFile and release it
// manually in performance-critical code.
func (a *Agent) FileData(formFiles ...*FormFile) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
ff1 := &FormFile{"filename1", "field name1", []byte("content")}
ff2 := &FormFile{"filename2", "field name2", []byte("content")}
agent.FileData(ff1, ff2).
    MultipartForm(nil)
// ...
```
{% endcode %}

### Debug
Debug mode enables logging request and response detail to `io.writer`(default is `os.Stdout`).

{% code title="Signature" %}
```go
func (a *Agent) Debug(w ...io.Writer) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.Debug()
// ...
```
{% endcode %}

### Timeout
Timeout sets request timeout duration.

{% code title="Signature" %}
```go
func (a *Agent) Timeout(timeout time.Duration) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.Timeout(time.Second)
// ...
```
{% endcode %}

### Reuse
Reuse enables the Agent instance to be used again after one request. If agent is reusable, then it should be released manually when it is no longer used.

{% code title="Signature" %}
```go
func (a *Agent) Reuse() *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.Reuse()
// ...
```
{% endcode %}

### InsecureSkipVerify
InsecureSkipVerify controls whether the Agent verifies the server certificate chain and host name.

{% code title="Signature" %}
```go
func (a *Agent) InsecureSkipVerify() *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.InsecureSkipVerify()
// ...
```
{% endcode %}

### TLSConfig
TLSConfig sets tls config.

{% code title="Signature" %}
```go
func (a *Agent) TLSConfig(config *tls.Config) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
// Create tls certificate
cer, _ := tls.LoadX509KeyPair("pem", "key")

config := &tls.Config{
    Certificates: []tls.Certificate{cer},
}

agent.TLSConfig(config)
// ...
```
{% endcode %}

### MaxRedirectsCount
MaxRedirectsCount sets max redirect count for GET and HEAD.

{% code title="Signature" %}
```go
func (a *Agent) MaxRedirectsCount(count int) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.MaxRedirectsCount(7)
// ...
```
{% endcode %}

### JSONEncoder
JSONEncoder sets custom json encoder.

{% code title="Signature" %}
```go
func (a *Agent) JSONEncoder(jsonEncoder utils.JSONMarshal) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.JSONEncoder(json.Marshal)
// ...
```
{% endcode %}

### JSONDecoder
JSONDecoder sets custom json decoder.

{% code title="Signature" %}
```go
func (a *Agent) JSONDecoder(jsonDecoder utils.JSONUnmarshal) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
agent.JSONDecoder(json.Unmarshal)
// ...
```
{% endcode %}

### Request
Request returns Agent request instance.

{% code title="Signature" %}
```go
func (a *Agent) Request() *Request
```
{% endcode %}

{% code title="Example" %}
```go
req := agent.Request()
// ...
```
{% endcode %}

### SetResponse
SetResponse sets custom response for the Agent instance. It is recommended obtaining custom response via AcquireResponse and release it manually in performance-critical code.

{% code title="Signature" %}
```go
func (a *Agent) SetResponse(customResp *Response) *Agent
```
{% endcode %}

{% code title="Example" %}
```go
resp := AcquireResponse()
agent.SetResponse(resp)
// ...
ReleaseResponse(resp)
```
{% endcode %}

### Dest
Dest sets custom dest. The contents of dest will be replaced by the response body, if the dest is too small a new slice will be allocated.

{% code title="Signature" %}
```go
func (a *Agent) Dest(dest []byte) *Agent {
```
{% endcode %}

{% code title="Example" %}
```go
agent.Dest(nil)
// ...
```
{% endcode %}

### Bytes
Bytes returns the status code, bytes body and errors of url.

{% code title="Signature" %}
```go
func (a *Agent) Bytes() (code int, body []byte, errs []error)
```
{% endcode %}

{% code title="Example" %}
```go
code, body, errs := agent.Bytes()
// ...
```
{% endcode %}

### String
String returns the status code, string body and errors of url.

{% code title="Signature" %}
```go
func (a *Agent) String() (int, string, []error)
```
{% endcode %}

{% code title="Example" %}
```go
code, body, errs := agent.String()
// ...
```
{% endcode %}

### Struct
Struct returns the status code, bytes body and errors of url. And bytes body will be unmarshalled to given v.

{% code title="Signature" %}
```go
func (a *Agent) Struct(v interface{}) (code int, body []byte, errs []error)
```
{% endcode %}

{% code title="Example" %}
```go
var d data
code, body, errs := agent.Struct(&d)
// ...
```
{% endcode %}
