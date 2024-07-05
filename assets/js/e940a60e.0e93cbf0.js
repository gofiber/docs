"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[24473],{72134:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var l=t(74848),i=t(28453);const s={id:"cloudflarekv",title:"Cloudflare KV"},r=void 0,o={id:"cloudflarekv/cloudflarekv",title:"Cloudflare KV",description:"Release",source:"@site/storage_versioned_docs/version-rueidis_v1.x.x/cloudflarekv/README.md",sourceDirName:"cloudflarekv",slug:"/cloudflarekv/",permalink:"/storage/rueidis_v1.x.x/cloudflarekv/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/cloudflarekv/README.md",tags:[],version:"rueidis_v1.x.x",lastUpdatedAt:1720163171e3,frontMatter:{id:"cloudflarekv",title:"Cloudflare KV"},sidebar:"tutorialSidebar",previous:{title:"Bbolt",permalink:"/storage/rueidis_v1.x.x/bbolt/"},next:{title:"Coherence",permalink:"/storage/rueidis_v1.x.x/coherence/"}},a={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=cloudflarekv*",alt:"Release"}),"\n",(0,l.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,l.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,l.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-cloudflarekv.yml?label=Tests",alt:"Test"}),"\n",(0,l.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,l.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,l.jsxs)(n.p,{children:["A Cloudflare KV storage driver using ",(0,l.jsx)(n.a,{href:"https://github.com/cloudflare/cloudflare-go",children:"cloudflare/cloudflare-go"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Note: Requires Go 1.21 and above"})}),"\n",(0,l.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *cloudflare.API\n"})}),"\n",(0,l.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,l.jsx)(n.p,{children:"And then install the Cloudflare KV implementation:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/cloudflarekv\n"})}),"\n",(0,l.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/cloudflarekv"\n'})}),"\n",(0,l.jsxs)(n.p,{children:["You can use the following methods to create storage. The Key must be an API Token generated with at least ",(0,l.jsx)(n.code,{children:"Account.Workers KV Storage"})," permission. Check the ",(0,l.jsx)(n.a,{href:"https://developers.cloudflare.com/fundamentals/api/get-started/create-token/",children:"Create API Token"})," documentation to generate one."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := cloudflarekv.New()\n\nstore := cloudflarekv.New(cloudflarekv.Config{\n    Key: "",\n    Email: "",\n    AccountID: "fiber",\n    NamespaceID: "fiber",\n    Reset: false,\n})\n\n'})}),"\n",(0,l.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'type Config struct {\n\n\t// Cloudflare Auth Token\n\t//\n\t// Optional. Default is ""\n\tKey string\n\n\t// Cloudflare Email\n\t//\n\t// Optional. Default is ""\n\tEmail string\n\n\t// Account id\n\t//\n\t// Optional. Default is "fiber"\n\tAccountID string\n\n\t// Namespace id\n\t//\n\t// Optional. Default is "fiber"\n\tNamespaceID string\n\n\t// Reset clears any existing keys in existing Table\n\t//\n\t// Optional. Default is false\n\tReset bool\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n\tKey:         "",\n\tEmail:       "",\n\tAccountID:   "fiber",\n\tNamespaceID: "fiber",\n\tReset:       false,\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var l=t(96540);const i={},s=l.createContext(i);function r(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);