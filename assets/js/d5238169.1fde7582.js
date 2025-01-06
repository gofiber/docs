"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["50104"],{60860:function(e,n,a){a.r(n),a.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>d,assets:()=>o,toc:()=>g,frontMatter:()=>r});var i=JSON.parse('{"id":"swagger/swagger","title":"Swagger","description":"Release","source":"@site/contrib_versioned_docs/version-casbin_v1.x.x/swagger/README.md","sourceDirName":"swagger","slug":"/swagger/","permalink":"/contrib/casbin_v1.x.x/swagger/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/swagger/README.md","tags":[],"version":"casbin_v1.x.x","lastUpdatedAt":1736149068000,"frontMatter":{"id":"swagger","title":"Swagger"},"sidebar":"tutorialSidebar","previous":{"title":"README","permalink":"/contrib/casbin_v1.x.x/socketio/"},"next":{"title":"Websocket","permalink":"/contrib/casbin_v1.x.x/websocket/"}}'),t=a("85893"),s=a("50065");let r={id:"swagger",title:"Swagger"},l="Swagger",o={},g=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function c(e){let n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"swagger",children:"Swagger"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=swagger*",alt:"Release"}),"\n",(0,t.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,t.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,t.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,t.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,t.jsxs)(n.p,{children:["Swagger middleware for ",(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"}),". The middleware handles Swagger UI."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note: Requires Go 1.18 and above"})}),"\n",(0,t.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func New(config ...swagger.Config) fiber.Handler\n"})}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["Swagger is tested on the latests ",(0,t.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,t.jsx)(n.p,{children:"And then install the swagger middleware:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/contrib/swagger\n"})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Import the middleware package"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/contrib/swagger"\n)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Using the default config:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"app.Use(swagger.New())\n"})}),"\n",(0,t.jsx)(n.p,{children:"Using a custom config:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'cfg := swagger.Config{\n    BasePath: "/",\n    FilePath: "./docs/swagger.json",\n    Path:     "swagger",\n    Title:    "Swagger API Docs",\n}\n\napp.Use(swagger.New(cfg))\n'})}),"\n",(0,t.jsx)(n.p,{children:"Use program data for Swagger content:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'cfg := swagger.Config{\n    BasePath:    "/",\n    FilePath:    "./docs/swagger.json",\n    FileContent: mySwaggerByteSlice,\n    Path:        "swagger",\n    Title:       "Swagger API Docs",\n}\n\napp.Use(swagger.New(cfg))\n'})}),"\n",(0,t.jsx)(n.p,{children:"Using multiple instances of Swagger:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Create Swagger middleware for v1\n//\n// Swagger will be available at: /api/v1/docs\napp.Use(swagger.New(swagger.Config{\n    BasePath: "/api/v1/",\n    FilePath: "./docs/v1/swagger.json",\n    Path:     "docs",\n}))\n\n// Create Swagger middleware for v2\n//\n// Swagger will be available at: /api/v2/docs\napp.Use(swagger.New(swagger.Config{\n    BasePath: "/api/v2/",\n    FilePath: "./docs/v2/swagger.json",\n    Path:     "docs",\n}))\n'})}),"\n",(0,t.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Config struct {\n	// Next defines a function to skip this middleware when returned true.\n	//\n	// Optional. Default: nil\n	Next func(c *fiber.Ctx) bool\n\n	// BasePath for the UI path\n	//\n	// Optional. Default: /\n	BasePath string\n\n	// FilePath for the swagger.json or swagger.yaml file\n	//\n	// Optional. Default: ./swagger.json\n	FilePath string\n\n	// FileContent for the content of the swagger.json or swagger.yaml file.\n	// If provided, FilePath will not be read.\n	//\n	// Optional. Default: nil\n	FileContent []byte\n\n	// Path combines with BasePath for the full UI path\n	//\n	// Optional. Default: docs\n	Path string\n\n	// Title for the documentation site\n	//\n	// Optional. Default: Fiber API documentation\n	Title string\n\n	// CacheAge defines the max-age for the Cache-Control header in seconds.\n	//\n	// Optional. Default: 3600 (1 hour)\n	CacheAge int\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n	Next:     nil,\n	BasePath: "/",\n	FilePath: "./swagger.json",\n	Path:     "docs",\n	Title:    "Fiber API documentation",\n	CacheAge: 3600, // Default to 1 hour\n}\n'})})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return r}});var i=a(67294);let t={},s=i.createContext(t);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);