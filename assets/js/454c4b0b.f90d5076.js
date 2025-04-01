"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["7527"],{61553:function(e,t,i){i.r(t),i.d(t,{default:()=>d,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>l,contentTitle:()=>c});var n=JSON.parse('{"id":"docker-mariadb-clean-arch/README","title":"Docker + MariaDB","description":"Dockerized MariaDB with Clean Architecture.","source":"@site/docs/recipes/docker-mariadb-clean-arch/README.md","sourceDirName":"docker-mariadb-clean-arch","slug":"/docker-mariadb-clean-arch/","permalink":"/recipes/docker-mariadb-clean-arch/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/docker-mariadb-clean-arch/README.md","tags":[],"version":"current","lastUpdatedAt":1743490218000,"frontMatter":{"title":"Docker + MariaDB","keywords":["docker","mariadb","clean architecture","makefile"],"description":"Dockerized MariaDB with Clean Architecture."},"sidebar":"left_sidebar","previous":{"title":"CSRF + Session","permalink":"/recipes/csrf-with-session/"},"next":{"title":"Docker + Nginx","permalink":"/recipes/docker-nginx-loadbalancer/"}}'),r=i("85893"),s=i("50065");let a={title:"Docker + MariaDB",keywords:["docker","mariadb","clean architecture","makefile"],description:"Dockerized MariaDB with Clean Architecture."},c="Docker MariaDB Clean Architecture",o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Application",id:"application",level:2},{value:"Clean Architecture",id:"clean-architecture",level:2},{value:"System Architecture",id:"system-architecture",level:2},{value:"API Endpoints / Features",id:"api-endpoints--features",level:2},{value:"Miscellaneous",id:"miscellaneous",level:3},{value:"Users",id:"users",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Cities",id:"cities",level:3},{value:"Installation",id:"installation",level:2},{value:"FAQ",id:"faq",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Discussion",id:"discussion",level:2},{value:"References",id:"references",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"docker-mariadb-clean-architecture",children:"Docker MariaDB Clean Architecture"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/docker-mariadb-clean-arch",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,r.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/docker-mariadb-clean-arch",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,r.jsx)(t.p,{children:"A slightly complex REST application with Fiber to showcase Clean Architecture with MariaDB as a dependency with Docker."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Docker Compose for running the application."}),"\n",(0,r.jsxs)(t.li,{children:["Shell that supports ",(0,r.jsx)(t.code,{children:"sh"}),", ",(0,r.jsx)(t.code,{children:"make"}),", and ",(0,r.jsx)(t.code,{children:"curl"})," for end-to-end testing. UNIX systems or WSL should work fine."]}),"\n",(0,r.jsx)(t.li,{children:"Postman if you want to test this API with GUI."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"application",children:"Application"}),"\n",(0,r.jsxs)(t.p,{children:["This application is a slightly complex example of a REST API that have four major endpoints. A public user can access the ",(0,r.jsx)(t.code,{children:"User"}),", ",(0,r.jsx)(t.code,{children:"Auth"}),", and ",(0,r.jsx)(t.code,{children:"Misc"})," major endpoints, but they cannot access the ",(0,r.jsx)(t.code,{children:"City"})," endpoint (as it is protected). If one wants to access said endpoint, they have to log in first via the ",(0,r.jsx)(t.code,{children:"Auth"})," endpoint, and only after that they can access the ",(0,r.jsx)(t.code,{children:"City"})," endpoint."]}),"\n",(0,r.jsxs)(t.p,{children:["This application uses MariaDB as a database (dockerized), and JWT as an authentication mechanism. This application also showcases how to perform 1-to-many relational mapping in Clean Architecture (one user can have multiple cities), and also the implementation of ",(0,r.jsx)(t.code,{children:"JOIN"})," SQL clause in Go in general."]}),"\n",(0,r.jsx)(t.h2,{id:"clean-architecture",children:"Clean Architecture"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Clean Architecture",src:i(83564).Z+"",width:"772",height:"567"})}),"\n",(0,r.jsx)(t.p,{children:"Clean Architecture is a concept introduced by Robert C. Martin or also known as Uncle Bob. Simply put, the purpose of this architecture is to perform complete separation of concerns. Systems made this way can be independent of frameworks, testable (easy to write unit tests), independent of UI, independent of database, and independent of any external agency. When you use this architecture, it is simple to change the UI, the database, or the business logic."}),"\n",(0,r.jsx)(t.p,{children:"One thing that you should keep in mind when using this architecture is about Dependency Rule. In Clean Architecture, source code dependency can only point inwards. This means that the 'inner circle' of the system cannot know at all about the outside world. For example, in the diagram above, use-cases knows about entities, but entities cannot know about use-cases. Data formats used in outer circle should not be used by an inner circle."}),"\n",(0,r.jsx)(t.p,{children:"Because of this, when you change something that is located the innermost of the circle (entities for example), usually you have to change the outer circles. However, if you change something that is not the innermost of the circle (controllers for example), you do not need to change the use-cases and the entities (you may have to change the frameworks and drivers as they are dependent on each other)."}),"\n",(0,r.jsx)(t.p,{children:"If you want to learn more about Clean Architecture, please see the articles that I have attached below as references."}),"\n",(0,r.jsx)(t.h2,{id:"system-architecture",children:"System Architecture"}),"\n",(0,r.jsx)(t.p,{children:"For the sake of clearness, here is the diagram that showcases the system architecture of this API."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"System Architecture",src:i(68472).Z+"",width:"631",height:"375"})}),"\n",(0,r.jsxs)(t.p,{children:["Please refer to below table for terminologies / filenames for each layers that are used in this application. The project structure is referred from ",(0,r.jsx)(t.a,{href:"https://github.com/golang-standards/project-layout",children:"this project"}),". In the ",(0,r.jsx)(t.code,{children:"internal"})," package, there are packages that are grouped according to their functional responsibilities. If you open the package, you will see the files that represents the Clean Architecture layers."]}),"\n",(0,r.jsx)(t.p,{children:"For the dependency graph, it is straightforward: handler/middleware depends on service, service depends on repository, and repository depends on domain and the database (via dependency injection). All of the layers are implemented with the said infrastructure (Fiber, MariaDB, and Authentication Service) in above image."}),"\n",(0,r.jsx)(t.p,{children:"I have slightly modified the layers in this application to conform to my own taste of Clean Architecture."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Architecture Layer"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Equivalent Layer"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Filename"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"External Interfaces"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Presenters and Drivers"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"middleware.go"})," and ",(0,r.jsx)(t.code,{children:"handler.go"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Controllers"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Business Logic"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"service.go"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Use Cases"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Repositories"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"repository.go"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Entities"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Entities"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"domain.go"})})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Basically, a request will have to go through ",(0,r.jsx)(t.code,{children:"handler.go"})," (and ",(0,r.jsx)(t.code,{children:"middleware.go"}),") first. After that, the program will call a repository or a use-case that is requested with ",(0,r.jsx)(t.code,{children:"service.go"}),". That controller (",(0,r.jsx)(t.code,{children:"service.go"}),") will call ",(0,r.jsx)(t.code,{children:"repository.go"})," that conforms to the ",(0,r.jsx)(t.code,{children:"domain.go"})," in order to fulfill the request that the ",(0,r.jsx)(t.code,{children:"service.go"})," asked for. The result of the request will be returned back to the user by ",(0,r.jsx)(t.code,{children:"handler.go"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"In short:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"handler.go"})," and ",(0,r.jsx)(t.code,{children:"middleware.go"})," is used to receive and send requests."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"service.go"})," is business-logic or controller (some might have different opinions, but this is my subjective opinion)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"repository.go"})," is used to interact to the database (use-case)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"domain.go"})," is the 'shape' of the data models that the program use."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"For the sake of completeness, here are the functional responsibilities of the project structure."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"internal/auth"})," is used to manage authentication."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"internal/city"})," is used to manage cities. This endpoint ",(0,r.jsx)(t.strong,{children:"is protected"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"internal/infrastructure"})," is used to manage infrastructure of the application, such as MariaDB and Fiber."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"internal/misc"})," is used to manage miscellaneous endpoints."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"internal/user"})," is used to manage users. This endpoint is ",(0,r.jsx)(t.strong,{children:"not protected"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Please refer to the code itself for further details. I commented everything in the code, so I hope it is clear enough!"}),"\n",(0,r.jsx)(t.h2,{id:"api-endpoints--features",children:"API Endpoints / Features"}),"\n",(0,r.jsx)(t.p,{children:"This API is divided into four 'major endpoints', which are miscellaneous, users, authentication, and cities."}),"\n",(0,r.jsx)(t.h3,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,r.jsx)(t.p,{children:"Endpoints classified here are miscellaneous endpoints."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"GET /api/v1"})," for health check."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"users",children:"Users"}),"\n",(0,r.jsx)(t.p,{children:"Endpoints classified here are endpoints to perform operation on 'User' domain."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"GET /api/v1/users"})," to get all users."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"POST /api/v1/users"})," to create a user."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"GET /api/v1/users/<userID>"})," to get a user."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"PUT /api/v1/users/<userID>"})," to update a user."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"DELETE /api/v1/users/<userID>"})," to delete a user."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsx)(t.p,{children:"Endpoints classified here are endpoints to perform authentication. In my opinion, this is framework-layer / implementation detail, so there is no 'domain' regarding this endpoint and you can use this endpoint as an enhancement to other endpoints. Authentication in this API is done using JSON Web Tokens."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"POST /api/v1/auth/login"})," to log in as the user with ID of 1 in the database. Will return JWT and said JWT will be stored in a cookie."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"POST /api/v1/auth/logout"})," to log out. This route removes the JWT from the cookie."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"GET /api/v1/auth/private"})," to access a private route which displays information about the current (valid) JWT."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"cities",children:"Cities"}),"\n",(0,r.jsxs)(t.p,{children:["Endpoints classified here are endpoints to perform operation on ",(0,r.jsx)(t.code,{children:"City"})," domain. ",(0,r.jsx)(t.strong,{children:"Endpoints here are protected via JWT in the cookie"}),", so if you are going to use this endpoint, make sure you are logged in first (or at least have a valid JWT)."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"GET /api/v1/cities"})," to get all cities."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"POST /api/v1/cities"})," to create a new city."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"GET /api/v1/cities/<cityID>"})," to get a city."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"PUT /api/v1/cities/<cityID>"})," to update a city."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"DELETE /api/v1/cities/<cityID>"})," to delete a city."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"In order to run this application, you just need to do the following commands."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Clone the repository."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git clone git@github.com:gofiber/recipes.git\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Switch to this repository."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd recipes/docker-mariadb-clean-arch\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Run immediately with Docker. After you run this command, migration script will be automatically run to populate your dockerized MariaDB."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"make start\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Test with Postman (set the request URL to ",(0,r.jsx)(t.code,{children:"localhost:8080"}),") or with the created end-to-end testing script. Keep in mind that the end-to-end script is only available for the first run. If you are trying to run it the second time, you might not be able to get all of the perfect results (because of the auto-increment in the MariaDB). Please run ",(0,r.jsx)(t.code,{children:"make stop"})," and ",(0,r.jsx)(t.code,{children:"make start"})," first if you want to run the test suite again."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Teardown or stop the container. This will also delete the Docker volume created and will also delete the created image."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"make stop\n"})}),"\n",(0,r.jsx)(t.p,{children:"You're done!"}),"\n",(0,r.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(t.p,{children:"Some frequently asked questions that I found scattered on the Internet. Keep in mind that the answers are mostly subjective."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Q: Is this the right way to do Clean Architecture?"})}),"\n",(0,r.jsx)(t.p,{children:"A: Nope. There are many ways to perform clean architecture - this example being one of them. Some projects might be better than this example."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Q: Why is authentication an implementation detail?"})}),"\n",(0,r.jsx)(t.p,{children:"A: Authentication is an implementation detail because it does not interact with the use-case or the repository / interface layer. Authentication is a bit strange that it can be implemented in any other routes as a middleware. Keep in mind that this is my subjective opinion."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Q: Is this the recommended way to structure Fiber projects?"})}),"\n",(0,r.jsxs)(t.p,{children:["A: Nope. Just like any other Gophers, I recommend you to start your project by using a single ",(0,r.jsx)(t.code,{children:"main.go"})," file. Some projects do not require complicated architectures. After you start seeing the need to branch out, I recommend you to ",(0,r.jsx)(t.a,{href:"https://rakyll.org/style-packages/",children:"split your code based on functional responsibilities"}),". If you need an even more strict structure, then you can try to adapt Clean Architecture or any other architectures that you see fit, such as Onion, Hexagonal, etcetera."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Q: Is this only for Fiber?"})}),"\n",(0,r.jsxs)(t.p,{children:["A: Nope. You can simply adjust ",(0,r.jsx)(t.code,{children:"handler.go"})," and ",(0,r.jsx)(t.code,{children:"middleware.go"})," files in order to change the external interfaces / presenters and drivers layer to something else. You can use ",(0,r.jsx)(t.code,{children:"net/http"}),", ",(0,r.jsx)(t.code,{children:"gin-gonic"}),", ",(0,r.jsx)(t.code,{children:"echo"}),", and many more. If you want to change or add your database, you just need to adjust the ",(0,r.jsx)(t.code,{children:"repository.go"})," file accordingly. If you want to change your business logic, simply change the ",(0,r.jsx)(t.code,{children:"service.go"})," file. As long as you the separation of concerns is done well, you should have no need to change a lot of things."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Q: Is this production-ready?"})}),"\n",(0,r.jsx)(t.p,{children:"A: I try to make this as production-ready as possible \uD83D\uDE09"}),"\n",(0,r.jsx)(t.h2,{id:"improvements",children:"Improvements"}),"\n",(0,r.jsx)(t.p,{children:"Several further improvements that could be implemented in this project:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Add more tests and mocks, especially unit tests (Clean Architecture is the best for performing unit tests)."}),"\n",(0,r.jsx)(t.li,{children:"Add more API endpoints."}),"\n",(0,r.jsx)(t.li,{children:"Add a caching mechanism to the repository layer, such as Redis."}),"\n",(0,r.jsx)(t.li,{children:"Add transaction support."}),"\n",(0,r.jsx)(t.li,{children:"Maybe try to integrate S3 backend to the repository layer (MinIO is a good choice)."}),"\n",(0,r.jsxs)(t.li,{children:["Maybe add a ",(0,r.jsx)(t.code,{children:"domain"})," folder in the ",(0,r.jsx)(t.code,{children:"internal"})," package where we can leave the entities there?"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"discussion",children:"Discussion"}),"\n",(0,r.jsx)(t.p,{children:"Feel free to create an issue in this repository (or maybe ask in Fiber's Discord Server) in order to discuss this together!"}),"\n",(0,r.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,r.jsx)(t.p,{children:"Thanks to articles and their writers that I have read and found inspiration in!"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://medium.com/gdg-vit/clean-architecture-the-right-way-d83b81ecac6",children:"Clean Architecture by Angad Sharma"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",children:"Clean Architecture by Uncle Bob"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://dev.to/eminetto/clean-architecture-using-golang-5791",children:"Clean Architecture with Go by Elton Minetto"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://dev.to/eminetto/clean-architecture-2-years-later-4een",children:"Clean Architecture with Go Part 2 by Elton Minetto"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://hackernoon.com/creating-clean-architecture-using-golang-9h5i3wgr",children:"Creating Clean Architecture using Go by @namkount"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://dev.to/bmf_san/dive-to-clean-architecture-with-golang-cd4",children:"Dive to Clean Architecture with Go by Kenta Takeuchi"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://itnext.io/golang-and-clean-architecture-19ae9aae5683",children:"Go and Clean Architecture by Reshef Sharvit"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://medium.com/@jfeng45/go-microservice-with-clean-architecture-application-design-68f48802c8f",children:"Go Microservices with Clean Architecture by Jin Feng"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/golang-standards/project-layout",children:"Go Project Layout Repository"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://hackernoon.com/golang-clean-archithecture-efd6d7c43047",children:"Trying Clean Architecture on Go by Imam Tumorang"})}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},83564:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/CleanArchitecture-26ac5f08c770e19c35a8ef38b905373f.jpg"},68472:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/SystemArchitecture-aa2eb4d1996527275e532865068f7fa6.png"},50065:function(e,t,i){i.d(t,{Z:function(){return c},a:function(){return a}});var n=i(67294);let r={},s=n.createContext(r);function a(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);