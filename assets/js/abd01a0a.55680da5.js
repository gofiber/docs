"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["50266"],{90660:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>s});var r=JSON.parse('{"id":"amber/amber","title":"Amber","description":"Release","source":"@site/template_versioned_docs/version-html_v2.x.x/amber/README.md","sourceDirName":"amber","slug":"/amber/","permalink":"/template/html_v2.x.x/amber/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/template/edit/master/amber/README.md","tags":[],"version":"html_v2.x.x","lastUpdatedAt":1734593530000,"frontMatter":{"id":"amber","title":"Amber"},"sidebar":"tutorialSidebar","previous":{"title":"Ace","permalink":"/template/html_v2.x.x/ace/"},"next":{"title":"Django","permalink":"/template/html_v2.x.x/django/"}}'),i=t("85893"),a=t("50065");let s={id:"amber",title:"Amber"},l=void 0,o={},c=[{value:"Basic Example",id:"basic-example",level:3}];function m(e){let n={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=amber*",alt:"Release"}),"\n",(0,i.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(n.p,{children:["Amber is a template engine create by ",(0,i.jsx)(n.a,{href:"https://github.com/eknkc/amber",children:"eknkc"}),", to see the original syntax documentation please ",(0,i.jsx)(n.a,{href:"https://github.com/eknkc/amber#tags",children:"click here"})]}),"\n",(0,i.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"./views/index.amber"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"import ./views/partials/header\n\nh1 #{Title}\n\nimport ./views/partials/footer\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"./views/partials/header.amber"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"h1 Header\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"./views/partials/footer.amber"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"h1 Footer\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"./views/layouts/main.amber"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"doctype html\nhtml\n  head\n    title Main\n  body\n    #{embed()}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n	\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/template/amber/v2"\n)\n\nfunc main() {\n	// Create a new engine\n	engine := amber.New("./views", ".amber")\n\n  // Or from an embedded system\n  // See github.com/gofiber/embed for examples\n  // engine := html.NewFileSystem(http.Dir("./views", ".amber"))\n\n	// Pass the engine to the Views\n	app := fiber.New(fiber.Config{\n		Views: engine,\n	})\n\n	app.Get("/", func(c *fiber.Ctx) error {\n		// Render index\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		})\n	})\n\n	app.Get("/layout", func(c *fiber.Ctx) error {\n		// Render index within layouts/main\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		}, "layouts/main")\n	})\n\n	log.Fatal(app.Listen(":3000"))\n}\n\n'})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var r=t(67294);let i={},a=r.createContext(i);function s(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);