"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["48427"],{56124:function(e,i,n){n.r(i),n.d(i,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"air/README","title":"Air Live Reloading","description":"Live reloading for Go applications.","source":"@site/docs/recipes/air/README.md","sourceDirName":"air","slug":"/air/","permalink":"/recipes/air/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/air/README.md","tags":[],"version":"current","lastUpdatedAt":1738589498000,"frontMatter":{"title":"Air Live Reloading","keywords":["air","live reloading","development","air tool","hot reload","watch","changes"],"description":"Live reloading for Go applications."},"sidebar":"left_sidebar","previous":{"title":"404 Handler","permalink":"/recipes/handler/"},"next":{"title":"Auth + Docker + Postgres + JWT","permalink":"/recipes/auth-docker-postgres-jwt/"}}'),t=n("85893"),s=n("50065");let l={title:"Air Live Reloading",keywords:["air","live reloading","development","air tool","hot reload","watch","changes"],description:"Live reloading for Go applications."},a="Live Reloading with Air Example",o={},c=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Running the Example",id:"running-the-example",level:2},{value:"Example Routes",id:"example-routes",level:2},{value:"Code Overview",id:"code-overview",level:2},{value:"<code>main.go</code>",id:"maingo",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function d(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"live-reloading-with-air-example",children:"Live Reloading with Air Example"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/gofiber/recipes/tree/master/air",children:(0,t.jsx)(i.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(i.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/air",children:(0,t.jsx)(i.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsxs)(i.p,{children:["This example demonstrates how to set up live reloading for a Go application using the ",(0,t.jsx)(i.a,{href:"https://github.com/air-verse/air",children:"Air"})," tool. The purpose of this example is to show how to automatically reload your application during development whenever you make changes to the source code."]}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"Live reloading is a useful feature during development as it saves time by automatically restarting the application whenever changes are detected. This example sets up a simple Fiber application and configures Air to watch for changes and reload the application."}),"\n",(0,t.jsx)(i.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://golang.org/dl/",children:"Go"})," 1.18 or higher"]}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/air-verse/air",children:"Air"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Clone the repository:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/air\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Install the dependencies:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"go mod download\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Install Air:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"go install github.com/air-verse/air@latest\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(i.p,{children:["Air is configured using the ",(0,t.jsx)(i.code,{children:"air/.air.conf"})," file. This file specifies the build command, binary name, and directories to watch for changes. The configuration files for different operating systems are provided:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"air/.air.windows.conf"})," for Windows"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"air/.air.linux.conf"})," for Linux"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"running-the-example",children:"Running the Example"}),"\n",(0,t.jsx)(i.p,{children:"To run the example with live reloading, use the following command:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"air -c .air.linux.conf\n"})}),"\n",(0,t.jsx)(i.p,{children:"or for Windows:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"air -c .air.windows.conf\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The server will start and listen on ",(0,t.jsx)(i.code,{children:"localhost:3000"}),". Any changes to the source code will automatically trigger a rebuild and restart of the application."]}),"\n",(0,t.jsx)(i.h2,{id:"example-routes",children:"Example Routes"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"GET /"}),": Returns a simple greeting message."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"code-overview",children:"Code Overview"}),"\n",(0,t.jsx)(i.h3,{id:"maingo",children:(0,t.jsx)(i.code,{children:"main.go"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    // Create new Fiber instance\n    app := fiber.New()\n\n    // Create new GET route on path "/"\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    })\n\n    // Start server on http://localhost:3000\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(i.p,{children:"This example provides a basic setup for live reloading a Go application using Air. It can be extended and customized further to fit the needs of more complex applications."}),"\n",(0,t.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/air-verse/air",children:"Air Documentation"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/gofiber/fiber",children:"GitHub Repository"})}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return l}});var r=n(67294);let t={},s=r.createContext(t);function l(e){let i=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);