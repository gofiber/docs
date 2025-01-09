"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["60517"],{84376:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>c,default:()=>p,assets:()=>a,toc:()=>h,frontMatter:()=>l});var i=JSON.parse('{"id":"https-tls/README","title":"HTTPS with TLS","description":"Setting up an HTTPS server with self-signed TLS certificates.","source":"@site/docs/recipes/https-tls/README.md","sourceDirName":"https-tls","slug":"/https-tls/","permalink":"/recipes/https-tls/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/https-tls/README.md","tags":[],"version":"current","lastUpdatedAt":1736416105000,"frontMatter":{"title":"HTTPS with TLS","keywords":["https","tls","ssl","self-signed"],"description":"Setting up an HTTPS server with self-signed TLS certificates."},"sidebar":"left_sidebar","previous":{"title":"HTTPS with PKCS12 TLS","permalink":"/recipes/https-pkcs12-tls/"},"next":{"title":"I18n","permalink":"/recipes/i18n/"}}'),s=n("85893"),r=n("50065");let l={title:"HTTPS with TLS",keywords:["https","tls","ssl","self-signed"],description:"Setting up an HTTPS server with self-signed TLS certificates."},c="HTTPS with TLS Example",a={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function o(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"https-with-tls-example",children:"HTTPS with TLS Example"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/https-tls",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/https-tls",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(t.p,{children:"This project demonstrates how to set up an HTTPS server with TLS in a Go application using the Fiber framework."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Ensure you have the following installed:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Golang"}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n",(0,s.jsx)(t.li,{children:"TLS certificates (self-signed or from a trusted CA)"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Clone the repository:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/https-tls\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Install dependencies:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Place your TLS certificate (",(0,s.jsx)(t.code,{children:"cert.pem"}),") and private key (",(0,s.jsx)(t.code,{children:"key.pem"}),") in the project directory."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Start the application:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Access the application at ",(0,s.jsx)(t.code,{children:"https://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Here is an example of how to set up an HTTPS server with TLS in a Fiber application:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Hello, HTTPS with TLS!")\n    })\n\n    // Start server with TLS\n    log.Fatal(app.ListenTLS(":3000", "cert.pem", "key.pem"))\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://golang.org/pkg/crypto/tls/",children:"TLS in Go"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return l}});var i=n(67294);let s={},r=i.createContext(s);function l(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);