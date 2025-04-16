"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["65013"],{81001:function(e,l,i){i.r(l),i.d(l,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>t,toc:()=>d,contentTitle:()=>r});var n=JSON.parse('{"id":"upload-file/README","title":"File Upload","description":"Handling file uploads in a Go application.","source":"@site/docs/recipes/upload-file/README.md","sourceDirName":"upload-file","slug":"/upload-file/","permalink":"/docs/recipes/upload-file/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/upload-file/README.md","tags":[],"version":"current","lastUpdatedAt":1744830196000,"frontMatter":{"title":"File Upload","keywords":["file upload","upload","form","multipart"],"description":"Handling file uploads in a Go application."},"sidebar":"left_sidebar","previous":{"title":"Unit Testing","permalink":"/docs/recipes/unit-test/"},"next":{"title":"URL Shortener","permalink":"/docs/recipes/url-shortener-api/"}}'),s=i("85893"),a=i("50065");let o={title:"File Upload",keywords:["file upload","upload","form","multipart"],description:"Handling file uploads in a Go application."},r="File Upload Example",t={},d=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Examples",id:"running-the-examples",level:2},{value:"Single File Upload",id:"single-file-upload",level:3},{value:"Single File Upload with Relative Path",id:"single-file-upload-with-relative-path",level:3},{value:"Multiple File Upload",id:"multiple-file-upload",level:3},{value:"Code Overview",id:"code-overview",level:2},{value:"<code>single/main.go</code>",id:"singlemaingo",level:3},{value:"<code>single_relative_path/main.go</code>",id:"single_relative_pathmaingo",level:3},{value:"<code>multiple/main.go</code>",id:"multiplemaingo",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function c(e){let l={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.header,{children:(0,s.jsx)(l.h1,{id:"file-upload-example",children:"File Upload Example"})}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.a,{href:"https://github.com/gofiber/recipes/tree/master/upload-file",children:(0,s.jsx)(l.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(l.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/upload-file",children:(0,s.jsx)(l.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(l.p,{children:"This example demonstrates how to handle file uploads using Go Fiber."}),"\n",(0,s.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(l.p,{children:"This project provides a basic setup for handling file uploads in a Go Fiber application. It includes examples for uploading single and multiple files, as well as saving files to different directories."}),"\n",(0,s.jsx)(l.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"https://golang.org/dl/",children:"Go"})," 1.18 or higher"]}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.code,{children:"single/main.go"}),": Example for uploading a single file to the root directory."]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.code,{children:"single_relative_path/main.go"}),": Example for uploading a single file to a relative path."]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.code,{children:"multiple/main.go"}),": Example for uploading multiple files."]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.code,{children:"go.mod"}),": The Go module file."]}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(l.ol,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"Clone the repository:"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-bash",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/upload-file\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"Install the dependencies:"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-bash",children:"go mod download\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"running-the-examples",children:"Running the Examples"}),"\n",(0,s.jsx)(l.h3,{id:"single-file-upload",children:"Single File Upload"}),"\n",(0,s.jsxs)(l.ol,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:["Navigate to the ",(0,s.jsx)(l.code,{children:"single"})," directory:"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-bash",children:"cd single\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"Run the application:"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:["Use a tool like ",(0,s.jsx)(l.code,{children:"curl"})," or Postman to upload a file:"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-bash",children:'curl -F "document=@/path/to/your/file" http://localhost:3000/\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"single-file-upload-with-relative-path",children:"Single File Upload with Relative Path"}),"\n",(0,s.jsxs)(l.ol,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:["Navigate to the ",(0,s.jsx)(l.code,{children:"single_relative_path"})," directory:"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-bash",children:"cd single_relative_path\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"Run the application:"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:["Use a tool like ",(0,s.jsx)(l.code,{children:"curl"})," or Postman to upload a file:"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-bash",children:'curl -F "document=@/path/to/your/file" http://localhost:3000/\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"multiple-file-upload",children:"Multiple File Upload"}),"\n",(0,s.jsxs)(l.ol,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:["Navigate to the ",(0,s.jsx)(l.code,{children:"multiple"})," directory:"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-bash",children:"cd multiple\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"Run the application:"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:["Use a tool like ",(0,s.jsx)(l.code,{children:"curl"})," or Postman to upload multiple files:"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-bash",children:'curl -F "documents=@/path/to/your/file1" -F "documents=@/path/to/your/file2" http://localhost:3000/\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"code-overview",children:"Code Overview"}),"\n",(0,s.jsx)(l.h3,{id:"singlemaingo",children:(0,s.jsx)(l.code,{children:"single/main.go"})}),"\n",(0,s.jsx)(l.p,{children:"Handles uploading a single file to the root directory."}),"\n",(0,s.jsx)(l.h3,{id:"single_relative_pathmaingo",children:(0,s.jsx)(l.code,{children:"single_relative_path/main.go"})}),"\n",(0,s.jsx)(l.p,{children:"Handles uploading a single file to a relative path."}),"\n",(0,s.jsx)(l.h3,{id:"multiplemaingo",children:(0,s.jsx)(l.code,{children:"multiple/main.go"})}),"\n",(0,s.jsx)(l.p,{children:"Handles uploading multiple files."}),"\n",(0,s.jsx)(l.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(l.p,{children:"This example provides a basic setup for handling file uploads in a Go Fiber application. It can be extended and customized further to fit the needs of more complex applications."}),"\n",(0,s.jsx)(l.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:l}={...(0,a.a)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,l,i){i.d(l,{Z:function(){return r},a:function(){return o}});var n=i(67294);let s={},a=n.createContext(s);function o(e){let l=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:l},e.children)}}}]);