import{F as g,a as x,b as w}from"./bootstrap.1adf5f09.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import{b1 as n,aB as l,aC as t,ap as u,M as h,b6 as p,z as b,br as k,b8 as f,am as m,aG as C}from"./runtime-core.esm-bundler.db039fbe.js";import"./lang.2d0006f0.js";import"./runtime-dom.esm-bundler.febf7d20.js";const S={name:"ns-pos-shipping-popup",computed:{activeTabFields(){if(this.tabs!==null){for(let e in this.tabs)if(this.tabs[e].active)return this.tabs[e].fields}return[]},useBillingInfo(){return this.tabs!==null?this.tabs.billing.fields[0].value:new Object},useShippingInfo(){return this.tabs!==null?this.tabs.shipping.fields[0].value:new Object}},destroyed(){this.orderSubscription.unsubscribe()},mounted(){this.$popup.event.subscribe(e=>{e.event==="click-overlay"&&this.resolveIfQueued(!1)}),this.orderSubscription=POS.order.subscribe(e=>this.order=e),this.loadForm()},data(){return{tabs:null,orderSubscription:null,order:null,formValidation:new g}},watch:{useBillingInfo(e){e===1&&this.tabs.billing.fields.forEach(s=>{s.name!=="_use_customer_billing"&&(s.value=this.order.customer.billing?this.order.customer.billing[s.name]:s.value)})},useShippingInfo(e){e===1&&this.tabs.shipping.fields.forEach(s=>{s.name!=="_use_customer_shipping"&&(s.value=this.order.customer.shipping?this.order.customer.shipping[s.name]:s.value)})}},methods:{__,resolveIfQueued:x,submitInformations(){const e=this.formValidation.extractForm({tabs:this.tabs});for(let s in e.general)["shipping","shipping_rate"].includes(s)&&(e.general[s]=parseFloat(e.general[s]));this.order={...this.order,...e.general},delete e.general,delete e.shipping._use_customer_shipping,delete e.billing._use_customer_billing,this.order.addresses=e,POS.order.next(this.order),POS.refreshCart(),this.resolveIfQueued(!0)},closePopup(){this.resolveIfQueued(!1)},toggle(e){for(let s in this.tabs)this.tabs[s].active=!1;this.tabs[e].active=!0},loadForm(){w.get("/api/forms/ns.pos-addresses").subscribe(({tabs:e})=>{for(let s in e)s==="general"?e[s].fields.forEach(o=>{o.value=this.order[o.name]||""}):e[s].fields.forEach(o=>{o.value=this.order.addresses[s]?this.order.addresses[s][o.name]:""});this.tabs=this.formValidation.initializeTabs(e)})}}},F={class:"ns-box w-6/7-screen md:w-4/5-screen lg:w-3/5-screen h-6/7-screen md:h-4/5-screen shadow-lg flex flex-col overflow-hidden"},I={class:"p-2 border-b ns-box-header flex justify-between items-center"},V={class:"font-bold text-primary"},B={class:"tools"},P=t("i",{class:"las la-times"},null,-1),j=[P],E={class:"flex-auto ns-box-body p-2 overflow-y-auto ns-tab"},O={id:"tabs-container"},Q={class:"header flex",style:{"margin-bottom":"-1px"}},T=["onClick"],z={class:"border ns-tab-item"},N={class:"px-4"},D={class:"-mx-4 flex flex-wrap"},G={class:"p-2 flex justify-between border-t ns-box-footer"},H=t("div",null,null,-1);function L(e,s,o,M,d,r){const _=f("ns-field"),v=f("ns-button");return n(),l("div",F,[t("div",I,[t("h3",V,u(r.__("Shipping & Billing")),1),t("div",B,[t("button",{onClick:s[0]||(s[0]=i=>r.closePopup()),class:"ns-close-button rounded-full h-8 w-8 border items-center justify-center"},j)])]),t("div",E,[t("div",O,[t("div",Q,[(n(!0),l(h,null,p(d.tabs,(i,a)=>(n(),l("div",{key:a,onClick:c=>r.toggle(a),class:m([i.active?"border-b-0 active":"inactive","tab rounded-tl rounded-tr border tab px-3 py-2 text-primary cursor-pointer"]),style:{"margin-right":"-1px"}},u(i.label),11,T))),128))]),t("div",z,[t("div",N,[t("div",D,[(n(!0),l(h,null,p(r.activeTabFields,(i,a)=>(n(),l("div",{key:a,class:m("p-4 w-full md:w-1/2 lg:w-1/3")},[b(_,{onBlur:c=>d.formValidation.checkField(i),onChange:c=>d.formValidation.checkField(i),field:i},null,8,["onBlur","onChange","field"])]))),128))])])])])]),t("div",G,[H,t("div",null,[b(v,{onClick:s[1]||(s[1]=i=>r.submitInformations()),type:"info"},{default:k(()=>[C(u(r.__("Save")),1)]),_:1})])])])}var K=y(S,[["render",L]]);export{K as default};