"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["48836"],{66363:function(e,r,t){t.r(r),t.d(r,{metadata:()=>n,contentTitle:()=>d,default:()=>f,assets:()=>l,toc:()=>c,frontMatter:()=>s});var n=JSON.parse('{"id":"fgprof/fgprof","title":"Fgprof","description":"Release","source":"@site/contrib_versioned_docs/version-paseto_v1.x.x/fgprof/README.md","sourceDirName":"fgprof","slug":"/fgprof/","permalink":"/contrib/paseto_v1.x.x/fgprof/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/fgprof/README.md","tags":[],"version":"paseto_v1.x.x","lastUpdatedAt":1738605584000,"frontMatter":{"id":"fgprof"},"sidebar":"left_sidebar","previous":{"title":"Casbin","permalink":"/contrib/paseto_v1.x.x/casbin/"},"next":{"title":"Fiberi18n","permalink":"/contrib/paseto_v1.x.x/fiberi18n/"}}'),i=t("85893"),o=t("50065");let s={id:"fgprof"},d="Fgprof",l={},c=[{value:"Install",id:"install",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2}];function a(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"fgprof",children:"Fgprof"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fgprof*",alt:"Release"}),"\n",(0,i.jsx)(r.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(r.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(r.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(r.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(r.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://github.com/felixge/fgprof",children:"fgprof"})," support for Fiber."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,i.jsx)(r.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(r.p,{children:"This middleware supports Fiber v2."}),"\n",(0,i.jsx)(r.p,{children:"Using fgprof to profiling your Fiber app."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fgprof\n"})}),"\n",(0,i.jsx)(r.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Property"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Default"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Next"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"func(c *fiber.Ctx) bool"})}),(0,i.jsxs)(r.td,{children:["A function to skip this middleware when returned ",(0,i.jsx)(r.code,{children:"true"}),"."]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"nil"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Prefix"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"string"}),"."]}),(0,i.jsx)(r.td,{children:'Prefix defines a URL prefix added before "/debug/fgprof". Note that it should start with (but not end with) a slash. Example: "/federated-fiber"'}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:'""'})})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n\n	"github.com/gofiber/contrib/fgprof"\n	"github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n	app := fiber.New()\n	app.Use(fgprof.New())\n	app.Get("/", func(c *fiber.Ctx) error {\n		return c.SendString("OK")\n	})\n	log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"go tool pprof -http=:8080 http://localhost:3000/debug/fgprof\n"})})]})}function f(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return d},a:function(){return s}});var n=t(67294);let i={},o=n.createContext(i);function s(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);