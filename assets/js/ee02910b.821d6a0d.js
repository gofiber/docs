"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["11725"],{45193:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>s});var a=JSON.parse('{"id":"guide/validation","title":"\uD83D\uDD0E Validation","description":"Validator package","source":"@site/versioned_docs/version-v2.x/guide/validation.md","sourceDirName":"guide","slug":"/guide/validation","permalink":"/guide/validation","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1735889916000,"sidebarPosition":5,"frontMatter":{"id":"validation","title":"\uD83D\uDD0E Validation","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDC1B Error Handling","permalink":"/guide/error-handling"},"next":{"title":"\uD83C\uDFA3 Hooks","permalink":"/guide/hooks"}}'),t=r("85893"),i=r("50065");let s={id:"validation",title:"\uD83D\uDD0E Validation",sidebar_position:5},o=void 0,l={},d=[{value:"Validator package",id:"validator-package",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"validator-package",children:"Validator package"}),"\n",(0,t.jsxs)(n.p,{children:["Fiber can make ",(0,t.jsx)(n.em,{children:"great"})," use of the validator package to ensure correct validation of data to store."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/go-playground/validator",children:"Official validator Github page (Installation, use, examples..)."})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can find the detailed descriptions of the ",(0,t.jsx)(n.em,{children:"validations"})," used in the fields contained on the structs below:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/go-playground/validator?tab=doc",children:"Detailed docs"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Validation Example"',children:'package main\n\nimport (\n	"fmt"\n	"log"\n	"strings"\n\n	"github.com/go-playground/validator/v10"\n	"github.com/gofiber/fiber/v2"\n)\n\ntype (\n	User struct {\n		Name string `validate:"required,min=5,max=20"` // Required field, min 5 char long max 20\n		Age  int    `validate:"required,teener"`       // Required field, and client needs to implement our \'teener\' tag format which we\'ll see later\n	}\n\n	ErrorResponse struct {\n		Error       bool\n		FailedField string\n		Tag         string\n		Value       interface{}\n	}\n\n	XValidator struct {\n		validator *validator.Validate\n	}\n\n	GlobalErrorHandlerResp struct {\n		Success bool   `json:"success"`\n		Message string `json:"message"`\n	}\n)\n\n// This is the validator instance\n// for more information see: https://github.com/go-playground/validator\nvar validate = validator.New()\n\nfunc (v XValidator) Validate(data interface{}) []ErrorResponse {\n	validationErrors := []ErrorResponse{}\n\n	errs := validate.Struct(data)\n	if errs != nil {\n		for _, err := range errs.(validator.ValidationErrors) {\n			// In this case data object is actually holding the User struct\n			var elem ErrorResponse\n\n			elem.FailedField = err.Field() // Export struct field name\n			elem.Tag = err.Tag()           // Export struct tag\n			elem.Value = err.Value()       // Export field value\n			elem.Error = true\n\n			validationErrors = append(validationErrors, elem)\n		}\n	}\n\n	return validationErrors\n}\n\nfunc main() {\n	myValidator := &XValidator{\n		validator: validate,\n	}\n\n	app := fiber.New(fiber.Config{\n		// Global custom error handler\n		ErrorHandler: func(c *fiber.Ctx, err error) error {\n			return c.Status(fiber.StatusBadRequest).JSON(GlobalErrorHandlerResp{\n				Success: false,\n				Message: err.Error(),\n			})\n		},\n	})\n\n	// Custom struct validation tag format\n	myValidator.validator.RegisterValidation("teener", func(fl validator.FieldLevel) bool {\n		// User.Age needs to fit our needs, 12-18 years old.\n		return fl.Field().Int() >= 12 && fl.Field().Int() <= 18\n	})\n\n	app.Get("/", func(c *fiber.Ctx) error {\n		user := &User{\n			Name: c.Query("name"),\n			Age:  c.QueryInt("age"),\n		}\n\n		// Validation\n		if errs := myValidator.Validate(user); len(errs) > 0 && errs[0].Error {\n			errMsgs := make([]string, 0)\n\n			for _, err := range errs {\n				errMsgs = append(errMsgs, fmt.Sprintf(\n					"[%s]: \'%v\' | Needs to implement \'%s\'",\n					err.FailedField,\n					err.Value,\n					err.Tag,\n				))\n			}\n\n			return &fiber.Error{\n				Code:    fiber.ErrBadRequest.Code,\n				Message: strings.Join(errMsgs, " and "),\n			}\n		}\n\n		// Logic, validated with success\n		return c.SendString("Hello, World!")\n	})\n\n	log.Fatal(app.Listen(":3000"))\n}\n\n/**\nOUTPUT\n\n[1]\nRequest:\n\nGET http://127.0.0.1:3000/\n\nResponse:\n\n{"success":false,"message":"[Name]: \'\' | Needs to implement \'required\' and [Age]: \'0\' | Needs to implement \'required\'"}\n\n[2]\nRequest:\n\nGET http://127.0.0.1:3000/?name=efdal&age=9\n\nResponse:\n{"success":false,"message":"[Age]: \'9\' | Needs to implement \'teener\'"}\n\n[3]\nRequest:\n\nGET http://127.0.0.1:3000/?name=efdal&age=\n\nResponse:\n{"success":false,"message":"[Age]: \'0\' | Needs to implement \'required\'"}\n\n[4]\nRequest:\n\nGET http://127.0.0.1:3000/?name=efdal&age=18\n\nResponse:\nHello, World!\n\n**/\n\n'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return s}});var a=r(67294);let t={},i=a.createContext(t);function s(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);