"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["20621"],{64656:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"ristretto/ristretto","title":"Ristretto","description":"Release","source":"@site/storage_versioned_docs/version-cloudflarekv_v0.x.x/ristretto/README.md","sourceDirName":"ristretto","slug":"/ristretto/","permalink":"/storage/cloudflarekv_v0.x.x/ristretto/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/ristretto/README.md","tags":[],"version":"cloudflarekv_v0.x.x","lastUpdatedAt":1736253587000,"frontMatter":{"id":"ristretto","title":"Ristretto"},"sidebar":"tutorialSidebar","previous":{"title":"Redis","permalink":"/storage/cloudflarekv_v0.x.x/redis/"},"next":{"title":"Rueidis","permalink":"/storage/cloudflarekv_v0.x.x/rueidis/"}}'),s=n("85893"),i=n("50065");let o={id:"ristretto",title:"Ristretto"},l=void 0,a={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){let t={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=ristretto*",alt:"Release"}),"\n",(0,s.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-ristretto.yml?label=Tests",alt:"Test"}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,s.jsxs)(t.p,{children:["A Memory-bound storage driver using ",(0,s.jsx)(t.a,{href:"https://github.com/dgraph-io/ristretto",children:(0,s.jsx)(t.code,{children:"dgraph-io/ristretto"})}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,s.jsx)(t.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#config",children:"Config"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *ristretto.Cache\n"})}),"\n",(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(t.p,{children:["Ristretto is tested on the 2 last ",(0,s.jsx)(t.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,s.jsx)(t.p,{children:"And then install the ristretto implementation:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go get github.com/gofiber/storage/ristretto/v2\n"})}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Import the storage package."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'import "github.com/gofiber/storage/ristretto/v2"\n'})}),"\n",(0,s.jsx)(t.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"// Initialize default config\nstore := ristretto.New()\n\n// Initialize custom config\nstore := ristretto.New(ristretto.Config{\n  NumCounters: 1e7, // number of keys to track frequency of (10M).\n  MaxCost:     1 << 30, // maximum cost of cache (1GB).\n  BufferItems: 64, // number of keys per Get buffer.\n})\n"})}),"\n",(0,s.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"type Config struct {\n  // NumCounters number of keys to track frequency of (10M).\n  NumCounters int64\n\n  // MaxCost maximum cost of cache (1GB).\n  MaxCost     int64\n\n  // BufferItems number of keys per Get buffer.\n  BufferItems int64\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n  NumCounters: 1e7,\n  MaxCost:     1 << 30,\n  BufferItems: 64,\n  DefaultCost: 1,\n}\n"})})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var r=n(67294);let s={},i=r.createContext(s);function o(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);