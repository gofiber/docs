"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[55546],{3905:(e,t,r)=>{r.d(t,{Zo:()=>b,kt:()=>g});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},b=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),f=c(r),p=o,g=f["".concat(s,".").concat(p)]||f[p]||m[p]||n;return r?i.createElement(g,a(a({ref:t},b),{},{components:r})):i.createElement(g,a({ref:t},b))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<n;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},38794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=r(87462),o=(r(67294),r(3905));const n={title:"\ud83d\udc4b Welcome",sidebar_position:1},a=void 0,l={unversionedId:"README",id:"version-fibernewrelic_v1.x.x/README",title:"\ud83d\udc4b Welcome",description:"Discord",source:"@site/contrib_versioned_docs/version-fibernewrelic_v1.x.x/README.md",sourceDirName:".",slug:"/",permalink:"/contrib/fibernewrelic_v1.x.x/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/README.md",tags:[],version:"fibernewrelic_v1.x.x",lastUpdatedAt:1701177524,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:1,frontMatter:{title:"\ud83d\udc4b Welcome",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Casbin",permalink:"/contrib/fibernewrelic_v1.x.x/casbin/"}},s={},c=[{value:"\ud83d\udcd1 Middleware Implementations",id:"-middleware-implementations",level:2}],b={toc:c},f="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,i.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/contrib/master/.github/logo-dark.svg#gh-dark-mode-only"}),(0,o.kt)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/contrib/master/.github/logo.svg#gh-light-mode-only"}),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,o.kt)("p",null,"Repository for third party middlewares with dependencies.")),(0,o.kt)("h2",{id:"-middleware-implementations"},"\ud83d\udcd1 Middleware Implementations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/fibernewrelic_v1.x.x/casbin/"},"Casbin")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+Casbin%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-casbin.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/fibernewrelic_v1.x.x/fiberi18n/"},"Fiberi18n")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fiberi18n%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fiberi18n.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/fibernewrelic_v1.x.x/fibersentry/"},"Fibersentry")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fibersentry%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fibersentry.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/fibernewrelic_v1.x.x/fiberzap/"},"Fiberzap")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fiberzap%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fiberzap.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/fibernewrelic_v1.x.x/fiberzerolog/"},"Fiberzerolog")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fiberzerolog%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fiberzerolog.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/fibernewrelic_v1.x.x/jwt/"},"JWT")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+jwt%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-jwt.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/fibernewrelic_v1.x.x/fibernewrelic/"},"NewRelic")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fibernewrelic%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fibernewrelic.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/fibernewrelic_v1.x.x/opafiber/"},"Open Policy Agent")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+opafiber%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-opafiber.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/fibernewrelic_v1.x.x/otelfiber/"},"Otelfiber (OpenTelemetry)")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+otelfiber%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-otelfiber.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/fibernewrelic_v1.x.x/paseto/"},"Paseto")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+paseto%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-paseto.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/fibernewrelic_v1.x.x/swagger/"},"Swagger")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+swagger%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-swagger.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/fibernewrelic_v1.x.x/websocket/"},"Websocket")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+websocket%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-websocket.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "))))}m.isMDXComponent=!0}}]);