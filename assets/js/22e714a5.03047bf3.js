"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["47062"],{2904:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>a,toc:()=>l,frontMatter:()=>o});var t=JSON.parse('{"id":"otelfiber/example/otelfiber-example","title":"Example","description":"An HTTP server using gofiber fiber and instrumentation. The server has a","source":"@site/contrib_versioned_docs/version-swagger_v1.x.x/otelfiber/example/README.md","sourceDirName":"otelfiber/example","slug":"/otelfiber/example/","permalink":"/contrib/swagger_v1.x.x/otelfiber/example/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/otelfiber/example/README.md","tags":[],"version":"swagger_v1.x.x","lastUpdatedAt":1733317037000,"frontMatter":{"id":"otelfiber-example"},"sidebar":"tutorialSidebar","previous":{"title":"Otelfiber","permalink":"/contrib/swagger_v1.x.x/otelfiber/"},"next":{"title":"Paseto","permalink":"/contrib/swagger_v1.x.x/paseto/"}}'),s=n("85893"),i=n("50065");let o={id:"otelfiber-example"},c="Example",a={},l=[];function d(e){let r={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"example",children:"Example"})}),"\n",(0,s.jsxs)(r.p,{children:["An HTTP server using gofiber fiber and instrumentation. The server has a\n",(0,s.jsx)(r.code,{children:"/users/:id"})," endpoint. The server generates span information to\n",(0,s.jsx)(r.code,{children:"stdout"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["These instructions expect you have\n",(0,s.jsx)(r.a,{href:"https://docs.docker.com/compose/",children:"docker-compose"})," installed."]}),"\n",(0,s.jsxs)(r.p,{children:["Bring up the ",(0,s.jsx)(r.code,{children:"fiber-server"})," and ",(0,s.jsx)(r.code,{children:"fiber-client"})," services to run the\nexample:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"docker-compose up --detach fiber-server fiber-client\n"})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"fiber-client"})," service sends just one HTTP request to ",(0,s.jsx)(r.code,{children:"fiber-server"}),"\nand then exits. View the span generated by ",(0,s.jsx)(r.code,{children:"fiber-server"})," in the logs:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"docker-compose logs fiber-server\n"})}),"\n",(0,s.jsx)(r.p,{children:"Shut down the services when you are finished with the example:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"docker-compose down\n"})})]})}function p(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return o}});var t=n(67294);let s={},i=t.createContext(s);function o(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);