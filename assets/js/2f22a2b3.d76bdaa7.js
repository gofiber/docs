"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["56314"],{2555:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>o});var n=JSON.parse('{"id":"dummyjson/README","title":"Dummy JSON Proxy","description":"Proxying dummy JSON data.","source":"@site/docs/recipes/dummyjson/README.md","sourceDirName":"dummyjson","slug":"/dummyjson/","permalink":"/recipes/dummyjson/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/dummyjson/README.md","tags":[],"version":"current","lastUpdatedAt":1736416105000,"frontMatter":{"title":"Dummy JSON Proxy","keywords":["dummyjson","proxy","json","server"],"description":"Proxying dummy JSON data."},"sidebar":"left_sidebar","previous":{"title":"Docker + Nginx","permalink":"/recipes/docker-nginx-loadbalancer/"},"next":{"title":"Entgo ORM (MySQL)","permalink":"/recipes/ent-mysql/"}}'),s=r("85893"),i=r("50065");let o={title:"Dummy JSON Proxy",keywords:["dummyjson","proxy","json","server"],description:"Proxying dummy JSON data."},l="Simple Fiber Proxy Server",a={},c=[{value:"How to Run",id:"how-to-run",level:3},{value:"What It Does",id:"what-it-does",level:3},{value:"Error Handling",id:"error-handling",level:3}];function d(e){let t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"simple-fiber-proxy-server",children:"Simple Fiber Proxy Server"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/dummyjson",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/dummyjson",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsxs)(t.p,{children:["This is a basic Go application using the Fiber framework to create a web server. The server listens on port 3000 and has a single route (",(0,s.jsx)(t.code,{children:"GET /"}),") that fetches data from an external URL (",(0,s.jsx)(t.code,{children:"https://dummyjson.com/products/1"}),") and forwards it to the client."]}),"\n",(0,s.jsx)(t.h3,{id:"how-to-run",children:"How to Run"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Clone the repository."}),"\n",(0,s.jsx)(t.li,{children:"Navigate to the project directory."}),"\n",(0,s.jsxs)(t.li,{children:["Run ",(0,s.jsx)(t.code,{children:"go run main.go"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Visit ",(0,s.jsx)(t.code,{children:"http://localhost:3000/"})," in a web browser or use a tool like ",(0,s.jsx)(t.code,{children:"curl"})," to test it."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"what-it-does",children:"What It Does"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Fetches data from an external service, in this case ",(0,s.jsx)(t.code,{children:"DummyJson.com"})]}),"\n",(0,s.jsx)(t.li,{children:"Forwards the fetched data or an error message to the client."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Returns a 500 Internal Server Error if any issue occurs during the fetch."}),"\n",(0,s.jsx)(t.li,{children:"Returns the same status code as the external service if it's not a 200 OK."}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return o}});var n=r(67294);let s={},i=n.createContext(s);function o(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);