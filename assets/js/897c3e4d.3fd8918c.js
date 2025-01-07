"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["45204"],{31639:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"unit-test/README","title":"Unit Testing","description":"Writing unit tests for a Go Fiber application.","source":"@site/docs/recipes/unit-test/README.md","sourceDirName":"unit-test","slug":"/unit-test/","permalink":"/recipes/unit-test/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/unit-test/README.md","tags":[],"version":"current","lastUpdatedAt":1736253587000,"frontMatter":{"title":"Unit Testing","keywords":["unit testing","testing","stretchr/testify"],"description":"Writing unit tests for a Go Fiber application."},"sidebar":"left_sidebar","previous":{"title":"Todo App + Auth + GORM","permalink":"/recipes/todo-app-with-auth-gorm/"},"next":{"title":"File Upload","permalink":"/recipes/upload-file/"}}'),i=n("85893"),r=n("50065");let o={title:"Unit Testing",keywords:["unit testing","testing","stretchr/testify"],description:"Writing unit tests for a Go Fiber application."},l="Unit Testing Example",a={},c=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Tests",id:"running-the-tests",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"<code>main.go</code>",id:"maingo",level:3},{value:"<code>main_test.go</code>",id:"main_testgo",level:3},{value:"Unit Testing in General",id:"unit-testing-in-general",level:2},{value:"Benefits of Unit Testing",id:"benefits-of-unit-testing",level:3},{value:"Unit Testing in Fiber",id:"unit-testing-in-fiber",level:2},{value:"Writing Unit Tests in Fiber",id:"writing-unit-tests-in-fiber",level:3},{value:"The <code>app.Test</code> Method",id:"the-apptest-method",level:3},{value:"Usage of the <code>app.Test</code> Method",id:"usage-of-the-apptest-method",level:4},{value:"Example",id:"example",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"unit-testing-example",children:"Unit Testing Example"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/unit-test",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,i.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/unit-test",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,i.jsxs)(t.p,{children:["This example demonstrates how to write unit tests for a Go Fiber application using the ",(0,i.jsx)(t.code,{children:"stretchr/testify"})," package."]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["This project provides a basic setup for unit testing in a Go Fiber application. It includes examples of how to structure tests, write test cases, and use the ",(0,i.jsx)(t.code,{children:"stretchr/testify"})," package for assertions."]}),"\n",(0,i.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://golang.org/dl/",children:"Go"})," 1.18 or higher"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"main.go"}),": The main application entry point."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"main_test.go"}),": The test file containing unit tests."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"go.mod"}),": The Go module file."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Clone the repository:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/unit-test\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Install the dependencies:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"go mod download\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"running-the-tests",children:"Running the Tests"}),"\n",(0,i.jsx)(t.p,{children:"To run the tests, use the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"go test ./...\n"})}),"\n",(0,i.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"main.go"})," file sets up a simple Fiber application with a single route. The ",(0,i.jsx)(t.code,{children:"main_test.go"})," file contains unit tests for this application."]}),"\n",(0,i.jsx)(t.h3,{id:"maingo",children:(0,i.jsx)(t.code,{children:"main.go"})}),"\n",(0,i.jsx)(t.p,{children:'This file sets up a basic Fiber application with a single route that returns "OK".'}),"\n",(0,i.jsx)(t.h3,{id:"main_testgo",children:(0,i.jsx)(t.code,{children:"main_test.go"})}),"\n",(0,i.jsxs)(t.p,{children:["This file contains unit tests for the Fiber application. It uses the ",(0,i.jsx)(t.code,{children:"stretchr/testify"})," package for assertions."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n "io"\n "net/http"\n "testing"\n\n "github.com/stretchr/testify/assert"\n)\n\nfunc TestIndexRoute(t *testing.T) {\n tests := []struct {\n  description string\n  route string\n  expectedError bool\n  expectedCode int\n  expectedBody string\n }{\n  {\n   description: "index route",\n   route: "/",\n   expectedError: false,\n   expectedCode: 200,\n   expectedBody: "OK",\n  },\n  {\n   description: "non existing route",\n   route: "/i-dont-exist",\n   expectedError: false,\n   expectedCode: 404,\n   expectedBody: "Cannot GET /i-dont-exist",\n  },\n }\n\n app := Setup()\n\n for _, test := range tests {\n  req, _ := http.NewRequest("GET", test.route, nil)\n  res, err := app.Test(req, -1)\n  assert.Equalf(t, test.expectedError, err != nil, test.description)\n  if test.expectedError {\n   continue\n  }\n  assert.Equalf(t, test.expectedCode, res.StatusCode, test.description)\n  body, err := io.ReadAll(res.Body)\n  assert.Nilf(t, err, test.description)\n  assert.Equalf(t, test.expectedBody, string(body), test.description)\n }\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"unit-testing-in-general",children:"Unit Testing in General"}),"\n",(0,i.jsx)(t.p,{children:"Unit testing is a software testing method where individual units or components of a software are tested in isolation from the rest of the application. The purpose of unit testing is to validate that each unit of the software performs as expected. Unit tests are typically automated and written by developers as part of the development process."}),"\n",(0,i.jsx)(t.h3,{id:"benefits-of-unit-testing",children:"Benefits of Unit Testing"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Early Bug Detection"}),": Unit tests help in identifying bugs early in the development cycle."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Documentation"}),": Unit tests can serve as documentation for the code."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Refactoring Support"}),": Unit tests provide a safety net when refactoring code."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Design"}),": Writing unit tests can lead to better software design."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"unit-testing-in-fiber",children:"Unit Testing in Fiber"}),"\n",(0,i.jsxs)(t.p,{children:["Fiber is an Express-inspired web framework written in Go. Unit testing in Fiber involves testing the individual routes and handlers to ensure they behave as expected. The ",(0,i.jsx)(t.code,{children:"stretchr/testify"})," package is commonly used for writing assertions in Go tests."]}),"\n",(0,i.jsx)(t.h3,{id:"writing-unit-tests-in-fiber",children:"Writing Unit Tests in Fiber"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Setup the Application"}),": Create a function to setup the Fiber application. This function can be reused in the tests."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Define Test Cases"}),": Create a structure to define the input and expected output for each test case."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Perform Requests"}),": Use the ",(0,i.jsx)(t.code,{children:"app.Test"})," method to perform HTTP requests and capture the response."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Assertions"}),": Use the ",(0,i.jsx)(t.code,{children:"stretchr/testify"})," package to write assertions and verify the response."]}),"\n"]}),"\n",(0,i.jsxs)(t.h3,{id:"the-apptest-method",children:["The ",(0,i.jsx)(t.code,{children:"app.Test"})," Method"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"app.Test"})," method in Fiber is used to simulate HTTP requests to the Fiber application and test the responses. This is particularly useful for unit tests as it allows testing the routes and handlers of the application without starting a real server."]}),"\n",(0,i.jsxs)(t.h4,{id:"usage-of-the-apptest-method",children:["Usage of the ",(0,i.jsx)(t.code,{children:"app.Test"})," Method"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"app.Test"})," method takes two parameters:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"req"}),": An ",(0,i.jsx)(t.code,{children:"*http.Request"})," object representing the HTTP request to be tested."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"timeout"}),": An ",(0,i.jsx)(t.code,{children:"int"})," value specifying the maximum time in milliseconds that the request can take. A value of ",(0,i.jsx)(t.code,{children:"-1"})," disables the timeout."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The method returns an ",(0,i.jsx)(t.code,{children:"*http.Response"})," and an ",(0,i.jsx)(t.code,{children:"error"}),". The ",(0,i.jsx)(t.code,{children:"*http.Response"})," contains the application's response to the simulated request, and the ",(0,i.jsx)(t.code,{children:"error"})," indicates if any error occurred during the request processing."]}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Here is an example of how the ",(0,i.jsx)(t.code,{children:"app.Test"})," method is used in a unit test:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "io"\n    "net/http"\n    "testing"\n\n    "github.com/stretchr/testify/assert"\n)\n\nfunc TestIndexRoute(t *testing.T) {\n    // Setup the app as it is done in the main function\n    app := Setup()\n\n    // Create a new HTTP request\n    req, _ := http.NewRequest("GET", "/", nil)\n\n    // Perform the request using app.Test\n    res, err := app.Test(req, -1)\n\n    // Verify that no error occurred\n    assert.Nil(t, err)\n\n    // Verify the status code\n    assert.Equal(t, 200, res.StatusCode)\n\n    // Read the response body\n    body, _ := io.ReadAll(res.Body)\n\n    // Verify the response body\n    assert.Equal(t, "OK", string(body))\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In this example, a GET request is sent to the root route (",(0,i.jsx)(t.code,{children:'"/"'}),") of the application. The response is verified to ensure that the status code is ",(0,i.jsx)(t.code,{children:"200"})," and the response text is ",(0,i.jsx)(t.code,{children:'"OK"'}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"This example provides a basic setup for unit testing in a Go Fiber application. It can be extended and customized further to fit the needs of more complex applications."}),"\n",(0,i.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/stretchr/testify",children:"Testify Documentation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://golang.org/pkg/testing/",children:"Go Testing"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var s=n(67294);let i={},r=s.createContext(i);function o(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);