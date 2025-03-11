"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["4976"],{90393:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>o,toc:()=>l,contentTitle:()=>a});var i=JSON.parse('{"id":"autocert/README","title":"Autocert","description":"Automatic TLS certificate management.","source":"@site/docs/recipes/autocert/README.md","sourceDirName":"autocert","slug":"/autocert/","permalink":"/recipes/autocert/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/autocert/README.md","tags":[],"version":"current","lastUpdatedAt":1741678803000,"frontMatter":{"title":"Autocert","keywords":["autocert","tls","letsencrypt","ssl","https","certificate"],"description":"Automatic TLS certificate management."},"sidebar":"left_sidebar","previous":{"title":"Auth + JWT","permalink":"/recipes/auth-jwt/"},"next":{"title":"AWS Elastic Beanstalk","permalink":"/recipes/aws-eb/"}}'),r=n("85893"),s=n("50065");let c={title:"Autocert",keywords:["autocert","tls","letsencrypt","ssl","https","certificate"],description:"Automatic TLS certificate management."},a="Autocert Example",o={},l=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"autocert-example",children:"Autocert Example"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/autocert",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,r.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/autocert",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,r.jsxs)(t.p,{children:["This example demonstrates how to set up a secure Go Fiber application using Let's Encrypt for automatic TLS certificate management with ",(0,r.jsx)(t.code,{children:"autocert"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["This project provides a starting point for building a secure web application with automatic TLS certificate management using Let's Encrypt. It leverages Fiber for the web framework and ",(0,r.jsx)(t.code,{children:"autocert"})," for certificate management."]}),"\n",(0,r.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://golang.org/dl/",children:"Go"})," 1.18 or higher"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Clone the repository:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/autocert\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Install the dependencies:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"go mod download\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Update the ",(0,r.jsx)(t.code,{children:"HostPolicy"})," in ",(0,r.jsx)(t.code,{children:"main.go"})," with your domain:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'m := &autocert.Manager{\n    Prompt: autocert.AcceptTOS,\n    HostPolicy: autocert.HostWhitelist("yourdomain.com"), // Replace with your domain\n    Cache: autocert.DirCache("./certs"),\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Run the application:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The application should now be running on ",(0,r.jsx)(t.code,{children:"https://localhost"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Open your browser and navigate to ",(0,r.jsx)(t.code,{children:"https://yourdomain.com"})," (replace with your actual domain)."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["You should see the message: ",(0,r.jsx)(t.code,{children:"This is a secure server \uD83D\uDC6E"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(t.p,{children:"This example provides a basic setup for a Go Fiber application with automatic TLS certificate management using Let's Encrypt. It can be extended and customized further to fit the needs of more complex applications."}),"\n",(0,r.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://letsencrypt.org/docs/",children:"Let's Encrypt Documentation"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://pkg.go.dev/golang.org/x/crypto/acme/autocert",children:"Autocert Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return c}});var i=n(67294);let r={},s=i.createContext(r);function c(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);