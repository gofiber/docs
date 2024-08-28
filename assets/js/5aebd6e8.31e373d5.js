"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[45393],{8702:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(74848),a=r(28453);const i={id:"validating",title:"\ud83d\udd0e Validating",sidebar_position:4},s=void 0,l={id:"guide/validating",title:"\ud83d\udd0e Validating",description:"Validator package",source:"@site/versioned_docs/version-v1.x/guide/validating.md",sourceDirName:"guide",slug:"/guide/validating",permalink:"/v1.x/guide/validating",draft:!1,unlisted:!1,tags:[],version:"v1.x",lastUpdatedAt:1724828437e3,sidebarPosition:4,frontMatter:{id:"validating",title:"\ud83d\udd0e Validating",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcdd Templates",permalink:"/v1.x/guide/templates"},next:{title:"\ud83d\udc1b Error Handling",permalink:"/v1.x/guide/error-handling"}},o={},d=[{value:"Validator package",id:"validator-package",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"validator-package",children:"Validator package"}),"\n",(0,t.jsxs)(n.p,{children:["Fiber can make ",(0,t.jsx)(n.em,{children:"great"})," use of the validator package to ensure correct validation of data to store."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/go-playground/validator",children:"Official validator Github page (Installation, use, examples..)."})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can find the detailed descriptions of the ",(0,t.jsx)(n.em,{children:"validations"})," used in the fields contained on the structs below:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/go-playground/validator?tab=doc",children:"Detailed docs"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Validation Example"',children:'type Job struct{\n    Type          string `validate:"required,min=3,max=32"`\n    Salary        int    `validate:"required,number"`\n}\n\ntype User struct{\n    Name          string  `validate:"required,min=3,max=32"`\n    IsActive      bool    `validate:"required,eq=True|eq=False"`\n    Email         string  `validate:"required,email,min=6,max=32"`\n    Job           Job     `validate:"dive"`\n}\n\ntype ErrorResponse struct {\n    FailedField string\n    Tag         string\n    Value       string\n}\n\nfunc ValidateStruct(user User) []*ErrorResponse {\n    var errors []*ErrorResponse\n    validate = validator.New()\n    err := validate.Struct(user)\n    if err != nil {\n        for _, err := range err.(validator.ValidationErrors) {\n            var element ErrorResponse\n            element.FailedField = err.StructNamespace()\n            element.Tag = err.Tag()\n            element.Value = err.Param()\n            errors = append(errors, &element)\n        }\n    }\n    return errors\n}\n\nfunc AddUser(c *fiber.Ctx) {\n    //Connect to database\n    user := new(User)\n    if err := c.BodyParser(user); err != nil {\n        errors := ValidateStruct()\n    if errors != nil {\n        c.JSON(errors)\n        return\n    }\n    }\n    //Do something else here\n\n  //Return user\n    c.JSON(user)\n}\n\n// Running a test with the following curl commands\n\n// curl -X POST -H "Content-Type: application/json" --data "{\\"name\\":\\"john\\",\\"isactive\\":\\"True\\"}" http://localhost:8080/register/user\n\n// Results in \n\n// [{"FailedField":"User.Email","Tag":"required","Value":""},{"FailedField":"User.Job.Salary","Tag":"required","Value":""},{"FailedField":"User.Job.Type","Tag":"required","Value":""}]\u23ce\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var t=r(96540);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);