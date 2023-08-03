"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[41480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,s=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(s,l(l({ref:t},g),{},{components:n})):r.createElement(s,l({ref:t},g))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={id:"fiberi18n",title:"Fiberi18n"},l=void 0,o={unversionedId:"fiberi18n/fiberi18n",id:"version-fibersentry_v1.x.x/fiberi18n/fiberi18n",title:"Fiberi18n",description:"Release",source:"@site/contrib_versioned_docs/version-fibersentry_v1.x.x/fiberi18n/README.md",sourceDirName:"fiberi18n",slug:"/fiberi18n/",permalink:"/contrib/fibersentry_v1.x.x/fiberi18n/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/fiberi18n/README.md",tags:[],version:"fibersentry_v1.x.x",lastUpdatedAt:1691074140,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{id:"fiberi18n",title:"Fiberi18n"},sidebar:"tutorialSidebar",previous:{title:"Casbin",permalink:"/contrib/fibersentry_v1.x.x/casbin/"},next:{title:"Fibernewrelic",permalink:"/contrib/fibersentry_v1.x.x/fibernewrelic/"}},p={},d=[{value:"Install",id:"install",level:3},{value:"Signature",id:"signature",level:3},{value:"Config",id:"config",level:3},{value:"Example",id:"example",level:3}],g={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fiberi18n*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nicksnyder/go-i18n"},"go-i18n")," support for Fiber."),(0,a.kt)("h3",{id:"install"},"Install"),(0,a.kt)("p",null,"This middleware supports Fiber v2."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fiberi18n\n")),(0,a.kt)("h3",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fiberi18n.New(config ...*Config) fiber.Handler\n")),(0,a.kt)("h3",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Next"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"func(c *fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:null},"A function to skip this middleware when returned ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RootPath"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The i18n template folder path."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"./example/localize"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AcceptLanguages"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"[]language.Tag")),(0,a.kt)("td",{parentName:"tr",align:null},"A collection of languages that can be processed."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"[]language.Tag{language.Chinese, language.English}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FormatBundleFile"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The type of the template file."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"yaml"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DefaultLanguage"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"language.Tag")),(0,a.kt)("td",{parentName:"tr",align:null},"The default returned language type."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"language.English"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Loader"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Loader")),(0,a.kt)("td",{parentName:"tr",align:null},"The implementation of the Loader interface, which defines how to read the file. We provide both os.ReadFile and embed.FS.ReadFile."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"LoaderFunc(os.ReadFile)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UnmarshalFunc"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"i18n.UnmarshalFunc")),(0,a.kt)("td",{parentName:"tr",align:null},"The function used for decoding template files."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"yaml.Unmarshal"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LangHandler"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"func(ctx *fiber.Ctx, defaultLang string) string")),(0,a.kt)("td",{parentName:"tr",align:null},"Used to get the kind of language handled by *fiber.Ctx and defaultLang."),(0,a.kt)("td",{parentName:"tr",align:null},"Retrieved from the request header ",(0,a.kt)("inlineCode",{parentName:"td"},"Accept-Language")," or query parameter ",(0,a.kt)("inlineCode",{parentName:"td"},"lang"),".")))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/contrib/fiberi18n"\n    "github.com/gofiber/fiber/v2"\n    "github.com/nicksnyder/go-i18n/v2/i18n"\n    "golang.org/x/text/language"\n)\n\nfunc main() {\n    app := fiber.New()\n    app.Use(\n        fiberi18n.New(&fiberi18n.Config{\n            RootPath:        "./example/localize",\n            AcceptLanguages: []language.Tag{language.Chinese, language.English},\n            DefaultLanguage: language.Chinese,\n        }),\n    )\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString(fiberi18n.MustGetMessage("welcome"))\n    })\n    app.Get("/:name", func(ctx *fiber.Ctx) error {\n        return ctx.SendString(fiberi18n.MustGetMessage(&i18n.LocalizeConfig{\n            MessageID: "welcomeWithName",\n            TemplateData: map[string]string{\n                "name": ctx.Params("name"),\n            },\n        }))\n    })\n    app.Listen("127.0.0.1:3000")\n}\n')))}m.isMDXComponent=!0}}]);