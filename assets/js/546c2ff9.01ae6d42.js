"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["15604"],{74560:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>d,assets:()=>c,toc:()=>a,frontMatter:()=>o});var i=JSON.parse('{"id":"heroku/README","title":"Heroku","description":"Deploying to Heroku.","source":"@site/docs/recipes/heroku/README.md","sourceDirName":"heroku","slug":"/heroku/","permalink":"/recipes/heroku/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/heroku/README.md","tags":[],"version":"current","lastUpdatedAt":1736513694000,"frontMatter":{"title":"Heroku","keywords":["heroku","deployment"],"description":"Deploying to Heroku."},"sidebar":"left_sidebar","previous":{"title":"Hello World","permalink":"/recipes/hello-world/"},"next":{"title":"Hexagonal Architecture","permalink":"/recipes/hexagonal/"}}'),t=r("85893"),l=r("50065");let o={title:"Heroku",keywords:["heroku","deployment"],description:"Deploying to Heroku."},s="Heroku Deployment Example",c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"heroku-deployment-example",children:"Heroku Deployment Example"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/heroku",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/heroku",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsx)(n.p,{children:"This project demonstrates how to deploy a Go application using the Fiber framework on Heroku."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Golang"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/heroku-cli",children:"Heroku CLI"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/heroku\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Log in to Heroku:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"heroku login\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a new Heroku application:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"heroku create\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add a ",(0,t.jsx)(n.code,{children:"Procfile"})," to the project directory with the following content:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"web: go run main.go\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Deploy the application to Heroku:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'git add .\ngit commit -m "Deploy to Heroku"\ngit push heroku master\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open the application in your browser:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"heroku open\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Here is an example ",(0,t.jsx)(n.code,{children:"main.go"})," file for the Fiber application:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Hello, Heroku!")\n    })\n\n    log.Fatal(app.Listen(":" + getPort()))\n}\n\nfunc getPort() string {\n    port := os.Getenv("PORT")\n    if port == "" {\n        port = "3000"\n    }\n    return port\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://devcenter.heroku.com/",children:"Heroku Documentation"})}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return o}});var i=r(67294);let t={},l=i.createContext(t);function o(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);