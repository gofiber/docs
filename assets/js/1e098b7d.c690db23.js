"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[32926],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(r),c=n,u=h["".concat(d,".").concat(c)]||h[c]||m[c]||i;return r?a.createElement(u,o(o({ref:t},p),{},{components:r})):a.createElement(u,o({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[h]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},67280:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={id:"loadshed"},o="LoadShed",l={unversionedId:"loadshed/loadshed",id:"loadshed/loadshed",title:"LoadShed",description:"Release",source:"@site/docs/contrib/loadshed/README.md",sourceDirName:"loadshed",slug:"/loadshed/",permalink:"/contrib/next/loadshed/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/loadshed/README.md",tags:[],version:"current",lastUpdatedAt:1708310554,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{id:"loadshed"},sidebar:"tutorialSidebar",previous:{title:"JWT",permalink:"/contrib/next/jwt/"},next:{title:"Opafiber",permalink:"/contrib/next/opafiber/"}},d={},s=[{value:"Install",id:"install",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"LoadCriteria",id:"loadcriteria",level:2},{value:"CPULoadCriteria",id:"cpuloadcriteria",level:3},{value:"Properties",id:"properties",level:4},{value:"How It Works",id:"how-it-works",level:4},{value:"Default Config",id:"default-config",level:2}],p={toc:s},h="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"loadshed"},"LoadShed"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=loadshed*",alt:"Release"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,n.kt)("p",null,"The LoadShed middleware for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," is designed to help manage server load by shedding requests based on certain load criteria."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("p",null,"This middleware supports Fiber v2"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/loadshed\n")),(0,n.kt)("h2",{id:"signatures"},"Signatures"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"loadshed.New(config ...loadshed.Config) fiber.Handler\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"To use the LoadShed middleware in your Fiber application, import it and apply it to your Fiber app. Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  loadshed "github.com/gofiber/contrib/loadshed"\n)\n\nfunc main() {\n  app := fiber.New()\n\n  // Configure and use LoadShed middleware\n  app.Use(loadshed.New(loadshed.Config{\n    Criteria: &loadshed.CPULoadCriteria{\n      LowerThreshold: 0.75, // Set your own lower threshold\n      UpperThreshold: 0.90, // Set your own upper threshold\n      Interval:       10 * time.Second,\n      Getter:         &loadshed.DefaultCPUPercentGetter{},\n    },\n  }))\n\n  app.Get("/", func(c *fiber.Ctx) error {\n    return c.SendString("Welcome!")\n  })\n\n  app.Listen(":3000")\n}\n')),(0,n.kt)("h2",{id:"config"},"Config"),(0,n.kt)("p",null,"The LoadShed middleware in Fiber offers various configuration options to tailor the load shedding behavior according to the needs of your application."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Function to skip this middleware when returned true."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"nil"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Criteria"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"LoadCriteria")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Interface for defining load shedding criteria."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"&CPULoadCriteria{...}"))))),(0,n.kt)("h2",{id:"loadcriteria"},"LoadCriteria"),(0,n.kt)("p",null,"LoadCriteria is an interface in the LoadShed middleware that defines the criteria for determining when to shed load in the system. Different implementations of this interface can use various metrics and algorithms to decide when and how to shed incoming requests to maintain system performance."),(0,n.kt)("h3",{id:"cpuloadcriteria"},"CPULoadCriteria"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"CPULoadCriteria")," is an implementation of the ",(0,n.kt)("inlineCode",{parentName:"p"},"LoadCriteria")," interface, using CPU load as the metric for determining whether to shed requests."),(0,n.kt)("h4",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LowerThreshold"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"float64")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The lower CPU usage threshold as a fraction (0.0 to 1.0). Requests are considered for shedding when CPU usage exceeds this threshold.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UpperThreshold"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"float64")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The upper CPU usage threshold as a fraction (0.0 to 1.0). All requests are shed when CPU usage exceeds this threshold.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Interval"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The time interval over which the CPU usage is averaged for decision making.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Getter"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"CPUPercentGetter")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Interface to retrieve CPU usage percentages.")))),(0,n.kt)("h4",{id:"how-it-works"},"How It Works"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"CPULoadCriteria")," determines the load on the system based on CPU usage and decides whether to shed incoming requests. It operates on the following principles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CPU Usage Measurement"),": It measures the CPU usage over a specified interval."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Thresholds"),": Utilizes ",(0,n.kt)("inlineCode",{parentName:"li"},"LowerThreshold")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"UpperThreshold")," values to decide when to start shedding requests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proportional Rejection Probability"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Below ",(0,n.kt)("inlineCode",{parentName:"strong"},"LowerThreshold")),": No requests are rejected, as the system is considered under acceptable load."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Between ",(0,n.kt)("inlineCode",{parentName:"strong"},"LowerThreshold")," and ",(0,n.kt)("inlineCode",{parentName:"strong"},"UpperThreshold")),": The probability of rejecting a request increases as the CPU usage approaches the ",(0,n.kt)("inlineCode",{parentName:"li"},"UpperThreshold"),". This is calculated using the formula:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"rejectionProbability := (cpuUsage - LowerThreshold*100) / (UpperThreshold - LowerThreshold)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Above ",(0,n.kt)("inlineCode",{parentName:"strong"},"UpperThreshold")),": All requests are rejected to prevent system overload.")))),(0,n.kt)("p",null,"This mechanism ensures that the system can adaptively manage its load, maintaining stability and performance under varying traffic conditions."),(0,n.kt)("h2",{id:"default-config"},"Default Config"),(0,n.kt)("p",null,"This is the default configuration for ",(0,n.kt)("inlineCode",{parentName:"p"},"LoadCriteria")," in the LoadShed middleware."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n  Next: nil,\n  Criteria: &CPULoadCriteria{\n    LowerThreshold: 0.90,  // 90% CPU usage as the start point for considering shedding\n    UpperThreshold: 0.95,  // 95% CPU usage as the point where all requests are shed\n    Interval:       10 * time.Second,  // CPU usage is averaged over 10 seconds\n    Getter:         &DefaultCPUPercentGetter{},  // Default method for getting CPU usage\n  },\n}\n")))}m.isMDXComponent=!0}}]);