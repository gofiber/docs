"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["9358"],{73251:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"mustache/mustache","title":"Mustache","description":"Release","source":"@site/template_versioned_docs/version-slim_v2.x.x/mustache/README.md","sourceDirName":"mustache","slug":"/mustache/","permalink":"/template/slim_v2.x.x/mustache/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/template/edit/master/mustache/README.md","tags":[],"version":"slim_v2.x.x","lastUpdatedAt":1741331495000,"frontMatter":{"id":"mustache","title":"Mustache"},"sidebar":"left_sidebar","previous":{"title":"Jet","permalink":"/template/slim_v2.x.x/jet/"},"next":{"title":"Pug","permalink":"/template/slim_v2.x.x/pug/"}}'),i=n("85893"),r=n("50065");let a={id:"mustache",title:"Mustache"},l=void 0,c={},o=[{value:"Basic Example",id:"basic-example",level:3}];function h(e){let t={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=mustache*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(t.p,{children:["Mustache is a template engine created by ",(0,i.jsx)(t.a,{href:"https://github.com/cbroglie/mustache",children:"hoisie/cbroglie"}),", to see the original syntax documentation please ",(0,i.jsx)(t.a,{href:"https://mustache.github.io/mustache.5.html",children:"click here"})]}),"\n",(0,i.jsx)(t.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/index.mustache"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"{{> views/partials/header }}\n\n<h1>{{Title}}</h1>\n\n{{> views/partials/footer }}\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/partials/header.mustache"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<h2>Header</h2>\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/partials/footer.mustache"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<h2>Footer</h2>\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/layouts/main.mustache"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Main</title>\n</head>\n\n<body>\n  {{{embed}}}\n</body>\n\n</html>\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n	\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/template/mustache/v2"\n)\n\nfunc main() {\n	// Create a new engine\n	engine := mustache.New("./views", ".mustache")\n\n  // Or from an embedded system\n  //   Note that with an embedded system the partials included from template files must be\n  //   specified relative to the filesystem\'s root, not the current working directory\n  // engine := mustache.NewFileSystem(http.Dir("./views", ".mustache"), ".mustache")\n\n	// Pass the engine to the Views\n	app := fiber.New(fiber.Config{\n		Views: engine,\n	})\n\n	app.Get("/", func(c *fiber.Ctx) error {\n		// Render index\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		})\n	})\n\n	app.Get("/layout", func(c *fiber.Ctx) error {\n		// Render index within layouts/main\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		}, "layouts/main")\n	})\n\n	log.Fatal(app.Listen(":3000"))\n}\n\n'})})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var s=n(67294);let i={},r=s.createContext(i);function a(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);