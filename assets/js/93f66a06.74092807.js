"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["24771"],{49527:function(e,n,t){t.r(n),t.d(n,{default:()=>g,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"memory/memory","title":"Memory","description":"Release","source":"@site/storage_versioned_docs/version-mssql_v2.x.x/memory/README.md","sourceDirName":"memory","slug":"/memory/","permalink":"/storage/mssql_v2.x.x/memory/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/memory/README.md","tags":[],"version":"mssql_v2.x.x","lastUpdatedAt":1744205860000,"frontMatter":{"id":"memory","title":"Memory"},"sidebar":"tutorialSidebar","previous":{"title":"Memcache","permalink":"/storage/mssql_v2.x.x/memcache/"},"next":{"title":"Minio","permalink":"/storage/mssql_v2.x.x/minio/"}}'),r=t("85893"),s=t("50065");let o={id:"memory",title:"Memory"},l=void 0,a={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=memory*",alt:"Release"}),"\n",(0,r.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memory.yml?label=Tests",alt:"Test"}),"\n",(0,r.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,r.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,r.jsx)(n.p,{children:"An in-memory storage driver."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,r.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() map[string]entry\nfunc (s *Storage) Keys() ([][]byte, error)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["Memory is tested on the 2 last ",(0,r.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,r.jsx)(n.p,{children:"And then install the memory implementation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/memory/v2\n"})}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/memory/v2"\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// Initialize default config\nstore := memory.New()\n\n// Initialize custom config\nstore := memory.New(memory.Config{\n	GCInterval: 10 * time.Second,\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type Config struct {\n	// Time before deleting expired keys\n	//\n	// Default is 10 * time.Second\n	GCInterval time.Duration\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"var ConfigDefault = Config{\n	GCInterval: 10 * time.Second,\n}\n"})})]})}function g(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(67294);let r={},s=i.createContext(r);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);