"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["93108"],{25279:function(e,s,i){i.r(s),i.d(s,{metadata:()=>n,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>r});var n=JSON.parse('{"id":"sessions-sqlite3/README","title":"Sessions + SQLite3","description":"Using SQLite3 as a storage engine for user sessions.","source":"@site/docs/recipes/sessions-sqlite3/README.md","sourceDirName":"sessions-sqlite3","slug":"/sessions-sqlite3/","permalink":"/recipes/sessions-sqlite3/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/sessions-sqlite3/README.md","tags":[],"version":"current","lastUpdatedAt":1732875044000,"frontMatter":{"title":"Sessions + SQLite3","keywords":["sessions","sqlite3","storage"],"description":"Using SQLite3 as a storage engine for user sessions."},"sidebar":"left_sidebar","previous":{"title":"Server Timing","permalink":"/recipes/server-timing/"},"next":{"title":"Socketio","permalink":"/recipes/socketio/"}}'),t=i("85893"),l=i("50065");let r={title:"Sessions + SQLite3",keywords:["sessions","sqlite3","storage"],description:"Using SQLite3 as a storage engine for user sessions."},o="Sessions - SQLite3",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Explanation",id:"explanation",level:2}];function d(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"sessions---sqlite3",children:"Sessions - SQLite3"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/gofiber/recipes/tree/master/sessions-sqlite3",children:(0,t.jsx)(s.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(s.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/sessions-sqlite3",children:(0,t.jsx)(s.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsx)(s.p,{children:'This example uses the SQLite3 storage package to persist user sessions. While the storage package can automatically create the sessions table at initialization, we create it manually to add an additional "u" column. This custom column serves several purposes:'}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Enables efficient querying of sessions by user identifier"}),"\n",(0,t.jsx)(s.li,{children:"Allows tracking of multiple sessions per user"}),"\n",(0,t.jsx)(s.li,{children:"Facilitates session cleanup for specific users"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:'The default table schema only stores session data and expiry, making it difficult to associate sessions with specific users. The "u" column solves this limitation.'}),"\n",(0,t.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Go 1.16 or higher"}),"\n",(0,t.jsx)(s.li,{children:"Go modules"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Clone the repository:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/sessions-sqlite3\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Install dependencies:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"go mod tidy\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Create the sessions table in SQLite3:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE sessions (\n    key TEXT PRIMARY KEY,\n    data BLOB,\n    expiry INTEGER,\n    u TEXT\n);\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Run the application:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The server will start on ",(0,t.jsx)(s.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"explanation",children:"Explanation"}),"\n",(0,t.jsx)(s.p,{children:'This example uses the SQLite3 storage package to persist user sessions. The storage package can create the sessions table for you at initialization, but for the purpose of this example, the table is created manually with an additional "u" column to better query all user-related sessions.'})]})}function h(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,s,i){i.d(s,{Z:function(){return o},a:function(){return r}});var n=i(67294);let t={},l=n.createContext(t);function r(e){let s=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);