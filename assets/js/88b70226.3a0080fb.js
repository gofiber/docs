"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["20250"],{66907:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"opafiber/opafiber","title":"Opafiber","description":"Release","source":"@site/contrib_versioned_docs/version-paseto_v1.x.x/opafiber/README.md","sourceDirName":"opafiber","slug":"/opafiber/","permalink":"/contrib/paseto_v1.x.x/opafiber/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/opafiber/README.md","tags":[],"version":"paseto_v1.x.x","lastUpdatedAt":1733056464000,"frontMatter":{"id":"opafiber"},"sidebar":"tutorialSidebar","previous":{"title":"LoadShed","permalink":"/contrib/paseto_v1.x.x/loadshed/"},"next":{"title":"Otelfiber","permalink":"/contrib/paseto_v1.x.x/otelfiber/"}}'),r=n("85893"),l=n("50065");let s={id:"opafiber"},d="Opafiber",o={},c=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Types",id:"types",level:2},{value:"Usage",id:"usage",level:2}];function a(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"opafiber",children:"Opafiber"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=opafiber*",alt:"Release"}),"\n",(0,r.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/open-policy-agent/opa",children:"Open Policy Agent"})," support for Fiber."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,r.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/opafiber/v2\n"})}),"\n",(0,r.jsx)(t.h2,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"opafiber.New(config opafiber.Config) fiber.Handler\n\n"})}),"\n",(0,r.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"RegoQuery"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Required - Rego query"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"RegoPolicy"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"io.Reader"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Required - Rego policy"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"IncludeQueryString"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Include query string as input to rego policy"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"false"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"DeniedStatusCode"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"int"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Http status code to return when policy denies request"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"400"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"DeniedResponseMessage"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Http response body text to return when policy denies request"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:'""'})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"IncludeHeaders"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"[]string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Include headers as input to rego policy"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"InputCreationMethod"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"InputCreationFunc"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Use your own function to provide input for OPA"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func defaultInput(ctx *fiber.Ctx) (map[string]interface{}, error)"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"types",children:"Types"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"type InputCreationFunc func(c *fiber.Ctx) (map[string]interface{}, error)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.p,{children:"OPA Fiber middleware sends the following example data to the policy engine as input:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "method": "GET",\n  "path": "/somePath",\n  "query": {\n    "name": ["John Doe"]\n  },\n  "headers": {\n    "Accept": "application/json",\n    "Content-Type": "application/json"\n  }\n}\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/contrib/opafiber/v2"\n)\n\nfunc main() {\n	app := fiber.New()\n	module := `\npackage example.authz\n\ndefault allow := false\n\nallow {\n	input.method == "GET"\n}\n`\n\n	cfg := opafiber.Config{\n		RegoQuery:             "data.example.authz.allow",\n		RegoPolicy:            bytes.NewBufferString(module),\n		IncludeQueryString:    true,\n		DeniedStatusCode:      fiber.StatusForbidden,\n		DeniedResponseMessage: "status forbidden",\n		IncludeHeaders:        []string{"Authorization"},\n		InputCreationMethod:   func (ctx *fiber.Ctx) (map[string]interface{}, error) {\n            return map[string]interface{}{\n                "method": ctx.Method(),\n                "path": ctx.Path(),\n            }, nil\n        },\n	}\n	app.Use(opafiber.New(cfg))\n\n	app.Get("/", func(ctx *fiber.Ctx) error {\n		return ctx.SendStatus(200)\n	})\n\n	app.Listen(":8080")\n}\n'})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var i=n(67294);let r={},l=i.createContext(r);function s(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);