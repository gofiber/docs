"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["27658"],{21257:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"azureblob/azureblob","title":"Azure Blob","description":"Release","source":"@site/storage_versioned_docs/version-bbolt_v1.x.x/azureblob/README.md","sourceDirName":"azureblob","slug":"/azureblob/","permalink":"/storage/bbolt_v1.x.x/azureblob/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/azureblob/README.md","tags":[],"version":"bbolt_v1.x.x","lastUpdatedAt":1736513694000,"frontMatter":{"id":"azureblob","title":"Azure Blob"},"sidebar":"tutorialSidebar","previous":{"title":"ArangoDB","permalink":"/storage/bbolt_v1.x.x/arangodb/"},"next":{"title":"Badger","permalink":"/storage/bbolt_v1.x.x/badger/"}}'),o=t("85893"),s=t("50065");let i={id:"azureblob",title:"Azure Blob"},l=void 0,a={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=azureblob*",alt:"Release"}),"\r\n",(0,o.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\r\n",(0,o.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-azureblob.yml?label=Tests",alt:"Test"}),"\r\n",(0,o.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\r\n",(0,o.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/products/storage/blobs/#overview",children:"Azure Blob storage"})," is Microsoft's object storage solution for the cloud."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["NOTE: Go ",(0,o.jsx)(n.strong,{children:"1.18"})," or later is required. Source: ",(0,o.jsx)(n.a,{href:"https://github.com/Azure/azure-sdk-for-go/blob/main/README.md",children:"link"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\r\nfunc (s *Storage) Get(key string) ([]byte, error)\r\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\r\nfunc (s *Storage) Delete(key string) error\r\nfunc (s *Storage) Reset() error\r\nfunc (s *Storage) Close() error\r\nfunc (s *Storage) Conn() *azblob.Client\n"})}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["Azure blob storage driver is tested on the 2 last ",(0,o.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,o.jsx)(n.p,{children:"And then install the azure blob implementation:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/azureblob\n"})}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/azureblob"\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// Initialize default config\r\nstore := azureblob.New()\r\n\r\n// Initialize custom config\r\nstore := azureblob.New(azureblob.Config{\r\n    Account:   "test",\r\n    Container: "test",\r\n    Credentials: Credentials{\r\n        Account: "test",\r\n        Key:     "YXp1cml0ZWtleQo=",\r\n    },\r\n})\n'})}),"\n",(0,o.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'type Config struct {\r\n    // Storage account name.\r\n    Account string\r\n    // Container name.\r\n    Container string\r\n    // Storage endpoint.\r\n    // Optional. Default: "https://STORAGEACCOUNTNAME.blob.core.windows.net"\r\n    Endpoint string\r\n    // Request timeout.\r\n    // Optional. Default is 0 (no timeout)\r\n    RequestTimeout time.Duration\r\n    // Reset clears any existing keys in existing container.\r\n    // Optional. Default is false\r\n    Reset bool\r\n    // Credentials overrides AWS access key and AWS secret access key. Not recommended.\r\n    // Optional. Default is Credentials{}\r\n    Credentials Credentials\r\n    // The maximum number of times requests that encounter retryable failures should be attempted.\r\n    // Optional. Default is 3\r\n    MaxAttempts int\r\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\r\n    Account:        "",\r\n    Container:      "",\r\n    Endpoint:       "",\r\n    RequestTimeout: 0,\r\n    Reset:          false,\r\n    MaxAttempts:    3,\r\n}\n'})})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(67294);let o={},s=r.createContext(o);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);