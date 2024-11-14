"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["77766"],{72389:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>u,assets:()=>p,toc:()=>l,frontMatter:()=>o});var r=JSON.parse('{"id":"partials/routing/route-handlers","title":"Route Handlers","description":"Registers a route bound to a specific HTTP method.","source":"@site/versioned_docs/version-v2.x/partials/routing/handler.md","sourceDirName":"partials/routing","slug":"/partials/routing/route-handlers","permalink":"/partials/routing/route-handlers","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1731573495000,"frontMatter":{"id":"route-handlers","title":"Route Handlers"}}'),a=t("85893"),s=t("50065");let o={id:"route-handlers",title:"Route Handlers"},i=void 0,p={},l=[];function c(e){let n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Registers a route bound to a specific ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",children:"HTTP method"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Signatures"',children:"// HTTP methods\nfunc (app *App) Get(path string, handlers ...Handler) Router\nfunc (app *App) Head(path string, handlers ...Handler) Router\nfunc (app *App) Post(path string, handlers ...Handler) Router\nfunc (app *App) Put(path string, handlers ...Handler) Router\nfunc (app *App) Delete(path string, handlers ...Handler) Router\nfunc (app *App) Connect(path string, handlers ...Handler) Router\nfunc (app *App) Options(path string, handlers ...Handler) Router\nfunc (app *App) Trace(path string, handlers ...Handler) Router\nfunc (app *App) Patch(path string, handlers ...Handler) Router\n\n// Add allows you to specifiy a method as value\nfunc (app *App) Add(method, path string, handlers ...Handler) Router\n\n// All will register the route on all HTTP methods\n// Almost the same as app.Use but not bound to prefixes\nfunc (app *App) All(path string, handlers ...Handler) Router\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Simple GET handler\napp.Get("/api/list", func(c *fiber.Ctx) error {\n  return c.SendString("I\'m a GET request!")\n})\n\n// Simple POST handler\napp.Post("/api/register", func(c *fiber.Ctx) error {\n  return c.SendString("I\'m a POST request!")\n})\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Use"})," can be used for middleware packages and prefix catchers. These routes will only match the beginning of each path i.e. ",(0,a.jsx)(n.code,{children:"/john"})," will match ",(0,a.jsx)(n.code,{children:"/john/doe"}),", ",(0,a.jsx)(n.code,{children:"/johnnnnn"})," etc"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Use(args ...interface{}) Router\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Match any request\napp.Use(func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match request starting with /api\napp.Use("/api", func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match requests starting with /api or /home (multiple-prefix support)\napp.Use([]string{"/api", "/home"}, func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Attach multiple handlers \napp.Use("/api", func(c *fiber.Ctx) error {\n  c.Set("X-Custom-Header", random.String(32))\n    return c.Next()\n}, func(c *fiber.Ctx) error {\n    return c.Next()\n})\n'})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var r=t(67294);let a={},s=r.createContext(a);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);