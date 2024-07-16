"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[2772],{36924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var r=n(74848),i=n(28453);const l={id:"proxy"},s="Proxy",o={id:"api/middleware/proxy",title:"Proxy",description:"Proxy middleware for Fiber that allows you to proxy requests to multiple servers.",source:"@site/versioned_docs/version-v2.x/api/middleware/proxy.md",sourceDirName:"api/middleware",slug:"/api/middleware/proxy",permalink:"/api/middleware/proxy",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1721109857e3,frontMatter:{id:"proxy"},sidebar:"tutorialSidebar",previous:{title:"Pprof",permalink:"/api/middleware/pprof"},next:{title:"Recover",permalink:"/api/middleware/recover"}},d={},a=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"proxy",children:"Proxy"}),"\n",(0,r.jsxs)(t.p,{children:["Proxy middleware for ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that allows you to proxy requests to multiple servers."]}),"\n",(0,r.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"// Balancer create a load balancer among multiple upstrem servers.\nfunc Balancer(config Config) fiber.Handler\n// Forward performs the given http request and fills the given http response.\nfunc Forward(addr string, clients ...*fasthttp.Client) fiber.Handler\n// Do performs the given http request and fills the given http response.\nfunc Do(c *fiber.Ctx, addr string, clients ...*fasthttp.Client) error\n// DoRedirects performs the given http request and fills the given http response while following up to maxRedirectsCount redirects.\nfunc DoRedirects(c *fiber.Ctx, addr string, maxRedirectsCount int, clients ...*fasthttp.Client) error\n// DoDeadline performs the given request and waits for response until the given deadline.\nfunc DoDeadline(c *fiber.Ctx, addr string, deadline time.Time, clients ...*fasthttp.Client) error\n// DoTimeout performs the given request and waits for response during the given timeout duration.\nfunc DoTimeout(c *fiber.Ctx, addr string, timeout time.Duration, clients ...*fasthttp.Client) error\n// DomainForward the given http request based on the given domain and fills the given http response\nfunc DomainForward(hostname string, addr string, clients ...*fasthttp.Client) fiber.Handler\n// BalancerForward performs the given http request based round robin balancer and fills the given http response\nfunc BalancerForward(servers []string, clients ...*fasthttp.Client) fiber.Handler\n"})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/proxy"\n)\n'})}),"\n",(0,r.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'// if target https site uses a self-signed certificate, you should\n// call WithTlsConfig before Do and Forward\nproxy.WithTlsConfig(&tls.Config{\n    InsecureSkipVerify: true,\n})\n// if you need to use global self-custom client, you should use proxy.WithClient.\nproxy.WithClient(&fasthttp.Client{\n    NoDefaultUserAgentHeader: true, \n    DisablePathNormalizing:   true,\n})\n\n// Forward to url\napp.Get("/gif", proxy.Forward("https://i.imgur.com/IWaBepg.gif"))\n\n// If you want to forward with a specific domain. You have to use proxy.DomainForward.\napp.Get("/payments", proxy.DomainForward("docs.gofiber.io", "http://localhost:8000"))\n\n// Forward to url with local custom client\napp.Get("/gif", proxy.Forward("https://i.imgur.com/IWaBepg.gif", &fasthttp.Client{\n    NoDefaultUserAgentHeader: true, \n    DisablePathNormalizing:   true,\n}))\n\n// Make request within handler\napp.Get("/:id", func(c *fiber.Ctx) error {\n    url := "https://i.imgur.com/"+c.Params("id")+".gif"\n    if err := proxy.Do(c, url); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Make proxy requests while following redirects\napp.Get("/proxy", func(c *fiber.Ctx) error {\n    if err := proxy.DoRedirects(c, "http://google.com", 3); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Make proxy requests and wait up to 5 seconds before timing out\napp.Get("/proxy", func(c *fiber.Ctx) error {\n    if err := proxy.DoTimeout(c, "http://localhost:3000", time.Second * 5); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Make proxy requests, timeout a minute from now\napp.Get("/proxy", func(c *fiber.Ctx) error {\n    if err := proxy.DoDeadline(c, "http://localhost", time.Now().Add(time.Minute)); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Minimal round robin balancer\napp.Use(proxy.Balancer(proxy.Config{\n    Servers: []string{\n        "http://localhost:3001",\n        "http://localhost:3002",\n        "http://localhost:3003",\n    },\n}))\n\n// Or extend your balancer for customization\napp.Use(proxy.Balancer(proxy.Config{\n    Servers: []string{\n        "http://localhost:3001",\n        "http://localhost:3002",\n        "http://localhost:3003",\n    },\n    ModifyRequest: func(c *fiber.Ctx) error {\n        c.Request().Header.Add("X-Real-IP", c.IP())\n        return nil\n    },\n    ModifyResponse: func(c *fiber.Ctx) error {\n        c.Response().Header.Del(fiber.HeaderServer)\n        return nil\n    },\n}))\n\n// Or this way if the balancer is using https and the destination server is only using http.\napp.Use(proxy.BalancerForward([]string{\n    "http://localhost:3001",\n    "http://localhost:3002",\n    "http://localhost:3003",\n}))\n'})}),"\n",(0,r.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Servers"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"[]string"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Servers defines a list of ",(0,r.jsx)(t.code,{children:"<scheme>://<host>"}),' HTTP servers, which are used in a round-robin manner. i.e.: "',(0,r.jsx)(t.a,{href:"https://foobar.com",children:"https://foobar.com"}),", ",(0,r.jsx)(t.a,{href:"http://www.foobar.com",children:"http://www.foobar.com"}),'"']}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"(Required)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ModifyRequest"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"fiber.Handler"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ModifyRequest allows you to alter the request."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ModifyResponse"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"fiber.Handler"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ModifyResponse allows you to alter the response."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Timeout"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"time.Duration"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Timeout is the request timeout used when calling the proxy client."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"1 second"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ReadBufferSize"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"int"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Per-connection buffer size for requests' reading. This also limits the maximum header size. Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers (for example, BIG cookies)."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"(Not specified)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"WriteBufferSize"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"int"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Per-connection buffer size for responses' writing."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"(Not specified)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"TlsConfig"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"*tls.Config"})," (or ",(0,r.jsx)(t.code,{children:"*fasthttp.TLSConfig"})," in v3)"]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"TLS config for the HTTP client."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Client"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"*fasthttp.LBClient"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Client is a custom client when client config is complex."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n    Next:           nil,\n    ModifyRequest:  nil,\n    ModifyResponse: nil,\n    Timeout:        fasthttp.DefaultLBClientTimeout,\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},l=r.createContext(i);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);