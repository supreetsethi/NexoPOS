import{_ as V,o as i,a as r,F as h,r as p,b as v,t as b,e as d,n as f,f as w}from"./bootstrap.4fc50695.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";const S="modulepreload",m={},P="/build/",L=function(n,s){return!s||s.length===0?n():Promise.all(s.map(a=>{if(a=`${P}${a}`,a in m)return;m[a]=!0;const l=a.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const t=document.createElement("link");if(t.rel=l?"stylesheet":S,l||(t.as="script",t.crossOrigin=""),t.href=a,document.head.appendChild(t),l)return new Promise((o,u)=>{t.addEventListener("load",o),t.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>n())},y={name:"ns-numpad",props:["value","currency","floating","limit"],data(){return{number:parseInt(1+new Array(parseInt(ns.currency.ns_currency_precision)).fill("").map(e=>0).join("")),screenValue:0,order:null,cursor:parseInt(ns.currency.ns_currency_precision),orderSubscription:null,allSelected:!0,keys:[...[7,8,9].map(e=>({identifier:e,value:e})),...[4,5,6].map(e=>({identifier:e,value:e})),...[1,2,3].map(e=>({identifier:e,value:e})),{identifier:"backspace",icon:"la-backspace"},{identifier:0,value:0},{identifier:"next",value:V("Enter")}]}},mounted(){this.floating&&this.value>0?this.screenValue=parseFloat(this.value/this.number):this.screenValue=this.value||0;const e=new Array(10).fill("").map((n,s)=>s);nsHotPress.create("numpad-keys").whenVisible([".is-popup"]).whenPressed(e,(n,s)=>{this.inputValue({value:s})}),nsHotPress.create("numpad-backspace").whenVisible([".is-popup"]).whenPressed("backspace",()=>this.inputValue({identifier:"backspace"})),nsHotPress.create("numpad-increase").whenVisible([".is-popup"]).whenPressed("+",()=>this.increaseBy({value:1})),nsHotPress.create("numpad-reduce").whenVisible([".is-popup"]).whenPressed("-",()=>this.increaseBy({value:-1})),nsHotPress.create("numpad-save").whenVisible([".is-popup"]).whenPressed("enter",()=>this.inputValue({identifier:"next"}))},watch:{value(){this.value.toString().length>0?this.floating?this.screenValue=Math.round(this.value*this.number).toString():this.screenValue=this.value:this.screenValue=""}},beforeDestroy(){nsHotPress.destroy("numpad-backspace"),nsHotPress.destroy("numpad-increase"),nsHotPress.destroy("numpad-reduce"),nsHotPress.destroy("numpad-save")},methods:{increaseBy(e){let n=parseInt(1+new Array(this.cursor).fill("").map(s=>0).join(""));this.screenValue=(parseFloat(e.value)*n+(parseFloat(this.screenValue)||0)).toString(),this.allSelected=!1},inputValue(e){let n=parseInt(1+new Array(this.cursor).fill("").map(a=>0).join(""));if(e.identifier==="next"){this.$emit("next",this.floating&&this.screenValue.length>0?parseFloat(this.screenValue/n):this.screenValue);return}else if(e.identifier==="backspace")this.allSelected?(this.screenValue="0",this.allSelected=!1):this.screenValue=this.screenValue.toString().substr(0,this.screenValue.length-1);else if(e.value.toString().match(/^\d+$/)){if(this.limit>0&&this.screenValue.length>=this.limit)return;this.allSelected?(this.screenValue=e.value.toString(),this.allSelected=!1):(this.screenValue+=""+e.value.toString(),this.mode==="percentage"&&(this.screenValue=this.screenValue>100?100:this.screenValue))}const s=this.floating&&this.screenValue.length>0&&this.screenValue!=="0"?parseFloat(this.screenValue/this.number):this.screenValue;this.$emit("changed",s)}}},$={id:"numpad",class:"grid grid-flow-row grid-cols-3 grid-rows-3"},H=["onClick"],k={key:0};function x(e,n,s,a,l,c){return i(),r("div",$,[(i(!0),r(h,null,p(l.keys,(t,o)=>(i(),r("div",{onClick:u=>c.inputValue(t),key:o,class:"select-none ns-numpad-key border-l border-b h-24 font-bold flex items-center justify-center cursor-pointer"},[t.value!==void 0?(i(),r("span",k,b(t.value),1)):d("",!0),t.icon?(i(),r("i",{key:1,class:f(["las",t.icon])},null,2)):d("",!0)],8,H))),128)),v(e.$slots,"numpad-footer")])}var R=g(y,[["render",x]]);const B={name:"ns-numpad-plus",props:["value","currency","limit"],data(){return{screenValue:0,order:null,cursor:parseInt(ns.currency.ns_currency_precision),orderSubscription:null,allSelected:!0,keyRows:[[7,8,9].map(e=>({identifier:e,value:e})),[4,5,6].map(e=>({identifier:e,value:e})),[1,2,3].map(e=>({identifier:e,value:e})),[{identifier:".",value:"."},{identifier:0,value:0},{identifier:"backspace",icon:"la-backspace"}],[{identifier:"next",value:V("Enter")}]]}},mounted(){this.screenValue=this.value||0;const e=new Array(10).fill("").map((n,s)=>s);nsHotPress.create("numpad-keys").whenVisible([".is-popup"]).whenPressed(e,(n,s)=>{this.inputValue({value:s})}),nsHotPress.create("numpad-backspace").whenVisible([".is-popup"]).whenPressed("backspace",()=>this.inputValue({identifier:"backspace"})),nsHotPress.create("numpad-increase").whenVisible([".is-popup"]).whenPressed("+",()=>this.increaseBy({value:1})),nsHotPress.create("numpad-dot").whenVisible([".is-popup"]).whenPressed(".",()=>this.inputValue({identifier:"."})),nsHotPress.create("numpad-reduce").whenVisible([".is-popup"]).whenPressed("-",()=>this.increaseBy({value:-1})),nsHotPress.create("numpad-save").whenVisible([".is-popup"]).whenPressed("enter",()=>this.inputValue({identifier:"next"}))},watch:{value(){this.value.toString().length>0?this.screenValue=this.value:this.screenValue=""}},beforeDestroy(){nsHotPress.destroy("numpad-backspace"),nsHotPress.destroy("numpad-increase"),nsHotPress.destroy("numpad-reduce"),nsHotPress.destroy("numpad-save"),nsHotPress.destroy("numpad-dot")},methods:{increaseBy(e){this.screenValue=(parseFloat(e.value)+(parseFloat(this.screenValue)||0)).toString(),this.allSelected=!1},inputValue(e){if(e.identifier==="next"){this.$emit("next",this.screenValue);return}else if(e.identifier==="backspace")this.allSelected?(this.screenValue="0",this.allSelected=!1):this.screenValue=this.screenValue.toString().substr(0,this.screenValue.length-1);else if(e.identifier===".")this.allSelected?(this.screenValue="0.",this.allSelected=!1):this.screenValue.toString().match(/^[0-9][1-9]*\.[0-9]*$/)===null&&(this.screenValue=this.screenValue+=".");else if(e.value.toString().match(/^\d+$/)){if(this.limit>0&&this.screenValue.length>=this.limit)return;this.allSelected?(this.screenValue=e.value.toString(),this.allSelected=!1):(this.screenValue+=""+e.value.toString(),this.mode==="percentage"&&(this.screenValue=this.screenValue>100?100:this.screenValue))}this.$emit("changed",this.screenValue)}}},C={id:"numpad-holder"},F={id:"numpad",class:"grid grid-flow-row grid-cols-3 grid-rows-1 text-lg"},E=["onClick"],I={key:0};function j(e,n,s,a,l,c){return i(),r("div",C,[(i(!0),r(h,null,p(l.keyRows,(t,o)=>(i(),r("div",{key:o},[w("div",F,[(i(!0),r(h,null,p(t,(u,_)=>(i(),r("div",{onClick:A=>c.inputValue(u),key:_,class:f([t.length===1?"col-span-3":"","select-none ns-numpad-key border-l border-b h-24 font-bold flex items-center justify-center cursor-pointer"])},[u.value!==void 0?(i(),r("span",I,b(u.value),1)):d("",!0),u.icon?(i(),r("i",{key:1,class:f(["las",u.icon])},null,2)):d("",!0)],10,E))),128)),v(e.$slots,"numpad-footer")])]))),128))])}var q=g(B,[["render",j]]);export{L as _,q as a,R as n};