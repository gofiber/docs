"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["43917"],{99327:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"fibersentry/fibersentry","title":"Fibersentry","description":"Release","source":"@site/contrib_versioned_docs/version-fibernewrelic_v1.x.x/fibersentry/README.md","sourceDirName":"fibersentry","slug":"/fibersentry/","permalink":"/docs/contrib/fibernewrelic_v1.x.x/fibersentry/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/fibersentry/README.md","tags":[],"version":"fibernewrelic_v1.x.x","lastUpdatedAt":1744830196000,"frontMatter":{"id":"fibersentry"},"sidebar":"left_sidebar","previous":{"title":"Fibernewrelic","permalink":"/docs/contrib/fibernewrelic_v1.x.x/fibernewrelic/"},"next":{"title":"Fiberzap","permalink":"/docs/contrib/fibernewrelic_v1.x.x/fiberzap/"}}'),i=n("85893"),s=n("50065");let o={id:"fibersentry"},l="Fibersentry",c={},d=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Usage",id:"usage",level:2},{value:"Accessing Context in <code>BeforeSend</code> callback",id:"accessing-context-in-beforesend-callback",level:2}];function a(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"fibersentry",children:"Fibersentry"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fibersentry*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Test%20fibersentry/badge.svg",alt:"Test"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://sentry.io/",children:"Sentry"})," support for Fiber."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note: Requires Go 1.18 and above"})}),"\n",(0,i.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(t.p,{children:"This middleware supports Fiber v2."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fibersentry\ngo get -u github.com/getsentry/sentry-go\n"})}),"\n",(0,i.jsx)(t.h2,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"fibersentry.New(config ...fibersentry.Config) fiber.Handler\n"})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Repanic"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Repanic configures whether Sentry should repanic after recovery. Set to true, if ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber/tree/master/middleware/recover",children:"Recover"})," middleware is used."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WaitForDelivery"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["WaitForDelivery configures whether you want to block the request before moving forward with the response. If ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber/tree/master/middleware/recover",children:"Recover"})," middleware is used, it's safe to either skip this option or set it to false."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Timeout"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"time.Duration"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Timeout for the event delivery requests."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"time.Second * 2"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"fibersentry"})," attaches an instance of ",(0,i.jsx)(t.code,{children:"*sentry.Hub"})," (",(0,i.jsx)(t.a,{href:"https://godoc.org/github.com/getsentry/sentry-go#Hub",children:"https://godoc.org/github.com/getsentry/sentry-go#Hub"}),") to the request's context, which makes it available throughout the rest of the request's lifetime.\nYou can access it by using the ",(0,i.jsx)(t.code,{children:"fibersentry.GetHubFromContext()"})," or ",(0,i.jsx)(t.code,{children:"fibersentry.MustGetHubFromContext()"})," method on the context itself in any of your proceeding middleware and routes.\nKeep in mind that ",(0,i.jsx)(t.code,{children:"*sentry.Hub"})," should be used instead of the global ",(0,i.jsx)(t.code,{children:"sentry.CaptureMessage"}),", ",(0,i.jsx)(t.code,{children:"sentry.CaptureException"}),", or any other calls, as it keeps the separation of data between the requests."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.strong,{children:["Keep in mind that ",(0,i.jsx)(t.code,{children:"*sentry.Hub"})," won't be available in middleware attached before ",(0,i.jsx)(t.code,{children:"fibersentry"}),". In this case, ",(0,i.jsx)(t.code,{children:"GetHubFromContext()"})," returns nil, and ",(0,i.jsx)(t.code,{children:"MustGetHubFromContext()"})," will panic."]})}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n	"fmt"\n	"log"\n\n	"github.com/getsentry/sentry-go"\n	"github.com/gofiber/contrib/fibersentry"\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/fiber/v2/utils"\n)\n\nfunc main() {\n	_ = sentry.Init(sentry.ClientOptions{\n		Dsn: "",\n		BeforeSend: func(event *sentry.Event, hint *sentry.EventHint) *sentry.Event {\n			if hint.Context != nil {\n				if c, ok := hint.Context.Value(sentry.RequestContextKey).(*fiber.Ctx); ok {\n					// You have access to the original Context if it panicked\n					fmt.Println(utils.ImmutableString(c.Hostname()))\n				}\n			}\n			fmt.Println(event)\n			return event\n		},\n		Debug:            true,\n		AttachStacktrace: true,\n	})\n\n	app := fiber.New()\n\n	app.Use(fibersentry.New(fibersentry.Config{\n		Repanic:         true,\n		WaitForDelivery: true,\n	}))\n\n	enhanceSentryEvent := func(c *fiber.Ctx) error {\n		if hub := fibersentry.GetHubFromContext(c); hub != nil {\n			hub.Scope().SetTag("someRandomTag", "maybeYouNeedIt")\n		}\n		return c.Next()\n	}\n\n	app.All("/foo", enhanceSentryEvent, func(c *fiber.Ctx) error {\n		panic("y tho")\n	})\n\n	app.All("/", func(c *fiber.Ctx) error {\n		if hub := fibersentry.GetHubFromContext(c); hub != nil {\n			hub.WithScope(func(scope *sentry.Scope) {\n				scope.SetExtra("unwantedQuery", "someQueryDataMaybe")\n				hub.CaptureMessage("User provided unwanted query string, but we recovered just fine")\n			})\n		}\n		return c.SendStatus(fiber.StatusOK)\n	})\n\n	log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,i.jsxs)(t.h2,{id:"accessing-context-in-beforesend-callback",children:["Accessing Context in ",(0,i.jsx)(t.code,{children:"BeforeSend"})," callback"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'sentry.Init(sentry.ClientOptions{\n	Dsn: "your-public-dsn",\n	BeforeSend: func(event *sentry.Event, hint *sentry.EventHint) *sentry.Event {\n		if hint.Context != nil {\n			if c, ok := hint.Context.Value(sentry.RequestContextKey).(*fiber.Ctx); ok {\n				// You have access to the original Context if it panicked\n				fmt.Println(c.Hostname())\n			}\n		}\n		return event\n	},\n})\n'})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var r=n(67294);let i={},s=r.createContext(i);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);