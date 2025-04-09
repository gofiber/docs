"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["48337"],{796:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"api/middleware/filesystem","title":"FileSystem","description":"Filesystem middleware for Fiber that enables you to serve files from a directory.","source":"@site/versioned_docs/version-v2.x/api/middleware/filesystem.md","sourceDirName":"api/middleware","slug":"/api/middleware/filesystem","permalink":"/api/middleware/filesystem","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1744205860000,"frontMatter":{"id":"filesystem"},"sidebar":"tutorialSidebar","previous":{"title":"Favicon","permalink":"/api/middleware/favicon"},"next":{"title":"Health Check","permalink":"/api/middleware/healthcheck"}}'),s=n("85893"),l=n("50065");let r={id:"filesystem"},a="FileSystem",d={},o=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"embed",id:"embed",level:2},{value:"pkger",id:"pkger",level:2},{value:"packr",id:"packr",level:2},{value:"go.rice",id:"gorice",level:2},{value:"fileb0x",id:"fileb0x",level:2},{value:"statik",id:"statik",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Utils",id:"utils",level:2},{value:"SendFile",id:"sendfile",level:3}];function c(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"filesystem",children:"FileSystem"})}),"\n",(0,s.jsxs)(t.p,{children:["Filesystem middleware for ",(0,s.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that enables you to serve files from a directory."]}),"\n",(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.code,{children:":params"})," & ",(0,s.jsx)(t.code,{children:":optionals?"})," within the prefix path are not supported!"]})}),(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["To handle paths with spaces (or other url encoded values) make sure to set ",(0,s.jsx)(t.code,{children:"fiber.Config{ UnescapePath: true }"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func New(config Config) fiber.Handler\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n)\n'})}),"\n",(0,s.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'// Provide a minimal config\napp.Use(filesystem.New(filesystem.Config{\n	Root: http.Dir("./assets"),\n}))\n\n// Or extend your config for customization\napp.Use(filesystem.New(filesystem.Config{\n    Root:         http.Dir("./assets"),\n    Browse:       true,\n    Index:        "index.html",\n    NotFoundFile: "404.html",\n    MaxAge:       3600,\n}))\n'})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"If your environment (Go 1.16+) supports it, we recommend using Go Embed instead of the other solutions listed as this one is native to Go and the easiest to use."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"embed",children:"embed"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://golang.org/pkg/embed/",children:"Embed"})," is the native method to embed files in a Golang excecutable. Introduced in Go 1.16."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n	"embed"\n	"io/fs"\n	"log"\n	"net/http"\n\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/fiber/v2/middleware/filesystem"\n)\n\n// Embed a single file\n//go:embed index.html\nvar f embed.FS\n\n// Embed a directory\n//go:embed static/*\nvar embedDirStatic embed.FS\n\nfunc main() {\n	app := fiber.New()\n\n	app.Use("/", filesystem.New(filesystem.Config{\n		Root: http.FS(f),\n	}))\n\n	// Access file "image.png" under `static/` directory via URL: `http://<server>/static/image.png`.\n	// Without `PathPrefix`, you have to access it via URL:\n	// `http://<server>/static/static/image.png`.\n	app.Use("/static", filesystem.New(filesystem.Config{\n		Root: http.FS(embedDirStatic),\n		PathPrefix: "static",\n		Browse: true,\n	}))\n\n	log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"pkger",children:"pkger"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/markbates/pkger",children:"https://github.com/markbates/pkger"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "github.com/markbates/pkger"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: pkger.Dir("/assets"),\n	}))\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"packr",children:"packr"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/gobuffalo/packr",children:"https://github.com/gobuffalo/packr"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "github.com/gobuffalo/packr/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: packr.New("Assets Box", "/assets"),\n	}))\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"gorice",children:"go.rice"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/GeertJohan/go.rice",children:"https://github.com/GeertJohan/go.rice"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "github.com/GeertJohan/go.rice"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: rice.MustFindBox("assets").HTTPBox(),\n	}))\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"fileb0x",children:"fileb0x"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/UnnoTed/fileb0x",children:"https://github.com/UnnoTed/fileb0x"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "<Your go module>/myEmbeddedFiles"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: myEmbeddedFiles.HTTP,\n	}))\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"statik",children:"statik"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/rakyll/statik",children:"https://github.com/rakyll/statik"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/fiber/v2/middleware/filesystem"\n\n	// Use blank to invoke init function and register data to statik\n	_ "<Your go module>/statik" \n	"github.com/rakyll/statik/fs"\n)\n\nfunc main() {\n	statikFS, err := fs.New()\n	if err != nil {\n		panic(err)\n	}\n\n	app := fiber.New()\n\n	app.Use("/", filesystem.New(filesystem.Config{\n		Root: statikFS,\n	}))\n\n	log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"nil"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Root"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"http.FileSystem"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Root is a FileSystem that provides access to a collection of files and directories."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"nil"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"PathPrefix"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"PathPrefix defines a prefix to be added to a filepath when reading a file from the FileSystem."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'""'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Browse"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"bool"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Enable directory browsing."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"false"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Index"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Index file for serving a directory."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'"index.html"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"MaxAge"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The value for the Cache-Control HTTP-header that is set on the file response. MaxAge is defined in seconds."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NotFoundFile"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"File to return if the path is not found. Useful for SPA's."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'""'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ContentTypeCharset"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The value for the Content-Type HTTP-header that is set on the file response."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'""'})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n    Next:   nil,\n    Root:   nil,\n    PathPrefix: "",\n    Browse: false,\n    Index:  "/index.html",\n    MaxAge: 0,\n    ContentTypeCharset: "",\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"utils",children:"Utils"}),"\n",(0,s.jsx)(t.h3,{id:"sendfile",children:"SendFile"}),"\n",(0,s.jsxs)(t.p,{children:["Serves a file from an ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/net/http#FileSystem",children:"HTTP file system"})," at the specified path."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:'title="Signature" title="Signature"',children:"func SendFile(c *fiber.Ctx, filesystem http.FileSystem, path string) error\n"})}),"\n",(0,s.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n)\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'// Define a route to serve a specific file\napp.Get("/download", func(c *fiber.Ctx) error {\n    // Serve the file using SendFile function\n    err := filesystem.SendFile(c, http.Dir("your/filesystem/root"), "path/to/your/file.txt")\n    if err != nil {\n        // Handle the error, e.g., return a 404 Not Found response\n        return c.Status(fiber.StatusNotFound).SendString("File not found")\n    }\n    \n    return nil\n})\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'// Serve static files from the "build" directory using Fiber\'s built-in middleware.\napp.Use("/", filesystem.New(filesystem.Config{\n    Root:       http.FS(f),         // Specify the root directory for static files.\n    PathPrefix: "build",            // Define the path prefix where static files are served.\n}))\n\n// For all other routes (wildcard "*"), serve the "index.html" file from the "build" directory.\napp.Use("*", func(ctx *fiber.Ctx) error {\n    return filesystem.SendFile(ctx, http.FS(f), "build/index.html")\n})\n'})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var i=n(67294);let s={},l=i.createContext(s);function r(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);