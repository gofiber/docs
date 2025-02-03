"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["1352"],{72487:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"client/rest","title":"\uD83D\uDDA5\uFE0F REST","description":"HTTP client for Gofiber.","source":"@site/docs/core/client/rest.md","sourceDirName":"client","slug":"/client/rest","permalink":"/next/client/rest","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/client/rest.md","tags":[],"version":"current","lastUpdatedAt":1738624341000,"sidebarPosition":1,"frontMatter":{"id":"rest","title":"\uD83D\uDDA5\uFE0F REST","description":"HTTP client for Gofiber.","sidebar_position":1,"toc_max_heading_level":5},"sidebar":"left_sidebar","previous":{"title":"\uD83C\uDF0E Client","permalink":"/next/category/-client"},"next":{"title":"\uD83D\uDCE4 Request","permalink":"/next/client/request"}}'),s=t("85893"),r=t("50065");let l={id:"rest",title:"\uD83D\uDDA5\uFE0F REST",description:"HTTP client for Gofiber.",sidebar_position:1,toc_max_heading_level:5},a=void 0,c={},d=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"New",id:"new",level:3},{value:"NewWithClient",id:"newwithclient",level:3},{value:"REST Methods",id:"rest-methods",level:2},{value:"Get",id:"get",level:3},{value:"Post",id:"post",level:3},{value:"Put",id:"put",level:3},{value:"Patch",id:"patch",level:3},{value:"Delete",id:"delete",level:3},{value:"Head",id:"head",level:3},{value:"Options",id:"options",level:3},{value:"Custom",id:"custom",level:3},{value:"Request Configuration",id:"request-configuration",level:2},{value:"R",id:"r",level:2},{value:"Hooks",id:"hooks",level:2},{value:"RequestHook",id:"requesthook",level:3},{value:"ResponseHook",id:"responsehook",level:3},{value:"AddRequestHook",id:"addrequesthook",level:3},{value:"AddResponseHook",id:"addresponsehook",level:3},{value:"JSON",id:"json",level:2},{value:"JSONMarshal",id:"jsonmarshal",level:3},{value:"JSONUnmarshal",id:"jsonunmarshal",level:3},{value:"SetJSONMarshal",id:"setjsonmarshal",level:3},{value:"SetJSONUnmarshal",id:"setjsonunmarshal",level:3},{value:"XML",id:"xml",level:2},{value:"XMLMarshal",id:"xmlmarshal",level:3},{value:"XMLUnmarshal",id:"xmlunmarshal",level:3},{value:"SetXMLMarshal",id:"setxmlmarshal",level:3},{value:"SetXMLUnmarshal",id:"setxmlunmarshal",level:3},{value:"CBOR",id:"cbor",level:2},{value:"CBORMarshal",id:"cbormarshal",level:3},{value:"CBORUnmarshal",id:"cborunmarshal",level:3},{value:"SetCBORMarshal",id:"setcbormarshal",level:3},{value:"SetCBORUnmarshal",id:"setcborunmarshal",level:3},{value:"TLS",id:"tls",level:2},{value:"TLSConfig",id:"tlsconfig",level:3},{value:"SetTLSConfig",id:"settlsconfig",level:3},{value:"SetCertificates",id:"setcertificates",level:3},{value:"SetRootCertificate",id:"setrootcertificate",level:3},{value:"SetRootCertificateFromString",id:"setrootcertificatefromstring",level:3},{value:"SetProxyURL",id:"setproxyurl",level:2},{value:"RetryConfig",id:"retryconfig",level:2},{value:"SetRetryConfig",id:"setretryconfig",level:2},{value:"BaseURL",id:"baseurl",level:2},{value:"BaseURL",id:"baseurl-1",level:3},{value:"SetBaseURL",id:"setbaseurl",level:3},{value:"Headers",id:"headers",level:2},{value:"Header",id:"header",level:3},{value:"AddHeader",id:"addheader",level:3},{value:"SetHeader",id:"setheader",level:3},{value:"AddHeaders",id:"addheaders",level:3},{value:"SetHeaders",id:"setheaders",level:3},{value:"Query Parameters",id:"query-parameters",level:2},{value:"Param",id:"param",level:3},{value:"AddParam",id:"addparam",level:3},{value:"SetParam",id:"setparam",level:3},{value:"AddParams",id:"addparams",level:3},{value:"SetParams",id:"setparams",level:3},{value:"SetParamsWithStruct",id:"setparamswithstruct",level:3},{value:"DelParams",id:"delparams",level:3},{value:"UserAgent &amp; Referer",id:"useragent--referer",level:2},{value:"SetUserAgent",id:"setuseragent",level:3},{value:"SetReferer",id:"setreferer",level:3},{value:"Path Parameters",id:"path-parameters",level:2},{value:"PathParam",id:"pathparam",level:3},{value:"SetPathParam",id:"setpathparam",level:3},{value:"SetPathParams",id:"setpathparams",level:3},{value:"SetPathParamsWithStruct",id:"setpathparamswithstruct",level:3},{value:"DelPathParams",id:"delpathparams",level:3},{value:"Cookies",id:"cookies",level:2},{value:"Cookie",id:"cookie",level:3},{value:"SetCookie",id:"setcookie",level:3},{value:"SetCookies",id:"setcookies",level:3},{value:"SetCookiesWithStruct",id:"setcookieswithstruct",level:3},{value:"DelCookies",id:"delcookies",level:3},{value:"Timeout",id:"timeout",level:2},{value:"SetTimeout",id:"settimeout",level:3},{value:"Debugging",id:"debugging",level:2},{value:"Debug",id:"debug",level:3},{value:"DisableDebug",id:"disabledebug",level:3},{value:"Cookie Jar",id:"cookie-jar",level:2},{value:"SetCookieJar",id:"setcookiejar",level:3},{value:"Dial &amp; Logger",id:"dial--logger",level:2},{value:"SetDial",id:"setdial",level:3},{value:"SetLogger",id:"setlogger",level:3},{value:"Logger",id:"logger",level:3},{value:"Reset",id:"reset",level:2},{value:"Reset",id:"reset-1",level:3},{value:"Default Client",id:"default-client",level:2},{value:"C",id:"c",level:3},{value:"Get",id:"get-1",level:3},{value:"Post",id:"post-1",level:3},{value:"Put",id:"put-1",level:3},{value:"Patch",id:"patch-1",level:3},{value:"Delete",id:"delete-1",level:3},{value:"Head",id:"head-1",level:3},{value:"Options",id:"options-1",level:3},{value:"Replace",id:"replace",level:3}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Fiber Client for Fiber v3 is a powerful HTTP client optimized for high performance and ease of use in server-side applications. Built atop the FastHTTP library, it inherits FastHTTP's high-speed HTTP protocol implementation. The client is designed for making both internal requests (within a microservices architecture) and external requests to other web services."}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Lightweight & Fast"}),": Due to its FastHTTP foundation, the Fiber Client is both lightweight and extremely performant."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Flexible Configuration"}),": Set client-level configurations (e.g., timeouts, headers) that apply to all requests, while still allowing overrides at the individual request level."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Connection Pooling"}),": Maintains a pool of persistent connections, minimizing the overhead of establishing new connections for each request."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Timeouts & Retries"}),": Supports request-level timeouts and configurable retries to handle transient errors gracefully."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"Instantiate the Fiber Client with your desired configurations, then send requests:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n\n    "github.com/gofiber/fiber/v3/client"\n)\n\nfunc main() {\n    cc := client.New()\n    cc.SetTimeout(10 * time.Second)\n\n    // Send a GET request\n    resp, err := cc.Get("https://httpbin.org/get")\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Printf("Status: %d\\n", resp.StatusCode())\n    fmt.Printf("Body: %s\\n", string(resp.Body()))\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Check out ",(0,s.jsx)(n.a,{href:"/next/client/examples",children:"examples"})," for more detailed usage examples."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type Client struct {\n    mu sync.RWMutex\n\n    fasthttp *fasthttp.Client\n\n    baseURL   string\n    userAgent string\n    referer   string\n    header    *Header\n    params    *QueryParam\n    cookies   *Cookie\n    path      *PathParam\n\n    debug bool\n\n    timeout time.Duration\n\n    // user-defined request hooks\n    userRequestHooks []RequestHook\n\n    // client package-defined request hooks\n    builtinRequestHooks []RequestHook\n\n    // user-defined response hooks\n    userResponseHooks []ResponseHook\n\n    // client package-defined response hooks\n    builtinResponseHooks []ResponseHook\n\n    jsonMarshal   utils.JSONMarshal\n    jsonUnmarshal utils.JSONUnmarshal\n    xmlMarshal    utils.XMLMarshal\n    xmlUnmarshal  utils.XMLUnmarshal\n    cborMarshal   utils.CBORMarshal\n    cborUnmarshal utils.CBORUnmarshal\n\n    cookieJar *CookieJar\n\n    // proxy\n    proxyURL string\n\n    // retry\n    retryConfig *RetryConfig\n\n    // logger\n    logger log.CommonLogger\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"new",children:"New"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"New"})," creates and returns a new Client object."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func New() *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"newwithclient",children:"NewWithClient"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NewWithClient"})," creates and returns a new Client object from an existing ",(0,s.jsx)(n.code,{children:"fasthttp.Client"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func NewWithClient(c *fasthttp.Client) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"rest-methods",children:"REST Methods"}),"\n",(0,s.jsx)(n.p,{children:"The following methods send HTTP requests using the configured client:"}),"\n",(0,s.jsx)(n.h3,{id:"get",children:"Get"}),"\n",(0,s.jsx)(n.p,{children:"Sends a GET request, similar to axios."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Get(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"post",children:"Post"}),"\n",(0,s.jsx)(n.p,{children:"Sends a POST request, similar to axios."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Post(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"put",children:"Put"}),"\n",(0,s.jsx)(n.p,{children:"Sends a PUT request, similar to axios."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Put(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"patch",children:"Patch"}),"\n",(0,s.jsx)(n.p,{children:"Sends a PATCH request, similar to axios."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Patch(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delete",children:"Delete"}),"\n",(0,s.jsx)(n.p,{children:"Sends a DELETE request, similar to axios."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Delete(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"head",children:"Head"}),"\n",(0,s.jsx)(n.p,{children:"Sends a HEAD request, similar to axios."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Head(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.p,{children:"Sends an OPTIONS request, similar to axios."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Options(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"custom",children:"Custom"}),"\n",(0,s.jsx)(n.p,{children:"Sends a custom HTTP request, similar to axios, allowing you to specify any method."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Custom(url, method string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"request-configuration",children:"Request Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Config"})," type helps configure request parameters. When setting the request body, JSON is used as the default serialization. The priority of the body sources is:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Body"}),"\n",(0,s.jsx)(n.li,{children:"FormData"}),"\n",(0,s.jsx)(n.li,{children:"File"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type Config struct {\n    Ctx context.Context\n\n    UserAgent string\n    Referer   string\n    Header    map[string]string\n    Param     map[string]string\n    Cookie    map[string]string\n    PathParam map[string]string\n\n    Timeout      time.Duration\n    MaxRedirects int\n\n    Body     any\n    FormData map[string]string\n    File     []*File\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"r",children:"R"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"R"})," creates a new ",(0,s.jsx)(n.code,{children:"Request"})," object from the client's request pool. Use ",(0,s.jsx)(n.code,{children:"ReleaseRequest()"})," to return it to the pool when done."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) R() *Request\n"})}),"\n",(0,s.jsx)(n.h2,{id:"hooks",children:"Hooks"}),"\n",(0,s.jsx)(n.p,{children:"Hooks allow you to add custom logic before a request is sent or after a response is received."}),"\n",(0,s.jsx)(n.h3,{id:"requesthook",children:"RequestHook"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RequestHook"})," returns user-defined request hooks."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) RequestHook() []RequestHook\n"})}),"\n",(0,s.jsx)(n.h3,{id:"responsehook",children:"ResponseHook"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ResponseHook"})," returns user-defined response hooks."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) ResponseHook() []ResponseHook\n"})}),"\n",(0,s.jsx)(n.h3,{id:"addrequesthook",children:"AddRequestHook"}),"\n",(0,s.jsx)(n.p,{children:"Adds one or more user-defined request hooks."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) AddRequestHook(h ...RequestHook) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"addresponsehook",children:"AddResponseHook"}),"\n",(0,s.jsx)(n.p,{children:"Adds one or more user-defined response hooks."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) AddResponseHook(h ...ResponseHook) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"json",children:"JSON"}),"\n",(0,s.jsx)(n.h3,{id:"jsonmarshal",children:"JSONMarshal"}),"\n",(0,s.jsx)(n.p,{children:"Returns the JSON marshaler function used by the client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) JSONMarshal() utils.JSONMarshal\n"})}),"\n",(0,s.jsx)(n.h3,{id:"jsonunmarshal",children:"JSONUnmarshal"}),"\n",(0,s.jsx)(n.p,{children:"Returns the JSON unmarshaller function used by the client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) JSONUnmarshal() utils.JSONUnmarshal\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setjsonmarshal",children:"SetJSONMarshal"}),"\n",(0,s.jsx)(n.p,{children:"Sets a custom JSON marshaler."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetJSONMarshal(f utils.JSONMarshal) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setjsonunmarshal",children:"SetJSONUnmarshal"}),"\n",(0,s.jsx)(n.p,{children:"Sets a custom JSON unmarshaller."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetJSONUnmarshal(f utils.JSONUnmarshal) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"xml",children:"XML"}),"\n",(0,s.jsx)(n.h3,{id:"xmlmarshal",children:"XMLMarshal"}),"\n",(0,s.jsx)(n.p,{children:"Returns the XML marshaler function used by the client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) XMLMarshal() utils.XMLMarshal\n"})}),"\n",(0,s.jsx)(n.h3,{id:"xmlunmarshal",children:"XMLUnmarshal"}),"\n",(0,s.jsx)(n.p,{children:"Returns the XML unmarshaller function used by the client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) XMLUnmarshal() utils.XMLUnmarshal\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setxmlmarshal",children:"SetXMLMarshal"}),"\n",(0,s.jsx)(n.p,{children:"Sets a custom XML marshaler."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetXMLMarshal(f utils.XMLMarshal) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setxmlunmarshal",children:"SetXMLUnmarshal"}),"\n",(0,s.jsx)(n.p,{children:"Sets a custom XML unmarshaller."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetXMLUnmarshal(f utils.XMLUnmarshal) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cbor",children:"CBOR"}),"\n",(0,s.jsx)(n.h3,{id:"cbormarshal",children:"CBORMarshal"}),"\n",(0,s.jsx)(n.p,{children:"Returns the CBOR marshaler function used by the client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) CBORMarshal() utils.CBORMarshal\n"})}),"\n",(0,s.jsx)(n.h3,{id:"cborunmarshal",children:"CBORUnmarshal"}),"\n",(0,s.jsx)(n.p,{children:"Returns the CBOR unmarshaller function used by the client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) CBORUnmarshal() utils.CBORUnmarshal\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setcbormarshal",children:"SetCBORMarshal"}),"\n",(0,s.jsx)(n.p,{children:"Sets a custom CBOR marshaler."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetCBORMarshal(f utils.CBORMarshal) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setcborunmarshal",children:"SetCBORUnmarshal"}),"\n",(0,s.jsx)(n.p,{children:"Sets a custom CBOR unmarshaller."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetCBORUnmarshal(f utils.CBORUnmarshal) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tls",children:"TLS"}),"\n",(0,s.jsx)(n.h3,{id:"tlsconfig",children:"TLSConfig"}),"\n",(0,s.jsx)(n.p,{children:"Returns the client's TLS configuration. If none is set, it initializes a new one."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) TLSConfig() *tls.Config\n"})}),"\n",(0,s.jsx)(n.h3,{id:"settlsconfig",children:"SetTLSConfig"}),"\n",(0,s.jsx)(n.p,{children:"Sets the TLS configuration for the client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetTLSConfig(config *tls.Config) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setcertificates",children:"SetCertificates"}),"\n",(0,s.jsx)(n.p,{children:"Adds client certificates to the TLS configuration."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetCertificates(certs ...tls.Certificate) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setrootcertificate",children:"SetRootCertificate"}),"\n",(0,s.jsx)(n.p,{children:"Adds one or more root certificates to the client's trust store."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetRootCertificate(path string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setrootcertificatefromstring",children:"SetRootCertificateFromString"}),"\n",(0,s.jsx)(n.p,{children:"Adds one or more root certificates from a string."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetRootCertificateFromString(pem string) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setproxyurl",children:"SetProxyURL"}),"\n",(0,s.jsx)(n.p,{children:"Sets a proxy URL for the client. All subsequent requests will use this proxy."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetProxyURL(proxyURL string) error\n"})}),"\n",(0,s.jsx)(n.h2,{id:"retryconfig",children:"RetryConfig"}),"\n",(0,s.jsx)(n.p,{children:"Returns the retry configuration of the client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) RetryConfig() *RetryConfig\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setretryconfig",children:"SetRetryConfig"}),"\n",(0,s.jsx)(n.p,{children:"Sets the retry configuration for the client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetRetryConfig(config *RetryConfig) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"baseurl",children:"BaseURL"}),"\n",(0,s.jsx)(n.h3,{id:"baseurl-1",children:"BaseURL"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BaseURL"})," returns the base URL currently set in the client."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) BaseURL() string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setbaseurl",children:"SetBaseURL"}),"\n",(0,s.jsx)(n.p,{children:"Sets a base URL prefix for all requests made by the client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetBaseURL(url string) *Client\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'cc := client.New()\ncc.SetBaseURL("https://httpbin.org/")\n\nresp, err := cc.Get("/get")\nif err != nil {\n    panic(err)\n}\n\nfmt.Println(string(resp.Body()))\n'})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Click here to see the result"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "args": {},\n  ...\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"headers",children:"Headers"}),"\n",(0,s.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,s.jsx)(n.p,{children:"Retrieves all values of a header key at the client level. The returned values apply to all requests."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Header(key string) []string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"addheader",children:"AddHeader"}),"\n",(0,s.jsx)(n.p,{children:"Adds a single header to all requests initiated by this client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) AddHeader(key, val string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setheader",children:"SetHeader"}),"\n",(0,s.jsx)(n.p,{children:"Sets a single header, overriding any existing headers with the same key."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetHeader(key, val string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"addheaders",children:"AddHeaders"}),"\n",(0,s.jsx)(n.p,{children:"Adds multiple headers at once, all applying to all future requests from this client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) AddHeaders(h map[string][]string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setheaders",children:"SetHeaders"}),"\n",(0,s.jsx)(n.p,{children:"Sets multiple headers at once, overriding previously set headers."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetHeaders(h map[string]string) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,s.jsx)(n.h3,{id:"param",children:"Param"}),"\n",(0,s.jsx)(n.p,{children:"Returns the values for a given query parameter key."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Param(key string) []string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"addparam",children:"AddParam"}),"\n",(0,s.jsx)(n.p,{children:"Adds a single query parameter for all requests."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) AddParam(key, val string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setparam",children:"SetParam"}),"\n",(0,s.jsx)(n.p,{children:"Sets a single query parameter, overriding previously set values."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetParam(key, val string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"addparams",children:"AddParams"}),"\n",(0,s.jsx)(n.p,{children:"Adds multiple query parameters from a map of string slices."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) AddParams(m map[string][]string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setparams",children:"SetParams"}),"\n",(0,s.jsx)(n.p,{children:"Sets multiple query parameters from a map, overriding previously set values."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetParams(m map[string]string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setparamswithstruct",children:"SetParamsWithStruct"}),"\n",(0,s.jsx)(n.p,{children:"Sets multiple query parameters from a struct. Nested structs are not currently supported."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetParamsWithStruct(v any) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delparams",children:"DelParams"}),"\n",(0,s.jsx)(n.p,{children:"Deletes one or more query parameters."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) DelParams(key ...string) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"useragent--referer",children:"UserAgent & Referer"}),"\n",(0,s.jsx)(n.h3,{id:"setuseragent",children:"SetUserAgent"}),"\n",(0,s.jsx)(n.p,{children:"Sets the user agent header for all requests."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetUserAgent(ua string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setreferer",children:"SetReferer"}),"\n",(0,s.jsx)(n.p,{children:"Sets the referer header for all requests."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetReferer(r string) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"path-parameters",children:"Path Parameters"}),"\n",(0,s.jsx)(n.h3,{id:"pathparam",children:"PathParam"}),"\n",(0,s.jsx)(n.p,{children:"Returns the value of a named path parameter, if set."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) PathParam(key string) string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setpathparam",children:"SetPathParam"}),"\n",(0,s.jsx)(n.p,{children:"Sets a single path parameter."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetPathParam(key, val string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setpathparams",children:"SetPathParams"}),"\n",(0,s.jsx)(n.p,{children:"Sets multiple path parameters at once."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetPathParams(m map[string]string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setpathparamswithstruct",children:"SetPathParamsWithStruct"}),"\n",(0,s.jsx)(n.p,{children:"Sets multiple path parameters from a struct."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetPathParamsWithStruct(v any) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delpathparams",children:"DelPathParams"}),"\n",(0,s.jsx)(n.p,{children:"Deletes one or more path parameters."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) DelPathParams(key ...string) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cookies",children:"Cookies"}),"\n",(0,s.jsx)(n.h3,{id:"cookie",children:"Cookie"}),"\n",(0,s.jsx)(n.p,{children:"Returns the value of a named cookie if set at the client level."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Cookie(key string) string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setcookie",children:"SetCookie"}),"\n",(0,s.jsx)(n.p,{children:"Sets a single cookie for all requests."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetCookie(key, val string) *Client\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'cc := client.New()\ncc.SetCookie("john", "doe")\n\nresp, err := cc.Get("https://httpbin.org/cookies")\nif err != nil {\n    panic(err)\n}\n\nfmt.Println(string(resp.Body()))\n'})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Click here to see the result"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "cookies": {\n    "john": "doe"\n  }\n}\n'})})]}),"\n",(0,s.jsx)(n.h3,{id:"setcookies",children:"SetCookies"}),"\n",(0,s.jsx)(n.p,{children:"Sets multiple cookies at once."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetCookies(m map[string]string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setcookieswithstruct",children:"SetCookiesWithStruct"}),"\n",(0,s.jsx)(n.p,{children:"Sets multiple cookies from a struct."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetCookiesWithStruct(v any) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delcookies",children:"DelCookies"}),"\n",(0,s.jsx)(n.p,{children:"Deletes one or more cookies."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) DelCookies(key ...string) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"timeout",children:"Timeout"}),"\n",(0,s.jsx)(n.h3,{id:"settimeout",children:"SetTimeout"}),"\n",(0,s.jsx)(n.p,{children:"Sets a default timeout for all requests, which can be overridden per request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetTimeout(t time.Duration) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"debugging",children:"Debugging"}),"\n",(0,s.jsx)(n.h3,{id:"debug",children:"Debug"}),"\n",(0,s.jsx)(n.p,{children:"Enables debug-level logging output."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Debug() *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"disabledebug",children:"DisableDebug"}),"\n",(0,s.jsx)(n.p,{children:"Disables debug-level logging output."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) DisableDebug() *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cookie-jar",children:"Cookie Jar"}),"\n",(0,s.jsx)(n.h3,{id:"setcookiejar",children:"SetCookieJar"}),"\n",(0,s.jsx)(n.p,{children:"Assigns a cookie jar to the client to store and manage cookies across requests."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetCookieJar(cookieJar *CookieJar) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"dial--logger",children:"Dial & Logger"}),"\n",(0,s.jsx)(n.h3,{id:"setdial",children:"SetDial"}),"\n",(0,s.jsx)(n.p,{children:"Sets a custom dial function."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetDial(dial fasthttp.DialFunc) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setlogger",children:"SetLogger"}),"\n",(0,s.jsx)(n.p,{children:"Sets the logger instance used by the client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetLogger(logger log.CommonLogger) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"logger",children:"Logger"}),"\n",(0,s.jsx)(n.p,{children:"Returns the current logger instance."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Logger() log.CommonLogger\n"})}),"\n",(0,s.jsx)(n.h2,{id:"reset",children:"Reset"}),"\n",(0,s.jsx)(n.h3,{id:"reset-1",children:"Reset"}),"\n",(0,s.jsx)(n.p,{children:"Clears and resets the client to its default state."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Reset()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"default-client",children:"Default Client"}),"\n",(0,s.jsxs)(n.p,{children:["Fiber provides a default client (created with ",(0,s.jsx)(n.code,{children:"New()"}),"). You can configure it or replace it as needed."]}),"\n",(0,s.jsx)(n.h3,{id:"c",children:"C"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"C"})," returns the default client."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func C() *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"get-1",children:"Get"}),"\n",(0,s.jsxs)(n.p,{children:["Get is a convenience method that sends a GET request using the ",(0,s.jsx)(n.code,{children:"defaultClient"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Get(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"post-1",children:"Post"}),"\n",(0,s.jsxs)(n.p,{children:["Post is a convenience method that sends a POST request using the ",(0,s.jsx)(n.code,{children:"defaultClient"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Post(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"put-1",children:"Put"}),"\n",(0,s.jsxs)(n.p,{children:["Put is a convenience method that sends a PUT request using the ",(0,s.jsx)(n.code,{children:"defaultClient"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Put(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"patch-1",children:"Patch"}),"\n",(0,s.jsxs)(n.p,{children:["Patch is a convenience method that sends a PATCH request using the ",(0,s.jsx)(n.code,{children:"defaultClient"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Patch(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delete-1",children:"Delete"}),"\n",(0,s.jsxs)(n.p,{children:["Delete is a convenience method that sends a DELETE request using the ",(0,s.jsx)(n.code,{children:"defaultClient"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Delete(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"head-1",children:"Head"}),"\n",(0,s.jsxs)(n.p,{children:["Head sends a HEAD request using the ",(0,s.jsx)(n.code,{children:"defaultClient"}),", a convenience method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Head(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"options-1",children:"Options"}),"\n",(0,s.jsxs)(n.p,{children:["Options is a convenience method that sends an OPTIONS request using the ",(0,s.jsx)(n.code,{children:"defaultClient"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Options(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"replace",children:"Replace"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Replace"})," replaces the default client with a new one. It returns a function that can restore the old client."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Do not modify the default client concurrently."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Replace(c *Client) func()\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var i=t(67294);let s={},r=i.createContext(s);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);