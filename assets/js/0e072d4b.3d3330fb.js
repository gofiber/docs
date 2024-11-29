"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["60415"],{18332:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>p,assets:()=>o,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"pug/pug","title":"Pug","description":"Release","source":"@site/template_versioned_docs/version-ace_v2.x.x/pug/README.md","sourceDirName":"pug","slug":"/pug/","permalink":"/template/ace_v2.x.x/pug/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/template/edit/master/pug/README.md","tags":[],"version":"ace_v2.x.x","lastUpdatedAt":1732892746000,"frontMatter":{"id":"pug","title":"Pug"},"sidebar":"tutorialSidebar","previous":{"title":"Mustache","permalink":"/template/ace_v2.x.x/mustache/"},"next":{"title":"Slim","permalink":"/template/ace_v2.x.x/slim/"}}'),r=t("85893"),s=t("50065");let a={id:"pug",title:"Pug"},l=void 0,o={},c=[{value:"Basic Example",id:"basic-example",level:3}];function d(e){let n={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=pug*",alt:"Release"}),"\n",(0,r.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,r.jsxs)(n.p,{children:["Pug is a template engine create by ",(0,r.jsx)(n.a,{href:"https://github.com/Joker/jade",children:"joker"}),", to see the original syntax documentation please ",(0,r.jsx)(n.a,{href:"https://pugjs.org/language/tags.html",children:"click here"})]}),"\n",(0,r.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"./views/index.pug"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"include partials/header.pug\n\nh1 #{.Title}\n\ninclude partials/footer.pug\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"./views/partials/header.pug"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"h2 Header\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"./views/partials/footer.pug"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"h2 Footer\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"./views/layouts/main.pug"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"doctype html\nhtml\n  head\n    title Main\n    include ../partials/meta.pug\n  body\n    | {{embed}}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/template/pug/v2"\n\n	// "net/http" // embedded system\n)\n\nfunc main() {\n	// Create a new engine\n	engine := pug.New("./views", ".pug")\n\n	// Or from an embedded system\n	// See github.com/gofiber/embed for examples\n	// engine := pug.NewFileSystem(http.Dir("./views"), ".pug")\n\n	// Pass the engine to the views\n	app := fiber.New(fiber.Config{\n		Views: engine,\n	})\n\n	app.Get("/", func(c *fiber.Ctx) error {\n		// Render index\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		})\n	})\n\n	app.Get("/layout", func(c *fiber.Ctx) error {\n		// Render index within layouts/main\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		}, "layouts/main")\n	})\n\n	log.Fatal(app.Listen(":3000"))\n}\n\n'})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(67294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);