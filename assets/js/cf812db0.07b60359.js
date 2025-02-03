"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["76709"],{10448:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>g,assets:()=>r,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"sqlite3/sqlite3","title":"SQLite3","description":"Release","source":"@site/storage_versioned_docs/version-cloudflarekv_v0.x.x/sqlite3/README.md","sourceDirName":"sqlite3","slug":"/sqlite3/","permalink":"/storage/cloudflarekv_v0.x.x/sqlite3/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/sqlite3/README.md","tags":[],"version":"cloudflarekv_v0.x.x","lastUpdatedAt":1738624341000,"frontMatter":{"id":"sqlite3","title":"SQLite3"},"sidebar":"left_sidebar","previous":{"title":"ScyllaDb","permalink":"/storage/cloudflarekv_v0.x.x/scylladb/"},"next":{"title":"Valkey","permalink":"/storage/cloudflarekv_v0.x.x/valkey/"}}'),s=t("85893"),l=t("50065");let a={id:"sqlite3",title:"SQLite3"},o=void 0,r={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=sqlite3*",alt:"Release"}),"\n",(0,s.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-sqlite3.yml?label=Tests",alt:"Test"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,s.jsxs)(n.p,{children:["A SQLite3 storage driver using ",(0,s.jsx)(n.a,{href:"https://github.com/mattn/go-sqlite3",children:"mattn/go-sqlite3"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,s.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *sql.DB\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["SQLite3 is tested on the 2 last ",(0,s.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,s.jsx)(n.p,{children:"And then install the sqlite3 implementation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/sqlite3/v2\n"})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/sqlite3/v2"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := sqlite3.New()\n\n// Initialize custom config\nstore := sqlite3.New(sqlite3.Config{\n	Database:        "./fiber.sqlite3",\n	Table:           "fiber_storage",\n	Reset:           false,\n	GCInterval:      10 * time.Second,\n	MaxOpenConns:    100,\n	MaxIdleConns:    100,\n	ConnMaxLifetime: 1 * time.Second,\n})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'type Config struct {\n	// Database name\n	//\n	// Optional. Default is "fiber"\n	Database string\n\n	// Table name\n	//\n	// Optional. Default is "fiber_storage"\n	Table string\n\n	// Reset clears any existing keys in existing Table\n	//\n	// Optional. Default is false\n	Reset bool\n\n	// Time before deleting expired keys\n	//\n	// Optional. Default is 10 * time.Second\n	GCInterval time.Duration\n\n	// //////////////////////////////////\n	// Adaptor related config options //\n	// //////////////////////////////////\n\n	// MaxIdleConns sets the maximum number of connections in the idle connection pool.\n	//\n	// Optional. Default is 100.\n	MaxIdleConns int\n\n	// MaxOpenConns sets the maximum number of open connections to the database.\n	//\n	// Optional. Default is 100.\n	MaxOpenConns int\n\n	// ConnMaxLifetime sets the maximum amount of time a connection may be reused.\n	//\n	// Optional. Default is 1 second.\n	ConnMaxLifetime time.Duration\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n	Database:        "./fiber.sqlite3",\n	Table:           "fiber_storage",\n	Reset:           false,\n	GCInterval:      10 * time.Second,\n	MaxOpenConns:    100,\n	MaxIdleConns:    100,\n	ConnMaxLifetime: 1 * time.Second,\n}\n'})})]})}function g(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var i=t(67294);let s={},l=i.createContext(s);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);