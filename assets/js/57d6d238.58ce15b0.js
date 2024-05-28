"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[47798],{8784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(74848),r=t(28453);const s={id:"fiberi18n"},d="Fiberi18n",l={id:"fiberi18n/fiberi18n",title:"Fiberi18n",description:"Release",source:"@site/contrib_versioned_docs/version-loadshed_v0.x.x/fiberi18n/README.md",sourceDirName:"fiberi18n",slug:"/fiberi18n/",permalink:"/contrib/loadshed_v0.x.x/fiberi18n/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/fiberi18n/README.md",tags:[],version:"loadshed_v0.x.x",lastUpdatedAt:1716883824e3,frontMatter:{id:"fiberi18n"},sidebar:"tutorialSidebar",previous:{title:"Fgprof",permalink:"/contrib/loadshed_v0.x.x/fgprof/"},next:{title:"Fibernewrelic",permalink:"/contrib/loadshed_v0.x.x/fibernewrelic/"}},c={},a=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"fiberi18n",children:"Fiberi18n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fiberi18n*",alt:"Release"}),"\n",(0,i.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/nicksnyder/go-i18n",children:"go-i18n"})," support for Fiber."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note: Requires Go 1.18 and above"})}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(n.p,{children:"This middleware supports Fiber v2."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fiberi18n/v2\n"})}),"\n",(0,i.jsx)(n.h2,{id:"signature",children:"Signature"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Signature"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"New"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"New(config ...*fiberi18n.Config) fiber.Handler"})}),(0,i.jsx)(n.td,{children:"Create a new fiberi18n middleware handler"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Localize"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Localize(ctx *fiber.Ctx, params interface{}) (string, error)"})}),(0,i.jsx)(n.td,{children:"Localize returns a localized message. param is one of these type: messageID, *i18n.LocalizeConfig"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MustLocalize"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"MustLocalize(ctx *fiber.Ctx, params interface{}) string"})}),(0,i.jsx)(n.td,{children:"MustLocalize is similar to Localize, except it panics if an error happens. param is one of these type: messageID, *i18n.LocalizeConfig"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Next"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func(c *fiber.Ctx) bool"})}),(0,i.jsxs)(n.td,{children:["A function to skip this middleware when returned ",(0,i.jsx)(n.code,{children:"true"}),"."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"nil"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RootPath"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"The i18n template folder path."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"./example/localize"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AcceptLanguages"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"[]language.Tag"})}),(0,i.jsx)(n.td,{children:"A collection of languages that can be processed."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"[]language.Tag{language.Chinese, language.English}"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FormatBundleFile"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"The type of the template file."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"yaml"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DefaultLanguage"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"language.Tag"})}),(0,i.jsx)(n.td,{children:"The default returned language type."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"language.English"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Loader"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Loader"})}),(0,i.jsx)(n.td,{children:"The implementation of the Loader interface, which defines how to read the file. We provide both os.ReadFile and embed.FS.ReadFile."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"LoaderFunc(os.ReadFile)"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UnmarshalFunc"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"i18n.UnmarshalFunc"})}),(0,i.jsx)(n.td,{children:"The function used for decoding template files."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"yaml.Unmarshal"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LangHandler"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func(ctx *fiber.Ctx, defaultLang string) string"})}),(0,i.jsx)(n.td,{children:"Used to get the kind of language handled by *fiber.Ctx and defaultLang."}),(0,i.jsxs)(n.td,{children:["Retrieved from the request header ",(0,i.jsx)(n.code,{children:"Accept-Language"})," or query parameter ",(0,i.jsx)(n.code,{children:"lang"}),"."]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/gofiber/contrib/fiberi18n/v2"\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/nicksnyder/go-i18n/v2/i18n"\n\t"golang.org/x/text/language"\n)\n\nfunc main() {\n\tapp := fiber.New()\n\tapp.Use(\n\t\tfiberi18n.New(&fiberi18n.Config{\n\t\t\tRootPath:        "./example/localize",\n\t\t\tAcceptLanguages: []language.Tag{language.Chinese, language.English},\n\t\t\tDefaultLanguage: language.Chinese,\n\t\t}),\n\t)\n\tapp.Get("/", func(c *fiber.Ctx) error {\n\t\tlocalize, err := fiberi18n.Localize(c, "welcome")\n\t\tif err != nil {\n\t\t\treturn c.Status(fiber.StatusInternalServerError).SendString(err.Error())\n\t\t}\n\t\treturn c.SendString(localize)\n\t})\n\tapp.Get("/:name", func(ctx *fiber.Ctx) error {\n\t\treturn ctx.SendString(fiberi18n.MustLocalize(ctx, &i18n.LocalizeConfig{\n\t\t\tMessageID: "welcomeWithName",\n\t\t\tTemplateData: map[string]string{\n\t\t\t\t"name": ctx.Params("name"),\n\t\t\t},\n\t\t}))\n\t})\n\tlog.Fatal(app.Listen(":3000"))\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);