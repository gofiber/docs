"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[2822],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={id:"faq",title:"\ud83e\udd14 FAQ",description:"List of frequently asked questions. Feel free to open an issue to add your question to this page.",sidebar_position:1},i=void 0,l={unversionedId:"extra/faq",id:"extra/faq",title:"\ud83e\udd14 FAQ",description:"List of frequently asked questions. Feel free to open an issue to add your question to this page.",source:"@site/docs/extra/faq.md",sourceDirName:"extra",slug:"/extra/faq",permalink:"/next/extra/faq",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/extra/faq.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1678644881,formattedLastUpdatedAt:"Mar 12, 2023",sidebarPosition:1,frontMatter:{id:"faq",title:"\ud83e\udd14 FAQ",description:"List of frequently asked questions. Feel free to open an issue to add your question to this page.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Extra",permalink:"/next/category/extra"},next:{title:"\ud83d\udcca Benchmarks",permalink:"/next/extra/benchmarks"}},s={},p=[{value:"How should I structure my application?",id:"how-should-i-structure-my-application",level:2},{value:"How do I handle custom 404 responses?",id:"how-do-i-handle-custom-404-responses",level:2},{value:"How do I set up an error handler?",id:"how-do-i-set-up-an-error-handler",level:2},{value:"Which template engines does Fiber support?",id:"which-template-engines-does-fiber-support",level:2},{value:"Does Fiber have a community chat?",id:"does-fiber-have-a-community-chat",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-should-i-structure-my-application"},"How should I structure my application?"),(0,n.kt)("p",null,"There is no definitive answer to this question. The answer depends on the scale of your application and the team that is involved. To be as flexible as possible, Fiber makes no assumptions in terms of structure."),(0,n.kt)("p",null,"Routes and other application-specific logic can live in as many files as you wish, in any directory structure you prefer. View the following examples for inspiration:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gofiber/boilerplate"},"gofiber/boilerplate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/thomasvvugt/fiber-boilerplate"},"thomasvvugt/fiber-boilerplate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Iq2qT0fRhAA"},"Youtube - Building a REST API using Gorm and Fiber")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/embedmode/fiberseed"},"embedmode/fiberseed"))),(0,n.kt)("h2",{id:"how-do-i-handle-custom-404-responses"},"How do I handle custom 404 responses?"),(0,n.kt)("p",null,"If you're using v2.32.0 or later, all you need to do is to implement a custom error handler. See below, or see a more detailed explanation at ",(0,n.kt)("a",{parentName:"p",href:"/next/guide/error-handling#custom-error-handler"},"Error Handling"),". "),(0,n.kt)("p",null,"If you're using v2.31.0 or earlier, the error handler will not capture 404 errors. Instead, you need to add a middleware function at the very bottom of the stack ","(","below all other functions",")"," to handle a 404 response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app.Use(func(c *fiber.Ctx) error {\n    return c.Status(fiber.StatusNotFound).SendString("Sorry can\'t find that!")\n})\n')),(0,n.kt)("h2",{id:"how-do-i-set-up-an-error-handler"},"How do I set up an error handler?"),(0,n.kt)("p",null,"To override the default error handler, you can override the default when providing a ",(0,n.kt)("a",{parentName:"p",href:"/next/api/fiber#config"},"Config")," when initiating a new ",(0,n.kt)("a",{parentName:"p",href:"/next/api/fiber#new"},"Fiber instance"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"app := fiber.New(fiber.Config{\n    ErrorHandler: func(c *fiber.Ctx, err error) error {\n        return c.Status(fiber.StatusInternalServerError).SendString(err.Error())\n    },\n})\n")),(0,n.kt)("p",null,"We have a dedicated page explaining how error handling works in Fiber, see ",(0,n.kt)("a",{parentName:"p",href:"/next/guide/error-handling"},"Error Handling"),"."),(0,n.kt)("h2",{id:"which-template-engines-does-fiber-support"},"Which template engines does Fiber support?"),(0,n.kt)("p",null,"Fiber currently supports 8 template engines in our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gofiber/template"},"gofiber/template")," middleware:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yosssi/ace"},"Ace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eknkc/amber"},"Amber")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/flosch/pongo2"},"Django")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aymerick/raymond"},"Handlebars")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/html/template/"},"HTML")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/CloudyKit/jet"},"Jet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cbroglie/mustache"},"Mustache")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Joker/jade"},"Pug"))),(0,n.kt)("p",null,"To learn more about using Templates in Fiber, see ",(0,n.kt)("a",{parentName:"p",href:"/next/guide/templates"},"Templates"),"."),(0,n.kt)("h2",{id:"does-fiber-have-a-community-chat"},"Does Fiber have a community chat?"),(0,n.kt)("p",null,"Yes, we have our own ",(0,n.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},"Discord "),"server, where we hang out. We have different rooms for every subject.",(0,n.kt)("br",{parentName:"p"}),"\n","If you have questions or just want to have a chat, feel free to join us via this ",(0,n.kt)("strong",{parentName:"p"},">")," ",(0,n.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,n.kt)("strong",{parentName:"a"},"invite link"))," ",(0,n.kt)("strong",{parentName:"p"},"<"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(408).Z,width:"243",height:"236"})))}d.isMDXComponent=!0},408:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/support-discord-baf5f38231088813dfbc3ccdc6966634.png"}}]);