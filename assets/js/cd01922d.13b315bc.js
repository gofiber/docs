"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[45927],{3905:(e,r,n)=>{n.d(r,{Zo:()=>f,kt:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},f=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?t.createElement(m,a(a({ref:r},f),{},{components:n})):t.createElement(m,a({ref:r},f))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93319:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=n(87462),o=(n(67294),n(3905));const i={id:"proxy",title:"Proxy"},a=void 0,s={unversionedId:"api/middleware/proxy",id:"version-v2.x/api/middleware/proxy",title:"Proxy",description:"Proxy middleware for Fiber that allows you to proxy requests to multiple servers.",source:"@site/versioned_docs/version-v2.x/api/middleware/proxy.md",sourceDirName:"api/middleware",slug:"/api/middleware/proxy",permalink:"/api/middleware/proxy",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1691074140,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{id:"proxy",title:"Proxy"},sidebar:"tutorialSidebar",previous:{title:"Pprof",permalink:"/api/middleware/pprof"},next:{title:"Recover",permalink:"/api/middleware/recover"}},l={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],f={toc:p},u="wrapper";function c(e){let{components:r,...n}=e;return(0,o.kt)(u,(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Proxy middleware for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that allows you to proxy requests to multiple servers."),(0,o.kt)("h2",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Balancer create a load balancer among multiple upstrem servers.\nfunc Balancer(config Config) fiber.Handler\n// Forward performs the given http request and fills the given http response.\nfunc Forward(addr string, clients ...*fasthttp.Client) fiber.Handler\n// Do performs the given http request and fills the given http response.\nfunc Do(c *fiber.Ctx, addr string, clients ...*fasthttp.Client) error\n// DoRedirects performs the given http request and fills the given http response while following up to maxRedirectsCount redirects.\nfunc DoRedirects(c *fiber.Ctx, addr string, maxRedirectsCount int, clients ...*fasthttp.Client) error\n// DoDeadline performs the given request and waits for response until the given deadline.\nfunc DoDeadline(c *fiber.Ctx, addr string, deadline time.Time, clients ...*fasthttp.Client) error\n// DoTimeout performs the given request and waits for response during the given timeout duration.\nfunc DoTimeout(c *fiber.Ctx, addr string, timeout time.Duration, clients ...*fasthttp.Client) error\n// DomainForward the given http request based on the given domain and fills the given http response\nfunc DomainForward(hostname string, addr string, clients ...*fasthttp.Client) fiber.Handler\n// BalancerForward performs the given http request based round robin balancer and fills the given http response\nfunc BalancerForward(servers []string, clients ...*fasthttp.Client) fiber.Handler\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/proxy"\n)\n')),(0,o.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// if target https site uses a self-signed certificate, you should\n// call WithTlsConfig before Do and Forward\nproxy.WithTlsConfig(&tls.Config{\n    InsecureSkipVerify: true,\n})\n// if you need to use global self-custom client, you should use proxy.WithClient.\nproxy.WithClient(&fasthttp.Client{\n    NoDefaultUserAgentHeader: true, \n    DisablePathNormalizing:   true,\n})\n\n// Forward to url\napp.Get("/gif", proxy.Forward("https://i.imgur.com/IWaBepg.gif"))\n\n// If you want to forward with a specific domain. You have to use proxy.DomainForward.\napp.Get("/payments", proxy.DomainForward("docs.gofiber.io", "http://localhost:8000"))\n\n// Forward to url with local custom client\napp.Get("/gif", proxy.Forward("https://i.imgur.com/IWaBepg.gif", &fasthttp.Client{\n    NoDefaultUserAgentHeader: true, \n    DisablePathNormalizing:   true,\n}))\n\n// Make request within handler\napp.Get("/:id", func(c *fiber.Ctx) error {\n    url := "https://i.imgur.com/"+c.Params("id")+".gif"\n    if err := proxy.Do(c, url); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Make proxy requests while following redirects\napp.Get("/proxy", func(c *fiber.Ctx) error {\n    if err := proxy.DoRedirects(c, "http://google.com", 3); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Make proxy requests and wait up to 5 seconds before timing out\napp.Get("/proxy", func(c *fiber.Ctx) error {\n    if err := proxy.DoTimeout(c, "http://localhost:3000", time.Second * 5); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Make proxy requests, timeout a minute from now\napp.Get("/proxy", func(c *fiber.Ctx) error {\n    if err := proxy.DoDeadline(c, "http://localhost", time.Now().Add(time.Minute)); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Minimal round robin balancer\napp.Use(proxy.Balancer(proxy.Config{\n    Servers: []string{\n        "http://localhost:3001",\n        "http://localhost:3002",\n        "http://localhost:3003",\n    },\n}))\n\n// Or extend your balancer for customization\napp.Use(proxy.Balancer(proxy.Config{\n    Servers: []string{\n        "http://localhost:3001",\n        "http://localhost:3002",\n        "http://localhost:3003",\n    },\n    ModifyRequest: func(c *fiber.Ctx) error {\n        c.Request().Header.Add("X-Real-IP", c.IP())\n        return nil\n    },\n    ModifyResponse: func(c *fiber.Ctx) error {\n        c.Response().Header.Del(fiber.HeaderServer)\n        return nil\n    },\n}))\n\n// Or this way if the balancer is using https and the destination server is only using http.\napp.Use(proxy.BalancerForward([]string{\n    "http://localhost:3001",\n    "http://localhost:3002",\n    "http://localhost:3003",\n}))\n')),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Servers defines a list of <scheme>://<host> HTTP servers,\n    //\n    // which are used in a round-robin manner.\n    // i.e.: \"https://foobar.com, http://www.foobar.com\"\n    //\n    // Required\n    Servers []string\n\n    // ModifyRequest allows you to alter the request\n    //\n    // Optional. Default: nil\n    ModifyRequest fiber.Handler\n\n    // ModifyResponse allows you to alter the response\n    //\n    // Optional. Default: nil\n    ModifyResponse fiber.Handler\n    \n    // Timeout is the request timeout used when calling the proxy client\n    //\n    // Optional. Default: 1 second\n    Timeout time.Duration\n\n    // Per-connection buffer size for requests' reading.\n    // This also limits the maximum header size.\n    // Increase this buffer if your clients send multi-KB RequestURIs\n    // and/or multi-KB headers (for example, BIG cookies).\n    ReadBufferSize int\n       \n    // Per-connection buffer size for responses' writing.\n    WriteBufferSize int\n\n    // tls config for the http client.\n    TlsConfig *tls.Config \n    \n    // Client is custom client when client config is complex. \n    // Note that Servers, Timeout, WriteBufferSize, ReadBufferSize and TlsConfig \n    // will not be used if the client are set.\n    Client *fasthttp.LBClient\n}\n")),(0,o.kt)("h2",{id:"default-config"},"Default Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Next:           nil,\n    ModifyRequest:  nil,\n    ModifyResponse: nil,\n    Timeout:        fasthttp.DefaultLBClientTimeout,\n}\n")))}c.isMDXComponent=!0}}]);