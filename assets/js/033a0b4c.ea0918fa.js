"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["69086"],{9382:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>s,metadata:()=>i,assets:()=>h,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"html/html","title":"HTML","description":"Release","source":"@site/template_versioned_docs/version-pug_v2.x.x/html/README.md","sourceDirName":"html","slug":"/html/","permalink":"/template/pug_v2.x.x/html/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/template/edit/master/html/README.md","tags":[],"version":"pug_v2.x.x","lastUpdatedAt":1741331495000,"frontMatter":{"id":"html","title":"HTML"},"sidebar":"left_sidebar","previous":{"title":"Handlebars","permalink":"/template/pug_v2.x.x/handlebars/"},"next":{"title":"Golang Templates Cheatsheet","permalink":"/template/pug_v2.x.x/html/TEMPLATES_CHEATSHEET"}}'),l=t("85893"),r=t("50065");let s={id:"html",title:"HTML"},a=void 0,h={},o=[{value:"Basic Example",id:"basic-example",level:3},{value:"Example with embed.FS",id:"example-with-embedfs",level:3},{value:"Example with innerHTML",id:"example-with-innerhtml",level:3}];function d(e){let n={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=html*",alt:"Release"}),"\n",(0,l.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,l.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,l.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,l.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,l.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,l.jsxs)(n.p,{children:["HTML is the official Go template engine ",(0,l.jsx)(n.a,{href:"https://golang.org/pkg/html/template/",children:"html/template"}),", to see the original syntax documentation please ",(0,l.jsx)(n.a,{href:"/template/pug_v2.x.x/html/TEMPLATES_CHEATSHEET",children:"click here"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Info:"})}),"\n",(0,l.jsxs)(n.p,{children:["All templates within the specified view directory are analyzed and compiled at the beginning to increase the performance when using them.\nThus it should be noted that no ",(0,l.jsx)(n.code,{children:"definition"})," with the same name should exist, otherwise they will overwrite each other.\nFor templating the ",(0,l.jsx)(n.code,{children:"{{embed}}"})," tag should be used"]}),"\n",(0,l.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:(0,l.jsx)(n.strong,{children:"./views/index.html"})})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'{{template "partials/header" .}}\n\n<h1>{{.Title}}</h1>\n\n{{template "partials/footer" .}}\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:(0,l.jsx)(n.strong,{children:"./views/partials/header.html"})})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<h2>Header</h2>\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:(0,l.jsx)(n.strong,{children:"./views/partials/footer.html"})})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<h2>Footer</h2>\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:(0,l.jsx)(n.strong,{children:"./views/layouts/main.html"})})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Main</title>\n  </head>\n\n  <body>\n    {{embed}}\n  </body>\n</html>\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/template/html/v2"\n)\n\nfunc main() {\n	// Create a new engine\n	engine := html.New("./views", ".html")\n\n	// Or from an embedded system\n	// See github.com/gofiber/embed for examples\n	// engine := html.NewFileSystem(http.Dir("./views"), ".html")\n\n	// Pass the engine to the Views\n	app := fiber.New(fiber.Config{\n		Views: engine,\n	})\n\n	app.Get("/", func(c *fiber.Ctx) error {\n		// Render index\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		})\n	})\n\n	app.Get("/layout", func(c *fiber.Ctx) error {\n		// Render index within layouts/main\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		}, "layouts/main")\n	})\n\n	app.Get("/layouts-nested", func(c *fiber.Ctx) error {\n		// Render index within layouts/nested/main within layouts/nested/base\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		}, "layouts/nested/main", "layouts/nested/base")\n	})\n\n	log.Fatal(app.Listen(":3000"))\n}\n\n'})}),"\n",(0,l.jsx)(n.h3,{id:"example-with-embedfs",children:"Example with embed.FS"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "net/http"\n    "embed"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html"\n)\n\n//go:embed views/*\nvar viewsfs embed.FS\n\nfunc main() {\n    engine := html.NewFileSystem(http.FS(viewsfs), ".html")\n\n    // Pass the engine to the Views\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index - start with views directory\n        return c.Render("views/index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"and change the starting point to the views directory"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:(0,l.jsx)(n.strong,{children:"./views/index.html"})})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'{{template "views/partials/header" .}}\n\n<h1>{{.Title}}</h1>\n\n{{template "views/partials/footer" .}}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"example-with-innerhtml",children:"Example with innerHTML"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "embed"\n    "html/template"\n    "log"\n    "net/http"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html"\n)\n\n//go:embed views/*\nvar viewsfs embed.FS\n\nfunc main() {\n    engine := html.NewFileSystem(http.FS(viewsfs), ".html")\n    engine.AddFunc(\n        // add unescape function\n        "unescape", func(s string) template.HTML {\n            return template.HTML(s)\n        },\n    )\n\n    // Pass the engine to the Views\n    app := fiber.New(fiber.Config{Views: engine})\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index\n        return c.Render("views/index", fiber.Map{\n            "Title": "Hello, <b>World</b>!",\n        })\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"and change the starting point to the views directory"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:(0,l.jsx)(n.strong,{children:"./views/index.html"})})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<p>{{ unescape .Title}}</p>\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"html output"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<p>Hello, <b>World</b>!</p>\n"})})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(67294);let l={},r=i.createContext(l);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);