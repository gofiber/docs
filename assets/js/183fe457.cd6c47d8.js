"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["7383"],{40134:function(e,i,n){n.r(i),n.d(i,{metadata:()=>r,contentTitle:()=>a,default:()=>p,assets:()=>c,toc:()=>o,frontMatter:()=>l});var r=JSON.parse('{"id":"server-timing/README","title":"Server Timing","description":"Adding Server Timing headers to an application.","source":"@site/docs/recipes/server-timing/README.md","sourceDirName":"server-timing","slug":"/server-timing/","permalink":"/recipes/server-timing/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/server-timing/README.md","tags":[],"version":"current","lastUpdatedAt":1736253587000,"frontMatter":{"title":"Server Timing","keywords":["server timing"],"description":"Adding Server Timing headers to an application."},"sidebar":"left_sidebar","previous":{"title":"RSS Feed","permalink":"/recipes/rss-feed/"},"next":{"title":"Sessions + SQLite3","permalink":"/recipes/sessions-sqlite3/"}}'),t=n("85893"),s=n("50065");let l={title:"Server Timing",keywords:["server timing"],description:"Adding Server Timing headers to an application."},a="Server Timing",c={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function d(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"server-timing",children:"Server Timing"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/gofiber/recipes/tree/master/server-timing",children:(0,t.jsx)(i.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(i.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/server-timing",children:(0,t.jsx)(i.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsx)(i.p,{children:"This project demonstrates how to implement Server-Timing headers in a Go application using the Fiber framework."}),"\n",(0,t.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(i.p,{children:"Ensure you have the following installed:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Golang"}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Clone the repository:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/server-timing\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Install dependencies:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Start the application:","\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(i.p,{children:"Here is an example of how to set up Server-Timing headers in a Fiber application:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "time"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use(func(c *fiber.Ctx) error {\n        start := time.Now()\n        err := c.Next()\n        duration := time.Since(start)\n        c.Append("Server-Timing", "app;dur="+duration.String())\n        return err\n    })\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    })\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing",children:"Server-Timing Header Documentation"})}),"\n"]})]})}function p(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return l}});var r=n(67294);let t={},s=r.createContext(t);function l(e){let i=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);