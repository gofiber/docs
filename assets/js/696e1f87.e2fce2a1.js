"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["80765"],{93518:function(e,n,t){t.r(n),t.d(n,{default:()=>g,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"api/client","title":"\uD83C\uDF0E Client","description":"The Client struct represents the Fiber HTTP Client.","source":"@site/versioned_docs/version-v2.x/api/client.md","sourceDirName":"api","slug":"/api/client","permalink":"/api/client","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1743510804000,"sidebarPosition":5,"frontMatter":{"id":"client","title":"\uD83C\uDF0E Client","description":"The Client struct represents the Fiber HTTP Client.","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDCCB Constants","permalink":"/api/constants"},"next":{"title":"\uD83D\uDCC3 Log","permalink":"/api/log"}}'),s=t("85893"),i=t("50065");let a={id:"client",title:"\uD83C\uDF0E Client",description:"The Client struct represents the Fiber HTTP Client.",sidebar_position:5},l=void 0,d={},c=[{value:"Start request",id:"start-request",level:2},{value:"\u2728 Agent",id:"-agent",level:2},{value:"Parse",id:"parse",level:3},{value:"Set",id:"set",level:3},{value:"Add",id:"add",level:3},{value:"ConnectionClose",id:"connectionclose",level:3},{value:"UserAgent",id:"useragent",level:3},{value:"Cookie",id:"cookie",level:3},{value:"Referer",id:"referer",level:3},{value:"ContentType",id:"contenttype",level:3},{value:"Host",id:"host",level:3},{value:"QueryString",id:"querystring",level:3},{value:"BasicAuth",id:"basicauth",level:3},{value:"Body",id:"body",level:3},{value:"JSON",id:"json",level:3},{value:"XML",id:"xml",level:3},{value:"Form",id:"form",level:3},{value:"MultipartForm",id:"multipartform",level:3},{value:"Boundary",id:"boundary",level:4},{value:"SendFile(s)",id:"sendfiles",level:4},{value:"FileData",id:"filedata",level:4},{value:"Debug",id:"debug",level:3},{value:"Timeout",id:"timeout",level:3},{value:"Reuse",id:"reuse",level:3},{value:"InsecureSkipVerify",id:"insecureskipverify",level:3},{value:"TLSConfig",id:"tlsconfig",level:3},{value:"MaxRedirectsCount",id:"maxredirectscount",level:3},{value:"JSONEncoder",id:"jsonencoder",level:3},{value:"JSONDecoder",id:"jsondecoder",level:3},{value:"Request",id:"request",level:3},{value:"SetResponse",id:"setresponse",level:3},{value:"Dest",id:"dest",level:3},{value:"Bytes",id:"bytes",level:3},{value:"String",id:"string",level:3},{value:"Struct",id:"struct",level:3},{value:"RetryIf",id:"retryif",level:3}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"start-request",children:"Start request"}),"\n",(0,s.jsx)(n.p,{children:"Start a http request with http method and url."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signatures"',children:"// Client http methods\nfunc (c *Client) Get(url string) *Agent\nfunc (c *Client) Head(url string) *Agent\nfunc (c *Client) Post(url string) *Agent\nfunc (c *Client) Put(url string) *Agent\nfunc (c *Client) Patch(url string) *Agent\nfunc (c *Client) Delete(url string) *Agent\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here we present a brief example demonstrating the simulation of a proxy using our ",(0,s.jsx)(n.code,{children:"*fiber.Agent"})," methods."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Get something\nfunc getSomething(c *fiber.Ctx) (err error) {\n	agent := fiber.Get("<URL>")\n	statusCode, body, errs := agent.Bytes()\n	if len(errs) > 0 {\n		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{\n			"errs": errs,\n		})\n	}\n\n	var something fiber.Map\n	err = json.Unmarshal(body, &something)\n	if err != nil {\n		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{\n			"err": err,\n		})\n	}\n\n	return c.Status(statusCode).JSON(something)\n}\n\n// Post something\nfunc createSomething(c *fiber.Ctx) (err error) {\n	agent := fiber.Post("<URL>")\n	agent.Body(c.Body()) // set body received by request\n	statusCode, body, errs := agent.Bytes()\n	if len(errs) > 0 {\n		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{\n			"errs": errs,\n		})\n	}\n\n    // pass status code and body received by the proxy\n	return c.Status(statusCode).Send(body)\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Based on this short example, we can perceive that using the ",(0,s.jsx)(n.code,{children:"*fiber.Client"})," is very straightforward and intuitive."]}),"\n",(0,s.jsx)(n.h2,{id:"-agent",children:"\u2728 Agent"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Agent"})," is built on top of FastHTTP's ",(0,s.jsx)(n.a,{href:"https://github.com/valyala/fasthttp/blob/master/client.go#L603",children:(0,s.jsx)(n.code,{children:"HostClient"})})," which has lots of convenient helper methods such as dedicated methods for request methods."]}),"\n",(0,s.jsx)(n.h3,{id:"parse",children:"Parse"}),"\n",(0,s.jsx)(n.p,{children:"Parse initializes a HostClient."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Parse"',children:'a := AcquireAgent()\nreq := a.Request()\nreq.Header.SetMethod(MethodGet)\nreq.SetRequestURI("http://example.com")\n\nif err := a.Parse(); err != nil {\n    panic(err)\n}\n\ncode, body, errs := a.Bytes() // ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"set",children:"Set"}),"\n",(0,s.jsxs)(n.p,{children:["Set sets the given ",(0,s.jsx)(n.code,{children:"key: value"})," header."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) Set(k, v string) *Agent\nfunc (a *Agent) SetBytesK(k []byte, v string) *Agent\nfunc (a *Agent) SetBytesV(k string, v []byte) *Agent\nfunc (a *Agent) SetBytesKV(k []byte, v []byte) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.Set("k1", "v1").\n    SetBytesK([]byte("k1"), "v1").\n    SetBytesV("k1", []byte("v1")).\n    SetBytesKV([]byte("k2"), []byte("v2"))\n// ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"add",children:"Add"}),"\n",(0,s.jsxs)(n.p,{children:["Add adds the given ",(0,s.jsx)(n.code,{children:"key: value"})," header. Multiple headers with the same key may be added with this function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) Add(k, v string) *Agent\nfunc (a *Agent) AddBytesK(k []byte, v string) *Agent\nfunc (a *Agent) AddBytesV(k string, v []byte) *Agent\nfunc (a *Agent) AddBytesKV(k []byte, v []byte) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.Add("k1", "v1").\n    AddBytesK([]byte("k1"), "v1").\n    AddBytesV("k1", []byte("v1")).\n    AddBytesKV([]byte("k2"), []byte("v2"))\n// Headers:\n// K1: v1\n// K1: v1\n// K1: v1\n// K2: v2\n'})}),"\n",(0,s.jsx)(n.h3,{id:"connectionclose",children:"ConnectionClose"}),"\n",(0,s.jsxs)(n.p,{children:["ConnectionClose adds the ",(0,s.jsx)(n.code,{children:"Connection: close"})," header."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) ConnectionClose() *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:"agent.ConnectionClose()\n// ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"useragent",children:"UserAgent"}),"\n",(0,s.jsxs)(n.p,{children:["UserAgent sets ",(0,s.jsx)(n.code,{children:"User-Agent"})," header value."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) UserAgent(userAgent string) *Agent\nfunc (a *Agent) UserAgentBytes(userAgent []byte) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.UserAgent("fiber")\n// ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"cookie",children:"Cookie"}),"\n",(0,s.jsxs)(n.p,{children:["Cookie sets a cookie in ",(0,s.jsx)(n.code,{children:"key: value"})," form. ",(0,s.jsx)(n.code,{children:"Cookies"})," can be used to set multiple cookies."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) Cookie(key, value string) *Agent\nfunc (a *Agent) CookieBytesK(key []byte, value string) *Agent\nfunc (a *Agent) CookieBytesKV(key, value []byte) *Agent\nfunc (a *Agent) Cookies(kv ...string) *Agent\nfunc (a *Agent) CookiesBytesKV(kv ...[]byte) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.Cookie("k", "v")\nagent.Cookies("k1", "v1", "k2", "v2")\n// ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"referer",children:"Referer"}),"\n",(0,s.jsx)(n.p,{children:"Referer sets the Referer header value."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) Referer(referer string) *Agent\nfunc (a *Agent) RefererBytes(referer []byte) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.Referer("https://docs.gofiber.io")\n// ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"contenttype",children:"ContentType"}),"\n",(0,s.jsx)(n.p,{children:"ContentType sets Content-Type header value."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) ContentType(contentType string) *Agent\nfunc (a *Agent) ContentTypeBytes(contentType []byte) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.ContentType("custom-type")\n// ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"host",children:"Host"}),"\n",(0,s.jsx)(n.p,{children:"Host sets the Host header."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) Host(host string) *Agent\nfunc (a *Agent) HostBytes(host []byte) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.Host("example.com")\n// ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"querystring",children:"QueryString"}),"\n",(0,s.jsx)(n.p,{children:"QueryString sets the URI query string."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) QueryString(queryString string) *Agent\nfunc (a *Agent) QueryStringBytes(queryString []byte) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.QueryString("foo=bar")\n// ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"basicauth",children:"BasicAuth"}),"\n",(0,s.jsx)(n.p,{children:"BasicAuth sets the URI username and password using HTTP Basic Auth."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) BasicAuth(username, password string) *Agent\nfunc (a *Agent) BasicAuthBytes(username, password []byte) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.BasicAuth("foo", "bar")\n// ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"Body"}),"\n",(0,s.jsx)(n.p,{children:"There are several ways to set request body."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) BodyString(bodyString string) *Agent\nfunc (a *Agent) Body(body []byte) *Agent\n\n// BodyStream sets request body stream and, optionally body size.\n//\n// If bodySize is >= 0, then the bodyStream must provide exactly bodySize bytes\n// before returning io.EOF.\n//\n// If bodySize < 0, then bodyStream is read until io.EOF.\n//\n// bodyStream.Close() is called after finishing reading all body data\n// if it implements io.Closer.\n//\n// Note that GET and HEAD requests cannot have body.\nfunc (a *Agent) BodyStream(bodyStream io.Reader, bodySize int) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.BodyString("foo=bar")\nagent.Body([]byte("bar=baz"))\nagent.BodyStream(strings.NewReader("body=stream"), -1)\n// ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"json",children:"JSON"}),"\n",(0,s.jsxs)(n.p,{children:["JSON sends a JSON request by setting the Content-Type header to the ",(0,s.jsx)(n.code,{children:"ctype"})," parameter. If no ",(0,s.jsx)(n.code,{children:"ctype"})," is passed in, the header is set to ",(0,s.jsx)(n.code,{children:"application/json"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) JSON(v interface{}, ctype ...string) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.JSON(fiber.Map{"success": true})\n// ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"xml",children:"XML"}),"\n",(0,s.jsxs)(n.p,{children:["XML sends an XML request by setting the Content-Type header to ",(0,s.jsx)(n.code,{children:"application/xml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) XML(v interface{}) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.XML(fiber.Map{"success": true})\n// ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"form",children:"Form"}),"\n",(0,s.jsxs)(n.p,{children:["Form sends a form request by setting the Content-Type header to ",(0,s.jsx)(n.code,{children:"application/x-www-form-urlencoded"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"// Form sends form request with body if args is non-nil.\n//\n// It is recommended obtaining args via AcquireArgs and release it\n// manually in performance-critical code.\nfunc (a *Agent) Form(args *Args) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'args := AcquireArgs()\nargs.Set("foo", "bar")\n\nagent.Form(args)\n// ...\nReleaseArgs(args)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"multipartform",children:"MultipartForm"}),"\n",(0,s.jsxs)(n.p,{children:["MultipartForm sends multipart form request by setting the Content-Type header to ",(0,s.jsx)(n.code,{children:"multipart/form-data"}),". These requests can include key-value's and files."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"// MultipartForm sends multipart form request with k-v and files.\n//\n// It is recommended to obtain args via AcquireArgs and release it\n// manually in performance-critical code.\nfunc (a *Agent) MultipartForm(args *Args) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'args := AcquireArgs()\nargs.Set("foo", "bar")\n\nagent.MultipartForm(args)\n// ...\nReleaseArgs(args)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Fiber provides several methods for sending files. Note that they must be called before ",(0,s.jsx)(n.code,{children:"MultipartForm"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"boundary",children:"Boundary"}),"\n",(0,s.jsx)(n.p,{children:"Boundary sets boundary for multipart form request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) Boundary(boundary string) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.Boundary("myBoundary")\n    .MultipartForm(nil)\n// ...\n'})}),"\n",(0,s.jsx)(n.h4,{id:"sendfiles",children:"SendFile(s)"}),"\n",(0,s.jsx)(n.p,{children:"SendFile read a file and appends it to a multipart form request. Sendfiles can be used to append multiple files."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) SendFile(filename string, fieldname ...string) *Agent\nfunc (a *Agent) SendFiles(filenamesAndFieldnames ...string) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.SendFile("f", "field name")\n    .SendFiles("f1", "field name1", "f2").\n    .MultipartForm(nil)\n// ...\n'})}),"\n",(0,s.jsx)(n.h4,{id:"filedata",children:"FileData"}),"\n",(0,s.jsx)(n.p,{children:"FileData appends file data for multipart form request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// FormFile represents multipart form file\ntype FormFile struct {\n    // Fieldname is form file's field name\n    Fieldname string\n    // Name is form file's name\n    Name string\n    // Content is form file's content\n    Content []byte\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"// FileData appends files for multipart form request.\n//\n// It is recommended obtaining formFile via AcquireFormFile and release it\n// manually in performance-critical code.\nfunc (a *Agent) FileData(formFiles ...*FormFile) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'ff1 := &FormFile{"filename1", "field name1", []byte("content")}\nff2 := &FormFile{"filename2", "field name2", []byte("content")}\nagent.FileData(ff1, ff2).\n    MultipartForm(nil)\n// ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"debug",children:"Debug"}),"\n",(0,s.jsxs)(n.p,{children:["Debug mode enables logging request and response detail to ",(0,s.jsx)(n.code,{children:"io.writer"}),"(default is ",(0,s.jsx)(n.code,{children:"os.Stdout"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) Debug(w ...io.Writer) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:"agent.Debug()\n// ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"timeout",children:"Timeout"}),"\n",(0,s.jsx)(n.p,{children:"Timeout sets request timeout duration."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) Timeout(timeout time.Duration) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:"agent.Timeout(time.Second)\n// ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"reuse",children:"Reuse"}),"\n",(0,s.jsx)(n.p,{children:"Reuse enables the Agent instance to be used again after one request. If agent is reusable, then it should be released manually when it is no longer used."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) Reuse() *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:"agent.Reuse()\n// ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"insecureskipverify",children:"InsecureSkipVerify"}),"\n",(0,s.jsx)(n.p,{children:"InsecureSkipVerify controls whether the Agent verifies the server certificate chain and host name."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) InsecureSkipVerify() *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:"agent.InsecureSkipVerify()\n// ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tlsconfig",children:"TLSConfig"}),"\n",(0,s.jsx)(n.p,{children:"TLSConfig sets tls config."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) TLSConfig(config *tls.Config) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// Create tls certificate\ncer, _ := tls.LoadX509KeyPair("pem", "key")\n\nconfig := &tls.Config{\n    Certificates: []tls.Certificate{cer},\n}\n\nagent.TLSConfig(config)\n// ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"maxredirectscount",children:"MaxRedirectsCount"}),"\n",(0,s.jsx)(n.p,{children:"MaxRedirectsCount sets max redirect count for GET and HEAD."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) MaxRedirectsCount(count int) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:"agent.MaxRedirectsCount(7)\n// ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"jsonencoder",children:"JSONEncoder"}),"\n",(0,s.jsx)(n.p,{children:"JSONEncoder sets custom json encoder."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) JSONEncoder(jsonEncoder utils.JSONMarshal) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:"agent.JSONEncoder(json.Marshal)\n// ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"jsondecoder",children:"JSONDecoder"}),"\n",(0,s.jsx)(n.p,{children:"JSONDecoder sets custom json decoder."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) JSONDecoder(jsonDecoder utils.JSONUnmarshal) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:"agent.JSONDecoder(json.Unmarshal)\n// ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.p,{children:"Request returns Agent request instance."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) Request() *Request\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:"req := agent.Request()\n// ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setresponse",children:"SetResponse"}),"\n",(0,s.jsx)(n.p,{children:"SetResponse sets custom response for the Agent instance. It is recommended obtaining custom response via AcquireResponse and release it manually in performance-critical code."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) SetResponse(customResp *Response) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:"resp := AcquireResponse()\nagent.SetResponse(resp)\n// ...\nReleaseResponse(resp)\n"})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Example handling for response values"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example handling response"',children:'// Create a Fiber HTTP client agent\nagent := fiber.Get("https://httpbin.org/get")\n\n// Acquire a response object to store the result\nresp := fiber.AcquireResponse()\nagent.SetResponse(resp)\n\n// Perform the HTTP GET request\ncode, body, errs := agent.String()\nif errs != nil {\n    // Handle any errors that occur during the request\n    panic(errs)\n}\n\n// Print the HTTP response code and body\nfmt.Println("Response Code:", code)\nfmt.Println("Response Body:", body)\n\n// Visit and print all the headers in the response\nresp.Header.VisitAll(func(key, value []byte) {\n    fmt.Println("Header", string(key), "value", string(value))\n})\n\n// Release the response to free up resources\nfiber.ReleaseResponse(resp)\n'})}),(0,s.jsx)(n.p,{children:"Output:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",metastring:'title="Output"',children:'Response Code: 200\nResponse Body: {\n  "args": {}, \n  "headers": {\n    "Host": "httpbin.org", \n    "User-Agent": "fiber", \n    "X-Amzn-Trace-Id": "Root=1-653763d0-2555d5ba3838f1e9092f9f72"\n  }, \n  "origin": "83.137.191.1", \n  "url": "https://httpbin.org/get"\n}\n\nHeader Content-Length value 226\nHeader Content-Type value application/json\nHeader Server value gunicorn/19.9.0\nHeader Date value Tue, 24 Oct 2023 06:27:28 GMT\nHeader Connection value keep-alive\nHeader Access-Control-Allow-Origin value *\nHeader Access-Control-Allow-Credentials value true\n'})})]}),"\n",(0,s.jsx)(n.h3,{id:"dest",children:"Dest"}),"\n",(0,s.jsx)(n.p,{children:"Dest sets custom dest. The contents of dest will be replaced by the response body, if the dest is too small a new slice will be allocated."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) Dest(dest []byte) *Agent {\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:"agent.Dest(nil)\n// ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"bytes",children:"Bytes"}),"\n",(0,s.jsx)(n.p,{children:"Bytes returns the status code, bytes body and errors of url."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) Bytes() (code int, body []byte, errs []error)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:"code, body, errs := agent.Bytes()\n// ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"string",children:"String"}),"\n",(0,s.jsx)(n.p,{children:"String returns the status code, string body and errors of url."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) String() (int, string, []error)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:"code, body, errs := agent.String()\n// ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"struct",children:"Struct"}),"\n",(0,s.jsx)(n.p,{children:"Struct returns the status code, bytes body and errors of url. And bytes body will be unmarshalled to given v."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) Struct(v interface{}) (code int, body []byte, errs []error)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:"var d data\ncode, body, errs := agent.Struct(&d)\n// ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"retryif",children:"RetryIf"}),"\n",(0,s.jsx)(n.p,{children:"RetryIf controls whether a retry should be attempted after an error.\nBy default, will use isIdempotent function from fasthttp"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *Agent) RetryIf(retryIf RetryIfFunc) *Agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'agent.Get("https://example.com").RetryIf(func (req *fiber.Request) bool {\n    return req.URI() == "https://example.com"\n})\n// ...\n'})})]})}function g(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var r=t(67294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);