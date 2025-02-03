"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["49825"],{83199:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"handler/README","title":"404 Handler","description":"Custom 404 error page handling.","source":"@site/docs/recipes/404-handler/README.md","sourceDirName":"404-handler","slug":"/handler/","permalink":"/recipes/handler/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/404-handler/README.md","tags":[],"version":"current","lastUpdatedAt":1738624341000,"frontMatter":{"title":"404 Handler","keywords":["404","not found","handler","errorhandler","custom"],"description":"Custom 404 error page handling."},"sidebar":"left_sidebar","previous":{"title":"\uD83D\uDC4B Overview","permalink":"/recipes/"},"next":{"title":"Air Live Reloading","permalink":"/recipes/air/"}}'),i=r("85893"),s=r("50065");let o={title:"404 Handler",keywords:[404,"not found","handler","errorhandler","custom"],description:"Custom 404 error page handling."},l="Custom 404 Not Found Handler Example",a={},d=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Running the Example",id:"running-the-example",level:2},{value:"Example Routes",id:"example-routes",level:2},{value:"Custom 404 Handler",id:"custom-404-handler",level:2},{value:"Code Overview",id:"code-overview",level:2},{value:"<code>main.go</code>",id:"maingo",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"custom-404-not-found-handler-example",children:"Custom 404 Not Found Handler Example"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/404-handler",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,i.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/404-handler",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,i.jsxs)(n.p,{children:["This example demonstrates how to implement a custom 404 Not Found handler using the ",(0,i.jsx)(n.a,{href:"https://gofiber.io",children:"Fiber"})," web framework in Go. The purpose of this example is to show how to handle requests to undefined routes gracefully by returning a 404 status code."]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"In web applications, it's common to encounter requests to routes that do not exist. Handling these requests properly is important to provide a good user experience and to inform the user that the requested resource is not available. This example sets up a simple Fiber application with a custom 404 handler to manage such cases."}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go"})," 1.18 or higher"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"running-the-example",children:"Running the Example"}),"\n",(0,i.jsx)(n.p,{children:"To run the example, use the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The server will start and listen on ",(0,i.jsx)(n.code,{children:"localhost:3000"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"example-routes",children:"Example Routes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"GET /hello"}),": Returns a simple greeting message."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Undefined Routes"}),": Any request to a route not defined will trigger the custom 404 handler."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"custom-404-handler",children:"Custom 404 Handler"}),"\n",(0,i.jsx)(n.p,{children:'The custom 404 handler is defined to catch all undefined routes and return a 404 status code with a "Not Found" message.'}),"\n",(0,i.jsx)(n.h2,{id:"code-overview",children:"Code Overview"}),"\n",(0,i.jsx)(n.h3,{id:"maingo",children:(0,i.jsx)(n.code,{children:"main.go"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    // Fiber instance\n    app := fiber.New()\n\n    // Routes\n    app.Get("/hello", hello)\n\n    // 404 Handler\n    app.Use(func(c *fiber.Ctx) error {\n        return c.SendStatus(404) // => 404 "Not Found"\n    })\n\n    // Start server\n    log.Fatal(app.Listen(":3000"))\n}\n\n// Handler\nfunc hello(c *fiber.Ctx) error {\n    return c.SendString("I made a \u2615 for you!")\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"This example provides a basic setup for handling 404 Not Found errors in a Fiber application. It can be extended and customized further to fit the needs of more complex applications."}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"GitHub Repository"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var t=r(67294);let i={},s=t.createContext(i);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);