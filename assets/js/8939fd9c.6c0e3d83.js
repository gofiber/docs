"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["26531"],{610:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"firebase-functions/README","title":"Firebase Functions","description":"Using Firebase Functions.","source":"@site/docs/recipes/firebase-functions/README.md","sourceDirName":"firebase-functions","slug":"/firebase-functions/","permalink":"/recipes/firebase-functions/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/firebase-functions/README.md","tags":[],"version":"current","lastUpdatedAt":1732892746000,"frontMatter":{"title":"Firebase Functions","keywords":["firebase","functions","deployment","gcloud","cloud"],"description":"Using Firebase Functions."},"sidebar":"left_sidebar","previous":{"title":"Firebase Authentication","permalink":"/recipes/firebase-auth/"},"next":{"title":"Firebase GCloud","permalink":"/recipes/gcloud/"}}'),t=r("85893"),o=r("50065");let s={title:"Firebase Functions",keywords:["firebase","functions","deployment","gcloud","cloud"],description:"Using Firebase Functions."},a="Deploying GoFiber Application to Firebase Functions",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a GoFiber App",id:"create-a-gofiber-app",level:2},{value:"Server Configuration",id:"server-configuration",level:2},{value:"Routes Configuration",id:"routes-configuration",level:2},{value:"Database Configuration",id:"database-configuration",level:2},{value:"Repository Pattern",id:"repository-pattern",level:2},{value:"Model Definition",id:"model-definition",level:2},{value:"Functions for Cloud Integration",id:"functions-for-cloud-integration",level:2},{value:"Main Application Entry",id:"main-application-entry",level:2},{value:"Development",id:"development",level:2},{value:"cmd/main.go",id:"cmdmaingo",level:2},{value:".air.toml",id:"airtoml",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Medium Post",id:"medium-post",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deploying-gofiber-application-to-firebase-functions",children:"Deploying GoFiber Application to Firebase Functions"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/firebase-functions",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/firebase-functions",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsx)(n.p,{children:"Welcome to this step-by-step guide on deploying a GoFiber application to Firebase Functions. If you\u2019re looking to leverage the power of GoFiber, a fast and lightweight web framework for Go, and host your application on Firebase, you\u2019re in the right place. In this tutorial, we\u2019ll walk through the process of setting up your GoFiber app to run seamlessly on Firebase Functions."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Go installed on your machine."}),"\n",(0,t.jsx)(n.li,{children:"Firebase CLI installed."}),"\n",(0,t.jsx)(n.li,{children:"A Firebase project created."}),"\n",(0,t.jsx)(n.li,{children:"Firestore and Cloud Functions enabled."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-gofiber-app",children:"Create a GoFiber App"}),"\n",(0,t.jsx)(n.p,{children:"Start by initializing your GoFiber application. Use the following commands in your terminal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go mod init example.com/GofiberFirebaseBoilerplate\n"})}),"\n",(0,t.jsx)(n.h2,{id:"server-configuration",children:"Server Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Create a server file ",(0,t.jsx)(n.code,{children:"(src/server.go)"})," with a ",(0,t.jsx)(n.code,{children:"CreateServer"})," function that sets up your GoFiber server."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package src\n\nimport (\n "example.com/GofiberFirebaseBoilerplate/src/routes"\n\n "github.com/gofiber/fiber/v2"\n)\n\nfunc CreateServer() *fiber.App {\n version := "v1.0.0"\n\n app := fiber.New(fiber.Config{\n  ServerHeader: "Gofiber Firebase Boilerplate",\n  AppName:      "Gofiber Firebase Boilerplate " + version,\n })\n\n app.Get("/", func(c *fiber.Ctx) error {\n  return c.SendString("Gofiber Firebase Boilerplate " + version)\n })\n\n routes.New().Setup(app)\n\n return app\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"routes-configuration",children:"Routes Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Now that your GoFiber application is initialized, let\u2019s delve into setting up and configuring routes. This section is crucial for defining how your application handles incoming requests. Open the ",(0,t.jsx)(n.code,{children:"src/routes/routes.go"})," file to manage your routes."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package routes\n\nimport (\n "example.com/GofiberFirebaseBoilerplate/src/database"\n "example.com/GofiberFirebaseBoilerplate/src/repositories"\n\n "github.com/gofiber/fiber/v2"\n)\n\ntype Routes struct {\n mainRepository *repositories.MainRepository\n}\n\nfunc New() *Routes {\n db := database.NewConnection()\n return &Routes{mainRepository: &repositories.MainRepository{DB: db}}\n}\n\nfunc (r *Routes) Setup(app *fiber.App) {\n app.Post("message", r.insertMessage)\n}\n\nfunc (r *Routes) insertMessage(c *fiber.Ctx) error {\n return c.SendString("ok")\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"database-configuration",children:"Database Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Configure your Firestore database connection in the ",(0,t.jsx)(n.code,{children:"src/database/database.go"})," file. Make sure to replace the placeholder credentials with your Firebase project's actual credentials."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package database\n\nimport (\n "context"\n "encoding/json"\n "log"\n\n "cloud.google.com/go/firestore"\n firebase "firebase.google.com/go"\n\n "google.golang.org/api/option"\n)\n\ntype Config struct {\n Host     string\n Port     string\n Password string\n User     string\n DBName   string\n SSLMode  string\n}\n\nfunc NewConnection() *firestore.Client {\n\n ctx := context.Background()\n\n sa := option.WithCredentialsJSON(credentials())\n app, err := firebase.NewApp(ctx, nil, sa)\n if err != nil {\n  log.Fatalf("functions.init: NewApp %v\\n", err)\n }\n\n db, err := app.Firestore(ctx)\n if err != nil {\n  log.Fatalf("functions.init: Database init : %v\\n", err)\n }\n\n return db\n}\n\nfunc credentials() []byte {\n // TODO: Replace with your Credentials\n data := map[string]interface{}{\n  "type":                        "",\n  "project_id":                  "",\n  "private_key_id":              "",\n  "private_key":                 "",\n  "client_email":                "",\n  "client_id":                   "",\n  "auth_uri":                    "",\n  "token_uri":                   "",\n  "auth_provider_x509_cert_url": "",\n  "client_x509_cert_url":        "",\n  "universe_domain":             "",\n }\n\n bytes, err := json.Marshal(data)\n if err != nil {\n  panic(err)\n }\n\n return bytes\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"repository-pattern",children:"Repository Pattern"}),"\n",(0,t.jsxs)(n.p,{children:["Implement the repository pattern in the ",(0,t.jsx)(n.code,{children:"src/repositories/main.repository.go"})," file to interact with Firestore. This file includes an example of inserting a message into the database."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package repositories\n\nimport (\n "context"\n\n "cloud.google.com/go/firestore"\n "example.com/GofiberFirebaseBoilerplate/src/models"\n "github.com/google/uuid"\n)\n\ntype MainRepository struct {\n DB *firestore.Client\n}\n\nfunc (r *MainRepository) InsertMessage(body *models.MessageInputBody) error {\n id := uuid.New().String()\n _, err := r.DB.Collection("messages").Doc(id).Set(context.Background(), body)\n return err\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"model-definition",children:"Model Definition"}),"\n",(0,t.jsx)(n.p,{children:"Define a message input model in src/models/message_input_body.go to structure the data you'll be working with."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package models\n\ntype MessageInputBody struct {\n From    string `json:"from"`\n To      string `json:"to"`\n Message string `json:"message"`\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"functions-for-cloud-integration",children:"Functions for Cloud Integration"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"functions.go"}),", convert Google Cloud Function requests to Fiber and route them to your application. This file includes functions to facilitate the integration of Google Cloud Functions and GoFiber."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package app\n\nimport (\n "bytes"\n "context"\n "fmt"\n "io"\n "log"\n "net"\n "net/http"\n "strings"\n\n "github.com/gofiber/fiber/v2"\n "github.com/valyala/fasthttp/fasthttputil"\n)\n\n// CloudFunctionRouteToFiber route cloud function http.Handler to *fiber.App\n// Internally, google calls the function with the /execute base URL\nfunc CloudFunctionRouteToFiber(fiberApp *fiber.App, w http.ResponseWriter, r *http.Request) error {\n return RouteToFiber(fiberApp, w, r, "/execute")\n}\n\n// RouteToFiber route http.Handler to *fiber.App\nfunc RouteToFiber(fiberApp *fiber.App, w http.ResponseWriter, r *http.Request, rootURL ...string) error {\n ln := fasthttputil.NewInmemoryListener()\n defer ln.Close()\n\n // Copy request\n body, err := io.ReadAll(r.Body)\n if err != nil {\n  return err\n }\n\n url := fmt.Sprintf("%s://%s%s", "http", "0.0.0.0", r.RequestURI)\n if len(rootURL) > 0 {\n  url = strings.Replace(url, rootURL[0], "", -1)\n }\n\n proxyReq, err := http.NewRequest(r.Method, url, bytes.NewReader(body))\n\n if err != nil {\n  return err\n }\n\n proxyReq.Header = r.Header\n\n // Create http client\n client := http.Client{\n  Transport: &http.Transport{\n   DialContext: func(ctx context.Context, network, addr string) (net.Conn, error) {\n    return ln.Dial()\n   },\n  },\n }\n\n // Serve request to internal HTTP client\n go func() {\n  log.Fatal(fiberApp.Listener(ln))\n }()\n\n // Call internal Fiber API\n response, err := client.Do(proxyReq)\n if err != nil {\n  return err\n }\n\n // Copy response and headers\n for k, values := range response.Header {\n  for _, v := range values {\n   w.Header().Set(k, v)\n  }\n }\n w.WriteHeader(response.StatusCode)\n\n io.Copy(w, response.Body)\n response.Body.Close()\n\n return nil\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"main-application-entry",children:"Main Application Entry"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"main.go"}),", initialize your GoFiber app and start the server. This file also includes an exported Cloud Function handler for deployment."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package app\n\nimport (\n "fmt"\n "net/http"\n "strings"\n\n "example.com/GofiberFirebaseBoilerplate/src"\n "github.com/gofiber/fiber/v2"\n)\n\nvar app *fiber.App\n\nfunc init() {\n app = src.CreateServer()\n}\n\n// Start start Fiber app with normal interface\nfunc Start(addr string) error {\n if -1 == strings.IndexByte(addr, \':\') {\n  addr = ":" + addr\n }\n\n return app.Listen(addr)\n}\n\n// MyCloudFunction Exported http.HandlerFunc to be deployed to as a Cloud Function\nfunc MyCloudFunction(w http.ResponseWriter, r *http.Request) {\n err := CloudFunctionRouteToFiber(app, w, r)\n if err != nil {\n  fmt.Fprintf(w, "err : %v", err)\n  return\n }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,t.jsxs)(n.p,{children:["For local development, utilize the ",(0,t.jsx)(n.code,{children:"cmd/main.go"})," file. If you prefer hot reloading, the ",(0,t.jsx)(n.code,{children:".air.toml"})," configuration file is included for use Air."]}),"\n",(0,t.jsx)(n.h2,{id:"cmdmaingo",children:"cmd/main.go"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n "log"\n "os"\n\n app "example.com/GofiberFirebaseBoilerplate"\n)\n\nfunc main() {\n\n port := "3001"\n if envPort := os.Getenv("PORT"); envPort != "" {\n  port = envPort\n }\n\n if err := app.Start(port); err != nil {\n  log.Fatalf("app.Start: %v\\n", err)\n }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"airtoml",children:".air.toml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'root = "."\ntestdata_dir = "testdata"\ntmp_dir = "tmp"\n\n[build]\n  args_bin = []\n  bin = "./tmp/main"\n  cmd = "go build -o ./tmp/main ./cmd"\n  delay = 1000\n  exclude_dir = ["assets", "tmp", "vendor", "testdata"]\n  exclude_file = []\n  exclude_regex = ["_test.go"]\n  exclude_unchanged = false\n  follow_symlink = false\n  full_bin = ""\n  include_dir = []\n  include_ext = ["go", "tpl", "tmpl", "html"]\n  include_file = []\n  kill_delay = "0s"\n  log = "build-errors.log"\n  poll = false\n  poll_interval = 0\n  post_cmd = []\n  pre_cmd = []\n  rerun = false\n  rerun_delay = 500\n  send_interrupt = false\n  stop_on_error = false\n\n[color]\n  app = ""\n  build = "yellow"\n  main = "magenta"\n  runner = "green"\n  watcher = "cyan"\n\n[log]\n  main_only = false\n  time = false\n\n[misc]\n  clean_on_exit = false\n\n[screen]\n  clear_on_rebuild = false\n  keep_scroll = true\n'})}),"\n",(0,t.jsx)(n.h2,{id:"deployment",children:"Deployment"}),"\n",(0,t.jsxs)(n.p,{children:["Deploy your Cloud Function using the following commands, replacing ",(0,t.jsx)(n.code,{children:"<YourProjectID>"})," with your Firebase project ID:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gcloud config set project <YourProjectID>\ngcloud functions deploy MyCloudFunction --runtime go120 --trigger-http\n"})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Congratulations! You\u2019ve successfully configured and deployed a GoFiber application on Firebase Functions. This powerful combination allows you to build fast and efficient serverless applications. Experiment further with GoFiber features and Firebase integrations to unlock the full potential of your serverless architecture. Happy coding!"}),"\n",(0,t.jsx)(n.h2,{id:"medium-post",children:"Medium Post"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://medium.com/@kmltrk07/how-to-deploy-gofiber-app-to-firebase-functions-8d4d537a4464",children:"https://medium.com/@kmltrk07/how-to-deploy-gofiber-app-to-firebase-functions-8d4d537a4464"})})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var i=r(67294);let t={},o=i.createContext(t);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);