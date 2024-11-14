"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["69249"],{52763:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>a,default:()=>m,assets:()=>o,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"README","title":"\uD83D\uDC4B Welcome","description":"\uD83E\uDDEC Template engine middlewares for Fiber.","source":"@site/template_versioned_docs/version-django_v3.x.x/README.md","sourceDirName":".","slug":"/","permalink":"/template/django_v3.x.x/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/template/edit/master/README.md","tags":[],"version":"django_v3.x.x","lastUpdatedAt":1731573495000,"sidebarPosition":1,"frontMatter":{"title":"\uD83D\uDC4B Welcome","description":"\uD83E\uDDEC Template engine middlewares for Fiber.","sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Ace","permalink":"/template/django_v3.x.x/ace/"}}'),l=n("85893"),s=n("50065");let r={title:"\uD83D\uDC4B Welcome",description:"\uD83E\uDDEC Template engine middlewares for Fiber.",sidebar_position:1},a=void 0,o={},c=[{value:"Installation",id:"installation",level:3},{value:"Example",id:"example",level:3},{value:"More Examples",id:"more-examples",level:3},{value:"embedded Systems",id:"embedded-systems",level:3},{value:"pkger",id:"pkger",level:4},{value:"packr",id:"packr",level:4},{value:"go.rice",id:"gorice",level:4},{value:"fileb0x",id:"fileb0x",level:4},{value:"Benchmarks",id:"benchmarks",level:3},{value:"Simple",id:"simple",level:4},{value:"Extended",id:"extended",level:4}];function h(e){let t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{align:"center",children:[(0,l.jsx)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/template/master/.github/logo-dark.svg#gh-dark-mode-only"}),(0,l.jsx)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/template/master/.github/logo.svg#gh-light-mode-only"}),(0,l.jsx)("br",{}),(0,l.jsx)("a",{href:"https://pkg.go.dev/github.com/gofiber/template?tab=doc",children:(0,l.jsx)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9A%20godoc-pkg-00ACD7.svg?color=00ACD7&style=flat"})}),(0,l.jsx)("a",{href:"https://goreportcard.com/report/github.com/gofiber/template",children:(0,l.jsx)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9D%20goreport-A%2B-75C46B"})}),(0,l.jsx)("a",{href:"https://gofiber.io/discord",children:(0,l.jsx)("img",{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7"})})]}),"\n",(0,l.jsxs)(t.p,{children:["This package provides universal methods to use multiple template engines with the ",(0,l.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber web framework"})," using the new ",(0,l.jsx)(t.a,{href:"https://godoc.org/github.com/gofiber/fiber#Views",children:"Views"})," interface that is available from ",(0,l.jsx)(t.code,{children:"> v1.11.1"}),". Special thanks to @bdtomlin & @arsmn for helping!"]}),"\n",(0,l.jsx)(t.p,{children:"9 template engines are supported:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/ace/",children:"ace"})," ",(0,l.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Ace%22",children:[" ",(0,l.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-ace.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/amber/",children:"amber"})," ",(0,l.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Amber%22",children:[" ",(0,l.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-amber.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/django/",children:"django"})," ",(0,l.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Django%22",children:[" ",(0,l.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-django.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/handlebars/",children:"handlebars"})," ",(0,l.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Handlebars%22",children:[" ",(0,l.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-handlebars.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/html/",children:"html"})," ",(0,l.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Html%22",children:[" ",(0,l.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-html.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/jet/",children:"jet"})," ",(0,l.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Jet%22",children:[" ",(0,l.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-jet.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/mustache/",children:"mustache"})," ",(0,l.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Mustache%22",children:[" ",(0,l.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-mustache.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/pug/",children:"pug"})," ",(0,l.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Pug%22",children:[" ",(0,l.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-pug.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/slim/",children:"slim"})," ",(0,l.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Slim%22",children:[" ",(0,l.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-slim.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:["Go version ",(0,l.jsx)(t.code,{children:"1.17"})," or higher is required."]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/template/any_template_engine/vX\n"})}),"\n",(0,l.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n\n	"github.com/gofiber/fiber/v2"\n\n	// To use a specific template engine, import as shown below:\n	// "github.com/gofiber/template/pug"\n	// "github.com/gofiber/template/mustache"\n	// etc..\n\n	// In this example we use the html template engine\n	"github.com/gofiber/template/html/v2"\n)\n\nfunc main() {\n	// Create a new engine by passing the template folder\n	// and template extension using <engine>.New(dir, ext string)\n	engine := html.New("./views", ".html")\n\n  	// We also support the http.FileSystem interface\n	// See examples below to load templates from embedded files\n	engine := html.NewFileSystem(http.Dir("./views"), ".html")\n\n	// Reload the templates on each render, good for development\n	engine.Reload(true) // Optional. Default: false\n\n	// Debug will print each template that is parsed, good for debugging\n	engine.Debug(true) // Optional. Default: false\n\n	// Layout defines the variable name that is used to yield templates within layouts\n	engine.Layout("embed") // Optional. Default: "embed"\n\n	// Delims sets the action delimiters to the specified strings\n	engine.Delims("{{", "}}") // Optional. Default: engine delimiters\n\n	// AddFunc adds a function to the template\'s global function map.\n	engine.AddFunc("greet", func(name string) string {\n		return "Hello, " + name + "!"\n	})\n\n	// After you created your engine, you can pass it to Fiber\'s Views Engine\n	app := fiber.New(fiber.Config{\n		Views: engine,\n	})\n\n	// To render a template, you can call the ctx.Render function\n	// Render(tmpl string, values interface{}, layout ...string)\n	app.Get("/", func(c *fiber.Ctx) error {\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		})\n	})\n\n	// Render with layout example\n	app.Get("/layout", func(c *fiber.Ctx) error {\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		}, "layouts/main")\n	})\n\n	log.Fatal(app.Listen(":3000"))\n}\n\n'})}),"\n",(0,l.jsx)(t.h3,{id:"more-examples",children:"More Examples"}),"\n",(0,l.jsx)(t.p,{children:"To view more specific examples, you could visit each engine folder to learn more"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/ace/",children:"ace"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/amber/",children:"amber"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/django/",children:"django"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/handlebars/",children:"handlebars"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/html/",children:"html"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/jet/",children:"jet"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/mustache/",children:"mustache"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/pug/",children:"pug"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/template/django_v3.x.x/slim/",children:"slim"})}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"embedded-systems",children:"embedded Systems"}),"\n",(0,l.jsxs)(t.p,{children:["We support the ",(0,l.jsx)(t.code,{children:"http.FileSystem"})," interface, so you can use different libraries to load the templates from embedded binaries."]}),"\n",(0,l.jsx)(t.h4,{id:"pkger",children:"pkger"}),"\n",(0,l.jsxs)(t.p,{children:["Read documentation: ",(0,l.jsx)(t.a,{href:"https://github.com/markbates/pkger",children:"https://github.com/markbates/pkger"})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/template/html"\n\n	"github.com/markbates/pkger"\n)\n\nfunc main() {\n	engine := html.NewFileSystem(pkger.Dir("/views"), ".html")\n\n	app := fiber.New(fiber.Config{\n		Views: engine,\n	})\n\n	// run pkger && go build\n}\n'})}),"\n",(0,l.jsx)(t.h4,{id:"packr",children:"packr"}),"\n",(0,l.jsxs)(t.p,{children:["Read documentation: ",(0,l.jsx)(t.a,{href:"https://github.com/gobuffalo/packr",children:"https://github.com/gobuffalo/packr"})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/template/html"\n\n	"github.com/gobuffalo/packr/v2"\n)\n\nfunc main() {\n	engine := html.NewFileSystem(packr.New("Templates", "/views"), ".html")\n\n	app := fiber.New(fiber.Config{\n		Views: engine,\n	})\n\n	// run packr && go build\n}\n'})}),"\n",(0,l.jsx)(t.h4,{id:"gorice",children:"go.rice"}),"\n",(0,l.jsxs)(t.p,{children:["Read documentation: ",(0,l.jsx)(t.a,{href:"https://github.com/GeertJohan/go.rice",children:"https://github.com/GeertJohan/go.rice"})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/template/html"\n\n	"github.com/GeertJohan/go.rice"\n)\n\nfunc main() {\n	engine := html.NewFileSystem(rice.MustFindBox("views").HTTPBox(), ".html")\n\n	app := fiber.New(fiber.Config{\n		Views: engine,\n	})\n\n	// run rice embed-go && go build\n}\n\n'})}),"\n",(0,l.jsx)(t.h4,{id:"fileb0x",children:"fileb0x"}),"\n",(0,l.jsxs)(t.p,{children:["Read documentation: ",(0,l.jsx)(t.a,{href:"https://github.com/UnnoTed/fileb0x",children:"https://github.com/UnnoTed/fileb0x"})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/template/html"\n	// your generated package\n	"github.com/<user>/<repo>/static"\n)\n\nfunc main() {\n	engine := html.NewFileSystem(static.HTTP, ".html")\n\n	app := fiber.New(fiber.Config{\n		Views: engine,\n	})\n\n	// Read the documentation on how to use fileb0x\n}\n'})}),"\n",(0,l.jsx)(t.h3,{id:"benchmarks",children:"Benchmarks"}),"\n",(0,l.jsx)(t.h4,{id:"simple",children:"Simple"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://raw.githubusercontent.com/gofiber/template/master/.github/data/Simple-TimeperOperation.png",alt:""})}),"\n",(0,l.jsx)(t.h4,{id:"extended",children:"Extended"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://raw.githubusercontent.com/gofiber/template/master/.github/data/Extended-TimeperOperation.png",alt:""})}),"\n",(0,l.jsx)(t.p,{children:"Benchmarks were ran on Apple Macbook M1. Each engine was benchmarked 20 times and the results averaged into a single xlsx file. Mustache was excluded from the extended benchmark"})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var i=n(67294);let l={},s=i.createContext(l);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);