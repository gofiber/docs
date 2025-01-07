"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["18990"],{71111:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"auth-docker-postgres-jwt/README","title":"Auth + Docker + Postgres + JWT","description":"Authentication with Docker, Postgres, and JWT.","source":"@site/docs/recipes/auth-docker-postgres-jwt/README.md","sourceDirName":"auth-docker-postgres-jwt","slug":"/auth-docker-postgres-jwt/","permalink":"/recipes/auth-docker-postgres-jwt/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/auth-docker-postgres-jwt/README.md","tags":[],"version":"current","lastUpdatedAt":1736253587000,"frontMatter":{"title":"Auth + Docker + Postgres + JWT","keywords":["auth","docker","postgres","jwt"],"description":"Authentication with Docker, Postgres, and JWT."},"sidebar":"left_sidebar","previous":{"title":"Air Live Reloading","permalink":"/recipes/air/"},"next":{"title":"Auth + JWT","permalink":"/recipes/auth-jwt/"}}'),r=n("85893"),i=n("50065");let a={title:"Auth + Docker + Postgres + JWT",keywords:["auth","docker","postgres","jwt"],description:"Authentication with Docker, Postgres, and JWT."},o="Auth Docker Postgres JWT Example",l={},c=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Database Management",id:"database-management",level:2},{value:"API Endpoints",id:"api-endpoints",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function d(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"auth-docker-postgres-jwt-example",children:"Auth Docker Postgres JWT Example"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://github.com/gofiber/recipes/tree/master/auth-docker-postgres-jwt",children:(0,r.jsx)(s.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,r.jsx)(s.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/auth-docker-postgres-jwt",children:(0,r.jsx)(s.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,r.jsx)(s.p,{children:"This example demonstrates a boilerplate setup for a Go Fiber application that uses Docker, PostgreSQL, and JWT for authentication."}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"This project provides a starting point for building a web application with user authentication using JWT. It leverages Docker for containerization and PostgreSQL as the database."}),"\n",(0,r.jsx)(s.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.docker.com/get-started",children:"Docker"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://golang.org/dl/",children:"Go"})," 1.18 or higher"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Clone the repository:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/auth-docker-postgres-jwt\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Set the environment variables in a ",(0,r.jsx)(s.code,{children:".env"})," file:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-env",children:"DB_PORT=5432\nDB_USER=example_user\nDB_PASSWORD=example_password\nDB_NAME=example_db\nSECRET=example_secret\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Build and start the Docker containers:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"docker-compose build\ndocker-compose up\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The API and the database should now be running."}),"\n",(0,r.jsx)(s.h2,{id:"database-management",children:"Database Management"}),"\n",(0,r.jsxs)(s.p,{children:["You can manage the database via ",(0,r.jsx)(s.code,{children:"psql"})," with the following command:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"docker-compose exec db psql -U <DB_USER>\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Replace ",(0,r.jsx)(s.code,{children:"<DB_USER>"})," with the value from your ",(0,r.jsx)(s.code,{children:".env"})," file."]}),"\n",(0,r.jsx)(s.h2,{id:"api-endpoints",children:"API Endpoints"}),"\n",(0,r.jsx)(s.p,{children:"The following endpoints are available in the API:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"POST /api/auth/register"}),": Register a new user."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"POST /api/auth/login"}),": Authenticate a user and return a JWT."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.strong,{children:["GET /api/user/",":id"]}),": Get a user (requires a valid JWT)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.strong,{children:["PATCH /api/user/",":id"]}),": Update a user (requires a valid JWT)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.strong,{children:["DELETE /api/user/",":id"]}),": Delete a user (requires a valid JWT)."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Register a new user:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -X POST http://localhost:3000/api/auth/register -d \'{"username":"testuser", "password":"testpassword"}\' -H "Content-Type: application/json"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Login to get a JWT:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -X POST http://localhost:3000/api/auth/login -d \'{"username":"testuser", "password":"testpassword"}\' -H "Content-Type: application/json"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Access a protected route:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -H "Authorization: Bearer <JWT>" http://localhost:3000/api/user/1\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Replace ",(0,r.jsx)(s.code,{children:"<JWT>"})," with the token received from the login endpoint."]}),"\n",(0,r.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(s.p,{children:"This example provides a basic setup for a Go Fiber application with Docker, PostgreSQL, and JWT authentication. It can be extended and customized further to fit the needs of more complex applications."}),"\n",(0,r.jsx)(s.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.docker.com",children:"Docker Documentation"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.postgresql.org/docs/",children:"PostgreSQL Documentation"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://jwt.io/introduction/",children:"JWT Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return a}});var t=n(67294);let r={},i=t.createContext(r);function a(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);