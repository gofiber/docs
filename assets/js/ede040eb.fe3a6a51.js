"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["60342"],{49166:function(e,i,n){n.r(i),n.d(i,{metadata:()=>r,contentTitle:()=>c,default:()=>d,assets:()=>a,toc:()=>o,frontMatter:()=>l});var r=JSON.parse('{"id":"file-server/README","title":"File Server","description":"Serving static files.","source":"@site/docs/recipes/file-server/README.md","sourceDirName":"file-server","slug":"/file-server/","permalink":"/recipes/file-server/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/file-server/README.md","tags":[],"version":"current","lastUpdatedAt":1732893234000,"frontMatter":{"title":"File Server","keywords":["file server","static files"],"description":"Serving static files."},"sidebar":"left_sidebar","previous":{"title":"Envoy External Authorization","permalink":"/recipes/envoy-extauthz/"},"next":{"title":"Firebase Authentication","permalink":"/recipes/firebase-auth/"}}'),t=n("85893"),s=n("50065");let l={title:"File Server",keywords:["file server","static files"],description:"Serving static files."},c="File Server Example",a={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function h(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"file-server-example",children:"File Server Example"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/gofiber/recipes/tree/master/file-server",children:(0,t.jsx)(i.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(i.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/file-server",children:(0,t.jsx)(i.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsx)(i.p,{children:"This project demonstrates how to set up a simple file server in a Go application using the Fiber framework."}),"\n",(0,t.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(i.p,{children:"Ensure you have the following installed:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Golang"}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Clone the repository:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/file-server\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Install dependencies:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Start the application:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Access the file server at ",(0,t.jsx)(i.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(i.p,{children:["Here is an example ",(0,t.jsx)(i.code,{children:"main.go"})," file for the Fiber application serving static files:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    // Serve static files from the "public" directory\n    app.Static("/", "./public")\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://golang.org/doc/",children:"Golang Documentation"})}),"\n"]})]})}function d(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return c},a:function(){return l}});var r=n(67294);let t={},s=r.createContext(t);function l(e){let i=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);