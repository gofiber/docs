"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["46106"],{19431:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>c,default:()=>f,assets:()=>d,toc:()=>u,frontMatter:()=>l});var t=JSON.parse('{"id":"guide/error-handling","title":"\uD83D\uDC1B Error Handling","description":"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.","source":"@site/versioned_docs/version-v1.x/guide/error-handling.md","sourceDirName":"guide","slug":"/guide/error-handling","permalink":"/v1.x/guide/error-handling","draft":false,"unlisted":false,"tags":[],"version":"v1.x","lastUpdatedAt":1738589498000,"sidebarPosition":5,"frontMatter":{"id":"error-handling","title":"\uD83D\uDC1B Error Handling","description":"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDD0E Validating","permalink":"/v1.x/guide/validating"},"next":{"title":"Misc","permalink":"/v1.x/category/misc"}}'),a=n("85893"),o=n("50065"),i=n("47902"),s=n("5525");let l={id:"error-handling",title:"\uD83D\uDC1B Error Handling",description:"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.",sidebar_position:5},c=void 0,d={},u=[{value:"Catching Errors",id:"catching-errors",level:2},{value:"Default Error Handler",id:"default-error-handler",level:2},{value:"Custom Error Handler",id:"custom-error-handler",level:2}];function h(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"catching-errors",children:"Catching Errors"}),"\n",(0,a.jsx)(r.p,{children:"It\u2019s essential to ensure that Fiber catches all errors that occur while running route handlers and middleware. You must return them to the handler function, where Fiber will catch and process them."}),"\n",(0,a.jsx)(i.Z,{children:(0,a.jsx)(s.Z,{value:"example",label:"Example",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-go",children:'app.Get("/", func(c *fiber.Ctx) {\n    err := c.SendFile("file-does-not-exist")\n\n    if err != nil {\n        c.Next(err) // Pass error to Fiber\n    }\n})\n'})})})}),"\n",(0,a.jsxs)(r.p,{children:["Fiber does not handle ",(0,a.jsx)(r.a,{href:"https://blog.golang.org/defer-panic-and-recover",children:"panics"})," by default. To recover from a panic thrown by any handler in the stack, you need to include the ",(0,a.jsx)(r.code,{children:"Recover"})," middleware below:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'package main\n\nimport (\n    "github.com/gofiber/fiber"\n    "github.com/gofiber/fiber/middleware"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use(middleware.Recover())\n\n    app.Get("/", func(c *fiber.Ctx) {\n        panic("This panic is catched by the ErrorHandler")\n    })\n\n    log.Fatal(app.Listen(3000))\n}\n'})}),"\n",(0,a.jsxs)(r.p,{children:["Because ",(0,a.jsx)(r.code,{children:"ctx.Next()"})," accepts an ",(0,a.jsx)(r.code,{children:"error"})," interface, you could use Fiber's custom error struct to pass an additional ",(0,a.jsx)(r.code,{children:"status code"})," using ",(0,a.jsx)(r.code,{children:"fiber.NewError()"}),". It's optional to pass a message; if this is left empty, it will default to the status code message (",(0,a.jsx)(r.code,{children:"404"})," equals ",(0,a.jsx)(r.code,{children:"Not Found"}),")."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/", func(c *fiber.Ctx) {\n    err := fiber.NewError(503)\n    c.Next(err) // 503 Service Unavailable\n\n    err := fiber.NewError(404, "Sorry, not found!")\n    c.Next(err) // 404 Sorry, not found!\n})\n'})}),"\n",(0,a.jsx)(r.h2,{id:"default-error-handler",children:"Default Error Handler"}),"\n",(0,a.jsxs)(r.p,{children:["Fiber provides an error handler by default. For a standard error, the response is sent as ",(0,a.jsx)(r.strong,{children:"500 Internal Server Error"}),". If error is of type ",(0,a.jsx)(r.a,{href:"https://godoc.org/github.com/gofiber/fiber#Error",children:"fiber*Error"}),", response is sent with the provided status code and message."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:"// Default error handler\napp.Settings.ErrorHandler = func(ctx *fiber.Ctx, err error) {\n    // Statuscode defaults to 500\n    code := fiber.StatusInternalServerError\n\n    // Check if it's an fiber.Error type\n    if e, ok := err.(*fiber.Error); ok {\n        code = e.Code\n    }\n\n    // Return HTTP response\n    ctx.Set(fiber.HeaderContentType, fiber.MIMETextPlainCharsetUTF8)\n    ctx.Status(code).SendString(err.Error())\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"custom-error-handler",children:"Custom Error Handler"}),"\n",(0,a.jsxs)(r.p,{children:["A custom error handler can be set via ",(0,a.jsx)(r.code,{children:"app.Settings.ErrorHandler"})]}),"\n",(0,a.jsx)(r.p,{children:"In most cases, the default error handler should be sufficient. However, a custom error handler can come in handy if you want to capture different types of errors and take action accordingly e.g., send a notification email or log an error to the centralized system. You can also send customized responses to the client e.g., error page or just a JSON response."}),"\n",(0,a.jsx)(r.p,{children:"The following example shows how to display error pages for different types of errors."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'app := fiber.New()\n\n// Custom error handler\napp.Settings.ErrorHandler = func(ctx *fiber.Ctx, err error) {\n    // Statuscode defaults to 500\n    code := fiber.StatusInternalServerError\n\n    // Retrieve the custom statuscode if it\'s an fiber.*Error\n    if e, ok := err.(*fiber.Error); ok {\n        code = e.Code\n    }\n\n    // Send custom error page\n    err = ctx.Status(code).SendFile(fmt.Sprintf("./%d.html", code))\n    if err != nil {\n        ctx.Status(500).SendString("Internal Server Error")\n    }\n}\n'})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:["Special thanks to the ",(0,a.jsx)(r.a,{href:"https://echo.labstack.com/",children:"Echo"})," & ",(0,a.jsx)(r.a,{href:"https://expressjs.com/",children:"Express"})," framework for inspiration regarding error handling."]}),"\n"]})]})}function f(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5525:function(e,r,n){n.d(r,{Z:()=>i});var t=n("85893");n("67294");var a=n("67026");let o="tabItem_Ymn6";function i(e){let{children:r,hidden:n,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n,children:r})}},47902:function(e,r,n){n.d(r,{Z:()=>j});var t=n("85893"),a=n("67294"),o=n("67026"),i=n("69599"),s=n("16550"),l=n("32000"),c=n("4520"),d=n("38341"),u=n("76009");function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function f(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var p=n("7227");let m="tabList__CuJ",g="tabItem_LNqP";function b(e){let{className:r,block:n,selectedValue:a,selectValue:s,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{let r=e.currentTarget,n=l[c.indexOf(r)].value;n!==a&&(d(r),s(n))},h=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},r),children:l.map(e=>{let{value:r,label:n,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>c.push(e),onKeyDown:h,onClick:u,...i,className:(0,o.Z)("tabs__item",g,i?.className,{"tabs__item--active":a===r}),children:n??r},r)})})}function x(e){let{lazy:r,children:n,selectedValue:i}=e,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=s.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function v(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:t}=e,o=function(e){let{values:r,children:n}=e;return(0,a.useMemo)(()=>{let e=r??h(n).map(e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}});return!function(e){let r=(0,d.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[i,p]=(0,a.useState)(()=>(function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let t=n.find(e=>e.default)??n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:o})),[m,g]=function(e){let{queryString:r=!1,groupId:n}=e,t=(0,s.k6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n}),i=(0,c._X)(o);return[i,(0,a.useCallback)(e=>{if(!o)return;let r=new URLSearchParams(t.location.search);r.set(o,e),t.replace({...t.location,search:r.toString()})},[o,t])]}({queryString:n,groupId:t}),[b,x]=function(e){var r;let{groupId:n}=e;let t=(r=n)?`docusaurus.tab.${r}`:null,[o,i]=(0,u.Nk)(t);return[o,(0,a.useCallback)(e=>{if(!!t)i.set(e)},[t,i])]}({groupId:t}),v=(()=>{let e=m??b;return f({value:e,tabValues:o})?e:null})();return(0,l.Z)(()=>{v&&p(v)},[v]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!f({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);p(e),g(e),x(e)},[g,x,o]),tabValues:o}}(e);return(0,t.jsxs)("div",{className:(0,o.Z)("tabs-container",m),children:[(0,t.jsx)(b,{...r,...e}),(0,t.jsx)(x,{...r,...e})]})}function j(e){let r=(0,p.Z)();return(0,t.jsx)(v,{...e,children:h(e.children)},String(r))}},50065:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return i}});var t=n(67294);let a={},o=t.createContext(a);function i(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);