"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["47824"],{8249:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>s});var r=JSON.parse('{"id":"fiberi18n/fiberi18n","title":"Fiberi18n","description":"Release","source":"@site/contrib_versioned_docs/version-opafiber_v1.x.x/fiberi18n/README.md","sourceDirName":"fiberi18n","slug":"/fiberi18n/","permalink":"/contrib/opafiber_v1.x.x/fiberi18n/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/fiberi18n/README.md","tags":[],"version":"opafiber_v1.x.x","lastUpdatedAt":1733317037000,"frontMatter":{"id":"fiberi18n","title":"Fiberi18n"},"sidebar":"tutorialSidebar","previous":{"title":"Casbin","permalink":"/contrib/opafiber_v1.x.x/casbin/"},"next":{"title":"Fibernewrelic","permalink":"/contrib/opafiber_v1.x.x/fibernewrelic/"}}'),t=i("85893"),d=i("50065");let s={id:"fiberi18n",title:"Fiberi18n"},l=void 0,c={},a=[{value:"Install",id:"install",level:3},{value:"Signature",id:"signature",level:3},{value:"Config",id:"config",level:3},{value:"Example",id:"example",level:3}];function o(e){let n={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fiberi18n*",alt:"Release"}),"\n",(0,t.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,t.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,t.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,t.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/nicksnyder/go-i18n",children:"go-i18n"})," support for Fiber."]}),"\n",(0,t.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,t.jsx)(n.p,{children:"This middleware supports Fiber v2."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fiberi18n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"fiberi18n.New(config ...*Config) fiber.Handler\n"})}),"\n",(0,t.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Next"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func(c *fiber.Ctx) bool"})}),(0,t.jsxs)(n.td,{children:["A function to skip this middleware when returned ",(0,t.jsx)(n.code,{children:"true"}),"."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"nil"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RootPath"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The i18n template folder path."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"./example/localize"'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"AcceptLanguages"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]language.Tag"})}),(0,t.jsx)(n.td,{children:"A collection of languages that can be processed."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]language.Tag{language.Chinese, language.English}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FormatBundleFile"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The type of the template file."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"yaml"'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DefaultLanguage"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"language.Tag"})}),(0,t.jsx)(n.td,{children:"The default returned language type."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"language.English"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Loader"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Loader"})}),(0,t.jsx)(n.td,{children:"The implementation of the Loader interface, which defines how to read the file. We provide both os.ReadFile and embed.FS.ReadFile."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"LoaderFunc(os.ReadFile)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"UnmarshalFunc"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"i18n.UnmarshalFunc"})}),(0,t.jsx)(n.td,{children:"The function used for decoding template files."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"yaml.Unmarshal"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LangHandler"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func(ctx *fiber.Ctx, defaultLang string) string"})}),(0,t.jsx)(n.td,{children:"Used to get the kind of language handled by *fiber.Ctx and defaultLang."}),(0,t.jsxs)(n.td,{children:["Retrieved from the request header ",(0,t.jsx)(n.code,{children:"Accept-Language"})," or query parameter ",(0,t.jsx)(n.code,{children:"lang"}),"."]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"github.com/gofiber/contrib/fiberi18n"\n	"github.com/gofiber/fiber/v2"\n	"github.com/nicksnyder/go-i18n/v2/i18n"\n	"golang.org/x/text/language"\n)\n\nfunc main() {\n	app := fiber.New()\n	app.Use(\n		fiberi18n.New(&fiberi18n.Config{\n			RootPath:        "./example/localize",\n			AcceptLanguages: []language.Tag{language.Chinese, language.English},\n			DefaultLanguage: language.Chinese,\n		}),\n	)\n	app.Get("/", func(c *fiber.Ctx) error {\n		return c.SendString(fiberi18n.MustGetMessage("welcome"))\n	})\n	app.Get("/:name", func(ctx *fiber.Ctx) error {\n		return ctx.SendString(fiberi18n.MustGetMessage(&i18n.LocalizeConfig{\n			MessageID: "welcomeWithName",\n			TemplateData: map[string]string{\n				"name": ctx.Params("name"),\n			},\n		}))\n	})\n	app.Listen("127.0.0.1:3000")\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return s}});var r=i(67294);let t={},d=r.createContext(t);function s(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);