"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[24157],{91538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(74848),i=n(28453);const o={id:"bbolt",title:"Bbolt"},a=void 0,l={id:"bbolt/bbolt",title:"Bbolt",description:"Release",source:"@site/storage_versioned_docs/version-ristretto_v1.x.x/bbolt/README.md",sourceDirName:"bbolt",slug:"/bbolt/",permalink:"/storage/ristretto_v1.x.x/bbolt/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/bbolt/README.md",tags:[],version:"ristretto_v1.x.x",lastUpdatedAt:1713625462e3,frontMatter:{id:"bbolt",title:"Bbolt"},sidebar:"tutorialSidebar",previous:{title:"Badger",permalink:"/storage/ristretto_v1.x.x/badger/"},next:{title:"Couchbase",permalink:"/storage/ristretto_v1.x.x/couchbase/"}},r={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=bbolt*",alt:"Release"}),"\n",(0,s.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-bbolt.yml?label=Tests",alt:"Test"}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,s.jsxs)(t.p,{children:["A Bbolt storage driver using ",(0,s.jsx)(t.a,{href:"https://github.com/etcd-io/bbolt",children:"etcd-io/bbolt"}),". Bolt is a pure Go key/value store inspired by ",(0,s.jsx)(t.a,{href:"https://twitter.com/hyc_symas",children:"Howard Chu's"})," ",(0,s.jsx)(t.a,{href:"https://www.symas.com/symas-embedded-database-lmdb",children:"LMDB project"}),". The goal of the project is to provide a simple, fast, and reliable database for projects that don't require a full database server such as Postgres or MySQL."]}),"\n",(0,s.jsx)(t.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#config",children:"Config"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *bbolt.DB\n"})}),"\n",(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(t.p,{children:["Bbolt is tested on the 2 last ",(0,s.jsx)(t.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,s.jsx)(t.p,{children:"And then install the s3 implementation:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go get github.com/gofiber/storage/bbolt\n"})}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Import the storage package."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'import "github.com/gofiber/storage/bbolt"\n'})}),"\n",(0,s.jsx)(t.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'// Initialize default config\nstore := bbolt.New()\n\n// Initialize custom config\nstore := bbolt.New(bbolt.Config{\n\tDatabase: "my_database.db",\n\tBucket:   "my-bucket",\n\tReset:    false,\n})\n'})}),"\n",(0,s.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'// Config defines the config for storage.\ntype Config struct {\n\t// Database path\n\t//\n\t// Optional. Default is "fiber.db"\n\tDatabase string\n\n\t// Bbolt bucket name\n\t//\n\t// Optional. Default is "fiber_storage"\n\tBucket string\n\n\t// Timeout is the amount of time to wait to obtain a file lock.\n\t// Only available on Darwin and Linux.\n\t//\n\t// Optional. Default is 60 * time.Second.\n\tTimeout time.Duration\n\n\t// Open database in read-only mode.\n\t//\n\t// Optional. Default is false\n\tReadOnly bool\n\n\t// Reset clears any existing keys in existing Bucket\n\t//\n\t// Optional. Default is false\n\tReset bool\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'// ConfigDefault is the default config\nvar ConfigDefault = Config{\n\tDatabase: "fiber.db",\n\tBucket:   "fiber_storage",\n\tTimeout:  60 * time.Second,\n\tReadOnly: false,\n\tReset:    false,\n}\n'})})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);