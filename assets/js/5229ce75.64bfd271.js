"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["85329"],{62682:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>s,frontMatter:()=>a});var n=JSON.parse('{"id":"api/middleware/recover","title":"Recover","description":"Recover middleware for Fiber that recovers from panics anywhere in the stack chain and handles the control to the centralized ErrorHandler.","source":"@site/versioned_docs/version-v2.x/api/middleware/recover.md","sourceDirName":"api/middleware","slug":"/api/middleware/recover","permalink":"/api/middleware/recover","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1736416105000,"frontMatter":{"id":"recover"},"sidebar":"tutorialSidebar","previous":{"title":"Proxy","permalink":"/api/middleware/proxy"},"next":{"title":"Redirect","permalink":"/api/middleware/redirect"}}'),i=r("85893"),l=r("50065");let a={id:"recover"},d="Recover",c={},s=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function o(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"recover",children:"Recover"})}),"\n",(0,i.jsxs)(t.p,{children:["Recover middleware for ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that recovers from panics anywhere in the stack chain and handles the control to the centralized ",(0,i.jsx)(t.a,{href:"https://docs.gofiber.io/guide/error-handling",children:"ErrorHandler"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/recover"\n)\n'})}),"\n",(0,i.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// Initialize default config\napp.Use(recover.New())\n\n// This panic will be caught by the middleware\napp.Get("/", func(c *fiber.Ctx) error {\n    panic("I\'m an error")\n})\n'})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EnableStackTrace"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EnableStackTrace enables handling stack trace."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"StackTraceHandler"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(*fiber.Ctx, interface{})"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"StackTraceHandler defines a function to handle stack trace."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"defaultStackTraceHandler"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n    Next:              nil,\n    EnableStackTrace:  false,\n    StackTraceHandler: defaultStackTraceHandler,\n}\n"})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return d},a:function(){return a}});var n=r(67294);let i={},l=n.createContext(i);function a(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);