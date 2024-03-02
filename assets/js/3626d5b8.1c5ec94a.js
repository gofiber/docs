"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[63752],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,d=u["".concat(o,".").concat(c)]||u[c]||h[c]||i;return a?n.createElement(d,r(r({ref:t},m),{},{components:a})):n.createElement(d,r({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:l,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},27326:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const i={},r="Golang Templates Cheatsheet",s={unversionedId:"html/TEMPLATES_CHEATSHEET",id:"version-html_v2.x.x/html/TEMPLATES_CHEATSHEET",title:"Golang Templates Cheatsheet",description:"The Go standard library provides a set of packages to generate output. The text/template package implements templates for generating text output, while the html/template package implements templates for generating HTML output that is safe against certain attacks. Both packages use the same interface but the following examples of the core features are directed towards HTML applications.",source:"@site/template_versioned_docs/version-html_v2.x.x/html/TEMPLATES_CHEATSHEET.md",sourceDirName:"html",slug:"/html/TEMPLATES_CHEATSHEET",permalink:"/template/html_v2.x.x/html/TEMPLATES_CHEATSHEET",draft:!1,editUrl:"https://github.com/gofiber/template/edit/master/html/TEMPLATES_CHEATSHEET.md",tags:[],version:"html_v2.x.x",lastUpdatedAt:1709403067,formattedLastUpdatedAt:"Mar 2, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTML",permalink:"/template/html_v2.x.x/html/"},next:{title:"Jet",permalink:"/template/html_v2.x.x/jet/"}},o={},p=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Parsing and Creating Templates",id:"parsing-and-creating-templates",level:2},{value:"Naming Templates",id:"naming-templates",level:4},{value:"Creating a Template",id:"creating-a-template",level:4},{value:"Parsing Multiple Templates",id:"parsing-multiple-templates",level:4},{value:"Executing Templates",id:"executing-templates",level:2},{value:"Execute a Single Template",id:"execute-a-single-template",level:4},{value:"Executing a Named Template",id:"executing-a-named-template",level:4},{value:"Template Encoding and HTML",id:"template-encoding-and-html",level:2},{value:"Contextual Encoding",id:"contextual-encoding",level:4},{value:"Safe Strings and HTML Comments",id:"safe-strings-and-html-comments",level:4},{value:"Template Variables",id:"template-variables",level:2},{value:"The dot character (.)",id:"the-dot-character-",level:4},{value:"Variables in Templates",id:"variables-in-templates",level:4},{value:"Template Actions",id:"template-actions",level:2},{value:"If/Else Statements",id:"ifelse-statements",level:4},{value:"Removing Whitespace",id:"removing-whitespace",level:4},{value:"Range Blocks",id:"range-blocks",level:4},{value:"Template Functions",id:"template-functions",level:2},{value:"Indexing structures in Templates",id:"indexing-structures-in-templates",level:4},{value:"The <code>and</code> Function",id:"the-and-function",level:4},{value:"The <code>or</code> Function",id:"the-or-function",level:4},{value:"The <code>not</code> Function",id:"the-not-function",level:4},{value:"Template Comparison Functions",id:"template-comparison-functions",level:2},{value:"Comparisons",id:"comparisons",level:4},{value:"Nested Templates and Layouts",id:"nested-templates-and-layouts",level:2},{value:"Nesting Templates",id:"nesting-templates",level:4},{value:"Passing Variables between Templates",id:"passing-variables-between-templates",level:4},{value:"Creating Layouts",id:"creating-layouts",level:4},{value:"Templates Calling Functions",id:"templates-calling-functions",level:2},{value:"Function Variables (calling struct methods)",id:"function-variables-calling-struct-methods",level:4},{value:"Function Variables (call)",id:"function-variables-call",level:4},{value:"Custom Functions",id:"custom-functions",level:4},{value:"Custom Functions (Globally)",id:"custom-functions-globally",level:4}],m={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"golang-templates-cheatsheet"},"Golang Templates Cheatsheet"),(0,l.kt)("p",null,"The Go standard library provides a set of packages to generate output. The ",(0,l.kt)("a",{parentName:"p",href:"https://archive.is/o/2HksZ/https://golang.org/pkg/text/template/"},"text/template")," package implements templates for generating text output, while the ",(0,l.kt)("a",{parentName:"p",href:"https://archive.is/o/2HksZ/https://golang.org/pkg/html/template/"},"html/template")," package implements templates for generating HTML output that is safe against certain attacks. Both packages use the same interface but the following examples of the core features are directed towards HTML applications."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#parsing-and-creating-templates"},"Parsing and Creating Templates")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#executing-templates"},"Executing Templates")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#template-encoding-and-html"},"Template Encoding and HTML")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#template-variables"},"Template Variables")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#template-actions"},"Template Actions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#template-functions"},"Template Functions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#template-comparison-functions"},"Template Comparison Functions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#nested-templates-and-layouts"},"Nested Templates and Layouts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#templates-calling-functions"},"Templates Calling Functions"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"parsing-and-creating-templates"},"Parsing and Creating Templates"),(0,l.kt)("h4",{id:"naming-templates"},"Naming Templates"),(0,l.kt)("p",null,"There is no defined file extension for Go templates. One of the most popular is ",(0,l.kt)("inlineCode",{parentName:"p"},".tmpl")," supported by vim-go and ",(0,l.kt)("a",{parentName:"p",href:"https://archive.is/o/2HksZ/golang.org/pkg/text/template/%23example_Template_helpers"},"referenced in the text/template godocs"),". The extension ",(0,l.kt)("inlineCode",{parentName:"p"},".gohtml")," supports syntax highlighting in both Atom and GoSublime editors. Finally analysis of large Go codebases finds that ",(0,l.kt)("inlineCode",{parentName:"p"},".tpl")," is often used by developers. While the extension is not important it is still good to be consistent within a project for clarity."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"creating-a-template"},"Creating a Template"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tpl, err := template.Parse(filename)")," will get the template at filename and store it in tpl. tpl can then be executed to show the template."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"parsing-multiple-templates"},"Parsing Multiple Templates"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"template.ParseFiles(filenames)")," takes a list of filenames and stores all templates. ",(0,l.kt)("inlineCode",{parentName:"p"},"template.ParseGlob(pattern)")," will find all templates matching the pattern and store the templates."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"executing-templates"},"Executing Templates"),(0,l.kt)("h4",{id:"execute-a-single-template"},"Execute a Single Template"),(0,l.kt)("p",null,"Once a template has been parsed there are two options to execute them. A single template ",(0,l.kt)("inlineCode",{parentName:"p"},"tpl")," can be executed using ",(0,l.kt)("inlineCode",{parentName:"p"},"tpl.Execute(io.Writer, data)"),". The content of tpl will be written to the io.Writer. Data is an interface passed to the template that will be useable in the template."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"executing-a-named-template"},"Executing a Named Template"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tpl.ExecuteTemplate(io.Writer, name, data)")," works the same as execute but allows for a string name of the template the user wants to execute."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"template-encoding-and-html"},"Template Encoding and HTML"),(0,l.kt)("h4",{id:"contextual-encoding"},"Contextual Encoding"),(0,l.kt)("p",null,"Go\u2019s html/template package does encoding based on the context of the code. As a result, html/template encodes any characters that need encoding to be rendered correctly."),(0,l.kt)("p",null,"For example the < and > in ",(0,l.kt)("inlineCode",{parentName:"p"},'"<h1>A header!</h1>"')," will be encoded as ",(0,l.kt)("inlineCode",{parentName:"p"},"&lt;h1&gt;A header!&lt;/h1&gt;")," ."),(0,l.kt)("p",null,"Type ",(0,l.kt)("inlineCode",{parentName:"p"},"template.HTML")," can be used to skip encoding by telling Go the string is safe. ",(0,l.kt)("inlineCode",{parentName:"p"},'template.HTML("<h1>A Safe header</h1>")')," will then be ",(0,l.kt)("inlineCode",{parentName:"p"},"<h1>A Safe header</h1>")," . Using this type with user input is dangerous and leaves the application vulnerable."),(0,l.kt)("p",null,"The go ",(0,l.kt)("inlineCode",{parentName:"p"},"html/template")," package is aware of attributes within the template and will encode values differently based on the attribute."),(0,l.kt)("p",null,"Go templates can also be used with javascript. Structs and maps will be expanded into JSON objects and quotes will be added to strings for use in function parameters and as variable values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    // Go\n    type Cat struct {\n        Name string\n        Age int\n    }\n\n    kitten := Cat{"Sam", 12}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"// Template\n<script>\n  var cat = {{.kitten}}\n<\/script>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'    // Javascript\n    var cat = {"Name":"Sam", "Age" 12}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"safe-strings-and-html-comments"},"Safe Strings and HTML Comments"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"html/template")," package will remove any comments from a template by default. This can cause issues when comments are necessary such as detecting internet explorer."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!--[if IE]>\n  Place content here to target all Internet Explorer users.\n<![endif]--\x3e\n")),(0,l.kt)("p",null,"We can use the Custom Functions method (Globally) to create a function that returns html preserving comments. Define a function ",(0,l.kt)("inlineCode",{parentName:"p"},"htmlSafe")," in the FuncMap of the template."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    testTemplate, err = template.New("hello.gohtml").Funcs(template.FuncMap{\n        "htmlSafe": func(html string) template.HTML {\n            return template.HTML(html)\n        },\n    }).ParseFiles("hello.gohtml")\n')),(0,l.kt)("p",null,"This function takes a string and produces the unaltered HTML code. This function can be used in a template like so to preserve the comments ",(0,l.kt)("inlineCode",{parentName:"p"},"\x3c!--[if IE 6]>")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"<![endif]--\x3e")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    {{htmlSafe "\x3c!--[if IE 6]>" }}\n    <meta http-equiv="Content-Type" content="text/html; charset=Unicode">\n    {{ htmlSafe "<![endif]--\x3e" }}\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"template-variables"},"Template Variables"),(0,l.kt)("h4",{id:"the-dot-character-"},"The dot character (.)"),(0,l.kt)("p",null,"A template variable can be a boolean, string, character, integer, floating-point, imaginary, or complex constant in Go syntax. Data passed to the template can be accessed using dot ",(0,l.kt)("inlineCode",{parentName:"p"},"{{ . }}"),"."),(0,l.kt)("p",null,"If the data is a complex type then it\u2019s fields can be accessed using the dot with the field name ",(0,l.kt)("inlineCode",{parentName:"p"},"{{ .FieldName }}"),"."),(0,l.kt)("p",null,"Dots can be chained together if the data contains multiple complex structures. ",(0,l.kt)("inlineCode",{parentName:"p"},"{{ .Struct.StructTwo.Field }}")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"variables-in-templates"},"Variables in Templates"),(0,l.kt)("p",null,"Data passed to the template can be saved in a variable and used throughout the template. ",(0,l.kt)("inlineCode",{parentName:"p"},"{{$number := .}}")," We use the ",(0,l.kt)("inlineCode",{parentName:"p"},"$number")," to create a variable then initialize it with the value passed to the template. To use the variable we call it in the template with ",(0,l.kt)("inlineCode",{parentName:"p"},"{{$number}}"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"    {{$number := .}}\n    <h1> It is day number {{$number}} of the month </h1>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    var tpl *template.Template\n\n    tpl = template.Must(template.ParseFiles("templateName"))\n\n    err := tpl.ExecuteTemplate(os.Stdout, "templateName", 23)\n')),(0,l.kt)("p",null,"In this example we pass 23 to the template and stored in the ",(0,l.kt)("inlineCode",{parentName:"p"},"$number")," variable which can be used anywhere in the template"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"template-actions"},"Template Actions"),(0,l.kt)("h4",{id:"ifelse-statements"},"If/Else Statements"),(0,l.kt)("p",null,"Go templates support if/else statements like many programming languages. We can use the if statement to check for values, if it doesn\u2019t exist we can use an else value. The empty values are false, 0, any nil pointer or interface value, and any array, slice, map, or string of length zero."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Hello, {{if .Name}} {{.Name}} {{else}} Anonymous {{end}}!</h1>\n")),(0,l.kt)("p",null,"If .Name exists then ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello, Name")," will be printed (replaced with the name value) otherwise it will print ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello, Anonymous"),"."),(0,l.kt)("p",null,"Templates also provide the else if statment ",(0,l.kt)("inlineCode",{parentName:"p"},"{{else if .Name2 }}")," which can be used to evaluate other options after an if."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"removing-whitespace"},"Removing Whitespace"),(0,l.kt)("p",null,"Adding different values to a template can add various amounts of whitespace. We can either change our template to better handle it, by ignoring or minimizing effects, or we can use the minus sign ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," within out template."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<h1>Hello, {{if .Name}} {{.Name}} {{- else}} Anonymous {{- end}}!</h1>")),(0,l.kt)("p",null,"Here we are telling the template to remove all spaces between the ",(0,l.kt)("inlineCode",{parentName:"p"},"Name")," variable and whatever comes after it. We are doing the same with the end keyword. This allows us to have whitespace within the template for easier reading but remove it in production."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"range-blocks"},"Range Blocks"),(0,l.kt)("p",null,"Go templates have a ",(0,l.kt)("inlineCode",{parentName:"p"},"range")," keyword to iterate over all objects in a structure. Suppose we had the Go structures:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"    type Item struct {\n        Name  string\n        Price int\n    }\n\n    type ViewData struct {\n        Name  string\n        Items []Item\n    }\n")),(0,l.kt)("p",null,"We have an Item, with a name and price, then a ViewData which is the structure sent to the template. Consider the template containing the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'{{range .Items}}\n<div class="item">\n  <h3 class="name">{{.Name}}</h3>\n  <span class="price">${{.Price}}</span>\n</div>\n{{end}}\n')),(0,l.kt)("p",null,"For each Item in the range of Items (in the ViewData structure) get the Name and Price of that item and create html for each Item automatically. Within a range each Item becomes the ",(0,l.kt)("inlineCode",{parentName:"p"},"{{.}}")," and the item properties therefore become ",(0,l.kt)("inlineCode",{parentName:"p"},"{{.Name}}")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"{{.Price}}")," in this example."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"template-functions"},"Template Functions"),(0,l.kt)("p",null,"The template package provides a list of predefined global functions. Below are some of the most used."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"indexing-structures-in-templates"},"Indexing structures in Templates"),(0,l.kt)("p",null,"If the data passed to the template is a map, slice, or array it can be indexed from the template. We use ",(0,l.kt)("inlineCode",{parentName:"p"},"{{index x number}}")," where index is the keyword, x is the data and number is a integer for the index value. If we had ",(0,l.kt)("inlineCode",{parentName:"p"},"{{index names 2}}")," it is equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"names[2]"),". We can add more integers to index deeper into data. ",(0,l.kt)("inlineCode",{parentName:"p"},"{{index names 2 3 4}}")," is equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"names[2][3][4]"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <h1>{{index .FavNums 2 }}</h1>\n</body>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    type person struct {\n        Name    string\n        FavNums []int\n    }\n\n    func main() {\n\n        tpl := template.Must(template.ParseGlob("*.gohtml"))\n        tpl.Execute(os.Stdout, &person{"Curtis", []int{7, 11, 94}})\n    }\n')),(0,l.kt)("p",null,"This code example passes a person structure and gets the 3rd favourite number from the FavNums slice."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"the-and-function"},"The ",(0,l.kt)("inlineCode",{parentName:"h4"},"and")," Function"),(0,l.kt)("p",null,"The and function returns the boolean AND of its arguments by returning the first empty argument or the last argument. ",(0,l.kt)("inlineCode",{parentName:"p"},"and x y")," behaves logically as ",(0,l.kt)("inlineCode",{parentName:"p"},"if x then y else x")," . Consider the following go code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"    type User struct {\n      Admin bool\n    }\n\n    type ViewData struct {\n      *User\n    }\n")),(0,l.kt)("p",null,"Pass a ViewData with a User that has Admin set true to the following template"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"\n    {{if and .User .User.Admin}}\n      You are an admin user!\n    {{else}}\n      Access denied!\n    {{end}}\n")),(0,l.kt)("p",null,"The result will be ",(0,l.kt)("inlineCode",{parentName:"p"},"You are an admin user!"),". However if the ViewData did not include a ","*","User object or Admin was set as false then the result will be ",(0,l.kt)("inlineCode",{parentName:"p"},"Access denied!"),"."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"the-or-function"},"The ",(0,l.kt)("inlineCode",{parentName:"h4"},"or")," Function"),(0,l.kt)("p",null,"The or function operates similarly to the and function however will stop at the first true. ",(0,l.kt)("inlineCode",{parentName:"p"},"or x y")," is equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"if x then x else y")," so y will never be evaluated if x is not empty."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"the-not-function"},"The ",(0,l.kt)("inlineCode",{parentName:"h4"},"not")," Function"),(0,l.kt)("p",null,"The not function returns the boolean negation of the argument."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"    {{ if not .Authenticated}}\n      Access Denied!\n    {{ end }}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"template-comparison-functions"},"Template Comparison Functions"),(0,l.kt)("h4",{id:"comparisons"},"Comparisons"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"html/template")," package provides a variety of functions to do comparisons between operators. The operators may only be basic types or named basic types such as ",(0,l.kt)("inlineCode",{parentName:"p"},"type Temp float32")," Remember that template functions take the form ",(0,l.kt)("inlineCode",{parentName:"p"},"{{ function arg1 arg2 }}"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"eq")," Returns the result of arg1 == arg2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ne")," Returns the result of arg1 != arg2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lt")," Returns the result of arg1 < arg2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"le")," Returns the result of arg1 <= arg2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gt")," Returns the result of arg1 > arg2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ge")," Returns the result of arg1 >= arg2")),(0,l.kt)("p",null,"Of special note ",(0,l.kt)("inlineCode",{parentName:"p"},"eq")," can be used with two or more arguments by comparing all arguments to the first. ",(0,l.kt)("inlineCode",{parentName:"p"},"{{ eq arg1 arg2 arg3 arg4}}")," will result in the following logical expression:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"arg1==arg2 || arg1==arg3 || arg1==arg4")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"nested-templates-and-layouts"},"Nested Templates and Layouts"),(0,l.kt)("h4",{id:"nesting-templates"},"Nesting Templates"),(0,l.kt)("p",null,"Nested templates can be used for parts of code frequently used across templates, a footer or header for example. Rather than updating each template separately we can use a nested template that all other templates can use. You can define a template as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    {{define "footer"}}\n    <footer>\n        <p>Here is the footer</p>\n    </footer>\n    {{end}}\n')),(0,l.kt)("p",null,"A template named \u201cfooter\u201d is defined which can be used in other templates like so to add the footer template content into the other template:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    {{template "footer"}}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"passing-variables-between-templates"},"Passing Variables between Templates"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"template")," action used to include nested templates also allows a second parameter to pass data to the nested template."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'// Define a nested template called header \n{{define "header"}}\n<h1>{{.}}</h1>\n{{end}}\n\n// Call template and pass a name parameter \n{{range .Items}}\n<div class="item">\n  {{template "header" .Name}}\n  <span class="price">${{.Price}}</span>\n</div>\n{{end}}\n')),(0,l.kt)("p",null,"We use the same range to loop through Items as before but we pass the name to the header template each time in this simple example."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"creating-layouts"},"Creating Layouts"),(0,l.kt)("p",null,"Glob patterns specify sets of filenames with wildcard characters. The ",(0,l.kt)("inlineCode",{parentName:"p"},"template.ParseGlob(pattern string)")," function will parse all templates that match the string pattern. ",(0,l.kt)("inlineCode",{parentName:"p"},"template.ParseFiles(files...)")," can also be used with a list of file names."),(0,l.kt)("p",null,"The templates are named by default based on the base names of the argument files. This mean ",(0,l.kt)("inlineCode",{parentName:"p"},"views/layouts/hello.gohtml")," will have the name ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.gohtml")," . If the template has a `",(0,l.kt)("inlineCode",{parentName:"p"},"{{define \u201ctemplateName\u201d}}")," within it then that name will be usable."),(0,l.kt)("p",null,"A specific template can be executed using ",(0,l.kt)("inlineCode",{parentName:"p"},'t.ExecuteTemplate(w, "templateName", nil)')," . ",(0,l.kt)("inlineCode",{parentName:"p"},"t")," is an object of type Template, ",(0,l.kt)("inlineCode",{parentName:"p"},"w")," is type io.Writer such as an ",(0,l.kt)("inlineCode",{parentName:"p"},"http.ResponseWriter"),", Then there is the name of the template to execute, and finally passing any data to the template, in this case a nil value."),(0,l.kt)("p",null,"Example main.go file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    // Omitted imports & package\n\n    var LayoutDir string = "views/layouts"\n    var bootstrap *template.Template\n\n    func main() {\n        var err error\n        bootstrap, err = template.ParseGlob(LayoutDir + "/*.gohtml")\n        if err != nil {\n            panic(err)\n        }\n\n        http.HandleFunc("/", handler)\n        http.ListenAndServe(":8080", nil)\n    }\n\n    func handler(w http.ResponseWriter, r *http.Request) {\n        bootstrap.ExecuteTemplate(w, "bootstrap", nil)\n    }\n')),(0,l.kt)("p",null,"All ",(0,l.kt)("inlineCode",{parentName:"p"},".gohtml")," files are parsed in main. When route ",(0,l.kt)("inlineCode",{parentName:"p"},"/")," is reached the template defined as ",(0,l.kt)("inlineCode",{parentName:"p"},"bootstrap")," is executed using the handler function."),(0,l.kt)("p",null,"Example views/layouts/bootstrap.gohtml file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'    {{define "bootstrap"}}\n    <!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <title>Go Templates</title>\n        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"\n        rel="stylesheet">\n      </head>\n      <body>\n        <div class="container-fluid">\n          <h1>Filler header</h1>\n          <p>Filler paragraph</p>\n        </div>\n        \x3c!-- jquery & Bootstrap JS --\x3e\n        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"\n        <\/script>\n        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js">\n        <\/script>\n      </body>\n    </html>\n    {{end}}\n')),(0,l.kt)("h2",{id:"templates-calling-functions"},"Templates Calling Functions"),(0,l.kt)("h4",{id:"function-variables-calling-struct-methods"},"Function Variables (calling struct methods)"),(0,l.kt)("p",null,"We can use templates to call the methods of objects in the template to return data. Consider the User struct with the following method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    type User struct {\n      ID    int\n      Email string\n    }\n\n    func (u User) HasPermission(feature string) bool {\n      if feature == "feature-a" {\n        return true\n      } else {\n        return false\n      }\n    }\n')),(0,l.kt)("p",null,"When a type User has been passed to the template we can then call this method from the template."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'{{if .User.HasPermission "feature-a"}}\n<div class="feature">\n  <h3>Feature A</h3>\n  <p>Some other stuff here...</p>\n</div>\n{{else}}\n<div class="feature disabled">\n  <h3>Feature A</h3>\n  <p>To enable Feature A please upgrade your plan</p>\n</div>\n{{end}}\n')),(0,l.kt)("p",null,"The template checks if the User HasPermission for the feature and renders depending on the result."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"function-variables-call"},"Function Variables (call)"),(0,l.kt)("p",null,"If the Method HasPermission has to change at times then the Function Variables (Methods) implementation may not fit the design. Instead a ",(0,l.kt)("inlineCode",{parentName:"p"},"HasPermission func(string) bool")," attribute can be added on the ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," type. This can then have a function assigned to it at creation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    // Structs\n    type ViewData struct {\n      User User\n    }\n\n    type User struct {\n      ID            int\n      Email         string\n      HasPermission func(string) bool\n    }\n\n    // Example of creating a ViewData\n    vd := ViewData{\n            User: User{\n                ID:    1,\n                Email: "curtis.vermeeren@gmail.com",\n                // Create the HasPermission function\n                HasPermission: func(feature string) bool {\n                    if feature == "feature-b" {\n                        return true\n                    }\n                    return false\n                },\n            },\n        }\n\n    // Executing the ViewData with the template\n    err := testTemplate.Execute(w, vd)\n')),(0,l.kt)("p",null,"We need to tell the Go template that we want to call this function so we must change the template from the Function Variables (Methods) implementation to do this. We use the ",(0,l.kt)("inlineCode",{parentName:"p"},"call")," keyword supplied by the go ",(0,l.kt)("inlineCode",{parentName:"p"},"html/template")," package. Changing the previous template to use ",(0,l.kt)("inlineCode",{parentName:"p"},"call")," results in:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'{{if (call .User.HasPermission "feature-b")}}\n<div class="feature">\n  <h3>Feature B</h3>\n  <p>Some other stuff here...</p>\n</div>\n{{else}}\n<div class="feature disabled">\n  <h3>Feature B</h3>\n  <p>To enable Feature B please upgrade your plan</p>\n</div>\n{{end}}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"custom-functions"},"Custom Functions"),(0,l.kt)("p",null,"Another way to call functions is to create custom functions with ",(0,l.kt)("inlineCode",{parentName:"p"},"template.FuncMap")," . This method creates global methods that can be used throughout the entire application. FuncMap has type ",(0,l.kt)("inlineCode",{parentName:"p"},"map[string]interface{}")," mapping a string, the function name, to a function. The mapped functions must have either a single return value, or two return values where the second has type error."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    // Creating a template with function hasPermission\n    testTemplate, err = template.New("hello.gohtml").Funcs(template.FuncMap{\n        "hasPermission": func(user User, feature string) bool {\n          if user.ID == 1 && feature == "feature-a" {\n            return true\n          }\n          return false\n        },\n      }).ParseFiles("hello.gohtml")\n')),(0,l.kt)("p",null,"Here the function to check if a user has permission for a feature is mapped to the string ",(0,l.kt)("inlineCode",{parentName:"p"},'"hasPermission"')," and stored in the FuncMap. Note that the custom functions must be created before calling ",(0,l.kt)("inlineCode",{parentName:"p"},"ParseFiles()")),(0,l.kt)("p",null,"The function could be executed in the template as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    {{ if hasPermission .User "feature-a" }}\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".User")," and string ",(0,l.kt)("inlineCode",{parentName:"p"},'"feature-a"')," are both passed to ",(0,l.kt)("inlineCode",{parentName:"p"},"hasPermission")," as arguments."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"custom-functions-globally"},"Custom Functions (Globally)"),(0,l.kt)("p",null,"The previous two methods of custom functions rely on ",(0,l.kt)("inlineCode",{parentName:"p"},".User")," being passed to the template. This works in many cases but in a large application passing too many objects to a template can become difficult to maintain across many templates. We can change the implementation of the custom function to work without the .User being passed."),(0,l.kt)("p",null,"Using a similar feature example as the other 2 sections first you would have to create a default ",(0,l.kt)("inlineCode",{parentName:"p"},"hasPermission")," function and define it in the template\u2019s function map."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'      testTemplate, err = template.New("hello.gohtml").Funcs(template.FuncMap{\n        "hasPermission": func(feature string) bool {\n          return false\n        },\n      }).ParseFiles("hello.gohtml")\n')),(0,l.kt)("p",null,"This function could be placed in ",(0,l.kt)("inlineCode",{parentName:"p"},"main()")," or somewhere that ensures the default ",(0,l.kt)("inlineCode",{parentName:"p"},"hasPermission")," is created in the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.gohtml")," function map. The default function just returns false but it defines the function and implementation that doesn\u2019t require ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," ."),(0,l.kt)("p",null,"Next a closure could be used to redefine the ",(0,l.kt)("inlineCode",{parentName:"p"},"hasPermission")," function. It would use the ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," data available when it is created in a handler rather than having ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," data passed to it. Within the handler for the template you can redefine any functions to use the information available."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    func handler(w http.ResponseWriter, r *http.Request) {\n        w.Header().Set("Content-Type", "text/html")\n\n        user := User{\n            ID:    1,\n            Email: "Curtis.vermeeren@gmail.com",\n        }\n        vd := ViewData{}\n        err := testTemplate.Funcs(template.FuncMap{\n            "hasPermission": func(feature string) bool {\n                if user.ID == 1 && feature == "feature-a" {\n                    return true\n                }\n                return false\n            },\n        }).Execute(w, vd)\n        if err != nil {\n            http.Error(w, err.Error(), http.StatusInternalServerError)\n        }\n    }\n')),(0,l.kt)("p",null,"In this handler a ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," is created with ID and Email, Then a ",(0,l.kt)("inlineCode",{parentName:"p"},"ViewData")," is created without passing the user to it. The ",(0,l.kt)("inlineCode",{parentName:"p"},"hasPermission")," function is redefined using ",(0,l.kt)("inlineCode",{parentName:"p"},"user.ID")," which is available when the function is created. ",(0,l.kt)("inlineCode",{parentName:"p"},'{{if hasPermission "feature-a"}}')," can be used in a template without having to pass a ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," to the template as the User object in the handler is used instead."),(0,l.kt)("hr",null))}h.isMDXComponent=!0}}]);