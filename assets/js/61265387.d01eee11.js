"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["73909"],{76575:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>c,assets:()=>l,toc:()=>s,frontMatter:()=>o});var i=JSON.parse('{"id":"guide/validation","title":"\uD83D\uDD0E Validation","description":"Validator package","source":"@site/docs/core/guide/validation.md","sourceDirName":"guide","slug":"/guide/validation","permalink":"/next/guide/validation","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/guide/validation.md","tags":[],"version":"current","lastUpdatedAt":1732702215000,"sidebarPosition":5,"frontMatter":{"id":"validation","title":"\uD83D\uDD0E Validation","sidebar_position":5},"sidebar":"left_sidebar","previous":{"title":"\uD83D\uDC1B Error Handling","permalink":"/next/guide/error-handling"},"next":{"title":"\u26A1 Make Fiber Faster","permalink":"/next/guide/faster-fiber"}}'),a=n("85893"),r=n("50065");let o={id:"validation",title:"\uD83D\uDD0E Validation",sidebar_position:5},d=void 0,l={},s=[{value:"Validator package",id:"validator-package",level:2}];function u(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"validator-package",children:"Validator package"}),"\n",(0,a.jsxs)(t.p,{children:["Fiber provides the ",(0,a.jsx)(t.a,{href:"/next/api/bind#validation",children:"Bind"})," function to validate and bind ",(0,a.jsx)(t.a,{href:"/next/api/bind#binders",children:"request data"})," to a struct."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'\nimport "github.com/go-playground/validator/v10"\n\ntype structValidator struct {\n    validate *validator.Validate\n}\n\n// Validator needs to implement the Validate method\nfunc (v *structValidator) Validate(out any) error {\n    return v.validate.Struct(out)\n}\n\n// Setup your validator in the config\napp := fiber.New(fiber.Config{\n    StructValidator: &structValidator{validate: validator.New()},\n})\n\ntype User struct {\n    Name string `json:"name" form:"name" query:"name" validate:"required"`\n    Age  int    `json:"age" form:"age" query:"age" validate:"gte=0,lte=100"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    user := new(User)\n    \n    // Works with all bind methods - Body, Query, Form, ...\n    if err := c.Bind().Body(user); err != nil { // <- here you receive the validation errors\n      return err\n    }\n    \n    return c.JSON(user)\n})\n'})})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var i=n(67294);let a={},r=i.createContext(a);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);