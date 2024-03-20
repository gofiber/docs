"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[53283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),g=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=g(r),s=a,c=f["".concat(p,".").concat(s)]||f[s]||m[s]||i;return r?n.createElement(c,l(l({ref:t},d),{},{components:r})):n.createElement(c,l({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[f]="string"==typeof e?e:a,l[1]=o;for(var g=2;g<i;g++)l[g]=r[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},18889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var n=r(87462),a=(r(67294),r(3905));const i={id:"fiberzap"},l="Fiberzap",o={unversionedId:"fiberzap/fiberzap",id:"version-fiberi18n_v2.x.x/fiberzap/fiberzap",title:"Fiberzap",description:"Release",source:"@site/contrib_versioned_docs/version-fiberi18n_v2.x.x/fiberzap/README.md",sourceDirName:"fiberzap",slug:"/fiberzap/",permalink:"/contrib/fiberi18n_v2.x.x/fiberzap/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/fiberzap/README.md",tags:[],version:"fiberi18n_v2.x.x",lastUpdatedAt:1710937592,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{id:"fiberzap"},sidebar:"tutorialSidebar",previous:{title:"Fibersentry",permalink:"/contrib/fiberi18n_v2.x.x/fibersentry/"},next:{title:"Fiberzerolog",permalink:"/contrib/fiberi18n_v2.x.x/fiberzerolog/"}},p={},g=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:3},{value:"Config",id:"config",level:3},{value:"Example",id:"example",level:3},{value:"NewLogger",id:"newlogger",level:2},{value:"Signature",id:"signature-1",level:3},{value:"LoggerConfig",id:"loggerconfig",level:3},{value:"Example",id:"example-1",level:3}],d={toc:g},f="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fiberzap"},"Fiberzap"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fiberzap*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/uber-go/zap"},"Zap")," logging support for Fiber."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"This middleware supports Fiber v2."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fiberzap/v2\ngo get -u go.uber.org/zap\n")),(0,a.kt)("h3",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"fiberzap.New(config ...fiberzap.Config) fiber.Handler\n")),(0,a.kt)("h3",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Define a function to skip this middleware when returned true"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Logger"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"*zap.Logger")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Add custom zap logger."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"zap.NewDevelopment()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Fields"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Add fields what you want see."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'[]string{"latency", "status", "method", "url"}'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"FieldsFunc"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]zap.Field")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Define a function to add custom fields."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Messages"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom response messages."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'[]string{"Server error", "Client error", "Success"}'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Levels"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]zapcore.Level")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom response levels."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]zapcore.Level{zapcore.ErrorLevel, zapcore.WarnLevel, zapcore.InfoLevel}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SkipURIs"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Skip logging these URI."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string{}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"GetResBody"),(0,a.kt)("td",{parentName:"tr",align:"left"},"func(c ","*","fiber.Ctx) []byte"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Define a function to get response body when return non-nil.",(0,a.kt)("br",null),"eg: When use compress middleware, resBody is unreadable. you can set GetResBody func to get readable resBody."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/contrib/fiberzap/v2"\n    "go.uber.org/zap"\n)\n\nfunc main() {\n    app := fiber.New()\n    logger, _ := zap.NewProduction()\n\n    app.Use(fiberzap.New(fiberzap.Config{\n        Logger: logger,\n    }))\n\n    app.Get("/", func (c *fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("h2",{id:"newlogger"},"NewLogger"),(0,a.kt)("h3",{id:"signature-1"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"fiberzap.NewLogger(config ...fiberzap.LoggerConfig) *fiberzap.LoggerConfig\n")),(0,a.kt)("h3",{id:"loggerconfig"},"LoggerConfig"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CoreConfigs"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]CoreConfig")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Define Config for zapcore"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"fiberzap.LoggerConfigDefault"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SetLogger"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"*zap.Logger")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Add custom zap logger. if not nil, ",(0,a.kt)("inlineCode",{parentName:"td"},"ZapOptions"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"CoreConfigs"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"SetLevel"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"SetOutput")," will be ignored."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ExtraKeys"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allow users log extra values from context."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string{}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ZapOptions"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]zap.Option")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allow users to configure the zap.Option supplied by zap."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]zap.Option{}"))))),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "github.com/gofiber/contrib/fiberzap/v2"\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/log"\n)\n\nfunc main() {\n    app := fiber.New()\n    log.SetLogger(fiberzap.NewLogger(fiberzap.LoggerConfig{\n        ExtraKeys: []string{"request_id"},\n    }))\n    app.Use(func(c *fiber.Ctx) error {\n        ctx := context.WithValue(c.UserContext(), "request_id", "123")\n        c.SetUserContext(ctx)\n        return c.Next()\n    })\n    app.Get("/", func(c *fiber.Ctx) error {\n        log.WithContext(c.UserContext()).Info("Hello, World!")\n        return c.SendString("Hello, World!")\n    })\n    log.Fatal(app.Listen(":3000"))\n}\n')))}m.isMDXComponent=!0}}]);