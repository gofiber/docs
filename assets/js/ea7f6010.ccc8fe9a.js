"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["41650"],{92601:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"jet/jet","title":"Jet","description":"Release","source":"@site/template_versioned_docs/version-ace_v2.x.x/jet/README.md","sourceDirName":"jet","slug":"/jet/","permalink":"/template/ace_v2.x.x/jet/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/template/edit/master/jet/README.md","tags":[],"version":"ace_v2.x.x","lastUpdatedAt":1741678803000,"frontMatter":{"id":"jet","title":"Jet"},"sidebar":"left_sidebar","previous":{"title":"Golang Templates Cheatsheet","permalink":"/template/ace_v2.x.x/html/TEMPLATES_CHEATSHEET"},"next":{"title":"Mustache","permalink":"/template/ace_v2.x.x/mustache/"}}'),r=n("85893"),s=n("50065");let l={id:"jet",title:"Jet"},a=void 0,o={},c=[{value:"Basic Example",id:"basic-example",level:3}];function d(e){let t={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=jet*",alt:"Release"}),"\n",(0,r.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,r.jsxs)(t.p,{children:["Jet is a template engine create by ",(0,r.jsx)(t.a,{href:"https://github.com/CloudyKit/jet",children:"cloudykit"}),", to see the original syntax documentation please ",(0,r.jsx)(t.a,{href:"https://github.com/CloudyKit/jet/wiki/3.-Jet-template-syntax",children:"click here"})]}),"\n",(0,r.jsx)(t.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"./views/index.jet"})})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'{{include "partials/header"}}\n\n<h1>{{ Title }}</h1>\n\n{{include "partials/footer"}}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"./views/partials/header.jet"})})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<h2>Header</h2>\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"./views/partials/footer.jet"})})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<h2>Footer</h2>\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"./views/layouts/main.jet"})})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Title</title>\n</head>\n\n<body>\n  {{ embed() }}\n</body>\n\n</html>\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n	\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/template/jet/v2"\n)\n\nfunc main() {\n	// Create a new engine\n	engine := jet.New("./views", ".jet")\n\n	// Or from an embedded system\n	// See github.com/gofiber/embed for examples\n	// engine := jet.NewFileSystem(http.Dir("./views", ".jet"))\n\n	// Pass the engine to the views\n	app := fiber.New(fiber.Config{\n		Views: engine,\n	})\n\n	app.Get("/", func(c *fiber.Ctx) error {\n		// Render index\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		})\n	})\n\n	app.Get("/layout", func(c *fiber.Ctx) error {\n		// Render index within layouts/main\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		}, "layouts/main")\n	})\n\n	log.Fatal(app.Listen(":3000"))\n}\n\n'})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var i=n(67294);let r={},s=i.createContext(r);function l(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);