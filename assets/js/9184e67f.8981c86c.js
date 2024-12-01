"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["42271"],{78114:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>o});var n=JSON.parse('{"id":"bootstrap/README","title":"Bootstrap","description":"Integrating Bootstrap.","source":"@site/docs/recipes/bootstrap/README.md","sourceDirName":"bootstrap","slug":"/bootstrap/","permalink":"/recipes/bootstrap/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/bootstrap/README.md","tags":[],"version":"current","lastUpdatedAt":1733056464000,"frontMatter":{"title":"Bootstrap","keywords":["bootstrap","gorm","validator","env"],"description":"Integrating Bootstrap."},"sidebar":"left_sidebar","previous":{"title":"AWS SAM Container","permalink":"/recipes/aws-sam-container/"},"next":{"title":"Clean Architecture","permalink":"/recipes/clean-architecture/"}}'),i=r("85893"),s=r("50065");let o={title:"Bootstrap",keywords:["bootstrap","gorm","validator","env"],description:"Integrating Bootstrap."},l="Bootstrap",a={},c=[{value:"Components",id:"components",level:2},{value:"Router",id:"router",level:2},{value:"Setup",id:"setup",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"bootstrap",children:"Bootstrap"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/bootstrap",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,i.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/bootstrap",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,i.jsx)(t.p,{children:"Fiber bootstrap for rapid development using Go-Fiber / Gorm / Validator."}),"\n",(0,i.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Fiber","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Html Engine Template"}),"\n",(0,i.jsx)(t.li,{children:"Logger"}),"\n",(0,i.jsx)(t.li,{children:"Monitoring"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Gorm","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"PGSQL Driver"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Validator"}),"\n",(0,i.jsx)(t.li,{children:"Env File"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"router",children:"Router"}),"\n",(0,i.jsxs)(t.p,{children:["API Router ",(0,i.jsx)(t.code,{children:"/api"})," with rate limiter middleware\nHttp Router ",(0,i.jsx)(t.code,{children:"/"})," with CORS and CSRF middleware"]}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Copy the example env file over:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"cp .env.example .env\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Modify the env file you just copied ",(0,i.jsx)(t.code,{children:".env"})," with the correct credentials for your database. Make sure the database you entered in ",(0,i.jsx)(t.code,{children:"DB_NAME"})," has been created."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Run the API:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Your api should be running at ",(0,i.jsx)(t.code,{children:"http://localhost:4000/"})," if the port is in use you may modify it in the ",(0,i.jsx)(t.code,{children:".env"})," you just created."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return o}});var n=r(67294);let i={},s=n.createContext(i);function o(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);