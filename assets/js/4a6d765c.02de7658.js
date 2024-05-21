"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[55451],{93551:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>x});var n=l(74848),i=l(28453);const s={id:"helmet"},r="Helmet",d={id:"api/middleware/helmet",title:"Helmet",description:"Helmet middleware helps secure your apps by setting various HTTP headers.",source:"@site/versioned_docs/version-v2.x/api/middleware/helmet.md",sourceDirName:"api/middleware",slug:"/api/middleware/helmet",permalink:"/api/middleware/helmet",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1716274626e3,frontMatter:{id:"helmet"},sidebar:"tutorialSidebar",previous:{title:"Health Check",permalink:"/api/middleware/healthcheck"},next:{title:"Idempotency",permalink:"/api/middleware/idempotency"}},c={},x=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function o(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"helmet",children:"Helmet"}),"\n",(0,n.jsx)(t.p,{children:"Helmet middleware helps secure your apps by setting various HTTP headers."}),"\n",(0,n.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/helmet"\n)\n\nfunc main() {\n  app := fiber.New()\n\n  app.Use(helmet.New())\n\n  app.Get("/", func(c *fiber.Ctx) error {\n    return c.SendString("Welcome!")\n  })\n\n  app.Listen(":3000")\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Test:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-curl",children:"curl -I http://localhost:3000\n"})}),"\n",(0,n.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip middleware."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"nil"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"XSSProtection"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"XSSProtection"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'"0"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ContentTypeNosniff"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ContentTypeNosniff"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'"nosniff"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"XFrameOptions"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"XFrameOptions"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'"SAMEORIGIN"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"HSTSMaxAge"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"int"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"HSTSMaxAge"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"HSTSExcludeSubdomains"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"HSTSExcludeSubdomains"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ContentSecurityPolicy"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ContentSecurityPolicy"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'""'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CSPReportOnly"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CSPReportOnly"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"HSTSPreloadEnabled"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"HSTSPreloadEnabled"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ReferrerPolicy"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ReferrerPolicy"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'"ReferrerPolicy"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"PermissionPolicy"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Permissions-Policy"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'""'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CrossOriginEmbedderPolicy"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Cross-Origin-Embedder-Policy"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'"require-corp"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CrossOriginOpenerPolicy"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Cross-Origin-Opener-Policy"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'"same-origin"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CrossOriginResourcePolicy"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Cross-Origin-Resource-Policy"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'"same-origin"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"OriginAgentCluster"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Origin-Agent-Cluster"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'"?1"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"XDNSPrefetchControl"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"X-DNS-Prefetch-Control"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'"off"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"XDownloadOptions"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"X-Download-Options"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'"noopen"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"XPermittedCrossDomain"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"X-Permitted-Cross-Domain-Policies"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'"none"'})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n\tXSSProtection:             "0",\n\tContentTypeNosniff:        "nosniff",\n\tXFrameOptions:             "SAMEORIGIN",\n\tReferrerPolicy:            "no-referrer",\n\tCrossOriginEmbedderPolicy: "require-corp",\n\tCrossOriginOpenerPolicy:   "same-origin",\n\tCrossOriginResourcePolicy: "same-origin",\n\tOriginAgentCluster:        "?1",\n\tXDNSPrefetchControl:       "off",\n\tXDownloadOptions:          "noopen",\n\tXPermittedCrossDomain:     "none",\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>d});var n=l(96540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);