"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["1352"],{72487:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"client/rest","title":"\uD83D\uDDA5\uFE0F REST","description":"HTTP client for Gofiber.","source":"@site/docs/core/client/rest.md","sourceDirName":"client","slug":"/client/rest","permalink":"/next/client/rest","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/client/rest.md","tags":[],"version":"current","lastUpdatedAt":1732893234000,"sidebarPosition":1,"frontMatter":{"id":"rest","title":"\uD83D\uDDA5\uFE0F REST","description":"HTTP client for Gofiber.","sidebar_position":1,"toc_max_heading_level":5},"sidebar":"left_sidebar","previous":{"title":"\uD83C\uDF0E Client","permalink":"/next/category/-client"},"next":{"title":"\uD83D\uDCE4 Request","permalink":"/next/client/request"}}'),s=t("85893"),l=t("50065");let r={id:"rest",title:"\uD83D\uDDA5\uFE0F REST",description:"HTTP client for Gofiber.",sidebar_position:1,toc_max_heading_level:5},a=void 0,c={},d=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"New",id:"new",level:3},{value:"NewWithClient",id:"newwithclient",level:3},{value:"REST Methods",id:"rest-methods",level:2},{value:"Get",id:"get",level:3},{value:"Post",id:"post",level:3},{value:"Put",id:"put",level:3},{value:"Patch",id:"patch",level:3},{value:"Delete",id:"delete",level:3},{value:"Head",id:"head",level:3},{value:"Options",id:"options",level:3},{value:"Custom",id:"custom",level:3},{value:"Request Configuration",id:"request-configuration",level:2},{value:"R",id:"r",level:3},{value:"Hooks",id:"hooks",level:3},{value:"RequestHook",id:"requesthook",level:4},{value:"ResponseHook",id:"responsehook",level:4},{value:"AddRequestHook",id:"addrequesthook",level:4},{value:"AddResponseHook",id:"addresponsehook",level:4},{value:"JSON",id:"json",level:3},{value:"JSONMarshal",id:"jsonmarshal",level:4},{value:"JSONUnmarshal",id:"jsonunmarshal",level:4},{value:"SetJSONMarshal",id:"setjsonmarshal",level:4},{value:"SetJSONUnmarshal",id:"setjsonunmarshal",level:4},{value:"XML",id:"xml",level:3},{value:"XMLMarshal",id:"xmlmarshal",level:4},{value:"XMLUnmarshal",id:"xmlunmarshal",level:4},{value:"SetXMLMarshal",id:"setxmlmarshal",level:4},{value:"SetXMLUnmarshal",id:"setxmlunmarshal",level:4},{value:"TLS",id:"tls",level:3},{value:"TLSConfig",id:"tlsconfig",level:4},{value:"SetTLSConfig",id:"settlsconfig",level:4},{value:"SetCertificates",id:"setcertificates",level:4},{value:"SetRootCertificate",id:"setrootcertificate",level:4},{value:"SetRootCertificateFromString",id:"setrootcertificatefromstring",level:4},{value:"SetProxyURL",id:"setproxyurl",level:3},{value:"RetryConfig",id:"retryconfig",level:3},{value:"SetRetryConfig",id:"setretryconfig",level:3},{value:"BaseURL",id:"baseurl",level:3},{value:"SetBaseURL",id:"setbaseurl",level:3},{value:"Header",id:"header",level:3},{value:"AddHeader",id:"addheader",level:4},{value:"SetHeader",id:"setheader",level:4},{value:"AddHeaders",id:"addheaders",level:4},{value:"SetHeaders",id:"setheaders",level:4},{value:"Param",id:"param",level:3},{value:"AddParam",id:"addparam",level:4},{value:"SetParam",id:"setparam",level:4},{value:"AddParams",id:"addparams",level:4},{value:"SetParams",id:"setparams",level:4},{value:"SetParamsWithStruct",id:"setparamswithstruct",level:4},{value:"DelParams",id:"delparams",level:4},{value:"SetUserAgent",id:"setuseragent",level:3},{value:"SetReferer",id:"setreferer",level:3},{value:"PathParam",id:"pathparam",level:3},{value:"SetPathParam",id:"setpathparam",level:4},{value:"SetPathParams",id:"setpathparams",level:4},{value:"SetPathParamsWithStruct",id:"setpathparamswithstruct",level:4},{value:"DelPathParams",id:"delpathparams",level:4},{value:"Cookie",id:"cookie",level:3},{value:"SetCookie",id:"setcookie",level:4},{value:"SetCookies",id:"setcookies",level:4},{value:"SetCookiesWithStruct",id:"setcookieswithstruct",level:4},{value:"DelCookies",id:"delcookies",level:4},{value:"SetTimeout",id:"settimeout",level:3},{value:"Debug",id:"debug",level:3},{value:"DisableDebug",id:"disabledebug",level:4},{value:"SetCookieJar",id:"setcookiejar",level:3},{value:"SetDial",id:"setdial",level:3},{value:"SetLogger",id:"setlogger",level:3},{value:"Logger",id:"logger",level:3},{value:"Reset",id:"reset",level:3},{value:"Default Client",id:"default-client",level:2},{value:"C",id:"c",level:3},{value:"Get",id:"get-1",level:3},{value:"Post",id:"post-1",level:3},{value:"Put",id:"put-1",level:3},{value:"Patch",id:"patch-1",level:3},{value:"Delete",id:"delete-1",level:3},{value:"Head",id:"head-1",level:3},{value:"Options",id:"options-1",level:3},{value:"Replace",id:"replace",level:3}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{Details:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Fiber Client for Fiber v3 is a powerful HTTP client optimized for high performance and ease of use in server-side applications. Built on top of the robust FastHTTP library, it inherits FastHTTP's high-speed HTTP protocol implementation. The client is designed to make HTTP requests both internally within services or externally to other web services."}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Lightweight & Fast"}),": Leveraging the minimalistic design of FastHTTP, the Fiber Client is lightweight and extremely fast."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Flexible Configuration"}),": Configure client-level settings such as timeouts, headers, and more, which apply to all requests. Specific requests can further override or merge these settings."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Connection Pooling"}),": Manages a pool of persistent connections that reduce the overhead of repeatedly establishing connections."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Timeouts & Retries"}),": Supports setting request timeouts and retry mechanisms to handle transient failures."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"To use the Fiber Client, instantiate it with the desired configuration. Here's a simple example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n\n    "github.com/gofiber/fiber/v3/client"\n)\n\nfunc main() {\n    cc := client.New()\n    cc.SetTimeout(10 * time.Second)\n\n    // Get request\n    resp, err := cc.Get("https://httpbin.org/get")\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Printf("Status: %d\\n", resp.StatusCode())\n    fmt.Printf("Body: %s\\n", string(resp.Body()))\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can check out ",(0,s.jsx)(n.a,{href:"/next/client/examples",children:"examples"})," for more examples!"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type Client struct {\n    mu sync.RWMutex\n\n    fasthttp *fasthttp.Client\n\n    baseURL   string\n    userAgent string\n    referer   string\n    header    *Header\n    params    *QueryParam\n    cookies   *Cookie\n    path      *PathParam\n\n    debug bool\n\n    timeout time.Duration\n\n    // user defined request hooks\n    userRequestHooks []RequestHook\n\n    // client package defined request hooks\n    builtinRequestHooks []RequestHook\n\n    // user defined response hooks\n    userResponseHooks []ResponseHook\n\n    // client package defined response hooks\n    builtinResponseHooks []ResponseHook\n\n    jsonMarshal   utils.JSONMarshal\n    jsonUnmarshal utils.JSONUnmarshal\n    xmlMarshal    utils.XMLMarshal\n    xmlUnmarshal  utils.XMLUnmarshal\n\n    cookieJar *CookieJar\n\n    // proxy\n    proxyURL string\n\n    // retry\n    retryConfig *RetryConfig\n\n    // logger\n    logger log.CommonLogger\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"new",children:"New"}),"\n",(0,s.jsx)(n.p,{children:"New creates and returns a new Client object."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func New() *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"newwithclient",children:"NewWithClient"}),"\n",(0,s.jsx)(n.p,{children:"NewWithClient creates and returns a new Client object from an existing client object."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func NewWithClient(c *fasthttp.Client) *Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"rest-methods",children:"REST Methods"}),"\n",(0,s.jsx)(n.h3,{id:"get",children:"Get"}),"\n",(0,s.jsx)(n.p,{children:"Get provides an API like axios which sends a get request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Get(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"post",children:"Post"}),"\n",(0,s.jsx)(n.p,{children:"Post provides an API like axios which send post request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Post(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"put",children:"Put"}),"\n",(0,s.jsx)(n.p,{children:"Put provides an API like axios which send put request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Put(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"patch",children:"Patch"}),"\n",(0,s.jsx)(n.p,{children:"Patch provides an API like axios which send patch request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Patch(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delete",children:"Delete"}),"\n",(0,s.jsx)(n.p,{children:"Delete provides an API like axios which send delete request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Delete(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"head",children:"Head"}),"\n",(0,s.jsx)(n.p,{children:"Head provides an API like axios which send head request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Head(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.p,{children:"Options provides an API like axios which send options request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Options(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"custom",children:"Custom"}),"\n",(0,s.jsx)(n.p,{children:"Custom provides an API like axios which send custom request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Custom(url, method string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"request-configuration",children:"Request Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Config for easy to set the request parameters, it should be noted that when setting the request body will use JSON as the default serialization mechanism, while the priority of Body is higher than FormData, and the priority of FormData is higher than File."}),"\n",(0,s.jsx)(n.p,{children:"It can be used to configure request data while sending requests using Get, Post, etc."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type Config struct {\n    Ctx context.Context\n\n    UserAgent string\n    Referer   string\n    Header    map[string]string\n    Param     map[string]string\n    Cookie    map[string]string\n    PathParam map[string]string\n\n    Timeout      time.Duration\n    MaxRedirects int\n\n    Body     any\n    FormData map[string]string\n    File     []*File\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"r",children:"R"}),"\n",(0,s.jsxs)(n.p,{children:["R raise a request from the client.\nIt acquires a request from the pool. You have to release it using ",(0,s.jsx)(n.code,{children:"ReleaseRequest()"})," when it's no longer needed."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) R() *Request\n"})}),"\n",(0,s.jsx)(n.h3,{id:"hooks",children:"Hooks"}),"\n",(0,s.jsx)(n.h4,{id:"requesthook",children:"RequestHook"}),"\n",(0,s.jsx)(n.p,{children:"RequestHook Request returns user-defined request hooks."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) RequestHook() []RequestHook\n"})}),"\n",(0,s.jsx)(n.h4,{id:"responsehook",children:"ResponseHook"}),"\n",(0,s.jsx)(n.p,{children:"ResponseHook return user-define response hooks."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) ResponseHook() []ResponseHook\n"})}),"\n",(0,s.jsx)(n.h4,{id:"addrequesthook",children:"AddRequestHook"}),"\n",(0,s.jsx)(n.p,{children:"AddRequestHook Add user-defined request hooks."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) AddRequestHook(h ...RequestHook) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"addresponsehook",children:"AddResponseHook"}),"\n",(0,s.jsx)(n.p,{children:"AddResponseHook Add user-defined response hooks."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) AddResponseHook(h ...ResponseHook) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"json",children:"JSON"}),"\n",(0,s.jsx)(n.h4,{id:"jsonmarshal",children:"JSONMarshal"}),"\n",(0,s.jsx)(n.p,{children:"JSONMarshal returns json marshal function in Core."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) JSONMarshal() utils.JSONMarshal\n"})}),"\n",(0,s.jsx)(n.h4,{id:"jsonunmarshal",children:"JSONUnmarshal"}),"\n",(0,s.jsx)(n.p,{children:"JSONUnmarshal returns json unmarshal function in Core."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) JSONUnmarshal() utils.JSONUnmarshal\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setjsonmarshal",children:"SetJSONMarshal"}),"\n",(0,s.jsx)(n.p,{children:"SetJSONMarshal sets the JSON encoder."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetJSONMarshal(f utils.JSONMarshal) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setjsonunmarshal",children:"SetJSONUnmarshal"}),"\n",(0,s.jsx)(n.p,{children:"Set the JSON decoder."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetJSONUnmarshal(f utils.JSONUnmarshal) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"xml",children:"XML"}),"\n",(0,s.jsx)(n.h4,{id:"xmlmarshal",children:"XMLMarshal"}),"\n",(0,s.jsx)(n.p,{children:"XMLMarshal returns xml marshal function in Core."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) XMLMarshal() utils.XMLMarshal\n"})}),"\n",(0,s.jsx)(n.h4,{id:"xmlunmarshal",children:"XMLUnmarshal"}),"\n",(0,s.jsx)(n.p,{children:"XMLUnmarshal returns xml unmarshal function in Core."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) XMLUnmarshal() utils.XMLUnmarshal\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setxmlmarshal",children:"SetXMLMarshal"}),"\n",(0,s.jsx)(n.p,{children:"SetXMLMarshal sets the XML encoder."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetXMLMarshal(f utils.XMLMarshal) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setxmlunmarshal",children:"SetXMLUnmarshal"}),"\n",(0,s.jsx)(n.p,{children:"SetXMLUnmarshal sets the XML decoder."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetXMLUnmarshal(f utils.XMLUnmarshal) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tls",children:"TLS"}),"\n",(0,s.jsx)(n.h4,{id:"tlsconfig",children:"TLSConfig"}),"\n",(0,s.jsx)(n.p,{children:"TLSConfig returns tlsConfig in client.\nIf the client doesn't have a tlsConfig, this function will initialize it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) TLSConfig() *tls.Config\n"})}),"\n",(0,s.jsx)(n.h4,{id:"settlsconfig",children:"SetTLSConfig"}),"\n",(0,s.jsx)(n.p,{children:"SetTLSConfig sets tlsConfig in client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetTLSConfig(config *tls.Config) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setcertificates",children:"SetCertificates"}),"\n",(0,s.jsx)(n.p,{children:"SetCertificates method sets client certificates into client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetCertificates(certs ...tls.Certificate) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setrootcertificate",children:"SetRootCertificate"}),"\n",(0,s.jsx)(n.p,{children:"SetRootCertificate adds one or more root certificates into client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetRootCertificate(path string) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setrootcertificatefromstring",children:"SetRootCertificateFromString"}),"\n",(0,s.jsx)(n.p,{children:"SetRootCertificateFromString method adds one or more root certificates into the client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetRootCertificateFromString(pem string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setproxyurl",children:"SetProxyURL"}),"\n",(0,s.jsx)(n.p,{children:"SetProxyURL sets proxy url in client. It will apply via core to hostclient."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetProxyURL(proxyURL string) error\n"})}),"\n",(0,s.jsx)(n.h3,{id:"retryconfig",children:"RetryConfig"}),"\n",(0,s.jsx)(n.p,{children:"RetryConfig returns retry config in client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) RetryConfig() *RetryConfig\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setretryconfig",children:"SetRetryConfig"}),"\n",(0,s.jsx)(n.p,{children:"SetRetryConfig sets retry config in client, which is impl by addon/retry package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetRetryConfig(config *RetryConfig) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"baseurl",children:"BaseURL"}),"\n",(0,s.jsx)(n.p,{children:"BaseURL returns baseurl in Client instance."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) BaseURL() string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setbaseurl",children:"SetBaseURL"}),"\n",(0,s.jsx)(n.p,{children:"SetBaseURL Set baseUrl which is prefix of real url."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetBaseURL(url string) *Client\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'cc := client.New()\ncc.SetBaseURL("https://httpbin.org/")\n\nresp, err := cc.Get("/get")\nif err != nil {\n    panic(err)\n}\n\nfmt.Println(string(resp.Body()))\n'})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Click here to see the result"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "args": {}, \n  ...\n}\n'})})]}),"\n",(0,s.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,s.jsx)(n.p,{children:"Header method returns header value via key, this method will visit all field in the header"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Header(key string) []string\n"})}),"\n",(0,s.jsx)(n.h4,{id:"addheader",children:"AddHeader"}),"\n",(0,s.jsx)(n.p,{children:"AddHeader method adds a single header field and its value in the client instance.\nThese headers will be applied to all requests raised from this client instance.\nAlso, it can be overridden at request level header options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) AddHeader(key, val string) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setheader",children:"SetHeader"}),"\n",(0,s.jsx)(n.p,{children:"SetHeader method sets a single header field and its value in the client instance.\nThese headers will be applied to all requests raised from this client instance.\nAlso, it can be overridden at request level header options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetHeader(key, val string) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"addheaders",children:"AddHeaders"}),"\n",(0,s.jsx)(n.p,{children:"AddHeaders method adds multiple headers field and its values at one go in the client instance.\nThese headers will be applied to all requests raised from this client instance.\nAlso it can be overridden at request level headers options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) AddHeaders(h map[string][]string) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setheaders",children:"SetHeaders"}),"\n",(0,s.jsx)(n.p,{children:"SetHeaders method sets multiple headers field and its values at one go in the client instance.\nThese headers will be applied to all requests raised from this client instance.\nAlso it can be overridden at request level headers options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetHeaders(h map[string]string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"param",children:"Param"}),"\n",(0,s.jsx)(n.p,{children:"Param method returns params value via key, this method will visit all field in the query param."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Param(key string) []string\n"})}),"\n",(0,s.jsx)(n.h4,{id:"addparam",children:"AddParam"}),"\n",(0,s.jsx)(n.p,{children:"AddParam method adds a single query param field and its value in the client instance.\nThese params will be applied to all requests raised from this client instance.\nAlso, it can be overridden at request level param options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) AddParam(key, val string) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setparam",children:"SetParam"}),"\n",(0,s.jsx)(n.p,{children:"SetParam method sets a single query param field and its value in the client instance.\nThese params will be applied to all requests raised from this client instance.\nAlso, it can be overridden at request level param options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetParam(key, val string) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"addparams",children:"AddParams"}),"\n",(0,s.jsx)(n.p,{children:"AddParams method adds multiple query params field and its values at one go in the client instance.\nThese params will be applied to all requests raised from this client instance.\nAlso it can be overridden at request level params options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) AddParams(m map[string][]string) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setparams",children:"SetParams"}),"\n",(0,s.jsx)(n.p,{children:"SetParams method sets multiple params field and its values at one go in the client instance.\nThese params will be applied to all requests raised from this client instance.\nAlso it can be overridden at request level params options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetParams(m map[string]string) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setparamswithstruct",children:"SetParamsWithStruct"}),"\n",(0,s.jsx)(n.p,{children:"SetParamsWithStruct method sets multiple params field and its values at one go in the client instance.\nThese params will be applied to all requests raised from this client instance.\nAlso it can be overridden at request level params options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetParamsWithStruct(v any) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"delparams",children:"DelParams"}),"\n",(0,s.jsx)(n.p,{children:"DelParams method deletes single or multiple params field and its values in client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) DelParams(key ...string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setuseragent",children:"SetUserAgent"}),"\n",(0,s.jsx)(n.p,{children:"SetUserAgent method sets the userAgent field and its value in the client instance.\nThis ua will be applied to all requests raised from this client instance.\nAlso it can be overridden at request level ua options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetUserAgent(ua string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setreferer",children:"SetReferer"}),"\n",(0,s.jsx)(n.p,{children:"SetReferer method sets referer field and its value in the client instance.\nThis referer will be applied to all requests raised from this client instance.\nAlso it can be overridden at request level referer options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetReferer(r string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"pathparam",children:"PathParam"}),"\n",(0,s.jsx)(n.p,{children:"PathParam returns the path param be set in request instance.\nIf the path param doesn't exist, return empty string."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) PathParam(key string) string\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setpathparam",children:"SetPathParam"}),"\n",(0,s.jsx)(n.p,{children:"SetPathParam method sets a single path param field and its value in the client instance.\nThese path params will be applied to all requests raised from this client instance.\nAlso it can be overridden at request level path params options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetPathParam(key, val string) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setpathparams",children:"SetPathParams"}),"\n",(0,s.jsx)(n.p,{children:"SetPathParams method sets multiple path params field and its values at one go in the client instance.\nThese path params will be applied to all requests raised from this client instance.\nAlso it can be overridden at request level path params options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetPathParams(m map[string]string) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setpathparamswithstruct",children:"SetPathParamsWithStruct"}),"\n",(0,s.jsx)(n.p,{children:"SetPathParamsWithStruct method sets multiple path params field and its values at one go in the client instance.\nThese path params will be applied to all requests raised from this client instance.\nAlso it can be overridden at request level path params options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetPathParamsWithStruct(v any) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"delpathparams",children:"DelPathParams"}),"\n",(0,s.jsx)(n.p,{children:"DelPathParams method deletes single or multiple path params field and its values in client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) DelPathParams(key ...string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"cookie",children:"Cookie"}),"\n",(0,s.jsx)(n.p,{children:"Cookie returns the cookie be set in request instance.\nIf cookie doesn't exist, return empty string."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Cookie(key string) string\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setcookie",children:"SetCookie"}),"\n",(0,s.jsx)(n.p,{children:"SetCookie method sets a single cookie field and its value in the client instance.\nThese cookies will be applied to all requests raised from this client instance.\nAlso it can be overridden at request level cookie options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetCookie(key, val string) *Client\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'cc := client.New()\ncc.SetCookie("john", "doe")\n\nresp, err := cc.Get("https://httpbin.org/cookies")\nif err != nil {\n    panic(err)\n}\n\nfmt.Println(string(resp.Body()))\n'})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Click here to see the result"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "cookies": {\n    "john": "doe"\n  }\n}\n'})})]}),"\n",(0,s.jsx)(n.h4,{id:"setcookies",children:"SetCookies"}),"\n",(0,s.jsx)(n.p,{children:"SetCookies method sets multiple cookies field and its values at one go in the client instance.\nThese cookies will be applied to all requests raised from this client instance.\nAlso it can be overridden at request level cookie options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetCookies(m map[string]string) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setcookieswithstruct",children:"SetCookiesWithStruct"}),"\n",(0,s.jsx)(n.p,{children:"SetCookiesWithStruct method sets multiple cookies field and its values at one go in the client instance.\nThese cookies will be applied to all requests raised from this client instance.\nAlso it can be overridden at request level cookies options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetCookiesWithStruct(v any) *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"delcookies",children:"DelCookies"}),"\n",(0,s.jsx)(n.p,{children:"DelCookies method deletes single or multiple cookies field and its values in client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) DelCookies(key ...string) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"settimeout",children:"SetTimeout"}),"\n",(0,s.jsx)(n.p,{children:"SetTimeout method sets timeout val in client instance.\nThis value will be applied to all requests raised from this client instance.\nAlso, it can be overridden at request level timeout options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetTimeout(t time.Duration) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"debug",children:"Debug"}),"\n",(0,s.jsx)(n.p,{children:"Debug enable log debug level output."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Debug() *Client\n"})}),"\n",(0,s.jsx)(n.h4,{id:"disabledebug",children:"DisableDebug"}),"\n",(0,s.jsx)(n.p,{children:"DisableDebug disables log debug level output."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) DisableDebug() *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setcookiejar",children:"SetCookieJar"}),"\n",(0,s.jsx)(n.p,{children:"SetCookieJar sets cookie jar in client instance."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetCookieJar(cookieJar *CookieJar) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setdial",children:"SetDial"}),"\n",(0,s.jsx)(n.p,{children:"SetDial sets dial function in client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetDial(dial fasthttp.DialFunc) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setlogger",children:"SetLogger"}),"\n",(0,s.jsx)(n.p,{children:"SetLogger sets logger instance in client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) SetLogger(logger log.CommonLogger) *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"logger",children:"Logger"}),"\n",(0,s.jsx)(n.p,{children:"Logger returns logger instance of client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Logger() log.CommonLogger\n"})}),"\n",(0,s.jsx)(n.h3,{id:"reset",children:"Reset"}),"\n",(0,s.jsx)(n.p,{children:"Reset clears the Client object"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Client) Reset()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"default-client",children:"Default Client"}),"\n",(0,s.jsxs)(n.p,{children:["Default client is default client object of Gofiber and created using ",(0,s.jsx)(n.code,{children:"New()"}),".\nYou can configurate it as you wish or replace it with another clients."]}),"\n",(0,s.jsx)(n.h3,{id:"c",children:"C"}),"\n",(0,s.jsx)(n.p,{children:"C gets default client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func C() *Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"get-1",children:"Get"}),"\n",(0,s.jsxs)(n.p,{children:["Get is a convenience method that sends a GET request using the ",(0,s.jsx)(n.code,{children:"defaultClient"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Get(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"post-1",children:"Post"}),"\n",(0,s.jsxs)(n.p,{children:["Post is a convenience method that sends a POST request using the ",(0,s.jsx)(n.code,{children:"defaultClient"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Post(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"put-1",children:"Put"}),"\n",(0,s.jsxs)(n.p,{children:["Put is a convenience method that sends a PUT request using the ",(0,s.jsx)(n.code,{children:"defaultClient"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Put(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"patch-1",children:"Patch"}),"\n",(0,s.jsxs)(n.p,{children:["Patch is a convenience method that sends a PATCH request using the ",(0,s.jsx)(n.code,{children:"defaultClient"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Patch(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delete-1",children:"Delete"}),"\n",(0,s.jsxs)(n.p,{children:["Delete is a convenience method that sends a DELETE request using the ",(0,s.jsx)(n.code,{children:"defaultClient"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Delete(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"head-1",children:"Head"}),"\n",(0,s.jsxs)(n.p,{children:["Head sends a HEAD request using the ",(0,s.jsx)(n.code,{children:"defaultClient"}),", a convenience method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Head(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"options-1",children:"Options"}),"\n",(0,s.jsxs)(n.p,{children:["Options is a convenience method that sends an OPTIONS request using the ",(0,s.jsx)(n.code,{children:"defaultClient"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Options(url string, cfg ...Config) (*Response, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"replace",children:"Replace"}),"\n",(0,s.jsx)(n.p,{children:"Replace the defaultClient, the returned function can undo."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"The default client should not be changed concurrently."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Replace(c *Client) func()\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(67294);let s={},l=i.createContext(s);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);