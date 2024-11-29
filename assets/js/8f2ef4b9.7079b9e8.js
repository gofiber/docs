"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["87342"],{66409:function(e,t,i){i.r(t),i.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>o});var r=JSON.parse('{"id":"envoy-extauthz/README","title":"Envoy External Authorization","description":"External authorization with Envoy.","source":"@site/docs/recipes/envoy-extauthz/README.md","sourceDirName":"envoy-extauthz","slug":"/envoy-extauthz/","permalink":"/recipes/envoy-extauthz/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/envoy-extauthz/README.md","tags":[],"version":"current","lastUpdatedAt":1732893234000,"frontMatter":{"title":"Envoy External Authorization","keywords":["envoy","external authorization","keyauth"],"description":"External authorization with Envoy."},"sidebar":"left_sidebar","previous":{"title":"SvelteKit and Tailwind CSS Project","permalink":"/recipes/entgo-sveltekit/template/"},"next":{"title":"File Server","permalink":"/recipes/file-server/"}}'),n=i("85893"),s=i("50065");let o={title:"Envoy External Authorization",keywords:["envoy","external authorization","keyauth"],description:"External authorization with Envoy."},l="Fiber as an Envoy External Authorization HTTP Service",d={},a=[{value:"Endpoints",id:"endpoints",level:2},{value:"Run",id:"run",level:2},{value:"Test",id:"test",level:2},{value:"Stop",id:"stop",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"fiber-as-an-envoy-external-authorization-http-service",children:"Fiber as an Envoy External Authorization HTTP Service"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/envoy-extauthz",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,n.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/envoy-extauthz",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,n.jsxs)(t.p,{children:["One way of extending the popular ",(0,n.jsx)(t.a,{href:"https://www.envoyproxy.io",children:"Envoy"})," proxy is by developing an\n",(0,n.jsx)(t.a,{href:"https://www.envoyproxy.io/docs/envoy/latest/api-v3/service/auth/v3/external_auth.proto",children:"external authorization service"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["This example illustrates using ",(0,n.jsx)(t.code,{children:"fiber"})," and the ",(0,n.jsx)(t.code,{children:"keyauth"})," middleware as an authorization service for a front\nproxy (the configuration could also be used for an L2 / Sidecar proxy). See ",(0,n.jsx)(t.code,{children:"authz"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["It also uses ",(0,n.jsx)(t.code,{children:"fiber"})," as a sample upstream service, with the following endpoints. See ",(0,n.jsx)(t.code,{children:"app"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Rute"}),(0,n.jsx)(t.th,{children:"Protected"}),(0,n.jsx)(t.th,{children:"Method"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Health"}),(0,n.jsx)(t.td,{children:"/health"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"GET"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resource"}),(0,n.jsx)(t.td,{children:"/api/resource"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"GET"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"run",children:"Run"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"docker-compose up --build -d"})}),"\n",(0,n.jsx)(t.h2,{id:"test",children:"Test"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Command"}),(0,n.jsx)(t.th,{children:"Status"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Not protected"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"curl localhost:8000/health -i"})}),(0,n.jsx)(t.td,{children:"200"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Missing API key"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"curl localhost:8000/api/resource -i"})}),(0,n.jsx)(t.td,{children:"403"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Invalid API key"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'curl localhost:8000/api/resource -i -H "x-api-key: invalid-key"'})}),(0,n.jsx)(t.td,{children:"403"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Valid API key"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'curl localhost:8000/api/resource -i -H "x-api-key: valid-key"'})}),(0,n.jsx)(t.td,{children:"200"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"stop",children:"Stop"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"docker-compose down"})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return o}});var r=i(67294);let n={},s=r.createContext(n);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);