"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["61391"],{49874:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>c,assets:()=>l,toc:()=>g,frontMatter:()=>r});var t=JSON.parse('{"id":"mongodb/mongodb","title":"MongoDB","description":"Release","source":"@site/storage_versioned_docs/version-mongodb_v1.x.x/mongodb/README.md","sourceDirName":"mongodb","slug":"/mongodb/","permalink":"/storage/mongodb_v1.x.x/mongodb/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/mongodb/README.md","tags":[],"version":"mongodb_v1.x.x","lastUpdatedAt":1733047527000,"frontMatter":{"id":"mongodb","title":"MongoDB"},"sidebar":"tutorialSidebar","previous":{"title":"Memory","permalink":"/storage/mongodb_v1.x.x/memory/"},"next":{"title":"MSSQL","permalink":"/storage/mongodb_v1.x.x/mssql/"}}'),i=o("85893"),s=o("50065");let r={id:"mongodb",title:"MongoDB"},a=void 0,l={},g=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=mongodb*",alt:"Release"}),"\n",(0,i.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mongodb.yml?label=Tests",alt:"Test"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,i.jsxs)(n.p,{children:["A MongoDB storage driver using ",(0,i.jsx)(n.a,{href:"https://github.com/mongodb/mongo-go-driver",children:"mongodb/mongo-go-driver"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *mongo.Database\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["MongoDB is tested on the 2 last ",(0,i.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then install the mongodb implementation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/mongodb\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/mongodb"\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := mongodb.New()\n\n// Initialize custom config\nstore := mongodb.New(mongodb.Config{\n	Host:       "127.0.0.1",\n	Port:       27017,\n	Database:   "fiber",\n	Collection: "fiber_storage",\n	Reset:      false,\n})\n\n// Initialize custom config using connection string\nstore := mongodb.New(mongodb.Config{\n	ConnectionURI: "mongodb://user:password@127.0.0.1:27017",\n	Database:   	 "fiber",\n	Collection: 	 "fiber_storage",\n	Reset:      	 false,\n})\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'type Config struct {\n	// Connection string to use for DB. Will override all other authentication values if used\n	//\n	// Optional. Default is ""\n	ConnectionURI string\n\n	// Host name where the DB is hosted\n	//\n	// Optional. Default is "127.0.0.1"\n	Host string\n\n	// Port where the DB is listening on\n	//\n	// Optional. Default is 27017\n	Port int\n\n	// Server username\n	//\n	// Optional. Default is ""\n	Username string\n\n	// Server password\n	//\n	// Optional. Default is ""\n	Password string\n\n	// Database name\n	//\n	// Optional. Default is "fiber"\n	Database string\n\n	// Collection name\n	//\n	// Optional. Default is "fiber_storage"\n	Collection string\n\n	// Reset clears any existing keys in existing Table\n	//\n	// Optional. Default is false\n	Reset bool\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n	ConnectionURI: "",\n	Host:          "127.0.0.1",\n	Port:          27017,\n	Database:      "fiber",\n	Collection:    "fiber_storage",\n	Reset:         false,\n}\n'})})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return r}});var t=o(67294);let i={},s=t.createContext(i);function r(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);