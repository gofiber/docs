"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[54386],{27981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(74848),s=n(28453);const r={id:"slim",title:"Slim"},l=void 0,a={id:"slim/slim",title:"Slim",description:"Release",source:"@site/docs/template/slim/README.md",sourceDirName:"slim",slug:"/slim/",permalink:"/template/next/slim/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/template/edit/master/slim/README.md",tags:[],version:"current",lastUpdatedAt:1721303043e3,frontMatter:{id:"slim",title:"Slim"},sidebar:"tutorialSidebar",previous:{title:"Pug",permalink:"/template/next/pug/"}},o={},c=[{value:"Basic Example",id:"basic-example",level:3}];function m(e){const t={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=slim*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(t.p,{children:["Slim is a template engine created by ",(0,i.jsx)(t.a,{href:"https://github.com/mattn/go-slim",children:"mattn"}),", to see the original syntax documentation please ",(0,i.jsx)(t.a,{href:"https://rubydoc.info/gems/slim/frames",children:"click here"})]}),"\n",(0,i.jsx)(t.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/index.slim"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'== render("partials/header.slim")\n\nh1 = Title\n\n== render("partials/footer.slim")\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/partials/header.slim"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"h2 = Header\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/partials/footer.slim"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"h2 = Footer\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/layouts/main.slim"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"doctype html\nhtml\n  head\n    title Main\n    include ../partials/meta.slim\n  body\n    == embed\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/template/slim/v2"\n\n\t// "net/http" // embedded system\n)\n\nfunc main() {\n\t// Create a new engine\n\tengine := slim.New("./views", ".slim")\n\n\t// Or from an embedded system\n\t// See github.com/gofiber/embed for examples\n\t// engine := slim.NewFileSystem(http.Dir("./views", ".slim"))\n\n\t// Pass the engine to the Views\n\tapp := fiber.New(fiber.Config{\n\t\tViews: engine,\n\t})\n\n\tapp.Get("/", func(c *fiber.Ctx) error {\n\t\t// Render index\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t})\n\t})\n\n\tapp.Get("/layout", func(c *fiber.Ctx) error {\n\t\t// Render index within layouts/main\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t}, "layouts/main")\n\t})\n\n\tlog.Fatal(app.Listen(":3000"))\n}\n\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);