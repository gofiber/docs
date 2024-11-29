"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["43420"],{53929:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>d,assets:()=>l,toc:()=>u,frontMatter:()=>s});var t=JSON.parse('{"id":"guide/utils","title":"\uD83E\uDDF0 Utils","description":"Generics","source":"@site/docs/core/guide/utils.md","sourceDirName":"guide","slug":"/guide/utils","permalink":"/next/guide/utils","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/guide/utils.md","tags":[],"version":"current","lastUpdatedAt":1732893234000,"sidebarPosition":8,"frontMatter":{"id":"utils","title":"\uD83E\uDDF0 Utils","sidebar_position":8,"toc_max_heading_level":4},"sidebar":"left_sidebar","previous":{"title":"\u26A1 Make Fiber Faster","permalink":"/next/guide/faster-fiber"},"next":{"title":"\uD83E\uDDE9 Extra","permalink":"/next/category/-extra"}}'),a=r("85893"),i=r("50065");let s={id:"utils",title:"\uD83E\uDDF0 Utils",sidebar_position:8,toc_max_heading_level:4},c=void 0,l={},u=[{value:"Generics",id:"generics",level:2},{value:"Convert",id:"convert",level:3},{value:"GetReqHeader",id:"getreqheader",level:3},{value:"Locals",id:"locals",level:3},{value:"Params",id:"params",level:3},{value:"Query",id:"query",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"generics",children:"Generics"}),"\n",(0,a.jsx)(n.h3,{id:"convert",children:"Convert"}),"\n",(0,a.jsx)(n.p,{children:"Converts a string value to a specified type, handling errors and optional default values.\nThis function simplifies the conversion process by encapsulating error handling and the management of default values, making your code cleaner and more consistent."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Convert[T any](value string, convertor func(string) (T, error), defaultValue ...T) (*T, error)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// GET http://example.com/id/bb70ab33-d455-4a03-8d78-d3c1dacae9ff\napp.Get("/id/:id", func(c fiber.Ctx) error {\n   fiber.Convert(c.Params("id"), uuid.Parse)                   // UUID(bb70ab33-d455-4a03-8d78-d3c1dacae9ff), nil\n\n\n// GET http://example.com/search?id=65f6f54221fb90e6a6b76db7\napp.Get("/search", func(c fiber.Ctx) error) {\n    fiber.Convert(c.Query("id"), mongo.ParseObjectID)           // objectid(65f6f54221fb90e6a6b76db7), nil\n    fiber.Convert(c.Query("id"), uuid.Parse)                    // uuid.Nil, error(cannot parse given uuid)\n    fiber.Convert(c.Query("id"), uuid.Parse, mongo.NewObjectID) // new object id generated and return nil as error.\n}\n\n  // ...\n})\n'})}),"\n",(0,a.jsx)(n.h3,{id:"getreqheader",children:"GetReqHeader"}),"\n",(0,a.jsx)(n.p,{children:"GetReqHeader function utilizing Go's generics feature.\nThis function allows for retrieving HTTP request headers with a more specific data type."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func GetReqHeader[V any](c Ctx, key string, defaultValue ...V) V\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/search", func(c fiber.Ctx) error {\n    // curl -X GET http://example.com/search -H "X-Request-ID: 12345" -H "X-Request-Name: John"\n    GetReqHeader[int](c, "X-Request-ID")               // => returns 12345 as integer.\n    GetReqHeader[string](c, "X-Request-Name")          // => returns "John" as string.\n    GetReqHeader[string](c, "unknownParam", "default") // => returns "default" as string.\n    // ...\n})\n'})}),"\n",(0,a.jsx)(n.h3,{id:"locals",children:"Locals"}),"\n",(0,a.jsx)(n.p,{children:"Locals function utilizing Go's generics feature.\nThis function allows for manipulating and retrieving local values within a request context with a more specific data type."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Locals[V any](c Ctx, key any, value ...V) V\n\n// get local value\nfunc Locals[V any](c Ctx, key any) V\n// set local value\nfunc Locals[V any](c Ctx, key any, value ...V) V\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app.Use("/user/:user/:id", func(c fiber.Ctx) error {\n    // set local values\n    fiber.Locals[string](c, "user", "john")\n    fiber.Locals[int](c, "id", 25)\n    // ...\n    \n    return c.Next()\n})\n\n\napp.Get("/user/*", func(c fiber.Ctx) error {\n    // get local values\n    name := fiber.Locals[string](c, "user") // john\n    age := fiber.Locals[int](c, "id")       // 25\n    // ...\n})\n'})}),"\n",(0,a.jsx)(n.h3,{id:"params",children:"Params"}),"\n",(0,a.jsx)(n.p,{children:"Params function utilizing Go's generics feature.\nThis function allows for retrieving route parameters with a more specific data type."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Params[V any](c Ctx, key string, defaultValue ...V) V\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/user/:user/:id", func(c fiber.Ctx) error {\n    // http://example.com/user/john/25\n    Params[int](c, "id")               // => returns 25 as integer.\n    Params[int](c, "unknownParam", 99) // => returns the default 99 as integer.\n    // ...\n    return c.SendString("Hello, " + fiber.Params[string](c, "user"))\n})\n'})}),"\n",(0,a.jsx)(n.h3,{id:"query",children:"Query"}),"\n",(0,a.jsx)(n.p,{children:"Query function utilizing Go's generics feature.\nThis function allows for retrieving query parameters with a more specific data type."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func Query[V any](c Ctx, key string, defaultValue ...V) V\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/search", func(c fiber.Ctx) error {\n    // http://example.com/search?name=john&age=25\n    Query[string](c, "name")                    // => returns "john"\n    Query[int](c, "age")                        // => returns 25 as integer.\n    Query[string](c, "unknownParam", "default") // => returns "default" as string.\n    // ...\n})\n'})})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return s}});var t=r(67294);let a={},i=t.createContext(a);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);