"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["93599"],{30659:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>o});var r=JSON.parse('{"id":"clean-architecture/README","title":"Clean Architecture","description":"Implementing clean architecture in Go.","source":"@site/docs/recipes/clean-architecture/README.md","sourceDirName":"clean-architecture","slug":"/clean-architecture/","permalink":"/recipes/clean-architecture/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/clean-architecture/README.md","tags":[],"version":"current","lastUpdatedAt":1732702215000,"frontMatter":{"title":"Clean Architecture","keywords":["clean","architecture","fiber","mongodb","go"],"description":"Implementing clean architecture in Go."},"sidebar":"left_sidebar","previous":{"title":"Bootstrap","permalink":"/recipes/bootstrap/"},"next":{"title":"Cloud Run","permalink":"/recipes/cloud-run/"}}'),t=i("85893"),s=i("50065");let o={title:"Clean Architecture",keywords:["clean","architecture","fiber","mongodb","go"],description:"Implementing clean architecture in Go."},c="Clean Architecture Example",l={},a=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Setup",id:"setup",level:2},{value:"API Endpoints",id:"api-endpoints",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Clean Architecture Principles",id:"clean-architecture-principles",level:2},{value:"Layers in Clean Architecture",id:"layers-in-clean-architecture",level:3},{value:"Example Breakdown",id:"example-breakdown",level:3},{value:"Code Example",id:"code-example",level:3},{value:"<code>entities/book.go</code>",id:"entitiesbookgo",level:4},{value:"<code>pkg/book/service.go</code>",id:"pkgbookservicego",level:4},{value:"<code>api/handlers/book_handler.go</code>",id:"apihandlersbook_handlergo",level:4},{value:"<code>cmd/main.go</code>",id:"cmdmaingo",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"clean-architecture-example",children:"Clean Architecture Example"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/clean-architecture",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/clean-architecture",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsx)(n.p,{children:"This example demonstrates a Go Fiber application following the principles of Clean Architecture."}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This project provides a starting point for building a web application with a clean architecture. It leverages Fiber for the web framework, MongoDB for the database, and follows the Clean Architecture principles to separate concerns and improve maintainability."}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go"})," 1.18 or higher"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.mongodb.com/try/download/community",children:"MongoDB"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api/"}),": Contains the HTTP handlers, routes, and presenters."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pkg/"}),": Contains the core business logic and entities."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cmd/"}),": Contains the main application entry point."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/clean-architecture\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set the environment variables in a ",(0,t.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-env",children:"DB_URI=mongodb://localhost:27017\nDB_NAME=example_db\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go mod download\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the application:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go run cmd/main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The API should now be running on ",(0,t.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"api-endpoints",children:"API Endpoints"}),"\n",(0,t.jsx)(n.p,{children:"The following endpoints are available in the API:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"GET /books"}),": List all books."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"POST /books"}),": Add a new book."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"PUT /books"}),": Update an existing book."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DELETE /books"}),": Remove a book."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a new book:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:3000/books -d \'{"title":"Book Title", "author":"Author Name"}\' -H "Content-Type: application/json"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"List all books:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:3000/books\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Update a book:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X PUT http://localhost:3000/books -d \'{"id":"<book_id>", "title":"Updated Title", "author":"Updated Author"}\' -H "Content-Type: application/json"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Remove a book:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X DELETE http://localhost:3000/books -d \'{"id":"<book_id>"}\' -H "Content-Type: application/json"\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<book_id>"})," with the actual ID of the book."]}),"\n",(0,t.jsx)(n.h2,{id:"clean-architecture-principles",children:"Clean Architecture Principles"}),"\n",(0,t.jsx)(n.p,{children:"Clean Architecture is a software design philosophy that emphasizes the separation of concerns, making the codebase more maintainable, testable, and scalable. In this example, the Go Fiber application follows Clean Architecture principles by organizing the code into distinct layers, each with its own responsibility."}),"\n",(0,t.jsx)(n.h3,{id:"layers-in-clean-architecture",children:"Layers in Clean Architecture"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Entities (Core Business Logic)"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Located in the ",(0,t.jsx)(n.code,{children:"pkg/entities"})," directory."]}),"\n",(0,t.jsx)(n.li,{children:"Contains the core business logic and domain models, which are independent of any external frameworks or technologies."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Use Cases (Application Logic)"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Located in the ",(0,t.jsx)(n.code,{children:"pkg/book"})," directory."]}),"\n",(0,t.jsx)(n.li,{children:"Contains the application-specific business rules and use cases. This layer orchestrates the flow of data to and from the entities."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Interface Adapters (Adapters and Presenters)"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Located in the ",(0,t.jsx)(n.code,{children:"api"})," directory."]}),"\n",(0,t.jsx)(n.li,{children:"Contains the HTTP handlers, routes, and presenters. This layer is responsible for converting data from the use cases into a format suitable for the web framework (Fiber in this case)."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Frameworks and Drivers (External Interfaces)"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Located in the ",(0,t.jsx)(n.code,{children:"cmd"})," directory."]}),"\n",(0,t.jsx)(n.li,{children:"Contains the main application entry point and any external dependencies like the web server setup."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-breakdown",children:"Example Breakdown"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Entities"}),": The ",(0,t.jsx)(n.code,{children:"entities.Book"})," struct represents the core business model for a book."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Use Cases"}),": The ",(0,t.jsx)(n.code,{children:"book.Service"})," interface defines the methods for interacting with books, such as ",(0,t.jsx)(n.code,{children:"InsertBook"}),", ",(0,t.jsx)(n.code,{children:"UpdateBook"}),", ",(0,t.jsx)(n.code,{children:"RemoveBook"}),", and ",(0,t.jsx)(n.code,{children:"FetchBooks"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Interface Adapters"}),": The ",(0,t.jsx)(n.code,{children:"handlers"})," package contains the HTTP handlers that interact with the ",(0,t.jsx)(n.code,{children:"book.Service"})," to process HTTP requests and responses."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Frameworks and Drivers"}),": The ",(0,t.jsx)(n.code,{children:"cmd/main.go"})," file initializes the Fiber application and sets up the routes using the ",(0,t.jsx)(n.code,{children:"routes.BookRouter"})," function."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"code-example",children:"Code Example"}),"\n",(0,t.jsx)(n.h4,{id:"entitiesbookgo",children:(0,t.jsx)(n.code,{children:"entities/book.go"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package entities\n\nimport "go.mongodb.org/mongo-driver/bson/primitive"\n\ntype Book struct {\n    ID     primitive.ObjectID `json:"id" bson:"_id,omitempty"`\n    Title  string             `json:"title"`\n    Author string             `json:"author"`\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"pkgbookservicego",children:(0,t.jsx)(n.code,{children:"pkg/book/service.go"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package book\n\nimport "clean-architecture/pkg/entities"\n\ntype Service interface {\n    InsertBook(book *entities.Book) (*entities.Book, error)\n    UpdateBook(book *entities.Book) (*entities.Book, error)\n    RemoveBook(id primitive.ObjectID) error\n    FetchBooks() ([]*entities.Book, error)\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"apihandlersbook_handlergo",children:(0,t.jsx)(n.code,{children:"api/handlers/book_handler.go"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package handlers\n\nimport (\n    "clean-architecture/pkg/book"\n    "clean-architecture/pkg/entities"\n    "clean-architecture/api/presenter"\n    "github.com/gofiber/fiber/v2"\n    "net/http"\n    "errors"\n)\n\nfunc AddBook(service book.Service) fiber.Handler {\n    return func(c *fiber.Ctx) error {\n        var requestBody entities.Book\n        err := c.BodyParser(&requestBody)\n        if err != nil {\n            c.Status(http.StatusBadRequest)\n            return c.JSON(presenter.BookErrorResponse(err))\n        }\n        if requestBody.Author == "" || requestBody.Title == "" {\n            c.Status(http.StatusInternalServerError)\n            return c.JSON(presenter.BookErrorResponse(errors.New("Please specify title and author")))\n        }\n        result, err := service.InsertBook(&requestBody)\n        if err != nil {\n            c.Status(http.StatusInternalServerError)\n            return c.JSON(presenter.BookErrorResponse(err))\n        }\n        return c.JSON(presenter.BookSuccessResponse(result))\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"cmdmaingo",children:(0,t.jsx)(n.code,{children:"cmd/main.go"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "clean-architecture/api/routes"\n    "clean-architecture/pkg/book"\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n    bookService := book.NewService() // Assume NewService is a constructor for the book service\n    routes.BookRouter(app, bookService)\n    app.Listen(":3000")\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"By following Clean Architecture principles, this example ensures that each layer is independent and can be modified or replaced without affecting the other layers, leading to a more maintainable and scalable application."}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"This example provides a basic setup for a Go Fiber application following Clean Architecture principles. It can be extended and customized further to fit the needs of more complex applications."}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/",children:"MongoDB Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html",children:"Clean Architecture"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return o}});var r=i(67294);let t={},s=r.createContext(t);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);