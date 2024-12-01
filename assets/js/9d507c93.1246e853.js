"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["73428"],{45918:function(e,i,n){n.r(i),n.d(i,{metadata:()=>r,contentTitle:()=>o,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>a});var r=JSON.parse('{"id":"swagger/swagger","title":"Swagger","description":"Release","source":"@site/contrib_versioned_docs/version-fiberi18n_v0.x.x/swagger/README.md","sourceDirName":"swagger","slug":"/swagger/","permalink":"/contrib/fiberi18n_v0.x.x/swagger/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/swagger/README.md","tags":[],"version":"fiberi18n_v0.x.x","lastUpdatedAt":1733047527000,"frontMatter":{"id":"swagger","title":"Swagger"},"sidebar":"tutorialSidebar","previous":{"title":"Paseto","permalink":"/contrib/fiberi18n_v0.x.x/paseto/"},"next":{"title":"Websocket","permalink":"/contrib/fiberi18n_v0.x.x/websocket/"}}'),t=n("85893"),s=n("50065");let a={id:"swagger",title:"Swagger"},o=void 0,l={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Examples",id:"examples",level:3},{value:"Default Config",id:"default-config",level:3},{value:"Custom Config",id:"custom-config",level:3}];function g(e){let i={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=swagger*",alt:"Release"}),"\n",(0,t.jsx)(i.a,{href:"https://gofiber.io/discord",children:(0,t.jsx)(i.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,t.jsx)(i.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,t.jsx)(i.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,t.jsx)(i.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,t.jsxs)(i.p,{children:["Swagger middleware for ",(0,t.jsx)(i.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"}),". The middleware handles Swagger UI."]}),"\n",(0,t.jsx)(i.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"signatures",children:"Signatures"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,t.jsx)(i.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/contrib/swagger"\n)\n'})}),"\n",(0,t.jsx)(i.p,{children:"Then create a Fiber app with app := fiber.New()."}),"\n",(0,t.jsx)(i.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,t.jsx)(i.h3,{id:"default-config",children:"Default Config"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:"app.Use(swagger.New(cfg))\n"})}),"\n",(0,t.jsx)(i.h3,{id:"custom-config",children:"Custom Config"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:'cfg := swagger.Config{\n    BasePath: "/", //swagger ui base path\n    FilePath: "./docs/swagger.json",\n}\n\napp.Use(swagger.New(cfg))\n'})})]})}function d(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return o},a:function(){return a}});var r=n(67294);let t={},s=r.createContext(t);function a(e){let i=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);