"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["90432"],{73113:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>l,toc:()=>a,frontMatter:()=>o});var t=JSON.parse('{"id":"otelfiber/example/otelfiber-example","title":"Example","description":"An HTTP server using gofiber fiber and instrumentation. The server has a","source":"@site/contrib_versioned_docs/version-fiberi18n_v0.x.x/otelfiber/example/README.md","sourceDirName":"otelfiber/example","slug":"/otelfiber/example/","permalink":"/contrib/fiberi18n_v0.x.x/otelfiber/example/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/otelfiber/example/README.md","tags":[],"version":"fiberi18n_v0.x.x","lastUpdatedAt":1731767144000,"frontMatter":{"id":"otelfiber-example","title":"Example"},"sidebar":"tutorialSidebar","previous":{"title":"Otelfiber","permalink":"/contrib/fiberi18n_v0.x.x/otelfiber/"},"next":{"title":"Paseto","permalink":"/contrib/fiberi18n_v0.x.x/paseto/"}}'),i=r("85893"),s=r("50065");let o={id:"otelfiber-example",title:"Example"},c=void 0,l={},a=[];function d(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["An HTTP server using gofiber fiber and instrumentation. The server has a\n",(0,i.jsx)(n.code,{children:"/users/:id"})," endpoint. The server generates span information to\n",(0,i.jsx)(n.code,{children:"stdout"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["These instructions expect you have\n",(0,i.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"docker-compose"})," installed."]}),"\n",(0,i.jsxs)(n.p,{children:["Bring up the ",(0,i.jsx)(n.code,{children:"fiber-server"})," and ",(0,i.jsx)(n.code,{children:"fiber-client"})," services to run the\nexample:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"docker-compose up --detach fiber-server fiber-client\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"fiber-client"})," service sends just one HTTP request to ",(0,i.jsx)(n.code,{children:"fiber-server"}),"\nand then exits. View the span generated by ",(0,i.jsx)(n.code,{children:"fiber-server"})," in the logs:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"docker-compose logs fiber-server\n"})}),"\n",(0,i.jsx)(n.p,{children:"Shut down the services when you are finished with the example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"docker-compose down\n"})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var t=r(67294);let i={},s=t.createContext(i);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);