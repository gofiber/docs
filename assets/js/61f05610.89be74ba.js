"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["53557"],{16572:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>p,frontMatter:()=>o});var i=JSON.parse('{"id":"guide/templates","title":"\uD83D\uDCDD Templates","description":"Fiber supports server-side template engines.","source":"@site/docs/core/guide/templates.md","sourceDirName":"guide","slug":"/guide/templates","permalink":"/next/guide/templates","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/guide/templates.md","tags":[],"version":"current","lastUpdatedAt":1736149068000,"sidebarPosition":3,"frontMatter":{"id":"templates","title":"\uD83D\uDCDD Templates","description":"Fiber supports server-side template engines.","sidebar_position":3},"sidebar":"left_sidebar","previous":{"title":"\uD83C\uDFAD Grouping","permalink":"/next/guide/grouping"},"next":{"title":"\uD83D\uDC1B Error Handling","permalink":"/next/guide/error-handling"}}'),r=t("85893"),a=t("50065"),l=t("47902"),s=t("5525");let o={id:"templates",title:"\uD83D\uDCDD Templates",description:"Fiber supports server-side template engines.",sidebar_position:3},d=void 0,c={},p=[{value:"Template Engines",id:"template-engines",level:2},{value:"Supported Engines",id:"supported-engines",level:3},{value:"Rendering Templates",id:"rendering-templates",level:2},{value:"Advanced Templating",id:"advanced-templating",level:2},{value:"Custom Functions",id:"custom-functions",level:3},{value:"AddFunc",id:"addfunc",level:4},{value:"AddFuncMap",id:"addfuncmap",level:4},{value:"Full Example",id:"full-example",level:2}];function u(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Templates are a great tool to render dynamic content without using a separate frontend framework."}),"\n",(0,r.jsx)(n.h2,{id:"template-engines",children:"Template Engines"}),"\n",(0,r.jsx)(n.p,{children:"Fiber allows you to provide a custom template engine at app initialization."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app := fiber.New(fiber.Config{\n    // Pass in Views Template Engine\n    Views: engine,\n\n    // Default global path to search for views (can be overriden when calling Render())\n    ViewsLayout: "layouts/main",\n\n    // Enables/Disables access to `ctx.Locals()` entries in rendered views\n    // (defaults to false)\n    PassLocalsToViews: false,\n})\n'})}),"\n",(0,r.jsx)(n.h3,{id:"supported-engines",children:"Supported Engines"}),"\n",(0,r.jsxs)(n.p,{children:["The Fiber team maintains a ",(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template",children:"templates"})," package that provides wrappers for multiple template engines:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/ace/",children:"ace"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/amber/",children:"amber"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/django/",children:"django"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/handlebars",children:"handlebars"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/html",children:"html"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/jet",children:"jet"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/mustache",children:"mustache"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/pug",children:"pug"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/slim",children:"slim"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Custom template engines can implement the ",(0,r.jsx)(n.code,{children:"Views"})," interface to be supported in Fiber."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Views interface"',children:"type Views interface {\n    // Fiber executes Load() on app initialization to load/parse the templates\n    Load() error\n\n    // Outputs a template to the provided buffer using the provided template,\n    // template name, and binded data\n    Render(io.Writer, string, interface{}, ...string) error\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Render"})," method is linked to the ",(0,r.jsx)(n.a,{href:"/next/api/ctx#render",children:(0,r.jsx)(n.strong,{children:"ctx.Render()"})})," function that accepts a template name and binding data."]})}),"\n",(0,r.jsx)(n.h2,{id:"rendering-templates",children:"Rendering Templates"}),"\n",(0,r.jsxs)(n.p,{children:["Once an engine is set up, a route handler can call the ",(0,r.jsx)(n.a,{href:"/next/api/ctx#render",children:(0,r.jsx)(n.strong,{children:"ctx.Render()"})})," function with a template name and binded data to send the rendered template."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c Ctx) Render(name string, bind Map, layouts ...string) error\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.a,{href:"/next/api/ctx#render",children:(0,r.jsx)(n.strong,{children:"ctx.Render()"})})," searches for the template name in the ",(0,r.jsx)(n.code,{children:"ViewsLayout"})," path. To override this setting, provide the path(s) in the ",(0,r.jsx)(n.code,{children:"layouts"})," argument."]})}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(s.Z,{value:"example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app.Get("/", func(c fiber.Ctx) error {\n    return c.Render("index", fiber.Map{\n        "Title": "Hello, World!",\n    })\n\n})\n'})})}),(0,r.jsx)(s.Z,{value:"index",label:"layouts/index.html",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n    <body>\n        <h1>{{.Title}}</h1>\n    </body>\n</html>\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["If the Fiber config option ",(0,r.jsx)(n.code,{children:"PassLocalsToViews"})," is enabled, then all locals set using ",(0,r.jsx)(n.code,{children:"ctx.Locals(key, value)"})," will be passed to the template. It is important to avoid clashing keys when using this setting."]})}),"\n",(0,r.jsx)(n.h2,{id:"advanced-templating",children:"Advanced Templating"}),"\n",(0,r.jsx)(n.h3,{id:"custom-functions",children:"Custom Functions"}),"\n",(0,r.jsx)(n.p,{children:"Fiber supports adding custom functions to templates."}),"\n",(0,r.jsx)(n.h4,{id:"addfunc",children:"AddFunc"}),"\n",(0,r.jsx)(n.p,{children:"Adds a global function to all templates."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (e *Engine) AddFunc(name string, fn interface{}) IEngineCore\n"})}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(s.Z,{value:"add-func-example",label:"AddFunc Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Add `ToUpper` to engine\nengine := html.New("./views", ".html")\nengine.AddFunc("ToUpper", func(s string) string {\n    return strings.ToUpper(s)\n}\n\n// Initialize Fiber App\napp := fiber.New(fiber.Config{\n    Views: engine,\n})\n\napp.Get("/", func (c fiber.Ctx) error {\n    return c.Render("index", fiber.Map{\n        "Content": "hello, World!"\n    })\n})\n'})})}),(0,r.jsx)(s.Z,{value:"add-func-template",label:"views/index.html",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n    <body>\n        <p>This will be in {{ToUpper "all caps"}}:</p>\n        <p>{{ToUpper .Content}}</p>\n    </body>\n</html>\n'})})})]}),"\n",(0,r.jsx)(n.h4,{id:"addfuncmap",children:"AddFuncMap"}),"\n",(0,r.jsx)(n.p,{children:"Adds a Map of functions (keyed by name) to all templates."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (e *Engine) AddFuncMap(m map[string]interface{}) IEngineCore\n"})}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(s.Z,{value:"add-func-map-example",label:"AddFuncMap Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Add `ToUpper` to engine\nengine := html.New("./views", ".html")\nengine.AddFuncMap(map[string]interface{}{\n    "ToUpper": func(s string) string {\n        return strings.ToUpper(s)\n    },\n})\n\n// Initialize Fiber App\napp := fiber.New(fiber.Config{\n    Views: engine,\n})\n\napp.Get("/", func (c fiber.Ctx) error {\n    return c.Render("index", fiber.Map{\n        "Content": "hello, world!"\n    })\n})\n'})})}),(0,r.jsx)(s.Z,{value:"add-func-map-template",label:"views/index.html",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n    <body>\n        <p>This will be in {{ToUpper "all caps"}}:</p>\n        <p>{{ToUpper .Content}}</p>\n    </body>\n</html>\n'})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For more advanced template documentation, please visit the ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/template",children:"gofiber/template GitHub Repository"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"full-example",children:"Full Example"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(s.Z,{value:"example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/template/html/v2"\n)\n\nfunc main() {\n    // Initialize standard Go html template engine\n    engine := html.New("./views", ".html")\n    // If you want to use another engine,\n    // just replace with following:\n    // Create a new engine with django\n    // engine := django.New("./views", ".django")\n\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n    app.Get("/", func(c fiber.Ctx) error {\n        // Render index template\n        return c.Render("index", fiber.Map{\n            "Title": "Go Fiber Template Example",\n            "Description": "An example template",\n            "Greeting": "Hello, World!",\n        });\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})})}),(0,r.jsx)(s.Z,{value:"index",label:"views/index.html",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n    <head>\n        <title>{{.Title}}</title>\n        <meta name="description" content="{{.Description}}">\n    </head>\n<body>\n    <h1>{{.Title}}</h1>\n        <p>{{.Greeting}}</p>\n</body>\n</html>\n'})})})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5525:function(e,n,t){t.d(n,{Z:()=>l});var i=t("85893");t("67294");var r=t("67026");let a="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:t,children:n})}},47902:function(e,n,t){t.d(n,{Z:()=>v});var i=t("85893"),r=t("67294"),a=t("67026"),l=t("69599"),s=t("16550"),o=t("32000"),d=t("4520"),c=t("38341"),p=t("76009");function u(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var m=t("7227");let g="tabList__CuJ",f="tabItem_LNqP";function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{let n=e.currentTarget,t=o[d.indexOf(n)].value;t!==r&&(c(n),s(t))},u=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{let t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:u,onClick:p,...l,className:(0,a.Z)("tabs__item",f,l?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function b(e){let{lazy:n,children:t,selectedValue:l}=e,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===l);return e?(0,r.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:i}=e,a=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??u(t).map(e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,m]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=t.find(e=>e.default)??t[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:a})),[g,f]=function(e){let{queryString:n=!1,groupId:t}=e,i=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),l=(0,d._X)(a);return[l,(0,r.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})},[a,i])]}({queryString:t,groupId:i}),[x,b]=function(e){var n;let{groupId:t}=e;let i=(n=t)?`docusaurus.tab.${n}`:null,[a,l]=(0,p.Nk)(i);return[a,(0,r.useCallback)(e=>{if(!!i)l.set(e)},[i,l])]}({groupId:i}),j=(()=>{let e=g??x;return h({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{j&&m(j)},[j]),{selectedValue:l,selectValue:(0,r.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),b(e)},[f,b,a]),tabValues:a}}(e);return(0,i.jsxs)("div",{className:(0,a.Z)("tabs-container",g),children:[(0,i.jsx)(x,{...n,...e}),(0,i.jsx)(b,{...n,...e})]})}function v(e){let n=(0,m.Z)();return(0,i.jsx)(j,{...e,children:u(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var i=t(67294);let r={},a=i.createContext(r);function l(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);