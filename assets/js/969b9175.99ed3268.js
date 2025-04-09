"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["86308"],{6089:function(e,r,t){t.r(r),t.d(r,{default:()=>a,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"fgprof/fgprof","title":"Fgprof","description":"Release","source":"@site/contrib_versioned_docs/version-websocket_v1.x.x/fgprof/README.md","sourceDirName":"fgprof","slug":"/fgprof/","permalink":"/contrib/fgprof/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/fgprof/README.md","tags":[],"version":"websocket_v1.x.x","lastUpdatedAt":1744205860000,"frontMatter":{"id":"fgprof"},"sidebar":"left_sidebar","previous":{"title":"Circuit Breaker Middleware for [Fiber](https://github.com/gofiber/fiber)","permalink":"/contrib/circuitbreaker/"},"next":{"title":"Fiberi18n","permalink":"/contrib/fiberi18n/"}}'),n=t("85893"),o=t("50065");let s={id:"fgprof"},d="Fgprof",l={},c=[{value:"Install",id:"install",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2}];function f(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"fgprof",children:"Fgprof"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fgprof*",alt:"Release"}),"\n",(0,n.jsx)(r.a,{href:"https://gofiber.io/discord",children:(0,n.jsx)(r.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,n.jsx)(r.img,{src:"https://github.com/gofiber/contrib/workflows/Test%20Fgprof/badge.svg",alt:"Test"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://github.com/felixge/fgprof",children:"fgprof"})," support for Fiber."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,n.jsx)(r.h2,{id:"install",children:"Install"}),"\n",(0,n.jsx)(r.p,{children:"This middleware supports Fiber v2."}),"\n",(0,n.jsx)(r.p,{children:"Using fgprof to profiling your Fiber app."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fgprof\n"})}),"\n",(0,n.jsx)(r.h2,{id:"config",children:"Config"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Next"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func(c *fiber.Ctx) bool"})}),(0,n.jsxs)(r.td,{children:["A function to skip this middleware when returned ",(0,n.jsx)(r.code,{children:"true"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"nil"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Prefix"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"string"}),"."]}),(0,n.jsx)(r.td,{children:'Prefix defines a URL prefix added before "/debug/fgprof". Note that it should start with (but not end with) a slash. Example: "/federated-fiber"'}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'""'})})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n\n	"github.com/gofiber/contrib/fgprof"\n	"github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n	app := fiber.New()\n	app.Use(fgprof.New())\n	app.Get("/", func(c *fiber.Ctx) error {\n		return c.SendString("OK")\n	})\n	log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"go tool pprof -http=:8080 http://localhost:3000/debug/fgprof\n"})})]})}function a(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return d},a:function(){return s}});var i=t(67294);let n={},o=i.createContext(n);function s(e){let r=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);