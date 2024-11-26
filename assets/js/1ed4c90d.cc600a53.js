"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["84025"],{14075:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>u,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"guide/templates","title":"\uD83D\uDCDD Templates","description":"Fiber supports server-side template engines.","source":"@site/versioned_docs/version-v1.x/guide/templates.md","sourceDirName":"guide","slug":"/guide/templates","permalink":"/v1.x/guide/templates","draft":false,"unlisted":false,"tags":[],"version":"v1.x","lastUpdatedAt":1732648136000,"sidebarPosition":3,"frontMatter":{"id":"templates","title":"\uD83D\uDCDD Templates","description":"Fiber supports server-side template engines.","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\uD83C\uDFAD Grouping","permalink":"/v1.x/guide/grouping"},"next":{"title":"\uD83D\uDD0E Validating","permalink":"/v1.x/guide/validating"}}'),a=n("85893"),i=n("50065"),l=n("47902"),s=n("5525");let o={id:"templates",title:"\uD83D\uDCDD Templates",description:"Fiber supports server-side template engines.",sidebar_position:3},c=void 0,u={},d=[{value:"Template interfaces",id:"template-interfaces",level:2},{value:"Engines",id:"engines",level:2}];function p(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"template-interfaces",children:"Template interfaces"}),"\n",(0,a.jsx)(t.p,{children:"Fiber provides a Views interface to provide your own template engine:"}),"\n",(0,a.jsx)(l.Z,{children:(0,a.jsx)(s.Z,{value:"views",label:"Views",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"type Views interface {\n    Load() error\n    Render(io.Writer, string, interface{}, ...string) error\n}\n"})})})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Views"})," interface contains a ",(0,a.jsx)(t.code,{children:"Load"})," and ",(0,a.jsx)(t.code,{children:"Render"})," method, ",(0,a.jsx)(t.code,{children:"Load"})," is executed by Fiber on app initialization to load/parse the templates."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"// Pass engine to Fiber's Views Engine\napp := fiber.New(&fiber.Settings{\n    Views: engine,\n})\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Render"})," method is linked to the ",(0,a.jsx)(t.a,{href:"../api/ctx#render",children:(0,a.jsx)(t.strong,{children:"ctx.Render()"})})," function that accepts a template name and binding data."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'app.Get("/", func(c *fiber.Ctx) error {\n    return c.Render("index", fiber.Map{\n        "hello": "world",\n    });\n})\n'})}),"\n",(0,a.jsx)(t.h2,{id:"engines",children:"Engines"}),"\n",(0,a.jsxs)(t.p,{children:["Fiber team maintains ",(0,a.jsx)(t.a,{href:"https://github.com/gofiber/template",children:"templates"})," package that provides wrappers for multiple template engines:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/gofiber/template/tree/master/html",children:"html"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/gofiber/template/tree/master/ace",children:"ace"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/gofiber/template/tree/master/amber",children:"amber"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/gofiber/template/tree/master/django",children:"django"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/gofiber/template/tree/master/handlebars",children:"handlebars"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/gofiber/template/tree/master/jet",children:"jet"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/gofiber/template/tree/master/mustache",children:"mustache"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/gofiber/template/tree/master/pug",children:"pug"})}),"\n"]}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(s.Z,{value:"example",label:"Example",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber"\n    "github.com/gofiber/template/html"\n)\n\nfunc main() {\n    // Initialize standard Go html template engine\n    engine := html.New("./views", ".html")\n\n    app := fiber.New(&fiber.Settings{\n        Views: engine,\n    })\n    app.Get("/", func(c *fiber.Ctx) {\n        // Render index template\n        _ = c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    app.Listen(3000)\n}\n'})})}),(0,a.jsx)(s.Z,{value:"index",label:"views/index.html",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markup",children:"<!DOCTYPE html>\n<body>\n    <h1>{{.Title}}</h1>\n</body>\n</html>\n"})})})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5525:function(e,t,n){n.d(t,{Z:()=>l});var r=n("85893");n("67294");var a=n("67026");let i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n,children:t})}},47902:function(e,t,n){n.d(t,{Z:()=>j});var r=n("85893"),a=n("67294"),i=n("67026"),l=n("69599"),s=n("16550"),o=n("32000"),c=n("4520"),u=n("38341"),d=n("76009");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var m=n("7227");let f="tabList__CuJ",g="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{let t=e.currentTarget,n=o[c.indexOf(t)].value;n!==a&&(u(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:p,onClick:d,...l,className:(0,i.Z)("tabs__item",g,l?.className,{"tabs__item--active":a===t}),children:n??t},t)})})}function x(e){let{lazy:t,children:n,selectedValue:l}=e,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=s.find(e=>e.props.value===l);return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function v(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,i=function(e){let{values:t,children:n}=e;return(0,a.useMemo)(()=>{let e=t??p(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}});return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,m]=(0,a.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:i})),[f,g]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),l=(0,c._X)(i);return[l,(0,a.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})},[i,r])]}({queryString:n,groupId:r}),[b,x]=function(e){var t;let{groupId:n}=e;let r=(t=n)?`docusaurus.tab.${t}`:null,[i,l]=(0,d.Nk)(r);return[i,(0,a.useCallback)(e=>{if(!!r)l.set(e)},[r,l])]}({groupId:r}),v=(()=>{let e=f??b;return h({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{v&&m(v)},[v]),{selectedValue:l,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),x(e)},[g,x,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",f),children:[(0,r.jsx)(b,{...t,...e}),(0,r.jsx)(x,{...t,...e})]})}function j(e){let t=(0,m.Z)();return(0,r.jsx)(v,{...e,children:p(e.children)},String(t))}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return l}});var r=n(67294);let a={},i=r.createContext(a);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);