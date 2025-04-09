"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["69168"],{40211:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>c,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>s});var i=JSON.parse('{"id":"fibernewrelic/fibernewrelic","title":"Fibernewrelic","description":"Release","source":"@site/contrib_versioned_docs/version-circuitbreaker_v0.x.x/fibernewrelic/README.md","sourceDirName":"fibernewrelic","slug":"/fibernewrelic/","permalink":"/contrib/circuitbreaker_v0.x.x/fibernewrelic/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/fibernewrelic/README.md","tags":[],"version":"circuitbreaker_v0.x.x","lastUpdatedAt":1744205860000,"frontMatter":{"id":"fibernewrelic"},"sidebar":"left_sidebar","previous":{"title":"Fiberi18n","permalink":"/contrib/circuitbreaker_v0.x.x/fiberi18n/"},"next":{"title":"Fibersentry","permalink":"/contrib/circuitbreaker_v0.x.x/fibersentry/"}}'),r=t("85893"),l=t("50065");let c={id:"fibernewrelic"},s="Fibernewrelic",d={},o=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Usage",id:"usage",level:2},{value:"Usage with existing New Relic application",id:"usage-with-existing-new-relic-application",level:2}];function a(e){let n={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"fibernewrelic",children:"Fibernewrelic"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fibernewrelic*",alt:"Release"}),"\n",(0,r.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Test%20fibernewrelic/badge.svg",alt:"Test"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/newrelic/go-agent",children:"NewRelic"})," support for Fiber."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Note: Requires Go 1.18 and above"})}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fibernewrelic\n"})}),"\n",(0,r.jsx)(n.h2,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"fibernewrelic.New(config fibernewrelic.Config) fiber.Handler\n"})}),"\n",(0,r.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"License"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Required - New Relic License Key"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:'""'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"AppName"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"New Relic Application Name"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"fiber-api"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Enabled"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"bool"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Enable/Disable New Relic"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.del,{children:"TransportType"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.del,{children:(0,r.jsx)(n.code,{children:"string"})})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.del,{children:"Can be HTTP or HTTPS"})," (Deprecated)"]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.del,{children:(0,r.jsx)(n.code,{children:'"HTTP"'})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Application"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"Application"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Existing New Relic App"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"nil"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ErrorStatusCodeHandler"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"func(c *fiber.Ctx, err error) int"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"If you want to change newrelic status code, you can use it."}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"DefaultErrorStatusCodeHandler"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Next"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"func(c *fiber.Ctx) bool"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"nil"})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/contrib/fibernewrelic"\n)\n\nfunc main() {\n	app := fiber.New()\n\n	app.Get("/", func(ctx *fiber.Ctx) error {\n		return ctx.SendStatus(200)\n	})\n\n	cfg := fibernewrelic.Config{\n		License:       "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",\n		AppName:       "MyCustomApi",\n		Enabled:       true,\n	}\n\n	app.Use(fibernewrelic.New(cfg))\n\n	app.Listen(":8080")\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"usage-with-existing-new-relic-application",children:"Usage with existing New Relic application"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/contrib/fibernewrelic"\n	"github.com/newrelic/go-agent/v3/newrelic"\n)\n\nfunc main() {\n	newrelicApp, err := newrelic.NewApplication(\n		newrelic.ConfigAppName("MyCustomApi"),\n		newrelic.ConfigLicense("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"),\n		newrelic.ConfigEnabled(true),\n	)\n\n	app := fiber.New()\n\n	app.Get("/", func(ctx *fiber.Ctx) error {\n		return ctx.SendStatus(200)\n	})\n	\n	app.Get("/foo", func(ctx *fiber.Ctx) error {\n		txn := newrelic.FromContext(ctx)\n		segment := txn.StartSegment("foo segment")\n		defer segment.End()\n		\n		// do foo \n\n		return nil\n	})\n\n	cfg := fibernewrelic.Config{\n		Application:       newrelicApp,\n	}\n\n	app.Use(fibernewrelic.New(cfg))\n\n	app.Listen(":8080")\n}\n'})})]})}function x(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return c}});var i=t(67294);let r={},l=i.createContext(r);function c(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);