"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["3826"],{46778:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"MIGRATE","title":"MIGRATE","description":"This document contains instructions for migrating to various storage versions.","source":"@site/storage_versioned_docs/version-postgres_v3.x.x/MIGRATE.md","sourceDirName":".","slug":"/MIGRATE","permalink":"/storage/postgres_v3.x.x/MIGRATE","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/MIGRATE.md","tags":[],"version":"postgres_v3.x.x","lastUpdatedAt":1743490218000,"frontMatter":{},"sidebar":"left_sidebar","previous":{"title":"\uD83D\uDC4B Welcome","permalink":"/storage/postgres_v3.x.x/"},"next":{"title":"ArangoDB","permalink":"/storage/postgres_v3.x.x/arangodb/"}}'),r=t("85893"),o=t("50065");let i={},a=void 0,c={},d=[{value:"0.1 -&gt; 0.2",id:"01---02",level:3}];function l(e){let n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This document contains instructions for migrating to various storage versions."}),"\n",(0,r.jsx)(n.h3,{id:"01---02",children:"0.1 -> 0.2"}),"\n",(0,r.jsxs)(n.p,{children:["v0.2 fixes ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber/issues/1258",children:"a bug"})," in MYSQL, Postgres and Arangodb in which\ninserting non-UTF8 characters would trigger a panic due to the values being saved in a TEXT column instead of a\nBYTEA/BLOB column. Migration instructions (note you may need to adjust the table names if you have supplied a custom\nconfig to the storage):"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Postgres"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE fiber_storage\nALTER COLUMN v TYPE BYTEA USING v::bytea;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"MYSQL"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE fiber_storage MODIFY COLUMN v BLOB;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arangodb"})}),"\n",(0,r.jsx)(n.p,{children:"No migration other then updating the library is necessary."})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(67294);let r={},o=s.createContext(r);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);