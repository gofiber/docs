"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[73433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||g[m]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"mysql",title:"MySQL"},l=void 0,o={unversionedId:"mysql/mysql",id:"mysql/mysql",title:"MySQL",description:"Release",source:"@site/docs/storage/mysql/README.md",sourceDirName:"mysql",slug:"/mysql/",permalink:"/storage/next/mysql/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/mysql/README.md",tags:[],version:"current",lastUpdatedAt:1702389371,formattedLastUpdatedAt:"Dec 12, 2023",frontMatter:{id:"mysql",title:"MySQL"},sidebar:"tutorialSidebar",previous:{title:"MSSQL",permalink:"/storage/next/mssql/"},next:{title:"Pebble",permalink:"/storage/next/pebble/"}},s={},p=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],u={toc:p},c="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=mysql*",alt:"Release"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mysql.yml?label=Tests",alt:"Test"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,r.kt)("p",null,"A MySQL storage driver using ",(0,r.kt)("inlineCode",{parentName:"p"},"database/sql")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-sql-driver/mysql"},"go-sql-driver/mysql"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,r.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,r.kt)("h3",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *sql.DB\n")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"MySQL is tested on the 2 last ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go versions")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,r.kt)("p",null,"And then install the mysql implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/mysql/v2\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the storage package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/mysql/v2"\n')),(0,r.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\nstore := mysql.New()\n\n// Initialize custom config\nstore := mysql.New(mysql.Config{\n    Host:            "127.0.0.1",\n    Port:            3306,\n    Database:        "fiber",\n    Table:           "fiber_storage",\n    Reset:           false,\n    GCInterval:      10 * time.Second,\n})\n\n// Initialize custom config using connection string\nstore := mysql.New(mysql.Config{\n    ConnectionURI:   "<username>:<pw>@tcp(<HOST>:<port>)/<dbname>"\n    Reset:           false,\n    GCInterval:      10 * time.Second,\n})\n\n// Initialize custom config using sql db connection\ndb, _ := sql.Open("mysql", "<username>:<pw>@tcp(<HOST>:<port>)/<dbname>")\nstore := mysql.New(mysql.Config{\n    Db:              db,\n    Reset:           false,\n    GCInterval:      10 * time.Second,\n})\n')),(0,r.kt)("h3",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    // DB Will override ConnectionURI and all other authentication values if used\n    //\n    // Optional. Default is nil\n    Db *sql.DB\n    \n    // Connection string to use for DB. Will override all other authentication values if used\n    //\n    // Optional. Default is ""\n    ConnectionURI string\n\n    // Host name where the DB is hosted\n    //\n    // Optional. Default is "127.0.0.1"\n    Host string\n\n    // Port where the DB is listening on\n    //\n    // Optional. Default is 3306\n    Port int\n\n    // Server username\n    //\n    // Optional. Default is ""\n    Username string\n\n    // Server password\n    //\n    // Optional. Default is ""\n    Password string\n\n    // Database name\n    //\n    // Optional. Default is "fiber"\n    Database string\n\n    // Table name\n    //\n    // Optional. Default is "fiber_storage"\n    Table string\n\n    // Reset clears any existing keys in existing Table\n    //\n    // Optional. Default is false\n    Reset bool\n\n    // Time before deleting expired keys\n    //\n    // Optional. Default is 10 * time.Second\n    GCInterval time.Duration\n}\n')),(0,r.kt)("h3",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    ConnectionURI:   "",\n    Host:            "127.0.0.1",\n    Port:            3306,\n    Database:        "fiber",\n    Table:           "fiber_storage",\n    Reset:           false,\n    GCInterval:      10 * time.Second,\n}\n')))}g.isMDXComponent=!0}}]);