"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[139],{45946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(74848),i=r(28453);const o={id:"faq",title:"\ud83e\udd14 FAQ",description:"List of frequently asked questions. Feel free to open an issue to add your question to this page.",sidebar_position:1},s=void 0,a={id:"extra/faq",title:"\ud83e\udd14 FAQ",description:"List of frequently asked questions. Feel free to open an issue to add your question to this page.",source:"@site/docs/core/extra/faq.md",sourceDirName:"extra",slug:"/extra/faq",permalink:"/next/extra/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/extra/faq.md",tags:[],version:"current",lastUpdatedAt:1716883824e3,sidebarPosition:1,frontMatter:{id:"faq",title:"\ud83e\udd14 FAQ",description:"List of frequently asked questions. Feel free to open an issue to add your question to this page.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udde9 Extra",permalink:"/next/category/-extra"},next:{title:"\ud83d\udcca Benchmarks",permalink:"/next/extra/benchmarks"}},l={},d=[{value:"How should I structure my application?",id:"how-should-i-structure-my-application",level:2},{value:"How do I handle custom 404 responses?",id:"how-do-i-handle-custom-404-responses",level:2},{value:"How can i use live reload ?",id:"how-can-i-use-live-reload-",level:2},{value:"How do I set up an error handler?",id:"how-do-i-set-up-an-error-handler",level:2},{value:"Which template engines does Fiber support?",id:"which-template-engines-does-fiber-support",level:2},{value:"Does Fiber have a community chat?",id:"does-fiber-have-a-community-chat",level:2},{value:"Does fiber support sub domain routing ?",id:"does-fiber-support-sub-domain-routing-",level:2}];function h(e){const t={a:"a",br:"br",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"how-should-i-structure-my-application",children:"How should I structure my application?"}),"\n",(0,n.jsx)(t.p,{children:"There is no definitive answer to this question. The answer depends on the scale of your application and the team that is involved. To be as flexible as possible, Fiber makes no assumptions in terms of structure."}),"\n",(0,n.jsx)(t.p,{children:"Routes and other application-specific logic can live in as many files as you wish, in any directory structure you prefer. View the following examples for inspiration:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/gofiber/boilerplate",children:"gofiber/boilerplate"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/thomasvvugt/fiber-boilerplate",children:"thomasvvugt/fiber-boilerplate"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=Iq2qT0fRhAA",children:"Youtube - Building a REST API using Gorm and Fiber"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/embedmode/fiberseed",children:"embedmode/fiberseed"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-do-i-handle-custom-404-responses",children:"How do I handle custom 404 responses?"}),"\n",(0,n.jsxs)(t.p,{children:["If you're using v2.32.0 or later, all you need to do is to implement a custom error handler. See below, or see a more detailed explanation at ",(0,n.jsx)(t.a,{href:"/next/guide/error-handling#custom-error-handler",children:"Error Handling"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"If you're using v2.31.0 or earlier, the error handler will not capture 404 errors. Instead, you need to add a middleware function at the very bottom of the stack (below all other functions) to handle a 404 response:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'app.Use(func(c fiber.Ctx) error {\n    return c.Status(fiber.StatusNotFound).SendString("Sorry can\'t find that!")\n})\n'})}),"\n",(0,n.jsx)(t.h2,{id:"how-can-i-use-live-reload-",children:"How can i use live reload ?"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/cosmtrek/air",children:"Air"})," is a handy tool that automatically restarts your Go applications whenever the source code changes, making your development process faster and more efficient."]}),"\n",(0,n.jsx)(t.p,{children:"To use Air in a Fiber project, follow these steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Install Air by downloading the appropriate binary for your operating system from the GitHub release page or by building the tool directly from source."}),"\n",(0,n.jsx)(t.li,{children:"Create a configuration file for Air in your project directory. This file can be named, for example, .air.toml or air.conf. Here's a sample configuration file that works with Fiber:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'# .air.toml\nroot = "."\ntmp_dir = "tmp"\n[build]\n  cmd = "go build -o ./tmp/main ."\n  bin = "./tmp/main"\n  delay = 1000 # ms\n  exclude_dir = ["assets", "tmp", "vendor"]\n  include_ext = ["go", "tpl", "tmpl", "html"]\n  exclude_regex = ["_test\\\\.go"]\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Start your Fiber application using Air by running the following command in the terminal:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"air\n"})}),"\n",(0,n.jsx)(t.p,{children:"As you make changes to your source code, Air will detect them and automatically restart the application."}),"\n",(0,n.jsxs)(t.p,{children:["A complete example demonstrating the use of Air with Fiber can be found in the ",(0,n.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/air",children:"Fiber Recipes repository"}),". This example shows how to configure and use Air in a Fiber project to create an efficient development environment."]}),"\n",(0,n.jsx)(t.h2,{id:"how-do-i-set-up-an-error-handler",children:"How do I set up an error handler?"}),"\n",(0,n.jsxs)(t.p,{children:["To override the default error handler, you can override the default when providing a ",(0,n.jsx)(t.a,{href:"/next/api/fiber#errorhandler",children:"Config"})," when initiating a new ",(0,n.jsx)(t.a,{href:"/next/api/fiber#new",children:"Fiber instance"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:"app := fiber.New(fiber.Config{\n    ErrorHandler: func(c fiber.Ctx, err error) error {\n        return c.Status(fiber.StatusInternalServerError).SendString(err.Error())\n    },\n})\n"})}),"\n",(0,n.jsxs)(t.p,{children:["We have a dedicated page explaining how error handling works in Fiber, see ",(0,n.jsx)(t.a,{href:"/next/guide/error-handling",children:"Error Handling"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"which-template-engines-does-fiber-support",children:"Which template engines does Fiber support?"}),"\n",(0,n.jsxs)(t.p,{children:["Fiber currently supports 9 template engines in our ",(0,n.jsx)(t.a,{href:"https://docs.gofiber.io/template/",children:"gofiber/template"})," middleware:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.gofiber.io/template/ace/",children:"ace"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.gofiber.io/template/amber/",children:"amber"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.gofiber.io/template/django/",children:"django"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.gofiber.io/template/handlebars",children:"handlebars"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.gofiber.io/template/html",children:"html"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.gofiber.io/template/jet",children:"jet"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.gofiber.io/template/mustache",children:"mustache"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.gofiber.io/template/pug",children:"pug"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.gofiber.io/template/slim",children:"slim"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To learn more about using Templates in Fiber, see ",(0,n.jsx)(t.a,{href:"/next/guide/templates",children:"Templates"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"does-fiber-have-a-community-chat",children:"Does Fiber have a community chat?"}),"\n",(0,n.jsxs)(t.p,{children:["Yes, we have our own ",(0,n.jsx)(t.a,{href:"https://gofiber.io/discord",children:"Discord "}),"server, where we hang out. We have different rooms for every subject.",(0,n.jsx)(t.br,{}),"\n","If you have questions or just want to have a chat, feel free to join us via this ",(0,n.jsx)(t.strong,{children:">"})," ",(0,n.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,n.jsx)(t.strong,{children:"invite link"})})," ",(0,n.jsx)(t.strong,{children:"<"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(47375).A+"",width:"243",height:"236"})}),"\n",(0,n.jsx)(t.h2,{id:"does-fiber-support-sub-domain-routing-",children:"Does fiber support sub domain routing ?"}),"\n",(0,n.jsx)(t.p,{children:"Yes we do, here are some examples:\nThis example works v2"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/gofiber/fiber/v3"\n\t"github.com/gofiber/fiber/v3/middleware/logger"\n)\n\ntype Host struct {\n\tFiber *fiber.App\n}\n\nfunc main() {\n\t// Hosts\n\thosts := map[string]*Host{}\n\t//-----\n\t// API\n\t//-----\n\tapi := fiber.New()\n\tapi.Use(logger.New(logger.Config{\n\t\tFormat: "[${ip}]:${port} ${status} - ${method} ${path}\\n",\n\t}))\n\thosts["api.localhost:3000"] = &Host{api}\n\tapi.Get("/", func(c fiber.Ctx) error {\n\t\treturn c.SendString("API")\n\t})\n\t//------\n\t// Blog\n\t//------\n\tblog := fiber.New()\n\tblog.Use(logger.New(logger.Config{\n\t\tFormat: "[${ip}]:${port} ${status} - ${method} ${path}\\n",\n\t}))\n\thosts["blog.localhost:3000"] = &Host{blog}\n\tblog.Get("/", func(c fiber.Ctx) error {\n\t\treturn c.SendString("Blog")\n\t})\n\t//---------\n\t// Website\n\t//---------\n\tsite := fiber.New()\n\tsite.Use(logger.New(logger.Config{\n\t\tFormat: "[${ip}]:${port} ${status} - ${method} ${path}\\n",\n\t}))\n\n\thosts["localhost:3000"] = &Host{site}\n\tsite.Get("/", func(c fiber.Ctx) error {\n\t\treturn c.SendString("Website")\n\t})\n\t// Server\n\tapp := fiber.New()\n\tapp.Use(func(c fiber.Ctx) error {\n\t\thost := hosts[c.Hostname()]\n\t\tif host == nil {\n\t\t\treturn c.SendStatus(fiber.StatusNotFound)\n\t\t} else {\n\t\t\thost.Fiber.Handler()(c.Context())\n\t\t\treturn nil\n\t\t}\n\t})\n\tlog.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["If more information is needed, please refer to this issue ",(0,n.jsx)(t.a,{href:"https://github.com/gofiber/fiber/issues/750",children:"#750"})]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},47375:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/support-discord-baf5f38231088813dfbc3ccdc6966634.png"},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);