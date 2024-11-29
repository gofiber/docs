"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["66844"],{30114:function(e,t,r){r.r(t),r.d(t,{metadata:()=>i,contentTitle:()=>a,default:()=>c,assets:()=>l,toc:()=>h,frontMatter:()=>o});var i=JSON.parse('{"id":"misc/faq","title":"\uD83E\uDD14 FAQ","description":"List of frequently asked questions. Feel free to open an issue to add your question to this page.","source":"@site/versioned_docs/version-v1.x/misc/faq.md","sourceDirName":"misc","slug":"/misc/faq","permalink":"/v1.x/misc/faq","draft":false,"unlisted":false,"tags":[],"version":"v1.x","lastUpdatedAt":1732875044000,"sidebarPosition":1,"frontMatter":{"id":"faq","title":"\uD83E\uDD14 FAQ","description":"List of frequently asked questions. Feel free to open an issue to add your question to this page.","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Misc","permalink":"/v1.x/category/misc"},"next":{"title":"\uD83D\uDCCA Benchmarks","permalink":"/v1.x/misc/benchmarks"}}'),n=r("85893"),s=r("50065");let o={id:"faq",title:"\uD83E\uDD14 FAQ",description:"List of frequently asked questions. Feel free to open an issue to add your question to this page.",sidebar_position:1},a=void 0,l={},h=[{value:"How should I structure my application?",id:"how-should-i-structure-my-application",level:2},{value:"How do I handle custom 404 responses?",id:"how-do-i-handle-custom-404-responses",level:2},{value:"How do I set up an error handler?",id:"how-do-i-set-up-an-error-handler",level:2},{value:"Which template engines does Fiber support?",id:"which-template-engines-does-fiber-support",level:2},{value:"Does Fiber have a community chat?",id:"does-fiber-have-a-community-chat",level:2}];function d(e){let t={a:"a",br:"br",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"how-should-i-structure-my-application",children:"How should I structure my application?"}),"\n",(0,n.jsx)(t.p,{children:"There is no definitive answer to this question. The answer depends on the scale of your application and the team that is involved. To be as flexible as possible, Fiber makes no assumptions in terms of structure."}),"\n",(0,n.jsx)(t.p,{children:"Routes and other application-specific logic can live in as many files as you wish, in any directory structure you prefer. View the following examples for inspiration:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/gofiber/boilerplate",children:"gofiber/boilerplate"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/thomasvvugt/fiber-boilerplate",children:"thomasvvugt/fiber-boilerplate"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=Iq2qT0fRhAA",children:"Youtube - Building a REST API using Gorm and Fiber"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-do-i-handle-custom-404-responses",children:"How do I handle custom 404 responses?"}),"\n",(0,n.jsx)(t.p,{children:"In Fiber, 404 responses are not the result of an error, so the error handler will not capture them. This behavior is because a 404 response simply indicates the absence of additional work to do; in other words, Fiber has found no routes that match the request."}),"\n",(0,n.jsx)(t.p,{children:"All you need to do is add a middleware function at the very bottom of the stack (below all other functions) to handle a 404 response:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'app.Use(func(c *fiber.Ctx) {\n    c.Status(fiber.StatusNotFound).SendString("Sorry can\'t find that!")\n})\n'})}),"\n",(0,n.jsx)(t.h2,{id:"how-do-i-set-up-an-error-handler",children:"How do I set up an error handler?"}),"\n",(0,n.jsxs)(t.p,{children:["To override the default error handler, provide a custom handler to the ",(0,n.jsx)(t.code,{children:"app.Settings.ErrorHandler"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:"app.Settings.ErrorHandler = func(c *fiber.Ctx, err error) {\n    c.Status(500).SendString(err.Error())\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["We have a dedicated page explaining how error handling works in Fiber, see ",(0,n.jsx)(t.a,{href:"../guide/error-handling",children:"Error Handling"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"which-template-engines-does-fiber-support",children:"Which template engines does Fiber support?"}),"\n",(0,n.jsxs)(t.p,{children:["Fiber currently supports 8 template engines in our ",(0,n.jsx)(t.a,{href:"https://github.com/gofiber/template",children:"gofiber/template"})," middleware:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/yosssi/ace",children:"Ace"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/eknkc/amber",children:"Amber"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/flosch/pongo2",children:"Django"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/aymerick/raymond",children:"Handlebars"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://golang.org/pkg/html/template/",children:"HTML"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/CloudyKit/jet",children:"Jet"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/cbroglie/mustache",children:"Mustache"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/Joker/jade",children:"Pug"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To learn more about using Templates in Fiber, see ",(0,n.jsx)(t.a,{href:"../guide/templates",children:"Templates"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"does-fiber-have-a-community-chat",children:"Does Fiber have a community chat?"}),"\n",(0,n.jsxs)(t.p,{children:["Yes, we have our own ",(0,n.jsx)(t.a,{href:"https://gofiber.io/discord",children:"Discord "}),"server, where we hang out. We have different rooms for every subject.",(0,n.jsx)(t.br,{}),"\n","If you have questions or just want to have a chat, feel free to join us via this ",(0,n.jsx)(t.strong,{children:">"})," ",(0,n.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,n.jsx)(t.strong,{children:"invite link"})})," ",(0,n.jsx)(t.strong,{children:"<"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(5351).Z+"",width:"243",height:"236"})})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5351:function(e,t,r){r.d(t,{Z:function(){return i}});let i=r.p+"assets/images/support-discord-baf5f38231088813dfbc3ccdc6966634.png"},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return o}});var i=r(67294);let n={},s=i.createContext(n);function o(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);