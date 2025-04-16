"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["46666"],{30128:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"otelfiber/example/otelfiber-example","title":"Example","description":"An HTTP server using gofiber fiber and instrumentation. The server has a","source":"@site/contrib_versioned_docs/version-casbin_v1.x.x/otelfiber/example/README.md","sourceDirName":"otelfiber/example","slug":"/otelfiber/example/","permalink":"/docs/contrib/casbin_v1.x.x/otelfiber/example/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/otelfiber/example/README.md","tags":[],"version":"casbin_v1.x.x","lastUpdatedAt":1744830196000,"frontMatter":{"id":"otelfiber-example"},"sidebar":"left_sidebar","previous":{"title":"Otelfiber","permalink":"/docs/contrib/casbin_v1.x.x/otelfiber/"},"next":{"title":"Paseto","permalink":"/docs/contrib/casbin_v1.x.x/paseto/"}}'),s=r("85893"),i=r("50065");let o={id:"otelfiber-example"},c="Example",a={},l=[];function d(e){let n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"example",children:"Example"})}),"\n",(0,s.jsxs)(n.p,{children:["An HTTP server using gofiber fiber and instrumentation. The server has a\n",(0,s.jsx)(n.code,{children:"/users/:id"})," endpoint. The server generates span information to\n",(0,s.jsx)(n.code,{children:"stdout"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["These instructions expect you have\n",(0,s.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"docker-compose"})," installed."]}),"\n",(0,s.jsxs)(n.p,{children:["Bring up the ",(0,s.jsx)(n.code,{children:"fiber-server"})," and ",(0,s.jsx)(n.code,{children:"fiber-client"})," services to run the\nexample:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"docker-compose up --detach fiber-server fiber-client\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"fiber-client"})," service sends just one HTTP request to ",(0,s.jsx)(n.code,{children:"fiber-server"}),"\nand then exits. View the span generated by ",(0,s.jsx)(n.code,{children:"fiber-server"})," in the logs:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"docker-compose logs fiber-server\n"})}),"\n",(0,s.jsx)(n.p,{children:"Shut down the services when you are finished with the example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"docker-compose down\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var t=r(67294);let s={},i=t.createContext(s);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);