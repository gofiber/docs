"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["62325"],{74303:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>t});var i=JSON.parse('{"id":"k8s/README","title":"Kubernetes","description":"Deploying applications to Kubernetes.","source":"@site/docs/recipes/k8s/README.md","sourceDirName":"k8s","slug":"/k8s/","permalink":"/recipes/k8s/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/k8s/README.md","tags":[],"version":"current","lastUpdatedAt":1735889916000,"frontMatter":{"title":"Kubernetes","keywords":["kubernetes","cloud","deployment","gcloud","aws","azure"],"description":"Deploying applications to Kubernetes."},"sidebar":"left_sidebar","previous":{"title":"JWT","permalink":"/recipes/jwt/"},"next":{"title":"Memgraph","permalink":"/recipes/memgraph/"}}'),r=s("85893"),l=s("50065");let t={title:"Kubernetes",keywords:["kubernetes","cloud","deployment","gcloud","aws","azure"],description:"Deploying applications to Kubernetes."},a="Kubernetes Example",c={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function p(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"kubernetes-example",children:"Kubernetes Example"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/k8s",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,r.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/k8s",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,r.jsx)(n.p,{children:"This project demonstrates how to deploy a Go application using the Fiber framework on a Kubernetes cluster."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Golang"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n",(0,r.jsx)(n.li,{children:"Docker"}),"\n",(0,r.jsx)(n.li,{children:"Kubernetes"}),"\n",(0,r.jsx)(n.li,{children:"kubectl"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"Minikube"})," (for local development)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/k8s\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Build the Docker image:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"docker build -t fiber-k8s-example .\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start Minikube (if using Minikube):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"minikube start\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Deploy the application to Kubernetes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"kubectl apply -f deployment.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check the status of the pods:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"kubectl get pods\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Forward the port to access the application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"kubectl port-forward svc/fiber-k8s-example 3000:3000\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Access the application at ",(0,r.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example ",(0,r.jsx)(n.code,{children:"main.go"})," file for the Fiber application:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Hello, Kubernetes!")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example ",(0,r.jsx)(n.code,{children:"Dockerfile"})," for the application:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Dockerfile",children:'FROM golang:1.20-alpine\n\nWORKDIR /app\n\nCOPY go.mod ./\nCOPY go.sum ./\nRUN go mod download\n\nCOPY *.go ./\n\nRUN go build -o /fiber-k8s-example\n\nEXPOSE 3000\n\nCMD ["/fiber-k8s-example"]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example ",(0,r.jsx)(n.code,{children:"deployment.yaml"})," file for deploying the application to Kubernetes:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: fiber-k8s-example\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: fiber-k8s-example\n  template:\n    metadata:\n      labels:\n        app: fiber-k8s-example\n    spec:\n      containers:\n      - name: fiber-k8s-example\n        image: fiber-k8s-example:latest\n        ports:\n        - containerPort: 3000\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: fiber-k8s-example\nspec:\n  type: NodePort\n  selector:\n    app: fiber-k8s-example\n  ports:\n    - protocol: TCP\n      port: 3000\n      targetPort: 3000\n      nodePort: 30001\n"})}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/",children:"Kubernetes Documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.docker.com/",children:"Docker Documentation"})}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var i=s(67294);let r={},l=i.createContext(r);function t(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);