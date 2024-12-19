"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["7518"],{55250:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>l});var i=JSON.parse('{"id":"casbin/casbin","title":"Casbin","description":"Release","source":"@site/contrib_versioned_docs/version-opafiber_v1.x.x/casbin/README.md","sourceDirName":"casbin","slug":"/casbin/","permalink":"/contrib/opafiber_v1.x.x/casbin/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/casbin/README.md","tags":[],"version":"opafiber_v1.x.x","lastUpdatedAt":1734593530000,"frontMatter":{"id":"casbin","title":"Casbin"},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDC4B Welcome","permalink":"/contrib/opafiber_v1.x.x/"},"next":{"title":"Fiberi18n","permalink":"/contrib/opafiber_v1.x.x/fiberi18n/"}}'),r=n("85893"),s=n("50065");let l={id:"casbin",title:"Casbin"},o=void 0,c={},a=[{value:"Install",id:"install",level:3},{value:"Signature",id:"signature",level:3},{value:"Config",id:"config",level:3},{value:"Examples",id:"examples",level:3},{value:"CustomPermission",id:"custompermission",level:3},{value:"RoutePermission",id:"routepermission",level:3},{value:"RoleAuthorization",id:"roleauthorization",level:3}];function d(e){let t={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=casbin*",alt:"Release"}),"\n",(0,r.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,r.jsx)(t.p,{children:"Casbin middleware for Fiber."}),"\n",(0,r.jsx)(t.h3,{id:"install",children:"Install"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/casbin\n"})}),"\n",(0,r.jsxs)(t.p,{children:["choose an adapter from ",(0,r.jsx)(t.a,{href:"https://casbin.org/docs/en/adapters",children:"here"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"go get -u github.com/casbin/xorm-adapter\n"})}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"casbin.New(config ...casbin.Config) *casbin.Middleware\n"})}),"\n",(0,r.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ModelFilePath"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Model file path"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:'"./model.conf"'})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"PolicyAdapter"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"persist.Adapter"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Database adapter for policies"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"./policy.csv"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Enforcer"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"*casbin.Enforcer"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Custom casbin enforcer"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Middleware generated enforcer using ModelFilePath & PolicyAdapter"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Lookup"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(*fiber.Ctx) string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Look up for current subject"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:'""'})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Unauthorized"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(*fiber.Ctx) error"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Response body for unauthorized responses"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Unauthorized"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Forbidden"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(*fiber.Ctx) error"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Response body for forbidden responses"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Forbidden"})})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/svcg/-fiber_casbin_demo",children:"Gorm Adapter"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/gofiber/contrib/casbin/tree/master/example",children:"File Adapter"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"custompermission",children:"CustomPermission"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/contrib/casbin"\n  _ "github.com/go-sql-driver/mysql"\n  "github.com/casbin/xorm-adapter/v2"\n)\n\nfunc main() {\n  app := fiber.New()\n\n  authz := casbin.New(casbin.Config{\n      ModelFilePath: "path/to/rbac_model.conf",\n      PolicyAdapter: xormadapter.NewAdapter("mysql", "root:@tcp(127.0.0.1:3306)/"),\n      Lookup: func(c *fiber.Ctx) string {\n          // fetch authenticated user subject\n      },\n  })\n\n  app.Post("/blog",\n      authz.RequiresPermissions([]string{"blog:create"}, casbin.WithValidationRule(casbin.MatchAllRule)),\n      func(c *fiber.Ctx) error {\n        // your handler\n      },\n  )\n  \n  app.Delete("/blog/:id",\n    authz.RequiresPermissions([]string{"blog:create", "blog:delete"}, casbin.WithValidationRule(casbin.AtLeastOneRule)),\n    func(c *fiber.Ctx) error {\n      // your handler\n    },\n  )\n\n  app.Listen(":8080")\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"routepermission",children:"RoutePermission"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/contrib/casbin"\n  _ "github.com/go-sql-driver/mysql"\n  "github.com/casbin/xorm-adapter/v2"\n)\n\nfunc main() {\n  app := fiber.New()\n\n  authz := casbin.New(casbin.Config{\n      ModelFilePath: "path/to/rbac_model.conf",\n      PolicyAdapter: xormadapter.NewAdapter("mysql", "root:@tcp(127.0.0.1:3306)/"),\n      Lookup: func(c *fiber.Ctx) string {\n          // fetch authenticated user subject\n      },\n  })\n\n  // check permission with Method and Path\n  app.Post("/blog",\n    authz.RoutePermission(),\n    func(c *fiber.Ctx) error {\n      // your handler\n    },\n  )\n\n  app.Listen(":8080")\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"roleauthorization",children:"RoleAuthorization"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/contrib/casbin"\n  _ "github.com/go-sql-driver/mysql"\n  "github.com/casbin/xorm-adapter/v2"\n)\n\nfunc main() {\n  app := fiber.New()\n\n  authz := casbin.New(casbin.Config{\n      ModelFilePath: "path/to/rbac_model.conf",\n      PolicyAdapter: xormadapter.NewAdapter("mysql", "root:@tcp(127.0.0.1:3306)/"),\n      Lookup: func(c *fiber.Ctx) string {\n          // fetch authenticated user subject\n      },\n  })\n  \n  app.Put("/blog/:id",\n    authz.RequiresRoles([]string{"admin"}),\n    func(c *fiber.Ctx) error {\n      // your handler\n    },\n  )\n\n  app.Listen(":8080")\n}\n'})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var i=n(67294);let r={},s=i.createContext(r);function l(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);