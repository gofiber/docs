"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["47809"],{34168:function(e,t,a){a.r(t),a.d(t,{metadata:()=>i,contentTitle:()=>n,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"sqlboiler/README","title":"Sqlboiler","description":"Using Sqlboiler ORM.","source":"@site/docs/recipes/sqlboiler/README.md","sourceDirName":"sqlboiler","slug":"/sqlboiler/","permalink":"/recipes/sqlboiler/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/sqlboiler/README.md","tags":[],"version":"current","lastUpdatedAt":1732702215000,"frontMatter":{"title":"Sqlboiler","keywords":["sqlboiler","database","docker"],"description":"Using Sqlboiler ORM."},"sidebar":"left_sidebar","previous":{"title":"Single Page Application (SPA)","permalink":"/recipes/spa/"},"next":{"title":"Sqlc","permalink":"/recipes/sqlc/"}}'),s=a("85893"),l=a("50065");let r={title:"Sqlboiler",keywords:["sqlboiler","database","docker"],description:"Using Sqlboiler ORM."},n="Fiber with sqlboiler",o={},d=[{value:"\uD83C\uDFAF Fiber + Sqlboiler Example",id:"-fiber--sqlboiler-example",level:4},{value:"\uD83D\uDC40 Usage",id:"-usage",level:2},{value:"1. Run Postgres",id:"1-run-postgres",level:4},{value:"2. Wait 1-2 minutes",id:"2-wait-1-2-minutes",level:4},{value:"3. You have to migrate the database.",id:"3-you-have-to-migrate-the-database",level:4},{value:"\uD83C\uDFAF It is a &quot;database-first&quot; ORM as opposed to &quot;code-first&quot; (like gorm/gorp). That means you must first create your database schema.",id:"-it-is-a-database-first-orm-as-opposed-to-code-first-like-gormgorp-that-means-you-must-first-create-your-database-schema",level:6},{value:"\uD83C\uDFAF I used golang-migrate to proceed with the migrate.",id:"-i-used-golang-migrate-to-proceed-with-the-migrate",level:6},{value:"1. Make Migration files",id:"1-make-migration-files",level:6},{value:"2. Migrate",id:"2-migrate",level:6},{value:"3. Rollback Migrate",id:"3-rollback-migrate",level:6},{value:"4. Use sqlboiler",id:"4-use-sqlboiler",level:4},{value:"1. Install",id:"1-install",level:6},{value:"2. Create a configuration file",id:"2-create-a-configuration-file",level:6},{value:"\uD83C\uDFAF The configuration file should be named sqlboiler.toml",id:"-the-configuration-file-should-be-named-sqlboilertoml",level:6},{value:"Example",id:"example",level:6},{value:"3. Create models",id:"3-create-models",level:6},{value:"\uD83C\uDFAF After creating a configuration file that points at the database we want to generate models for, we can invoke the sqlboiler command line utility.",id:"-after-creating-a-configuration-file-that-points-at-the-database-we-want-to-generate-models-for-we-can-invoke-the-sqlboiler-command-line-utility",level:6}];function c(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",h6:"h6",header:"header",img:"img",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"fiber-with-sqlboiler",children:"Fiber with sqlboiler"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/sqlboiler",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/sqlboiler",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.h4,{id:"-fiber--sqlboiler-example",children:["\uD83C\uDFAF ",(0,s.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," + ",(0,s.jsx)(t.a,{href:"https://github.com/volatiletech/sqlboiler",children:"Sqlboiler"})," Example"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"-usage",children:"\uD83D\uDC40 Usage"}),"\n",(0,s.jsx)(t.h4,{id:"1-run-postgres",children:"1. Run Postgres"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ docker compose build\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ docker compose up\n"})}),"\n",(0,s.jsx)(t.h4,{id:"2-wait-1-2-minutes",children:"2. Wait 1-2 minutes"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:'[+] Running 2/0\n \u2714 Network sqlboiler_default  Created                                                                                0.0s\n \u2714 Container postgres         Created                                                                                0.0s\nAttaching to postgres\npostgres  |\npostgres  | PostgreSQL Database directory appears to contain a database; Skipping initialization\npostgres  |\npostgres  | 2023-09-22 01:09:46.453 UTC [1] LOG:  starting PostgreSQL 16.0 (Debian 16.0-1.pgdg120+1) on aarch64-unknown-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit\npostgres  | 2023-09-22 01:09:46.453 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432\npostgres  | 2023-09-22 01:09:46.453 UTC [1] LOG:  listening on IPv6 address "::", port 5432\npostgres  | 2023-09-22 01:09:46.454 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"\npostgres  | 2023-09-22 01:09:46.461 UTC [30] LOG:  database system was shut down at 2023-09-22 01:09:44 UTC\npostgres  | 2023-09-22 01:09:46.468 UTC [1] LOG:  database system is ready to accept connections\n'})}),"\n",(0,s.jsx)(t.h4,{id:"3-you-have-to-migrate-the-database",children:"3. You have to migrate the database."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.h6,{id:"-it-is-a-database-first-orm-as-opposed-to-code-first-like-gormgorp-that-means-you-must-first-create-your-database-schema",children:'\uD83C\uDFAF It is a "database-first" ORM as opposed to "code-first" (like gorm/gorp). That means you must first create your database schema.'}),"\n",(0,s.jsxs)(t.h6,{id:"-i-used-golang-migrate-to-proceed-with-the-migrate",children:["\uD83C\uDFAF I used ",(0,s.jsx)(t.a,{href:"https://github.com/golang-migrate/migrate",children:"golang-migrate"})," to proceed with the migrate."]}),"\n"]}),"\n",(0,s.jsx)(t.h6,{id:"1-make-migration-files",children:"1. Make Migration files"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ migrate create -ext sql -dir ./migrations -seq create_initial_table\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"sqlboiler/migrations/000001_create_initial_table.up.sql\nsqlboiler/migrations/000001_create_initial_table.up.sql\n"})}),"\n",(0,s.jsx)(t.h6,{id:"2-migrate",children:"2. Migrate"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'$ migrate -path migrations -database "postgresql://user:password@localhost:5432/fiber_demo?sslmode=disable" -verbose up\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"2023/09/22 20:00:00 Start buffering 1/u create_initial_table\n2023/09/22 20:00:00 Read and execute 1/u create_initial_table\n2023/09/22 20:00:00 Finished 1/u create_initial_table (read 24.693541ms, ran 68.30925ms)\n2023/09/22 20:00:00 Finished after 100.661625ms\n2023/09/22 20:00:00 Closing source and database\n"})}),"\n",(0,s.jsx)(t.h6,{id:"3-rollback-migrate",children:"3. Rollback Migrate"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'$ migrate -path migrations -database "postgresql://user:password@localhost:5432/fiber_demo?sslmode=disable" -verbose down\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"2023/09/22 20:00:00 Are you sure you want to apply all down migrations? [y/N]\ny\n2023/09/22 20:00:00 Applying all down migrations\n2023/09/22 20:00:00 Start buffering 1/d create_initial_table\n2023/09/22 20:00:00 Read and execute 1/d create_initial_table\n2023/09/22 20:00:00 Finished 1/d create_initial_table (read 39.681125ms, ran 66.220125ms)\n2023/09/22 20:00:00 Finished after 1.83152475s\n"})}),"\n",(0,s.jsx)(t.h4,{id:"4-use-sqlboiler",children:"4. Use sqlboiler"}),"\n",(0,s.jsx)(t.h6,{id:"1-install",children:"1. Install"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Go 1.16 and above:\n$ go install github.com/volatiletech/sqlboiler/v4@latest\n$ go install github.com/volatiletech/sqlboiler/v4/drivers/sqlboiler-psql@latest\n"})}),"\n",(0,s.jsx)(t.h6,{id:"2-create-a-configuration-file",children:"2. Create a configuration file"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.h6,{id:"-the-configuration-file-should-be-named-sqlboilertoml",children:"\uD83C\uDFAF The configuration file should be named sqlboiler.toml"}),"\n"]}),"\n",(0,s.jsx)(t.h6,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:'output   = "models"\nwipe     = true\nno-tests = true\nadd-enum-types = true\n\n[psql]\n  dbname = "fiber_demo"\n  host   = "localhost"\n  port   = 5432\n  user   = "user"\n  pass   = "password"\n  schema = "schema"\n  blacklist = ["migrations", "other"]\n'})}),"\n",(0,s.jsx)(t.h6,{id:"3-create-models",children:"3. Create models"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.h6,{id:"-after-creating-a-configuration-file-that-points-at-the-database-we-want-to-generate-models-for-we-can-invoke-the-sqlboiler-command-line-utility",children:"\uD83C\uDFAF After creating a configuration file that points at the database we want to generate models for, we can invoke the sqlboiler command line utility."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ sqlboiler psql\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"models/\n\u251C\u2500\u2500 author.go\n\u251C\u2500\u2500 boil_queries.go\n\u251C\u2500\u2500 boil_table_names.go\n\u251C\u2500\u2500 boil_types.go\n\u251C\u2500\u2500 boil_view_names.go\n\u251C\u2500\u2500 post.go\n\u251C\u2500\u2500 schema_migrations.go\n"})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return n},a:function(){return r}});var i=a(67294);let s={},l=i.createContext(s);function r(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);