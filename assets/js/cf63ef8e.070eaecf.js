"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["57182"],{79548:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>c});var r=JSON.parse('{"id":"misc/benchmarks","title":"\uD83D\uDCCA Benchmarks","description":"These benchmarks aim to compare the performance of Fiber and other web frameworks.","source":"@site/versioned_docs/version-v1.x/misc/benchmarks.md","sourceDirName":"misc","slug":"/misc/benchmarks","permalink":"/v1.x/misc/benchmarks","draft":false,"unlisted":false,"tags":[],"version":"v1.x","lastUpdatedAt":1732531984000,"sidebarPosition":2,"frontMatter":{"id":"benchmarks","title":"\uD83D\uDCCA Benchmarks","description":"These benchmarks aim to compare the performance of Fiber and other web frameworks.","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\uD83E\uDD14 FAQ","permalink":"/v1.x/misc/faq"}}'),i=s("85893"),t=s("50065");let c={id:"benchmarks",title:"\uD83D\uDCCA Benchmarks",description:"These benchmarks aim to compare the performance of Fiber and other web frameworks.",sidebar_position:2},a=void 0,l={},o=[{value:"TechEmpower",id:"techempower",level:2},{value:"Plaintext",id:"plaintext",level:3},{value:"Data Updates",id:"data-updates",level:3},{value:"Multiple Queries",id:"multiple-queries",level:3},{value:"Single Query",id:"single-query",level:3},{value:"JSON Serialization",id:"json-serialization",level:3},{value:"Go web framework benchmark",id:"go-web-framework-benchmark",level:2}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"techempower",children:"TechEmpower"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite",children:"TechEmpower"})," provides a performance comparison of many web application frameworks executing fundamental tasks such as JSON serialization, database access, and server-side template composition."]}),"\n",(0,i.jsxs)(n.p,{children:["Each framework is operating in a realistic production configuration. Results are captured on cloud instances and on physical hardware. The test implementations are largely community-contributed and all source is available at the ",(0,i.jsx)(n.a,{href:"https://github.com/TechEmpower/FrameworkBenchmarks",children:"GitHub repository"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fiber ",(0,i.jsx)(n.code,{children:"v1.10.0"})]}),"\n",(0,i.jsx)(n.li,{children:"28 HT Cores Intel(R) Xeon(R) Gold 5120 CPU @ 2.20GHz"}),"\n",(0,i.jsx)(n.li,{children:"32GB RAM"}),"\n",(0,i.jsx)(n.li,{children:"Ubuntu 18.04.3 4.15.0-88-generic"}),"\n",(0,i.jsx)(n.li,{children:"Dedicated Cisco 10-Gbit Ethernet switch."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"plaintext",children:"Plaintext"}),"\n",(0,i.jsx)(n.p,{children:"The Plaintext test is an exercise of the request-routing fundamentals only, designed to demonstrate the capacity of high-performance platforms in particular. Requests will be sent using HTTP pipelining. The response payload is still small, meaning good performance is still necessary in order to saturate the gigabit Ethernet of the test environment."}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/TechEmpower/FrameworkBenchmarks/wiki/Project-Information-Framework-Tests-Overview#single-database-query",children:"Plaintext requirements"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fiber"})," - ",(0,i.jsx)(n.strong,{children:"6,162,556"})," responses per second with an average latency of ",(0,i.jsx)(n.strong,{children:"2.0"})," ms.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Express"})," - ",(0,i.jsx)(n.strong,{children:"367,069"})," responses per second with an average latency of ",(0,i.jsx)(n.strong,{children:"354.1"})," ms."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(54827).Z+"",width:"1130",height:"473"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Fiber vs Express",src:s(72680).Z+"",width:"1130",height:"179"})}),"\n",(0,i.jsx)(n.h3,{id:"data-updates",children:"Data Updates"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fiber"})," handled ",(0,i.jsx)(n.strong,{children:"11,846"})," responses per second with an average latency of ",(0,i.jsx)(n.strong,{children:"42.8"})," ms.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Express"})," handled ",(0,i.jsx)(n.strong,{children:"2,066"})," responses per second with an average latency of ",(0,i.jsx)(n.strong,{children:"390.44"})," ms."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(32242).Z+"",width:"1132",height:"727"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Fiber vs Express",src:s(51997).Z+"",width:"1131",height:"242"})}),"\n",(0,i.jsx)(n.h3,{id:"multiple-queries",children:"Multiple Queries"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fiber"})," handled ",(0,i.jsx)(n.strong,{children:"19,664"})," responses per second with an average latency of ",(0,i.jsx)(n.strong,{children:"25.7"})," ms.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Express"})," handled ",(0,i.jsx)(n.strong,{children:"4,302"})," responses per second with an average latency of ",(0,i.jsx)(n.strong,{children:"117.2"})," ms."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(81311).Z+"",width:"1131",height:"746"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Fiber vs Express",src:s(51997).Z+"",width:"1131",height:"242"})}),"\n",(0,i.jsx)(n.h3,{id:"single-query",children:"Single Query"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fiber"})," handled ",(0,i.jsx)(n.strong,{children:"368,647"})," responses per second with an average latency of ",(0,i.jsx)(n.strong,{children:"0.7"})," ms.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Express"})," handled ",(0,i.jsx)(n.strong,{children:"57,880"})," responses per second with an average latency of ",(0,i.jsx)(n.strong,{children:"4.4"})," ms."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(34428).Z+"",width:"1131",height:"746"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Fiber vs Express",src:s(32679).Z+"",width:"1129",height:"241"})}),"\n",(0,i.jsx)(n.h3,{id:"json-serialization",children:"JSON Serialization"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fiber"})," handled ",(0,i.jsx)(n.strong,{children:"1,146,667"})," responses per second with an average latency of ",(0,i.jsx)(n.strong,{children:"0.4"})," ms.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Express"})," handled ",(0,i.jsx)(n.strong,{children:"244,847"})," responses per second with an average latency of ",(0,i.jsx)(n.strong,{children:"1.1"})," ms."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(1352).Z+"",width:"1131",height:"601"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Fiber vs Express",src:s(46494).Z+"",width:"1129",height:"179"})}),"\n",(0,i.jsx)(n.h2,{id:"go-web-framework-benchmark",children:"Go web framework benchmark"}),"\n",(0,i.jsxs)(n.p,{children:["\uD83D\uDD17 ",(0,i.jsx)(n.a,{href:"https://github.com/smallnest/go-web-framework-benchmark",children:"https://github.com/smallnest/go-web-framework-benchmark"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CPU"})," Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"MEM"})," 4GB"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"GO"})," go1.13.6 linux/amd64"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"OS"})," Linux"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The first test case is to mock ",(0,i.jsx)(n.strong,{children:"0 ms"}),", ",(0,i.jsx)(n.strong,{children:"10 ms"}),", ",(0,i.jsx)(n.strong,{children:"100 ms"}),", ",(0,i.jsx)(n.strong,{children:"500 ms"})," processing time in handlers."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(75131).Z+"",width:"1024",height:"600"})}),"\n",(0,i.jsxs)(n.p,{children:["The concurrency clients are ",(0,i.jsx)(n.strong,{children:"5000"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(9032).Z+"",width:"1024",height:"600"})}),"\n",(0,i.jsxs)(n.p,{children:["Latency is the time of real processing time by web servers. ",(0,i.jsx)(n.em,{children:"The smaller is the better."})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(21654).Z+"",width:"1024",height:"600"})}),"\n",(0,i.jsxs)(n.p,{children:["Allocs is the heap allocations by web servers when test is running. The unit is MB. ",(0,i.jsx)(n.em,{children:"The smaller is the better."})]}),"\n",(0,i.jsxs)(n.p,{children:["If we enable ",(0,i.jsx)(n.strong,{children:"http pipelining"}),", test result as below:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(65084).Z+"",width:"1024",height:"600"})}),"\n",(0,i.jsxs)(n.p,{children:["Concurrency test in ",(0,i.jsx)(n.strong,{children:"30 ms"})," processing time, the test result for ",(0,i.jsx)(n.strong,{children:"100"}),", ",(0,i.jsx)(n.strong,{children:"1000"}),", ",(0,i.jsx)(n.strong,{children:"5000"})," clients is:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(52603).Z+"",width:"1024",height:"600"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(48663).Z+"",width:"1024",height:"600"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(91943).Z+"",width:"1024",height:"600"})}),"\n",(0,i.jsxs)(n.p,{children:["If we enable ",(0,i.jsx)(n.strong,{children:"http pipelining"}),", test result as below:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(69937).Z+"",width:"1024",height:"600"})}),"\n",(0,i.jsxs)(n.p,{children:["Dependency graph for ",(0,i.jsx)(n.code,{children:"v1.9.0"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(71396).Z+"",width:"1307",height:"520"})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},65084:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/benchmark-pipeline-b49cbb1db36293acdfb0e6c96d844e1a.png"},75131:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/benchmark-18e23fcf42afc7f5e12ea23aceb27885.png"},21654:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/benchmark_alloc-dec96faa96e07bcec84f40a4dfc8d187.png"},9032:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/benchmark_latency-b67a470cf1b261c3092b80cbf42ef16b.png"},69937:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/concurrency-pipeline-b0d3c211d9c7cb5474fd191223a41241.png"},52603:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/concurrency-1307e1d23c01a561a4b2a0f5bdd7e1bc.png"},91943:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/concurrency_alloc-6f2d485576803f7de2fe0a1deca21a09.png"},48663:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/concurrency_latency-5a223848a8bee8df21cc02451f0db2b6.png"},32242:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/data_updates-3be85c418d6971091854c5086af9ed10.png"},71396:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/graph-afbd400b1c3e1c6f137dae3cfc1890ce.svg"},1352:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/json-62868f61b34e3790f3a8b3b52b1a3a3b.png"},46494:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/json_express-aa631b2de86808970aa4bb7c9c9d3edf.png"},81311:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/multiple_queries-2c2e81674208b90b9aeb1cb791a3f0dc.png"},51997:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/multiple_queries_express-ec4dc8013e85dc2a2fa4f5eeb55ce8dd.png"},54827:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/plaintext-e25d187f782d18fdd35b84e3d7c625eb.png"},72680:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/plaintext_express-ef6522843412bb5b14b3c6b6a4f032de.png"},34428:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/single_query-4f7782d3c3ff91e92ac27e382b09f6ac.png"},32679:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/single_query_express-d8e41422b4f5c0a9496272e4a66a97c4.png"},50065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return c}});var r=s(67294);let i={},t=r.createContext(i);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);