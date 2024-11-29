"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["21868"],{40940:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>r,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"aws-eb/README","title":"AWS Elastic Beanstalk","description":"Deploying to AWS Elastic Beanstalk.","source":"@site/docs/recipes/aws-eb/README.md","sourceDirName":"aws-eb","slug":"/aws-eb/","permalink":"/recipes/aws-eb/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/aws-eb/README.md","tags":[],"version":"current","lastUpdatedAt":1732893234000,"frontMatter":{"title":"AWS Elastic Beanstalk","keywords":["aws","elastic beanstalk","deploy","amazon","aws-eb"],"description":"Deploying to AWS Elastic Beanstalk."},"sidebar":"left_sidebar","previous":{"title":"Autocert","permalink":"/recipes/autocert/"},"next":{"title":"AWS SAM","permalink":"/recipes/aws-sam/"}}'),l=i("85893"),t=i("50065");let a={title:"AWS Elastic Beanstalk",keywords:["aws","elastic beanstalk","deploy","amazon","aws-eb"],description:"Deploying to AWS Elastic Beanstalk."},c="AWS Elastic Beanstalk Example",r={},o=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Build Process",id:"build-process",level:2},{value:"Application Code",id:"application-code",level:2},{value:".gitignore",id:"gitignore",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"aws-elastic-beanstalk-example",children:"AWS Elastic Beanstalk Example"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/aws-eb",children:(0,l.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,l.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/aws-eb",children:(0,l.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,l.jsx)(n.p,{children:"This example demonstrates how to deploy a Go Fiber application to AWS Elastic Beanstalk."}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This project provides a starting point for deploying a Go Fiber application to AWS Elastic Beanstalk. It includes necessary configuration files and scripts to build and deploy the application."}),"\n",(0,l.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://aws.amazon.com/cli/",children:"AWS CLI"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html",children:"Elastic Beanstalk CLI"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go"})," 1.18 or higher"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/aws-eb\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Initialize Elastic Beanstalk:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"eb init\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create an Elastic Beanstalk environment:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"eb create\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Deploy the application:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"eb deploy\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"build-process",children:"Build Process"}),"\n",(0,l.jsxs)(n.p,{children:["The build process is defined in the ",(0,l.jsx)(n.code,{children:"Buildfile"})," and ",(0,l.jsx)(n.code,{children:"build.sh"})," scripts."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Buildfile"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ruby",children:"make: ./build.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"build.sh"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash -xe\n# Get dependencies\ngo get -u github.com/gofiber/fiber/v2\n\n# Build the binary\ngo build -o application application.go\n\n# Modify permissions to make the binary executable.\nchmod +x application\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"application-code",children:"Application Code"}),"\n",(0,l.jsxs)(n.p,{children:["The main application code is in ",(0,l.jsx)(n.code,{children:"application.go"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "os"\n\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    // Initialize the application\n    app := fiber.New()\n\n    // Hello, World!\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    })\n\n    // Listen and Serve on 0.0.0.0:$PORT\n    port := os.Getenv("PORT")\n    if port == "" {\n        port = "5000"\n    }\n\n    log.Fatal(app.Listen(":" + port))\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"gitignore",children:".gitignore"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:".gitignore"})," file includes configurations to ignore Elastic Beanstalk specific files:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plaintext",children:"# Elastic Beanstalk Files\n.elasticbeanstalk/*\n!.elasticbeanstalk/*.cfg.yml\n!.elasticbeanstalk/*.global.yml\n"})}),"\n",(0,l.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,l.jsx)(n.p,{children:"This example provides a basic setup for deploying a Go Fiber application to AWS Elastic Beanstalk. It can be extended and customized further to fit the needs of more complex applications."}),"\n",(0,l.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html",children:"AWS Elastic Beanstalk Documentation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return a}});var s=i(67294);let l={},t=s.createContext(l);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);