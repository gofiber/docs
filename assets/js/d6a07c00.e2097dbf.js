"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[66264],{19198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=n(74848),r=n(28453);const s={id:"hcaptcha"},c="HCaptcha",l={id:"hcaptcha/hcaptcha",title:"HCaptcha",description:"Release",source:"@site/contrib_versioned_docs/version-fiberi18n_v2.x.x/hcaptcha/README.md",sourceDirName:"hcaptcha",slug:"/hcaptcha/",permalink:"/contrib/fiberi18n_v2.x.x/hcaptcha/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/hcaptcha/README.md",tags:[],version:"fiberi18n_v2.x.x",lastUpdatedAt:1720020621e3,frontMatter:{id:"hcaptcha"},sidebar:"tutorialSidebar",previous:{title:"Fiberzerolog",permalink:"/contrib/fiberi18n_v2.x.x/fiberzerolog/"},next:{title:"JWT",permalink:"/contrib/fiberi18n_v2.x.x/jwt/"}},a={},o=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"hcaptcha",children:"HCaptcha"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=hcaptcha*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(t.p,{children:["A simple ",(0,i.jsx)(t.a,{href:"https://hcaptcha.com",children:"HCaptcha"})," middleware to prevent bot attacks."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Requires Go ",(0,i.jsx)(t.strong,{children:"1.21"})," and above"]})}),"\n",(0,i.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["This middleware only supports Fiber ",(0,i.jsx)(t.strong,{children:"v3"}),"."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"go get -u github.com/gofiber/fiber/v3\ngo get -u github.com/gofiber/contrib/hcaptcha\n"})}),"\n",(0,i.jsx)(t.h2,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"hcaptcha.New(config hcaptcha.Config) fiber.Handler\n"})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SecretKey"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The secret key you obtained from the HCaptcha admin panel. This field must not be empty."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'""'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ResponseKeyFunc"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(fiber.Ctx) (string, error)"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["ResponseKeyFunc should return the token that captcha provides upon successful solving. By default, it gets the token from the body by parsing a JSON request and returns the ",(0,i.jsx)(t.code,{children:"hcaptcha_token"})," field."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"hcaptcha.DefaultResponseKeyFunc"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SiteVerifyURL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"This property specifies the API resource used for token authentication."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"https://api.hcaptcha.com/siteverify"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/contrib/hcaptcha"\n    "github.com/gofiber/fiber/v3"\n    "log"\n)\n\nconst (\n    TestSecretKey = "0x0000000000000000000000000000000000000000"\n    TestSiteKey   = "20000000-ffff-ffff-ffff-000000000002"\n)\n\nfunc main() {\n    app := fiber.New()\n    captcha := hcaptcha.New(hcaptcha.Config{\n        // Must set the secret key\n        SecretKey: TestSecretKey,\n    })\n\t\n    app.Get("/api/", func(c fiber.Ctx) error {\n        return c.JSON(fiber.Map{\n            "hcaptcha_site_key": TestSiteKey,\n        })\n    })\n\t\n    app.Post("/api/robots-excluded", func(c fiber.Ctx) error {\n        return c.SendString("You are not a robot")\n    }, captcha)\n\t\n    log.Fatal(app.Listen(":3000"))\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var i=n(96540);const r={},s=i.createContext(r);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);