"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["48"],{8196:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>u,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"guide/hooks","title":"\uD83C\uDFA3 Hooks","description":"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of this hooks:","source":"@site/versioned_docs/version-v2.x/guide/hooks.md","sourceDirName":"guide","slug":"/guide/hooks","permalink":"/guide/hooks","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1743771956000,"sidebarPosition":6,"frontMatter":{"id":"hooks","title":"\uD83C\uDFA3 Hooks","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDD0E Validation","permalink":"/guide/validation"},"next":{"title":"\u26A1 Make Fiber Faster","permalink":"/guide/faster-fiber"}}'),o=r("85893"),a=r("50065"),s=r("58168"),i=r("97645");let u={id:"hooks",title:"\uD83C\uDFA3 Hooks",sidebar_position:6},l=void 0,c={},d=[{value:"Constants",id:"constants",level:2},{value:"OnRoute",id:"onroute",level:2},{value:"OnName",id:"onname",level:2},{value:"OnGroup",id:"ongroup",level:2},{value:"OnGroupName",id:"ongroupname",level:2},{value:"OnListen",id:"onlisten",level:2},{value:"OnFork",id:"onfork",level:2},{value:"OnShutdown",id:"onshutdown",level:2},{value:"OnMount",id:"onmount",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of this hooks:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#onroute",children:"OnRoute"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#onname",children:"OnName"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#ongroup",children:"OnGroup"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#ongroupname",children:"OnGroupName"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#onlisten",children:"OnListen"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#onfork",children:"OnFork"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#onshutdown",children:"OnShutdown"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#onmount",children:"OnMount"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"constants",children:"Constants"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// Handlers define a function to create hooks for Fiber.\ntype OnRouteHandler = func(Route) error\ntype OnNameHandler = OnRouteHandler\ntype OnGroupHandler = func(Group) error\ntype OnGroupNameHandler = OnGroupHandler\ntype OnListenHandler = func(ListenData) error\ntype OnForkHandler = func(int) error\ntype OnShutdownHandler = func() error\ntype OnMountHandler = func(*App) error\n"})}),"\n",(0,o.jsx)(n.h2,{id:"onroute",children:"OnRoute"}),"\n",(0,o.jsxs)(n.p,{children:["OnRoute is a hook to execute user functions on each route registeration. Also you can get route properties by ",(0,o.jsx)(n.strong,{children:"route"})," parameter."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnRoute(handler ...OnRouteHandler)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"onname",children:"OnName"}),"\n",(0,o.jsxs)(n.p,{children:["OnName is a hook to execute user functions on each route naming. Also you can get route properties by ",(0,o.jsx)(n.strong,{children:"route"})," parameter."]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"OnName only works with naming routes, not groups."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnName(handler ...OnNameHandler)\n"})}),"\n",(0,o.jsx)(s.Z,{children:(0,o.jsx)(i.Z,{value:"onname-example",label:"OnName Example",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"fmt"\n\n	"github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n	app := fiber.New()\n\n	app.Get("/", func(c *fiber.Ctx) error {\n		return c.SendString(c.Route().Name)\n	}).Name("index")\n\n	app.Hooks().OnName(func(r fiber.Route) error {\n		fmt.Print("Name: " + r.Name + ", ")\n\n		return nil\n	})\n\n	app.Hooks().OnName(func(r fiber.Route) error {\n		fmt.Print("Method: " + r.Method + "\\n")\n\n		return nil\n	})\n\n	app.Get("/add/user", func(c *fiber.Ctx) error {\n		return c.SendString(c.Route().Name)\n	}).Name("addUser")\n\n	app.Delete("/destroy/user", func(c *fiber.Ctx) error {\n		return c.SendString(c.Route().Name)\n	}).Name("destroyUser")\n\n	app.Listen(":5000")\n}\n\n// Results:\n// Name: addUser, Method: GET\n// Name: destroyUser, Method: DELETE\n'})})})}),"\n",(0,o.jsx)(n.h2,{id:"ongroup",children:"OnGroup"}),"\n",(0,o.jsxs)(n.p,{children:["OnGroup is a hook to execute user functions on each group registeration. Also you can get group properties by ",(0,o.jsx)(n.strong,{children:"group"})," parameter."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnGroup(handler ...OnGroupHandler)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"ongroupname",children:"OnGroupName"}),"\n",(0,o.jsxs)(n.p,{children:["OnGroupName is a hook to execute user functions on each group naming. Also you can get group properties by ",(0,o.jsx)(n.strong,{children:"group"})," parameter."]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"OnGroupName only works with naming groups, not routes."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnGroupName(handler ...OnGroupNameHandler)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"onlisten",children:"OnListen"}),"\n",(0,o.jsx)(n.p,{children:"OnListen is a hook to execute user functions on Listen, ListenTLS, Listener."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnListen(handler ...OnListenHandler)\n"})}),"\n",(0,o.jsx)(s.Z,{children:(0,o.jsx)(i.Z,{value:"onlisten-example",label:"OnListen Example",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'app := fiber.New(fiber.Config{\n  DisableStartupMessage: true,\n})\n\napp.Hooks().OnListen(func(listenData fiber.ListenData) error {\n  if fiber.IsChild() {\n	  return nil\n  }\n  scheme := "http"\n  if data.TLS {\n    scheme = "https"\n  }\n  log.Println(scheme + "://" + listenData.Host + ":" + listenData.Port)\n  return nil\n})\n\napp.Listen(":5000")\n'})})})}),"\n",(0,o.jsx)(n.h2,{id:"onfork",children:"OnFork"}),"\n",(0,o.jsx)(n.p,{children:"OnFork is a hook to execute user functions on Fork."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnFork(handler ...OnForkHandler)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"onshutdown",children:"OnShutdown"}),"\n",(0,o.jsx)(n.p,{children:"OnShutdown is a hook to execute user functions after Shutdown."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnShutdown(handler ...OnShutdownHandler)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"onmount",children:"OnMount"}),"\n",(0,o.jsx)(n.p,{children:"OnMount is a hook to execute user function after mounting process. The mount event is fired when sub-app is mounted on a parent app. The parent app is passed as a parameter. It works for app and group mounting."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnMount(handler ...OnMountHandler) \n"})}),"\n",(0,o.jsx)(s.Z,{children:(0,o.jsx)(i.Z,{value:"onmount-example",label:"OnMount Example",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"fmt"\n\n	"github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n	app := New()\n	app.Get("/", testSimpleHandler).Name("x")\n\n	subApp := New()\n	subApp.Get("/test", testSimpleHandler)\n\n	subApp.Hooks().OnMount(func(parent *fiber.App) error {\n		fmt.Print("Mount path of parent app: "+parent.MountPath())\n		// ...\n\n		return nil\n	})\n\n	app.Mount("/sub", subApp)\n}\n\n// Result:\n// Mount path of parent app: \n'})})})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"OnName/OnRoute/OnGroup/OnGroupName hooks are mount-sensitive. If you use one of these routes on sub app and you mount it; paths of routes and groups will start with mount prefix."})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},97645:function(e,n,r){r.d(n,{Z:()=>a});var t=r("85893");r("67294");var o=r("67026");function a(e){let{children:n,hidden:r,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,o.Z)("tabItem_Ymn6",a),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>j});var t=r("85893"),o=r("67294"),a=r("67026"),s=r("34718"),i=r("16550"),u=r("8714"),l=r("89207"),c=r("69413"),d=r("54510");function p(e){return o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||o.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("6735");function f(e){let{className:n,block:r,selectedValue:o,selectValue:i,tabValues:u}=e,l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let n=e.currentTarget,r=u[l.indexOf(n)].value;r!==o&&(c(n),i(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{let r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:u.map(e=>{let{value:n,label:r,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>{l.push(e)},onKeyDown:p,onClick:d,...s,className:(0,a.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":o===n}),children:r??n},n)})})}function g(e){let{lazy:n,children:r,selectedValue:s}=e,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===s);return e?(0,o.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,a=function(e){let{values:n,children:r}=e;return(0,o.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[s,m]=(0,o.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:a})),[f,g]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(a),(0,o.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})},[a,t])]}({queryString:r,groupId:t}),[x,j]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,a]=(0,d.Nk)(r);return[t,(0,o.useCallback)(e=>{r&&a.set(e)},[r,a])]}({groupId:t}),b=(()=>{let e=f??x;return h({value:e,tabValues:a})?e:null})();return(0,u.Z)(()=>{b&&m(b)},[b]),{selectedValue:s,selectValue:(0,o.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),j(e)},[g,j,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(f,{...n,...e}),(0,t.jsx)(g,{...n,...e})]})}function j(e){let n=(0,m.Z)();return(0,t.jsx)(x,{...e,children:p(e.children)},String(n))}},50065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return s}});var t=r(67294);let o={},a=t.createContext(o);function s(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);