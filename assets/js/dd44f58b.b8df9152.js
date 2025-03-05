"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["7449"],{34288:function(e,l,n){n.r(l),n.d(l,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>o});var i=JSON.parse('{"id":"hello-world/README","title":"Hello World","description":"A simple \\"Hello, World!\\" application.","source":"@site/docs/recipes/hello-world/README.md","sourceDirName":"hello-world","slug":"/hello-world/","permalink":"/recipes/hello-world/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/hello-world/README.md","tags":[],"version":"current","lastUpdatedAt":1741158213000,"frontMatter":{"title":"Hello World","keywords":["hello world","golang","fiber"],"description":"A simple \\"Hello, World!\\" application."},"sidebar":"left_sidebar","previous":{"title":"gRPC","permalink":"/recipes/grpc/"},"next":{"title":"Heroku","permalink":"/recipes/heroku/"}}'),r=n("85893"),t=n("50065");let s={title:"Hello World",keywords:["hello world","golang","fiber"],description:'A simple "Hello, World!" application.'},o="Hello World Example",c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function d(e){let l={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.header,{children:(0,r.jsx)(l.h1,{id:"hello-world-example",children:"Hello World Example"})}),"\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.a,{href:"https://github.com/gofiber/recipes/tree/master/hello-world",children:(0,r.jsx)(l.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,r.jsx)(l.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/hello-world",children:(0,r.jsx)(l.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,r.jsx)(l.p,{children:'This project demonstrates a simple "Hello, World!" application using the Fiber framework in Go.'}),"\n",(0,r.jsx)(l.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(l.p,{children:"Ensure you have the following installed:"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:"Golang"}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsxs)(l.li,{children:["\n",(0,r.jsx)(l.p,{children:"Clone the repository:"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/hello-world\n"})}),"\n"]}),"\n",(0,r.jsxs)(l.li,{children:["\n",(0,r.jsx)(l.p,{children:"Install dependencies:"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsxs)(l.li,{children:["\n",(0,r.jsx)(l.p,{children:"Start the application:"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,r.jsxs)(l.li,{children:["\n",(0,r.jsxs)(l.p,{children:["Access the application at ",(0,r.jsx)(l.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(l.p,{children:["Here is an example ",(0,r.jsx)(l.code,{children:"main.go"})," file for the Fiber application:"]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,r.jsx)(l.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.a,{href:"https://golang.org/doc/",children:"Golang Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:l}={...(0,t.a)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,l,n){n.d(l,{Z:function(){return o},a:function(){return s}});var i=n(67294);let r={},t=i.createContext(r);function s(e){let l=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function o(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:l},e.children)}}}]);