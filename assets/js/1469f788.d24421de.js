"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[99715],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var o=r(67294);function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,s=function(t,e){if(null==t)return{};var r,o,s={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(s[r]=t[r]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}var n=o.createContext({}),g=function(t){var e=o.useContext(n),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=g(t.components);return o.createElement(n.Provider,{value:e},t.children)},m="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},b=o.forwardRef((function(t,e){var r=t.components,s=t.mdxType,a=t.originalType,n=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=g(r),b=s,f=m["".concat(n,".").concat(b)]||m[b]||h[b]||a;return r?o.createElement(f,i(i({ref:e},c),{},{components:r})):o.createElement(f,i({ref:e},c))}));function f(t,e){var r=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var n in e)hasOwnProperty.call(e,n)&&(l[n]=e[n]);l.originalType=t,l[m]="string"==typeof t?t:s,i[1]=l;for(var g=2;g<a;g++)i[g]=r[g];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},15523:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>n,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>g});var o=r(87462),s=(r(67294),r(3905));const a={title:"\ud83d\udc4b Welcome",description:"\ud83d\udce6 Premade storage drivers for \ud83d\ude80 Fiber.",sidebar_position:1},i=void 0,l={unversionedId:"README",id:"version-postgres_v2.x.x/README",title:"\ud83d\udc4b Welcome",description:"\ud83d\udce6 Premade storage drivers for \ud83d\ude80 Fiber.",source:"@site/storage_versioned_docs/version-postgres_v2.x.x/README.md",sourceDirName:".",slug:"/",permalink:"/storage/postgres_v2.x.x/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/README.md",tags:[],version:"postgres_v2.x.x",lastUpdatedAt:1703512367,formattedLastUpdatedAt:"Dec 25, 2023",sidebarPosition:1,frontMatter:{title:"\ud83d\udc4b Welcome",description:"\ud83d\udce6 Premade storage drivers for \ud83d\ude80 Fiber.",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"ArangoDB",permalink:"/storage/postgres_v2.x.x/arangodb/"}},n={},g=[{value:"\ud83d\udcd1 Storage Implementations",id:"-storage-implementations",level:2}],c={toc:g},m="wrapper";function h(t){let{components:e,...r}=t;return(0,s.kt)(m,(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/storage/master/.github/logo-dark.svg#gh-dark-mode-only"}),(0,s.kt)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/storage/master/.github/logo.svg#gh-light-mode-only"}),(0,s.kt)("br",null),(0,s.kt)("a",{href:"https://pkg.go.dev/github.com/gofiber/storage?tab=doc"},(0,s.kt)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9A%20godoc-pkg-00ACD7.svg?color=00ACD7&style=flat"})),(0,s.kt)("a",{href:"https://goreportcard.com/report/github.com/gofiber/storage"},(0,s.kt)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9D%20goreport-A%2B-75C46B"})),(0,s.kt)("a",{href:"https://gofiber.io/discord"},(0,s.kt)("img",{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7"}))),(0,s.kt)("p",null,"Premade storage drivers that implement the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage/blob/main/storage.go"},(0,s.kt)("inlineCode",{parentName:"a"},"Storage"))," interface, designed to be used with various ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber/tree/master/middleware"},"Fiber middlewares"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"// Storage interface for communicating with different database/key-value\n// providers. Visit https://github.com/gofiber/storage for more info.\ntype Storage interface {\n    // Get gets the value for the given key.\n    // `nil, nil` is returned when the key does not exist\n    Get(key string) ([]byte, error)\n\n    // Set stores the given value for the given key along\n    // with an expiration value, 0 means no expiration.\n    // Empty key or value will be ignored without an error.\n    Set(key string, val []byte, exp time.Duration) error\n\n    // Delete deletes the value for the given key.\n    // It returns no error if the storage does not contain the key,\n    Delete(key string) error\n\n    // Reset resets the storage and delete all keys.\n    Reset() error\n\n    // Close closes the storage and will stop any running garbage\n    // collectors and open connections.\n    Close() error\n}\n")),(0,s.kt)("h2",{id:"-storage-implementations"},"\ud83d\udcd1 Storage Implementations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/arangodb/"},"ArangoDB")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+ArangoDB%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-arangodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/azureblob/"},"AzureBlob")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Azure+Blob%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-azureblob.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/badger/"},"Badger")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Badger%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-badger.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./bbolt"},"Bbolt")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Bbolt%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-bbolt.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/couchbase/"},"Couchbase")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Couchbase%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-couchbase.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/dynamodb/"},"DynamoDB")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+DynamoDB%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-dynamodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/etcd/"},"Etcd")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Etcd%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-etcd.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/memcache/"},"Memcache")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Memcache%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memcache.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/memory/"},"Memory")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Local+Storage%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memory.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/mongodb/"},"MongoDB")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Mongodb%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mongodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/mssql/"},"MSSQL")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MSSQL%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mssql.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/mysql/"},"MySQL")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MySQL%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mysql.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/pebble/"},"Pebble")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Pebble%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-pebble.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/postgres/"},"Postgres")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Postgres%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-postgres.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/redis/"},"Redis")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Redis%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-redis.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/s3/"},"S3")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+S3%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-s3.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/storage/postgres_v2.x.x/sqlite3/"},"SQLite3")," ",(0,s.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Sqlite3%22"}," ",(0,s.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-sqlite3.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "))))}h.isMDXComponent=!0}}]);