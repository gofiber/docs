"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[78397],{63013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=n(74848),l=n(28453);const r={id:"cache"},s="Cache",c={id:"api/middleware/cache",title:"Cache",description:"Cache middleware for Fiber designed to intercept responses and cache them. This middleware will cache the Body, Content-Type and StatusCode using the c.Path() as unique identifier. Special thanks to @codemicro for creating this middleware for Fiber core!",source:"@site/versioned_docs/version-v2.x/api/middleware/cache.md",sourceDirName:"api/middleware",slug:"/api/middleware/cache",permalink:"/api/middleware/cache",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1724653574e3,frontMatter:{id:"cache"},sidebar:"tutorialSidebar",previous:{title:"BasicAuth",permalink:"/api/middleware/basicauth"},next:{title:"Compress",permalink:"/api/middleware/compress"}},d={},a=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"cache",children:"Cache"}),"\n",(0,i.jsxs)(t.p,{children:["Cache middleware for ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," designed to intercept responses and cache them. This middleware will cache the ",(0,i.jsx)(t.code,{children:"Body"}),", ",(0,i.jsx)(t.code,{children:"Content-Type"})," and ",(0,i.jsx)(t.code,{children:"StatusCode"})," using the ",(0,i.jsx)(t.code,{children:"c.Path()"})," as unique identifier. Special thanks to ",(0,i.jsx)(t.a,{href:"https://github.com/codemicro/fiber-cache",children:"@codemicro"})," for creating this middleware for Fiber core!"]}),"\n",(0,i.jsxs)(t.p,{children:["Request Directives",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.code,{children:"Cache-Control: no-cache"})," will return the up-to-date response but still caches it. You will always get a ",(0,i.jsx)(t.code,{children:"miss"})," cache status.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.code,{children:"Cache-Control: no-store"})," will refrain from caching. You will always get the up-to-date response."]}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/cache"\n)\n'})}),"\n",(0,i.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// Initialize default config\napp.Use(cache.New())\n\n// Or extend your config for customization\napp.Use(cache.New(cache.Config{\n    Next: func(c *fiber.Ctx) bool {\n        return c.Query("noCache") == "true"\n    },\n    Expiration: 30 * time.Minute,\n    CacheControl: true,\n}))\n'})}),"\n",(0,i.jsx)(t.p,{children:"Or you can custom key and expire time like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'app.Use(cache.New(cache.Config{\n    ExpirationGenerator: func(c *fiber.Ctx, cfg *cache.Config) time.Duration {\n        newCacheTime, _ := strconv.Atoi(c.GetRespHeader("Cache-Time", "600"))\n        return time.Second * time.Duration(newCacheTime)\n    },\n    KeyGenerator: func(c *fiber.Ctx) string {\n\t\treturn utils.CopyString(c.Path())\n    },\n}))\n\napp.Get("/", func(c *fiber.Ctx) error {\n    c.Response().Header.Add("Cache-Time", "6000")\n    return c.SendString("hi")\n})\n'})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Next defines a function that is executed before creating the cache entry and can be used to execute the request without cache creation. If an entry already exists, it will be used. If you want to completely bypass the cache functionality in certain cases, you should use the ",(0,i.jsx)(t.a,{href:"/api/middleware/skip",children:"skip middleware"}),"."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Expiration"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"time.Duration"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Expiration is the time that a cached response will live."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"1 * time.Minute"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CacheHeader"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:'CacheHeader is the header on the response header that indicates the cache status, with the possible return values "hit," "miss," or "unreachable."'}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"X-Cache"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CacheControl"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CacheControl enables client-side caching if set to true."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KeyGenerator"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(*fiber.Ctx) string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Key allows you to generate custom keys."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(c *fiber.Ctx) string { return utils.CopyString(c.Path()) }"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ExpirationGenerator"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(*fiber.Ctx, *cache.Config) time.Duration"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ExpirationGenerator allows you to generate custom expiration keys based on the request."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Storage"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"fiber.Storage"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Store is used to store the state of the middleware."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"In-memory store"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Store (Deprecated)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"fiber.Storage"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Deprecated: Use Storage instead."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"In-memory store"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Key (Deprecated)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(*fiber.Ctx) string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Deprecated: Use KeyGenerator instead."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"StoreResponseHeaders"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"StoreResponseHeaders allows you to store additional headers generated by next middlewares & handler."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"MaxBytes"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"uint"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"MaxBytes is the maximum number of bytes of response bodies simultaneously stored in cache."}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"0"})," (No limit)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Methods"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Methods specifies the HTTP methods to cache."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string{fiber.MethodGet, fiber.MethodHead}"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n    Next:         nil,\n    Expiration:   1 * time.Minute,\n\tCacheHeader:  "X-Cache",\n    CacheControl: false,\n    KeyGenerator: func(c *fiber.Ctx) string {\n        return utils.CopyString(c.Path())\n    },\n    ExpirationGenerator:  nil,\n    StoreResponseHeaders: false,\n    Storage:              nil,\n    MaxBytes:             0,\n    Methods: []string{fiber.MethodGet, fiber.MethodHead},\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const l={},r=i.createContext(l);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);