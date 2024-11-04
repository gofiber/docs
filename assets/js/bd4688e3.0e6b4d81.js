"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[14183],{4574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/middleware/rewrite","title":"Rewrite","description":"Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links.","source":"@site/versioned_docs/version-v2.x/api/middleware/rewrite.md","sourceDirName":"api/middleware","slug":"/api/middleware/rewrite","permalink":"/api/middleware/rewrite","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1730726092000,"frontMatter":{"id":"rewrite"},"sidebar":"tutorialSidebar","previous":{"title":"RequestID","permalink":"/api/middleware/requestid"},"next":{"title":"Session","permalink":"/api/middleware/session"}}');var i=n(74848),l=n(28453);const s={id:"rewrite"},d="Rewrite",a={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Config",id:"config",level:2},{value:"Examples",id:"examples",level:3}];function o(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"rewrite",children:"Rewrite"})}),"\n",(0,i.jsx)(t.p,{children:"Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links."}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip middleware."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Rules"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"map[string]string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Rules defines the URL path rewrite rules. The values captured in asterisk can be retrieved by index."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"(Required)"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/rewrite"\n)\n\nfunc main() {\n  app := fiber.New()\n  \n  app.Use(rewrite.New(rewrite.Config{\n    Rules: map[string]string{\n      "/old":   "/new",\n      "/old/*": "/new/$1",\n    },\n  }))\n  \n  app.Get("/new", func(c *fiber.Ctx) error {\n    return c.SendString("Hello, World!")\n  })\n  app.Get("/new/*", func(c *fiber.Ctx) error {\n    return c.SendString("Wildcard: " + c.Params("*"))\n  })\n  \n  app.Listen(":3000")\n}\n\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Test:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-curl",children:"curl http://localhost:3000/old\ncurl http://localhost:3000/old/hello\n"})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var r=n(96540);const i={},l=r.createContext(i);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);