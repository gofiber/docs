"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["67886"],{69821:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>s});var r=JSON.parse('{"id":"middleware/proxy","title":"Proxy","description":"Proxy middleware for Fiber that allows you to proxy requests to multiple servers.","source":"@site/docs/core/middleware/proxy.md","sourceDirName":"middleware","slug":"/middleware/proxy","permalink":"/next/middleware/proxy","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/middleware/proxy.md","tags":[],"version":"current","lastUpdatedAt":1735889916000,"frontMatter":{"id":"proxy"},"sidebar":"left_sidebar","previous":{"title":"Pprof","permalink":"/next/middleware/pprof"},"next":{"title":"Recover","permalink":"/next/middleware/recover"}}'),i=n("85893"),l=n("50065");let s={id:"proxy"},o="Proxy",d={},a=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"proxy",children:"Proxy"})}),"\n",(0,i.jsxs)(t.p,{children:["Proxy middleware for ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that allows you to proxy requests to multiple servers."]}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.p,{children:"// BalancerForward performs the given http request based on a round-robin balancer and fills the given http response."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"// Balancer create a load balancer among multiple upstream servers.\nfunc Balancer(config Config) fiber.Handler\n// Forward performs the given http request and fills the given http response.\nfunc Forward(addr string, clients ...*fasthttp.Client) fiber.Handler\n// Do performs the given http request and fills the given http response.\nfunc Do(c fiber.Ctx, addr string, clients ...*fasthttp.Client) error\n// DoRedirects performs the given http request and fills the given http response while following up to maxRedirectsCount redirects.\nfunc DoRedirects(c fiber.Ctx, addr string, maxRedirectsCount int, clients ...*fasthttp.Client) error\n// DoDeadline performs the given request and waits for response until the given deadline.\nfunc DoDeadline(c fiber.Ctx, addr string, deadline time.Time, clients ...*fasthttp.Client) error\n// DoTimeout performs the given request and waits for response during the given timeout duration.\nfunc DoTimeout(c fiber.Ctx, addr string, timeout time.Duration, clients ...*fasthttp.Client) error\n// DomainForward the given http request based on the given domain and fills the given http response.\nfunc DomainForward(hostname string, addr string, clients ...*fasthttp.Client) fiber.Handler\n// BalancerForward performs the given http request based round robin balancer and fills the given http response.\nfunc BalancerForward(servers []string, clients ...*fasthttp.Client) fiber.Handler\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/proxy"\n)\n'})}),"\n",(0,i.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// if target https site uses a self-signed certificate, you should\n// call WithTLSConfig before Do and Forward\nproxy.WithTLSConfig(&tls.Config{\n    InsecureSkipVerify: true,\n})\n// if you need to use global self-custom client, you should use proxy.WithClient.\nproxy.WithClient(&fasthttp.Client{\n    NoDefaultUserAgentHeader: true, \n    DisablePathNormalizing:   true,\n})\n\n// Forward to url\napp.Get("/gif", proxy.Forward("https://i.imgur.com/IWaBepg.gif"))\n\n// If you want to forward with a specific domain. You have to use proxy.DomainForward.\napp.Get("/payments", proxy.DomainForward("docs.gofiber.io", "http://localhost:8000"))\n\n// Forward to url with local custom client\napp.Get("/gif", proxy.Forward("https://i.imgur.com/IWaBepg.gif", &fasthttp.Client{\n    NoDefaultUserAgentHeader: true, \n    DisablePathNormalizing:   true,\n}))\n\n// Make request within handler\napp.Get("/:id", func(c fiber.Ctx) error {\n    url := "https://i.imgur.com/"+c.Params("id")+".gif"\n    if err := proxy.Do(c, url); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Make proxy requests while following redirects\napp.Get("/proxy", func(c fiber.Ctx) error {\n    if err := proxy.DoRedirects(c, "http://google.com", 3); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Make proxy requests and wait up to 5 seconds before timing out\napp.Get("/proxy", func(c fiber.Ctx) error {\n    if err := proxy.DoTimeout(c, "http://localhost:3000", time.Second * 5); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Make proxy requests, timeout a minute from now\napp.Get("/proxy", func(c fiber.Ctx) error {\n    if err := proxy.DoDeadline(c, "http://localhost", time.Now().Add(time.Minute)); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Minimal round robin balancer\napp.Use(proxy.Balancer(proxy.Config{\n    Servers: []string{\n        "http://localhost:3001",\n        "http://localhost:3002",\n        "http://localhost:3003",\n    },\n}))\n\n// Or extend your balancer for customization\napp.Use(proxy.Balancer(proxy.Config{\n    Servers: []string{\n        "http://localhost:3001",\n        "http://localhost:3002",\n        "http://localhost:3003",\n    },\n    ModifyRequest: func(c fiber.Ctx) error {\n        c.Request().Header.Add("X-Real-IP", c.IP())\n        return nil\n    },\n    ModifyResponse: func(c fiber.Ctx) error {\n        c.Response().Header.Del(fiber.HeaderServer)\n        return nil\n    },\n}))\n\n// Or this way if the balancer is using https and the destination server is only using http.\napp.Use(proxy.BalancerForward([]string{\n    "http://localhost:3001",\n    "http://localhost:3002",\n    "http://localhost:3003",\n}))\n\n\n// Make round robin balancer with IPv6 support.\napp.Use(proxy.Balancer(proxy.Config{\n    Servers: []string{\n        "http://[::1]:3001",\n        "http://127.0.0.1:3002",\n        "http://localhost:3003",\n    },\n    // Enable TCP4 and TCP6 network stacks.\n    DialDualStack: true,\n}))\n'})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(fiber.Ctx) bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Servers"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Servers defines a list of ",(0,i.jsx)(t.code,{children:"<scheme>://<host>"}),' HTTP servers, which are used in a round-robin manner. i.e.: "',(0,i.jsx)(t.a,{href:"https://foobar.com",children:"https://foobar.com"}),", ",(0,i.jsx)(t.a,{href:"http://www.foobar.com",children:"http://www.foobar.com"}),'"']}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"(Required)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ModifyRequest"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"fiber.Handler"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ModifyRequest allows you to alter the request."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ModifyResponse"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"fiber.Handler"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ModifyResponse allows you to alter the response."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Timeout"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"time.Duration"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Timeout is the request timeout used when calling the proxy client."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1 second"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ReadBufferSize"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Per-connection buffer size for requests' reading. This also limits the maximum header size. Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers (for example, BIG cookies)."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"(Not specified)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WriteBufferSize"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Per-connection buffer size for responses' writing."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"(Not specified)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"TlsConfig"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"*tls.Config"})," (or ",(0,i.jsx)(t.code,{children:"*fasthttp.TLSConfig"})," in v3)"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"TLS config for the HTTP client."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DialDualStack"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Client will attempt to connect to both IPv4 and IPv6 host addresses if set to true."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Client"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"*fasthttp.LBClient"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Client is a custom client when client config is complex."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n    Next:           nil,\n    ModifyRequest:  nil,\n    ModifyResponse: nil,\n    Timeout:        fasthttp.DefaultLBClientTimeout,\n}\n"})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var r=n(67294);let i={},l=r.createContext(i);function s(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);