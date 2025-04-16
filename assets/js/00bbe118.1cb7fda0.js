"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["34417"],{16348:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"rueidis/rueidis","title":"Rueidis","description":"Release","source":"@site/storage_versioned_docs/version-memcache_v2.x.x/rueidis/README.md","sourceDirName":"rueidis","slug":"/rueidis/","permalink":"/docs/storage/memcache_v2.x.x/rueidis/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/rueidis/README.md","tags":[],"version":"memcache_v2.x.x","lastUpdatedAt":1744830196000,"frontMatter":{"id":"rueidis","title":"Rueidis"},"sidebar":"tutorialSidebar","previous":{"title":"Ristretto","permalink":"/docs/storage/memcache_v2.x.x/ristretto/"},"next":{"title":"S3","permalink":"/docs/storage/memcache_v2.x.x/s3/"}}'),s=i("85893"),a=i("50065");let r={id:"rueidis",title:"Rueidis"},l=void 0,o={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=rueidis*",alt:"Release"}),"\n",(0,s.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-rueidis.yml?label=Tests",alt:"Test"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,s.jsxs)(n.p,{children:["A fast Redis Storage that does auto pipelining and supports client side caching. ",(0,s.jsx)(n.a,{href:"https://github.com/redis/rueidis",children:"redis/rueidis"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note: Requires Go 1.20 and above"})}),"\n",(0,s.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() rueidis.Client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Rueidis is tested on the latest ",(0,s.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go version"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,s.jsx)(n.p,{children:"And then install the rueidis implementation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/rueidis\n"})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/rueidis"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can use the one of the following options to create a Rueidis Storage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Initialize default config (localhost:6379)\nstore := rueidis.New()\n\n// Initialize custom config \nstore := rueidis.New(rueidis.Config{\n    InitAddress:    []string{"localhost:6380"},\n    Username:       "",\n    Password:       "",\n    Database:       0,\n    Reset:          false,\n    TLSConfig:      nil,\n})\n\n// Initialize using Rueidis URL\nstore := rueidis.New(rueidis.Config{\n    URL:    "redis://localhost:6379",\n})\n\n// Initialize Rueidis Cluster Client\nstore := rueidis.New(rueidis.Config{\n    InitAddress:    []string{":6379", ":6380"},\n})\n\n// Create a client with support for TLS\ncer, err := tls.LoadX509KeyPair("./client.crt", "./client.key")\nif err != nil {\n	log.Println(err)\n	return\n}\ntlsCfg := &tls.Config{\n	MinVersion:            tls.VersionTLS12,\n	InsecureSkipVerify:    true,\n	Certificates:          []tls.Certificate{cer},\n}\nstore = rueidis.New(rueidis.Config{\n    InitAddress:    []string{"localhost:6380"},\n    Username:       "<user>",\n    Password:       "<password>",\n    SelectDB:       0,\n    TLSConfig:      tlsCfg,\n})\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'type Config struct {\n	// Server username\n	//\n	// Optional. Default is ""\n	Username string\n\n	// Server password\n	//\n	// Optional. Default is ""\n	Password string\n\n	// ClientName will execute the `CLIENT SETNAME ClientName` command for each conn.\n	//\n	// Optional. Default is ""\n	ClientName string\n\n	// URL standard format Redis URL. If this is set all other config options, InitAddress, Username, Password, ClientName, and SelectDB have no effect.\n	//\n	// Example: redis://<user>:<pass>@localhost:6379/<db>\n	// Optional. Default is ""\n	URL string\n\n	// SelectDB to be selected after connecting to the server.\n	//\n	// Optional. Default is 0\n	SelectDB int\n\n	// Either a single address or a seed list of host:port addresses, this enables FailoverClient and ClusterClient\n	//\n	// Optional. Default is []string{"127.0.0.1:6379"}\n	InitAddress []string\n\n	// TLS Config to use. When set TLS will be negotiated.\n	//\n	// Optional. Default is nil\n	TLSConfig *tls.Config\n\n	// CacheSizeEachConn is redis client side cache size that bind to each TCP connection to a single redis instance.\n	//\n	// Optional. The default is DefaultCacheBytes: 128 * (1 << 20)\n	CacheSizeEachConn int\n\n	// RingScaleEachConn sets the size of the ring buffer in each connection to (2 ^ RingScaleEachConn).\n	//\n	// Optional. The default is RingScaleEachConn, which results into having a ring of size 2^10 for each connection.\n	RingScaleEachConn int\n\n	// ReadBufferEachConn is the size of the bufio.NewReaderSize for each connection, default to DefaultReadBuffer (0.5 MiB).\n	//\n	// Optional. The default is DefaultReadBuffer: 1 << 19\n	ReadBufferEachConn int\n\n	// WriteBufferEachConn is the size of the bufio.NewWriterSize for each connection, default to DefaultWriteBuffer (0.5 MiB).\n	//\n	// Optional. The default is DefaultWriteBuffer: 1 << 19\n	WriteBufferEachConn int\n\n	// BlockingPoolSize is the size of the connection pool shared by blocking commands (ex BLPOP, XREAD with BLOCK).\n	//\n	// Optional. The default is DefaultPoolSize: 1000\n	BlockingPoolSize int\n\n	// PipelineMultiplex determines how many tcp connections used to pipeline commands to one redis instance.\n	//\n	// Optional. The default for single and sentinel clients is 2, which means 4 connections (2^2).\n	PipelineMultiplex int\n\n	// DisableRetry disables retrying read-only commands under network errors\n	//\n	// Optional. The default is False\n	DisableRetry bool\n\n	// DisableCache falls back Client.DoCache/Client.DoMultiCache to Client.Do/Client.DoMulti\n	//\n	// Optional. The default is false\n	DisableCache bool\n\n	// AlwaysPipelining makes rueidis.Client always pipeline redis commands even if they are not issued concurrently.\n	//\n	// Optional. The default is true\n	AlwaysPipelining bool\n\n	// Reset clears any existing keys in existing Collection\n	//\n	// Optional. Default is false\n	Reset bool\n\n	// CacheTTL TTL\n	//\n	// Optional. Default is time.Minute\n	CacheTTL time.Duration\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n	Username:            "",\n	Password:            "",\n	ClientName:          "",\n	SelectDB:            0,\n	InitAddress:         []string{"127.0.0.1:6379"},\n	TLSConfig:           nil,\n	CacheSizeEachConn:   rueidis.DefaultCacheBytes,\n	RingScaleEachConn:   rueidis.DefaultRingScale,\n	ReadBufferEachConn:  rueidis.DefaultReadBuffer,\n	WriteBufferEachConn: rueidis.DefaultWriteBuffer,\n	BlockingPoolSize:    rueidis.DefaultPoolSize,\n	PipelineMultiplex:   2,\n	DisableRetry:        false,\n	DisableCache:        false,\n	AlwaysPipelining:    true,\n	Reset:               false,\n	CacheTTL:            time.Minute,\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return r}});var t=i(67294);let s={},a=t.createContext(s);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);