"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["66764"],{15719:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"middleware/monitor","title":"Monitor","description":"Monitor middleware for Fiber that reports server metrics, inspired by express-status-monitor","source":"@site/docs/core/middleware/monitor.md","sourceDirName":"middleware","slug":"/middleware/monitor","permalink":"/next/middleware/monitor","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/middleware/monitor.md","tags":[],"version":"current","lastUpdatedAt":1738589498000,"frontMatter":{"id":"monitor"},"sidebar":"left_sidebar","previous":{"title":"Logger","permalink":"/next/middleware/logger"},"next":{"title":"Pprof","permalink":"/next/middleware/pprof"}}'),l=n("85893"),r=n("50065");let s={id:"monitor"},d="Monitor",o={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function a(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"monitor",children:"Monitor"})}),"\n",(0,l.jsxs)(t.p,{children:["Monitor middleware for ",(0,l.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that reports server metrics, inspired by ",(0,l.jsx)(t.a,{href:"https://github.com/RafalWilinski/express-status-monitor",children:"express-status-monitor"})]}),"\n",(0,l.jsx)(t.admonition,{type:"caution",children:(0,l.jsx)(t.p,{children:"Monitor is still in beta, API might change in the future!"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://i.imgur.com/nHAtBpJ.gif",alt:""})}),"\n",(0,l.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:"func New() fiber.Handler\n"})}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/monitor"\n)\n'})}),"\n",(0,l.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'// Initialize default config (Assign the middleware to /metrics)\napp.Get("/metrics", monitor.New())\n\n// Or extend your config for customization\n// Assign the middleware to /metrics\n// and change the Title to `MyService Metrics Page`\napp.Get("/metrics", monitor.New(monitor.Config{Title: "MyService Metrics Page"}))\n'})}),"\n",(0,l.jsxs)(t.p,{children:["You can also access the API endpoint with\n",(0,l.jsx)(t.code,{children:'curl -X GET -H "Accept: application/json" http://localhost:3000/metrics'})," which returns:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'{\n    "pid":{ \n        "cpu":0.4568381746582226,\n        "ram":20516864,\n        "conns":3\n    },\n    "os": {\n        "cpu":8.759124087593099,  "ram":3997155328, "conns":44,\n        "total_ram":8245489664, "load_avg":0.51\n    }\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Title"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Metrics page title"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:'"Fiber Monitor"'})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Refresh"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"time.Duration"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Refresh period"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"3 seconds"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"APIOnly"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Whether the service should expose only the monitoring API"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"func(fiber.Ctx) bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"CustomHead"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Custom HTML Code to Head Section(Before End)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"empty"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"FontURL"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"FontURL for specify font resource path or URL"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:['"',(0,l.jsx)(t.a,{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap",children:"fonts.googleapis.com"}),'"']})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChartJsURL"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChartJsURL for specify ChartJS library path or URL"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:['"',(0,l.jsx)(t.a,{href:"https://cdn.jsdelivr.net/npm/chart.js@2.9/dist/Chart.bundle.min.js",children:"cdn.jsdelivr.net"}),'"']})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n    Title:      defaultTitle,\n    Refresh:    defaultRefresh,\n    FontURL:    defaultFontURL,\n    ChartJsURL: defaultChartJSURL,\n    CustomHead: defaultCustomHead,\n    APIOnly:    false,\n    Next:       nil,\n    index: newIndex(viewBag{\n        defaultTitle,\n        defaultRefresh,\n        defaultFontURL,\n        defaultChartJSURL,\n        defaultCustomHead,\n    }),\n}\n"})})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var i=n(67294);let l={},r=i.createContext(l);function s(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);