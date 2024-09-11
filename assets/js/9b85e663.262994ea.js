"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[15203],{8584:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=r(74848),i=r(28453);const s={id:"otelfiber-example"},o="Example",c={id:"otelfiber/example/otelfiber-example",title:"Example",description:"An HTTP server using gofiber fiber and instrumentation. The server has a",source:"@site/contrib_versioned_docs/version-fiberi18n_v1.x.x/otelfiber/example/README.md",sourceDirName:"otelfiber/example",slug:"/otelfiber/example/",permalink:"/contrib/fiberi18n_v1.x.x/otelfiber/example/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/otelfiber/example/README.md",tags:[],version:"fiberi18n_v1.x.x",lastUpdatedAt:1726080262e3,frontMatter:{id:"otelfiber-example"},sidebar:"tutorialSidebar",previous:{title:"Otelfiber",permalink:"/contrib/fiberi18n_v1.x.x/otelfiber/"},next:{title:"Paseto",permalink:"/contrib/fiberi18n_v1.x.x/paseto/"}},a={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["An HTTP server using gofiber fiber and instrumentation. The server has a\n",(0,t.jsx)(n.code,{children:"/users/:id"})," endpoint. The server generates span information to\n",(0,t.jsx)(n.code,{children:"stdout"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["These instructions expect you have\n",(0,t.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"docker-compose"})," installed."]}),"\n",(0,t.jsxs)(n.p,{children:["Bring up the ",(0,t.jsx)(n.code,{children:"fiber-server"})," and ",(0,t.jsx)(n.code,{children:"fiber-client"})," services to run the\nexample:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"docker-compose up --detach fiber-server fiber-client\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"fiber-client"})," service sends just one HTTP request to ",(0,t.jsx)(n.code,{children:"fiber-server"}),"\nand then exits. View the span generated by ",(0,t.jsx)(n.code,{children:"fiber-server"})," in the logs:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"docker-compose logs fiber-server\n"})}),"\n",(0,t.jsx)(n.p,{children:"Shut down the services when you are finished with the example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"docker-compose down\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);