"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["33572"],{4932:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>g,assets:()=>a,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"pebble/pebble","title":"Pebble","description":"Release","source":"@site/storage_versioned_docs/version-couchbase_v2.x.x/pebble/README.md","sourceDirName":"pebble","slug":"/pebble/","permalink":"/storage/couchbase_v2.x.x/pebble/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/pebble/README.md","tags":[],"version":"couchbase_v2.x.x","lastUpdatedAt":1732893234000,"frontMatter":{"id":"pebble","title":"Pebble"},"sidebar":"tutorialSidebar","previous":{"title":"Nats","permalink":"/storage/couchbase_v2.x.x/nats/"},"next":{"title":"Postgres","permalink":"/storage/couchbase_v2.x.x/postgres/"}}'),s=t("85893"),l=t("50065");let r={id:"pebble",title:"Pebble"},o=void 0,a={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=pebble*",alt:"Release"}),"\n",(0,s.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-pebble.yml?label=Tests",alt:"Test"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,s.jsxs)(n.p,{children:["A fast key-value DB using ",(0,s.jsx)(n.a,{href:"https://github.com/cockroachdb/pebble",children:"cockroachdb/pebble"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,s.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *badger.DB\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Pebble is tested on the 2 last ",(0,s.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note: This step is only required if you don't have an existing module."}),"\n",(0,s.jsx)(n.p,{children:"And then install the Pebble implementation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/pebble/v2\n"})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/pebble/v2"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := pebble.New()\n\n// Initialize custom config\nstore := pebble.New(pebble.Config{\n	Path:         "db",\n	WriteOptions: &pebble.WriteOptions{},\n})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'type Config struct {\n	// Database name\n	//\n	// Optional. Default is "./db"\n	Path string\n\n	// Pass write options during write operations\n	//\n	// Optional. Default is nil\n	WriteOptions &pebble.WriteOptions{}\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n	Path:         "db",\n	WriteOptions: &pebble.WriteOptions{},\n}\n'})})]})}function g(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var i=t(67294);let s={},l=i.createContext(s);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);