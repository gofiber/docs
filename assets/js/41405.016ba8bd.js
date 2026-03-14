"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["41405"],{79719:function(e,t,a){function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{S:()=>i}),(0,a(22821).K2)(i,"populateCommonDb")},35436:function(e,t,a){a.d(t,{diagram:()=>v});var i=a(50942),l=a(79719),r=a(33794),s=a(59281),n=a(22821),o=a(70307),c=a(51345),p=s.UI.pie,d={sections:new Map,showData:!1,config:p},u=d.sections,f=d.showData,g=structuredClone(p),h=(0,n.K2)(()=>structuredClone(g),"getConfig"),m=(0,n.K2)(()=>{u=new Map,f=d.showData,(0,s.IU)()},"clear"),x=(0,n.K2)(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(e)||(u.set(e,t),n.Rm.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),w=(0,n.K2)(()=>u,"getSections"),S=(0,n.K2)(e=>{f=e},"setShowData"),$=(0,n.K2)(()=>f,"getShowData"),D={getConfig:h,clear:m,setDiagramTitle:s.ke,getDiagramTitle:s.ab,setAccTitle:s.SV,getAccTitle:s.iN,setAccDescription:s.EI,getAccDescription:s.m7,addSection:x,getSections:w,setShowData:S,getShowData:$},T=(0,n.K2)((e,t)=>{(0,l.S)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),y={parse:(0,n.K2)(async e=>{let t=await (0,o.qg)("pie",e);n.Rm.debug(t),T(t,D)},"parse")},C=(0,n.K2)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),b=(0,n.K2)(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),a=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1).sort((e,t)=>t.value-e.value);return(0,c.rLf)().value(e=>e.value)(a)},"createPieArcs"),v={parser:y,db:D,renderer:{draw:(0,n.K2)((e,t,a,l)=>{n.Rm.debug("rendering pie chart\n"+e);let o=l.db,p=(0,s.D7)(),d=(0,r.$t)(o.getConfig(),p.pie),u=(0,i.D)(t),f=u.append("g");f.attr("transform","translate(225,225)");let{themeVariables:g}=p,[h]=(0,r.I5)(g.pieOuterStrokeWidth);h??=2;let m=d.textPosition,x=(0,c.JLW)().innerRadius(0).outerRadius(185),w=(0,c.JLW)().innerRadius(185*m).outerRadius(185*m);f.append("circle").attr("cx",0).attr("cy",0).attr("r",185+h/2).attr("class","pieOuterCircle");let S=o.getSections(),$=b(S),D=[g.pie1,g.pie2,g.pie3,g.pie4,g.pie5,g.pie6,g.pie7,g.pie8,g.pie9,g.pie10,g.pie11,g.pie12],T=0;S.forEach(e=>{T+=e});let y=$.filter(e=>"0"!==(e.data.value/T*100).toFixed(0)),C=(0,c.UMr)(D);f.selectAll("mySlices").data(y).enter().append("path").attr("d",x).attr("fill",e=>C(e.data.label)).attr("class","pieCircle"),f.selectAll("mySlices").data(y).enter().append("text").text(e=>(e.data.value/T*100).toFixed(0)+"%").attr("transform",e=>"translate("+w.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),f.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let v=[...S.entries()].map(([e,t])=>({label:e,value:t})),k=f.selectAll(".legend").data(v).enter().append("g").attr("class","legend").attr("transform",(e,t)=>"translate(216,"+(22*t-22*v.length/2)+")");k.append("rect").attr("width",18).attr("height",18).style("fill",e=>C(e.label)).style("stroke",e=>C(e.label)),k.append("text").attr("x",22).attr("y",14).text(e=>o.getShowData()?`${e.label} [${e.value}]`:e.label);let A=512+Math.max(...k.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));u.attr("viewBox",`0 0 ${A} 450`),(0,s.a$)(u,450,A,d.useMaxWidth)},"draw")},styles:C}}}]);