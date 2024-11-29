"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["29867"],{19545:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>s});var n=JSON.parse('{"id":"monitor/monitor","title":"Monitor","description":"Release","source":"@site/docs/contrib/monitor/README.md","sourceDirName":"monitor","slug":"/monitor/","permalink":"/contrib/next/monitor/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/monitor/README.md","tags":[],"version":"current","lastUpdatedAt":1732892323000,"frontMatter":{"id":"monitor"},"sidebar":"left_sidebar","previous":{"title":"LoadShed","permalink":"/contrib/next/loadshed/"},"next":{"title":"Opafiber","permalink":"/contrib/next/opafiber/"}}'),l=i("85893"),r=i("50065");let s={id:"monitor"},o="Monitor",d={},c=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:3},{value:"Config",id:"config",level:3},{value:"Example",id:"example",level:3},{value:"Default Config",id:"default-config",level:2}];function a(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"monitor",children:"Monitor"})}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=monitor*",alt:"Release"}),"\n",(0,l.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"}),"\n",(0,l.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,l.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,l.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,l.jsxs)(t.p,{children:["Monitor middleware for ",(0,l.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that reports server metrics, inspired by ",(0,l.jsx)(t.a,{href:"https://github.com/RafalWilinski/express-status-monitor",children:"express-status-monitor"})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://i.imgur.com/nHAtBpJ.gif",alt:""})}),"\n",(0,l.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,l.jsx)(t.p,{children:"This middleware supports Fiber v3."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v3\ngo get -u github.com/gofiber/contrib/monitor\n"})}),"\n",(0,l.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:"monitor.New(config ...monitor.Config) fiber.Handler\n"})}),"\n",(0,l.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Title"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Metrics page title."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"Fiber Monitor"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Refresh"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"time.Duration"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Refresh period."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"3 seconds"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"APIOnly"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Whether the service should expose only the montioring API."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"false"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"func(c *fiber.Ctx) bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Define a function to add custom fields."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"CustomHead"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Custom HTML code to Head Section(Before End)."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"empty"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"FontURL"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"FontURL for specilt font resource path or URL. also you can use relative path."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChartJsURL"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChartJsURL for specilt chartjs library, path or URL, also you can use relative path."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"https://cdn.jsdelivr.net/npm/chart.js@2.9/dist/Chart.bundle.min.js"})})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/contrib/monitor"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    // Initialize default config (Assign the middleware to /metrics)\n    app.Get("/metrics", monitor.New())\n\n    // Or extend your config for customization\n    // Assign the middleware to /metrics\n    // and change the Title to `MyService Metrics Page`\n    app.Get("/metrics", monitor.New(monitor.Config{Title: "MyService Metrics Page"}))\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n	Title:      defaultTitle,\n	Refresh:    defaultRefresh,\n	FontURL:    defaultFontURL,\n	ChartJsURL: defaultChartJSURL,\n	CustomHead: defaultCustomHead,\n	APIOnly:    false,\n	Next:       nil,\n}\n"})})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return s}});var n=i(67294);let l={},r=n.createContext(l);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);