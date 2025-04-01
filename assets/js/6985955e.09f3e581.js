"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["55922"],{55984:function(e,n,t){t.r(n),t.d(n,{default:()=>f,frontMatter:()=>r,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"leveldb/leveldb","title":"LevelDB","description":"Release","source":"@site/storage_versioned_docs/version-leveldb_v0.x.x/leveldb/README.md","sourceDirName":"leveldb","slug":"/leveldb/","permalink":"/storage/leveldb_v0.x.x/leveldb/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/leveldb/README.md","tags":[],"version":"leveldb_v0.x.x","lastUpdatedAt":1743510804000,"frontMatter":{"id":"leveldb","title":"LevelDB"},"sidebar":"left_sidebar","previous":{"title":"Etcd","permalink":"/storage/leveldb_v0.x.x/etcd/"},"next":{"title":"Memcache","permalink":"/storage/leveldb_v0.x.x/memcache/"}}'),l=t("85893"),s=t("50065");let r={id:"leveldb",title:"LevelDB"},a=void 0,o={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=leveldb*",alt:"Release"}),"\n",(0,l.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,l.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,l.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-leveldb.yml?label=Tests",alt:"Test"}),"\n",(0,l.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,l.jsxs)(n.p,{children:["A fast key-value DB using ",(0,l.jsx)(n.a,{href:"https://github.com/syndtr/goleveldb",children:"syndtr/goleveldb"})]}),"\n",(0,l.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *leveldb.DB\n"})}),"\n",(0,l.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,l.jsxs)(n.p,{children:["LevelDB is tested on the 2 last ",(0,l.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,l.jsx)(n.p,{children:"And then install the leveldb implementation:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/leveldb\n"})}),"\n",(0,l.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/leveldb"\n'})}),"\n",(0,l.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := leveldb.New()\n\n// Initialize custom config\nstore := leveldb.New(leveldb.Config{\n	Path: "./testdb",\n	GCInterval: 10 * time.Second,\n})\n'})}),"\n",(0,l.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"type Config struct {\n	// Path is the filesystem path for the database\n	//\n	// Optional. Default is \"./fiber.leveldb\"\n	Path string\n\n	// CacheSize is the size of LevelDB's cache (in MB)\n	//\n	// Optional. Default is 8MB\n	CacheSize int\n\n	// BlockSize is the size of data blocks (in KB)\n	//\n	// Optional. Default is 4KB\n	BlockSize int\n\n	// WriteBuffer is the size of write buffer (in MB)\n	//\n	// Optional. Default is 4MB\n	WriteBuffer int\n\n	// CompactionL0Trigger is the number of level-0 tables that triggers compaction\n	//\n	// Optional. Default is 4\n	CompactionL0Trigger int\n\n	// WriteL0PauseTrigger is the number of level-0 tables that triggers write pause\n	//\n	// Optional. Default is 12\n	WriteL0PauseTrigger int\n\n	// WriteL0SlowdownTrigger is the number of level-0 tables that triggers write slowdown\n	//\n	// Optional. Default is 8\n	WriteL0SlowdownTrigger int\n\n	// MaxOpenFiles is the maximum number of open files that can be held\n	//\n	// Optional. Default is 200 on MacOS, 500 on others\n	MaxOpenFiles int\n\n	// CompactionTableSize is the size of compaction table (in MB)\n	//\n	// Optional. Default is 2MB\n	CompactionTableSize int\n\n	// BloomFilterBits is the number of bits used in bloom filter\n	//\n	// Optional. Default is 10 bits/key\n	BloomFilterBits int\n\n	// NoSync completely disables fsync\n	//\n	// Optional. Default is false\n	NoSync bool\n\n	// ReadOnly opens the database in read-only mode\n	//\n	// Optional. Default is false\n	ReadOnly bool\n\n	// ErrorIfMissing returns error if database doesn't exist\n	//\n	// Optional. Default is false\n	ErrorIfMissing bool\n\n	// ErrorIfExist returns error if database exists\n	//\n	// Optional. Default is false\n	ErrorIfExist bool\n\n	// GCInterval is the garbage collection interval\n	//\n	// Optional. Default is 10 minutes\n	GCInterval time.Duration\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n	Path:                 "./fiber.leveldb",\n	CacheSize:              8, // 8 MB\n	BlockSize:              4, // 4 KB\n	WriteBuffer:            4, // 4 MB\n	CompactionL0Trigger:    4,\n	WriteL0PauseTrigger:    12,\n	WriteL0SlowdownTrigger: 8,\n	MaxOpenFiles: func() int {\n		if runtime.GOOS == "darwin" {\n			return 200 // MacOS\n		}\n		return 500 // Unix/Linux\n	}(),\n	CompactionTableSize: 2,  // 2 MB\n	BloomFilterBits:     10, // 10 bits per key\n	NoSync:              false,\n	ReadOnly:            false,\n	ErrorIfMissing:      false,\n	ErrorIfExist:        false,\n	GCInterval:          10 * time.Minute,\n}\n'})})]})}function f(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(67294);let l={},s=i.createContext(l);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);