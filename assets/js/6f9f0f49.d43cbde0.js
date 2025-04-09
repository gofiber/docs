"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["59281"],{56355:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"api/middleware/favicon","title":"Favicon","description":"Favicon middleware for Fiber that ignores favicon requests or caches a provided icon in memory to improve performance by skipping disk access. User agents request favicon.ico frequently and indiscriminately, so you may wish to exclude these requests from your logs by using this middleware before your logger middleware.","source":"@site/versioned_docs/version-v2.x/api/middleware/favicon.md","sourceDirName":"api/middleware","slug":"/api/middleware/favicon","permalink":"/api/middleware/favicon","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1744205860000,"frontMatter":{"id":"favicon"},"sidebar":"tutorialSidebar","previous":{"title":"ExpVar","permalink":"/api/middleware/expvar"},"next":{"title":"FileSystem","permalink":"/api/middleware/filesystem"}}'),l=i("85893"),r=i("50065");let s={id:"favicon"},d="Favicon",o={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function a(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"favicon",children:"Favicon"})}),"\n",(0,l.jsxs)(t.p,{children:["Favicon middleware for ",(0,l.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that ignores favicon requests or caches a provided icon in memory to improve performance by skipping disk access. User agents request favicon.ico frequently and indiscriminately, so you may wish to exclude these requests from your logs by using this middleware before your logger middleware."]}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["This middleware is exclusively for serving the default, implicit favicon, which is GET /favicon.ico or ",(0,l.jsx)(t.a,{href:"#config",children:"custom favicon URL"}),"."]})}),"\n",(0,l.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/favicon"\n)\n'})}),"\n",(0,l.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'// Initialize default config\napp.Use(favicon.New())\n\n// Or extend your config for customization\napp.Use(favicon.New(favicon.Config{\n    File: "./favicon.ico",\n    URL: "/favicon.ico",\n}))\n'})}),"\n",(0,l.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Data"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"[]byte"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Raw data of the favicon file. This can be used instead of ",(0,l.jsx)(t.code,{children:"File"}),"."]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"File"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"File holds the path to an actual favicon that will be cached."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:'""'})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"URL"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"URL for favicon handler."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:'"/favicon.ico"'})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"FileSystem"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"http.FileSystem"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"FileSystem is an optional alternate filesystem to search for the favicon in."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"CacheControl"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"CacheControl defines how the Cache-Control header in the response should be set."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:'"public, max-age=31536000"'})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n	Next:         nil,\n	File:         "",\n	URL:          fPath,\n	CacheControl: "public, max-age=31536000",\n}\n'})})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return d},a:function(){return s}});var n=i(67294);let l={},r=n.createContext(l);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);