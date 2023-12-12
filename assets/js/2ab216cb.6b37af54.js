"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[54435],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(f,u(u({ref:n},p),{},{components:t})):r.createElement(f,u({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(67294),a=t(86010);const o={tabItem:"tabItem_Ymn6"};function u(e){let{children:n,hidden:t,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,u),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(87462),a=t(67294),o=t(86010),u=t(12466),l=t(16550),i=t(91980),s=t(67392),p=t(50012);function c(e){return function(e){var n;return(null==(n=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=m(e),[u,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[i,s]=f({queryString:t,groupId:r}),[c,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,p.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),h=(()=>{const e=i??c;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var h=t(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:l,selectValue:i,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,u.o5)(),m=e=>{const n=e.currentTarget,t=p.indexOf(n),r=s[t].value;r!==l&&(c(n),i(r))},d=e=>{var n;let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:u}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>p.push(e),onKeyDown:d,onClick:m},u,{className:(0,o.Z)("tabs__item",k.tabItem,null==u?void 0:u.className,{"tabs__item--active":l===n})}),t??n)})))}function O(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function N(e){const n=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},a.createElement(b,(0,r.Z)({},e,n)),a.createElement(O,(0,r.Z)({},e,n)))}function v(e){const n=(0,h.Z)();return a.createElement(N,(0,r.Z)({key:String(n)},e))}},19415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905)),o=t(74866),u=t(85162);const l={id:"hooks",title:"\ud83c\udfa3 Hooks",sidebar_position:6},i=void 0,s={unversionedId:"guide/hooks",id:"guide/hooks",title:"\ud83c\udfa3 Hooks",description:"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of this hooks:",source:"@site/docs/core/guide/hooks.md",sourceDirName:"guide",slug:"/guide/hooks",permalink:"/next/guide/hooks",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/guide/hooks.md",tags:[],version:"current",lastUpdatedAt:1702389371,formattedLastUpdatedAt:"Dec 12, 2023",sidebarPosition:6,frontMatter:{id:"hooks",title:"\ud83c\udfa3 Hooks",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0e Validation",permalink:"/next/guide/validation"},next:{title:"\u26a1 Make Fiber Faster",permalink:"/next/guide/faster-fiber"}},p={},c=[{value:"Constants",id:"constants",level:2},{value:"OnRoute",id:"onroute",level:2},{value:"OnName",id:"onname",level:2},{value:"OnGroup",id:"ongroup",level:2},{value:"OnGroupName",id:"ongroupname",level:2},{value:"OnListen",id:"onlisten",level:2},{value:"OnFork",id:"onfork",level:2},{value:"OnShutdown",id:"onshutdown",level:2},{value:"OnMount",id:"onmount",level:2}],m={toc:c},d="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of this hooks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onroute"},"OnRoute")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onname"},"OnName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ongroup"},"OnGroup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ongroupname"},"OnGroupName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onlisten"},"OnListen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onfork"},"OnFork")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onshutdown"},"OnShutdown")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onmount"},"OnMount"))),(0,a.kt)("h2",{id:"constants"},"Constants"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Handlers define a function to create hooks for Fiber.\ntype OnRouteHandler = func(Route) error\ntype OnNameHandler = OnRouteHandler\ntype OnGroupHandler = func(Group) error\ntype OnGroupNameHandler = OnGroupHandler\ntype OnListenHandler = func(ListenData) error\ntype OnForkHandler = func(int) error\ntype OnShutdownHandler = func() error\ntype OnMountHandler = func(*App) error\n")),(0,a.kt)("h2",{id:"onroute"},"OnRoute"),(0,a.kt)("p",null,"OnRoute is a hook to execute user functions on each route registeration. Also you can get route properties by ",(0,a.kt)("strong",{parentName:"p"},"route")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) OnRoute(handler ...OnRouteHandler)\n")),(0,a.kt)("h2",{id:"onname"},"OnName"),(0,a.kt)("p",null,"OnName is a hook to execute user functions on each route naming. Also you can get route properties by ",(0,a.kt)("strong",{parentName:"p"},"route")," parameter."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"OnName only works with naming routes, not groups.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) OnName(handler ...OnNameHandler)\n")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"onname-example",label:"OnName Example",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString(c.Route().Name)\n    }).Name("index")\n\n    app.Hooks().OnName(func(r fiber.Route) error {\n        fmt.Print("Name: " + r.Name + ", ")\n\n        return nil\n    })\n\n    app.Hooks().OnName(func(r fiber.Route) error {\n        fmt.Print("Method: " + r.Method + "\\n")\n\n        return nil\n    })\n\n    app.Get("/add/user", func(c *fiber.Ctx) error {\n        return c.SendString(c.Route().Name)\n    }).Name("addUser")\n\n    app.Delete("/destroy/user", func(c *fiber.Ctx) error {\n        return c.SendString(c.Route().Name)\n    }).Name("destroyUser")\n\n    app.Listen(":5000")\n}\n\n// Results:\n// Name: addUser, Method: GET\n// Name: destroyUser, Method: DELETE\n')))),(0,a.kt)("h2",{id:"ongroup"},"OnGroup"),(0,a.kt)("p",null,"OnGroup is a hook to execute user functions on each group registeration. Also you can get group properties by ",(0,a.kt)("strong",{parentName:"p"},"group")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) OnGroup(handler ...OnGroupHandler)\n")),(0,a.kt)("h2",{id:"ongroupname"},"OnGroupName"),(0,a.kt)("p",null,"OnGroupName is a hook to execute user functions on each group naming. Also you can get group properties by ",(0,a.kt)("strong",{parentName:"p"},"group")," parameter."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"OnGroupName only works with naming groups, not routes.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) OnGroupName(handler ...OnGroupNameHandler)\n")),(0,a.kt)("h2",{id:"onlisten"},"OnListen"),(0,a.kt)("p",null,"OnListen is a hook to execute user functions on Listen, ListenTLS, Listener."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) OnListen(handler ...OnListenHandler)\n")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"onlisten-example",label:"OnListen Example",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app := fiber.New(fiber.Config{\n  DisableStartupMessage: true,\n})\n\napp.Hooks().OnListen(func(listenData fiber.ListenData) error {\n  if fiber.IsChild() {\n      return nil\n  }\n  scheme := "http"\n  if data.TLS {\n    scheme = "https"\n  }\n  log.Println(scheme + "://" + listenData.Host + ":" + listenData.Port)\n  return nil\n})\n\napp.Listen(":5000")\n')))),(0,a.kt)("h2",{id:"onfork"},"OnFork"),(0,a.kt)("p",null,"OnFork is a hook to execute user functions on Fork."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) OnFork(handler ...OnForkHandler)\n")),(0,a.kt)("h2",{id:"onshutdown"},"OnShutdown"),(0,a.kt)("p",null,"OnShutdown is a hook to execute user functions after Shutdown."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) OnShutdown(handler ...OnShutdownHandler)\n")),(0,a.kt)("h2",{id:"onmount"},"OnMount"),(0,a.kt)("p",null,"OnMount is a hook to execute user function after mounting process. The mount event is fired when sub-app is mounted on a parent app. The parent app is passed as a parameter. It works for app and group mounting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (h *Hooks) OnMount(handler ...OnMountHandler) \n")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"onmount-example",label:"OnMount Example",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    app := New()\n    app.Get("/", testSimpleHandler).Name("x")\n\n    subApp := New()\n    subApp.Get("/test", testSimpleHandler)\n\n    subApp.Hooks().OnMount(func(parent *fiber.App) error {\n        fmt.Print("Mount path of parent app: "+parent.MountPath())\n        // ...\n\n        return nil\n    })\n\n    app.Mount("/sub", subApp)\n}\n\n// Result:\n// Mount path of parent app: \n')))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"OnName/OnRoute/OnGroup/OnGroupName hooks are mount-sensitive. If you use one of these routes on sub app and you mount it; paths of routes and groups will start with mount prefix.")))}f.isMDXComponent=!0}}]);