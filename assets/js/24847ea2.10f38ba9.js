"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["48"],{54994:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>u,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"guide/hooks","title":"\uD83C\uDFA3 Hooks","description":"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of this hooks:","source":"@site/versioned_docs/version-v2.x/guide/hooks.md","sourceDirName":"guide","slug":"/guide/hooks","permalink":"/guide/hooks","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1731573495000,"sidebarPosition":6,"frontMatter":{"id":"hooks","title":"\uD83C\uDFA3 Hooks","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDD0E Validation","permalink":"/guide/validation"},"next":{"title":"\u26A1 Make Fiber Faster","permalink":"/guide/faster-fiber"}}'),o=r("85893"),a=r("50065"),i=r("47902"),s=r("5525");let l={id:"hooks",title:"\uD83C\uDFA3 Hooks",sidebar_position:6},u=void 0,c={},d=[{value:"Constants",id:"constants",level:2},{value:"OnRoute",id:"onroute",level:2},{value:"OnName",id:"onname",level:2},{value:"OnGroup",id:"ongroup",level:2},{value:"OnGroupName",id:"ongroupname",level:2},{value:"OnListen",id:"onlisten",level:2},{value:"OnFork",id:"onfork",level:2},{value:"OnShutdown",id:"onshutdown",level:2},{value:"OnMount",id:"onmount",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of this hooks:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#onroute",children:"OnRoute"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#onname",children:"OnName"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#ongroup",children:"OnGroup"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#ongroupname",children:"OnGroupName"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#onlisten",children:"OnListen"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#onfork",children:"OnFork"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#onshutdown",children:"OnShutdown"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#onmount",children:"OnMount"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"constants",children:"Constants"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// Handlers define a function to create hooks for Fiber.\ntype OnRouteHandler = func(Route) error\ntype OnNameHandler = OnRouteHandler\ntype OnGroupHandler = func(Group) error\ntype OnGroupNameHandler = OnGroupHandler\ntype OnListenHandler = func(ListenData) error\ntype OnForkHandler = func(int) error\ntype OnShutdownHandler = func() error\ntype OnMountHandler = func(*App) error\n"})}),"\n",(0,o.jsx)(n.h2,{id:"onroute",children:"OnRoute"}),"\n",(0,o.jsxs)(n.p,{children:["OnRoute is a hook to execute user functions on each route registeration. Also you can get route properties by ",(0,o.jsx)(n.strong,{children:"route"})," parameter."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnRoute(handler ...OnRouteHandler)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"onname",children:"OnName"}),"\n",(0,o.jsxs)(n.p,{children:["OnName is a hook to execute user functions on each route naming. Also you can get route properties by ",(0,o.jsx)(n.strong,{children:"route"})," parameter."]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"OnName only works with naming routes, not groups."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnName(handler ...OnNameHandler)\n"})}),"\n",(0,o.jsx)(i.Z,{children:(0,o.jsx)(s.Z,{value:"onname-example",label:"OnName Example",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"fmt"\n\n	"github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n	app := fiber.New()\n\n	app.Get("/", func(c *fiber.Ctx) error {\n		return c.SendString(c.Route().Name)\n	}).Name("index")\n\n	app.Hooks().OnName(func(r fiber.Route) error {\n		fmt.Print("Name: " + r.Name + ", ")\n\n		return nil\n	})\n\n	app.Hooks().OnName(func(r fiber.Route) error {\n		fmt.Print("Method: " + r.Method + "\\n")\n\n		return nil\n	})\n\n	app.Get("/add/user", func(c *fiber.Ctx) error {\n		return c.SendString(c.Route().Name)\n	}).Name("addUser")\n\n	app.Delete("/destroy/user", func(c *fiber.Ctx) error {\n		return c.SendString(c.Route().Name)\n	}).Name("destroyUser")\n\n	app.Listen(":5000")\n}\n\n// Results:\n// Name: addUser, Method: GET\n// Name: destroyUser, Method: DELETE\n'})})})}),"\n",(0,o.jsx)(n.h2,{id:"ongroup",children:"OnGroup"}),"\n",(0,o.jsxs)(n.p,{children:["OnGroup is a hook to execute user functions on each group registeration. Also you can get group properties by ",(0,o.jsx)(n.strong,{children:"group"})," parameter."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnGroup(handler ...OnGroupHandler)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"ongroupname",children:"OnGroupName"}),"\n",(0,o.jsxs)(n.p,{children:["OnGroupName is a hook to execute user functions on each group naming. Also you can get group properties by ",(0,o.jsx)(n.strong,{children:"group"})," parameter."]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"OnGroupName only works with naming groups, not routes."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnGroupName(handler ...OnGroupNameHandler)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"onlisten",children:"OnListen"}),"\n",(0,o.jsx)(n.p,{children:"OnListen is a hook to execute user functions on Listen, ListenTLS, Listener."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnListen(handler ...OnListenHandler)\n"})}),"\n",(0,o.jsx)(i.Z,{children:(0,o.jsx)(s.Z,{value:"onlisten-example",label:"OnListen Example",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'app := fiber.New(fiber.Config{\n  DisableStartupMessage: true,\n})\n\napp.Hooks().OnListen(func(listenData fiber.ListenData) error {\n  if fiber.IsChild() {\n	  return nil\n  }\n  scheme := "http"\n  if data.TLS {\n    scheme = "https"\n  }\n  log.Println(scheme + "://" + listenData.Host + ":" + listenData.Port)\n  return nil\n})\n\napp.Listen(":5000")\n'})})})}),"\n",(0,o.jsx)(n.h2,{id:"onfork",children:"OnFork"}),"\n",(0,o.jsx)(n.p,{children:"OnFork is a hook to execute user functions on Fork."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnFork(handler ...OnForkHandler)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"onshutdown",children:"OnShutdown"}),"\n",(0,o.jsx)(n.p,{children:"OnShutdown is a hook to execute user functions after Shutdown."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnShutdown(handler ...OnShutdownHandler)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"onmount",children:"OnMount"}),"\n",(0,o.jsx)(n.p,{children:"OnMount is a hook to execute user function after mounting process. The mount event is fired when sub-app is mounted on a parent app. The parent app is passed as a parameter. It works for app and group mounting."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnMount(handler ...OnMountHandler) \n"})}),"\n",(0,o.jsx)(i.Z,{children:(0,o.jsx)(s.Z,{value:"onmount-example",label:"OnMount Example",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"fmt"\n\n	"github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n	app := New()\n	app.Get("/", testSimpleHandler).Name("x")\n\n	subApp := New()\n	subApp.Get("/test", testSimpleHandler)\n\n	subApp.Hooks().OnMount(func(parent *fiber.App) error {\n		fmt.Print("Mount path of parent app: "+parent.MountPath())\n		// ...\n\n		return nil\n	})\n\n	app.Mount("/sub", subApp)\n}\n\n// Result:\n// Mount path of parent app: \n'})})})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"OnName/OnRoute/OnGroup/OnGroupName hooks are mount-sensitive. If you use one of these routes on sub app and you mount it; paths of routes and groups will start with mount prefix."})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},5525:function(e,n,r){r.d(n,{Z:()=>i});var t=r("85893");r("67294");var o=r("67026");let a="tabItem_Ymn6";function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:r,children:n})}},47902:function(e,n,r){r.d(n,{Z:()=>v});var t=r("85893"),o=r("67294"),a=r("67026"),i=r("69599"),s=r("16550"),l=r("32000"),u=r("4520"),c=r("38341"),d=r("76009");function p(e){return o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||o.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("7227");let f="tabList__CuJ",g="tabItem_LNqP";function x(e){let{className:n,block:r,selectedValue:o,selectValue:s,tabValues:l}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let n=e.currentTarget,r=l[u.indexOf(n)].value;r!==o&&(c(n),s(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map(e=>{let{value:n,label:r,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>u.push(e),onKeyDown:p,onClick:d,...i,className:(0,a.Z)("tabs__item",g,i?.className,{"tabs__item--active":o===n}),children:r??n},n)})})}function j(e){let{lazy:n,children:r,selectedValue:i}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===i);return e?(0,o.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,a=function(e){let{values:n,children:r}=e;return(0,o.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[i,m]=(0,o.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:a})),[f,g]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),i=(0,u._X)(a);return[i,(0,o.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})},[a,t])]}({queryString:r,groupId:t}),[x,j]=function(e){var n;let{groupId:r}=e;let t=(n=r)?`docusaurus.tab.${n}`:null,[a,i]=(0,d.Nk)(t);return[a,(0,o.useCallback)(e=>{if(!!t)i.set(e)},[t,i])]}({groupId:t}),b=(()=>{let e=f??x;return h({value:e,tabValues:a})?e:null})();return(0,l.Z)(()=>{b&&m(b)},[b]),{selectedValue:i,selectValue:(0,o.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),j(e)},[g,j,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container",f),children:[(0,t.jsx)(x,{...n,...e}),(0,t.jsx)(j,{...n,...e})]})}function v(e){let n=(0,m.Z)();return(0,t.jsx)(b,{...e,children:p(e.children)},String(n))}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return i}});var t=r(67294);let o={},a=t.createContext(o);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);