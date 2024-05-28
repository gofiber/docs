"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[96634],{73422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=n(74848),r=n(28453);const a={id:"skip"},s="Skip",d={id:"middleware/skip",title:"Skip",description:"Skip middleware for Fiber that skips a wrapped handler if a predicate is true.",source:"@site/docs/core/middleware/skip.md",sourceDirName:"middleware",slug:"/middleware/skip",permalink:"/next/middleware/skip",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/middleware/skip.md",tags:[],version:"current",lastUpdatedAt:1716883824e3,frontMatter:{id:"skip"},sidebar:"tutorialSidebar",previous:{title:"Session",permalink:"/next/middleware/session"},next:{title:"Static",permalink:"/next/middleware/static"}},o={},l=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"skip",children:"Skip"}),"\n",(0,i.jsxs)(t.p,{children:["Skip middleware for ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that skips a wrapped handler if a predicate is true."]}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(handler fiber.Handler, exclude func(c fiber.Ctx) bool) fiber.Handler\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v3"\n  "github.com/gofiber/fiber/v3/middleware/skip"\n)\n'})}),"\n",(0,i.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func main() {\n\tapp := fiber.New()\n\n\tapp.Use(skip.New(BasicHandler, func(ctx fiber.Ctx) bool {\n\t\treturn ctx.Method() == fiber.MethodGet\n\t}))\n\n\tapp.Get("/", func(ctx fiber.Ctx) error {\n\t\treturn ctx.SendString("It was a GET request!")\n\t})\n\n\tlog.Fatal(app.Listen(":3000"))\n}\n\nfunc BasicHandler(ctx fiber.Ctx) error {\n\treturn ctx.SendString("It was not a GET request!")\n}\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"app.Use will handle requests from any route, and any method. In the example above, it will only skip if the method is GET."})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);