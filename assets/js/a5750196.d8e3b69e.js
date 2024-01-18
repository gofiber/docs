"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[2269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,m=c["".concat(s,".").concat(g)]||c[g]||f[g]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},23511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"sqlite3",title:"SQLite3"},o=void 0,l={unversionedId:"sqlite3/sqlite3",id:"version-sqlite3_v1.x.x/sqlite3/sqlite3",title:"SQLite3",description:"Release",source:"@site/storage_versioned_docs/version-sqlite3_v1.x.x/sqlite3/README.md",sourceDirName:"sqlite3",slug:"/sqlite3/",permalink:"/storage/sqlite3_v1.x.x/sqlite3/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/sqlite3/README.md",tags:[],version:"sqlite3_v1.x.x",lastUpdatedAt:1705582200,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{id:"sqlite3",title:"SQLite3"},sidebar:"tutorialSidebar",previous:{title:"S3",permalink:"/storage/sqlite3_v1.x.x/s3/"}},s={},p=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],u={toc:p},c="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=sqlite3*",alt:"Release"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-sqlite3.yml?label=Tests",alt:"Test"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,i.kt)("p",null,"A SQLite3 storage driver using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mattn/go-sqlite3"},"mattn/go-sqlite3"),"."),(0,i.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,i.kt)("h3",{id:"signatures"},"Signatures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *sql.DB\n")),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"SQLite3 is tested on the 2 last ",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go versions")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,i.kt)("p",null,"And then install the sqlite3 implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/sqlite3\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Import the storage package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/sqlite3"\n')),(0,i.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\nstore := sqlite3.New()\n\n// Initialize custom config\nstore := sqlite3.New(sqlite3.Config{\n    Database:        "./fiber.sqlite3",\n    Table:           "fiber_storage",\n    Reset:           false,\n    GCInterval:      10 * time.Second,\n    MaxOpenConns:    100,\n    MaxIdleConns:    100,\n    ConnMaxLifetime: 1 * time.Second,\n})\n')),(0,i.kt)("h3",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    // Database name\n    //\n    // Optional. Default is "fiber"\n    Database string\n\n    // Table name\n    //\n    // Optional. Default is "fiber_storage"\n    Table string\n\n    // Reset clears any existing keys in existing Table\n    //\n    // Optional. Default is false\n    Reset bool\n\n    // Time before deleting expired keys\n    //\n    // Optional. Default is 10 * time.Second\n    GCInterval time.Duration\n\n    // //////////////////////////////////\n    // Adaptor related config options //\n    // //////////////////////////////////\n\n    // MaxIdleConns sets the maximum number of connections in the idle connection pool.\n    //\n    // Optional. Default is 100.\n    MaxIdleConns int\n\n    // MaxOpenConns sets the maximum number of open connections to the database.\n    //\n    // Optional. Default is 100.\n    MaxOpenConns int\n\n    // ConnMaxLifetime sets the maximum amount of time a connection may be reused.\n    //\n    // Optional. Default is 1 second.\n    ConnMaxLifetime time.Duration\n}\n')),(0,i.kt)("h3",{id:"default-config"},"Default Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Database:        "./fiber.sqlite3",\n    Table:           "fiber_storage",\n    Reset:           false,\n    GCInterval:      10 * time.Second,\n    MaxOpenConns:    100,\n    MaxIdleConns:    100,\n    ConnMaxLifetime: 1 * time.Second,\n}\n')))}f.isMDXComponent=!0}}]);