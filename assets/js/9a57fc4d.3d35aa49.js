"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[87164],{1224:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var n=i(74848),r=i(28453);const s={id:"requestid"},l="RequestID",d={id:"api/middleware/requestid",title:"RequestID",description:"RequestID middleware for Fiber that adds an identifier to the response.",source:"@site/versioned_docs/version-v2.x/api/middleware/requestid.md",sourceDirName:"api/middleware",slug:"/api/middleware/requestid",permalink:"/api/middleware/requestid",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1721303043e3,frontMatter:{id:"requestid"},sidebar:"tutorialSidebar",previous:{title:"Redirect",permalink:"/api/middleware/redirect"},next:{title:"Rewrite",permalink:"/api/middleware/rewrite"}},a={},o=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"requestid",children:"RequestID"}),"\n",(0,n.jsxs)(t.p,{children:["RequestID middleware for ",(0,n.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that adds an identifier to the response."]}),"\n",(0,n.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/requestid"\n)\n'})}),"\n",(0,n.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'// Initialize default config\napp.Use(requestid.New())\n\n// Or extend your config for customization\napp.Use(requestid.New(requestid.Config{\n    Header:    "X-Custom-Header",\n    Generator: func() string {\n        return "static-id"\n    },\n}))\n'})}),"\n",(0,n.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"nil"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Header"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Header is the header key where to get/set the unique request ID."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'"X-Request-ID"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Generator"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"func() string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Generator defines a function to generate the unique identifier."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"utils.UUID"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ContextKey"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"interface{}"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ContextKey defines the key used when storing the request ID in the locals for a specific request."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'"requestid"'})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,n.jsxs)(t.p,{children:["The default config uses a fast UUID generator which will expose the number of\nrequests made to the server. To conceal this value for better privacy, use the\n",(0,n.jsx)(t.code,{children:"utils.UUIDv4"})," generator."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n    Next:       nil,\n    Header:     fiber.HeaderXRequestID,\n\tGenerator:  utils.UUID,\n\tContextKey: "requestid",\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>d});var n=i(96540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);