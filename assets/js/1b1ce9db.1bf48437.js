"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[73118],{63566:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(74848),s=n(28453);const o={id:"otelfiber-example"},i="Example",c={id:"otelfiber/example/otelfiber-example",title:"Example",description:"An HTTP server using gofiber fiber and instrumentation. The server has a",source:"@site/contrib_versioned_docs/version-fgprof_v1.x.x/otelfiber/example/README.md",sourceDirName:"otelfiber/example",slug:"/otelfiber/example/",permalink:"/contrib/fgprof_v1.x.x/otelfiber/example/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/otelfiber/example/README.md",tags:[],version:"fgprof_v1.x.x",lastUpdatedAt:1714133252e3,frontMatter:{id:"otelfiber-example"},sidebar:"tutorialSidebar",previous:{title:"Otelfiber",permalink:"/contrib/fgprof_v1.x.x/otelfiber/"},next:{title:"Paseto",permalink:"/contrib/fgprof_v1.x.x/paseto/"}},a={},l=[];function d(e){const r={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(r.p,{children:["An HTTP server using gofiber fiber and instrumentation. The server has a\n",(0,t.jsx)(r.code,{children:"/users/:id"})," endpoint. The server generates span information to\n",(0,t.jsx)(r.code,{children:"stdout"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["These instructions expect you have\n",(0,t.jsx)(r.a,{href:"https://docs.docker.com/compose/",children:"docker-compose"})," installed."]}),"\n",(0,t.jsxs)(r.p,{children:["Bring up the ",(0,t.jsx)(r.code,{children:"fiber-server"})," and ",(0,t.jsx)(r.code,{children:"fiber-client"})," services to run the\nexample:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"docker-compose up --detach fiber-server fiber-client\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"fiber-client"})," service sends just one HTTP request to ",(0,t.jsx)(r.code,{children:"fiber-server"}),"\nand then exits. View the span generated by ",(0,t.jsx)(r.code,{children:"fiber-server"})," in the logs:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"docker-compose logs fiber-server\n"})}),"\n",(0,t.jsx)(r.p,{children:"Shut down the services when you are finished with the example:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"docker-compose down\n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var t=n(96540);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);