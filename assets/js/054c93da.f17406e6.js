"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[55987],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(r),f=n,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||i;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21310:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={id:"expvar"},l="ExpVar",o={unversionedId:"api/middleware/expvar",id:"api/middleware/expvar",title:"ExpVar",description:"Expvar middleware for Fiber that serves via its HTTP server runtime exposed variants in the JSON format. The package is typically only imported for the side effect of registering its HTTP handlers. The handled path is /debug/vars.",source:"@site/docs/core/api/middleware/expvar.md",sourceDirName:"api/middleware",slug:"/api/middleware/expvar",permalink:"/next/api/middleware/expvar",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/expvar.md",tags:[],version:"current",lastUpdatedAt:1709403067,formattedLastUpdatedAt:"Mar 2, 2024",frontMatter:{id:"expvar"},sidebar:"tutorialSidebar",previous:{title:"ETag",permalink:"/next/api/middleware/etag"},next:{title:"Favicon",permalink:"/next/api/middleware/favicon"}},p={},d=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],c={toc:d},s="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"expvar"},"ExpVar"),(0,n.kt)("p",null,"Expvar middleware for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that serves via its HTTP server runtime exposed variants in the JSON format. The package is typically only imported for the side effect of registering its HTTP handlers. The handled path is ",(0,n.kt)("inlineCode",{parentName:"p"},"/debug/vars"),"."),(0,n.kt)("h2",{id:"signatures"},"Signatures"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"func New() fiber.Handler\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v3"\n  expvarmw "github.com/gofiber/fiber/v3/middleware/expvar"\n)\n')),(0,n.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'var count = expvar.NewInt("count")\n\napp.Use(expvarmw.New())\napp.Get("/", func(c fiber.Ctx) error {\n    count.Add(1)\n\n    return c.SendString(fmt.Sprintf("hello expvar count %d", count.Value()))\n})\n')),(0,n.kt)("p",null,"Visit path ",(0,n.kt)("inlineCode",{parentName:"p"},"/debug/vars")," to see all vars and use query ",(0,n.kt)("inlineCode",{parentName:"p"},"r=key")," to filter exposed variables."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl 127.0.0.1:3000\nhello expvar count 1\n\ncurl 127.0.0.1:3000/debug/vars\n{\n    "cmdline": ["xxx"],\n    "count": 1,\n    "expvarHandlerCalls": 33,\n    "expvarRegexpErrors": 0,\n    "memstats": {...}\n}\n\ncurl 127.0.0.1:3000/debug/vars?r=c\n{\n    "cmdline": ["xxx"],\n    "count": 1\n}\n')),(0,n.kt)("h2",{id:"config"},"Config"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) bool")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"nil"))))),(0,n.kt)("h2",{id:"default-config"},"Default Config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Next: nil,\n}\n")))}u.isMDXComponent=!0}}]);