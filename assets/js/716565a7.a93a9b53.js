"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[50802],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(r),u=a,d=c["".concat(p,".").concat(u)]||c[u]||b[u]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const i={id:"amber",title:"Amber"},o=void 0,l={unversionedId:"amber/amber",id:"version-jet_v2.x.x/amber/amber",title:"Amber",description:"Release",source:"@site/template_versioned_docs/version-jet_v2.x.x/amber/README.md",sourceDirName:"amber",slug:"/amber/",permalink:"/template/jet_v2.x.x/amber/",draft:!1,editUrl:"https://github.com/gofiber/template/edit/master/amber/README.md",tags:[],version:"jet_v2.x.x",lastUpdatedAt:1702028255,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{id:"amber",title:"Amber"},sidebar:"tutorialSidebar",previous:{title:"Ace",permalink:"/template/jet_v2.x.x/ace/"},next:{title:"Django",permalink:"/template/jet_v2.x.x/django/"}},p={},m=[{value:"Basic Example",id:"basic-example",level:3}],s={toc:m},c="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/template?filter=amber*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})),(0,a.kt)("p",null,"Amber is a template engine create by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eknkc/amber"},"eknkc"),", to see the original syntax documentation please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eknkc/amber#tags"},"click here")),(0,a.kt)("h3",{id:"basic-example"},"Basic Example"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/index.amber"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"import ./views/partials/header\n\nh1 #{Title}\n\nimport ./views/partials/footer\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/partials/header.amber"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"h1 Header\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/partials/footer.amber"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"h1 Footer\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/layouts/main.amber"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"doctype html\nhtml\n  head\n    title Main\n  body\n    #{embed()}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n    \n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/amber/v2"\n)\n\nfunc main() {\n    // Create a new engine\n    engine := amber.New("./views", ".amber")\n\n  // Or from an embedded system\n  // See github.com/gofiber/embed for examples\n  // engine := html.NewFileSystem(http.Dir("./views", ".amber"))\n\n    // Pass the engine to the Views\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    app.Get("/layout", func(c *fiber.Ctx) error {\n        // Render index within layouts/main\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        }, "layouts/main")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n\n')))}b.isMDXComponent=!0}}]);