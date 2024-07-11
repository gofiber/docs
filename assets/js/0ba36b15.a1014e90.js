"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[42895],{97432:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=r(74848),s=r(28453);const i={id:"bind",title:"\ud83d\udcce Bind",description:"Binds the request and response items to a struct.",sidebar_position:4,toc_max_heading_level:4},o=void 0,a={id:"api/bind",title:"\ud83d\udcce Bind",description:"Binds the request and response items to a struct.",source:"@site/docs/core/api/bind.md",sourceDirName:"api",slug:"/api/bind",permalink:"/next/api/bind",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/api/bind.md",tags:[],version:"current",lastUpdatedAt:1720707448e3,sidebarPosition:4,frontMatter:{id:"bind",title:"\ud83d\udcce Bind",description:"Binds the request and response items to a struct.",sidebar_position:4,toc_max_heading_level:4},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udde0 Ctx",permalink:"/next/api/ctx"},next:{title:"\ud83d\udd04 Redirect",permalink:"/next/api/redirect"}},l={},d=[{value:"Binders",id:"binders",level:2},{value:"Body",id:"body",level:3},{value:"Form",id:"form",level:4},{value:"JSON",id:"json",level:4},{value:"MultipartForm",id:"multipartform",level:4},{value:"XML",id:"xml",level:4},{value:"Cookie",id:"cookie",level:3},{value:"Header",id:"header",level:3},{value:"Query",id:"query",level:3},{value:"RespHeader",id:"respheader",level:3},{value:"URI",id:"uri",level:3},{value:"Custom",id:"custom",level:2},{value:"Options",id:"options",level:2},{value:"Must",id:"must",level:3},{value:"Should",id:"should",level:3},{value:"SetParserDecoder",id:"setparserdecoder",level:2},{value:"Validation",id:"validation",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Bindings are used to parse the request/response body, query parameters, cookies and much more into a struct."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["All binder returned value are only valid within the handler. Do not store any references.",(0,t.jsx)(n.br,{}),"\n","Make copies or use the ",(0,t.jsx)(n.a,{href:"/next/api/ctx",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Immutable"})})})," setting instead. ",(0,t.jsx)(n.a,{href:"../#zero-allocation",children:"Read more..."})]})}),"\n",(0,t.jsx)(n.h2,{id:"binders",children:"Binders"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#body",children:"Body"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#form",children:"Form"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#json",children:"JSON"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#multipartform",children:"MultipartForm"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#xml",children:"XML"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#cookie",children:"Cookie"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#header",children:"Header"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#query",children:"Query"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#respheader",children:"RespHeader"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#uri",children:"URI"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"body",children:"Body"}),"\n",(0,t.jsx)(n.p,{children:"Binds the request body to a struct."}),"\n",(0,t.jsxs)(n.p,{children:["It is important to specify the correct struct tag based on the content type to be parsed. For example, if you want to parse a JSON body with a field called Pass, you would use a struct field of ",(0,t.jsx)(n.code,{children:'json:"pass"'}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"content-type"}),(0,t.jsx)(n.th,{children:"struct tag"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"application/x-www-form-urlencoded"})}),(0,t.jsx)(n.td,{children:"form"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"multipart/form-data"})}),(0,t.jsx)(n.td,{children:"form"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"application/json"})}),(0,t.jsx)(n.td,{children:"json"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"application/xml"})}),(0,t.jsx)(n.td,{children:"xml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"text/xml"})}),(0,t.jsx)(n.td,{children:"xml"})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Body(out any) error\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// Field names should start with an uppercase letter\ntype Person struct {\n    Name string `json:"name" xml:"name" form:"name"`\n    Pass string `json:"pass" xml:"pass" form:"pass"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().Body(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name) // john\n    log.Println(p.Pass) // doe\n    \n    // ...\n})\n\n// Run tests with the following curl commands\n\n// curl -X POST -H "Content-Type: application/json" --data "{\\"name\\":\\"john\\",\\"pass\\":\\"doe\\"}" localhost:3000\n\n// curl -X POST -H "Content-Type: application/xml" --data "<login><name>john</name><pass>doe</pass></login>" localhost:3000\n\n// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" --data "name=john&pass=doe" localhost:3000\n\n// curl -X POST -F name=john -F pass=doe http://localhost:3000\n\n// curl -X POST "http://localhost:3000/?name=john&pass=doe"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"The methods for the various bodies can also be used directly:"})}),"\n",(0,t.jsx)(n.h4,{id:"form",children:"Form"}),"\n",(0,t.jsx)(n.p,{children:"Binds the request form body to a struct."}),"\n",(0,t.jsxs)(n.p,{children:["It is important to specify the correct struct tag based on the content type to be parsed. For example, if you want to parse a Form body with a field called Pass, you would use a struct field of ",(0,t.jsx)(n.code,{children:'form:"pass"'}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Form(out any) error\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// Field names should start with an uppercase letter\ntype Person struct {\n    Name string `form:"name"`\n    Pass string `form:"pass"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().Form(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name) // john\n    log.Println(p.Pass) // doe\n    \n    // ...\n})\n\n// Run tests with the following curl commands\n\n// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" --data "name=john&pass=doe" localhost:3000\n'})}),"\n",(0,t.jsx)(n.h4,{id:"json",children:"JSON"}),"\n",(0,t.jsx)(n.p,{children:"Binds the request json body to a struct."}),"\n",(0,t.jsxs)(n.p,{children:["It is important to specify the correct struct tag based on the content type to be parsed. For example, if you want to parse a JSON body with a field called Pass, you would use a struct field of ",(0,t.jsx)(n.code,{children:'json:"pass"'}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) JSON(out any) error\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// Field names should start with an uppercase letter\ntype Person struct {\n    Name string `json:"name"`\n    Pass string `json:"pass"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().JSON(p); err != nil {\n        return err\n    }\n\n    log.Println(p.Name) // john\n    log.Println(p.Pass) // doe\n    \n    // ...\n})\n\n// Run tests with the following curl commands\n\n// curl -X POST -H "Content-Type: application/json" --data "{\\"name\\":\\"john\\",\\"pass\\":\\"doe\\"}" localhost:3000\n\n'})}),"\n",(0,t.jsx)(n.h4,{id:"multipartform",children:"MultipartForm"}),"\n",(0,t.jsx)(n.p,{children:"Binds the request multipart form body to a struct."}),"\n",(0,t.jsxs)(n.p,{children:["It is important to specify the correct struct tag based on the content type to be parsed. For example, if you want to parse a MultipartForm body with a field called Pass, you would use a struct field of ",(0,t.jsx)(n.code,{children:'form:"pass"'}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) MultipartForm(out any) error\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// Field names should start with an uppercase letter\ntype Person struct {\n    Name string `form:"name"`\n    Pass string `form:"pass"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().MultipartForm(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name) // john\n    log.Println(p.Pass) // doe\n    \n    // ...\n})\n\n// Run tests with the following curl commands\n\n// curl -X POST -H "Content-Type: multipart/form-data" -F "name=john" -F "pass=doe" localhost:3000\n\n'})}),"\n",(0,t.jsx)(n.h4,{id:"xml",children:"XML"}),"\n",(0,t.jsx)(n.p,{children:"Binds the request xml form body to a struct."}),"\n",(0,t.jsxs)(n.p,{children:["It is important to specify the correct struct tag based on the content type to be parsed. For example, if you want to parse an XML body with a field called Pass, you would use a struct field of ",(0,t.jsx)(n.code,{children:'xml:"pass"'}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) XML(out any) error\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// Field names should start with an uppercase letter\ntype Person struct {\n    Name string `xml:"name"`\n    Pass string `xml:"pass"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().XML(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name) // john\n    log.Println(p.Pass) // doe\n    \n    // ...\n})\n\n// Run tests with the following curl commands\n\n// curl -X POST -H "Content-Type: application/xml" --data "<login><name>john</name><pass>doe</pass></login>" localhost:3000\n'})}),"\n",(0,t.jsx)(n.h3,{id:"cookie",children:"Cookie"}),"\n",(0,t.jsxs)(n.p,{children:["This method is similar to ",(0,t.jsx)(n.a,{href:"#body",children:"Body-Binding"}),', but for cookie parameters.\nIt is important to use the struct tag "cookie". For example, if you want to parse a cookie with a field called Age, you would use a struct field of ',(0,t.jsx)(n.code,{children:'cookie:"age"'}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Cookie(out any) error\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// Field names should start with an uppercase letter\ntype Person struct {\n    Name     string  `cookie:"name"`\n    Age      int     `cookie:"age"`\n    Job      bool    `cookie:"job"`\n}\n\napp.Get("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().Cookie(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name)     // Joseph\n    log.Println(p.Age)      // 23\n    log.Println(p.Job)      // true\n})\n// Run tests with the following curl command\n// curl.exe --cookie "name=Joseph; age=23; job=true" http://localhost:8000/\n'})}),"\n",(0,t.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,t.jsxs)(n.p,{children:["This method is similar to ",(0,t.jsx)(n.a,{href:"#body",children:"Body-Binding"}),', but for request headers.\nIt is important to use the struct tag "header". For example, if you want to parse a request header with a field called Pass, you would use a struct field of ',(0,t.jsx)(n.code,{children:'header:"pass"'}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Header(out any) error\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// Field names should start with an uppercase letter\ntype Person struct {\n    Name     string     `header:"name"`\n    Pass     string     `header:"pass"`\n    Products []string   `header:"products"`\n}\n\napp.Get("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().Header(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name)     // john\n    log.Println(p.Pass)     // doe\n    log.Println(p.Products) // [shoe, hat]\n    \n    // ...\n})\n// Run tests with the following curl command\n\n// curl "http://localhost:3000/" -H "name: john" -H "pass: doe" -H "products: shoe,hat"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"query",children:"Query"}),"\n",(0,t.jsxs)(n.p,{children:["This method is similar to ",(0,t.jsx)(n.a,{href:"#body",children:"Body-Binding"}),', but for query parameters.\nIt is important to use the struct tag "query". For example, if you want to parse a query parameter with a field called Pass, you would use a struct field of ',(0,t.jsx)(n.code,{children:'query:"pass"'}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Query(out any) error\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// Field names should start with an uppercase letter\ntype Person struct {\n    Name     string     `query:"name"`\n    Pass     string     `query:"pass"`\n    Products []string   `query:"products"`\n}\n\napp.Get("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().Query(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name)        // john\n    log.Println(p.Pass)        // doe\n    // fiber.Config{EnableSplittingOnParsers: false} - default\n    log.Println(p.Products)    // ["shoe,hat"]\n    // fiber.Config{EnableSplittingOnParsers: true}\n    // log.Println(p.Products) // ["shoe", "hat"]\n    \n    \n    // ...\n})\n// Run tests with the following curl command\n\n// curl "http://localhost:3000/?name=john&pass=doe&products=shoe,hat"\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For more parser settings please look here ",(0,t.jsx)(n.a,{href:"/next/api/fiber#enablesplittingonparsers",children:"Config"})]})}),"\n",(0,t.jsx)(n.h3,{id:"respheader",children:"RespHeader"}),"\n",(0,t.jsxs)(n.p,{children:["This method is similar to ",(0,t.jsx)(n.a,{href:"#body",children:"Body-Binding"}),', but for response headers.\nIt is important to use the struct tag "respHeader". For example, if you want to parse a request header with a field called Pass, you would use a struct field of ',(0,t.jsx)(n.code,{children:'respHeader:"pass"'}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Header(out any) error\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// Field names should start with an uppercase letter\ntype Person struct {\n    Name     string     `respHeader:"name"`\n    Pass     string     `respHeader:"pass"`\n    Products []string   `respHeader:"products"`\n}\n\napp.Get("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().RespHeader(p); err != nil {\n        return err\n    }\n    \n    log.Println(p.Name)     // john\n    log.Println(p.Pass)     // doe\n    log.Println(p.Products) // [shoe, hat]\n    \n    // ...\n})\n// Run tests with the following curl command\n\n// curl "http://localhost:3000/" -H "name: john" -H "pass: doe" -H "products: shoe,hat"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"uri",children:"URI"}),"\n",(0,t.jsxs)(n.p,{children:["This method is similar to ",(0,t.jsx)(n.a,{href:"#body",children:"Body-Binding"}),', but for path parameters. It is important to use the struct tag "uri". For example, if you want to parse a path parameter with a field called Pass, you would use a struct field of uri:"pass"']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) URI(out any) error\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// GET http://example.com/user/111\napp.Get("/user/:id", func(c fiber.Ctx) error {\n    param := struct {ID uint `uri:"id"`}{}\n    \n    c.Bind().URI(&param) // "{"id": 111}"\n    \n    // ...\n})\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"custom",children:"Custom"}),"\n",(0,t.jsx)(n.p,{children:"To use custom binders, you have to use this method."}),"\n",(0,t.jsxs)(n.p,{children:["You can register them from ",(0,t.jsx)(n.a,{href:"/next/api/app#registercustombinder",children:"RegisterCustomBinder"})," method of Fiber instance."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Custom(name string, dest any) error\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app := fiber.New()\n\n// My custom binder\ncustomBinder := &customBinder{}\n// Name of custom binder, which will be used as Bind().Custom("name")\nfunc (*customBinder) Name() string {\n    return "custom"\n}\n// Is used in the Body Bind method to check if the binder should be used for custom mime types\nfunc (*customBinder) MIMETypes() []string {\n    return []string{"application/yaml"}\n}\n// Parse the body and bind it to the out interface\nfunc (*customBinder) Parse(c Ctx, out any) error {\n    // parse yaml body\n    return yaml.Unmarshal(c.Body(), out)\n}\n// Register custom binder\napp.RegisterCustomBinder(customBinder)\n\n// curl -X POST http://localhost:3000/custom -H "Content-Type: application/yaml" -d "name: John"\napp.Post("/custom", func(c Ctx) error {\n    var user User\n    // output: {Name:John}\n    // Custom binder is used by the name\n    if err := c.Bind().Custom("custom", &user); err != nil {\n        return err\n    }\n    // ...\n    return c.JSON(user)\n})\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Internally they are also used in the ",(0,t.jsx)(n.a,{href:"#body",children:"Body"})," method.\nFor this the MIMETypes method is used to check if the custom binder should be used for the given content type."]}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.p,{children:"For more control over the error handling, you can use the following methods."}),"\n",(0,t.jsx)(n.h3,{id:"must",children:"Must"}),"\n",(0,t.jsx)(n.p,{children:"If you want to handle binder errors automatically, you can use Must.\nIf there's an error it'll return error and 400 as HTTP status."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Must() *Bind\n"})}),"\n",(0,t.jsx)(n.h3,{id:"should",children:"Should"}),"\n",(0,t.jsx)(n.p,{children:"To handle binder errors manually, you can prefer Should method.\nIt's default behavior of binder."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (b *Bind) Should() *Bind\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setparserdecoder",children:"SetParserDecoder"}),"\n",(0,t.jsx)(n.p,{children:"Allow you to config BodyParser/QueryParser decoder, base on schema's options, providing possibility to add custom type for parsing."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func SetParserDecoder(parserConfig fiber.ParserConfig{\n    IgnoreUnknownKeys bool,\n    ParserType        []fiber.ParserType{\n        Customtype any,\n        Converter  func(string) reflect.Value,\n    },\n    ZeroEmpty         bool,\n    SetAliasTag       string,\n})\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'\ntype CustomTime time.Time\n\n// String() returns the time in string\nfunc (ct *CustomTime) String() string {\n    t := time.Time(*ct).String()\n        return t\n    }\n    \n    // Register the converter for CustomTime type format as 2006-01-02\n    var timeConverter = func(value string) reflect.Value {\n    fmt.Println("timeConverter", value)\n    if v, err := time.Parse("2006-01-02", value); err == nil {\n        return reflect.ValueOf(v)\n    }\n    return reflect.Value{}\n}\n\ncustomTime := fiber.ParserType{\n    Customtype: CustomTime{},\n    Converter:  timeConverter,\n}\n\n// Add setting to the Decoder\nfiber.SetParserDecoder(fiber.ParserConfig{\n    IgnoreUnknownKeys: true,\n    ParserType:        []fiber.ParserType{customTime},\n    ZeroEmpty:         true,\n})\n\n// Example to use CustomType, you pause custom time format not in RFC3339\ntype Demo struct {\n    Date  CustomTime `form:"date" query:"date"`\n    Title string     `form:"title" query:"title"`\n    Body  string     `form:"body" query:"body"`\n}\n\napp.Post("/body", func(c fiber.Ctx) error {\n    var d Demo\n    c.BodyParser(&d)\n    fmt.Println("d.Date", d.Date.String())\n    return c.JSON(d)\n})\n\napp.Get("/query", func(c fiber.Ctx) error {\n    var d Demo\n    c.QueryParser(&d)\n    fmt.Println("d.Date", d.Date.String())\n    return c.JSON(d)\n})\n\n// curl -X POST -F title=title -F body=body -F date=2021-10-20 http://localhost:3000/body\n\n// curl -X GET "http://localhost:3000/query?title=title&body=body&date=2021-10-20"\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,t.jsxs)(n.p,{children:["Validation is also possible with the binding methods. You can specify your validation rules using the ",(0,t.jsx)(n.code,{children:"validate"})," struct tag."]}),"\n",(0,t.jsxs)(n.p,{children:["Specify your struct validator in the ",(0,t.jsx)(n.a,{href:"/next/api/fiber#structvalidator",children:"config"})]}),"\n",(0,t.jsx)(n.p,{children:"Setup your validator in the config:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'import "github.com/go-playground/validator/v10"\n\ntype structValidator struct {\n    validate *validator.Validate\n}\n\n// Validator needs to implement the Validate method\nfunc (v *structValidator) Validate(out any) error {\n    return v.validate.Struct(out)\n}\n\n// Setup your validator in the config\napp := fiber.New(fiber.Config{\n    StructValidator: &structValidator{validate: validator.New()},\n})\n'})}),"\n",(0,t.jsx)(n.p,{children:"Usage of the validation in the binding methods:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'type Person struct {\n    Name string `json:"name" validate:"required"`\n    Age  int    `json:"age" validate:"gte=18,lte=60"`\n}\n\napp.Post("/", func(c fiber.Ctx) error {\n    p := new(Person)\n    \n    if err := c.Bind().JSON(p); err != nil {// <- here you receive the validation errors\n        return err\n    }\n})\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);