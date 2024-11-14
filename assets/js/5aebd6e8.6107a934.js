"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["43179"],{74505:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>c,assets:()=>o,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"guide/validating","title":"\uD83D\uDD0E Validating","description":"Validator package","source":"@site/versioned_docs/version-v1.x/guide/validating.md","sourceDirName":"guide","slug":"/guide/validating","permalink":"/v1.x/guide/validating","draft":false,"unlisted":false,"tags":[],"version":"v1.x","lastUpdatedAt":1731573495000,"sidebarPosition":4,"frontMatter":{"id":"validating","title":"\uD83D\uDD0E Validating","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDCDD Templates","permalink":"/v1.x/guide/templates"},"next":{"title":"\uD83D\uDC1B Error Handling","permalink":"/v1.x/guide/error-handling"}}'),a=r("85893"),i=r("50065");let l={id:"validating",title:"\uD83D\uDD0E Validating",sidebar_position:4},s=void 0,o={},d=[{value:"Validator package",id:"validator-package",level:2}];function u(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"validator-package",children:"Validator package"}),"\n",(0,a.jsxs)(n.p,{children:["Fiber can make ",(0,a.jsx)(n.em,{children:"great"})," use of the validator package to ensure correct validation of data to store."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/go-playground/validator",children:"Official validator Github page (Installation, use, examples..)."})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can find the detailed descriptions of the ",(0,a.jsx)(n.em,{children:"validations"})," used in the fields contained on the structs below:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://pkg.go.dev/github.com/go-playground/validator?tab=doc",children:"Detailed docs"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Validation Example"',children:'type Job struct{\n    Type          string `validate:"required,min=3,max=32"`\n    Salary        int    `validate:"required,number"`\n}\n\ntype User struct{\n    Name          string  `validate:"required,min=3,max=32"`\n    IsActive      bool    `validate:"required,eq=True|eq=False"`\n    Email         string  `validate:"required,email,min=6,max=32"`\n    Job           Job     `validate:"dive"`\n}\n\ntype ErrorResponse struct {\n    FailedField string\n    Tag         string\n    Value       string\n}\n\nfunc ValidateStruct(user User) []*ErrorResponse {\n    var errors []*ErrorResponse\n    validate = validator.New()\n    err := validate.Struct(user)\n    if err != nil {\n        for _, err := range err.(validator.ValidationErrors) {\n            var element ErrorResponse\n            element.FailedField = err.StructNamespace()\n            element.Tag = err.Tag()\n            element.Value = err.Param()\n            errors = append(errors, &element)\n        }\n    }\n    return errors\n}\n\nfunc AddUser(c *fiber.Ctx) {\n    //Connect to database\n    user := new(User)\n    if err := c.BodyParser(user); err != nil {\n        errors := ValidateStruct()\n    if errors != nil {\n        c.JSON(errors)\n        return\n    }\n    }\n    //Do something else here\n\n  //Return user\n    c.JSON(user)\n}\n\n// Running a test with the following curl commands\n\n// curl -X POST -H "Content-Type: application/json" --data "{\\"name\\":\\"john\\",\\"isactive\\":\\"True\\"}" http://localhost:8080/register/user\n\n// Results in \n\n// [{"FailedField":"User.Email","Tag":"required","Value":""},{"FailedField":"User.Job.Salary","Tag":"required","Value":""},{"FailedField":"User.Job.Type","Tag":"required","Value":""}]\u23CE\n'})})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return l}});var t=r(67294);let a={},i=t.createContext(a);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);