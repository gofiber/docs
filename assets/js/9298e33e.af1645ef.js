"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["34273"],{58:function(e,t,n){n.r(t),n.d(t,{metadata:()=>l,contentTitle:()=>d,default:()=>x,assets:()=>o,toc:()=>c,frontMatter:()=>s});var l=JSON.parse('{"id":"fiberzap/fiberzap","title":"Fiberzap","description":"Release","source":"@site/contrib_versioned_docs/version-paseto_v1.x.x/fiberzap/README.md","sourceDirName":"fiberzap","slug":"/fiberzap/","permalink":"/contrib/paseto_v1.x.x/fiberzap/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/fiberzap/README.md","tags":[],"version":"paseto_v1.x.x","lastUpdatedAt":1732892323000,"frontMatter":{"id":"fiberzap"},"sidebar":"tutorialSidebar","previous":{"title":"Fibersentry","permalink":"/contrib/paseto_v1.x.x/fibersentry/"},"next":{"title":"Fiberzerolog","permalink":"/contrib/paseto_v1.x.x/fiberzerolog/"}}'),i=n("85893"),r=n("50065");let s={id:"fiberzap"},d="Fiberzap",o={},c=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:3},{value:"Config",id:"config",level:3},{value:"Example",id:"example",level:3},{value:"NewLogger",id:"newlogger",level:2},{value:"Signature",id:"signature-1",level:3},{value:"LoggerConfig",id:"loggerconfig",level:3},{value:"Example",id:"example-1",level:3}];function g(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"fiberzap",children:"Fiberzap"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fiberzap*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/uber-go/zap",children:"Zap"})," logging support for Fiber."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,i.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(t.p,{children:"This middleware supports Fiber v2."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fiberzap/v2\ngo get -u go.uber.org/zap\n"})}),"\n",(0,i.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"fiberzap.New(config ...fiberzap.Config) fiber.Handler\n"})}),"\n",(0,i.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(*Ctx) bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Define a function to skip this middleware when returned true"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Logger"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"*zap.Logger"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Add custom zap logger."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"zap.NewDevelopment()"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fields"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Add fields what you want see."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'[]string{"latency", "status", "method", "url"}'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"FieldsFunc"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]zap.Field"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Define a function to add custom fields."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Messages"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Custom response messages."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'[]string{"Server error", "Client error", "Success"}'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Levels"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]zapcore.Level"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Custom response levels."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]zapcore.Level{zapcore.ErrorLevel, zapcore.WarnLevel, zapcore.InfoLevel}"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SkipURIs"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Skip logging these URI."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string{}"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"GetResBody"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"func(c *fiber.Ctx) []byte"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Define a function to get response body when return non-nil.",(0,i.jsx)("br",{}),"eg: When use compress middleware, resBody is unreadable. you can set GetResBody func to get readable resBody."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/contrib/fiberzap/v2"\n    "go.uber.org/zap"\n)\n\nfunc main() {\n    app := fiber.New()\n    logger, _ := zap.NewProduction()\n\n    app.Use(fiberzap.New(fiberzap.Config{\n        Logger: logger,\n    }))\n\n    app.Get("/", func (c *fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"newlogger",children:"NewLogger"}),"\n",(0,i.jsx)(t.h3,{id:"signature-1",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"fiberzap.NewLogger(config ...fiberzap.LoggerConfig) *fiberzap.LoggerConfig\n"})}),"\n",(0,i.jsx)(t.h3,{id:"loggerconfig",children:"LoggerConfig"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CoreConfigs"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]CoreConfig"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Define Config for zapcore"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"fiberzap.LoggerConfigDefault"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SetLogger"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"*zap.Logger"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Add custom zap logger. if not nil, ",(0,i.jsx)(t.code,{children:"ZapOptions"}),", ",(0,i.jsx)(t.code,{children:"CoreConfigs"}),", ",(0,i.jsx)(t.code,{children:"SetLevel"}),", ",(0,i.jsx)(t.code,{children:"SetOutput"})," will be ignored."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ExtraKeys"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Allow users log extra values from context."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string{}"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ZapOptions"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]zap.Option"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Allow users to configure the zap.Option supplied by zap."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]zap.Option{}"})})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"example-1",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n	"context"\n	"github.com/gofiber/contrib/fiberzap/v2"\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/fiber/v2/log"\n)\n\nfunc main() {\n    app := fiber.New()\n    log.SetLogger(fiberzap.NewLogger(fiberzap.LoggerConfig{\n        ExtraKeys: []string{"request_id"},\n    }))\n    app.Use(func(c *fiber.Ctx) error {\n        ctx := context.WithValue(c.UserContext(), "request_id", "123")\n        c.SetUserContext(ctx)\n        return c.Next()\n    })\n    app.Get("/", func(c *fiber.Ctx) error {\n        log.WithContext(c.UserContext()).Info("Hello, World!")\n        return c.SendString("Hello, World!")\n    })\n    log.Fatal(app.Listen(":3000"))\n}\n'})})]})}function x(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var l=n(67294);let i={},r=l.createContext(i);function s(e){let t=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);