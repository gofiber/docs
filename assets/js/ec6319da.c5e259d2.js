"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["2146"],{70283:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>r});var t=JSON.parse('{"id":"django/django","title":"Django","description":"Release","source":"@site/template_versioned_docs/version-html_v2.x.x/django/README.md","sourceDirName":"django","slug":"/django/","permalink":"/template/html_v2.x.x/django/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/template/edit/master/django/README.md","tags":[],"version":"html_v2.x.x","lastUpdatedAt":1732893234000,"frontMatter":{"id":"django","title":"Django"},"sidebar":"tutorialSidebar","previous":{"title":"Amber","permalink":"/template/html_v2.x.x/amber/"},"next":{"title":"Handlebars","permalink":"/template/html_v2.x.x/handlebars/"}}'),s=i("85893"),a=i("50065");let r={id:"django",title:"Django"},l=void 0,o={},d=[{value:"Basic Example",id:"basic-example",level:3},{value:"Using embedded file system (1.16+ only)",id:"using-embedded-file-system-116-only",level:3},{value:"Register and use custom functions",id:"register-and-use-custom-functions",level:3},{value:"Important Information on Template Data Binding",id:"important-information-on-template-data-binding",level:3},{value:"AutoEscape is enabled by default",id:"autoescape-is-enabled-by-default",level:3},{value:"Disabling Auto-Escape",id:"disabling-auto-escape",level:3},{value:"Setting AutoEscape using Django built-in template tags",id:"setting-autoescape-using-django-built-in-template-tags",level:3},{value:"Security Implications of Disabling Auto-Escape",id:"security-implications-of-disabling-auto-escape",level:3}];function c(e){let n={a:"a",code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=django*",alt:"Release"}),"\n",(0,s.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,s.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,s.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,s.jsxs)(n.p,{children:["Django is a template engine create by ",(0,s.jsx)(n.a,{href:"https://github.com/flosch/pongo2",children:"flosch"}),", to see the original syntax documentation please ",(0,s.jsx)(n.a,{href:"https://docs.djangoproject.com/en/dev/topics/templates/",children:"click here"})]}),"\n",(0,s.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"./views/index.django"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'{% include "partials/header.django" %}\n\n<h1>{{ Title }}</h1>\n\n{% include "partials/footer.django" %}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"./views/partials/header.django"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<h2>Header</h2>\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"./views/partials/footer.django"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<h2>Footer</h2>\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"./views/layouts/main.django"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Main</title>\n</head>\n\n<body>\n  {{embed}}\n</body>\n\n</html>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/template/django/v3"\n)\n\nfunc main() {\n	// Create a new engine\n	engine := django.New("./views", ".django")\n\n	// Or from an embedded system\n	// See github.com/gofiber/embed for examples\n	// engine := html.NewFileSystem(http.Dir("./views", ".django"))\n\n	// Pass the engine to the Views\n	app := fiber.New(fiber.Config{\n		Views: engine,\n	})\n\n	app.Get("/", func(c *fiber.Ctx) error {\n		// Render index\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		})\n	})\n\n	app.Get("/layout", func(c *fiber.Ctx) error {\n		// Render index within layouts/main\n		return c.Render("index", fiber.Map{\n			"Title": "Hello, World!",\n		}, "layouts/main")\n	})\n\n	log.Fatal(app.Listen(":3000"))\n}\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"using-embedded-file-system-116-only",children:"Using embedded file system (1.16+ only)"}),"\n",(0,s.jsxs)(n.p,{children:["When using the ",(0,s.jsx)(n.code,{children:"// go:embed"})," directive, resolution of inherited templates using django's ",(0,s.jsx)(n.code,{children:"{% extend '' %}"})," keyword fails when instantiating the template engine with ",(0,s.jsx)(n.code,{children:"django.NewFileSystem()"}),". In that case, use the ",(0,s.jsx)(n.code,{children:"django.NewPathForwardingFileSystem()"})," function to instantiate the template engine."]}),"\n",(0,s.jsx)(n.p,{children:"This function provides the proper configuration for resolving inherited templates."}),"\n",(0,s.jsx)(n.p,{children:"Assume you have the following files:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/gofiber/template/blob/master/django/views/ancestor.django",children:"views/ancenstor.django"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/gofiber/template/blob/master/django/views/descendant.django",children:"views/descendant.djando"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"then"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n	"embed"\n	"net/http"\n\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/template/django/v3"\n)\n\n//go:embed views\nvar viewsAsssets embed.FS\n\nfunc main() {\n	// Create a new engine\n	engine := django.NewPathForwardingFileSystem(http.FS(viewsAsssets), "/views", ".django")\n\n	// Pass the engine to the Views\n	app := fiber.New(fiber.Config{\n		Views: engine,\n	})\n\n	app.Get("/", func(c *fiber.Ctx) error {\n		// Render descendant\n		return c.Render("descendant", fiber.Map{\n			"greeting": "World",\n		})\n	})\n\n	log.Fatal(app.Listen(":3000"))\n}\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"register-and-use-custom-functions",children:"Register and use custom functions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// My custom function\nfunc Nl2brHtml(value interface{}) string {\n	if str, ok := value.(string); ok {\n		return strings.Replace(str, "\\n", "<br />", -1)\n	}\n	return ""\n}\n\n// Create a new engine\nengine := django.New("./views", ".django")\n\n// register functions\nengine.AddFunc("nl2br", Nl2brHtml)\n\n// Pass the engine to the Views\napp := fiber.New(fiber.Config{Views: engine})\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"in the handler"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'c.Render("index", fiber.Map{\n    "Fiber": "Hello, World!\\n\\nGreetings from Fiber Team",\n})\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"./views/index.django"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"></head>\n<body>\n{{ nl2br(Fiber) }}\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"></head>\n<body>\nHello, World!<br /><br />Greetings from Fiber Team\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"important-information-on-template-data-binding",children:"Important Information on Template Data Binding"}),"\n",(0,s.jsxs)(n.p,{children:["When working with Pongo2 and this template engine, it's crucial to understand the specific rules for data binding. Only keys that match the following regular expression are supported: ",(0,s.jsx)(n.code,{children:"^[a-zA-Z0-9_]+$"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This means that keys with special characters or punctuation, such as ",(0,s.jsx)(n.code,{children:"my-key"})," or ",(0,s.jsx)(n.code,{children:"my.key"}),", are not compatible and will not be bound to the template. This is a restriction imposed by the underlying Pongo2 template engine. Please ensure your keys adhere to these rules to avoid any binding issues."]}),"\n",(0,s.jsxs)(n.p,{children:["If you need to access a value in the template that doesn't adhere to the key naming restrictions imposed by the Pongo2 template engine, you can bind the value to a new field when calling ",(0,s.jsx)(n.code,{children:"fiber.Render"}),". Here's an example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'c.Render("index", fiber.Map{\n    "Fiber": "Hello, World!\\n\\nGreetings from Fiber Team",\n    "MyKey": c.Locals("my-key"),\n})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"autoescape-is-enabled-by-default",children:"AutoEscape is enabled by default"}),"\n",(0,s.jsxs)(n.p,{children:["When you create a new instance of the ",(0,s.jsx)(n.code,{children:"Engine"}),", the auto-escape is ",(0,s.jsx)(n.strong,{children:"enabled by default"}),". This setting automatically escapes output, providing a critical security measure against Cross-Site Scripting (XSS) attacks."]}),"\n",(0,s.jsx)(n.h3,{id:"disabling-auto-escape",children:"Disabling Auto-Escape"}),"\n",(0,s.jsxs)(n.p,{children:["Auto-escaping can be disabled if necessary, using the ",(0,s.jsx)(n.code,{children:"SetAutoEscape"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'engine := django.New("./views", ".django")\nengine.SetAutoEscape(false)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"setting-autoescape-using-django-built-in-template-tags",children:"Setting AutoEscape using Django built-in template tags"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Explicitly turning off autoescaping for a section:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-django",children:"  {% autoescape off %}\n  {{ \"<script>alert('Hello World');<\/script>\" }}\n  {% endautoescape %}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Turning autoescaping back on for a section:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-django",children:"  {% autoescape on %}\n  {{ \"<script>alert('Hello World');<\/script>\" }}\n  {% endautoescape %}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It can also be done on a per variable basis using the ",(0,s.jsx)(n.em,{children:"safe"})," built-in:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-django",children:'<h1>{{ someSafeVar | safe }}</h1>\n{{ "<script>" | safe }}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"security-implications-of-disabling-auto-escape",children:"Security Implications of Disabling Auto-Escape"}),"\n",(0,s.jsx)(n.p,{children:"Disabling auto-escape should be approached with caution. It can expose your application to XSS attacks, where malicious scripts are injected into web pages. Without auto-escaping, there is a risk of rendering harmful HTML or JavaScript from user-supplied data."}),"\n",(0,s.jsx)(n.p,{children:"It is advisable to keep auto-escape enabled unless there is a strong reason to disable it. If you do disable it, ensure all user-supplied content is thoroughly sanitized and validated to avoid XSS vulnerabilities."})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return r}});var t=i(67294);let s={},a=t.createContext(s);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);