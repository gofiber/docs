"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[4157],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),o=a(7392),s=a(7094),p=a(2466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:a,block:i,defaultValue:c,values:d,groupId:b,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,o.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[w,T]=(0,r.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=b){const e=y[b];null!=e&&e!==w&&h.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=x.indexOf(t),n=h[a].value;n!==w&&(E(t),T(n),null!=b&&N(b,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},h.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:C,onClick:O},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},3302:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),i=a(5162);const o={id:"templates",title:"\ud83d\udcdd Templates",description:"Fiber supports server-side template engines.",sidebar_position:3},s=void 0,p={unversionedId:"guide/templates",id:"guide/templates",title:"\ud83d\udcdd Templates",description:"Fiber supports server-side template engines.",source:"@site/docs/guide/templates.md",sourceDirName:"guide",slug:"/guide/templates",permalink:"/guide/templates",draft:!1,editUrl:"https://github.com/gofiber/docs/docs/guide/templates.md",tags:[],version:"current",lastUpdatedBy:"Muhammed Efe \xc7etin",lastUpdatedAt:1668439753,formattedLastUpdatedAt:"Nov 14, 2022",sidebarPosition:3,frontMatter:{id:"templates",title:"\ud83d\udcdd Templates",description:"Fiber supports server-side template engines.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfad Grouping",permalink:"/guide/grouping"},next:{title:"\ud83d\udc1b Error Handling",permalink:"/guide/error-handling"}},u={},m=[{value:"Template interfaces",id:"template-interfaces",level:2},{value:"Engines",id:"engines",level:2}],c={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"template-interfaces"},"Template interfaces"),(0,r.kt)("p",null,"Fiber provides a Views interface to provide your own template engine:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"views",label:"Views",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Views interface {\n    Load() error\n    Render(io.Writer, string, interface{}, ...string) error\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Views")," interface contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"Load")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Render")," method, ",(0,r.kt)("inlineCode",{parentName:"p"},"Load")," is executed by Fiber on app initialization to load/parse the templates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Pass engine to Fiber\'s Views Engine\napp := fiber.New(fiber.Config{\n    Views: engine,\n    // Views Layout is the global layout for all template render until override on Render function.\n    ViewsLayout: "layouts/main"\n})\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Render")," method is linked to the ",(0,r.kt)("a",{parentName:"p",href:"/api/ctx#render"},(0,r.kt)("strong",{parentName:"a"},"ctx.Render","(",")"))," function that accepts a template name and binding data. It will use global layout if layout is not being defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"Render")," function.\nIf the Fiber config option ",(0,r.kt)("inlineCode",{parentName:"p"},"PassLocalsToViews")," is enabled, then all locals set using ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.Locals(key, value)")," will be passed to the template."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/", func(c *fiber.Ctx) error {\n    return c.Render("index", fiber.Map{\n        "hello": "world",\n    });\n})\n')),(0,r.kt)("h2",{id:"engines"},"Engines"),(0,r.kt)("p",null,"Fiber team maintains ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/template"},"templates")," package that provides wrappers for multiple template engines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/html"},"html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/ace"},"ace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/amber"},"amber")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/django"},"django")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/handlebars"},"handlebars")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/jet"},"jet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/mustache"},"mustache")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/pug"},"pug"))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html"\n)\n\nfunc main() {\n    // Initialize standard Go html template engine\n    engine := html.New("./views", ".html")\n\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index template\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'))),(0,r.kt)(i.Z,{value:"index",label:"views/index.html",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"<!DOCTYPE html>\n<body>\n    <h1>{{.Title}}</h1>\n</body>\n</html>\n")))))}d.isMDXComponent=!0}}]);