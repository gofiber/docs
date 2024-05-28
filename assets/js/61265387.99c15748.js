"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[95843],{25808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=n(74848),a=n(28453);const r={id:"validation",title:"\ud83d\udd0e Validation",sidebar_position:5},o=void 0,d={id:"guide/validation",title:"\ud83d\udd0e Validation",description:"Validator package",source:"@site/docs/core/guide/validation.md",sourceDirName:"guide",slug:"/guide/validation",permalink:"/next/guide/validation",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/guide/validation.md",tags:[],version:"current",lastUpdatedAt:1716883824e3,sidebarPosition:5,frontMatter:{id:"validation",title:"\ud83d\udd0e Validation",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc1b Error Handling",permalink:"/next/guide/error-handling"},next:{title:"\u26a1 Make Fiber Faster",permalink:"/next/guide/faster-fiber"}},s={},l=[{value:"Validator package",id:"validator-package",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"validator-package",children:"Validator package"}),"\n",(0,i.jsxs)(t.p,{children:["Fiber provides the ",(0,i.jsx)(t.a,{href:"/next/api/bind#validation",children:"Bind"})," function to validate and bind ",(0,i.jsx)(t.a,{href:"/next/api/bind#binders",children:"request data"})," to a struct."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'\nimport "github.com/go-playground/validator/v10"\n\ntype structValidator struct {\n    validate *validator.Validate\n}\n\n// Validator needs to implement the Validate method\nfunc (v *structValidator) Validate(out any) error {\n    return v.validate.Struct(out)\n}\n\n// Setup your validator in the config\napp := fiber.New(fiber.Config{\n    StructValidator: &structValidator{validate: validator.New()},\n})\n\ntype User struct {\n  Name string `json:"name" form:"name" query:"name" validate:"required"`\n  Age  int    `json:"age" form:"age" query:"age" validate:"gte=0,lte=100"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n  user := new(User)\n  \n  // Works with all bind methods - Body, Query, Form, ...\n  if err := c.Bind().Body(user); err != nil { // <- here you receive the validation errors\n    return err\n  }\n  \n  return c.JSON(user)\n})\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var i=n(96540);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);