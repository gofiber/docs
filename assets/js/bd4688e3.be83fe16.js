"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[14183],{15844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=n(74848),i=n(28453);const l={id:"rewrite"},s="Rewrite",d={id:"api/middleware/rewrite",title:"Rewrite",description:"Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links.",source:"@site/versioned_docs/version-v2.x/api/middleware/rewrite.md",sourceDirName:"api/middleware",slug:"/api/middleware/rewrite",permalink:"/api/middleware/rewrite",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1714133252e3,frontMatter:{id:"rewrite"},sidebar:"tutorialSidebar",previous:{title:"RequestID",permalink:"/api/middleware/requestid"},next:{title:"Session",permalink:"/api/middleware/session"}},a={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Config",id:"config",level:2},{value:"Examples",id:"examples",level:3}];function o(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"rewrite",children:"Rewrite"}),"\n",(0,r.jsx)(t.p,{children:"Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links."}),"\n",(0,r.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,r.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip middleware."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Rules"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"map[string]string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Rules defines the URL path rewrite rules. The values captured in asterisk can be retrieved by index."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"(Required)"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/rewrite"\n)\n\nfunc main() {\n  app := fiber.New()\n  \n  app.Use(rewrite.New(rewrite.Config{\n    Rules: map[string]string{\n      "/old":   "/new",\n      "/old/*": "/new/$1",\n    },\n  }))\n  \n  app.Get("/new", func(c *fiber.Ctx) error {\n    return c.SendString("Hello, World!")\n  })\n  app.Get("/new/*", func(c *fiber.Ctx) error {\n    return c.SendString("Wildcard: " + c.Params("*"))\n  })\n  \n  app.Listen(":3000")\n}\n\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Test:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-curl",children:"curl http://localhost:3000/old\ncurl http://localhost:3000/old/hello\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var r=n(96540);const i={},l=r.createContext(i);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);