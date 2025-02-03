"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["18558"],{44714:function(e,s,t){t.r(s),t.d(s,{metadata:()=>r,contentTitle:()=>l,default:()=>g,assets:()=>n,toc:()=>h,frontMatter:()=>a});var r=JSON.parse('{"id":"README","title":"\uD83D\uDC4B Welcome","description":"\uD83D\uDCE6 Premade storage drivers for \uD83D\uDE80 Fiber.","source":"@site/docs/storage/README.md","sourceDirName":".","slug":"/","permalink":"/storage/next/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/README.md","tags":[],"version":"current","lastUpdatedAt":1738605584000,"sidebarPosition":1,"frontMatter":{"title":"\uD83D\uDC4B Welcome","description":"\uD83D\uDCE6 Premade storage drivers for \uD83D\uDE80 Fiber.","sidebar_position":1},"sidebar":"left_sidebar","next":{"title":"ArangoDB","permalink":"/storage/next/arangodb/"}}'),o=t("85893"),i=t("50065");let a={title:"\uD83D\uDC4B Welcome",description:"\uD83D\uDCE6 Premade storage drivers for \uD83D\uDE80 Fiber.",sidebar_position:1},l=void 0,n={},h=[{value:"\uD83D\uDCD1 Storage Implementations",id:"-storage-implementations",level:2}];function c(e){let s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("p",{align:"center",children:[(0,o.jsx)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/storage/master/.github/logo-dark.svg#gh-dark-mode-only"}),(0,o.jsx)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/storage/master/.github/logo.svg#gh-light-mode-only"}),(0,o.jsx)("br",{}),(0,o.jsx)("a",{href:"https://pkg.go.dev/github.com/gofiber/storage?tab=doc",children:(0,o.jsx)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9A%20godoc-pkg-00ACD7.svg?color=00ACD7&style=flat"})}),(0,o.jsx)("a",{href:"https://goreportcard.com/report/github.com/gofiber/storage",children:(0,o.jsx)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9D%20goreport-A%2B-75C46B"})}),(0,o.jsx)("a",{href:"https://gofiber.io/discord",children:(0,o.jsx)("img",{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7"})})]}),"\n",(0,o.jsxs)(s.p,{children:["Premade storage drivers that implement the ",(0,o.jsx)(s.a,{href:"https://github.com/gofiber/storage/blob/main/storage.go",children:(0,o.jsx)(s.code,{children:"Storage"})})," interface, designed to be used with various ",(0,o.jsx)(s.a,{href:"https://github.com/gofiber/fiber/tree/master/middleware",children:"Fiber middlewares"}),"."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-go",children:"// Storage interface for communicating with different database/key-value\n// providers. Visit https://github.com/gofiber/storage for more info.\ntype Storage interface {\n	// Get gets the value for the given key.\n	// `nil, nil` is returned when the key does not exist\n	Get(key string) ([]byte, error)\n\n	// Set stores the given value for the given key along\n	// with an expiration value, 0 means no expiration.\n	// Empty key or value will be ignored without an error.\n	Set(key string, val []byte, exp time.Duration) error\n\n	// Delete deletes the value for the given key.\n	// It returns no error if the storage does not contain the key,\n	Delete(key string) error\n\n	// Reset resets the storage and delete all keys.\n	Reset() error\n\n	// Close closes the storage and will stop any running garbage\n	// collectors and open connections.\n	Close() error\n}\n"})}),"\n",(0,o.jsx)(s.h2,{id:"-storage-implementations",children:"\uD83D\uDCD1 Storage Implementations"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/arangodb/",children:"ArangoDB"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+ArangoDB%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-arangodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/azureblob/",children:"AzureBlob"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Azure+Blob%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-azureblob.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/badger/",children:"Badger"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Badger%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-badger.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"./bbolt",children:"Bbolt"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Bbolt%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-bbolt.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/cloudflarekv/",children:"CloudflareKV"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+CloudflareKV%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-cloudflarekv.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/coherence/",children:"Coherence"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Coherence%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-coherence.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/couchbase/",children:"Couchbase"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Couchbase%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-couchbase.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/dynamodb/",children:"DynamoDB"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+DynamoDB%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-dynamodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/etcd/",children:"Etcd"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Etcd%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-etcd.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/memcache/",children:"Memcache"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Memcache%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memcache.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/memory/",children:"Memory"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Local+Storage%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memory.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/minio/",children:"Minio"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Minio%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-minio.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/mockstorage/",children:"MockStorage"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MockStorage%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mockstorage.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/mongodb/",children:"MongoDB"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Mongodb%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mongodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/mssql/",children:"MSSQL"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MSSQL%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mssql.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/mysql/",children:"MySQL"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MySQL%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mysql.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/nats/",children:"NATS"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests%20Nats%20Driver%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-nats.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/neo4j/",children:"Neo4j"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Neo4j%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-neo4j.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/pebble/",children:"Pebble"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Pebble%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-pebble.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/postgres/",children:"Postgres"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Postgres%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-postgres.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/redis/",children:"Redis"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Redis%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-redis.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/rueidis/",children:"Rueidis"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+rueidis%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-rueidis.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/s3/",children:"S3"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+S3%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-s3.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/scylladb/",children:"ScyllaDB"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+scylladb%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-scylladb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/sqlite3/",children:"SQLite3"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Sqlite3%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-sqlite3.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/clickhouse/",children:"ClickHouse"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Clickhouse%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-clickhouse.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/storage/next/valkey/",children:"Valkey"})," ",(0,o.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+valkey%22",children:[" ",(0,o.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-valkey.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n"]})]})}function g(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,s,t){t.d(s,{Z:function(){return l},a:function(){return a}});var r=t(67294);let o={},i=r.createContext(o);function a(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);