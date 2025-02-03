"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["94175"],{8648:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"slim/slim","title":"Slim","description":"Release","source":"@site/docs/template/slim/README.md","sourceDirName":"slim","slug":"/slim/","permalink":"/template/next/slim/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/template/edit/master/slim/README.md","tags":[],"version":"current","lastUpdatedAt":1738589498000,"frontMatter":{"id":"slim","title":"Slim"},"sidebar":"left_sidebar","previous":{"title":"Pug","permalink":"/template/next/pug/"}}'),s=t("85893"),r=t("50065");let l={id:"slim",title:"Slim"},a=void 0,o={},c=[{value:"Basic Example",id:"basic-example",level:3}];function m(e){let n={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=slim*",alt:"Release"}),"\n",(0,s.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,s.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,s.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,s.jsxs)(n.p,{children:["Slim is a template engine created by ",(0,s.jsx)(n.a,{href:"https://github.com/mattn/go-slim",children:"mattn"}),", to see the original syntax documentation please ",(0,s.jsx)(n.a,{href:"https://rubydoc.info/gems/slim/frames",children:"click here"})]}),"\n",(0,s.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"./views/index.slim"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'== render("partials/header.slim")\n\nh1 = Title\n\n== render("partials/footer.slim")\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"./views/partials/header.slim"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"h2 = Header\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"./views/partials/footer.slim"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"h2 = Footer\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"./views/layouts/main.slim"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"doctype html\nhtml\n  head\n    title Main\n    include ../partials/meta.slim\n  body\n    == embed\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/template/slim/v2"\n\n	// "net/http" // embedded system\n)\n\nfunc main() {\n	// Create a new engine\n	engine := slim.New("./views", ".slim")\n\n	// Or from an embedded system\n	// See github.com/gofiber/embed for examples\n	// engine := slim.NewFileSystem(http.Dir("./views", ".slim"))\n\n	// Pass the engine to the Views\n	app := fiber.New(fiber.Config{\n		Views: engine,\n	})\n\n	app.Get("/", func(c *fiber.Ctx) error {\n		// Render index\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		})\n	})\n\n	app.Get("/layout", func(c *fiber.Ctx) error {\n		// Render index within layouts/main\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		}, "layouts/main")\n	})\n\n	log.Fatal(app.Listen(":3000"))\n}\n\n'})})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var i=t(67294);let s={},r=i.createContext(s);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);