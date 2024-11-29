"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["67182"],{53481:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"postgres/postgres","title":"Postgres","description":"Release","source":"@site/storage_versioned_docs/version-coherence_v0.x.x/postgres/README.md","sourceDirName":"postgres","slug":"/postgres/","permalink":"/storage/coherence_v0.x.x/postgres/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/postgres/README.md","tags":[],"version":"coherence_v0.x.x","lastUpdatedAt":1732892323000,"frontMatter":{"id":"postgres","title":"Postgres"},"sidebar":"tutorialSidebar","previous":{"title":"Pebble","permalink":"/storage/coherence_v0.x.x/pebble/"},"next":{"title":"Redis","permalink":"/storage/coherence_v0.x.x/redis/"}}'),i=t("85893"),o=t("50065");let r={id:"postgres",title:"Postgres"},l=void 0,a={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function g(e){let n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=postgres*",alt:"Release"}),"\n",(0,i.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-postgres.yml?label=Tests",alt:"Test"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,i.jsxs)(n.p,{children:["A Postgres storage driver using ",(0,i.jsx)(n.a,{href:"https://github.com/jackc/pgx",children:"jackc/pgx"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *pgxpool.Pool\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Postgres is tested on the 2 last ",(0,i.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then install the postgres implementation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/postgres/v2\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/postgres/v2"\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := postgres.New()\n\n// Initialize custom config\nstore := postgres.New(postgres.Config{\n	Db:              dbPool,\n	Table:           "fiber_storage",\n	Reset:           false,\n	GCInterval:      10 * time.Second,\n})\n'})}),"\n",(0,i.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Config defines the config for storage.\ntype Config struct {\n	// DB pgxpool.Pool object will override connection uri and other connection fields\n	//\n	// Optional. Default is nil\n	DB *pgxpool.Pool\n\n	// Connection string to use for DB. Will override all other authentication values if used\n	//\n	// Optional. Default is ""\n	ConnectionURI string\n\n	// Host name where the DB is hosted\n	//\n	// Optional. Default is "127.0.0.1"\n	Host string\n\n	// Port where the DB is listening on\n	//\n	// Optional. Default is 5432\n	Port int\n\n	// Server username\n	//\n	// Optional. Default is ""\n	Username string\n\n	// Server password\n	//\n	// Optional. Default is ""\n	Password string\n\n	// Database name\n	//\n	// Optional. Default is "fiber"\n	Database string\n\n	// Table name\n	//\n	// Optional. Default is "fiber_storage"\n	Table string\n\n	// The SSL mode for the connection\n	//\n	// Optional. Default is "disable"\n	SSLMode string\n\n	// Reset clears any existing keys in existing Table\n	//\n	// Optional. Default is false\n	Reset bool\n\n	// Time before deleting expired keys\n	//\n	// Optional. Default is 10 * time.Second\n	GCInterval time.Duration\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// ConfigDefault is the default config\nvar ConfigDefault = Config{\n	ConnectionURI: "",\n	Host:          "127.0.0.1",\n	Port:          5432,\n	Database:      "fiber",\n	Table:         "fiber_storage",\n	SSLMode:       "disable",\n	Reset:         false,\n	GCInterval:    10 * time.Second,\n}\n'})})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(67294);let i={},o=s.createContext(i);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);