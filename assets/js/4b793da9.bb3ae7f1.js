"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["59878"],{91039:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>s,frontMatter:()=>d});var n=JSON.parse('{"id":"middleware/recover","title":"Recover","description":"Recover middleware for Fiber that recovers from panics anywhere in the stack chain and handles the control to the centralized ErrorHandler.","source":"@site/docs/core/middleware/recover.md","sourceDirName":"middleware","slug":"/middleware/recover","permalink":"/next/middleware/recover","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/middleware/recover.md","tags":[],"version":"current","lastUpdatedAt":1736253587000,"frontMatter":{"id":"recover"},"sidebar":"left_sidebar","previous":{"title":"Proxy","permalink":"/next/middleware/proxy"},"next":{"title":"Redirect","permalink":"/next/middleware/redirect"}}'),l=r("85893"),i=r("50065");let d={id:"recover"},c="Recover",a={},s=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function o(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"recover",children:"Recover"})}),"\n",(0,l.jsxs)(t.p,{children:["Recover middleware for ",(0,l.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that recovers from panics anywhere in the stack chain and handles the control to the centralized ",(0,l.jsx)(t.a,{href:"https://docs.gofiber.io/guide/error-handling",children:"ErrorHandler"}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v3"\n    recoverer "github.com/gofiber/fiber/v3/middleware/recover"\n)\n'})}),"\n",(0,l.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'// Initialize default config\napp.Use(recoverer.New())\n\n// This panic will be caught by the middleware\napp.Get("/", func(c fiber.Ctx) error {\n    panic("I\'m an error")\n})\n'})}),"\n",(0,l.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"func(fiber.Ctx) bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"EnableStackTrace"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"EnableStackTrace enables handling stack trace."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"false"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"StackTraceHandler"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"func(fiber.Ctx, any)"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"StackTraceHandler defines a function to handle stack trace."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"defaultStackTraceHandler"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n    Next:              nil,\n    EnableStackTrace:  false,\n    StackTraceHandler: defaultStackTraceHandler,\n}\n"})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return d}});var n=r(67294);let l={},i=n.createContext(l);function d(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);