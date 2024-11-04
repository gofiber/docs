"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[40489],{1953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"mysql/mysql","title":"MySQL","description":"Release","source":"@site/storage_versioned_docs/version-pebble_v1.x.x/mysql/README.md","sourceDirName":"mysql","slug":"/mysql/","permalink":"/storage/pebble_v1.x.x/mysql/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/mysql/README.md","tags":[],"version":"pebble_v1.x.x","lastUpdatedAt":1730726092000,"frontMatter":{"id":"mysql","title":"MySQL"},"sidebar":"tutorialSidebar","previous":{"title":"MSSQL","permalink":"/storage/pebble_v1.x.x/mssql/"},"next":{"title":"Pebble","permalink":"/storage/pebble_v1.x.x/pebble/"}}');var i=t(74848),l=t(28453);const o={id:"mysql",title:"MySQL"},r=void 0,a={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=mysql*",alt:"Release"}),"\n",(0,i.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mysql.yml?label=Tests",alt:"Test"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,i.jsxs)(n.p,{children:["A MySQL storage driver using ",(0,i.jsx)(n.code,{children:"database/sql"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"go-sql-driver/mysql"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *sql.DB\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["MySQL is tested on the 2 last ",(0,i.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then install the mysql implementation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/mysql\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/mysql"\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := mysql.New()\n\n// Initialize custom config\nstore := mysql.New(mysql.Config{\n\tHost:            "127.0.0.1",\n\tPort:            3306,\n\tDatabase:        "fiber",\n\tTable:           "fiber_storage",\n\tReset:           false,\n\tGCInterval:      10 * time.Second,\n})\n\n// Initialize custom config using connection string\nstore := mysql.New(mysql.Config{\n\tConnectionURI:   "<username>:<pw>@tcp(<HOST>:<port>)/<dbname>"\n\tReset:           false,\n\tGCInterval:      10 * time.Second,\n})\n\n// Initialize custom config using sql db connection\ndb, _ := sql.Open("mysql", "<username>:<pw>@tcp(<HOST>:<port>)/<dbname>")\nstore := mysql.New(mysql.Config{\n\tDb:              db,\n\tReset:           false,\n\tGCInterval:      10 * time.Second,\n})\n'})}),"\n",(0,i.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'type Config struct {\n\t// DB Will override ConnectionURI and all other authentication values if used\n\t//\n\t// Optional. Default is nil\n\tDb *sql.DB\n\t\n\t// Connection string to use for DB. Will override all other authentication values if used\n\t//\n\t// Optional. Default is ""\n\tConnectionURI string\n\n\t// Host name where the DB is hosted\n\t//\n\t// Optional. Default is "127.0.0.1"\n\tHost string\n\n\t// Port where the DB is listening on\n\t//\n\t// Optional. Default is 3306\n\tPort int\n\n\t// Server username\n\t//\n\t// Optional. Default is ""\n\tUsername string\n\n\t// Server password\n\t//\n\t// Optional. Default is ""\n\tPassword string\n\n\t// Database name\n\t//\n\t// Optional. Default is "fiber"\n\tDatabase string\n\n\t// Table name\n\t//\n\t// Optional. Default is "fiber_storage"\n\tTable string\n\n\t// Reset clears any existing keys in existing Table\n\t//\n\t// Optional. Default is false\n\tReset bool\n\n\t// Time before deleting expired keys\n\t//\n\t// Optional. Default is 10 * time.Second\n\tGCInterval time.Duration\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n\tConnectionURI:   "",\n\tHost:            "127.0.0.1",\n\tPort:            3306,\n\tDatabase:        "fiber",\n\tTable:           "fiber_storage",\n\tReset:           false,\n\tGCInterval:      10 * time.Second,\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},l=s.createContext(i);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);