"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[26786],{55596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"middleware/adaptor","title":"Adaptor","description":"Converter for net/http handlers to/from Fiber request handlers, special thanks to @arsmn!","source":"@site/docs/core/middleware/adaptor.md","sourceDirName":"middleware","slug":"/middleware/adaptor","permalink":"/next/middleware/adaptor","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/middleware/adaptor.md","tags":[],"version":"current","lastUpdatedAt":1730726092000,"frontMatter":{"id":"adaptor"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83e\uddec Middleware","permalink":"/next/category/-middleware"},"next":{"title":"BasicAuth","permalink":"/next/middleware/basicauth"}}');var l=n(74848),i=n(28453);const d={id:"adaptor"},a="Adaptor",s={},o=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"net/http to Fiber",id:"nethttp-to-fiber",level:3},{value:"net/http middleware to Fiber",id:"nethttp-middleware-to-fiber",level:3},{value:"Fiber Handler to net/http",id:"fiber-handler-to-nethttp",level:3},{value:"Fiber App to net/http",id:"fiber-app-to-nethttp",level:3},{value:"Fiber Context to (net/http).Request",id:"fiber-context-to-nethttprequest",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"adaptor",children:"Adaptor"})}),"\n",(0,l.jsxs)(t.p,{children:["Converter for net/http handlers to/from Fiber request handlers, special thanks to ",(0,l.jsx)(t.a,{href:"https://github.com/arsmn",children:"@arsmn"}),"!"]}),"\n",(0,l.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Signature"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"HTTPHandler"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"HTTPHandler(h http.Handler) fiber.Handler"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"http.Handler -> fiber.Handler"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"HTTPHandlerFunc"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"HTTPHandlerFunc(h http.HandlerFunc) fiber.Handler"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"http.HandlerFunc -> fiber.Handler"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"HTTPMiddleware"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"HTTPHandlerFunc(mw func(http.Handler) http.Handler) fiber.Handler"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"func(http.Handler) http.Handler -> fiber.Handler"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"FiberHandler"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"FiberHandler(h fiber.Handler) http.Handler"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"fiber.Handler -> http.Handler"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"FiberHandlerFunc"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"FiberHandlerFunc(h fiber.Handler) http.HandlerFunc"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"fiber.Handler -> http.HandlerFunc"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"FiberApp"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"FiberApp(app *fiber.App) http.HandlerFunc"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Fiber app -> http.HandlerFunc"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ConvertRequest"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"ConvertRequest(c fiber.Ctx, forServer bool) (*http.Request, error)"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"fiber.Ctx -> http.Request"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"CopyContextToFiberContext"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"CopyContextToFiberContext(context any, requestContext *fasthttp.RequestCtx)"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"context.Context -> fasthttp.RequestCtx"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.h3,{id:"nethttp-to-fiber",children:"net/http to Fiber"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "net/http"\n\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/adaptor"\n)\n\nfunc main() {\n    // New fiber app\n    app := fiber.New()\n\n    // http.Handler -> fiber.Handler\n    app.Get("/", adaptor.HTTPHandler(handler(greet)))\n\n    // http.HandlerFunc -> fiber.Handler\n    app.Get("/func", adaptor.HTTPHandlerFunc(greet))\n\n    // Listen on port 3000\n    app.Listen(":3000")\n}\n\nfunc handler(f http.HandlerFunc) http.Handler {\n    return http.HandlerFunc(f)\n}\n\nfunc greet(w http.ResponseWriter, r *http.Request) {\n    fmt.Fprint(w, "Hello World!")\n}\n'})}),"\n",(0,l.jsx)(t.h3,{id:"nethttp-middleware-to-fiber",children:"net/http middleware to Fiber"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "net/http"\n\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/adaptor"\n)\n\nfunc main() {\n    // New fiber app\n    app := fiber.New()\n\n    // http middleware -> fiber.Handler\n    app.Use(adaptor.HTTPMiddleware(logMiddleware))\n\n    // Listen on port 3000\n    app.Listen(":3000")\n}\n\nfunc logMiddleware(next http.Handler) http.Handler {\n    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n        log.Println("log middleware")\n        next.ServeHTTP(w, r)\n    })\n}\n'})}),"\n",(0,l.jsx)(t.h3,{id:"fiber-handler-to-nethttp",children:"Fiber Handler to net/http"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "net/http"\n\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/adaptor"\n)\n\nfunc main() {\n    // fiber.Handler -> http.Handler\n    http.Handle("/", adaptor.FiberHandler(greet))\n\n      // fiber.Handler -> http.HandlerFunc\n    http.HandleFunc("/func", adaptor.FiberHandlerFunc(greet))\n\n    // Listen on port 3000\n    http.ListenAndServe(":3000", nil)\n}\n\nfunc greet(c fiber.Ctx) error {\n    return c.SendString("Hello World!")\n}\n'})}),"\n",(0,l.jsx)(t.h3,{id:"fiber-app-to-nethttp",children:"Fiber App to net/http"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "net/http"\n\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/adaptor"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/greet", greet)\n\n    // Listen on port 3000\n    http.ListenAndServe(":3000", adaptor.FiberApp(app))\n}\n\nfunc greet(c fiber.Ctx) error {\n    return c.SendString("Hello World!")\n}\n'})}),"\n",(0,l.jsx)(t.h3,{id:"fiber-context-to-nethttprequest",children:"Fiber Context to (net/http).Request"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "net/http"\n\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/adaptor"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/greet", greetWithHTTPReq)\n\n    // Listen on port 3000\n    http.ListenAndServe(":3000", adaptor.FiberApp(app))\n}\n\nfunc greetWithHTTPReq(c fiber.Ctx) error {\n    httpReq, err := adaptor.ConvertRequest(c, false)\n    if err != nil {\n        return err\n    }\n\n    return c.SendString("Request URL: " + httpReq.URL.String())\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>a});var r=n(96540);const l={},i=r.createContext(l);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);