"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[63810],{56653:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var r=t(74848),i=t(28453);const s={id:"envvar"},l="EnvVar",a={id:"middleware/envvar",title:"EnvVar",description:"EnvVar middleware for Fiber that can be used to expose environment variables with various options.",source:"@site/docs/core/middleware/envvar.md",sourceDirName:"middleware",slug:"/middleware/envvar",permalink:"/next/middleware/envvar",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/middleware/envvar.md",tags:[],version:"current",lastUpdatedAt:1720163171e3,frontMatter:{id:"envvar"},sidebar:"tutorialSidebar",previous:{title:"Encrypt Cookie",permalink:"/next/middleware/encryptcookie"},next:{title:"ETag",permalink:"/next/middleware/etag"}},d={},o=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"envvar",children:"EnvVar"}),"\n",(0,r.jsxs)(n.p,{children:["EnvVar middleware for ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that can be used to expose environment variables with various options."]}),"\n",(0,r.jsx)(n.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v3"\n  "github.com/gofiber/fiber/v3/middleware/envvar"\n)\n'})}),"\n",(0,r.jsx)(n.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Initialize default config\napp.Use("/expose/envvars", envvar.New())\n\n// Or extend your config for customization\napp.Use("/expose/envvars", envvar.New(\n\tenvvar.Config{\n\t\tExportVars:  map[string]string{"testKey": "", "testDefaultKey": "testDefaultVal"},\n\t\tExcludeVars: map[string]string{"excludeKey": ""},\n\t}),\n)\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"You will need to provide a path to use the envvar middleware."})}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.p,{children:"Http response contract:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n  "vars": {\n    "someEnvVariable": "someValue",\n    "anotherEnvVariable": "anotherValue",\n  }\n}\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ExportVars"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"map[string]string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ExportVars specifies the environment variables that should be exported."}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"nil"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ExcludeVars"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"map[string]string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ExcludeVars specifies the environment variables that should not be exported."}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"nil"})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"Config{}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);