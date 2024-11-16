"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["17322"],{27276:function(e,i,n){n.r(i),n.d(i,{metadata:()=>r,contentTitle:()=>d,default:()=>c,assets:()=>o,toc:()=>l,frontMatter:()=>s});var r=JSON.parse('{"id":"api/middleware/skip","title":"Skip","description":"Skip middleware for Fiber that skips a wrapped handler if a predicate is true.","source":"@site/versioned_docs/version-v2.x/api/middleware/skip.md","sourceDirName":"api/middleware","slug":"/api/middleware/skip","permalink":"/api/middleware/skip","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1731767144000,"frontMatter":{"id":"skip"},"sidebar":"tutorialSidebar","previous":{"title":"Session","permalink":"/api/middleware/session"},"next":{"title":"Timeout","permalink":"/api/middleware/timeout"}}'),t=n("85893"),a=n("50065");let s={id:"skip"},d="Skip",o={},l=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2}];function p(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"skip",children:"Skip"})}),"\n",(0,t.jsxs)(i.p,{children:["Skip middleware for ",(0,t.jsx)(i.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that skips a wrapped handler if a predicate is true."]}),"\n",(0,t.jsx)(i.h2,{id:"signatures",children:"Signatures"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:"func New(handler fiber.Handler, exclude func(c *fiber.Ctx) bool) fiber.Handler\n"})}),"\n",(0,t.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/skip"\n)\n'})}),"\n",(0,t.jsx)(i.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:'func main() {\n	app := fiber.New()\n\n	app.Use(skip.New(BasicHandler, func(ctx *fiber.Ctx) bool {\n		return ctx.Method() == fiber.MethodGet\n	}))\n\n	app.Get("/", func(ctx *fiber.Ctx) error {\n		return ctx.SendString("It was a GET request!")\n	})\n\n	log.Fatal(app.Listen(":3000"))\n}\n\nfunc BasicHandler(ctx *fiber.Ctx) error {\n	return ctx.SendString("It was not a GET request!")\n}\n'})}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:"app.Use will handle requests from any route, and any method. In the example above, it will only skip if the method is GET."})})]})}function c(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return d},a:function(){return s}});var r=n(67294);let t={},a=r.createContext(t);function s(e){let i=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);