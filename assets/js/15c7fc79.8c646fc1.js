"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[54202],{16704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(74848),s=n(28453);const l={},i="Golang Templates Cheatsheet",r={id:"html/TEMPLATES_CHEATSHEET",title:"Golang Templates Cheatsheet",description:"The Go standard library provides a set of packages to generate output. The text/template package implements templates for generating text output, while the html/template package implements templates for generating HTML output that is safe against certain attacks. Both packages use the same interface but the following examples of the core features are directed towards HTML applications.",source:"@site/template_versioned_docs/version-mustache_v2.x.x/html/TEMPLATES_CHEATSHEET.md",sourceDirName:"html",slug:"/html/TEMPLATES_CHEATSHEET",permalink:"/template/mustache_v2.x.x/html/TEMPLATES_CHEATSHEET",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/template/edit/master/html/TEMPLATES_CHEATSHEET.md",tags:[],version:"mustache_v2.x.x",lastUpdatedAt:1720075358e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTML",permalink:"/template/mustache_v2.x.x/html/"},next:{title:"Jet",permalink:"/template/mustache_v2.x.x/jet/"}},o={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Parsing and Creating Templates",id:"parsing-and-creating-templates",level:2},{value:"Naming Templates",id:"naming-templates",level:4},{value:"Creating a Template",id:"creating-a-template",level:4},{value:"Parsing Multiple Templates",id:"parsing-multiple-templates",level:4},{value:"Executing Templates",id:"executing-templates",level:2},{value:"Execute a Single Template",id:"execute-a-single-template",level:4},{value:"Executing a Named Template",id:"executing-a-named-template",level:4},{value:"Template Encoding and HTML",id:"template-encoding-and-html",level:2},{value:"Contextual Encoding",id:"contextual-encoding",level:4},{value:"Safe Strings and HTML Comments",id:"safe-strings-and-html-comments",level:4},{value:"Template Variables",id:"template-variables",level:2},{value:"The dot character (.)",id:"the-dot-character-",level:4},{value:"Variables in Templates",id:"variables-in-templates",level:4},{value:"Template Actions",id:"template-actions",level:2},{value:"If/Else Statements",id:"ifelse-statements",level:4},{value:"Removing Whitespace",id:"removing-whitespace",level:4},{value:"Range Blocks",id:"range-blocks",level:4},{value:"Template Functions",id:"template-functions",level:2},{value:"Indexing structures in Templates",id:"indexing-structures-in-templates",level:4},{value:"The <code>and</code> Function",id:"the-and-function",level:4},{value:"The <code>or</code> Function",id:"the-or-function",level:4},{value:"The <code>not</code> Function",id:"the-not-function",level:4},{value:"Template Comparison Functions",id:"template-comparison-functions",level:2},{value:"Comparisons",id:"comparisons",level:4},{value:"Nested Templates and Layouts",id:"nested-templates-and-layouts",level:2},{value:"Nesting Templates",id:"nesting-templates",level:4},{value:"Passing Variables between Templates",id:"passing-variables-between-templates",level:4},{value:"Creating Layouts",id:"creating-layouts",level:4},{value:"Templates Calling Functions",id:"templates-calling-functions",level:2},{value:"Function Variables (calling struct methods)",id:"function-variables-calling-struct-methods",level:4},{value:"Function Variables (call)",id:"function-variables-call",level:4},{value:"Custom Functions",id:"custom-functions",level:4},{value:"Custom Functions (Globally)",id:"custom-functions-globally",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"golang-templates-cheatsheet",children:"Golang Templates Cheatsheet"}),"\n",(0,a.jsxs)(t.p,{children:["The Go standard library provides a set of packages to generate output. The ",(0,a.jsx)(t.a,{href:"https://archive.is/o/2HksZ/https://golang.org/pkg/text/template/",children:"text/template"})," package implements templates for generating text output, while the ",(0,a.jsx)(t.a,{href:"https://archive.is/o/2HksZ/https://golang.org/pkg/html/template/",children:"html/template"})," package implements templates for generating HTML output that is safe against certain attacks. Both packages use the same interface but the following examples of the core features are directed towards HTML applications."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#parsing-and-creating-templates",children:"Parsing and Creating Templates"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#executing-templates",children:"Executing Templates"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#template-encoding-and-html",children:"Template Encoding and HTML"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#template-variables",children:"Template Variables"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#template-actions",children:"Template Actions"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#template-functions",children:"Template Functions"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#template-comparison-functions",children:"Template Comparison Functions"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#nested-templates-and-layouts",children:"Nested Templates and Layouts"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#templates-calling-functions",children:"Templates Calling Functions"})}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parsing-and-creating-templates",children:"Parsing and Creating Templates"}),"\n",(0,a.jsx)(t.h4,{id:"naming-templates",children:"Naming Templates"}),"\n",(0,a.jsxs)(t.p,{children:["There is no defined file extension for Go templates. One of the most popular is ",(0,a.jsx)(t.code,{children:".tmpl"})," supported by vim-go and ",(0,a.jsx)(t.a,{href:"https://archive.is/o/2HksZ/golang.org/pkg/text/template/%23example_Template_helpers",children:"referenced in the text/template godocs"}),". The extension ",(0,a.jsx)(t.code,{children:".gohtml"})," supports syntax highlighting in both Atom and GoSublime editors. Finally analysis of large Go codebases finds that ",(0,a.jsx)(t.code,{children:".tpl"})," is often used by developers. While the extension is not important it is still good to be consistent within a project for clarity."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"creating-a-template",children:"Creating a Template"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"tpl, err := template.Parse(filename)"})," will get the template at filename and store it in tpl. tpl can then be executed to show the template."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"parsing-multiple-templates",children:"Parsing Multiple Templates"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"template.ParseFiles(filenames)"})," takes a list of filenames and stores all templates. ",(0,a.jsx)(t.code,{children:"template.ParseGlob(pattern)"})," will find all templates matching the pattern and store the templates."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"executing-templates",children:"Executing Templates"}),"\n",(0,a.jsx)(t.h4,{id:"execute-a-single-template",children:"Execute a Single Template"}),"\n",(0,a.jsxs)(t.p,{children:["Once a template has been parsed there are two options to execute them. A single template ",(0,a.jsx)(t.code,{children:"tpl"})," can be executed using ",(0,a.jsx)(t.code,{children:"tpl.Execute(io.Writer, data)"}),". The content of tpl will be written to the io.Writer. Data is an interface passed to the template that will be useable in the template."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"executing-a-named-template",children:"Executing a Named Template"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"tpl.ExecuteTemplate(io.Writer, name, data)"})," works the same as execute but allows for a string name of the template the user wants to execute."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"template-encoding-and-html",children:"Template Encoding and HTML"}),"\n",(0,a.jsx)(t.h4,{id:"contextual-encoding",children:"Contextual Encoding"}),"\n",(0,a.jsx)(t.p,{children:"Go\u2019s html/template package does encoding based on the context of the code. As a result, html/template encodes any characters that need encoding to be rendered correctly."}),"\n",(0,a.jsxs)(t.p,{children:["For example the < and > in ",(0,a.jsx)(t.code,{children:'"<h1>A header!</h1>"'})," will be encoded as ",(0,a.jsx)(t.code,{children:"&lt;h1&gt;A header!&lt;/h1&gt;"})," ."]}),"\n",(0,a.jsxs)(t.p,{children:["Type ",(0,a.jsx)(t.code,{children:"template.HTML"})," can be used to skip encoding by telling Go the string is safe. ",(0,a.jsx)(t.code,{children:'template.HTML("<h1>A Safe header</h1>")'})," will then be ",(0,a.jsx)(t.code,{children:"<h1>A Safe header</h1>"})," . Using this type with user input is dangerous and leaves the application vulnerable."]}),"\n",(0,a.jsxs)(t.p,{children:["The go ",(0,a.jsx)(t.code,{children:"html/template"})," package is aware of attributes within the template and will encode values differently based on the attribute."]}),"\n",(0,a.jsx)(t.p,{children:"Go templates can also be used with javascript. Structs and maps will be expanded into JSON objects and quotes will be added to strings for use in function parameters and as variable values."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'    // Go\n    type Cat struct {\n    \tName string\n    \tAge int\n    }\n\n    kitten := Cat{"Sam", 12}\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"// Template\n<script>\n  var cat = {{.kitten}}\n<\/script>\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'    // Javascript\n    var cat = {"Name":"Sam", "Age":12}\n'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"safe-strings-and-html-comments",children:"Safe Strings and HTML Comments"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"html/template"})," package will remove any comments from a template by default. This can cause issues when comments are necessary such as detecting internet explorer."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"\x3c!--[if IE]>\n  Place content here to target all Internet Explorer users.\n<![endif]--\x3e\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We can use the Custom Functions method (Globally) to create a function that returns html preserving comments. Define a function ",(0,a.jsx)(t.code,{children:"htmlSafe"})," in the FuncMap of the template."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'    testTemplate, err = template.New("hello.gohtml").Funcs(template.FuncMap{\n    \t"htmlSafe": func(html string) template.HTML {\n    \t\treturn template.HTML(html)\n        },\n    }).ParseFiles("hello.gohtml")\n'})}),"\n",(0,a.jsxs)(t.p,{children:["This function takes a string and produces the unaltered HTML code. This function can be used in a template like so to preserve the comments ",(0,a.jsx)(t.code,{children:"\x3c!--[if IE 6]>"})," and ",(0,a.jsx)(t.code,{children:"<![endif]--\x3e"})," :"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'    {{htmlSafe "\x3c!--[if IE 6]>" }}\n    <meta http-equiv="Content-Type" content="text/html; charset=Unicode">\n    {{ htmlSafe "<![endif]--\x3e" }}\n'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"template-variables",children:"Template Variables"}),"\n",(0,a.jsx)(t.h4,{id:"the-dot-character-",children:"The dot character (.)"}),"\n",(0,a.jsxs)(t.p,{children:["A template variable can be a boolean, string, character, integer, floating-point, imaginary, or complex constant in Go syntax. Data passed to the template can be accessed using dot ",(0,a.jsx)(t.code,{children:"{{ . }}"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If the data is a complex type then it\u2019s fields can be accessed using the dot with the field name ",(0,a.jsx)(t.code,{children:"{{ .FieldName }}"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Dots can be chained together if the data contains multiple complex structures. ",(0,a.jsx)(t.code,{children:"{{ .Struct.StructTwo.Field }}"})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"variables-in-templates",children:"Variables in Templates"}),"\n",(0,a.jsxs)(t.p,{children:["Data passed to the template can be saved in a variable and used throughout the template. ",(0,a.jsx)(t.code,{children:"{{$number := .}}"})," We use the ",(0,a.jsx)(t.code,{children:"$number"})," to create a variable then initialize it with the value passed to the template. To use the variable we call it in the template with ",(0,a.jsx)(t.code,{children:"{{$number}}"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"    {{$number := .}}\n    <h1> It is day number {{$number}} of the month </h1>\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'    var tpl *template.Template\n\n    tpl = template.Must(template.ParseFiles("templateName"))\n\n    err := tpl.ExecuteTemplate(os.Stdout, "templateName", 23)\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In this example we pass 23 to the template and stored in the ",(0,a.jsx)(t.code,{children:"$number"})," variable which can be used anywhere in the template"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"template-actions",children:"Template Actions"}),"\n",(0,a.jsx)(t.h4,{id:"ifelse-statements",children:"If/Else Statements"}),"\n",(0,a.jsx)(t.p,{children:"Go templates support if/else statements like many programming languages. We can use the if statement to check for values, if it doesn\u2019t exist we can use an else value. The empty values are false, 0, any nil pointer or interface value, and any array, slice, map, or string of length zero."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"<h1>Hello, {{if .Name}} {{.Name}} {{else}} Anonymous {{end}}!</h1>\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If .Name exists then ",(0,a.jsx)(t.code,{children:"Hello, Name"})," will be printed (replaced with the name value) otherwise it will print ",(0,a.jsx)(t.code,{children:"Hello, Anonymous"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Templates also provide the else if statment ",(0,a.jsx)(t.code,{children:"{{else if .Name2 }}"})," which can be used to evaluate other options after an if."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"removing-whitespace",children:"Removing Whitespace"}),"\n",(0,a.jsxs)(t.p,{children:["Adding different values to a template can add various amounts of whitespace. We can either change our template to better handle it, by ignoring or minimizing effects, or we can use the minus sign ",(0,a.jsx)(t.code,{children:"-"})," within out template."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"<h1>Hello, {{if .Name}} {{.Name}} {{- else}} Anonymous {{- end}}!</h1>"})}),"\n",(0,a.jsxs)(t.p,{children:["Here we are telling the template to remove all spaces between the ",(0,a.jsx)(t.code,{children:"Name"})," variable and whatever comes after it. We are doing the same with the end keyword. This allows us to have whitespace within the template for easier reading but remove it in production."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"range-blocks",children:"Range Blocks"}),"\n",(0,a.jsxs)(t.p,{children:["Go templates have a ",(0,a.jsx)(t.code,{children:"range"})," keyword to iterate over all objects in a structure. Suppose we had the Go structures:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"    type Item struct {\n    \tName  string\n    \tPrice int\n    }\n\n    type ViewData struct {\n    \tName  string\n    \tItems []Item\n    }\n"})}),"\n",(0,a.jsx)(t.p,{children:"We have an Item, with a name and price, then a ViewData which is the structure sent to the template. Consider the template containing the following:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'{{range .Items}}\n<div class="item">\n  <h3 class="name">{{.Name}}</h3>\n  <span class="price">${{.Price}}</span>\n</div>\n{{end}}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["For each Item in the range of Items (in the ViewData structure) get the Name and Price of that item and create html for each Item automatically. Within a range each Item becomes the ",(0,a.jsx)(t.code,{children:"{{.}}"})," and the item properties therefore become ",(0,a.jsx)(t.code,{children:"{{.Name}}"})," or ",(0,a.jsx)(t.code,{children:"{{.Price}}"})," in this example."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"template-functions",children:"Template Functions"}),"\n",(0,a.jsx)(t.p,{children:"The template package provides a list of predefined global functions. Below are some of the most used."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"indexing-structures-in-templates",children:"Indexing structures in Templates"}),"\n",(0,a.jsxs)(t.p,{children:["If the data passed to the template is a map, slice, or array it can be indexed from the template. We use ",(0,a.jsx)(t.code,{children:"{{index x number}}"})," where index is the keyword, x is the data and number is a integer for the index value. If we had ",(0,a.jsx)(t.code,{children:"{{index names 2}}"})," it is equivalent to ",(0,a.jsx)(t.code,{children:"names[2]"}),". We can add more integers to index deeper into data. ",(0,a.jsx)(t.code,{children:"{{index names 2 3 4}}"})," is equivalent to ",(0,a.jsx)(t.code,{children:"names[2][3][4]"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"<body>\n  <h1>{{index .FavNums 2 }}</h1>\n</body>\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'    type person struct {\n    \tName    string\n    \tFavNums []int\n    }\n\n    func main() {\n\n    \ttpl := template.Must(template.ParseGlob("*.gohtml"))\n    \ttpl.Execute(os.Stdout, &person{"Curtis", []int{7, 11, 94}})\n    }\n'})}),"\n",(0,a.jsx)(t.p,{children:"This code example passes a person structure and gets the 3rd favourite number from the FavNums slice."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.h4,{id:"the-and-function",children:["The ",(0,a.jsx)(t.code,{children:"and"})," Function"]}),"\n",(0,a.jsxs)(t.p,{children:["The and function returns the boolean AND of its arguments by returning the first empty argument or the last argument. ",(0,a.jsx)(t.code,{children:"and x y"})," behaves logically as ",(0,a.jsx)(t.code,{children:"if x then y else x"})," . Consider the following go code"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"    type User struct {\n      Admin bool\n    }\n\n    type ViewData struct {\n      *User\n    }\n"})}),"\n",(0,a.jsx)(t.p,{children:"Pass a ViewData with a User that has Admin set true to the following template"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"\n    {{if and .User .User.Admin}}\n      You are an admin user!\n    {{else}}\n      Access denied!\n    {{end}}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The result will be ",(0,a.jsx)(t.code,{children:"You are an admin user!"}),". However if the ViewData did not include a *User object or Admin was set as false then the result will be ",(0,a.jsx)(t.code,{children:"Access denied!"}),"."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.h4,{id:"the-or-function",children:["The ",(0,a.jsx)(t.code,{children:"or"})," Function"]}),"\n",(0,a.jsxs)(t.p,{children:["The or function operates similarly to the and function however will stop at the first true. ",(0,a.jsx)(t.code,{children:"or x y"})," is equivalent to ",(0,a.jsx)(t.code,{children:"if x then x else y"})," so y will never be evaluated if x is not empty."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.h4,{id:"the-not-function",children:["The ",(0,a.jsx)(t.code,{children:"not"})," Function"]}),"\n",(0,a.jsx)(t.p,{children:"The not function returns the boolean negation of the argument."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"    {{ if not .Authenticated}}\n      Access Denied!\n    {{ end }}\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"template-comparison-functions",children:"Template Comparison Functions"}),"\n",(0,a.jsx)(t.h4,{id:"comparisons",children:"Comparisons"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"html/template"})," package provides a variety of functions to do comparisons between operators. The operators may only be basic types or named basic types such as ",(0,a.jsx)(t.code,{children:"type Temp float32"})," Remember that template functions take the form ",(0,a.jsx)(t.code,{children:"{{ function arg1 arg2 }}"}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"eq"})," Returns the result of ",(0,a.jsx)(t.code,{children:"arg1 == arg2"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"ne"})," Returns the result of ",(0,a.jsx)(t.code,{children:"arg1 != arg2"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"lt"})," Returns the result of ",(0,a.jsx)(t.code,{children:"arg1 < arg2"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"le"})," Returns the result of ",(0,a.jsx)(t.code,{children:"arg1 <= arg2"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"gt"})," Returns the result of ",(0,a.jsx)(t.code,{children:"arg1 > arg2"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"ge"})," Returns the result of ",(0,a.jsx)(t.code,{children:"arg1 >= arg2"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Of special note ",(0,a.jsx)(t.code,{children:"eq"})," can be used with two or more arguments by comparing all arguments to the first. ",(0,a.jsx)(t.code,{children:"{{ eq arg1 arg2 arg3 arg4}}"})," will result in the following logical expression:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"arg1==arg2 || arg1==arg3 || arg1==arg4"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"nested-templates-and-layouts",children:"Nested Templates and Layouts"}),"\n",(0,a.jsx)(t.h4,{id:"nesting-templates",children:"Nesting Templates"}),"\n",(0,a.jsx)(t.p,{children:"Nested templates can be used for parts of code frequently used across templates, a footer or header for example. Rather than updating each template separately we can use a nested template that all other templates can use. You can define a template as follows:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'    {{define "footer"}}\n    <footer>\n    \t<p>Here is the footer</p>\n    </footer>\n    {{end}}\n'})}),"\n",(0,a.jsx)(t.p,{children:"A template named \u201cfooter\u201d is defined which can be used in other templates like so to add the footer template content into the other template:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'    {{template "footer"}}\n'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"passing-variables-between-templates",children:"Passing Variables between Templates"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"template"})," action used to include nested templates also allows a second parameter to pass data to the nested template."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'// Define a nested template called header \n{{define "header"}}\n<h1>{{.}}</h1>\n{{end}}\n\n// Call template and pass a name parameter \n{{range .Items}}\n<div class="item">\n  {{template "header" .Name}}\n  <span class="price">${{.Price}}</span>\n</div>\n{{end}}\n'})}),"\n",(0,a.jsx)(t.p,{children:"We use the same range to loop through Items as before but we pass the name to the header template each time in this simple example."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"creating-layouts",children:"Creating Layouts"}),"\n",(0,a.jsxs)(t.p,{children:["Glob patterns specify sets of filenames with wildcard characters. The ",(0,a.jsx)(t.code,{children:"template.ParseGlob(pattern string)"})," function will parse all templates that match the string pattern. ",(0,a.jsx)(t.code,{children:"template.ParseFiles(files...)"})," can also be used with a list of file names."]}),"\n",(0,a.jsxs)(t.p,{children:["The templates are named by default based on the base names of the argument files. This mean ",(0,a.jsx)(t.code,{children:"views/layouts/hello.gohtml"})," will have the name ",(0,a.jsx)(t.code,{children:"hello.gohtml"})," . If the template has a ",(0,a.jsx)(t.code,{children:"{{define \u201ctemplateName\u201d}}"})," within it then that name will be usable."]}),"\n",(0,a.jsxs)(t.p,{children:["A specific template can be executed using ",(0,a.jsx)(t.code,{children:'t.ExecuteTemplate(w, "templateName", nil)'})," . ",(0,a.jsx)(t.code,{children:"t"})," is an object of type Template, ",(0,a.jsx)(t.code,{children:"w"})," is type io.Writer such as an ",(0,a.jsx)(t.code,{children:"http.ResponseWriter"}),", Then there is the name of the template to execute, and finally passing any data to the template, in this case a nil value."]}),"\n",(0,a.jsx)(t.p,{children:"Example main.go file"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'    // Omitted imports & package\n\n    var LayoutDir string = "views/layouts"\n    var bootstrap *template.Template\n\n    func main() {\n    \tvar err error\n    \tbootstrap, err = template.ParseGlob(LayoutDir + "/*.gohtml")\n    \tif err != nil {\n    \t\tpanic(err)\n    \t}\n\n    \thttp.HandleFunc("/", handler)\n    \thttp.ListenAndServe(":8080", nil)\n    }\n\n    func handler(w http.ResponseWriter, r *http.Request) {\n    \tbootstrap.ExecuteTemplate(w, "bootstrap", nil)\n    }\n'})}),"\n",(0,a.jsxs)(t.p,{children:["All ",(0,a.jsx)(t.code,{children:".gohtml"})," files are parsed in main. When route ",(0,a.jsx)(t.code,{children:"/"})," is reached the template defined as ",(0,a.jsx)(t.code,{children:"bootstrap"})," is executed using the handler function."]}),"\n",(0,a.jsx)(t.p,{children:"Example views/layouts/bootstrap.gohtml file"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'    {{define "bootstrap"}}\n    <!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <title>Go Templates</title>\n        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"\n    \trel="stylesheet">\n      </head>\n      <body>\n        <div class="container-fluid">\n          <h1>Filler header</h1>\n    \t  <p>Filler paragraph</p>\n        </div>\n        \x3c!-- jquery & Bootstrap JS --\x3e\n        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"\n        <\/script>\n        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js">\n        <\/script>\n      </body>\n    </html>\n    {{end}}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"templates-calling-functions",children:"Templates Calling Functions"}),"\n",(0,a.jsx)(t.h4,{id:"function-variables-calling-struct-methods",children:"Function Variables (calling struct methods)"}),"\n",(0,a.jsx)(t.p,{children:"We can use templates to call the methods of objects in the template to return data. Consider the User struct with the following method."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'    type User struct {\n      ID    int\n      Email string\n    }\n\n    func (u User) HasPermission(feature string) bool {\n      if feature == "feature-a" {\n        return true\n      } else {\n        return false\n      }\n    }\n'})}),"\n",(0,a.jsx)(t.p,{children:"When a type User has been passed to the template we can then call this method from the template."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'{{if .User.HasPermission "feature-a"}}\n<div class="feature">\n  <h3>Feature A</h3>\n  <p>Some other stuff here...</p>\n</div>\n{{else}}\n<div class="feature disabled">\n  <h3>Feature A</h3>\n  <p>To enable Feature A please upgrade your plan</p>\n</div>\n{{end}}\n'})}),"\n",(0,a.jsx)(t.p,{children:"The template checks if the User HasPermission for the feature and renders depending on the result."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"function-variables-call",children:"Function Variables (call)"}),"\n",(0,a.jsxs)(t.p,{children:["If the Method HasPermission has to change at times then the Function Variables (Methods) implementation may not fit the design. Instead a ",(0,a.jsx)(t.code,{children:"HasPermission func(string) bool"})," attribute can be added on the ",(0,a.jsx)(t.code,{children:"User"})," type. This can then have a function assigned to it at creation."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'    // Structs\n    type ViewData struct {\n      User User\n    }\n\n    type User struct {\n      ID            int\n      Email         string\n      HasPermission func(string) bool\n    }\n\n    // Example of creating a ViewData\n    vd := ViewData{\n    \t\tUser: User{\n    \t\t\tID:    1,\n    \t\t\tEmail: "curtis.vermeeren@gmail.com",\n    \t\t\t// Create the HasPermission function\n    \t\t\tHasPermission: func(feature string) bool {\n    \t\t\t\tif feature == "feature-b" {\n    \t\t\t\t\treturn true\n    \t\t\t\t}\n    \t\t\t\treturn false\n    \t\t\t},\n    \t\t},\n    \t}\n\n    // Executing the ViewData with the template\n    err := testTemplate.Execute(w, vd)\n'})}),"\n",(0,a.jsxs)(t.p,{children:["We need to tell the Go template that we want to call this function so we must change the template from the Function Variables (Methods) implementation to do this. We use the ",(0,a.jsx)(t.code,{children:"call"})," keyword supplied by the go ",(0,a.jsx)(t.code,{children:"html/template"})," package. Changing the previous template to use ",(0,a.jsx)(t.code,{children:"call"})," results in:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'{{if (call .User.HasPermission "feature-b")}}\n<div class="feature">\n  <h3>Feature B</h3>\n  <p>Some other stuff here...</p>\n</div>\n{{else}}\n<div class="feature disabled">\n  <h3>Feature B</h3>\n  <p>To enable Feature B please upgrade your plan</p>\n</div>\n{{end}}\n'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"custom-functions",children:"Custom Functions"}),"\n",(0,a.jsxs)(t.p,{children:["Another way to call functions is to create custom functions with ",(0,a.jsx)(t.code,{children:"template.FuncMap"})," . This method creates global methods that can be used throughout the entire application. FuncMap has type ",(0,a.jsx)(t.code,{children:"map[string]interface{}"})," mapping a string, the function name, to a function. The mapped functions must have either a single return value, or two return values where the second has type error."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'    // Creating a template with function hasPermission\n    testTemplate, err = template.New("hello.gohtml").Funcs(template.FuncMap{\n        "hasPermission": func(user User, feature string) bool {\n          if user.ID == 1 && feature == "feature-a" {\n            return true\n          }\n          return false\n        },\n      }).ParseFiles("hello.gohtml")\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Here the function to check if a user has permission for a feature is mapped to the string ",(0,a.jsx)(t.code,{children:'"hasPermission"'})," and stored in the FuncMap. Note that the custom functions must be created before calling ",(0,a.jsx)(t.code,{children:"ParseFiles()"})]}),"\n",(0,a.jsx)(t.p,{children:"The function could be executed in the template as follows:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'    {{ if hasPermission .User "feature-a" }}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:".User"})," and string ",(0,a.jsx)(t.code,{children:'"feature-a"'})," are both passed to ",(0,a.jsx)(t.code,{children:"hasPermission"})," as arguments."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"custom-functions-globally",children:"Custom Functions (Globally)"}),"\n",(0,a.jsxs)(t.p,{children:["The previous two methods of custom functions rely on ",(0,a.jsx)(t.code,{children:".User"})," being passed to the template. This works in many cases but in a large application passing too many objects to a template can become difficult to maintain across many templates. We can change the implementation of the custom function to work without the .User being passed."]}),"\n",(0,a.jsxs)(t.p,{children:["Using a similar feature example as the other 2 sections first you would have to create a default ",(0,a.jsx)(t.code,{children:"hasPermission"})," function and define it in the template\u2019s function map."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'      testTemplate, err = template.New("hello.gohtml").Funcs(template.FuncMap{\n        "hasPermission": func(feature string) bool {\n          return false\n        },\n      }).ParseFiles("hello.gohtml")\n'})}),"\n",(0,a.jsxs)(t.p,{children:["This function could be placed in ",(0,a.jsx)(t.code,{children:"main()"})," or somewhere that ensures the default ",(0,a.jsx)(t.code,{children:"hasPermission"})," is created in the ",(0,a.jsx)(t.code,{children:"hello.gohtml"})," function map. The default function just returns false but it defines the function and implementation that doesn\u2019t require ",(0,a.jsx)(t.code,{children:"User"})," ."]}),"\n",(0,a.jsxs)(t.p,{children:["Next a closure could be used to redefine the ",(0,a.jsx)(t.code,{children:"hasPermission"})," function. It would use the ",(0,a.jsx)(t.code,{children:"User"})," data available when it is created in a handler rather than having ",(0,a.jsx)(t.code,{children:"User"})," data passed to it. Within the handler for the template you can redefine any functions to use the information available."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'    func handler(w http.ResponseWriter, r *http.Request) {\n    \tw.Header().Set("Content-Type", "text/html")\n\n    \tuser := User{\n    \t\tID:    1,\n    \t\tEmail: "Curtis.vermeeren@gmail.com",\n    \t}\n    \tvd := ViewData{}\n    \terr := testTemplate.Funcs(template.FuncMap{\n    \t\t"hasPermission": func(feature string) bool {\n    \t\t\tif user.ID == 1 && feature == "feature-a" {\n    \t\t\t\treturn true\n    \t\t\t}\n    \t\t\treturn false\n    \t\t},\n    \t}).Execute(w, vd)\n    \tif err != nil {\n    \t\thttp.Error(w, err.Error(), http.StatusInternalServerError)\n    \t}\n    }\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In this handler a ",(0,a.jsx)(t.code,{children:"User"})," is created with ID and Email, Then a ",(0,a.jsx)(t.code,{children:"ViewData"})," is created without passing the user to it. The ",(0,a.jsx)(t.code,{children:"hasPermission"})," function is redefined using ",(0,a.jsx)(t.code,{children:"user.ID"})," which is available when the function is created. ",(0,a.jsx)(t.code,{children:'{{if hasPermission "feature-a"}}'})," can be used in a template without having to pass a ",(0,a.jsx)(t.code,{children:"User"})," to the template as the User object in the handler is used instead."]}),"\n",(0,a.jsx)(t.hr,{})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var a=n(96540);const s={},l=a.createContext(s);function i(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);