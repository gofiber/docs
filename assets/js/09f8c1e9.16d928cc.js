"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["98959"],{40619:function(e,a,s){s.r(a),s.d(a,{metadata:()=>t,contentTitle:()=>r,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"sqlc/README","title":"Sqlc","description":"Using Sqlc to generate Go code from SQL queries.","source":"@site/docs/recipes/sqlc/README.md","sourceDirName":"sqlc","slug":"/sqlc/","permalink":"/recipes/sqlc/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/sqlc/README.md","tags":[],"version":"current","lastUpdatedAt":1736416105000,"frontMatter":{"title":"Sqlc","keywords":["database","sqlc","postgresql"],"description":"Using Sqlc to generate Go code from SQL queries."},"sidebar":"left_sidebar","previous":{"title":"Sqlboiler","permalink":"/recipes/sqlboiler/"},"next":{"title":"Server-Sent Events","permalink":"/recipes/sse/"}}'),n=s("85893"),i=s("50065");let l={title:"Sqlc",keywords:["database","sqlc","postgresql"],description:"Using Sqlc to generate Go code from SQL queries."},r="Fiber with sqlc",o={},c=[{value:"\uD83C\uDFAF fiber + sqlc Example",id:"-fiber--sqlc-example",level:4},{value:"Usage",id:"usage",level:2},{value:"1. Run Postgres",id:"1-run-postgres",level:4},{value:"2. Wait 1-2 minutes",id:"2-wait-1-2-minutes",level:4},{value:"3. You have to migrate the database.",id:"3-you-have-to-migrate-the-database",level:4},{value:"\uD83C\uDFAF It is a &quot;database-first&quot; ORM as opposed to &quot;code-first&quot; (like gorm/gorp). That means you must first create your database schema.",id:"-it-is-a-database-first-orm-as-opposed-to-code-first-like-gormgorp-that-means-you-must-first-create-your-database-schema",level:5},{value:"\uD83C\uDFAF I used golang-migrate to proceed with the migrate.",id:"-i-used-golang-migrate-to-proceed-with-the-migrate",level:5},{value:"1. Make Migration files",id:"1-make-migration-files",level:6},{value:"2. Migrate",id:"2-migrate",level:6},{value:"3. Rollback Migrate",id:"3-rollback-migrate",level:6},{value:"4. Use sqlc",id:"4-use-sqlc",level:4},{value:"1. Install",id:"1-install",level:6},{value:"2. Create a configuration file",id:"2-create-a-configuration-file",level:6},{value:"Example",id:"example",level:6},{value:"sqlc.yaml",id:"sqlcyaml",level:6},{value:"author.sql",id:"authorsql",level:6},{value:"post.sql",id:"postsql",level:6},{value:"3. Generate",id:"3-generate",level:6},{value:"5. Reference",id:"5-reference",level:4}];function d(e){let a={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",h5:"h5",h6:"h6",header:"header",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"fiber-with-sqlc",children:"Fiber with sqlc"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://github.com/gofiber/recipes/tree/master/sqlc",children:(0,n.jsx)(a.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,n.jsx)(a.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/sqlc",children:(0,n.jsx)(a.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.h4,{id:"-fiber--sqlc-example",children:["\uD83C\uDFAF ",(0,n.jsx)(a.a,{href:"https://github.com/gofiber/fiber",children:"fiber"})," + ",(0,n.jsx)(a.a,{href:"https://github.com/sqlc-dev/sqlc",children:"sqlc"})," Example"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a.h4,{id:"1-run-postgres",children:"1. Run Postgres"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"$ docker compose build\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"$ docker compose up\n"})}),"\n",(0,n.jsx)(a.h4,{id:"2-wait-1-2-minutes",children:"2. Wait 1-2 minutes"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:'[+] Running 2/0\n \u2714 Network sqlc_default       Created                                                                             0.1s\n \u2714 Container postgres         Created                                                                             0.0s\nAttaching to postgres\npostgres  |\npostgres  | PostgreSQL Database directory appears to contain a database; Skipping initialization\npostgres  |\npostgres  |\npostgres  | 2023-09-28 09:17:50.737 UTC [1] LOG:  starting PostgreSQL 16.0 (Debian 16.0-1.pgdg120+1) on aarch64-unknown-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit\npostgres  | 2023-09-28 09:17:50.737 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432\npostgres  | 2023-09-28 09:17:50.737 UTC [1] LOG:  listening on IPv6 address "::", port 5432\npostgres  | 2023-09-28 09:17:50.740 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"\npostgres  | 2023-09-28 09:17:50.751 UTC [30] LOG:  database system was shut down at 2023-09-28 08:50:35 UTC\npostgres  | 2023-09-28 09:17:50.770 UTC [1] LOG:  database system is ready to accept connections\n'})}),"\n",(0,n.jsx)(a.h4,{id:"3-you-have-to-migrate-the-database",children:"3. You have to migrate the database."}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.h5,{id:"-it-is-a-database-first-orm-as-opposed-to-code-first-like-gormgorp-that-means-you-must-first-create-your-database-schema",children:'\uD83C\uDFAF It is a "database-first" ORM as opposed to "code-first" (like gorm/gorp). That means you must first create your database schema.'}),"\n",(0,n.jsxs)(a.h5,{id:"-i-used-golang-migrate-to-proceed-with-the-migrate",children:["\uD83C\uDFAF I used ",(0,n.jsx)(a.a,{href:"https://github.com/golang-migrate/migrate",children:"golang-migrate"})," to proceed with the migrate."]}),"\n"]}),"\n",(0,n.jsx)(a.h6,{id:"1-make-migration-files",children:"1. Make Migration files"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"$ migrate create -ext sql -dir ./database/migrations -seq create_initial_table\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:"sqlc/database/migrations/000001_create_initial_table.up.sql\nsqlc/database/migrations/000001_create_initial_table.up.sql\n"})}),"\n",(0,n.jsx)(a.h6,{id:"2-migrate",children:"2. Migrate"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'$ migrate -path database/migrations -database "postgresql://user:password@localhost:5432/fiber_demo?sslmode=disable" -verbose up\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:"2023/09/28 20:00:00 Start buffering 1/u create_initial_table\n2023/09/28 20:00:00 Read and execute 1/u create_initial_table\n2023/09/28 20:00:00 Finished 1/u create_initial_table (read 24.693541ms, ran 68.30925ms)\n2023/09/28 20:00:00 Finished after 100.661625ms\n2023/09/28 20:00:00 Closing source and database\n"})}),"\n",(0,n.jsx)(a.h6,{id:"3-rollback-migrate",children:"3. Rollback Migrate"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'$ migrate -path database/migrations -database "postgresql://user:password@localhost:5432/fiber_demo?sslmode=disable" -verbose down\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:"2023/09/28 20:00:00 Are you sure you want to apply all down migrations? [y/N]\ny\n2023/09/28 20:00:00 Applying all down migrations\n2023/09/28 20:00:00 Start buffering 1/d create_initial_table\n2023/09/28 20:00:00 Read and execute 1/d create_initial_table\n2023/09/28 20:00:00 Finished 1/d create_initial_table (read 39.681125ms, ran 66.220125ms)\n2023/09/28 20:00:00 Finished after 1.83152475s\n"})}),"\n",(0,n.jsx)(a.h4,{id:"4-use-sqlc",children:"4. Use sqlc"}),"\n",(0,n.jsx)(a.h6,{id:"1-install",children:"1. Install"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"# Go 1.17 and above:\n$ go install github.com/sqlc-dev/sqlc/cmd/sqlc@latest\n\n# Go 1.16 and below:\ngo get github.com/sqlc-dev/sqlc/cmd/sqlc\n"})}),"\n",(0,n.jsx)(a.h6,{id:"2-create-a-configuration-file",children:"2. Create a configuration file"}),"\n",(0,n.jsx)(a.h6,{id:"example",children:"Example"}),"\n",(0,n.jsx)(a.h6,{id:"sqlcyaml",children:"sqlc.yaml"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-yaml",children:'version: "2"\nsql:\n  - engine: "postgresql"\n    queries: "database/query"\n    schema: "database/migrations"\n    gen:\n      go:\n        package: "sqlc"\n        out: "database/sqlc"\n'})}),"\n",(0,n.jsx)(a.h6,{id:"authorsql",children:"author.sql"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"-- name: GetAuthors :many\nSELECT * FROM author;\n\n-- name: GetAuthor :one\nSELECT * FROM author WHERE id = $1;\n\n-- name: NewAuthor :one\nINSERT INTO author (email, name) VALUES ($1, $2) RETURNING *;\n\n-- name: UpdateAuthor :one\nUPDATE author SET email = $1, name = $2 WHERE id = $3 RETURNING *;\n\n-- name: DeleteAuthor :exec\nDELETE FROM author WHERE id = $1;\n"})}),"\n",(0,n.jsx)(a.h6,{id:"postsql",children:"post.sql"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"-- name: GetPosts :many\nSELECT * FROM post;\n\n-- name: GetPost :one\nSELECT * FROM post WHERE id = $1;\n\n-- name: NewPost :one\nINSERT INTO post (title, content, author) VALUES ($1, $2, $3) RETURNING *;\n\n-- name: UpdatePost :one\nUPDATE post SET title = $1, content = $2, author = $3 WHERE id = $4 RETURNING *;\n\n-- name: DeletePost :exec\nDELETE FROM post WHERE id = $1;\n\n"})}),"\n",(0,n.jsx)(a.h6,{id:"3-generate",children:"3. Generate"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"$ sqlc generate\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-text",children:"sqlc/\n\u251C\u2500\u2500 author.sql.go\n\u251C\u2500\u2500 db.go\n\u251C\u2500\u2500 models.go\n\u251C\u2500\u2500 post.sql.go\n"})}),"\n",(0,n.jsx)(a.h4,{id:"5-reference",children:"5. Reference"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://docs.sqlc.dev/en/stable/",children:"sqlc document"})})]})}function h(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,a,s){s.d(a,{Z:function(){return r},a:function(){return l}});var t=s(67294);let n={},i=t.createContext(n);function l(e){let a=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);