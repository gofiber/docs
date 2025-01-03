"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["74785"],{80774:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>l});var i=JSON.parse('{"id":"api/middleware/envvar","title":"EnvVar","description":"EnvVar middleware for Fiber that can be used to expose environment variables with various options.","source":"@site/versioned_docs/version-v2.x/api/middleware/envvar.md","sourceDirName":"api/middleware","slug":"/api/middleware/envvar","permalink":"/api/middleware/envvar","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1735889916000,"frontMatter":{"id":"envvar"},"sidebar":"tutorialSidebar","previous":{"title":"Encrypt Cookie","permalink":"/api/middleware/encryptcookie"},"next":{"title":"ETag","permalink":"/api/middleware/etag"}}'),r=t("85893"),s=t("50065");let l={id:"envvar"},a="EnvVar",d={},o=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"envvar",children:"EnvVar"})}),"\n",(0,r.jsxs)(n.p,{children:["EnvVar middleware for ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that can be used to expose environment variables with various options."]}),"\n",(0,r.jsx)(n.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/envvar"\n)\n'})}),"\n",(0,r.jsx)(n.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Initialize default config\napp.Use("/expose/envvars", envvar.New())\n\n// Or extend your config for customization\napp.Use("/expose/envvars", envvar.New(\n	envvar.Config{\n		ExportVars:  map[string]string{"testKey": "", "testDefaultKey": "testDefaultVal"},\n		ExcludeVars: map[string]string{"excludeKey": ""},\n	}),\n)\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"You will need to provide a path to use the envvar middleware."})}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.p,{children:"Http response contract:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n  "vars": {\n    "someEnvVariable": "someValue",\n    "anotherEnvVariable": "anotherValue",\n  }\n}\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ExportVars"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"map[string]string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ExportVars specifies the environment variables that should be exported."}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"nil"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ExcludeVars"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"map[string]string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ExcludeVars specifies the environment variables that should not be exported."}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"nil"})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"Config{}\n"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var i=t(67294);let r={},s=i.createContext(r);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);