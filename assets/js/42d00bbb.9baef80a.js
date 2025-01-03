"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["29453"],{11256:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>l});var i=JSON.parse('{"id":"jwt/README","title":"JWT","description":"Using JSON Web Tokens (JWT) for authentication.","source":"@site/docs/recipes/jwt/README.md","sourceDirName":"jwt","slug":"/jwt/","permalink":"/recipes/jwt/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/jwt/README.md","tags":[],"version":"current","lastUpdatedAt":1735889916000,"frontMatter":{"title":"JWT","keywords":["jwt","json web token","authentication"],"description":"Using JSON Web Tokens (JWT) for authentication."},"sidebar":"left_sidebar","previous":{"title":"I18n","permalink":"/recipes/i18n/"},"next":{"title":"Kubernetes","permalink":"/recipes/k8s/"}}'),s=n("85893"),r=n("50065");let l={title:"JWT",keywords:["jwt","json web token","authentication"],description:"Using JSON Web Tokens (JWT) for authentication."},c="Fiber with JWT",o={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Example Requests",id:"example-requests",level:2},{value:"Login",id:"login",level:3},{value:"Access Restricted Route",id:"access-restricted-route",level:3},{value:"Postman Collection",id:"postman-collection",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"fiber-with-jwt",children:"Fiber with JWT"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/jwt",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/jwt",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(t.p,{children:"This example demonstrates how to use JSON Web Tokens (JWT) for authentication in a Fiber application."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Go 1.16 or higher"}),"\n",(0,s.jsx)(t.li,{children:"Go modules"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Clone the repository:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/jwt\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Install dependencies:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"go mod tidy\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Run the application:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The server will start on ",(0,s.jsx)(t.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"URL"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"POST"}),(0,s.jsx)(t.td,{children:"/login"}),(0,s.jsx)(t.td,{children:"Authenticates a user and returns a JWT"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GET"}),(0,s.jsx)(t.td,{children:"/restricted"}),(0,s.jsx)(t.td,{children:"Accesses a restricted route with JWT"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"example-requests",children:"Example Requests"}),"\n",(0,s.jsx)(t.h3,{id:"login",children:"Login"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:'curl -X POST http://localhost:3000/login -d \'{"username": "user", "password": "pass"}\' -H "Content-Type: application/json"\n'})}),"\n",(0,s.jsx)(t.h3,{id:"access-restricted-route",children:"Access Restricted Route"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:'curl -X GET http://localhost:3000/restricted -H "Authorization: Bearer <your_jwt_token>"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"postman-collection",children:"Postman Collection"}),"\n",(0,s.jsxs)(t.p,{children:["You can find Postman examples ",(0,s.jsx)(t.a,{href:"https://www.getpostman.com/collections/0e83876e0f2a0c8ecd70",children:"here"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return l}});var i=n(67294);let s={},r=i.createContext(s);function l(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);