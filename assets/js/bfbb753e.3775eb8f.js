"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["41339"],{48488:function(e,n,l){l.r(n),l.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>t,frontMatter:()=>r});var o=JSON.parse('{"id":"cloud-run/README","title":"Cloud Run","description":"Deploying to Google Cloud Run.","source":"@site/docs/recipes/cloud-run/README.md","sourceDirName":"cloud-run","slug":"/cloud-run/","permalink":"/recipes/cloud-run/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/cloud-run/README.md","tags":[],"version":"current","lastUpdatedAt":1736253587000,"frontMatter":{"title":"Cloud Run","keywords":["cloud run","deploy","google","docker","gcp"],"description":"Deploying to Google Cloud Run."},"sidebar":"left_sidebar","previous":{"title":"Clean Code","permalink":"/recipes/clean-code/"},"next":{"title":"Colly Gorm","permalink":"/recipes/colly-gorm/"}}'),i=l("85893"),s=l("50065");let r={title:"Cloud Run",keywords:["cloud run","deploy","google","docker","gcp"],description:"Deploying to Google Cloud Run."},d="Cloud Run Example",c={},t=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Deploy to Google Cloud Run",id:"deploy-to-google-cloud-run",level:2},{value:"Cloud Build Configuration",id:"cloud-build-configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cloud-run-example",children:"Cloud Run Example"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/cloud-run",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,i.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/cloud-run",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,i.jsx)(n.p,{children:"This example demonstrates how to deploy a Go Fiber application to Google Cloud Run."}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This project provides a starting point for deploying a Go Fiber application to Google Cloud Run. It includes necessary configuration files and scripts to build and deploy the application using Docker and Google Cloud Build."}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go"})," 1.18 or higher"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.docker.com/get-started",children:"Docker"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/install",children:"Google Cloud SDK"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/cloud-run\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install the dependencies:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go mod download\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Build the Docker image:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build -t cloud-run-example .\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the Docker container:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -p 3000:3000 cloud-run-example\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The application should now be running on ",(0,i.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"deploy-to-google-cloud-run",children:"Deploy to Google Cloud Run"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set up Google Cloud SDK and authenticate:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gcloud auth login\ngcloud config set project [YOUR_PROJECT_ID]\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Build and push the Docker image using Google Cloud Build:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gcloud builds submit --tag gcr.io/[YOUR_PROJECT_ID]/cloud-run-example\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Deploy the image to Cloud Run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gcloud run deploy cloud-run-example --image gcr.io/[YOUR_PROJECT_ID]/cloud-run-example --platform managed --region [YOUR_REGION] --allow-unauthenticated\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"[YOUR_PROJECT_ID]"})," and ",(0,i.jsx)(n.code,{children:"[YOUR_REGION]"})," with your Google Cloud project ID and desired region."]}),"\n",(0,i.jsx)(n.h2,{id:"cloud-build-configuration",children:"Cloud Build Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"cloudbuild.yaml"})," file defines the steps to build and deploy the application using Google Cloud Build:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"steps:\n  - name: 'gcr.io/kaniko-project/executor:latest'\n    id: 'build-and-push'\n    args:\n      - '--destination=asia.gcr.io/$PROJECT_ID/$_SERVICE_NAME:$SHORT_SHA'\n      - '--destination=asia.gcr.io/$PROJECT_ID/$_SERVICE_NAME:latest'\n      - '--dockerfile=Dockerfile'\n      - '--context=.'\n      - '--cache=true'\n      - '--cache-ttl=120h'\n\n  - id: 'Deploy to Cloud Run'\n    name: 'gcr.io/cloud-builders/gcloud'\n    entrypoint: 'bash'\n    args:\n      - '-c'\n      - |\n        gcloud run deploy $_SERVICE_NAME \\\n        --image=asia.gcr.io/$PROJECT_ID/$_SERVICE_NAME:$SHORT_SHA \\\n        --region=$_REGION --platform managed --allow-unauthenticated \\\n        --port=3000\noptions:\n  substitutionOption: ALLOW_LOOSE\n\nsubstitutions:\n  _SERVICE_NAME: cloud-run-example\n  _REGION: asia-southeast1\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open your browser and navigate to the Cloud Run service URL provided after deployment."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["You should see the message: ",(0,i.jsx)(n.code,{children:"Hello, World!"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"This example provides a basic setup for deploying a Go Fiber application to Google Cloud Run. It can be extended and customized further to fit the needs of more complex applications."}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cloud.google.com/run/docs",children:"Google Cloud Run Documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.docker.com/",children:"Docker Documentation"})}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return r}});var o=l(67294);let i={},s=o.createContext(i);function r(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);