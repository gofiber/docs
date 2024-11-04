"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[11297],{61977:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"otelfiber/example/otelfiber-example","title":"Example","description":"An HTTP server using gofiber fiber and instrumentation. The server has a","source":"@site/contrib_versioned_docs/version-opafiber_v1.x.x/otelfiber/example/README.md","sourceDirName":"otelfiber/example","slug":"/otelfiber/example/","permalink":"/contrib/opafiber_v1.x.x/otelfiber/example/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/otelfiber/example/README.md","tags":[],"version":"opafiber_v1.x.x","lastUpdatedAt":1730726092000,"frontMatter":{"id":"otelfiber-example","title":"Example"},"sidebar":"tutorialSidebar","previous":{"title":"Otelfiber","permalink":"/contrib/opafiber_v1.x.x/otelfiber/"},"next":{"title":"Paseto","permalink":"/contrib/opafiber_v1.x.x/paseto/"}}');var s=n(74848),i=n(28453);const o={id:"otelfiber-example",title:"Example"},c=void 0,a={},l=[];function d(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["An HTTP server using gofiber fiber and instrumentation. The server has a\n",(0,s.jsx)(r.code,{children:"/users/:id"})," endpoint. The server generates span information to\n",(0,s.jsx)(r.code,{children:"stdout"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["These instructions expect you have\n",(0,s.jsx)(r.a,{href:"https://docs.docker.com/compose/",children:"docker-compose"})," installed."]}),"\n",(0,s.jsxs)(r.p,{children:["Bring up the ",(0,s.jsx)(r.code,{children:"fiber-server"})," and ",(0,s.jsx)(r.code,{children:"fiber-client"})," services to run the\nexample:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"docker-compose up --detach fiber-server fiber-client\n"})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"fiber-client"})," service sends just one HTTP request to ",(0,s.jsx)(r.code,{children:"fiber-server"}),"\nand then exits. View the span generated by ",(0,s.jsx)(r.code,{children:"fiber-server"})," in the logs:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"docker-compose logs fiber-server\n"})}),"\n",(0,s.jsx)(r.p,{children:"Shut down the services when you are finished with the example:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"docker-compose down\n"})})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var t=n(96540);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);