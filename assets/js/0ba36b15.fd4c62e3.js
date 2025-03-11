"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["46496"],{60106:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"api/bind","title":"\uD83D\uDCCE Bind","description":"Binds the request and response items to a struct.","source":"@site/docs/core/api/bind.md","sourceDirName":"api","slug":"/api/bind","permalink":"/next/api/bind","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/api/bind.md","tags":[],"version":"current","lastUpdatedAt":1741678803000,"sidebarPosition":4,"frontMatter":{"id":"bind","title":"\uD83D\uDCCE Bind","description":"Binds the request and response items to a struct.","sidebar_position":4,"toc_max_heading_level":4},"sidebar":"left_sidebar","previous":{"title":"\uD83E\uDDE0 Ctx","permalink":"/next/api/ctx"},"next":{"title":"\uD83D\uDD04 Redirect","permalink":"/next/api/redirect"}}'),s=r("85893"),i=r("50065");let o={id:"bind",title:"\uD83D\uDCCE Bind",description:"Binds the request and response items to a struct.",sidebar_position:4,toc_max_heading_level:4},a=void 0,l={},d=[{value:"Binders",id:"binders",level:2},{value:"Body",id:"body",level:3},{value:"Form",id:"form",level:3},{value:"JSON",id:"json",level:3},{value:"XML",id:"xml",level:3},{value:"CBOR",id:"cbor",level:3},{value:"Cookie",id:"cookie",level:3},{value:"Header",id:"header",level:3},{value:"Query",id:"query",level:3},{value:"RespHeader",id:"respheader",level:3},{value:"URI",id:"uri",level:3},{value:"Custom",id:"custom",level:2},{value:"Options",id:"options",level:2},{value:"WithAutoHandling",id:"withautohandling",level:3},{value:"WithoutAutoHandling",id:"withoutautohandling",level:3},{value:"SetParserDecoder",id:"setparserdecoder",level:2},{value:"Validation",id:"validation",level:2},{value:"Setup Your Validator in the Config",id:"setup-your-validator-in-the-config",level:3},{value:"Usage of Validation in Binding Methods",id:"usage-of-validation-in-binding-methods",level:3},{value:"Default Fields",id:"default-fields",level:2}];function c(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Bindings are used to parse the request/response body, query parameters, cookies, and much more into a struct."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["All binder returned values are only valid within the handler. Do not store any references.",(0,s.jsx)(n.br,{}),"\n","Make copies or use the ",(0,s.jsx)(n.a,{href:"/next/api/ctx",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Immutable"})})})," setting instead. ",(0,s.jsx)(n.a,{href:"../#zero-allocation",children:"Read more..."})]})}),"\n",(0,s.jsx)(n.h2,{id:"binders",children:"Binders"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#body",children:"Body"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#form",children:"Form"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#json",children:"JSON"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#xml",children:"XML"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#cbor",children:"CBOR"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#cookie",children:"Cookie"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#header",children:"Header"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#query",children:"Query"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#respheader",children:"RespHeader"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#uri",children:"URI"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"Body"}),"\n",(0,s.jsx)(n.p,{children:"Binds the request body to a struct."}),"\n",(0,s.jsxs)(n.p,{children:["It is important to specify the correct struct tag based on the content type to be parsed. For example, if you want to parse a JSON body with a field called ",(0,s.jsx)(n.code,{children:"Pass"}),", you would use a struct field with ",(0,s.jsx)(n.code,{children:'json:"pass"'}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Content-Type"}),(0,s.jsx)(n.th,{children:"Struct Tag"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"application/x-www-form-urlencoded"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"form"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"multipart/form-data"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"form"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"application/json"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"json"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"application/xml"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"xml"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"text/xml"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"xml"})})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Body(out any) error\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'type Person struct {\n    Name string `json:"name" xml:"name" form:"name"`\n    Pass string `json:"pass" xml:"pass" form:"pass"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().Body(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name) // john\n    log.Println(p.Pass) // doe\n    \n    // ...\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run tests with the following ",(0,s.jsx)(n.code,{children:"curl"})," commands:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# JSON\ncurl -X POST -H "Content-Type: application/json" --data "{\\"name\\":\\"john\\",\\"pass\\":\\"doe\\"}" localhost:3000\n\n# XML\ncurl -X POST -H "Content-Type: application/xml" --data "<login><name>john</name><pass>doe</pass></login>" localhost:3000\n\n# Form URL-Encoded\ncurl -X POST -H "Content-Type: application/x-www-form-urlencoded" --data "name=john&pass=doe" localhost:3000\n\n# Multipart Form\ncurl -X POST -F name=john -F pass=doe http://localhost:3000\n'})}),"\n",(0,s.jsx)(n.h3,{id:"form",children:"Form"}),"\n",(0,s.jsx)(n.p,{children:"Binds the request or multipart form body data to a struct."}),"\n",(0,s.jsxs)(n.p,{children:["It is important to specify the correct struct tag based on the content type to be parsed. For example, if you want to parse a form body with a field called ",(0,s.jsx)(n.code,{children:"Pass"}),", you would use a struct field with ",(0,s.jsx)(n.code,{children:'form:"pass"'}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Form(out any) error\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'type Person struct {\n    Name string `form:"name"`\n    Pass string `form:"pass"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().Form(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name) // john\n    log.Println(p.Pass) // doe\n    \n    // ...\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run tests with the following ",(0,s.jsx)(n.code,{children:"curl"})," commands for both ",(0,s.jsx)(n.code,{children:"application/x-www-form-urlencoded"})," and ",(0,s.jsx)(n.code,{children:"multipart/form-data"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/x-www-form-urlencoded" --data "name=john&pass=doe" localhost:3000\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: multipart/form-data" -F "name=john" -F "pass=doe" localhost:3000\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["If you need to bind multipart file, you can use ",(0,s.jsx)(n.code,{children:"*multipart.FileHeader"}),", ",(0,s.jsx)(n.code,{children:"*[]*multipart.FileHeader"})," or ",(0,s.jsx)(n.code,{children:"[]*multipart.FileHeader"})," as a field type."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'type Person struct {\n    Name string                `form:"name"`\n    Pass string                `form:"pass"`\n    Avatar *multipart.FileHeader `form:"avatar"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().Form(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name) // john\n    log.Println(p.Pass) // doe\n    log.Println(p.Avatar.Filename) // file.txt\n    \n    // ...\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run tests with the following ",(0,s.jsx)(n.code,{children:"curl"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: multipart/form-data" -F "name=john" -F "pass=doe" -F \'avatar=@filename\' localhost:3000\n'})}),"\n",(0,s.jsx)(n.h3,{id:"json",children:"JSON"}),"\n",(0,s.jsx)(n.p,{children:"Binds the request JSON body to a struct."}),"\n",(0,s.jsxs)(n.p,{children:["It is important to specify the correct struct tag based on the content type to be parsed. For example, if you want to parse a JSON body with a field called ",(0,s.jsx)(n.code,{children:"Pass"}),", you would use a struct field with ",(0,s.jsx)(n.code,{children:'json:"pass"'}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) JSON(out any) error\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'type Person struct {\n    Name string `json:"name"`\n    Pass string `json:"pass"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().JSON(p); err != nil {\n        return err\n    }\n\n    log.Println(p.Name) // john\n    log.Println(p.Pass) // doe\n    \n    // ...\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run tests with the following ",(0,s.jsx)(n.code,{children:"curl"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data "{\\"name\\":\\"john\\",\\"pass\\":\\"doe\\"}" localhost:3000\n'})}),"\n",(0,s.jsx)(n.h3,{id:"xml",children:"XML"}),"\n",(0,s.jsx)(n.p,{children:"Binds the request XML body to a struct."}),"\n",(0,s.jsxs)(n.p,{children:["It is important to specify the correct struct tag based on the content type to be parsed. For example, if you want to parse an XML body with a field called ",(0,s.jsx)(n.code,{children:"Pass"}),", you would use a struct field with ",(0,s.jsx)(n.code,{children:'xml:"pass"'}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) XML(out any) error\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// Field names should start with an uppercase letter\ntype Person struct {\n    Name string `xml:"name"`\n    Pass string `xml:"pass"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().XML(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name) // john\n    log.Println(p.Pass) // doe\n    \n    // ...\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run tests with the following ",(0,s.jsx)(n.code,{children:"curl"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/xml" --data "<login><name>john</name><pass>doe</pass></login>" localhost:3000\n'})}),"\n",(0,s.jsx)(n.h3,{id:"cbor",children:"CBOR"}),"\n",(0,s.jsx)(n.p,{children:"Binds the request CBOR body to a struct."}),"\n",(0,s.jsxs)(n.p,{children:["It is important to specify the correct struct tag based on the content type to be parsed. For example, if you want to parse a CBOR body with a field called ",(0,s.jsx)(n.code,{children:"Pass"}),", you would use a struct field with ",(0,s.jsx)(n.code,{children:'cbor:"pass"'}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) CBOR(out any) error\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// Field names should start with an uppercase letter\ntype Person struct {\n    Name string `cbor:"name"`\n    Pass string `cbor:"pass"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().CBOR(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name) // john\n    log.Println(p.Pass) // doe\n    \n    // ...\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run tests with the following ",(0,s.jsx)(n.code,{children:"curl"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/cbor" --data "\\xa2dnamedjohndpasscdoe" localhost:3000\n'})}),"\n",(0,s.jsx)(n.h3,{id:"cookie",children:"Cookie"}),"\n",(0,s.jsxs)(n.p,{children:["This method is similar to ",(0,s.jsx)(n.a,{href:"#body",children:"Body Binding"}),", but for cookie parameters.",(0,s.jsx)(n.br,{}),"\n","It is important to use the struct tag ",(0,s.jsx)(n.code,{children:"cookie"}),". For example, if you want to parse a cookie with a field called ",(0,s.jsx)(n.code,{children:"Age"}),", you would use a struct field with ",(0,s.jsx)(n.code,{children:'cookie:"age"'}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Cookie(out any) error\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'type Person struct {\n    Name string `cookie:"name"`\n    Age  int    `cookie:"age"`\n    Job  bool   `cookie:"job"`\n}\n\napp.Get("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().Cookie(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name)  // Joseph\n    log.Println(p.Age)   // 23\n    log.Println(p.Job)   // true\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run tests with the following ",(0,s.jsx)(n.code,{children:"curl"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl --cookie "name=Joseph; age=23; job=true" http://localhost:8000/\n'})}),"\n",(0,s.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,s.jsxs)(n.p,{children:["This method is similar to ",(0,s.jsx)(n.a,{href:"#body",children:"Body Binding"}),", but for request headers.",(0,s.jsx)(n.br,{}),"\n","It is important to use the struct tag ",(0,s.jsx)(n.code,{children:"header"}),". For example, if you want to parse a request header with a field called ",(0,s.jsx)(n.code,{children:"Pass"}),", you would use a struct field with ",(0,s.jsx)(n.code,{children:'header:"pass"'}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Header(out any) error\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'type Person struct {\n    Name     string   `header:"name"`\n    Pass     string   `header:"pass"`\n    Products []string `header:"products"`\n}\n\napp.Get("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().Header(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name)     // john\n    log.Println(p.Pass)     // doe\n    log.Println(p.Products) // [shoe hat]\n    \n    // ...\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run tests with the following ",(0,s.jsx)(n.code,{children:"curl"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl "http://localhost:3000/" -H "name: john" -H "pass: doe" -H "products: shoe,hat"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"query",children:"Query"}),"\n",(0,s.jsxs)(n.p,{children:["This method is similar to ",(0,s.jsx)(n.a,{href:"#body",children:"Body Binding"}),", but for query parameters.",(0,s.jsx)(n.br,{}),"\n","It is important to use the struct tag ",(0,s.jsx)(n.code,{children:"query"}),". For example, if you want to parse a query parameter with a field called ",(0,s.jsx)(n.code,{children:"Pass"}),", you would use a struct field with ",(0,s.jsx)(n.code,{children:'query:"pass"'}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Query(out any) error\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'type Person struct {\n    Name     string   `query:"name"`\n    Pass     string   `query:"pass"`\n    Products []string `query:"products"`\n}\n\napp.Get("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().Query(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name)     // john\n    log.Println(p.Pass)     // doe\n    // Depending on fiber.Config{EnableSplittingOnParsers: false} - default\n    log.Println(p.Products) // ["shoe,hat"]\n    // With fiber.Config{EnableSplittingOnParsers: true}\n    // log.Println(p.Products) // ["shoe", "hat"]\n    \n    // ...\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run tests with the following ",(0,s.jsx)(n.code,{children:"curl"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl "http://localhost:3000/?name=john&pass=doe&products=shoe,hat"\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["For more parser settings, please refer to ",(0,s.jsx)(n.a,{href:"/next/api/fiber#enablesplittingonparsers",children:"Config"})]})}),"\n",(0,s.jsx)(n.h3,{id:"respheader",children:"RespHeader"}),"\n",(0,s.jsxs)(n.p,{children:["This method is similar to ",(0,s.jsx)(n.a,{href:"#body",children:"Body Binding"}),", but for response headers.\nIt is important to use the struct tag ",(0,s.jsx)(n.code,{children:"respHeader"}),". For example, if you want to parse a response header with a field called ",(0,s.jsx)(n.code,{children:"Pass"}),", you would use a struct field with ",(0,s.jsx)(n.code,{children:'respHeader:"pass"'}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) RespHeader(out any) error\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'type Person struct {\n    Name     string   `respHeader:"name"`\n    Pass     string   `respHeader:"pass"`\n    Products []string `respHeader:"products"`\n}\n\napp.Get("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().RespHeader(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name)     // john\n    log.Println(p.Pass)     // doe\n    log.Println(p.Products) // [shoe hat]\n    \n    // ...\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run tests with the following ",(0,s.jsx)(n.code,{children:"curl"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl "http://localhost:3000/" -H "name: john" -H "pass: doe" -H "products: shoe,hat"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"uri",children:"URI"}),"\n",(0,s.jsxs)(n.p,{children:["This method is similar to ",(0,s.jsx)(n.a,{href:"#body",children:"Body Binding"}),", but for path parameters.",(0,s.jsx)(n.br,{}),"\n","It is important to use the struct tag ",(0,s.jsx)(n.code,{children:"uri"}),". For example, if you want to parse a path parameter with a field called ",(0,s.jsx)(n.code,{children:"Pass"}),", you would use a struct field with ",(0,s.jsx)(n.code,{children:'uri:"pass"'}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) URI(out any) error\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// GET http://example.com/user/111\napp.Get("/user/:id", func(c fiber.Ctx) error {\n    param := struct {\n        ID uint `uri:"id"`\n    }{}\n    \n    if err := c.Bind().URI(&param); err != nil {\n        return err\n    }\n    \n    // ...\n    return c.SendString(fmt.Sprintf("User ID: %d", param.ID))\n})\n'})}),"\n",(0,s.jsx)(n.h2,{id:"custom",children:"Custom"}),"\n",(0,s.jsx)(n.p,{children:"To use custom binders, you have to use this method."}),"\n",(0,s.jsxs)(n.p,{children:["You can register them using the ",(0,s.jsx)(n.a,{href:"/next/api/app#registercustombinder",children:"RegisterCustomBinder"})," method of the Fiber instance."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Custom(name string, dest any) error\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app := fiber.New()\n\n// My custom binder\ntype customBinder struct{}\n\nfunc (cb *customBinder) Name() string {\n    return "custom"\n}\n\nfunc (cb *customBinder) MIMETypes() []string {\n    return []string{"application/yaml"}\n}\n\nfunc (cb *customBinder) Parse(c fiber.Ctx, out any) error {\n    // parse YAML body\n    return yaml.Unmarshal(c.Body(), out)\n}\n\n// Register custom binder\napp.RegisterCustomBinder(&customBinder{})\n\ntype User struct {\n    Name string `yaml:"name"`\n}\n\n// curl -X POST http://localhost:3000/custom -H "Content-Type: application/yaml" -d "name: John"\napp.Post("/custom", func(c fiber.Ctx) error {\n    var user User\n    // Use Custom binder by name\n    if err := c.Bind().Custom("custom", &user); err != nil {\n        return err\n    }\n    return c.JSON(user)\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Internally, custom binders are also used in the ",(0,s.jsx)(n.a,{href:"#body",children:"Body"})," method.",(0,s.jsx)(n.br,{}),"\n","The ",(0,s.jsx)(n.code,{children:"MIMETypes"})," method is used to check if the custom binder should be used for the given content type."]}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.p,{children:"For more control over error handling, you can use the following methods."}),"\n",(0,s.jsx)(n.h3,{id:"withautohandling",children:"WithAutoHandling"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to handle binder errors automatically, you can use ",(0,s.jsx)(n.code,{children:"WithAutoHandling"}),".",(0,s.jsx)(n.br,{}),"\n","If there's an error, it will return the error and set HTTP status to ",(0,s.jsx)(n.code,{children:"400 Bad Request"}),".\nThis function does NOT panic therefor you must still return on error explicitly"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) WithAutoHandling() *Bind\n"})}),"\n",(0,s.jsx)(n.h3,{id:"withoutautohandling",children:"WithoutAutoHandling"}),"\n",(0,s.jsxs)(n.p,{children:["To handle binder errors manually, you can use the ",(0,s.jsx)(n.code,{children:"WithoutAutoHandling"})," method.",(0,s.jsx)(n.br,{}),"\n","It's the default behavior of the binder."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) WithoutAutoHandling() *Bind\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setparserdecoder",children:"SetParserDecoder"}),"\n",(0,s.jsx)(n.p,{children:"Allows you to configure the BodyParser/QueryParser decoder based on schema options, providing the possibility to add custom types for parsing."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func SetParserDecoder(parserConfig fiber.ParserConfig{\n    IgnoreUnknownKeys bool,\n    ParserType        []fiber.ParserType{\n        Customtype any,\n        Converter  func(string) reflect.Value,\n    },\n    ZeroEmpty         bool,\n    SetAliasTag       string,\n})\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'\ntype CustomTime time.Time\n\n// String returns the time in string format\nfunc (ct *CustomTime) String() string {\n    t := time.Time(*ct).String()\n    return t\n}\n\n// Converter for CustomTime type with format "2006-01-02"\nvar timeConverter = func(value string) reflect.Value {\n    fmt.Println("timeConverter:", value)\n    if v, err := time.Parse("2006-01-02", value); err == nil {\n        return reflect.ValueOf(CustomTime(v))\n    }\n    return reflect.Value{}\n}\n\ncustomTime := fiber.ParserType{\n    CustomType: CustomTime{},\n    Converter:  timeConverter,\n}\n\n// Add custom type to the Decoder settings\nfiber.SetParserDecoder(fiber.ParserConfig{\n    IgnoreUnknownKeys: true,\n    ParserType:        []fiber.ParserType{customTime},\n    ZeroEmpty:         true,\n})\n\n// Example using CustomTime with non-RFC3339 format\ntype Demo struct {\n    Date  CustomTime `form:"date" query:"date"`\n    Title string     `form:"title" query:"title"`\n    Body  string     `form:"body" query:"body"`\n}\n\napp.Post("/body", func(c fiber.Ctx) error {\n    var d Demo\n    if err := c.Bind().Body(&d); err != nil {\n        return err\n    }\n    fmt.Println("d.Date:", d.Date.String())\n    return c.JSON(d)\n})\n\napp.Get("/query", func(c fiber.Ctx) error {\n    var d Demo\n    if err := c.Bind().Query(&d); err != nil {\n        return err\n    }\n    fmt.Println("d.Date:", d.Date.String())\n    return c.JSON(d)\n})\n\n// Run tests with the following curl commands:\n\n# Body Binding\ncurl -X POST -F title=title -F body=body -F date=2021-10-20 http://localhost:3000/body\n\n# Query Binding\ncurl -X GET "http://localhost:3000/query?title=title&body=body&date=2021-10-20"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,s.jsxs)(n.p,{children:["Validation is also possible with the binding methods. You can specify your validation rules using the ",(0,s.jsx)(n.code,{children:"validate"})," struct tag."]}),"\n",(0,s.jsxs)(n.p,{children:["Specify your struct validator in the ",(0,s.jsx)(n.a,{href:"/next/api/fiber#structvalidator",children:"config"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"setup-your-validator-in-the-config",children:"Setup Your Validator in the Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'import "github.com/go-playground/validator/v10"\n\ntype structValidator struct {\n    validate *validator.Validate\n}\n\n// Validate method implementation\nfunc (v *structValidator) Validate(out any) error {\n    return v.validate.Struct(out)\n}\n\n// Setup your validator in the Fiber config\napp := fiber.New(fiber.Config{\n    StructValidator: &structValidator{validate: validator.New()},\n})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"usage-of-validation-in-binding-methods",children:"Usage of Validation in Binding Methods"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'type Person struct {\n    Name string `json:"name" validate:"required"`\n    Age  int    `json:"age" validate:"gte=18,lte=60"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().JSON(p); err != nil { // Receives validation errors\n        return err\n    }\n})\n'})}),"\n",(0,s.jsx)(n.h2,{id:"default-fields",children:"Default Fields"}),"\n",(0,s.jsxs)(n.p,{children:["You can set default values for fields in the struct by using the ",(0,s.jsx)(n.code,{children:"default"})," struct tag. Supported types:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"bool"})}),"\n",(0,s.jsxs)(n.li,{children:["Float variants (",(0,s.jsx)(n.code,{children:"float32"}),", ",(0,s.jsx)(n.code,{children:"float64"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Int variants (",(0,s.jsx)(n.code,{children:"int"}),", ",(0,s.jsx)(n.code,{children:"int8"}),", ",(0,s.jsx)(n.code,{children:"int16"}),", ",(0,s.jsx)(n.code,{children:"int32"}),", ",(0,s.jsx)(n.code,{children:"int64"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Uint variants (",(0,s.jsx)(n.code,{children:"uint"}),", ",(0,s.jsx)(n.code,{children:"uint8"}),", ",(0,s.jsx)(n.code,{children:"uint16"}),", ",(0,s.jsx)(n.code,{children:"uint32"}),", ",(0,s.jsx)(n.code,{children:"uint64"}),")"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsxs)(n.li,{children:["A slice of the above types. Use ",(0,s.jsx)(n.code,{children:"|"})," to separate slice items."]}),"\n",(0,s.jsxs)(n.li,{children:["A pointer to one of the above types (",(0,s.jsx)(n.strong,{children:"pointers to slices and slices of pointers are not supported"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'type Person struct {\n    Name     string     `query:"name,default:john"`\n    Pass     string     `query:"pass"`\n    Products []string   `query:"products,default:shoe|hat"`\n}\n\napp.Get("/", func(c fiber.Ctx) error {\n    p := new(Person)\n\n    if err := c.Bind().Query(p); err != nil {\n        return err\n    }\n\n    log.Println(p.Name)     // john\n    log.Println(p.Pass)     // doe\n    log.Println(p.Products) // ["shoe", "hat"]\n    \n    // ...\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run tests with the following ",(0,s.jsx)(n.code,{children:"curl"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl "http://localhost:3000/?pass=doe"\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var t=r(67294);let s={},i=t.createContext(s);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);