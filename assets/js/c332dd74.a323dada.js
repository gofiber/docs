"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["88511"],{2805:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>d,assets:()=>r,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"mssql/mssql","title":"MSSQL","description":"Release","source":"@site/storage_versioned_docs/version-memcache_v1.x.x/mssql/README.md","sourceDirName":"mssql","slug":"/mssql/","permalink":"/storage/memcache_v1.x.x/mssql/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/mssql/README.md","tags":[],"version":"memcache_v1.x.x","lastUpdatedAt":1733047527000,"frontMatter":{"id":"mssql","title":"MSSQL"},"sidebar":"tutorialSidebar","previous":{"title":"MongoDB","permalink":"/storage/memcache_v1.x.x/mongodb/"},"next":{"title":"MySQL","permalink":"/storage/memcache_v1.x.x/mysql/"}}'),i=s("85893"),l=s("50065");let o={id:"mssql",title:"MSSQL"},a=void 0,r={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function g(e){let n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=mssql*",alt:"Release"}),"\n",(0,i.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mssql.yml?label=Tests",alt:"Test"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,i.jsxs)(n.p,{children:["A MSSQL storage driver using ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/go-mssqldb",children:"microsoft/go-mssqldb"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *sql.DB\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["MSSQL is tested on the 2 last ",(0,i.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then install the mssql implementation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/mssql\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/mssql"\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := mssql.New()\n\n// Initialize custom config\nstore := mssql.New(mssql.Config{\n	Host:            "127.0.0.1",\n	Port:            1433,\n	Database:        "fiber",\n	Table:           "fiber_storage",\n	Reset:           false,\n	GCInterval:      10 * time.Second,\n	SslMode:         "disable",\n})\n\n// Initialize custom config using connection string\nstore := mssql.New(mssql.Config{\n	ConnectionURI:   "sqlserver://user:password@localhost:1433?database=fiber"\n	Reset:           false,\n	GCInterval:      10 * time.Second,\n})\n'})}),"\n",(0,i.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Config defines the config for storage.\ntype Config struct {\n	// Connection string to use for DB. Will override all other authentication values if used\n	//\n	// Optional. Default is ""\n	ConnectionURI string\n\n	// Host name where the DB is hosted\n	//\n	// Optional. Default is "127.0.0.1"\n	Host string\n\n	// Port where the DB is listening on\n	//\n	// Optional. Default is 1433\n	Port int\n\n	// Server username\n	//\n	// Optional. Default is ""\n	Username string\n\n	// Server password\n	//\n	// Optional. Default is ""\n	Password string\n\n	// Instance name\n	//\n	// Optional. Default is ""\n	Instance string\n	\n	// Database name\n	//\n	// Optional. Default is "fiber"\n	Database string\n\n	// Table name\n	//\n	// Optional. Default is "fiber_storage"\n	Table string\n\n	// Reset clears any existing keys in existing Table\n	//\n	// Optional. Default is false\n	Reset bool\n\n	// Time before deleting expired keys\n	//\n	// Optional. Default is 10 * time.Second\n	GCInterval time.Duration\n\n	// The SSL mode for the connection\n	//\n	// Optional. Default is "disable"\n	SslMode string\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n	ConnectionURI:   "",\n	Host:            "127.0.0.1",\n	Port:            1433,\n	Database:        "fiber",\n	Table:           "fiber_storage",\n	Reset:           false,\n	GCInterval:      10 * time.Second,\n	SslMode:         "disable",\n}\n'})})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var t=s(67294);let i={},l=t.createContext(i);function o(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);