"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["68542"],{36676:function(e,o,n){n.r(o),n.d(o,{metadata:()=>l,contentTitle:()=>r,default:()=>a,assets:()=>c,toc:()=>d,frontMatter:()=>s});var l=JSON.parse('{"id":"gcloud-firebase/README","title":"Google Cloud Firebase","description":"Firebase services on Google Cloud.","source":"@site/docs/recipes/gcloud-firebase/README.md","sourceDirName":"gcloud-firebase","slug":"/gcloud-firebase/","permalink":"/recipes/gcloud-firebase/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/gcloud-firebase/README.md","tags":[],"version":"current","lastUpdatedAt":1733317037000,"frontMatter":{"title":"Google Cloud Firebase","keywords":["firebase","gcloud","cloud run","cloud function","app engine"],"description":"Firebase services on Google Cloud."},"sidebar":"left_sidebar","previous":{"title":"Firebase GCloud","permalink":"/recipes/gcloud/"},"next":{"title":"GeoIP","permalink":"/recipes/geoip/"}}'),i=n("85893"),t=n("50065");let s={title:"Google Cloud Firebase",keywords:["firebase","gcloud","cloud run","cloud function","app engine"],description:"Firebase services on Google Cloud."},r="Deploy Fiber to Google Cloud with Firebase",c={},d=[{value:"Running Locally",id:"running-locally",level:2},{value:"Deploy using Google Cloud Run",id:"deploy-using-google-cloud-run",level:2},{value:"Deploy using Google App Engine",id:"deploy-using-google-app-engine",level:2},{value:"Deploy using Google Cloud Function",id:"deploy-using-google-cloud-function",level:2}];function u(e){let o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"deploy-fiber-to-google-cloud-with-firebase",children:"Deploy Fiber to Google Cloud with Firebase"})}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.a,{href:"https://github.com/gofiber/recipes/tree/master/gcloud-firebase",children:(0,i.jsx)(o.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,i.jsx)(o.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/gcloud-firebase",children:(0,i.jsx)(o.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,i.jsx)(o.p,{children:"Examples on how to run an application using Fiber on Google Cloud and connecting to Firebase Realtime Database."}),"\n",(0,i.jsx)(o.h2,{id:"running-locally",children:"Running Locally"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Run on the command line:"}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"go run cmd/main.go\n"})}),"\n",(0,i.jsx)(o.h2,{id:"deploy-using-google-cloud-run",children:"Deploy using Google Cloud Run"}),"\n",(0,i.jsx)(o.p,{children:"This step will build a Docker Image, publish to Google Cloud Registry and deploy on Cloud Run Managed enviroment."}),"\n",(0,i.jsxs)(o.p,{children:["Just follow the steps and fill the ",(0,i.jsx)(o.code,{children:"GCP_PROJECT"})," variable with your Google Cloud Platform project ID. That variable is needed to connect to Firebase."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://console.cloud.google.com/cloudshell/editor?shellonly=true&cloudshell_image=gcr.io/cloudrun/button&cloudshell_git_repo=https://github.com/gofiber/recipes&cloudshell_working_dir=gcloud-firebase",children:(0,i.jsx)(o.img,{src:"https://storage.googleapis.com/cloudrun/button.svg",alt:"Run on Google Cloud"})})}),"\n",(0,i.jsxs)(o.p,{children:["After deploying the server on Cloud Run, you can get it's url on GCP Console (",(0,i.jsx)(o.a,{href:"https://console.cloud.google.com/run",children:"link"}),") and select the service ",(0,i.jsx)(o.code,{children:"gcloud-fiber-firebase"})," that we just deployed. Then copy the URL. It will look like ",(0,i.jsx)(o.code,{children:"https://{project-id}-{some-random-hash-string}.a.run.app"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"Or you can do it manually with those steps:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Run on the command line:"}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"export GCLOUD_PROJECT=[YOUR_PROJECT_ID]\ngcloud builds submit \u2014 -tag gcr.io/$GCLOUD_PROJECT/gcloud-fiber-firebase .\ngcloud beta run deploy --platform managed --image gcr.io/$GCLOUD_PROJECT/gcloud-fiber-firebase \\\n --set-env-vars GCP_PROJECT=$GCLOUD_PROJECT\n"})}),"\n",(0,i.jsx)(o.h2,{id:"deploy-using-google-app-engine",children:"Deploy using Google App Engine"}),"\n",(0,i.jsxs)(o.p,{children:["This step will deploy the app to Google App Engine Standard Go enviroment. The app configuration and additional configurations can be tweaked on the ",(0,i.jsx)(o.code,{children:"app.yaml"})," file."]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Run on the command line:"}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"gcloud app deploy\n"})}),"\n",(0,i.jsx)(o.h2,{id:"deploy-using-google-cloud-function",children:"Deploy using Google Cloud Function"}),"\n",(0,i.jsxs)(o.p,{children:["This step will deploy a HTTP Cloud Function using Go enviroment. You can use the ",(0,i.jsx)(o.code,{children:"deploy.sh"})," script. Just edit your project id on it."]}),"\n",(0,i.jsxs)(o.p,{children:["For the Cloud Functions env, Google enforces us to deploy a function that is a ",(0,i.jsx)(o.code,{children:"http.HandlerFunc"}),", so on the file ",(0,i.jsx)(o.code,{children:"functions.go"})," there is a workaround to reroute the HTTP call to the Fiber app instance."]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Run on the command line:"}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"gcloud functions deploy HeroesAPI --runtime go111 --trigger-http\n"})})]})}function a(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,o,n){n.d(o,{Z:function(){return r},a:function(){return s}});var l=n(67294);let i={},t=l.createContext(i);function s(e){let o=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(t.Provider,{value:o},e.children)}}}]);