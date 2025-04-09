"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["73909"],{39183:function(e,a,n){n.r(a),n.d(a,{default:()=>c,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>s});var r=JSON.parse('{"id":"guide/validation","title":"\uD83D\uDD0E Validation","description":"Validator package","source":"@site/docs/core/guide/validation.md","sourceDirName":"guide","slug":"/guide/validation","permalink":"/next/guide/validation","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/guide/validation.md","tags":[],"version":"current","lastUpdatedAt":1744205860000,"sidebarPosition":5,"frontMatter":{"id":"validation","title":"\uD83D\uDD0E Validation","sidebar_position":5},"sidebar":"left_sidebar","previous":{"title":"\uD83D\uDC1B Error Handling","permalink":"/next/guide/error-handling"},"next":{"title":"\u26A1 Make Fiber Faster","permalink":"/next/guide/faster-fiber"}}'),t=n("85893"),i=n("50065");let o={id:"validation",title:"\uD83D\uDD0E Validation",sidebar_position:5},s=void 0,d={},l=[{value:"Validator package",id:"validator-package",level:2}];function u(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"validator-package",children:"Validator package"}),"\n",(0,t.jsxs)(a.p,{children:["Fiber provides the ",(0,t.jsx)(a.a,{href:"/next/api/bind#validation",children:"Bind"})," function to validate and bind ",(0,t.jsx)(a.a,{href:"/next/api/bind#binders",children:"request data"})," to a struct."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-go",metastring:'title="Basic Example"',children:'import "github.com/go-playground/validator/v10"\n\ntype structValidator struct {\n    validate *validator.Validate\n}\n\n// Validator needs to implement the Validate method\nfunc (v *structValidator) Validate(out any) error {\n    return v.validate.Struct(out)\n}\n\n// Setup your validator in the config\napp := fiber.New(fiber.Config{\n    StructValidator: &structValidator{validate: validator.New()},\n})\n\ntype User struct {\n    Name string `json:"name" form:"name" query:"name" validate:"required"`\n    Age  int    `json:"age" form:"age" query:"age" validate:"gte=0,lte=100"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    user := new(User)\n    \n    // Works with all bind methods - Body, Query, Form, ...\n    if err := c.Bind().Body(user); err != nil { // <- here you receive the validation errors\n      return err\n    }\n    \n    return c.JSON(user)\n})\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-go",metastring:'title="Advanced Validation Example"',children:'type User struct {\n    Name     string `json:"name" validate:"required,min=3,max=32"`\n    Email    string `json:"email" validate:"required,email"`\n    Age      int    `json:"age" validate:"gte=0,lte=100"`\n    Password string `json:"password" validate:"required,min=8"`\n    Website  string `json:"website" validate:"url"`\n}\n\n// Custom validation error messages\ntype UserWithCustomMessages struct {\n    Name     string `json:"name" validate:"required,min=3,max=32" message:"Name is required and must be between 3 and 32 characters"`\n    Email    string `json:"email" validate:"required,email" message:"Valid email is required"`\n    Age      int    `json:"age" validate:"gte=0,lte=100" message:"Age must be between 0 and 100"`\n}\n\napp.Post("/user", func(c fiber.Ctx) error {\n    user := new(User)\n    \n    if err := c.Bind().Body(user); err != nil {\n        // Handle validation errors\n        if validationErrors, ok := err.(validator.ValidationErrors); ok {\n            for _, e := range validationErrors {\n                // e.Field() - field name\n                // e.Tag() - validation tag\n                // e.Value() - invalid value\n                // e.Param() - validation parameter\n                return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{\n                    "field": e.Field(),\n                    "error": e.Error(),\n                })\n            }\n        }\n        return err\n    }\n    \n    return c.JSON(user)\n})\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-go",metastring:'title="Custom Validator Example"',children:'// Custom validator for password strength\ntype PasswordValidator struct {\n    validate *validator.Validate\n}\n\nfunc (v *PasswordValidator) Validate(out any) error {\n    if err := v.validate.Struct(out); err != nil {\n        return err\n    }\n    \n    // Custom password validation logic\n    if user, ok := out.(*User); ok {\n        if len(user.Password) < 8 {\n            return errors.New("password must be at least 8 characters")\n        }\n        // Add more password validation rules here\n    }\n    \n    return nil\n}\n\n// Usage\napp := fiber.New(fiber.Config{\n    StructValidator: &PasswordValidator{validate: validator.New()},\n})\n'})})]})}function c(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},50065:function(e,a,n){n.d(a,{Z:function(){return s},a:function(){return o}});var r=n(67294);let t={},i=r.createContext(t);function o(e){let a=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);