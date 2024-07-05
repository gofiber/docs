"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[3037],{70716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=n(74848),i=n(28453);const s={id:"paseto"},l="Paseto",o={id:"paseto/paseto",title:"Paseto",description:"Release",source:"@site/contrib_versioned_docs/version-_.x.x/paseto/README.md",sourceDirName:"paseto",slug:"/paseto/",permalink:"/contrib/_.x.x/paseto/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/paseto/README.md",tags:[],version:"_.x.x",lastUpdatedAt:1720163171e3,frontMatter:{id:"paseto"},sidebar:"tutorialSidebar",previous:{title:"Example",permalink:"/contrib/_.x.x/otelfiber/example/"},next:{title:"Swagger",permalink:"/contrib/_.x.x/swagger/"}},c={},a=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Examples",id:"examples",level:2},{value:"SymmetricKey",id:"symmetrickey",level:3},{value:"Test it",id:"test-it",level:4},{value:"SymmetricKey + Custom Validator callback",id:"symmetrickey--custom-validator-callback",level:3},{value:"Test it",id:"test-it-1",level:4},{value:"PublicPrivate Key",id:"publicprivate-key",level:3},{value:"Test it",id:"test-it-2",level:4}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"paseto",children:"Paseto"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=paseto*",alt:"Release"}),"\n",(0,r.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,r.jsx)(t.p,{children:"PASETO returns a Web Token (PASETO) auth middleware."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"For valid token, it sets the payload data in Ctx.Locals and calls next handler."}),"\n",(0,r.jsx)(t.li,{children:'For invalid token, it returns "401 - Unauthorized" error.'}),"\n",(0,r.jsx)(t.li,{children:'For missing token, it returns "400 - BadRequest" error.'}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Note: Requires Go 1.18 and above"})}),"\n",(0,r.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(t.p,{children:"This middleware supports Fiber v2."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/paseto\ngo get -u github.com/o1egl/paseto\n"})}),"\n",(0,r.jsx)(t.h2,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"pasetoware.New(config ...pasetoware.Config) func(*fiber.Ctx) error\n"})}),"\n",(0,r.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(*Ctx) bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Defines a function to skip middleware"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"SuccessHandler"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(*fiber.Ctx) error"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"SuccessHandler defines a function which is executed for a valid token."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"c.Next()"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ErrorHandler"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(*fiber.Ctx, error) error"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ErrorHandler defines a function which is executed for an invalid token."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"401 Invalid or expired PASETO"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Validate"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"PayloadValidator"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Defines a function to validate if payload is valid. Optional. In case payload used is created using ",(0,r.jsx)(t.code,{children:"CreateToken"})," function. If token is created using another function, this function must be provided."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"SymmetricKey"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"[]byte"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Secret key to encrypt token. If present the middleware will generate local tokens."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"PrivateKey"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"ed25519.PrivateKey"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Secret key to sign the tokens. If present (along with its ",(0,r.jsx)(t.code,{children:"PublicKey"}),") the middleware will generate public tokens."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"PublicKey"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"crypto.PublicKey"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Public key to verify the tokens. If present (along with ",(0,r.jsx)(t.code,{children:"PrivateKey"}),") the middleware will generate public tokens."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ContextKey"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Context key to store user information from the token into context."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:'"auth-token"'})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"TokenLookup"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"[2]string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"TokenLookup is a string slice with size 2, that is used to extract token from the request"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:'["header","Authorization"]'})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"instructions",children:"Instructions"}),"\n",(0,r.jsx)(t.p,{children:"When using this middleware, and creating a token for authentication, you can use the function pasetoware.CreateToken,\nthat will create a token, encrypt or sign it and returns the PASETO token."}),"\n",(0,r.jsxs)(t.p,{children:["Passing a ",(0,r.jsx)(t.code,{children:"SymmetricKey"})," in the Config results in a local (encrypted) token, while passing a ",(0,r.jsx)(t.code,{children:"PublicKey"}),"\nand ",(0,r.jsx)(t.code,{children:"PrivateKey"})," results in a public (signed) token."]}),"\n",(0,r.jsxs)(t.p,{children:["In case you want to use your own data structure, is needed to provide the ",(0,r.jsx)(t.code,{children:"Validate"})," function in ",(0,r.jsx)(t.code,{children:"paseware.Config"}),", that\nwill return the data stored in the token, and a error."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"Below have a list of some examples that can help you start to use this middleware. In case of any additional example\nthat doesn't show here, please take a look at the test file."}),"\n",(0,r.jsx)(t.h3,{id:"symmetrickey",children:"SymmetricKey"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"time"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/o1egl/paseto"\n\n\tpasetoware "github.com/gofiber/contrib/paseto"\n)\n\nconst secretSymmetricKey = "symmetric-secret-key (size = 32)"\n\nfunc main() {\n\n\tapp := fiber.New()\n\n\t// Login route\n\tapp.Post("/login", login)\n\n\t// Unauthenticated route\n\tapp.Get("/", accessible)\n\n\t// Paseto Middleware with local (encrypted) token\n\tapiGroup := app.Group("api", pasetoware.New(pasetoware.Config{\n\t\tSymmetricKey: []byte(secretSymmetricKey),\n\t\tTokenPrefix:  "Bearer",\n\t}))\n\n\t// Restricted Routes\n\tapiGroup.Get("/restricted", restricted)\n\n\terr := app.Listen(":8088")\n\tif err != nil {\n\t\treturn\n\t}\n}\n\nfunc login(c *fiber.Ctx) error {\n\tuser := c.FormValue("user")\n\tpass := c.FormValue("pass")\n\n\t// Throws Unauthorized error\n\tif user != "john" || pass != "doe" {\n\t\treturn c.SendStatus(fiber.StatusUnauthorized)\n\t}\n\n\t// Create token and encrypt it\n\tencryptedToken, err := pasetoware.CreateToken([]byte(secretSymmetricKey), user, 12*time.Hour, pasetoware.PurposeLocal)\n\tif err != nil {\n\t\treturn c.SendStatus(fiber.StatusInternalServerError)\n\t}\n\n\treturn c.JSON(fiber.Map{"token": encryptedToken})\n}\n\nfunc accessible(c *fiber.Ctx) error {\n\treturn c.SendString("Accessible")\n}\n\nfunc restricted(c *fiber.Ctx) error {\n\tpayload := c.Locals(pasetoware.DefaultContextKey).(string)\n\treturn c.SendString("Welcome " + payload)\n}\n\n'})}),"\n",(0,r.jsx)(t.h4,{id:"test-it",children:"Test it"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Login using username and password to retrieve a token."})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'curl --data "user=john&pass=doe" http://localhost:8088/login\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Response"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "token": "v2.local.eY7o9YAJ7Uqyo0JdyfHXKVARj3HgBhqIHckPgNIJOU6u489CXYL6bpOXbEtTB_nNM7nTFpcRVi7YAtJToxbxkkraHmE39pqjnBgkca-URgE-jhZGuhGu7ablmK-8tVoe5iY8mQqWFuJHAznTASUHh4AG55AMUcIALi6pEG28lAgVfw2azvnvbg4JOVZnjutcOVswd-ErsAuGtuEZkTmX7BfaLaO9ZvEX9cHahYPajuRjwU2TQrcpqITg-eYMNA1NuO8OVdnGf0mkUk6ElJUTZqhx4CSSylNXr7IlOwzTbUotEDAQTcNP7IRZI3VfpnRgnmtnZ5s.bnVsbAY"\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Request a restricted resource using the token in Authorization request header."})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'curl localhost:8088/api/restricted -H "Authorization: Bearer v2.local.eY7o9YAJ7Uqyo0JdyfHXKVARj3HgBhqIHckPgNIJOU6u489CXYL6bpOXbEtTB_nNM7nTFpcRVi7YAtJToxbxkkraHmE39pqjnBgkca-URgE-jhZGuhGu7ablmK-8tVoe5iY8mQqWFuJHAznTASUHh4AG55AMUcIALi6pEG28lAgVfw2azvnvbg4JOVZnjutcOVswd-ErsAuGtuEZkTmX7BfaLaO9ZvEX9cHahYPajuRjwU2TQrcpqITg-eYMNA1NuO8OVdnGf0mkUk6ElJUTZqhx4CSSylNXr7IlOwzTbUotEDAQTcNP7IRZI3VfpnRgnmtnZ5s.bnVsbA"\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Response"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Welcome john\n"})}),"\n",(0,r.jsx)(t.h3,{id:"symmetrickey--custom-validator-callback",children:"SymmetricKey + Custom Validator callback"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"encoding/json"\n\t"time"\n\n\t"github.com/o1egl/paseto"\n\n\tpasetoware "github.com/gofiber/contrib/paseto"\n)\n\nconst secretSymmetricKey = "symmetric-secret-key (size = 32)"\n\ntype customPayloadStruct struct {\n\tName      string    `json:"name"`\n\tExpiresAt time.Time `json:"expiresAt"`\n}\n\nfunc main() {\n\n\tapp := fiber.New()\n\n\t// Login route\n\tapp.Post("/login", login)\n\n\t// Unauthenticated route\n\tapp.Get("/", accessible)\n\n\t// Paseto Middleware with local (encrypted) token\n\tapiGroup := app.Group("api", pasetoware.New(pasetoware.Config{\n\t\tSymmetricKey: []byte(secretSymmetricKey),\n\t\tTokenPrefix:  "Bearer",\n\t\tValidate: func(decrypted []byte) (any, error) {\n\t\t\tvar payload customPayloadStruct\n\t\t\terr := json.Unmarshal(decrypted, &payload)\n\t\t\treturn payload, err\n\t\t},\n\t}))\n\n\t// Restricted Routes\n\tapiGroup.Get("/restricted", restricted)\n\n\terr := app.Listen(":8088")\n\tif err != nil {\n\t\treturn\n\t}\n}\n\nfunc login(c *fiber.Ctx) error {\n\tuser := c.FormValue("user")\n\tpass := c.FormValue("pass")\n\n\t// Throws Unauthorized error\n\tif user != "john" || pass != "doe" {\n\t\treturn c.SendStatus(fiber.StatusUnauthorized)\n\t}\n\n\t// Create the payload\n\tpayload := customPayloadStruct{\n\t\tName:      "John Doe",\n\t\tExpiresAt: time.Now().Add(12 * time.Hour),\n\t}\n\n\t// Create token and encrypt it\n\tencryptedToken, err := paseto.NewV2().Encrypt([]byte(secretSymmetricKey), payload, nil)\n\tif err != nil {\n\t\treturn c.SendStatus(fiber.StatusInternalServerError)\n\t}\n\n\treturn c.JSON(fiber.Map{"token": encryptedToken})\n}\n\nfunc accessible(c *fiber.Ctx) error {\n\treturn c.SendString("Accessible")\n}\n\nfunc restricted(c *fiber.Ctx) error {\n\tpayload := c.Locals(pasetoware.DefaultContextKey).(customPayloadStruct)\n\treturn c.SendString("Welcome " + payload.Name)\n}\n\n'})}),"\n",(0,r.jsx)(t.h4,{id:"test-it-1",children:"Test it"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Login using username and password to retrieve a token."})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'curl --data "user=john&pass=doe" http://localhost:8088/login\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Response"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "token": "v2.local.OSnDEMUndq8JpRdCD8yX-mr-Z0-Mi85Jw0ftxseiNLCbRc44Mxl5dnn-SV9Qew1n9Y44wXZwm_FG279cILJk7lYc_B_IoMCRBudJE7qMgctkD9UBM-ZRZgCX9ekJh3S1Oo6Erp7bO-omPra5.bnVsbA"\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Request a restricted resource using the token in Authorization request header."})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'curl localhost:8088/api/restricted -H "Authorization: Bearer v2.local.OSnDEMUndq8JpRdCD8yX-mr-Z0-Mi85Jw0ftxseiNLCbRc44Mxl5dnn-SV9Qew1n9Y44wXZwm_FG279cILJk7lYc_B_IoMCRBudJE7qMgctkD9UBM-ZRZgCX9ekJh3S1Oo6Erp7bO-omPra5.bnVsbA"\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Response"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Welcome John Doe\n"})}),"\n",(0,r.jsx)(t.h3,{id:"publicprivate-key",children:"PublicPrivate Key"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"crypto/ed25519"\n\t"encoding/hex"\n\t"time"\n\n\t"github.com/gofiber/fiber/v2"\n\n\tpasetoware "github.com/gofiber/contrib/paseto"\n)\n\nconst privateKeySeed = "e9c67fe2433aa4110caf029eba70df2c822cad226b6300ead3dcae443ac3810f"\n\nvar seed, _ = hex.DecodeString(privateKeySeed)\nvar privateKey = ed25519.NewKeyFromSeed(seed)\n\ntype customPayloadStruct struct {\n\tName      string    `json:"name"`\n\tExpiresAt time.Time `json:"expiresAt"`\n}\n\nfunc main() {\n\n\tapp := fiber.New()\n\n\t// Login route\n\tapp.Post("/login", login)\n\n\t// Unauthenticated route\n\tapp.Get("/", accessible)\n\n\t// Paseto Middleware with local (encrypted) token\n\tapiGroup := app.Group("api", pasetoware.New(pasetoware.Config{\n\t\tTokenPrefix: "Bearer",\n\t\tPrivateKey:  privateKey,\n\t\tPublicKey:   privateKey.Public(),\n\t}))\n\n\t// Restricted Routes\n\tapiGroup.Get("/restricted", restricted)\n\n\terr := app.Listen(":8088")\n\tif err != nil {\n\t\treturn\n\t}\n}\n\nfunc login(c *fiber.Ctx) error {\n\tuser := c.FormValue("user")\n\tpass := c.FormValue("pass")\n\n\t// Throws Unauthorized error\n\tif user != "john" || pass != "doe" {\n\t\treturn c.SendStatus(fiber.StatusUnauthorized)\n\t}\n\n\t// Create token and encrypt it\n\tencryptedToken, err := pasetoware.CreateToken(privateKey, user, 12*time.Hour, pasetoware.PurposePublic)\n\tif err != nil {\n\t\treturn c.SendStatus(fiber.StatusInternalServerError)\n\t}\n\n\treturn c.JSON(fiber.Map{"token": encryptedToken})\n}\n\nfunc accessible(c *fiber.Ctx) error {\n\treturn c.SendString("Accessible")\n}\n\nfunc restricted(c *fiber.Ctx) error {\n\tpayload := c.Locals(pasetoware.DefaultContextKey).(string)\n\treturn c.SendString("Welcome " + payload)\n}\n\n'})}),"\n",(0,r.jsx)(t.h4,{id:"test-it-2",children:"Test it"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Login using username and password to retrieve a token."})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'curl --data "user=john&pass=doe" http://localhost:8088/login\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Response"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "token": "v2.public.eyJhdWQiOiJnb2ZpYmVyLmdvcGhlcnMiLCJkYXRhIjoiam9obiIsImV4cCI6IjIwMjMtMDctMTNUMDg6NDk6MzctMDM6MDAiLCJpYXQiOiIyMDIzLTA3LTEyVDIwOjQ5OjM3LTAzOjAwIiwianRpIjoiMjIzYjM0MjQtNWNkZS00NDFhLWJiZWEtZjBjYWFhYTdiYWFlIiwibmJmIjoiMjAyMy0wNy0xMlQyMDo0OTozNy0wMzowMCIsInN1YiI6InVzZXItdG9rZW4ifWiqK_yg0eJbIs2hnup4NuBYg7v4lxh33zEhEljsH7QUaZXAdtbCPK7cN-NSfSxrw68owwgo-dOlPrD7lc5M_AU.bnVsbA"\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Request a restricted resource using the token in Authorization request header."})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'curl localhost:8088/api/restricted -H "Authorization: Bearer v2.public.eyJhdWQiOiJnb2ZpYmVyLmdvcGhlcnMiLCJkYXRhIjoiam9obiIsImV4cCI6IjIwMjMtMDctMTNUMDg6NDk6MzctMDM6MDAiLCJpYXQiOiIyMDIzLTA3LTEyVDIwOjQ5OjM3LTAzOjAwIiwianRpIjoiMjIzYjM0MjQtNWNkZS00NDFhLWJiZWEtZjBjYWFhYTdiYWFlIiwibmJmIjoiMjAyMy0wNy0xMlQyMDo0OTozNy0wMzowMCIsInN1YiI6InVzZXItdG9rZW4ifWiqK_yg0eJbIs2hnup4NuBYg7v4lxh33zEhEljsH7QUaZXAdtbCPK7cN-NSfSxrw68owwgo-dOlPrD7lc5M_AU.bnVsbA"\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Response"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Welcome John Doe\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);