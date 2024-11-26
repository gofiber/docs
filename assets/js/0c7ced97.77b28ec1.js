"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["86838"],{48442:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>i});var r=JSON.parse('{"id":"handlebars/handlebars","title":"Handlebars","description":"Release","source":"@site/template_versioned_docs/version-django_v3.x.x/handlebars/README.md","sourceDirName":"handlebars","slug":"/handlebars/","permalink":"/template/django_v3.x.x/handlebars/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/template/edit/master/handlebars/README.md","tags":[],"version":"django_v3.x.x","lastUpdatedAt":1732648136000,"frontMatter":{"id":"handlebars","title":"Handlebars"},"sidebar":"tutorialSidebar","previous":{"title":"Django","permalink":"/template/django_v3.x.x/django/"},"next":{"title":"HTML","permalink":"/template/django_v3.x.x/html/"}}'),a=t("85893"),s=t("50065");let i={id:"handlebars",title:"Handlebars"},l=void 0,o={},d=[{value:"Basic Example",id:"basic-example",level:3}];function c(e){let n={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=handlebars*",alt:"Release"}),"\n",(0,a.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,a.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,a.jsxs)(n.p,{children:["Handlebars is a template engine create by ",(0,a.jsx)(n.a,{href:"https://github.com/aymerick/raymond",children:"aymerick"}),", to see the original syntax documentation please ",(0,a.jsx)(n.a,{href:"https://github.com/aymerick/raymond#table-of-contents",children:"click here"})]}),"\n",(0,a.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"./views/index.hbs"})})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"{{> 'partials/header' }}\n\n<h1>{{Title}}</h1>\n\n{{> 'partials/footer' }}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"./views/partials/header.hbs"})})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<h2>Header</h2>\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"./views/partials/footer.hbs"})})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<h2>Footer</h2>\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"./views/layouts/main.hbs"})})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Main</title>\n</head>\n\n<body>\n  {{embed}}\n</body>\n\n</html>\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n	\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/template/handlebars/v2"\n)\n\nfunc main() {\n	// Create a new engine\n	engine := handlebars.New("./views", ".hbs")\n\n  // Or from an embedded system\n  // See github.com/gofiber/embed for examples\n  // engine := html.NewFileSystem(http.Dir("./views", ".hbs"))\n\n	// Pass the engine to the Views\n	app := fiber.New(fiber.Config{\n		Views: engine,\n	})\n\n	app.Get("/", func(c *fiber.Ctx) error {\n		// Render index\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		})\n	})\n\n	app.Get("/layout", func(c *fiber.Ctx) error {\n		// Render index within layouts/main\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		}, "layouts/main")\n	})\n\n	log.Fatal(app.Listen(":3000"))\n}\n\n'})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(67294);let a={},s=r.createContext(a);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);