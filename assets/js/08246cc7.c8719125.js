"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["63883"],{10562:function(e,i,n){n.r(i),n.d(i,{metadata:()=>t,contentTitle:()=>c,default:()=>x,assets:()=>d,toc:()=>o,frontMatter:()=>s});var t=JSON.parse('{"id":"fibernewrelic/fibernewrelic","title":"Fibernewrelic","description":"Release","source":"@site/contrib_versioned_docs/version-fiberi18n_v1.x.x/fibernewrelic/README.md","sourceDirName":"fibernewrelic","slug":"/fibernewrelic/","permalink":"/contrib/fiberi18n_v1.x.x/fibernewrelic/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/fibernewrelic/README.md","tags":[],"version":"fiberi18n_v1.x.x","lastUpdatedAt":1732702215000,"frontMatter":{"id":"fibernewrelic"},"sidebar":"tutorialSidebar","previous":{"title":"Fiberi18n","permalink":"/contrib/fiberi18n_v1.x.x/fiberi18n/"},"next":{"title":"Fibersentry","permalink":"/contrib/fiberi18n_v1.x.x/fibersentry/"}}'),r=n("85893"),l=n("50065");let s={id:"fibernewrelic"},c="Fibernewrelic",d={},o=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Usage",id:"usage",level:2},{value:"Usage with existing New Relic application",id:"usage-with-existing-new-relic-application",level:2}];function a(e){let i={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"fibernewrelic",children:"Fibernewrelic"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fibernewrelic*",alt:"Release"}),"\n",(0,r.jsx)(i.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(i.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(i.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.jsx)(i.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.jsx)(i.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://github.com/newrelic/go-agent",children:"NewRelic"})," support for Fiber."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Note: Requires Go 1.18 and above"})}),"\n",(0,r.jsx)(i.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fibernewrelic\n"})}),"\n",(0,r.jsx)(i.h2,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:"fibernewrelic.New(config fibernewrelic.Config) fiber.Handler\n"})}),"\n",(0,r.jsx)(i.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(i.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(i.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(i.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"left"},children:"License"}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:(0,r.jsx)(i.code,{children:"string"})}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:"Required - New Relic License Key"}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:(0,r.jsx)(i.code,{children:'""'})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"left"},children:"AppName"}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:(0,r.jsx)(i.code,{children:"string"})}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:"New Relic Application Name"}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:(0,r.jsx)(i.code,{children:"fiber-api"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"left"},children:"Enabled"}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:(0,r.jsx)(i.code,{children:"bool"})}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:"Enable/Disable New Relic"}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:(0,r.jsx)(i.code,{children:"false"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"left"},children:(0,r.jsx)(i.del,{children:"TransportType"})}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:(0,r.jsx)(i.del,{children:(0,r.jsx)(i.code,{children:"string"})})}),(0,r.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,r.jsx)(i.del,{children:"Can be HTTP or HTTPS"})," (Deprecated)"]}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:(0,r.jsx)(i.del,{children:(0,r.jsx)(i.code,{children:'"HTTP"'})})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"left"},children:"Application"}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:(0,r.jsx)(i.code,{children:"Application"})}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:"Existing New Relic App"}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:(0,r.jsx)(i.code,{children:"nil"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"left"},children:"ErrorStatusCodeHandler"}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:(0,r.jsx)(i.code,{children:"func(c *fiber.Ctx, err error) int"})}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:"If you want to change newrelic status code, you can use it."}),(0,r.jsx)(i.td,{style:{textAlign:"left"},children:(0,r.jsx)(i.code,{children:"DefaultErrorStatusCodeHandler"})})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:'package main\n\nimport (\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/contrib/fibernewrelic"\n)\n\nfunc main() {\n	app := fiber.New()\n\n	app.Get("/", func(ctx *fiber.Ctx) error {\n		return ctx.SendStatus(200)\n	})\n\n	cfg := fibernewrelic.Config{\n		License:       "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",\n		AppName:       "MyCustomApi",\n		Enabled:       true,\n	}\n\n	app.Use(fibernewrelic.New(cfg))\n\n	app.Listen(":8080")\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"usage-with-existing-new-relic-application",children:"Usage with existing New Relic application"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:'package main\n\nimport (\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/contrib/fibernewrelic"\n	"github.com/newrelic/go-agent/v3/newrelic"\n)\n\nfunc main() {\n	newrelicApp, err := newrelic.NewApplication(\n		newrelic.ConfigAppName("MyCustomApi"),\n		newrelic.ConfigLicense("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"),\n		newrelic.ConfigEnabled(true),\n	)\n\n	app := fiber.New()\n\n	app.Get("/", func(ctx *fiber.Ctx) error {\n		return ctx.SendStatus(200)\n	})\n\n	cfg := fibernewrelic.Config{\n		Application:       newrelicApp\n	}\n\n	app.Use(fibernewrelic.New(cfg))\n\n	app.Listen(":8080")\n}\n'})})]})}function x(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return c},a:function(){return s}});var t=n(67294);let r={},l=t.createContext(r);function s(e){let i=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);