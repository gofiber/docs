"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["92958"],{61585:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>g,assets:()=>o,toc:()=>d,frontMatter:()=>a});var t=JSON.parse('{"id":"redis/redis","title":"Redis","description":"Release","source":"@site/storage_versioned_docs/version-pebble_v1.x.x/redis/README.md","sourceDirName":"redis","slug":"/redis/","permalink":"/storage/pebble_v1.x.x/redis/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/redis/README.md","tags":[],"version":"pebble_v1.x.x","lastUpdatedAt":1736513694000,"frontMatter":{"id":"redis","title":"Redis"},"sidebar":"tutorialSidebar","previous":{"title":"Postgres","permalink":"/storage/pebble_v1.x.x/postgres/"},"next":{"title":"Ristretto","permalink":"/storage/pebble_v1.x.x/ristretto/"}}'),i=s("85893"),r=s("50065");let a={id:"redis",title:"Redis"},l=void 0,o={},d=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function c(e){let n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=redis*",alt:"Release"}),"\n",(0,i.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-redis.yml?label=Tests",alt:"Test"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,i.jsxs)(n.p,{children:["A Redis storage driver using ",(0,i.jsx)(n.a,{href:"https://github.com/go-redis/redis",children:"go-redis/redis"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() redis.UniversalClient\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Redis is tested on the 2 last ",(0,i.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then install the redis implementation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/redis/v2\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/redis/v2"\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can use the one of the following options to create a Redis Storage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := redis.New()\n\n// Initialize custom config\nstore := redis.New(redis.Config{\n	Host:      "127.0.0.1",\n	Port:      6379,\n	Username:  "",\n	Password:  "",\n	Database:  0,\n	Reset:     false,\n	TLSConfig: nil,\n	PoolSize:  10 * runtime.GOMAXPROCS(0),\n})\n\n// Initialize Redis Failover Client\nstore := redis.New(redis.Config{\n	MasterName:       "master-name",\n	Addrs:            []string{":6379"},\n})\n\n// Initialize Redis Cluster Client\nstore := redis.New(redis.Config{\n	Addrs:            []string{":6379", ":6380"},\n})\n\n// Create a client with support for TLS\ncer, err := tls.LoadX509KeyPair("./client.crt", "./client.key")\nif err != nil {\n	log.Println(err)\n	return\n}\ntlsCfg := &tls.Config{\n	MinVersion:               tls.VersionTLS12,\n	InsecureSkipVerify:       true,\n	Certificates:             []tls.Certificate{cer},\n}\nstore = redis.New(redis.Config{\n    URL:     	"redis://<user>:<pass>@127.0.0.1:6379/<db>",\n	TLSConfig: 	tlsCfg,\n    Reset:    	false,\n})\n\n// Create a client with a Redis URL with all information.\nstore = redis.New(redis.Config{\n    URL:     "redis://<user>:<pass>@127.0.0.1:6379/<db>",\n    Reset:    false,\n})\n'})}),"\n",(0,i.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'type Config struct {\n	// Host name where the DB is hosted\n	//\n	// Optional. Default is "127.0.0.1"\n	Host string\n\n	// Port where the DB is listening on\n	//\n	// Optional. Default is 6379\n	Port int\n\n	// Server username\n	//\n	// Optional. Default is ""\n	Username string\n\n	// Server password\n	//\n	// Optional. Default is ""\n	Password string\n\n	// Database to be selected after connecting to the server.\n	//\n	// Optional. Default is 0\n	Database int\n\n	// URL standard format Redis URL. If this is set all other config options, Host, Port, Username, Password, Database have no effect.\n	//\n	// Example: redis://<user>:<pass>@localhost:6379/<db>\n	// Optional. Default is ""\n	URL string\n\n	// Either a single address or a seed list of host:port addresses, this enables FailoverClient and ClusterClient\n	//\n	// Optional. Default is []string{}\n	Addrs []string\n\n	// MasterName is the sentinel master\'s name\n	//\n	// Optional. Default is ""\n	MasterName string\n\n	// ClientName will execute the `CLIENT SETNAME ClientName` command for each conn.\n	//\n	// Optional. Default is ""\n	ClientName string\n\n	// SentinelUsername\n	//\n	// Optional. Default is ""\n	SentinelUsername string\n\n	// SentinelPassword\n	//\n	// Optional. Default is ""\n	SentinelPassword string\n\n	// Reset clears any existing keys in existing Collection\n	//\n	// Optional. Default is false\n	Reset bool\n\n	// TLS Config to use. When set TLS will be negotiated.\n	//\n	// Optional. Default is nil\n	TLSConfig *tls.Config\n\n	// Maximum number of socket connections.\n	//\n	// Optional. Default is 10 connections per every available CPU as reported by runtime.GOMAXPROCS.\n	PoolSize int\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n	Host:                  "127.0.0.1",\n	Port:                  6379,\n	Username:              "",\n	Password:              "",\n	URL:                   "",\n	Database:              0,\n	Reset:                 false,\n	TLSConfig:             nil,\n	PoolSize:              10 * runtime.GOMAXPROCS(0),\n	Addrs:                 []string{},\n	MasterName:            "",\n	ClientName:            "",\n	SentinelUsername:      "",\n	SentinelPassword:      "",\n}\n'})})]})}function g(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var t=s(67294);let i={},r=t.createContext(i);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);