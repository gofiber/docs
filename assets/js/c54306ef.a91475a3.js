"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["14785"],{54131:function(e,r,i){i.r(r),i.d(r,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>a,contentTitle:()=>c});var n=JSON.parse('{"id":"recover/README","title":"Recover Middleware","description":"Recover middleware for error handling.","source":"@site/docs/recipes/recover/README.md","sourceDirName":"recover","slug":"/recover/","permalink":"/recipes/recover/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/recover/README.md","tags":[],"version":"current","lastUpdatedAt":1742744365000,"frontMatter":{"title":"Recover Middleware","keywords":["recover","middleware"],"description":"Recover middleware for error handling."},"sidebar":"left_sidebar","previous":{"title":"React","permalink":"/recipes/react-router/"},"next":{"title":"RSS Feed","permalink":"/recipes/rss-feed/"}}'),t=i("85893"),s=i("50065");let l={title:"Recover Middleware",keywords:["recover","middleware"],description:"Recover middleware for error handling."},c="Recover Middleware Example",o={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function d(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"recover-middleware-example",children:"Recover Middleware Example"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://github.com/gofiber/recipes/tree/master/recover",children:(0,t.jsx)(r.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(r.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/recover",children:(0,t.jsx)(r.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsxs)(r.p,{children:["This project demonstrates how to implement a recovery mechanism in a Go application using the Fiber framework's ",(0,t.jsx)(r.code,{children:"Recover"})," middleware."]}),"\n",(0,t.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(r.p,{children:"Ensure you have the following installed:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Golang"}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Clone the repository:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/recover\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Install dependencies:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Start the application:","\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(r.p,{children:["Here is an example of how to set up the ",(0,t.jsx)(r.code,{children:"Recover"})," middleware in a Fiber application:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/recover"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    // Use the Recover middleware\n    app.Use(recover.New())\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // This will cause a panic\n        panic("something went wrong")\n    })\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.gofiber.io/api/middleware/recover",children:"Fiber Recover Middleware Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,r,i){i.d(r,{Z:function(){return c},a:function(){return l}});var n=i(67294);let t={},s=n.createContext(t);function l(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);