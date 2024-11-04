"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[5787],{17195:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"guide/error-handling","title":"\ud83d\udc1b Error Handling","description":"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.","source":"@site/docs/core/guide/error-handling.md","sourceDirName":"guide","slug":"/guide/error-handling","permalink":"/next/guide/error-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/guide/error-handling.md","tags":[],"version":"current","lastUpdatedAt":1730726092000,"sidebarPosition":4,"frontMatter":{"id":"error-handling","title":"\ud83d\udc1b Error Handling","description":"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcdd Templates","permalink":"/next/guide/templates"},"next":{"title":"\ud83d\udd0e Validation","permalink":"/next/guide/validation"}}');var a=n(74848),o=n(28453),s=n(11470),i=n(19365);const l={id:"error-handling",title:"\ud83d\udc1b Error Handling",description:"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.",sidebar_position:4},c=void 0,u={},d=[{value:"Catching Errors",id:"catching-errors",level:2},{value:"Default Error Handler",id:"default-error-handler",level:2},{value:"Custom Error Handler",id:"custom-error-handler",level:2}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"catching-errors",children:"Catching Errors"}),"\n",(0,a.jsx)(r.p,{children:"It\u2019s essential to ensure that Fiber catches all errors that occur while running route handlers and middleware. You must return them to the handler function, where Fiber will catch and process them."}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(i.A,{value:"example",label:"Example",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-go",children:'app.Get("/", func(c fiber.Ctx) error {\n    // Pass error to Fiber\n    return c.SendFile("file-does-not-exist")\n})\n'})})})}),"\n",(0,a.jsxs)(r.p,{children:["Fiber does not handle ",(0,a.jsx)(r.a,{href:"https://go.dev/blog/defer-panic-and-recover",children:"panics"})," by default. To recover from a panic thrown by any handler in the stack, you need to include the ",(0,a.jsx)(r.code,{children:"Recover"})," middleware below:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/recover"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use(recover.New())\n\n    app.Get("/", func(c fiber.Ctx) error {\n        panic("This panic is caught by fiber")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,a.jsxs)(r.p,{children:["You could use Fiber's custom error struct to pass an additional ",(0,a.jsx)(r.code,{children:"status code"})," using ",(0,a.jsx)(r.code,{children:"fiber.NewError()"}),". It's optional to pass a message; if this is left empty, it will default to the status code message (",(0,a.jsx)(r.code,{children:"404"})," equals ",(0,a.jsx)(r.code,{children:"Not Found"}),")."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/", func(c fiber.Ctx) error {\n    // 503 Service Unavailable\n    return fiber.ErrServiceUnavailable\n\n    // 503 On vacation!\n    return fiber.NewError(fiber.StatusServiceUnavailable, "On vacation!")\n})\n'})}),"\n",(0,a.jsx)(r.h2,{id:"default-error-handler",children:"Default Error Handler"}),"\n",(0,a.jsxs)(r.p,{children:["Fiber provides an error handler by default. For a standard error, the response is sent as ",(0,a.jsx)(r.strong,{children:"500 Internal Server Error"}),". If the error is of type ",(0,a.jsx)(r.a,{href:"https://godoc.org/github.com/gofiber/fiber#Error",children:"fiber.Error"}),", the response is sent with the provided status code and message."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:"// Default error handler\nvar DefaultErrorHandler = func(c fiber.Ctx, err error) error {\n    // Status code defaults to 500\n    code := fiber.StatusInternalServerError\n\n    // Retrieve the custom status code if it's a *fiber.Error\n    var e *fiber.Error\n    if errors.As(err, &e) {\n        code = e.Code\n    }\n\n    // Set Content-Type: text/plain; charset=utf-8\n    c.Set(fiber.HeaderContentType, fiber.MIMETextPlainCharsetUTF8)\n\n    // Return status code with error message\n    return c.Status(code).SendString(err.Error())\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"custom-error-handler",children:"Custom Error Handler"}),"\n",(0,a.jsxs)(r.p,{children:["A custom error handler can be set using a ",(0,a.jsx)(r.a,{href:"/next/api/fiber#errorhandler",children:"Config"})," when initializing a ",(0,a.jsx)(r.a,{href:"/next/api/fiber#new",children:"Fiber instance"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"In most cases, the default error handler should be sufficient. However, a custom error handler can come in handy if you want to capture different types of errors and take action accordingly e.g., send a notification email or log an error to the centralized system. You can also send customized responses to the client e.g., error page or just a JSON response."}),"\n",(0,a.jsx)(r.p,{children:"The following example shows how to display error pages for different types of errors."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'// Create a new fiber instance with custom config\napp := fiber.New(fiber.Config{\n    // Override default error handler\n    ErrorHandler: func(ctx fiber.Ctx, err error) error {\n        // Status code defaults to 500\n        code := fiber.StatusInternalServerError\n\n        // Retrieve the custom status code if it\'s a *fiber.Error\n        var e *fiber.Error\n        if errors.As(err, &e) {\n            code = e.Code\n        }\n\n        // Send custom error page\n        err = ctx.Status(code).SendFile(fmt.Sprintf("./%d.html", code))\n        if err != nil {\n            // In case the SendFile fails\n            return ctx.Status(fiber.StatusInternalServerError).SendString("Internal Server Error")\n        }\n\n        // Return from handler\n        return nil\n    },\n})\n\n// ...\n'})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:["Special thanks to the ",(0,a.jsx)(r.a,{href:"https://echo.labstack.com/",children:"Echo"})," & ",(0,a.jsx)(r.a,{href:"https://expressjs.com/",children:"Express"})," framework for inspiration regarding error handling."]}),"\n"]})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>s});n(96540);var t=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){let{children:r,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>y});var t=n(96540),a=n(34164),o=n(23104),s=n(56347),i=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function f(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function b(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,o=h(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:o}))),[c,d]=p({queryString:n,groupId:a}),[b,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,o]=(0,u.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=c??b;return f({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const r=e.currentTarget,n=l.indexOf(r),a=i[n].value;a!==t&&(c(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function w(e){let{lazy:r,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function j(e){const r=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...r,...e}),(0,v.jsx)(w,{...r,...e})]})}function y(e){const r=(0,m.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var t=n(96540);const a={},o=t.createContext(a);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);