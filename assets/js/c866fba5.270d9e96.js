"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["35840"],{6901:function(e,t,l){l.r(t),l.d(t,{default:()=>x,frontMatter:()=>n,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"fiberzerolog/fiberzerolog","title":"Fiberzerolog","description":"Release","source":"@site/contrib_versioned_docs/version-swagger_v1.x.x/fiberzerolog/README.md","sourceDirName":"fiberzerolog","slug":"/fiberzerolog/","permalink":"/docs/contrib/swagger_v1.x.x/fiberzerolog/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/fiberzerolog/README.md","tags":[],"version":"swagger_v1.x.x","lastUpdatedAt":1744830196000,"frontMatter":{"id":"fiberzerolog"},"sidebar":"left_sidebar","previous":{"title":"Fiberzap","permalink":"/docs/contrib/swagger_v1.x.x/fiberzap/"},"next":{"title":"HCaptcha","permalink":"/docs/contrib/swagger_v1.x.x/hcaptcha/"}}'),s=l("85893"),i=l("50065");let n={id:"fiberzerolog"},d="Fiberzerolog",o={},c=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2}];function g(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"fiberzerolog",children:"Fiberzerolog"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fiberzerolog*",alt:"Release"}),"\n",(0,s.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Test%20fiberzerolog/badge.svg",alt:"Test"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://zerolog.io/",children:"Zerolog"})," logging support for Fiber."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Note: Requires Go 1.18 and above"})}),"\n",(0,s.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,s.jsx)(t.p,{children:"This middleware supports Fiber v2."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fiberzerolog\ngo get -u github.com/rs/zerolog/log\n"})}),"\n",(0,s.jsx)(t.h2,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"fiberzerolog.New(config ...fiberzerolog.Config) fiber.Handler\n"})}),"\n",(0,s.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"func(*Ctx) bool"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Define a function to skip this middleware when returned true"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"nil"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Logger"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"*zerolog.Logger"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Add custom zerolog logger."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"zerolog.New(os.Stderr).With().Timestamp().Logger()"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"GetLogger"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"func(*fiber.Ctx) zerolog.Logger"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Get custom zerolog logger, if it's defined the returned logger will replace the ",(0,s.jsx)(t.code,{children:"Logger"})," value."]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"nil"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Fields"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"[]string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Add fields what you want see."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:'[]string{"latency", "status", "method", "url", "error"}'})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"WrapHeaders"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bool"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Wrap headers to dictionary.",(0,s.jsx)("br",{}),"If false: ",(0,s.jsx)(t.code,{children:'{"method":"POST", "header-key":"header value"}'}),(0,s.jsx)("br",{}),"If true: ",(0,s.jsx)(t.code,{children:'{"method":"POST", "reqHeaders": {"header-key":"header value"}}'})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"false"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"FieldsSnakeCase"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bool"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Use snake case for fields: FieldResBody, FieldQueryParams, FieldBytesReceived, FieldBytesSent, FieldRequestId, FieldReqHeaders, FieldResHeaders.",(0,s.jsx)("br",{}),"If false: ",(0,s.jsx)(t.code,{children:'{"method":"POST", "resBody":"v", "queryParams":"v"}'}),(0,s.jsx)("br",{}),"If true: ",(0,s.jsx)(t.code,{children:'{"method":"POST", "res_body":"v", "query_params":"v"}'})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"false"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Messages"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"[]string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Custom response messages."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:'[]string{"Server error", "Client error", "Success"}'})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Levels"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"[]zerolog.Level"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Custom response levels."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"[]zerolog.Level{zerolog.ErrorLevel, zerolog.WarnLevel, zerolog.InfoLevel}"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"SkipURIs"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"[]string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Skip logging these URI."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"[]string{}"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"GetResBody"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"func(c *fiber.Ctx) []byte"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Define a function to get response body when return non-nil.",(0,s.jsx)("br",{}),"eg: When use compress middleware, resBody is unreadable. you can set GetResBody func to get readable resBody."]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"nil"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/contrib/fiberzerolog"\n    "github.com/rs/zerolog"\n)\n\nfunc main() {\n    app := fiber.New()\n    logger := zerolog.New(os.Stderr).With().Timestamp().Logger()\n\n    app.Use(fiberzerolog.New(fiberzerolog.Config{\n        Logger: &logger,\n    }))\n\n    app.Get("/", func (c *fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    })\n\n    if err := app.Listen(":3000"); err != nil {\n        logger.Fatal().Err(err).Msg("Fiber app error")\n    }\n}\n'})})]})}function x(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return d},a:function(){return n}});var r=l(67294);let s={},i=r.createContext(s);function n(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);