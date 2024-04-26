"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[74799],{55089:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(74848),i=t(28453);const r={id:"s3",title:"S3"},o=void 0,l={id:"s3/s3",title:"S3",description:"Release",source:"@site/storage_versioned_docs/version-badger_v2.x.x/s3/README.md",sourceDirName:"s3",slug:"/s3/",permalink:"/storage/badger_v2.x.x/s3/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/s3/README.md",tags:[],version:"badger_v2.x.x",lastUpdatedAt:1714133252e3,frontMatter:{id:"s3",title:"S3"},sidebar:"tutorialSidebar",previous:{title:"Rueidis",permalink:"/storage/badger_v2.x.x/rueidis/"},next:{title:"ScyllaDb",permalink:"/storage/badger_v2.x.x/scylladb/"}},a={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=s3*",alt:"Release"}),"\n",(0,s.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-s3.yml?label=Tests",alt:"Test"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,s.jsxs)(n.p,{children:["A S3 storage driver using ",(0,s.jsx)(n.a,{href:"https://github.com/aws/aws-sdk-go-v2",children:"aws/aws-sdk-go-v2"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If config fields of credentials not given, credentials are using from the environment variables, ~/.aws/credentials, or EC2 instance role. If config fields of credentials given, credentials are using from config. Look at: ",(0,s.jsx)(n.a,{href:"https://aws.github.io/aws-sdk-go-v2/docs/configuring-sdk/#specifying-credentials",children:"specifying credentials"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,s.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *s3.Client\n\n// Additional useful methods.\nfunc (s *Storage) CreateBucket(bucket string) error\nfunc (s *Storage) DeleteBucket(bucket string) error\nfunc (s *Storage) SetWithChecksum(key string, val []byte, checksum map[types.ChecksumAlgorithm][]byte) error\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["S3 is tested on the 2 last ",(0,s.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,s.jsx)(n.p,{children:"And then install the s3 implementation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/s3/v2\n"})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/s3/v2"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := s3.New()\n\n// Initialize custom config\nstore := s3.New(s3.Config{\n\tBucket:   "my-bucket-url",\n\tEndpoint: "my-endpoint",\n\tRegion:   "my-region",\n\tReset:    false,\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Create an object with ",(0,s.jsx)(n.code,{children:"Set()"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'err := store.Set("my-key", []byte("my-value"))\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Or, call ",(0,s.jsx)(n.code,{children:"SetWithChecksum()"})," to create an object with checksum to\nask S3 server to verify data integrity on server side:"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Currently 4 algorithms are supported:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["types.ChecksumAlgorithmCrc32 (",(0,s.jsx)(n.code,{children:"CRC32"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["types.ChecksumAlgorithmCrc32c (",(0,s.jsx)(n.code,{children:"CRC32C"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["types.ChecksumAlgorithmSha1 (",(0,s.jsx)(n.code,{children:"SHA1"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["types.ChecksumAlgorithmSha256 (",(0,s.jsx)(n.code,{children:"SHA256"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more information, see ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/aws/aws-sdk-go-v2/service/s3#PutObjectInput",children:"PutObjectInput"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'key := "my-key"\nval := []byte("my-value")\n\nhash := sha256.New()\nhash.Write(val)\nsha256sum := hash.Sum(nil)\n\n// import "github.com/aws/aws-sdk-go-v2/service/s3/types"\nchecksum  = map[types.ChecksumAlgorithm][]byte{\n    types.ChecksumAlgorithmSha256: sha256sum,\n}\n\nerr := store.SetWithChecksum(key, val, checksum)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// Config defines the config for storage.\ntype Config struct {\n\t// S3 bucket name\n\tBucket string\n\n\t// AWS endpoint\n\tEndpoint string\n\n\t// AWS region\n\tRegion string\n\n\t// Request timeout\n\t//\n\t// Optional. Default is 0 (no timeout)\n\tRequestTimeout time.Duration\n\n\t// Reset clears any existing keys in existing Bucket\n\t//\n\t// Optional. Default is false\n\tReset bool\n\n    // Credentials overrides AWS access key and AWS secret access key. Not recommended.\n\t//\n\t// Optional. Default is Credentials{}\n\tCredentials Credentials\n\n\t// The maximum number of times requests that encounter retryable failures should be attempted.\n\t//\n\t// Optional. Default is 3\n\tMaxAttempts int\n\n}\n\ntype Credentials struct {\n\tAccessKey       string\n\tSecretAccessKey string\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(n.p,{children:"The default configuration lacks Bucket, Region, and Endpoint which are all required and must be overwritten:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// ConfigDefault is the default config\nvar ConfigDefault = Config{\n\tBucket:         "",\n\tRegion:         "",\n\tEndpoint:       "",\n\tCredentials:    Credentials{},\n\tMaxAttempts:    3,\n\tRequestTimeout: 0,\n\tReset:          false,\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);