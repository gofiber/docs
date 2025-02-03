"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["153"],{83931:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"socketio/socketio","title":"Socket.io","description":"Release","source":"@site/contrib_versioned_docs/version-socketio_v1.x.x/socketio/README.md","sourceDirName":"socketio","slug":"/socketio/","permalink":"/contrib/socketio_v1.x.x/socketio/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/socketio/README.md","tags":[],"version":"socketio_v1.x.x","lastUpdatedAt":1738624341000,"frontMatter":{"id":"socketio"},"sidebar":"left_sidebar","previous":{"title":"Paseto","permalink":"/contrib/socketio_v1.x.x/paseto/"},"next":{"title":"Swagger","permalink":"/contrib/socketio_v1.x.x/swagger/"}}'),i=n("85893"),l=n("50065");let r={id:"socketio"},c="Socket.io",o={},d=[{value:"Install",id:"install",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Example",id:"example",level:2},{value:"Supported events",id:"supported-events",level:2},{value:"Event Payload object",id:"event-payload-object",level:2},{value:"Socket instance functions",id:"socket-instance-functions",level:2}];function a(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"socketio",children:"Socket.io"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=socketio*",alt:"Release"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(t.p,{children:["WebSocket wrapper for ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," with events support and inspired by ",(0,i.jsx)(t.a,{href:"https://github.com/socketio/socket.io",children:"Socket.io"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note: Requires Go 1.20 and above"})}),"\n",(0,i.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/socketio\n"})}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"// Initialize new socketio in the callback this will\n// execute a callback that expects kws *Websocket Object\n// and optional config websocket.Config\nfunc New(callback func(kws *Websocket), config ...websocket.Config) func(*fiber.Ctx) error\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"// Add listener callback for an event into the listeners list\nfunc On(event string, callback func(payload *EventPayload))\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"// Emit the message to a specific socket uuids list\n// Ignores all errors\nfunc EmitToList(uuids []string, message []byte)\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"// Emit to a specific socket connection\nfunc EmitTo(uuid string, message []byte) error\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"// Broadcast to all the active connections\n// except avoid broadcasting the message to itself\nfunc Broadcast(message []byte)\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"// Fire custom event on all connections\nfunc Fire(event string, data []byte) \n"})}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "log"\n\n    "github.com/gofiber/contrib/socketio"\n    "github.com/gofiber/contrib/websocket"\n    "github.com/gofiber/fiber/v2"\n)\n\n// MessageObject Basic chat message object\ntype MessageObject struct {\n    Data  string `json:"data"`\n    From  string `json:"from"`\n    Event string `json:"event"`\n    To    string `json:"to"`\n}\n\nfunc main() {\n\n    // The key for the map is message.to\n    clients := make(map[string]string)\n\n    // Start a new Fiber application\n    app := fiber.New()\n\n    // Setup the middleware to retrieve the data sent in first GET request\n    app.Use(func(c *fiber.Ctx) error {\n        // IsWebSocketUpgrade returns true if the client\n        // requested upgrade to the WebSocket protocol.\n        if websocket.IsWebSocketUpgrade(c) {\n            c.Locals("allowed", true)\n            return c.Next()\n        }\n        return fiber.ErrUpgradeRequired\n    })\n\n    // Multiple event handling supported\n    socketio.On(socketio.EventConnect, func(ep *socketio.EventPayload) {\n        fmt.Printf("Connection event 1 - User: %s", ep.Kws.GetStringAttribute("user_id"))\n    })\n\n    // Custom event handling supported\n    socketio.On("CUSTOM_EVENT", func(ep *socketio.EventPayload) {\n        fmt.Printf("Custom event - User: %s", ep.Kws.GetStringAttribute("user_id"))\n        // ---\x3e\n\n        // DO YOUR BUSINESS HERE\n\n        // ---\x3e\n    })\n\n    // On message event\n    socketio.On(socketio.EventMessage, func(ep *socketio.EventPayload) {\n\n        fmt.Printf("Message event - User: %s - Message: %s", ep.Kws.GetStringAttribute("user_id"), string(ep.Data))\n\n        message := MessageObject{}\n\n        // Unmarshal the json message\n        // {\n        //  "from": "<user-id>",\n        //  "to": "<recipient-user-id>",\n        //  "event": "CUSTOM_EVENT",\n        //  "data": "hello"\n        //}\n        err := json.Unmarshal(ep.Data, &message)\n        if err != nil {\n            fmt.Println(err)\n            return\n        }\n\n        // Fire custom event based on some\n        // business logic\n        if message.Event != "" {\n            ep.Kws.Fire(message.Event, []byte(message.Data))\n        }\n\n        // Emit the message directly to specified user\n        err = ep.Kws.EmitTo(clients[message.To], ep.Data, socketio.TextMessage)\n        if err != nil {\n            fmt.Println(err)\n        }\n    })\n\n    // On disconnect event\n    socketio.On(socketio.EventDisconnect, func(ep *socketio.EventPayload) {\n        // Remove the user from the local clients\n        delete(clients, ep.Kws.GetStringAttribute("user_id"))\n        fmt.Printf("Disconnection event - User: %s", ep.Kws.GetStringAttribute("user_id"))\n    })\n\n    // On close event\n    // This event is called when the server disconnects the user actively with .Close() method\n    socketio.On(socketio.EventClose, func(ep *socketio.EventPayload) {\n        // Remove the user from the local clients\n        delete(clients, ep.Kws.GetStringAttribute("user_id"))\n        fmt.Printf("Close event - User: %s", ep.Kws.GetStringAttribute("user_id"))\n    })\n\n    // On error event\n    socketio.On(socketio.EventError, func(ep *socketio.EventPayload) {\n        fmt.Printf("Error event - User: %s", ep.Kws.GetStringAttribute("user_id"))\n    })\n\n    app.Get("/ws/:id", socketio.New(func(kws *socketio.Websocket) {\n\n        // Retrieve the user id from endpoint\n        userId := kws.Params("id")\n\n        // Add the connection to the list of the connected clients\n        // The UUID is generated randomly and is the key that allow\n        // socketio to manage Emit/EmitTo/Broadcast\n        clients[userId] = kws.UUID\n\n        // Every websocket connection has an optional session key => value storage\n        kws.SetAttribute("user_id", userId)\n\n        //Broadcast to all the connected users the newcomer\n        kws.Broadcast([]byte(fmt.Sprintf("New user connected: %s and UUID: %s", userId, kws.UUID)), true, socketio.TextMessage)\n        //Write welcome message\n        kws.Emit([]byte(fmt.Sprintf("Hello user: %s with UUID: %s", userId, kws.UUID)), socketio.TextMessage)\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n}\n\n'})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"supported-events",children:"Supported events"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Const"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Event"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EventMessage"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"message"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when a Text/Binary message is received"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EventPing"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"ping"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#Pings_and_Pongs_The_Heartbeat_of_WebSockets",children:"More details here"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EventPong"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"pong"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Refer to ping description"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EventDisconnect"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"disconnect"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired on disconnection. The error provided in disconnection event as defined in RFC 6455, section 11.7."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EventConnect"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"connect"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired on first connection"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EventClose"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"close"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when the connection is actively closed from the server. Different from client disconnection"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EventError"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"error"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when some error appears useful also for debugging websockets"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"event-payload-object",children:"Event Payload object"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Variable"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Kws"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"*Websocket"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The connection object"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The name of the event"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SocketUUID"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Unique connection UUID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SocketAttributes"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"map[string]string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Optional websocket attributes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Error"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"error"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"(optional) Fired from disconnection or error events"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]byte"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data used on Message and on Error event, contains the payload for custom events"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"socket-instance-functions",children:"Socket instance functions"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SetAttribute"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"void"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Set a specific attribute for the specific socket connection"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"GetUUID"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Get socket connection UUID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SetUUID"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"error"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Set socket connection UUID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"GetAttribute"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Get a specific attribute from the socket attributes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EmitToList"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"void"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Emit the message to a specific socket uuids list"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EmitTo"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"error"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Emit to a specific socket connection"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Broadcast"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"void"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Broadcast to all the active connections except broadcasting the message to itself"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fire"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"void"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fire custom event"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Emit"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"void"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Emit/Write the message into the given connection"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Close"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"void"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Actively close the connection from the server"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note: the FastHTTP connection can be accessed directly from the instance"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"kws.Conn\n"})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return r}});var s=n(67294);let i={},l=s.createContext(i);function r(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);