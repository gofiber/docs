"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["82749"],{54564:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"arangodb/arangodb","title":"ArangoDB","description":"Release","source":"@site/storage_versioned_docs/version-badger_v1.x.x/arangodb/README.md","sourceDirName":"arangodb","slug":"/arangodb/","permalink":"/storage/badger_v1.x.x/arangodb/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/arangodb/README.md","tags":[],"version":"badger_v1.x.x","lastUpdatedAt":1741678803000,"frontMatter":{"id":"arangodb","title":"ArangoDB"},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDC4B Welcome","permalink":"/storage/badger_v1.x.x/"},"next":{"title":"Azure Blob","permalink":"/storage/badger_v1.x.x/azureblob/"}}'),r=t("85893"),a=t("50065");let s={id:"arangodb",title:"ArangoDB"},o=void 0,l={},d=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function g(e){let n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=arangodb*",alt:"Release"}),"\n",(0,r.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-arangodb.yml?label=Tests",alt:"Test"}),"\n",(0,r.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,r.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,r.jsxs)(n.p,{children:["A ArangoDB storage driver using ",(0,r.jsx)(n.code,{children:"arangodb/go-driver"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/arangodb/go-driver",children:"arangodb/go-driver"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() driver.Client\n"})}),"\n",(0,r.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["ArangoDB is tested on the 2 last (1.14/1.15) ",(0,r.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,r.jsx)(n.p,{children:"And then install the mysql implementation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/arangodb\n"})}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/arangodb"\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := arangodb.New()\n\n// Initialize custom config\nstore := arangodb.New(arangodb.Config{\n	Host:       "http://127.0.0.1",\n	Port:       8529,\n	Database:   "fiber",\n	Collection: "fiber_storage",\n	Reset:      false,\n	GCInterval: 10 * time.Second,\n})\n'})}),"\n",(0,r.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'type Config struct {\n	// Host name where the DB is hosted\n	//\n	// Optional. Default is "http://127.0.0.1"\n	Host string\n\n	// Port where the DB is listening on\n	//\n	// Optional. Default is 8529\n	Port int\n\n	// Server username\n	//\n	// Optional. Default is ""\n	Username string\n\n	// Server password\n	//\n	// Optional. Default is ""\n	Password string\n\n	// Database name\n	//\n	// Optional. Default is "fiber"\n	Database string\n\n	// Collection name\n	//\n	// Optional. Default is "fiber_storage"\n	Collection string\n\n	// Reset clears any existing keys in existing collection\n	//\n	// Optional. Default is false\n	Reset bool\n	// Time before deleting expired keys\n	//\n	// Optional. Default is 10 * time.Second\n	GCInterval time.Duration\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsx)(n.p,{children:"Used only for optional fields"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n	Host:       "http://127.0.0.1",\n	Port:       8529,\n	Database:   "fiber",\n	Collection: "fiber_storage",\n	Reset:      false,\n	GCInterval: 10 * time.Second,\n}\n'})})]})}function c(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var i=t(67294);let r={},a=i.createContext(r);function s(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);