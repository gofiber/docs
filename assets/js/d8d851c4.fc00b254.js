"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[60164],{8358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"guide/templates","title":"\ud83d\udcdd Templates","description":"Fiber supports server-side template engines.","source":"@site/versioned_docs/version-v2.x/guide/templates.md","sourceDirName":"guide","slug":"/guide/templates","permalink":"/guide/templates","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1730726092000,"sidebarPosition":3,"frontMatter":{"id":"templates","title":"\ud83d\udcdd Templates","description":"Fiber supports server-side template engines.","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\ud83c\udfad Grouping","permalink":"/guide/grouping"},"next":{"title":"\ud83d\udc1b Error Handling","permalink":"/guide/error-handling"}}');var r=t(74848),i=t(28453),l=t(11470),s=t(19365);const o={id:"templates",title:"\ud83d\udcdd Templates",description:"Fiber supports server-side template engines.",sidebar_position:3},d=void 0,c={},u=[{value:"Template Engines",id:"template-engines",level:2},{value:"Supported Engines",id:"supported-engines",level:3},{value:"Rendering Templates",id:"rendering-templates",level:2},{value:"Advanced Templating",id:"advanced-templating",level:2},{value:"Custom Functions",id:"custom-functions",level:3},{value:"AddFunc",id:"addfunc",level:4},{value:"AddFuncMap",id:"addfuncmap",level:4},{value:"Full Example",id:"full-example",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Templates are a great tool to render dynamic content without using a separate frontend framework."}),"\n",(0,r.jsx)(n.h2,{id:"template-engines",children:"Template Engines"}),"\n",(0,r.jsx)(n.p,{children:"Fiber allows you to provide a custom template engine at app initialization."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app := fiber.New(fiber.Config{\n    // Pass in Views Template Engine\n    Views: engine,\n\n    // Default global path to search for views (can be overriden when calling Render())\n    ViewsLayout: "layouts/main",\n\n    // Enables/Disables access to `ctx.Locals()` entries in rendered views\n    // (defaults to false)\n    PassLocalsToViews: false,\n})\n'})}),"\n",(0,r.jsx)(n.h3,{id:"supported-engines",children:"Supported Engines"}),"\n",(0,r.jsxs)(n.p,{children:["The Fiber team maintains a ",(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template",children:"templates"})," package that provides wrappers for multiple template engines:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/ace/",children:"ace"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/amber/",children:"amber"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/django/",children:"django"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/handlebars",children:"handlebars"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/html",children:"html"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/jet",children:"jet"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/mustache",children:"mustache"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/pug",children:"pug"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/template/slim",children:"slim"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Custom template engines can implement the ",(0,r.jsx)(n.code,{children:"Views"})," interface to be supported in Fiber."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Views interface"',children:"type Views interface {\n    // Fiber executes Load() on app initialization to load/parse the templates\n    Load() error\n\n    // Outputs a template to the provided buffer using the provided template,\n    // template name, and binded data\n    Render(io.Writer, string, interface{}, ...string) error\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Render"})," method is linked to the ",(0,r.jsx)(n.a,{href:"/api/ctx#render",children:(0,r.jsx)(n.strong,{children:"ctx.Render()"})})," function that accepts a template name and binding data."]})}),"\n",(0,r.jsx)(n.h2,{id:"rendering-templates",children:"Rendering Templates"}),"\n",(0,r.jsxs)(n.p,{children:["Once an engine is set up, a route handler can call the ",(0,r.jsx)(n.a,{href:"/api/ctx#render",children:(0,r.jsx)(n.strong,{children:"ctx.Render()"})})," function with a template name and binded data to send the rendered template."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (c *Ctx) Render(name string, bind Map, layouts ...string) error\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.a,{href:"/api/ctx#render",children:(0,r.jsx)(n.strong,{children:"ctx.Render()"})})," searches for the template name in the ",(0,r.jsx)(n.code,{children:"ViewsLayout"})," path. To override this setting, provide the path(s) in the ",(0,r.jsx)(n.code,{children:"layouts"})," argument."]})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app.Get("/", func(c *fiber.Ctx) error {\n    return c.Render("index", fiber.Map{\n        "Title": "Hello, World!",\n    })\n\n})\n'})})}),(0,r.jsx)(s.A,{value:"index",label:"layouts/index.html",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n    <body>\n        <h1>{{.Title}}</h1>\n    </body>\n</html>\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["If the Fiber config option ",(0,r.jsx)(n.code,{children:"PassLocalsToViews"})," is enabled, then all locals set using ",(0,r.jsx)(n.code,{children:"ctx.Locals(key, value)"})," will be passed to the template. It is important to avoid clashing keys when using this setting."]})}),"\n",(0,r.jsx)(n.h2,{id:"advanced-templating",children:"Advanced Templating"}),"\n",(0,r.jsx)(n.h3,{id:"custom-functions",children:"Custom Functions"}),"\n",(0,r.jsx)(n.p,{children:"Fiber supports adding custom functions to templates."}),"\n",(0,r.jsx)(n.h4,{id:"addfunc",children:"AddFunc"}),"\n",(0,r.jsx)(n.p,{children:"Adds a global function to all templates."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (e *Engine) AddFunc(name string, fn interface{}) IEngineCore\n"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"add-func-example",label:"AddFunc Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Add `ToUpper` to engine\nengine := html.New("./views", ".html")\nengine.AddFunc("ToUpper", func(s string) string {\n    return strings.ToUpper(s)\n}\n\n// Initialize Fiber App\napp := fiber.New(fiber.Config{\n    Views: engine,\n})\n\napp.Get("/", func (c *fiber.Ctx) error {\n    return c.Render("index", fiber.Map{\n        "Content": "hello, world!"\n    })\n})\n'})})}),(0,r.jsx)(s.A,{value:"add-func-template",label:"views/index.html",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n    <body>\n        <p>This will be in {{ToUpper "all caps"}}:</p>\n        <p>{{ToUpper .Content}}</p>\n    </body>\n</html>\n'})})})]}),"\n",(0,r.jsx)(n.h4,{id:"addfuncmap",children:"AddFuncMap"}),"\n",(0,r.jsx)(n.p,{children:"Adds a Map of functions (keyed by name) to all templates."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (e *Engine) AddFuncMap(m map[string]interface{}) IEngineCore\n"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"add-func-map-example",label:"AddFuncMap Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Add `ToUpper` to engine\nengine := html.New("./views", ".html")\nengine.AddFuncMap(map[string]interface{}{\n    "ToUpper": func(s string) string {\n        return strings.ToUpper(s)\n    },\n})\n\n// Initialize Fiber App\napp := fiber.New(fiber.Config{\n    Views: engine,\n})\n\napp.Get("/", func (c *fiber.Ctx) error {\n    return c.Render("index", fiber.Map{\n        "Content": "hello, world!"\n    })\n})\n'})})}),(0,r.jsx)(s.A,{value:"add-func-map-template",label:"views/index.html",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n    <body>\n        <p>This will be in {{ToUpper "all caps"}}:</p>\n        <p>{{ToUpper .Content}}</p>\n    </body>\n</html>\n'})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For more advanced template documentation, please visit the ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/template",children:"gofiber/template GitHub Repository"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"full-example",children:"Full Example"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html/v2"\n)\n\nfunc main() {\n    // Initialize standard Go html template engine\n    engine := html.New("./views", ".html")\n    // If you want to use another engine,\n    // just replace with following:\n    // Create a new engine with django\n\t// engine := django.New("./views", ".django")\n\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index template\n        return c.Render("index", fiber.Map{\n            "Title": "Go Fiber Template Example",\n            "Description": "An example template",\n            "Greeting": "Hello, world!",\n        });\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})})}),(0,r.jsx)(s.A,{value:"index",label:"views/index.html",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n    <head>\n        <title>{{.Title}}</title>\n        <meta name="description" content="{{.Description}}">\n    </head>\n    <body>\n        <h1>{{.Title}}</h1>\n        <p>{{.Greeting}}</p>\n    </body>\n</html>\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),r=t(34164),i=t(23104),l=t(56347),s=t(205),o=t(57485),d=t(31682),c=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=p(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[d,u]=m({queryString:t,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),x=(()=>{const e=d??g;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function j(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=s[t].value;r!==a&&(d(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var a=t(96540);const r={},i=a.createContext(r);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);