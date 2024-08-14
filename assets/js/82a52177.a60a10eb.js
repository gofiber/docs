"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[59182],{5475:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(74848),a=n(28453),o=n(11470),s=n(19365);const i={id:"error-handling",title:"\ud83d\udc1b Error Handling",description:"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.",sidebar_position:5},l=void 0,c={id:"guide/error-handling",title:"\ud83d\udc1b Error Handling",description:"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.",source:"@site/versioned_docs/version-v1.x/guide/error-handling.md",sourceDirName:"guide",slug:"/guide/error-handling",permalink:"/v1.x/guide/error-handling",draft:!1,unlisted:!1,tags:[],version:"v1.x",lastUpdatedAt:1723619721e3,sidebarPosition:5,frontMatter:{id:"error-handling",title:"\ud83d\udc1b Error Handling",description:"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0e Validating",permalink:"/v1.x/guide/validating"},next:{title:"Misc",permalink:"/v1.x/category/misc"}},u={},d=[{value:"Catching Errors",id:"catching-errors",level:2},{value:"Default Error Handler",id:"default-error-handler",level:2},{value:"Custom Error Handler",id:"custom-error-handler",level:2}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"catching-errors",children:"Catching Errors"}),"\n",(0,t.jsx)(r.p,{children:"It\u2019s essential to ensure that Fiber catches all errors that occur while running route handlers and middleware. You must return them to the handler function, where Fiber will catch and process them."}),"\n",(0,t.jsx)(o.A,{children:(0,t.jsx)(s.A,{value:"example",label:"Example",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'app.Get("/", func(c *fiber.Ctx) {\n    err := c.SendFile("file-does-not-exist")\n\n    if err != nil {\n        c.Next(err) // Pass error to Fiber\n    }\n})\n'})})})}),"\n",(0,t.jsxs)(r.p,{children:["Fiber does not handle ",(0,t.jsx)(r.a,{href:"https://blog.golang.org/defer-panic-and-recover",children:"panics"})," by default. To recover from a panic thrown by any handler in the stack, you need to include the ",(0,t.jsx)(r.code,{children:"Recover"})," middleware below:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'package main\n\nimport (\n    "github.com/gofiber/fiber"\n    "github.com/gofiber/fiber/middleware"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use(middleware.Recover())\n\n    app.Get("/", func(c *fiber.Ctx) {\n        panic("This panic is catched by the ErrorHandler")\n    })\n\n    log.Fatal(app.Listen(3000))\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Because ",(0,t.jsx)(r.code,{children:"ctx.Next()"})," accepts an ",(0,t.jsx)(r.code,{children:"error"})," interface, you could use Fiber's custom error struct to pass an additional ",(0,t.jsx)(r.code,{children:"status code"})," using ",(0,t.jsx)(r.code,{children:"fiber.NewError()"}),". It's optional to pass a message; if this is left empty, it will default to the status code message (",(0,t.jsx)(r.code,{children:"404"})," equals ",(0,t.jsx)(r.code,{children:"Not Found"}),")."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/", func(c *fiber.Ctx) {\n    err := fiber.NewError(503)\n    c.Next(err) // 503 Service Unavailable\n\n    err := fiber.NewError(404, "Sorry, not found!")\n    c.Next(err) // 404 Sorry, not found!\n})\n'})}),"\n",(0,t.jsx)(r.h2,{id:"default-error-handler",children:"Default Error Handler"}),"\n",(0,t.jsxs)(r.p,{children:["Fiber provides an error handler by default. For a standard error, the response is sent as ",(0,t.jsx)(r.strong,{children:"500 Internal Server Error"}),". If error is of type ",(0,t.jsx)(r.a,{href:"https://godoc.org/github.com/gofiber/fiber#Error",children:"fiber*Error"}),", response is sent with the provided status code and message."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:"// Default error handler\napp.Settings.ErrorHandler = func(ctx *fiber.Ctx, err error) {\n    // Statuscode defaults to 500\n    code := fiber.StatusInternalServerError\n\n    // Check if it's an fiber.Error type\n    if e, ok := err.(*fiber.Error); ok {\n        code = e.Code\n    }\n\n    // Return HTTP response\n    ctx.Set(fiber.HeaderContentType, fiber.MIMETextPlainCharsetUTF8)\n    ctx.Status(code).SendString(err.Error())\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"custom-error-handler",children:"Custom Error Handler"}),"\n",(0,t.jsxs)(r.p,{children:["A custom error handler can be set via ",(0,t.jsx)(r.code,{children:"app.Settings.ErrorHandler"})]}),"\n",(0,t.jsx)(r.p,{children:"In most cases, the default error handler should be sufficient. However, a custom error handler can come in handy if you want to capture different types of errors and take action accordingly e.g., send a notification email or log an error to the centralized system. You can also send customized responses to the client e.g., error page or just a JSON response."}),"\n",(0,t.jsx)(r.p,{children:"The following example shows how to display error pages for different types of errors."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'app := fiber.New()\n\n// Custom error handler\napp.Settings.ErrorHandler = func(ctx *fiber.Ctx, err error) {\n    // Statuscode defaults to 500\n    code := fiber.StatusInternalServerError\n\n    // Retrieve the custom statuscode if it\'s an fiber.*Error\n    if e, ok := err.(*fiber.Error); ok {\n        code = e.Code\n    }\n\n    // Send custom error page\n    err = ctx.Status(code).SendFile(fmt.Sprintf("./%d.html", code))\n    if err != nil {\n        ctx.Status(500).SendString("Internal Server Error")\n    }\n}\n'})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Special thanks to the ",(0,t.jsx)(r.a,{href:"https://echo.labstack.com/",children:"Echo"})," & ",(0,t.jsx)(r.a,{href:"https://expressjs.com/",children:"Express"})," framework for inspiration regarding error handling."]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>s});n(96540);var t=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){let{children:r,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>w});var t=n(96540),a=n(34164),o=n(23104),s=n(56347),i=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function b(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,o=h(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:o}))),[c,d]=f({queryString:n,groupId:a}),[b,g]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,o]=(0,u.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),m=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function v(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const r=e.currentTarget,n=l.indexOf(r),a=i[n].value;a!==t&&(c(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function j(e){let{lazy:r,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,x.jsx)(v,{...r,...e}),(0,x.jsx)(j,{...r,...e})]})}function w(e){const r=(0,g.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var t=n(96540);const a={},o=t.createContext(a);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);