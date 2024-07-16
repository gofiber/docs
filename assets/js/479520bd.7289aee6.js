"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[84222],{37163:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(74848),o=r(28453),a=r(11470),s=r(19365);const i={id:"hooks",title:"\ud83c\udfa3 Hooks",sidebar_position:7},u=void 0,l={id:"api/hooks",title:"\ud83c\udfa3 Hooks",description:"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of these hooks:",source:"@site/docs/core/api/hooks.md",sourceDirName:"api",slug:"/api/hooks",permalink:"/next/api/hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/api/hooks.md",tags:[],version:"current",lastUpdatedAt:1721109857e3,sidebarPosition:7,frontMatter:{id:"hooks",title:"\ud83c\udfa3 Hooks",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcc3 Log",permalink:"/next/api/log"},next:{title:"\ud83d\udccb Constants",permalink:"/next/api/constants"}},c={},d=[{value:"Constants",id:"constants",level:2},{value:"OnRoute",id:"onroute",level:2},{value:"OnName",id:"onname",level:2},{value:"OnGroup",id:"ongroup",level:2},{value:"OnGroupName",id:"ongroupname",level:2},{value:"OnListen",id:"onlisten",level:2},{value:"OnFork",id:"onfork",level:2},{value:"OnShutdown",id:"onshutdown",level:2},{value:"OnMount",id:"onmount",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of these hooks:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#onroute",children:"OnRoute"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#onname",children:"OnName"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#ongroup",children:"OnGroup"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#ongroupname",children:"OnGroupName"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#onlisten",children:"OnListen"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#onfork",children:"OnFork"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#onshutdown",children:"OnShutdown"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#onmount",children:"OnMount"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"constants",children:"Constants"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// Handlers define a function to create hooks for Fiber.\ntype OnRouteHandler = func(Route) error\ntype OnNameHandler = OnRouteHandler\ntype OnGroupHandler = func(Group) error\ntype OnGroupNameHandler = OnGroupHandler\ntype OnListenHandler = func(ListenData) error\ntype OnForkHandler = func(int) error\ntype OnShutdownHandler = func() error\ntype OnMountHandler = func(*App) error\n"})}),"\n",(0,t.jsx)(n.h2,{id:"onroute",children:"OnRoute"}),"\n",(0,t.jsxs)(n.p,{children:["OnRoute is a hook to execute user functions on each route registeration. Also you can get route properties by ",(0,t.jsx)(n.strong,{children:"route"})," parameter."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnRoute(handler ...OnRouteHandler)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"onname",children:"OnName"}),"\n",(0,t.jsxs)(n.p,{children:["OnName is a hook to execute user functions on each route naming. Also you can get route properties by ",(0,t.jsx)(n.strong,{children:"route"})," parameter."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"OnName only works with naming routes, not groups."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnName(handler ...OnNameHandler)\n"})}),"\n",(0,t.jsx)(a.A,{children:(0,t.jsx)(s.A,{value:"onname-example",label:"OnName Example",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gofiber/fiber/v3"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", func(c fiber.Ctx) error {\n        return c.SendString(c.Route().Name)\n    }).Name("index")\n\n    app.Hooks().OnName(func(r fiber.Route) error {\n        fmt.Print("Name: " + r.Name + ", ")\n\n        return nil\n    })\n\n    app.Hooks().OnName(func(r fiber.Route) error {\n        fmt.Print("Method: " + r.Method + "\\n")\n\n        return nil\n    })\n\n    app.Get("/add/user", func(c fiber.Ctx) error {\n        return c.SendString(c.Route().Name)\n    }).Name("addUser")\n\n    app.Delete("/destroy/user", func(c fiber.Ctx) error {\n        return c.SendString(c.Route().Name)\n    }).Name("destroyUser")\n\n    app.Listen(":5000")\n}\n\n// Results:\n// Name: addUser, Method: GET\n// Name: destroyUser, Method: DELETE\n'})})})}),"\n",(0,t.jsx)(n.h2,{id:"ongroup",children:"OnGroup"}),"\n",(0,t.jsxs)(n.p,{children:["OnGroup is a hook to execute user functions on each group registeration. Also you can get group properties by ",(0,t.jsx)(n.strong,{children:"group"})," parameter."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnGroup(handler ...OnGroupHandler)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ongroupname",children:"OnGroupName"}),"\n",(0,t.jsxs)(n.p,{children:["OnGroupName is a hook to execute user functions on each group naming. Also you can get group properties by ",(0,t.jsx)(n.strong,{children:"group"})," parameter."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"OnGroupName only works with naming groups, not routes."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnGroupName(handler ...OnGroupNameHandler)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"onlisten",children:"OnListen"}),"\n",(0,t.jsx)(n.p,{children:"OnListen is a hook to execute user functions on Listen, ListenTLS, Listener."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnListen(handler ...OnListenHandler)\n"})}),"\n",(0,t.jsx)(a.A,{children:(0,t.jsx)(s.A,{value:"onlisten-example",label:"OnListen Example",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'app := fiber.New(fiber.Config{\n  DisableStartupMessage: true,\n})\n\napp.Hooks().OnListen(func(listenData fiber.ListenData) error {\n  if fiber.IsChild() {\n      return nil\n  }\n  scheme := "http"\n  if data.TLS {\n    scheme = "https"\n  }\n  log.Println(scheme + "://" + listenData.Host + ":" + listenData.Port)\n  return nil\n})\n\napp.Listen(":5000")\n'})})})}),"\n",(0,t.jsx)(n.h2,{id:"onfork",children:"OnFork"}),"\n",(0,t.jsx)(n.p,{children:"OnFork is a hook to execute user functions on Fork."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnFork(handler ...OnForkHandler)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"onshutdown",children:"OnShutdown"}),"\n",(0,t.jsx)(n.p,{children:"OnShutdown is a hook to execute user functions after Shutdown."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnShutdown(handler ...OnShutdownHandler)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"onmount",children:"OnMount"}),"\n",(0,t.jsx)(n.p,{children:"OnMount is a hook to execute user function after mounting process. The mount event is fired when sub-app is mounted on a parent app. The parent app is passed as a parameter. It works for app and group mounting."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnMount(handler ...OnMountHandler) \n"})}),"\n",(0,t.jsx)(a.A,{children:(0,t.jsx)(s.A,{value:"onmount-example",label:"OnMount Example",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gofiber/fiber/v3"\n)\n\nfunc main() {\n    app := New()\n    app.Get("/", testSimpleHandler).Name("x")\n\n    subApp := New()\n    subApp.Get("/test", testSimpleHandler)\n\n    subApp.Hooks().OnMount(func(parent *fiber.App) error {\n        fmt.Print("Mount path of parent app: "+parent.MountPath())\n        // ...\n\n        return nil\n    })\n\n    app.Mount("/sub", subApp)\n}\n\n// Result:\n// Mount path of parent app: \n'})})})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"OnName/OnRoute/OnGroup/OnGroupName hooks are mount-sensitive. If you use one of these routes on sub app, and you mount it; paths of routes and groups will start with mount prefix."})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(34164);const o={tabItem:"tabItem_Ymn6"};var a=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(96540),o=r(34164),a=r(23104),s=r(56347),i=r(205),u=r(57485),l=r(31682),c=r(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const o=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,a=p(e),[s,u]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[l,d]=m({queryString:r,groupId:o}),[f,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,c.Dv)(r);return[o,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:o}),x=(()=>{const e=l??f;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&u(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function j(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),c=e=>{const n=e.currentTarget,r=u.indexOf(n),o=i[r].value;o!==t&&(l(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,o.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function O(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function k(e){const n=(0,g.A)();return(0,b.jsx)(O,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(96540);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);