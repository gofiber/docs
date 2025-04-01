"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["36144"],{39421:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>r});var i=JSON.parse('{"id":"dynamodb/dynamodb","title":"DynamoDB","description":"Release","source":"@site/storage_versioned_docs/version-memory_v1.x.x/dynamodb/README.md","sourceDirName":"dynamodb","slug":"/dynamodb/","permalink":"/storage/memory_v1.x.x/dynamodb/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/dynamodb/README.md","tags":[],"version":"memory_v1.x.x","lastUpdatedAt":1743490218000,"frontMatter":{"id":"dynamodb","title":"DynamoDB"},"sidebar":"tutorialSidebar","previous":{"title":"Couchbase","permalink":"/storage/memory_v1.x.x/couchbase/"},"next":{"title":"Etcd","permalink":"/storage/memory_v1.x.x/etcd/"}}'),s=t("85893"),a=t("50065");let o={id:"dynamodb",title:"DynamoDB"},r=void 0,l={},d=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function c(e){let n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=dynamodb*",alt:"Release"}),"\n",(0,s.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-dynamodb.yml?label=Tests",alt:"Test"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,s.jsxs)(n.p,{children:["A DynamoDB storage driver using ",(0,s.jsx)(n.a,{href:"https://github.com/aws/aws-sdk-go-v2",children:"aws/aws-sdk-go-v2"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If config fields of credentials not given, credentials are using from the environment variables, ~/.aws/credentials, or EC2 instance role. If config fields of credentials given, credentials are using from config. Look at: ",(0,s.jsx)(n.a,{href:"https://aws.github.io/aws-sdk-go-v2/docs/configuring-sdk/#specifying-credentials",children:"specifying credentials"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,s.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func New(config Config) Storage\n\n\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *awsdynamodb.Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["DynamoDB is tested on the 2 last ",(0,s.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,s.jsx)(n.p,{children:"And then install the dynamodb implementation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/dynamodb/v2\n"})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/dynamodb/v2"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// Initialize dynamodb\nstore := dynamodb.New(dynamodb.Config{\n	\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'type Config struct {\n	// Region of the DynamoDB service you want to use.\n	// Valid values: https://docs.aws.amazon.com/general/latest/gr/rande.html#ddb_region.\n	// E.g. "us-west-2".\n	// Optional (read from shared config file or environment variable if not set).\n	// Environment variable: "AWS_REGION".\n	Region string\n\n	// Name of the DynamoDB table.\n	// Optional ("fiber_storage" by default).\n	Table string\n\n	// CustomEndpoint allows you to set a custom DynamoDB service endpoint.\n	// This is especially useful if you\'re running a "DynamoDB local" Docker container for local testing.\n	// Typical value for the Docker container: "http://localhost:8000".\n	// See https://hub.docker.com/r/amazon/dynamodb-local/.\n	// Optional ("" by default)\n	Endpoint string\n\n	// Credentials overrides AWS access key and AWS secret access key. Not recommended.\n	//\n	// Optional. Default is Credentials{}\n	Credentials Credentials\n\n	// The maximum number of times requests that encounter retryable failures should be attempted.\n	//\n	// Optional. Default is 3\n	MaxAttempts int\n\n	// Reset clears any existing keys in existing Bucket\n	//\n	// Optional. Default is false\n	Reset bool\n\n	// ReadCapacityUnits of the table.\n	// Only required when the table doesn\'t exist yet and is created by gokv.\n	// Optional (5 by default, which is the same default value as when creating a table in the web console)\n	// 25 RCUs are included in the free tier (across all tables).\n	// For example calculations, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/HowItWorks.ProvisionedThroughput.\n	// For limits, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/Limits.md#capacity-units-and-provisioned-throughput.md#provisioned-throughput.\n	ReadCapacityUnits int64\n\n	// ReadCapacityUnits of the table.\n	// Only required when the table doesn\'t exist yet and is created by gokv.\n	// Optional (5 by default, which is the same default value as when creating a table in the web console)\n	// 25 RCUs are included in the free tier (across all tables).\n	// For example calculations, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/HowItWorks.ProvisionedThroughput.\n	// For limits, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/Limits.md#capacity-units-and-provisioned-throughput.md#provisioned-throughput.\n	WriteCapacityUnits int64\n\n	// If the table doesn\'t exist yet, gokv creates it.\n	// If WaitForTableCreation is true, gokv will block until the table is created, with a timeout of 15 seconds.\n	// If the table still doesn\'t exist after 15 seconds, an error is returned.\n	// If WaitForTableCreation is false, gokv returns the client immediately.\n	// In the latter case you need to make sure that you don\'t read from or write to the table before it\'s created,\n	// because otherwise you will get ResourceNotFoundException errors.\n	// Optional (true by default).\n	WaitForTableCreation *bool\n}\n\ntype Credentials struct {\n	AccessKey       string\n	SecretAccessKey string\n}\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n	Table:                "fiber_storage",\n	Credentials:          Credentials{},\n	MaxAttempts:          3,\n	Reset:                false,\n	ReadCapacityUnits:    5,\n	WriteCapacityUnits:   5,\n	WaitForTableCreation: aws.Bool(true),\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var i=t(67294);let s={},a=i.createContext(s);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);