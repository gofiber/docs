"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[71676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,g=d["".concat(l,".").concat(k)]||d[k]||m[k]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},84696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,s={unversionedId:"socketio/README",id:"socketio/README",title:"README",description:"id: socketio",source:"@site/docs/contrib/socketio/README.md",sourceDirName:"socketio",slug:"/socketio/",permalink:"/contrib/next/socketio/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/socketio/README.md",tags:[],version:"current",lastUpdatedAt:1708310554,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Paseto",permalink:"/contrib/next/paseto/"},next:{title:"Swagger",permalink:"/contrib/next/swagger/"}},l={},c=[{value:"id: socketio",id:"id-socketio",level:2},{value:"Install",id:"install",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Example",id:"example",level:2},{value:"Supported events",id:"supported-events",level:2},{value:"Event Payload object",id:"event-payload-object",level:2},{value:"Socket instance functions",id:"socket-instance-functions",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"id-socketio"},"id: socketio"),(0,r.kt)("h1",{id:"socketio"},"Socket.io"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=socketio*",alt:"Release"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,r.kt)("p",null,"WebSocket wrapper for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," with events support and inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/socketio/socket.io"},"Socket.io")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: Requires Go 1.20 and above")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/socketio\n")),(0,r.kt)("h2",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Initialize new socketio in the callback this will\n// execute a callback that expects kws *Websocket Object\nfunc New(callback func(kws *Websocket)) func(*fiber.Ctx) error\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Add listener callback for an event into the listeners list\nfunc On(event string, callback func(payload *EventPayload))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Emit the message to a specific socket uuids list\n// Ignores all errors\nfunc EmitToList(uuids []string, message []byte)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Emit to a specific socket connection\nfunc EmitTo(uuid string, message []byte) error\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Broadcast to all the active connections\n// except avoid broadcasting the message to itself\nfunc Broadcast(message []byte)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Fire custom event on all connections\nfunc Fire(event string, data []byte) \n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "log"\n\n    "github.com/gofiber/contrib/socketio"\n    "github.com/gofiber/contrib/websocket"\n    "github.com/gofiber/fiber/v2"\n)\n\n// MessageObject Basic chat message object\ntype MessageObject struct {\n    Data  string `json:"data"`\n    From  string `json:"from"`\n    Event string `json:"event"`\n    To    string `json:"to"`\n}\n\nfunc main() {\n\n    // The key for the map is message.to\n    clients := make(map[string]string)\n\n    // Start a new Fiber application\n    app := fiber.New()\n\n    // Setup the middleware to retrieve the data sent in first GET request\n    app.Use(func(c *fiber.Ctx) error {\n        // IsWebSocketUpgrade returns true if the client\n        // requested upgrade to the WebSocket protocol.\n        if websocket.IsWebSocketUpgrade(c) {\n            c.Locals("allowed", true)\n            return c.Next()\n        }\n        return fiber.ErrUpgradeRequired\n    })\n\n    // Multiple event handling supported\n    socketio.On(socketio.EventConnect, func(ep *socketio.EventPayload) {\n        fmt.Println(fmt.Sprintf("Connection event 1 - User: %s", ep.Kws.GetStringAttribute("user_id")))\n    })\n\n    // Custom event handling supported\n    socketio.On("CUSTOM_EVENT", func(ep *socketio.EventPayload) {\n        fmt.Println(fmt.Sprintf("Custom event - User: %s", ep.Kws.GetStringAttribute("user_id")))\n        // ---\x3e\n\n        // DO YOUR BUSINESS HERE\n\n        // ---\x3e\n    })\n\n    // On message event\n    socketio.On(socketio.EventMessage, func(ep *socketio.EventPayload) {\n\n        fmt.Println(fmt.Sprintf("Message event - User: %s - Message: %s", ep.Kws.GetStringAttribute("user_id"), string(ep.Data)))\n\n        message := MessageObject{}\n\n        // Unmarshal the json message\n        // {\n        //  "from": "<user-id>",\n        //  "to": "<recipient-user-id>",\n        //  "event": "CUSTOM_EVENT",\n        //  "data": "hello"\n        //}\n        err := json.Unmarshal(ep.Data, &message)\n        if err != nil {\n            fmt.Println(err)\n            return\n        }\n\n        // Fire custom event based on some\n        // business logic\n        if message.Event != "" {\n            ep.Kws.Fire(message.Event, []byte(message.Data))\n        }\n\n        // Emit the message directly to specified user\n        err = ep.Kws.EmitTo(clients[message.To], ep.Data, socketio.TextMessage)\n        if err != nil {\n            fmt.Println(err)\n        }\n    })\n\n    // On disconnect event\n    socketio.On(socketio.EventDisconnect, func(ep *socketio.EventPayload) {\n        // Remove the user from the local clients\n        delete(clients, ep.Kws.GetStringAttribute("user_id"))\n        fmt.Println(fmt.Sprintf("Disconnection event - User: %s", ep.Kws.GetStringAttribute("user_id")))\n    })\n\n    // On close event\n    // This event is called when the server disconnects the user actively with .Close() method\n    socketio.On(socketio.EventClose, func(ep *socketio.EventPayload) {\n        // Remove the user from the local clients\n        delete(clients, ep.Kws.GetStringAttribute("user_id"))\n        fmt.Println(fmt.Sprintf("Close event - User: %s", ep.Kws.GetStringAttribute("user_id")))\n    })\n\n    // On error event\n    socketio.On(socketio.EventError, func(ep *socketio.EventPayload) {\n        fmt.Println(fmt.Sprintf("Error event - User: %s", ep.Kws.GetStringAttribute("user_id")))\n    })\n\n    app.Get("/ws/:id", socketio.New(func(kws *socketio.Websocket) {\n\n        // Retrieve the user id from endpoint\n        userId := kws.Params("id")\n\n        // Add the connection to the list of the connected clients\n        // The UUID is generated randomly and is the key that allow\n        // socketio to manage Emit/EmitTo/Broadcast\n        clients[userId] = kws.UUID\n\n        // Every websocket connection has an optional session key => value storage\n        kws.SetAttribute("user_id", userId)\n\n        //Broadcast to all the connected users the newcomer\n        kws.Broadcast([]byte(fmt.Sprintf("New user connected: %s and UUID: %s", userId, kws.UUID)), true, socketio.TextMessage)\n        //Write welcome message\n        kws.Emit([]byte(fmt.Sprintf("Hello user: %s with UUID: %s", userId, kws.UUID)), socketio.TextMessage)\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n}\n\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"supported-events"},"Supported events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Const"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Event"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EventMessage"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fired when a Text/Binary message is received")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EventPing"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ping")),(0,r.kt)("td",{parentName:"tr",align:"left"},"More details here: @url ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#Pings_and_Pongs_The_Heartbeat_of_WebSockets"},"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#Pings_and_Pongs_The_Heartbeat_of_WebSockets"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EventPong"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pong")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Refer to ping description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EventDisconnect"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"disconnect")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fired on disconnection. The error provided in disconnection event as defined in RFC 6455, section 11.7.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EventConnect"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"connect")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fired on first connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EventClose"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"close")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fired when the connection is actively closed from the server. Different from client disconnection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EventError"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fired when some error appears useful also for debugging websockets")))),(0,r.kt)("h2",{id:"event-payload-object"},"Event Payload object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Kws"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*Websocket")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The connection object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SocketUUID"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unique connection UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SocketAttributes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"map[string]string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional websocket attributes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Error"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(optional) Fired from disconnection or error events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Data"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]byte")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data used on Message and on Error event, contains the payload for custom events")))),(0,r.kt)("h2",{id:"socket-instance-functions"},"Socket instance functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SetAttribute"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set a specific attribute for the specific socket connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GetUUID"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get socket connection UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SetUUID"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set socket connection UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GetAttribute"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get a specific attribute from the socket attributes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EmitToList"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Emit the message to a specific socket uuids list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EmitTo"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Emit to a specific socket connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Broadcast to all the active connections except broadcasting the message to itself")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Fire"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fire custom event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Emit"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Emit/Write the message into the given connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Close"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Actively close the connection from the server")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: the FastHTTP connection can be accessed directly from the instance")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"kws.Conn\n")))}m.isMDXComponent=!0}}]);