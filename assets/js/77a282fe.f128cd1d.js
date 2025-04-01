"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["2404"],{63067:function(e,t,i){i.r(t),i.d(t,{default:()=>d,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"swagger/swagger","title":"Swagger","description":"Release","source":"@site/contrib_versioned_docs/version-fiberi18n_v1.x.x/swagger/README.md","sourceDirName":"swagger","slug":"/swagger/","permalink":"/contrib/fiberi18n_v1.x.x/swagger/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/swagger/README.md","tags":[],"version":"fiberi18n_v1.x.x","lastUpdatedAt":1743490218000,"frontMatter":{"id":"swagger"},"sidebar":"tutorialSidebar","previous":{"title":"Paseto","permalink":"/contrib/fiberi18n_v1.x.x/paseto/"},"next":{"title":"Websocket","permalink":"/contrib/fiberi18n_v1.x.x/websocket/"}}'),r=i("85893"),s=i("50065");let l={id:"swagger"},a="Swagger",o={},c=[{value:"Install",id:"install",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Config",id:"config",level:2},{value:"Examples",id:"examples",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Custom Config",id:"custom-config",level:2}];function g(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"swagger",children:"Swagger"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=swagger*",alt:"Release"}),"\n",(0,r.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,r.jsxs)(t.p,{children:["Swagger middleware for ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"}),". The middleware handles Swagger UI."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Note: Requires Go 1.18 and above"})}),"\n",(0,r.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/swagger\n"})}),"\n",(0,r.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func New(config ...swagger.Config) fiber.Handler\n"})}),"\n",(0,r.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"BasePath"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"BasePath is the base path for the configuration file."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:'""'})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"FilePath"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"FilePath is the file path to the configuration file."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:'""'})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/contrib/swagger"\n)\n'})}),"\n",(0,r.jsx)(t.p,{children:"Then create a Fiber app with app := fiber.New()."}),"\n",(0,r.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,r.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"app.Use(swagger.New(cfg))\n"})}),"\n",(0,r.jsx)(t.h2,{id:"custom-config",children:"Custom Config"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'cfg := swagger.Config{\n    BasePath: "/", //swagger ui base path\n    FilePath: "./docs/swagger.json",\n}\n\napp.Use(swagger.New(cfg))\n'})})]})}function d(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return l}});var n=i(67294);let r={},s=n.createContext(r);function l(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);