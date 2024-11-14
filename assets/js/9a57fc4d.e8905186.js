"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["38895"],{78236:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>l});var n=JSON.parse('{"id":"api/middleware/requestid","title":"RequestID","description":"RequestID middleware for Fiber that adds an identifier to the response.","source":"@site/versioned_docs/version-v2.x/api/middleware/requestid.md","sourceDirName":"api/middleware","slug":"/api/middleware/requestid","permalink":"/api/middleware/requestid","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1731573495000,"frontMatter":{"id":"requestid"},"sidebar":"tutorialSidebar","previous":{"title":"Redirect","permalink":"/api/middleware/redirect"},"next":{"title":"Rewrite","permalink":"/api/middleware/rewrite"}}'),r=i("85893"),s=i("50065");let l={id:"requestid"},d="RequestID",a={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function o(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"requestid",children:"RequestID"})}),"\n",(0,r.jsxs)(t.p,{children:["RequestID middleware for ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that adds an identifier to the response."]}),"\n",(0,r.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/requestid"\n)\n'})}),"\n",(0,r.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'// Initialize default config\napp.Use(requestid.New())\n\n// Or extend your config for customization\napp.Use(requestid.New(requestid.Config{\n    Header:    "X-Custom-Header",\n    Generator: func() string {\n        return "static-id"\n    },\n}))\n'})}),"\n",(0,r.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Header"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Header is the header key where to get/set the unique request ID."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:'"X-Request-ID"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Generator"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func() string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Generator defines a function to generate the unique identifier."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"utils.UUID"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ContextKey"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"interface{}"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ContextKey defines the key used when storing the request ID in the locals for a specific request."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:'"requestid"'})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsxs)(t.p,{children:["The default config uses a fast UUID generator which will expose the number of\nrequests made to the server. To conceal this value for better privacy, use the\n",(0,r.jsx)(t.code,{children:"utils.UUIDv4"})," generator."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n    Next:       nil,\n    Header:     fiber.HeaderXRequestID,\n	Generator:  utils.UUID,\n	ContextKey: "requestid",\n}\n'})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return d},a:function(){return l}});var n=i(67294);let r={},s=n.createContext(r);function l(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);