"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["92445"],{28731:function(e,t,n){n.r(t),n.d(t,{default:()=>f,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>s});var r=JSON.parse('{"id":"middleware/etag","title":"ETag","description":"ETag middleware for Fiber that lets caches be more efficient and save bandwidth, as a web server does not need to resend a full response if the content has not changed.","source":"@site/docs/core/middleware/etag.md","sourceDirName":"middleware","slug":"/middleware/etag","permalink":"/next/middleware/etag","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/middleware/etag.md","tags":[],"version":"current","lastUpdatedAt":1744205860000,"frontMatter":{"id":"etag"},"sidebar":"left_sidebar","previous":{"title":"EnvVar","permalink":"/next/middleware/envvar"},"next":{"title":"ExpVar","permalink":"/next/middleware/expvar"}}'),i=n("85893"),l=n("50065");let a={id:"etag"},s="ETag",d={},o=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"etag",children:"ETag"})}),"\n",(0,i.jsxs)(t.p,{children:["ETag middleware for ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that lets caches be more efficient and save bandwidth, as a web server does not need to resend a full response if the content has not changed."]}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/etag"\n)\n'})}),"\n",(0,i.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// Initialize default config\napp.Use(etag.New())\n\n// Get / receives Etag: "13-1831710635" in response header\napp.Get("/", func(c fiber.Ctx) error {\n    return c.SendString("Hello, World!")\n})\n\n// Or extend your config for customization\napp.Use(etag.New(etag.Config{\n    Weak: true,\n}))\n\n// Get / receives Etag: "W/"13-1831710635" in response header\napp.Get("/", func(c fiber.Ctx) error {\n    return c.SendString("Hello, World!")\n})\n'})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Weak"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Weak indicates that a weak validator is used. Weak etags are easy to generate but are less useful for comparisons."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(fiber.Ctx) bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n    Next: nil,\n    Weak: false,\n}\n"})})]})}function f(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var r=n(67294);let i={},l=r.createContext(i);function a(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);