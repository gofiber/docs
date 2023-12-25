"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[13172],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>g});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return r?t.createElement(g,o(o({ref:n},u),{},{components:r})):t.createElement(g,o({ref:n},u))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70818:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(87462),a=(r(67294),r(3905));const i={id:"validation",title:"\ud83d\udd0e Validation",sidebar_position:5},o=void 0,l={unversionedId:"guide/validation",id:"version-v2.x/guide/validation",title:"\ud83d\udd0e Validation",description:"Validator package",source:"@site/versioned_docs/version-v2.x/guide/validation.md",sourceDirName:"guide",slug:"/guide/validation",permalink:"/guide/validation",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1703512367,formattedLastUpdatedAt:"Dec 25, 2023",sidebarPosition:5,frontMatter:{id:"validation",title:"\ud83d\udd0e Validation",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc1b Error Handling",permalink:"/guide/error-handling"},next:{title:"\ud83c\udfa3 Hooks",permalink:"/guide/hooks"}},s={},d=[{value:"Validator package",id:"validator-package",level:2}],u={toc:d},c="wrapper";function p(e){let{components:n,...r}=e;return(0,a.kt)(c,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"validator-package"},"Validator package"),(0,a.kt)("p",null,"Fiber can make ",(0,a.kt)("em",{parentName:"p"},"great")," use of the validator package to ensure correct validation of data to store."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-playground/validator"},"Official validator Github page ","(","Installation, use, examples..",")","."))),(0,a.kt)("p",null,"You can find the detailed descriptions of the ",(0,a.kt)("em",{parentName:"p"},"validations")," used in the fields contained on the structs below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/go-playground/validator?tab=doc"},"Detailed docs"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Validation Example"',title:'"Validation','Example"':!0},'package main\n\nimport (\n    "fmt"\n    "log"\n    "strings"\n\n    "github.com/go-playground/validator/v10"\n    "github.com/gofiber/fiber/v2"\n)\n\ntype (\n    User struct {\n        Name string `validate:"required,min=5,max=20"` // Required field, min 5 char long max 20\n        Age  int    `validate:"required,teener"`       // Required field, and client needs to implement our \'teener\' tag format which we\'ll see later\n    }\n\n    ErrorResponse struct {\n        Error       bool\n        FailedField string\n        Tag         string\n        Value       interface{}\n    }\n\n    XValidator struct {\n        validator *validator.Validate\n    }\n\n    GlobalErrorHandlerResp struct {\n        Success bool   `json:"success"`\n        Message string `json:"message"`\n    }\n)\n\n// This is the validator instance\n// for more information see: https://github.com/go-playground/validator\nvar validate = validator.New()\n\nfunc (v XValidator) Validate(data interface{}) []ErrorResponse {\n    validationErrors := []ErrorResponse{}\n\n    errs := validate.Struct(data)\n    if errs != nil {\n        for _, err := range errs.(validator.ValidationErrors) {\n            // In this case data object is actually holding the User struct\n            var elem ErrorResponse\n\n            elem.FailedField = err.Field() // Export struct field name\n            elem.Tag = err.Tag()           // Export struct tag\n            elem.Value = err.Value()       // Export field value\n            elem.Error = true\n\n            validationErrors = append(validationErrors, elem)\n        }\n    }\n\n    return validationErrors\n}\n\nfunc main() {\n    myValidator := &XValidator{\n        validator: validate,\n    }\n\n    app := fiber.New(fiber.Config{\n        // Global custom error handler\n        ErrorHandler: func(c *fiber.Ctx, err error) error {\n            return c.Status(fiber.StatusBadRequest).JSON(GlobalErrorHandlerResp{\n                Success: false,\n                Message: err.Error(),\n            })\n        },\n    })\n\n    // Custom struct validation tag format\n    myValidator.validator.RegisterValidation("teener", func(fl validator.FieldLevel) bool {\n        // User.Age needs to fit our needs, 12-18 years old.\n        return fl.Field().Int() >= 12 && fl.Field().Int() <= 18\n    })\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        user := &User{\n            Name: c.Query("name"),\n            Age:  c.QueryInt("age"),\n        }\n\n        // Validation\n        if errs := myValidator.Validate(user); len(errs) > 0 && errs[0].Error {\n            errMsgs := make([]string, 0)\n\n            for _, err := range errs {\n                errMsgs = append(errMsgs, fmt.Sprintf(\n                    "[%s]: \'%v\' | Needs to implement \'%s\'",\n                    err.FailedField,\n                    err.Value,\n                    err.Tag,\n                ))\n            }\n\n            return &fiber.Error{\n                Code:    fiber.ErrBadRequest.Code,\n                Message: strings.Join(errMsgs, " and "),\n            }\n        }\n\n        // Logic, validated with success\n        return c.SendString("Hello, World!")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n\n/**\nOUTPUT\n\n[1]\nRequest:\n\nGET http://127.0.0.1:3000/\n\nResponse:\n\n{"success":false,"message":"[Name]: \'\' | Needs to implement \'required\' and [Age]: \'0\' | Needs to implement \'required\'"}\n\n[2]\nRequest:\n\nGET http://127.0.0.1:3000/?name=efdal&age=9\n\nResponse:\n{"success":false,"message":"[Age]: \'9\' | Needs to implement \'teener\'"}\n\n[3]\nRequest:\n\nGET http://127.0.0.1:3000/?name=efdal&age=\n\nResponse:\n{"success":false,"message":"[Age]: \'0\' | Needs to implement \'required\'"}\n\n[4]\nRequest:\n\nGET http://127.0.0.1:3000/?name=efdal&age=18\n\nResponse:\nHello, World!\n\n**/\n\n')))}p.isMDXComponent=!0}}]);