"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["65533"],{21785:function(e,t,i){i.r(t),i.d(t,{metadata:()=>r,contentTitle:()=>o,default:()=>p,assets:()=>s,toc:()=>a,frontMatter:()=>d});var r=JSON.parse('{"id":"api/middleware/pprof","title":"Pprof","description":"Pprof middleware for Fiber that serves via its HTTP server runtime profiling data in the format expected by the pprof visualization tool. The package is typically only imported for the side effect of registering its HTTP handlers. The handled paths all begin with /debug/pprof/.","source":"@site/versioned_docs/version-v2.x/api/middleware/pprof.md","sourceDirName":"api/middleware","slug":"/api/middleware/pprof","permalink":"/api/middleware/pprof","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1736253587000,"frontMatter":{"id":"pprof"},"sidebar":"tutorialSidebar","previous":{"title":"Monitor","permalink":"/api/middleware/monitor"},"next":{"title":"Proxy","permalink":"/api/middleware/proxy"}}'),n=i("85893"),l=i("50065");let d={id:"pprof"},o="Pprof",s={},a=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function f(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"pprof",children:"Pprof"})}),"\n",(0,n.jsxs)(t.p,{children:["Pprof middleware for ",(0,n.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that serves via its HTTP server runtime profiling data in the format expected by the pprof visualization tool. The package is typically only imported for the side effect of registering its HTTP handlers. The handled paths all begin with /debug/pprof/."]}),"\n",(0,n.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"func New() fiber.Handler\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/pprof"\n)\n'})}),"\n",(0,n.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'// Initialize default config\napp.Use(pprof.New())\n\n// Or extend your config for customization\n\n// For example, in systems where you have multiple ingress endpoints, it is common to add a URL prefix, like so:\napp.Use(pprof.New(pprof.Config{Prefix: "/endpoint-prefix"}))\n\n// This prefix will be added to the default path of "/debug/pprof/", for a resulting URL of: "/endpoint-prefix/debug/pprof/".\n'})}),"\n",(0,n.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"nil"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Prefix"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'Prefix defines a URL prefix added before "/debug/pprof". Note that it should start with (but not end with) a slash. Example: "/federated-fiber"'}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'""'})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n    Next: nil,\n}\n"})})]})}function p(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return d}});var r=i(67294);let n={},l=r.createContext(n);function d(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);