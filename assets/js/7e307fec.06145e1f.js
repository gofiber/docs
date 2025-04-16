"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["3040"],{82210:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>o,toc:()=>a,contentTitle:()=>d});var n=JSON.parse('{"id":"api/middleware/limiter","title":"Limiter","description":"Limiter middleware for Fiber that is used to limit repeat requests to public APIs and/or endpoints such as password reset. It is also useful for API clients, web crawling, or other tasks that need to be throttled.","source":"@site/versioned_docs/version-v2.x/api/middleware/limiter.md","sourceDirName":"api/middleware","slug":"/api/middleware/limiter","permalink":"/docs/api/middleware/limiter","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1744830196000,"frontMatter":{"id":"limiter"},"sidebar":"tutorialSidebar","previous":{"title":"Keyauth","permalink":"/docs/api/middleware/keyauth"},"next":{"title":"Logger","permalink":"/docs/api/middleware/logger"}}'),r=i("85893"),l=i("50065");let s={id:"limiter"},d="Limiter",o={},a=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Sliding window",id:"sliding-window",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Custom Storage/Database",id:"custom-storagedatabase",level:3}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"limiter",children:"Limiter"})}),"\n",(0,r.jsxs)(t.p,{children:["Limiter middleware for ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that is used to limit repeat requests to public APIs and/or endpoints such as password reset. It is also useful for API clients, web crawling, or other tasks that need to be throttled."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["This middleware uses our ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/storage",children:"Storage"})," package to support various databases through a single interface. The default configuration for this middleware saves data to memory, see the examples below for other databases."]})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"This module does not share state with other processes/servers by default."})}),"\n",(0,r.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/limiter"\n)\n'})}),"\n",(0,r.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'// Initialize default config\napp.Use(limiter.New())\n\n// Or extend your config for customization\napp.Use(limiter.New(limiter.Config{\n    Next: func(c *fiber.Ctx) bool {\n        return c.IP() == "127.0.0.1"\n    },\n    Max:          20,\n    Expiration:     30 * time.Second,\n    KeyGenerator:          func(c *fiber.Ctx) string {\n        return c.Get("x-forwarded-for")\n    },\n    LimitReached: func(c *fiber.Ctx) error {\n        return c.SendFile("./toofast.html")\n    },\n    Storage: myCustomStorage{},\n}))\n'})}),"\n",(0,r.jsx)(t.h2,{id:"sliding-window",children:"Sliding window"}),"\n",(0,r.jsxs)(t.p,{children:["Instead of using the standard fixed window algorithm, you can enable the ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Sliding_window_protocol",children:"sliding window"})," algorithm."]}),"\n",(0,r.jsx)(t.p,{children:"A example of such configuration is:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"app.Use(limiter.New(limiter.Config{\n    Max:            20,\n    Expiration:     30 * time.Second,\n    LimiterMiddleware: limiter.SlidingWindow{},\n}))\n"})}),"\n",(0,r.jsx)(t.p,{children:"This means that every window will take into account the previous window(if there was any). The given formula for the rate is:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"weightOfPreviousWindpw = previous window's amount request * (whenNewWindow / Expiration)\nrate = weightOfPreviousWindpw + current window's amount request.\n"})}),"\n",(0,r.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Max"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"int"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Max number of recent connections during ",(0,r.jsx)(t.code,{children:"Expiration"})," seconds before sending a 429 response."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"KeyGenerator"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(*fiber.Ctx) string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"KeyGenerator allows you to generate custom keys, by default c.IP() is used."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"A function using c.IP() as the default"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Expiration"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"time.Duration"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Expiration is the time on how long to keep records of requests in memory."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"1 * time.Minute"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"LimitReached"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"fiber.Handler"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"LimitReached is called when a request hits the limit."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"A function sending 429 response"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"SkipFailedRequests"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"When set to true, requests with StatusCode >= 400 won't be counted."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"SkipSuccessfulRequests"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"When set to true, requests with StatusCode < 400 won't be counted."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Storage"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"fiber.Storage"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Store is used to store the state of the middleware."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"An in-memory store for this process only"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"LimiterMiddleware"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"LimiterHandler"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"LimiterMiddleware is the struct that implements a limiter middleware."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"A new Fixed Window Rate Limiter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Duration (Deprecated)"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"time.Duration"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Deprecated: Use Expiration instead"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Store (Deprecated)"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"fiber.Storage"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Deprecated: Use Storage instead"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Key (Deprecated)"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(*fiber.Ctx) string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Deprecated: Use KeyGenerator instead"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["A custom store can be used if it implements the ",(0,r.jsx)(t.code,{children:"Storage"})," interface - more details and an example can be found in ",(0,r.jsx)(t.code,{children:"store.go"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n    Max:        5,\n    Expiration: 1 * time.Minute,\n    KeyGenerator: func(c *fiber.Ctx) string {\n        return c.IP()\n    },\n    LimitReached: func(c *fiber.Ctx) error {\n        return c.SendStatus(fiber.StatusTooManyRequests)\n    },\n    SkipFailedRequests: false,\n    SkipSuccessfulRequests: false,\n    LimiterMiddleware: FixedWindow{},\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"custom-storagedatabase",children:"Custom Storage/Database"}),"\n",(0,r.jsxs)(t.p,{children:["You can use any storage from our ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/storage/",children:"storage"})," package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"storage := sqlite3.New() // From github.com/gofiber/storage/sqlite3\napp.Use(limiter.New(limiter.Config{\n	Storage: storage,\n}))\n"})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return d},a:function(){return s}});var n=i(67294);let r={},l=n.createContext(r);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);