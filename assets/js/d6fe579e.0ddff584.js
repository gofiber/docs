"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[54640],{32313:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(74848),n=t(28453);const o={id:"fgprof"},s="Fgprof",c={id:"fgprof/fgprof",title:"Fgprof",description:"Release",source:"@site/contrib_versioned_docs/version-fiberzerolog_v1.x.x/fgprof/README.md",sourceDirName:"fgprof",slug:"/fgprof/",permalink:"/contrib/fiberzerolog_v1.x.x/fgprof/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/fgprof/README.md",tags:[],version:"fiberzerolog_v1.x.x",lastUpdatedAt:1723619721e3,frontMatter:{id:"fgprof"},sidebar:"tutorialSidebar",previous:{title:"Casbin",permalink:"/contrib/fiberzerolog_v1.x.x/casbin/"},next:{title:"Fiberi18n",permalink:"/contrib/fiberzerolog_v1.x.x/fiberi18n/"}},d={},l=[{value:"Install",id:"install",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2}];function f(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"fgprof",children:"Fgprof"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fgprof*",alt:"Release"}),"\n",(0,i.jsx)(r.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(r.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(r.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(r.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(r.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://github.com/felixge/fgprof",children:"fgprof"})," support for Fiber."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,i.jsx)(r.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(r.p,{children:"This middleware supports Fiber v2."}),"\n",(0,i.jsx)(r.p,{children:"Using fgprof to profiling your Fiber app."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fgprof\n"})}),"\n",(0,i.jsx)(r.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Property"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Default"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Next"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"func(c *fiber.Ctx) bool"})}),(0,i.jsxs)(r.td,{children:["A function to skip this middleware when returned ",(0,i.jsx)(r.code,{children:"true"}),"."]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"nil"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Prefix"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"string"}),"."]}),(0,i.jsx)(r.td,{children:'Prefix defines a URL prefix added before "/debug/fgprof". Note that it should start with (but not end with) a slash. Example: "/federated-fiber"'}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:'""'})})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/gofiber/contrib/fgprof"\n\t"github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n\tapp := fiber.New()\n\tapp.Use(fgprof.New())\n\tapp.Get("/", func(c *fiber.Ctx) error {\n\t\treturn c.SendString("OK")\n\t})\n\tlog.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"go tool pprof -http=:8080 http://localhost:3000/debug/fgprof\n"})})]})}function a(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var i=t(96540);const n={},o=i.createContext(n);function s(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);