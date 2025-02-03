"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["99584"],{52425:function(e,r,n){n.r(r),n.d(r,{metadata:()=>i,contentTitle:()=>a,default:()=>c,assets:()=>l,toc:()=>d,frontMatter:()=>s});var i=JSON.parse('{"id":"extra/faq","title":"\uD83E\uDD14 FAQ","description":"List of frequently asked questions. Feel free to open an issue to add your question to this page.","source":"@site/docs/core/extra/faq.md","sourceDirName":"extra","slug":"/extra/faq","permalink":"/next/extra/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/extra/faq.md","tags":[],"version":"current","lastUpdatedAt":1738624341000,"sidebarPosition":1,"frontMatter":{"id":"faq","title":"\uD83E\uDD14 FAQ","description":"List of frequently asked questions. Feel free to open an issue to add your question to this page.","sidebar_position":1},"sidebar":"left_sidebar","previous":{"title":"\uD83E\uDDE9 Extra","permalink":"/next/category/-extra"},"next":{"title":"\uD83D\uDCCA Benchmarks","permalink":"/next/extra/benchmarks"}}'),t=n("85893"),o=n("50065");let s={id:"faq",title:"\uD83E\uDD14 FAQ",description:"List of frequently asked questions. Feel free to open an issue to add your question to this page.",sidebar_position:1},a=void 0,l={},d=[{value:"How should I structure my application?",id:"how-should-i-structure-my-application",level:2},{value:"How do I handle custom 404 responses?",id:"how-do-i-handle-custom-404-responses",level:2},{value:"How can i use live reload ?",id:"how-can-i-use-live-reload-",level:2},{value:"How do I set up an error handler?",id:"how-do-i-set-up-an-error-handler",level:2},{value:"Which template engines does Fiber support?",id:"which-template-engines-does-fiber-support",level:2},{value:"Does Fiber have a community chat?",id:"does-fiber-have-a-community-chat",level:2},{value:"Does fiber support sub domain routing ?",id:"does-fiber-support-sub-domain-routing-",level:2}];function h(e){let r={a:"a",br:"br",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"how-should-i-structure-my-application",children:"How should I structure my application?"}),"\n",(0,t.jsx)(r.p,{children:"There is no definitive answer to this question. The answer depends on the scale of your application and the team that is involved. To be as flexible as possible, Fiber makes no assumptions in terms of structure."}),"\n",(0,t.jsx)(r.p,{children:"Routes and other application-specific logic can live in as many files as you wish, in any directory structure you prefer. View the following examples for inspiration:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/gofiber/boilerplate",children:"gofiber/boilerplate"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/thomasvvugt/fiber-boilerplate",children:"thomasvvugt/fiber-boilerplate"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.youtube.com/watch?v=Iq2qT0fRhAA",children:"Youtube - Building a REST API using Gorm and Fiber"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/embedmode/fiberseed",children:"embedmode/fiberseed"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"how-do-i-handle-custom-404-responses",children:"How do I handle custom 404 responses?"}),"\n",(0,t.jsxs)(r.p,{children:["If you're using v2.32.0 or later, all you need to do is to implement a custom error handler. See below, or see a more detailed explanation at ",(0,t.jsx)(r.a,{href:"/next/guide/error-handling#custom-error-handler",children:"Error Handling"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"If you're using v2.31.0 or earlier, the error handler will not capture 404 errors. Instead, you need to add a middleware function at the very bottom of the stack (below all other functions) to handle a 404 response:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'app.Use(func(c fiber.Ctx) error {\n    return c.Status(fiber.StatusNotFound).SendString("Sorry can\'t find that!")\n})\n'})}),"\n",(0,t.jsx)(r.h2,{id:"how-can-i-use-live-reload-",children:"How can i use live reload ?"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://github.com/air-verse/air",children:"Air"})," is a handy tool that automatically restarts your Go applications whenever the source code changes, making your development process faster and more efficient."]}),"\n",(0,t.jsx)(r.p,{children:"To use Air in a Fiber project, follow these steps:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Install Air by downloading the appropriate binary for your operating system from the GitHub release page or by building the tool directly from source."}),"\n",(0,t.jsx)(r.li,{children:"Create a configuration file for Air in your project directory. This file can be named, for example, .air.toml or air.conf. Here's a sample configuration file that works with Fiber:"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-toml",children:'# .air.toml\nroot = "."\ntmp_dir = "tmp"\n[build]\n  cmd = "go build -o ./tmp/main ."\n  bin = "./tmp/main"\n  delay = 1000 # ms\n  exclude_dir = ["assets", "tmp", "vendor"]\n  include_ext = ["go", "tpl", "tmpl", "html"]\n  exclude_regex = ["_test\\\\.go"]\n'})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Start your Fiber application using Air by running the following command in the terminal:"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"air\n"})}),"\n",(0,t.jsx)(r.p,{children:"As you make changes to your source code, Air will detect them and automatically restart the application."}),"\n",(0,t.jsxs)(r.p,{children:["A complete example demonstrating the use of Air with Fiber can be found in the ",(0,t.jsx)(r.a,{href:"https://github.com/gofiber/recipes/tree/master/air",children:"Fiber Recipes repository"}),". This example shows how to configure and use Air in a Fiber project to create an efficient development environment."]}),"\n",(0,t.jsx)(r.h2,{id:"how-do-i-set-up-an-error-handler",children:"How do I set up an error handler?"}),"\n",(0,t.jsxs)(r.p,{children:["To override the default error handler, you can override the default when providing a ",(0,t.jsx)(r.a,{href:"/next/api/fiber#errorhandler",children:"Config"})," when initiating a new ",(0,t.jsx)(r.a,{href:"/next/api/fiber#new",children:"Fiber instance"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:"app := fiber.New(fiber.Config{\n    ErrorHandler: func(c fiber.Ctx, err error) error {\n        return c.Status(fiber.StatusInternalServerError).SendString(err.Error())\n    },\n})\n"})}),"\n",(0,t.jsxs)(r.p,{children:["We have a dedicated page explaining how error handling works in Fiber, see ",(0,t.jsx)(r.a,{href:"/next/guide/error-handling",children:"Error Handling"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"which-template-engines-does-fiber-support",children:"Which template engines does Fiber support?"}),"\n",(0,t.jsxs)(r.p,{children:["Fiber currently supports 9 template engines in our ",(0,t.jsx)(r.a,{href:"https://docs.gofiber.io/template/",children:"gofiber/template"})," middleware:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.gofiber.io/template/ace/",children:"ace"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.gofiber.io/template/amber/",children:"amber"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.gofiber.io/template/django/",children:"django"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.gofiber.io/template/handlebars/",children:"handlebars"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.gofiber.io/template/html/",children:"html"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.gofiber.io/template/jet/",children:"jet"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.gofiber.io/template/mustache/",children:"mustache"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.gofiber.io/template/pug/",children:"pug"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.gofiber.io/template/slim/",children:"slim"})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["To learn more about using Templates in Fiber, see ",(0,t.jsx)(r.a,{href:"/next/guide/templates",children:"Templates"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"does-fiber-have-a-community-chat",children:"Does Fiber have a community chat?"}),"\n",(0,t.jsxs)(r.p,{children:["Yes, we have our own ",(0,t.jsx)(r.a,{href:"https://gofiber.io/discord",children:"Discord"}),"server, where we hang out. We have different rooms for every subject.",(0,t.jsx)(r.br,{}),"\n","If you have questions or just want to have a chat, feel free to join us via this ",(0,t.jsx)(r.strong,{children:">"})," ",(0,t.jsx)(r.a,{href:"https://gofiber.io/discord",children:(0,t.jsx)(r.strong,{children:"invite link"})})," ",(0,t.jsx)(r.strong,{children:"<"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:n(5351).Z+"",width:"243",height:"236"})}),"\n",(0,t.jsx)(r.h2,{id:"does-fiber-support-sub-domain-routing-",children:"Does fiber support sub domain routing ?"}),"\n",(0,t.jsx)(r.p,{children:"Yes we do, here are some examples:\nThis example works v2"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/logger"\n)\n\ntype Host struct {\n    Fiber *fiber.App\n}\n\nfunc main() {\n    // Hosts\n    hosts := map[string]*Host{}\n    //-----\n    // API\n    //-----\n    api := fiber.New()\n    api.Use(logger.New(logger.Config{\n        Format: "[${ip}]:${port} ${status} - ${method} ${path}\\n",\n    }))\n    hosts["api.localhost:3000"] = &Host{api}\n    api.Get("/", func(c fiber.Ctx) error {\n        return c.SendString("API")\n    })\n    //------\n    // Blog\n    //------\n    blog := fiber.New()\n    blog.Use(logger.New(logger.Config{\n        Format: "[${ip}]:${port} ${status} - ${method} ${path}\\n",\n    }))\n    hosts["blog.localhost:3000"] = &Host{blog}\n    blog.Get("/", func(c fiber.Ctx) error {\n        return c.SendString("Blog")\n    })\n    //---------\n    // Website\n    //---------\n    site := fiber.New()\n    site.Use(logger.New(logger.Config{\n        Format: "[${ip}]:${port} ${status} - ${method} ${path}\\n",\n    }))\n\n    hosts["localhost:3000"] = &Host{site}\n    site.Get("/", func(c fiber.Ctx) error {\n        return c.SendString("Website")\n    })\n    // Server\n    app := fiber.New()\n    app.Use(func(c fiber.Ctx) error {\n        host := hosts[c.Hostname()]\n        if host == nil {\n            return c.SendStatus(fiber.StatusNotFound)\n        } else {\n            host.Fiber.Handler()(c.Context())\n            return nil\n        }\n    })\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["If more information is needed, please refer to this issue ",(0,t.jsx)(r.a,{href:"https://github.com/gofiber/fiber/issues/750",children:"#750"})]})]})}function c(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5351:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/support-discord-baf5f38231088813dfbc3ccdc6966634.png"},50065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return s}});var i=n(67294);let t={},o=i.createContext(t);function s(e){let r=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);