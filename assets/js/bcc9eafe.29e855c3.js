"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["14566"],{12242:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>h,assets:()=>r,toc:()=>t,frontMatter:()=>d});var l=JSON.parse('{"id":"minio/README","title":"MinIO","description":"A simple application for uploading and downloading files from MinIO.","source":"@site/docs/recipes/minio/README.md","sourceDirName":"minio","slug":"/minio/","permalink":"/recipes/minio/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/minio/README.md","tags":[],"version":"current","lastUpdatedAt":1732875044000,"frontMatter":{"title":"MinIO","keywords":["minio","file upload","file download"],"description":"A simple application for uploading and downloading files from MinIO."},"sidebar":"left_sidebar","previous":{"title":"Memgraph","permalink":"/recipes/memgraph/"},"next":{"title":"MongoDB","permalink":"/recipes/mongodb/"}}'),s=i("85893"),o=i("50065");let d={title:"MinIO",keywords:["minio","file upload","file download"],description:"A simple application for uploading and downloading files from MinIO."},a="MinIO File Upload & Download Example",r={},t=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"1. Clone the Repository",id:"1-clone-the-repository",level:3},{value:"2. Install Dependencies",id:"2-install-dependencies",level:3},{value:"Running the Examples",id:"running-the-examples",level:2},{value:"Uploading and Downloading a Single File",id:"uploading-and-downloading-a-single-file",level:3},{value:"Uploading Multiple Files and Downloading Files",id:"uploading-multiple-files-and-downloading-files",level:3},{value:"Code Overview",id:"code-overview",level:2},{value:"<code>single/main.go</code>",id:"singlemaingo",level:3},{value:"<code>multiple/main.go</code>",id:"multiplemaingo",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"minio-file-upload--download-example",children:"MinIO File Upload & Download Example"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/minio",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/minio",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(n.p,{children:"This example demonstrates a simple Go Fiber application that includes modules for uploading both single and multiple files, as well as downloading files from MinIO. Each module provides REST API endpoints for file upload and retrieval, serving as a foundation for applications requiring file storage and access."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go"}),": (version 1.22 or higher) installed"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://min.io/download",children:"minio"}),": MinIO running on your local machine or a remote server"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"single/main.go"}),": Example for uploading and downloading a single file to/from MinIO."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"multiple/main.go"}),": Example for uploading multiple files to MinIO and downloading files from MinIO."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"go.mod"}),": Go module file managing project dependencies."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.h3,{id:"1-clone-the-repository",children:"1. Clone the Repository"}),"\n",(0,s.jsx)(n.p,{children:"Clone the repository and navigate to the example directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/minio\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-install-dependencies",children:"2. Install Dependencies"}),"\n",(0,s.jsx)(n.p,{children:"Use Go\u2019s module system to install dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go mod download\n"})}),"\n",(0,s.jsx)(n.h2,{id:"running-the-examples",children:"Running the Examples"}),"\n",(0,s.jsx)(n.h3,{id:"uploading-and-downloading-a-single-file",children:"Uploading and Downloading a Single File"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.code,{children:"single"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd single\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Upload a file using ",(0,s.jsx)(n.code,{children:"curl"})," or ",(0,s.jsx)(n.code,{children:"Postman"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -F "document=@/path/to/your/file" http://localhost:3000/upload\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Download the file by specifying its name in the request:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -O http://localhost:3000/file/<filename>\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"uploading-multiple-files-and-downloading-files",children:"Uploading Multiple Files and Downloading Files"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.code,{children:"multiple"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd multiple\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Upload multiple files using ",(0,s.jsx)(n.code,{children:"curl"})," or ",(0,s.jsx)(n.code,{children:"Postman"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -F "documents=@/path/to/your/file1" -F "documents=@/path/to/your/file2" http://localhost:3000/upload\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Download a file by specifying its name in the request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -O http://localhost:3000/file/<filename>\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"code-overview",children:"Code Overview"}),"\n",(0,s.jsx)(n.h3,{id:"singlemaingo",children:(0,s.jsx)(n.code,{children:"single/main.go"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Defines routes to handle a single file upload and download."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Includes error handling for file validation, MinIO connection, and bucket management."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"multiplemaingo",children:(0,s.jsx)(n.code,{children:"multiple/main.go"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Handles uploading multiple files in a single request and allows for file downloads."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Validates each file and provides detailed responses for both successful and failed uploads."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"This example offers a approach for managing file uploads and downloads with Go Fiber and MinIO. It can be expanded to support additional features, such as adding metadata, handling large files, or restricting access to files."}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/gofiber/storage",children:"Fiber storage"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://min.io/docs/",children:"MinIO Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return d}});var l=i(67294);let s={},o=l.createContext(s);function d(e){let n=l.useContext(o);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);