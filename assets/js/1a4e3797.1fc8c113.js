"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[97920],{42027:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Z});var a=r(67294),n=r(52263),l=r(46375),s=r(35742),c=r(39960),o=r(95999);const u=["zero","one","two","few","many","other"];function m(e){return u.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:m(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:m(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function p(){const e=i();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),l=r.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(r,t,e)}}var d=r(86010),g=r(16550),f=r(72389);const y="q",E="ctx",S="version";const C=function(){const e=(0,f.Z)(),t=(0,g.k6)(),r=(0,g.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),l=e?new URLSearchParams(r.search):null,s=(null==l?void 0:l.get(y))||"",c=(null==l?void 0:l.get(E))||"",o=(null==l?void 0:l.get(S))||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set(y,e):t.delete(y),t};return{searchValue:s,searchContext:c,searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const a=new URLSearchParams(r.search);a.set(E,e),t.replace({search:a.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${a}search?${t.toString()}`}}};var I=r(90022),v=r(98202),x=r(82539),w=r(10726),R=r(91073),P=r(80311),b=r(73926),_=r(61029);const F={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};function k(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=p(),{searchValue:r,searchContext:l,searchVersion:c,updateSearchPath:u,updateSearchContext:m}=C(),[h,i]=(0,a.useState)(r),[g,f]=(0,a.useState)(),[y,E]=(0,a.useState)(),S=`${e}${c}`,x=(0,a.useMemo)((()=>h?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:h}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[h]);(0,a.useEffect)((()=>{u(h),g&&(h?g(h,(e=>{E(e)})):E(void 0))}),[h,g]);const w=(0,a.useCallback)((e=>{i(e.target.value)}),[]);return(0,a.useEffect)((()=>{r&&r!==h&&i(r)}),[r]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,I.w)(S,l);f((()=>(0,v.v)(e,t,100)))}()}),[l,S]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,x)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,x),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",{[F.searchQueryColumn]:Array.isArray(_.Kc),"col--9":Array.isArray(_.Kc),"col--12":!Array.isArray(_.Kc)})},a.createElement("input",{type:"search",name:"q",className:F.searchQueryInput,"aria-label":"Search",onChange:w,value:h,autoComplete:"off",autoFocus:!0})),Array.isArray(_.Kc)?a.createElement("div",{className:(0,d.Z)("col","col--3","padding-left--none",F.searchContextColumn)},a.createElement("select",{name:"search-context",className:F.searchContextInput,id:"context-selector",value:l,onChange:e=>m(e.target.value)},a.createElement("option",{value:""},_.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),_.Kc.map((e=>a.createElement("option",{key:e,value:e},e))))):null),!g&&h&&a.createElement("div",null,a.createElement(P.Z,null)),y&&(y.length>0?a.createElement("p",null,t(y.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:y.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,y&&y.map((e=>a.createElement($,{key:e.document.i,searchResult:e}))))))}function $(e){let{searchResult:{document:t,type:r,page:n,tokens:l,metadata:s}}=e;const o=0===r,u=2===r,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(_.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return a.createElement("article",{className:F.searchResultItem},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,x.C)(h,l):(0,w.o)(h,(0,R.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:F.searchResultItemPath},(0,b.e)(m)),u&&a.createElement("p",{className:F.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,w.o)(t.t,(0,R.m)(s,"t"),l,100)}}))}const Z=function(){return a.createElement(l.Z,null,a.createElement(k,null))}}}]);