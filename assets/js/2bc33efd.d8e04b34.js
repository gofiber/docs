"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[86208],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=d(r),c=a,u=m["".concat(p,".").concat(c)]||m[c]||f[c]||i;return r?n.createElement(u,o(o({ref:e},s),{},{components:r})):n.createElement(u,o({ref:e},s))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[m]="string"==typeof t?t:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},24605:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={id:"monitor"},o="Monitor",l={unversionedId:"api/middleware/monitor",id:"version-v2.x/api/middleware/monitor",title:"Monitor",description:"Monitor middleware for Fiber that reports server metrics, inspired by express-status-monitor",source:"@site/versioned_docs/version-v2.x/api/middleware/monitor.md",sourceDirName:"api/middleware",slug:"/api/middleware/monitor",permalink:"/api/middleware/monitor",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1708310554,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{id:"monitor"},sidebar:"tutorialSidebar",previous:{title:"Logger",permalink:"/api/middleware/logger"},next:{title:"Pprof",permalink:"/api/middleware/pprof"}},p={},d=[{value:"Signatures",id:"signatures",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],s={toc:d},m="wrapper";function f(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"monitor"},"Monitor"),(0,a.kt)("p",null,"Monitor middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that reports server metrics, inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RafalWilinski/express-status-monitor"},"express-status-monitor")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Monitor is still in beta, API might change in the future!")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/nHAtBpJ.gif",alt:null})),(0,a.kt)("h3",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New() fiber.Handler\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/monitor"\n)\n')),(0,a.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config (Assign the middleware to /metrics)\napp.Get("/metrics", monitor.New())\n\n// Or extend your config for customization\n// Assign the middleware to /metrics\n// and change the Title to `MyService Metrics Page`\napp.Get("/metrics", monitor.New(monitor.Config{Title: "MyService Metrics Page"}))\n')),(0,a.kt)("p",null,"You can also access the API endpoint with\n",(0,a.kt)("inlineCode",{parentName:"p"},'curl -X GET -H "Accept: application/json" http://localhost:3000/metrics')," which returns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"pid":{ "cpu":0.4568381746582226, "ram":20516864,   "conns":3 },\n "os": { "cpu":8.759124087593099,  "ram":3997155328, "conns":44,\n    "total_ram":8245489664, "load_avg":0.51 }}\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Title"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Metrics page title"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"Fiber Monitor"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Refresh"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Refresh period"),(0,a.kt)("td",{parentName:"tr",align:"left"},"3 seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"APIOnly"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whether the service should expose only the monitoring API"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CustomHead"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom HTML Code to Head Section(Before End)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"FontURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"FontURL for specify font resource path or URL"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"',(0,a.kt)("a",{parentName:"td",href:"https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap%22"},'https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ChartJsURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"ChartJsURL for specify ChartJS library path or URL"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"',(0,a.kt)("a",{parentName:"td",href:"https://cdn.jsdelivr.net/npm/chart.js@2.9/dist/Chart.bundle.min.js%22"},'https://cdn.jsdelivr.net/npm/chart.js@2.9/dist/Chart.bundle.min.js"'))))),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Title:      defaultTitle,\n    Refresh:    defaultRefresh,\n    FontURL:    defaultFontURL,\n    ChartJsURL: defaultChartJSURL,\n    CustomHead: defaultCustomHead,\n    APIOnly:    false,\n    Next:       nil,\n    index: newIndex(viewBag{\n        defaultTitle,\n        defaultRefresh,\n        defaultFontURL,\n        defaultChartJSURL,\n        defaultCustomHead,\n    }),\n}\n")))}f.isMDXComponent=!0}}]);