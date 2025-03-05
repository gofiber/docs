"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["74242"],{28198:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"middleware/requestid","title":"RequestID","description":"RequestID middleware for Fiber that adds an identifier to the response.","source":"@site/docs/core/middleware/requestid.md","sourceDirName":"middleware","slug":"/middleware/requestid","permalink":"/next/middleware/requestid","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/middleware/requestid.md","tags":[],"version":"current","lastUpdatedAt":1741158213000,"frontMatter":{"id":"requestid"},"sidebar":"left_sidebar","previous":{"title":"Redirect","permalink":"/next/middleware/redirect"},"next":{"title":"Rewrite","permalink":"/next/middleware/rewrite"}}'),i=n("85893"),l=n("50065");let s={id:"requestid"},d="RequestID",o={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function a(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"requestid",children:"RequestID"})}),"\n",(0,i.jsxs)(t.p,{children:["RequestID middleware for ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that adds an identifier to the response."]}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\nfunc FromContext(c fiber.Ctx) string\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/requestid"\n)\n'})}),"\n",(0,i.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// Initialize default config\napp.Use(requestid.New())\n\n// Or extend your config for customization\napp.Use(requestid.New(requestid.Config{\n    Header:    "X-Custom-Header",\n    Generator: func() string {\n        return "static-id"\n    },\n}))\n'})}),"\n",(0,i.jsx)(t.p,{children:"Getting the request ID"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func handler(c fiber.Ctx) error {\n    id := requestid.FromContext(c)\n    log.Printf("Request ID: %s", id)\n    return c.SendString("Hello, World!")\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In version v3, Fiber will inject ",(0,i.jsx)(t.code,{children:"requestID"})," into the built-in ",(0,i.jsx)(t.code,{children:"Context"})," of Go."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func handler(c fiber.Ctx) error {\n    id := requestid.FromContext(c.Context())\n    log.Printf("Request ID: %s", id)\n    return c.SendString("Hello, World!")\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(fiber.Ctx) bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Header"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Header is the header key where to get/set the unique request ID."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:'"X-Request-ID"'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Generator"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func() string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Generator defines a function to generate the unique identifier."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"utils.UUID"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsxs)(t.p,{children:["The default config uses a fast UUID generator which will expose the number of\nrequests made to the server. To conceal this value for better privacy, use the\n",(0,i.jsx)(t.code,{children:"utils.UUIDv4"})," generator."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n    Next:       nil,\n    Header:     fiber.HeaderXRequestID,\n    Generator:  utils.UUID,\n}\n"})})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var r=n(67294);let i={},l=r.createContext(i);function s(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);