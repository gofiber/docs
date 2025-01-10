"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["9426"],{99397:function(n,e,i){i.r(e),i.d(e,{metadata:()=>r,contentTitle:()=>o,default:()=>d,assets:()=>p,toc:()=>l,frontMatter:()=>s});var r=JSON.parse('{"id":"guide/grouping","title":"\uD83C\uDFAD Grouping","description":"Paths","source":"@site/versioned_docs/version-v1.x/guide/grouping.md","sourceDirName":"guide","slug":"/guide/grouping","permalink":"/v1.x/guide/grouping","draft":false,"unlisted":false,"tags":[],"version":"v1.x","lastUpdatedAt":1736513694000,"sidebarPosition":2,"frontMatter":{"id":"grouping","title":"\uD83C\uDFAD Grouping","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDD0C Routing","permalink":"/v1.x/guide/routing"},"next":{"title":"\uD83D\uDCDD Templates","permalink":"/v1.x/guide/templates"}}'),t=i("85893"),a=i("50065");let s={id:"grouping",title:"\uD83C\uDFAD Grouping",sidebar_position:2},o=void 0,p={},l=[{value:"Paths",id:"paths",level:2},{value:"Group Handlers",id:"group-handlers",level:2}];function u(n){let e={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"paths",children:"Paths"}),"\n",(0,t.jsxs)(e.p,{children:["Like ",(0,t.jsx)(e.strong,{children:"Routing"}),", groups can also have paths that belong to a cluster."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", cors())  // /api\n\n  v1 := api.Group("/v1", mysql())   // /api/v1\n  v1.Get("/list", handler)          // /api/v1/list\n  v1.Get("/user", handler)          // /api/v1/user\n\n  v2 := api.Group("/v2", mongodb()) // /api/v2\n  v2.Get("/list", handler)          // /api/v2/list\n  v2.Get("/user", handler)          // /api/v2/user\n\n  app.Listen(3000)\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["A ",(0,t.jsx)(e.strong,{children:"Group"})," of paths can have an optional handler."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api")  // /api\n\n  v1 := api.Group("/v1")   // /api/v1\n  v1.Get("/list", handler)          // /api/v1/list\n  v1.Get("/user", handler)          // /api/v1/user\n\n  v2 := api.Group("/v2") // /api/v2\n  v2.Get("/list", handler)          // /api/v2/list\n  v2.Get("/user", handler)          // /api/v2/user\n\n  app.Listen(3000)\n}\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"caution",children:(0,t.jsxs)(e.p,{children:["Running ",(0,t.jsx)(e.strong,{children:"/api"}),", ",(0,t.jsx)(e.strong,{children:"/v1"})," or ",(0,t.jsx)(e.strong,{children:"/v2"})," will result in ",(0,t.jsx)(e.strong,{children:"404"})," error, make sure you have the errors set."]})}),"\n",(0,t.jsx)(e.h2,{id:"group-handlers",children:"Group Handlers"}),"\n",(0,t.jsxs)(e.p,{children:["Group handlers can also be used as a routing path but they must have ",(0,t.jsx)(e.strong,{children:"Next"})," added to them so that the flow can continue."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'func main() {\n    app := fiber.New()\n\n    api := app.Group("/api") // /api\n\n    v1 := api.Group("/v1", func(c *fiber.Ctx) {\n        c.JSON(fiber.Map{\n            "message": "v1",\n        })\n        c.Next()\n    })                       // /api/v1\n    v1.Get("/list", handler) // /api/v1/list\n    v1.Get("/user", handler) // /api/v1/user\n\n    app.Listen(3000)\n}\n'})})]})}function d(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},50065:function(n,e,i){i.d(e,{Z:function(){return o},a:function(){return s}});var r=i(67294);let t={},a=r.createContext(t);function s(n){let e=r.useContext(a);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);