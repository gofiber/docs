"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["87938"],{34855:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>p,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"partials/routing/route-handlers","title":"Route Handlers","description":"Registers a route bound to a specific HTTP method.","source":"@site/docs/core/partials/routing/handler.md","sourceDirName":"partials/routing","slug":"/partials/routing/route-handlers","permalink":"/next/partials/routing/route-handlers","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/partials/routing/handler.md","tags":[],"version":"current","lastUpdatedAt":1738589498000,"frontMatter":{"id":"route-handlers","title":"Route Handlers"}}'),a=r("85893"),s=r("50065"),i=r("2120");let l={id:"route-handlers",title:"Route Handlers"},d=void 0,p={},o=[];function c(e){let n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Registers a route bound to a specific ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",children:"HTTP method"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Signatures"',children:"// HTTP methods\nfunc (app *App) Get(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Head(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Post(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Put(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Delete(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Connect(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Options(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Trace(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Patch(path string, handler Handler, middlewares ...Handler) Router\n\n// Add allows you to specify a method as value\nfunc (app *App) Add(method, path string, handler Handler, middlewares ...Handler) Router\n\n// All will register the route on all HTTP methods\n// Almost the same as app.Use but not bound to prefixes\nfunc (app *App) All(path string, handler Handler, middlewares ...Handler) Router\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Simple GET handler\napp.Get("/api/list", func(c fiber.Ctx) error {\n    return c.SendString("I\'m a GET request!")\n})\n\n// Simple POST handler\napp.Post("/api/register", func(c fiber.Ctx) error {\n    return c.SendString("I\'m a POST request!")\n})\n'})}),"\n",(0,a.jsx)(i.Z,{id:"use",children:(0,a.jsx)(n.strong,{children:"Use"})}),"\n",(0,a.jsxs)(n.p,{children:["Can be used for middleware packages and prefix catchers. These routes will only match the beginning of each path i.e. ",(0,a.jsx)(n.code,{children:"/john"})," will match ",(0,a.jsx)(n.code,{children:"/john/doe"}),", ",(0,a.jsx)(n.code,{children:"/johnnnnn"})," etc"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Use(args ...any) Router\n\n// Different usage variations\nfunc (app *App) Use(handler Handler, middlewares ...Handler) Router\nfunc (app *App) Use(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Use(paths []string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Use(path string, app *App) Router\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Match any request\napp.Use(func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match request starting with /api\napp.Use("/api", func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match requests starting with /api or /home (multiple-prefix support)\napp.Use([]string{"/api", "/home"}, func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Attach multiple handlers \napp.Use("/api", func(c fiber.Ctx) error {\n    c.Set("X-Custom-Header", random.String(32))\n    return c.Next()\n}, func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Mount a sub-app\napp.Use("/api", api)\n'})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},2120:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(85893);r(67294);var a=r(83012),s=r(41065);function i(e){let{children:n,id:r}=e;return(0,s.Z)().collectAnchor(r),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{id:r,className:"reference anchor",children:[n,(0,t.jsx)(a.Z,{to:"#"+r,className:"hash-link"})]})})}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var t=r(67294);let a={},s=t.createContext(a);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);