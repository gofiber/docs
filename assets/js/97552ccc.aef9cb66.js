"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["39118"],{42146:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"middleware/skip","title":"Skip","description":"Skip middleware for Fiber that skips a wrapped handler if a predicate is true.","source":"@site/docs/core/middleware/skip.md","sourceDirName":"middleware","slug":"/middleware/skip","permalink":"/next/middleware/skip","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/middleware/skip.md","tags":[],"version":"current","lastUpdatedAt":1743490218000,"frontMatter":{"id":"skip"},"sidebar":"left_sidebar","previous":{"title":"Session","permalink":"/next/middleware/session"},"next":{"title":"Static","permalink":"/next/middleware/static"}}'),r=i("85893"),a=i("50065");let s={id:"skip"},d="Skip",o={},l=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"skip",children:"Skip"})}),"\n",(0,r.jsxs)(n.p,{children:["Skip middleware for ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that skips a wrapped handler if a predicate is true."]}),"\n",(0,r.jsx)(n.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func New(handler fiber.Handler, exclude func(c fiber.Ctx) bool) fiber.Handler\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/skip"\n)\n'})}),"\n",(0,r.jsx)(n.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func main() {\n    app := fiber.New()\n\n    app.Use(skip.New(BasicHandler, func(ctx fiber.Ctx) bool {\n        return ctx.Method() == fiber.MethodGet\n    }))\n\n    app.Get("/", func(ctx fiber.Ctx) error {\n        return ctx.SendString("It was a GET request!")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n\nfunc BasicHandler(ctx fiber.Ctx) error {\n    return ctx.SendString("It was not a GET request!")\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"app.Use will handle requests from any route, and any method. In the example above, it will only skip if the method is GET."})})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return s}});var t=i(67294);let r={},a=t.createContext(r);function s(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);