"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[91019],{30190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var i=t(74848),r=t(28453);const s={id:"envvar"},l="EnvVar",a={id:"api/middleware/envvar",title:"EnvVar",description:"EnvVar middleware for Fiber that can be used to expose environment variables with various options.",source:"@site/versioned_docs/version-v2.x/api/middleware/envvar.md",sourceDirName:"api/middleware",slug:"/api/middleware/envvar",permalink:"/api/middleware/envvar",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1721303043e3,frontMatter:{id:"envvar"},sidebar:"tutorialSidebar",previous:{title:"Encrypt Cookie",permalink:"/api/middleware/encryptcookie"},next:{title:"ETag",permalink:"/api/middleware/etag"}},d={},o=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"envvar",children:"EnvVar"}),"\n",(0,i.jsxs)(n.p,{children:["EnvVar middleware for ",(0,i.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that can be used to expose environment variables with various options."]}),"\n",(0,i.jsx)(n.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/envvar"\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Initialize default config\napp.Use("/expose/envvars", envvar.New())\n\n// Or extend your config for customization\napp.Use("/expose/envvars", envvar.New(\n\tenvvar.Config{\n\t\tExportVars:  map[string]string{"testKey": "", "testDefaultKey": "testDefaultVal"},\n\t\tExcludeVars: map[string]string{"excludeKey": ""},\n\t}),\n)\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"You will need to provide a path to use the envvar middleware."})}),"\n",(0,i.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,i.jsx)(n.p,{children:"Http response contract:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "vars": {\n    "someEnvVariable": "someValue",\n    "anotherEnvVariable": "anotherValue",\n  }\n}\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"ExportVars"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"map[string]string"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"ExportVars specifies the environment variables that should be exported."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"nil"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"ExcludeVars"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"map[string]string"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"ExcludeVars specifies the environment variables that should not be exported."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"nil"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"Config{}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);