"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["23960"],{82428:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>p,contentTitle:()=>o});var r=JSON.parse('{"id":"guide/grouping","title":"\uD83C\uDFAD Grouping","description":"In general, the Group functionality in Fiber behaves similarly to ExpressJS. Groups are declared virtually and all routes declared within the group are flattened into a single list with a prefix, which is then checked by the framework in the order it was declared. This means that the behavior of Group in Fiber is identical to that of ExpressJS.","source":"@site/docs/core/guide/grouping.md","sourceDirName":"guide","slug":"/guide/grouping","permalink":"/next/guide/grouping","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/guide/grouping.md","tags":[],"version":"current","lastUpdatedAt":1743510804000,"sidebarPosition":2,"frontMatter":{"id":"grouping","title":"\uD83C\uDFAD Grouping","sidebar_position":2},"sidebar":"left_sidebar","previous":{"title":"\uD83D\uDD0C Routing","permalink":"/next/guide/routing"},"next":{"title":"\uD83D\uDCDD Templates","permalink":"/next/guide/templates"}}'),t=i("85893"),a=i("50065");let s={id:"grouping",title:"\uD83C\uDFAD Grouping",sidebar_position:2},o=void 0,l={},p=[{value:"Paths",id:"paths",level:2},{value:"Group Handlers",id:"group-handlers",level:2}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"In general, the Group functionality in Fiber behaves similarly to ExpressJS. Groups are declared virtually and all routes declared within the group are flattened into a single list with a prefix, which is then checked by the framework in the order it was declared. This means that the behavior of Group in Fiber is identical to that of ExpressJS."})}),"\n",(0,t.jsx)(n.h2,{id:"paths",children:"Paths"}),"\n",(0,t.jsxs)(n.p,{children:["Like ",(0,t.jsx)(n.code,{children:"Routing"}),", groups can also have paths that belong to a cluster."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func main() {\n    app := fiber.New()\n\n    api := app.Group("/api", middleware) // /api\n\n    v1 := api.Group("/v1", middleware)   // /api/v1\n    v1.Get("/list", handler)             // /api/v1/list\n    v1.Get("/user", handler)             // /api/v1/user\n\n    v2 := api.Group("/v2", middleware)   // /api/v2\n    v2.Get("/list", handler)             // /api/v2/list\n    v2.Get("/user", handler)             // /api/v2/user\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"Group"})," of paths can have an optional handler."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func main() {\n    app := fiber.New()\n\n    api := app.Group("/api")      // /api\n\n    v1 := api.Group("/v1")        // /api/v1\n    v1.Get("/list", handler)      // /api/v1/list\n    v1.Get("/user", handler)      // /api/v1/user\n\n    v2 := api.Group("/v2")        // /api/v2\n    v2.Get("/list", handler)      // /api/v2/list\n    v2.Get("/user", handler)      // /api/v2/user\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Running ",(0,t.jsx)(n.strong,{children:"/api"}),", ",(0,t.jsx)(n.strong,{children:"/v1"})," or ",(0,t.jsx)(n.strong,{children:"/v2"})," will result in ",(0,t.jsx)(n.strong,{children:"404"})," error, make sure you have the errors set."]})}),"\n",(0,t.jsx)(n.h2,{id:"group-handlers",children:"Group Handlers"}),"\n",(0,t.jsxs)(n.p,{children:["Group handlers can also be used as a routing path but they must have ",(0,t.jsx)(n.strong,{children:"Next"})," added to them so that the flow can continue."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func main() {\n    app := fiber.New()\n\n    handler := func(c fiber.Ctx) error {\n        return c.SendStatus(fiber.StatusOK)\n    }\n    api := app.Group("/api") // /api\n\n    v1 := api.Group("/v1", func(c fiber.Ctx) error { // middleware for /api/v1\n        c.Set("Version", "v1")\n        return c.Next()\n    })\n    v1.Get("/list", handler) // /api/v1/list\n    v1.Get("/user", handler) // /api/v1/user\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return s}});var r=i(67294);let t={},a=r.createContext(t);function s(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);