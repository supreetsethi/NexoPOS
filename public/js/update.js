(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{260:function(e,t,n){e.exports=n(261)},261:function(e,t,n){"use strict";n.r(t);var r=n(3),s=n.n(r);const a=n(274).default;console.log(a),window.nsUpdate=new s.a({el:"#update-app",components:{nsDatabaseUpdate:a}})},274:function(e,t,n){"use strict";n.r(t);var r=n(9),s=n.n(r),a=n(5),o=n(0);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r,s,a,o){try{var i=e[a](o),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,s)}var c={name:"ns-database-update",data:function(){return{files:Update.files,returnLink:Update.returnLink,modules:Update.modules,updating:!1,xXsrfToken:null,updatingModule:!1,error:!1,lastErrorMessage:"",index:0}},computed:{totalModules:function(){return Object.values(this.modules).length}},mounted:function(){var e=this;o.nsHttpClient.get("/sanctum/csrf-cookie").subscribe((function(t){try{e.xXsrfToken=o.nsHttpClient.response.config.headers["X-XSRF-TOKEN"],e.proceedUpdate()}catch(e){o.nsSnackBar.error(e.message).subscribe()}}))},methods:{proceedUpdate:function(){var e,t=this;return(e=s.a.mark((function e(){var n,r,u,c,d,l,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.updating=!0,n=s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.index=parseInt(n)+1,e.next=4,new Promise((function(e,r){o.nsHttpClient.post("/api/nexopos/v4/update",{file:t.files[n]},{headers:{"X-XSRF-TOKEN":t.xXsrfToken}}).subscribe(e,r)}));case 4:e.sent,e.next=13;break;case 7:return e.prev=7,e.t0=e.catch(0),t.updating=!1,t.error=!0,t.lastErrorMessage=e.t0.message||Object(a.a)("An unexpected error occured"),e.abrupt("return",{v:o.nsSnackBar.error(e.t0.message).subscribe()});case 13:case"end":return e.stop()}}),e,null,[[0,7]])})),e.t0=s.a.keys(t.files);case 3:if((e.t1=e.t0()).done){e.next=11;break}return r=e.t1.value,e.delegateYield(n(r),"t2",6);case 6:if("object"!==i(u=e.t2)){e.next=9;break}return e.abrupt("return",u.v);case 9:e.next=3;break;case 11:if(t.index=0,!(Object.values(t.modules).length>0)){e.next=25;break}t.updatingModule=!0,c=0,d=s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c+=1,t.index=c,e.next=5,new Promise((function(e,r){o.nsHttpClient.post("/api/nexopos/v4/update",{module:t.modules[n]},{headers:{"X-XSRF-TOKEN":t.xXsrfToken}}).subscribe(e,r)}));case 5:e.sent,e.next=14;break;case 8:return e.prev=8,e.t0=e.catch(0),t.updating=!1,t.error=!0,t.lastErrorMessage=e.t0.message||Object(a.a)("An unexpected error occured"),e.abrupt("return",{v:o.nsSnackBar.error(e.t0.message).subscribe()});case 14:case"end":return e.stop()}}),e,null,[[0,8]])})),e.t3=s.a.keys(t.modules);case 17:if((e.t4=e.t3()).done){e.next=25;break}return l=e.t4.value,e.delegateYield(d(l),"t5",20);case 20:if("object"!==i(p=e.t5)){e.next=23;break}return e.abrupt("return",p.v);case 23:e.next=17;break;case 25:t.error=!1,t.updating=!1,document.location=t.returnLink;case 28:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function o(e){u(a,r,s,o,i,"next",e)}function i(e){u(a,r,s,o,i,"throw",e)}o(void 0)}))})()}}},d=n(1),l=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container mx-auto flex-auto items-center justify-center flex"},[n("div",{staticClass:"w-full md:w-2/3 lg:w-1/3",attrs:{id:"sign-in-box"}},[e._m(0),e._v(" "),n("div",{staticClass:"my-3 rounded shadow bg-white"},[e._m(1),e._v(" "),n("div",{staticClass:"p-2"},[n("p",{staticClass:"text-center text-sm text-gray-600 py-4"},[e._v("In order to keep NexoPOS running smoothly with updates, we need to proceed to the database migration. In fact you don't need to do any action, just wait until the process is done and you'll be redirected.")]),e._v(" "),e.error?n("div",{staticClass:"border-l-4 text-sm border-red-600 bg-red-200 p-4 text-gray-700"},[n("p",[e._v("\n                        Looks like an error has occured during the update. Usually, giving another shot should fix that. However, if you still don't get any chance.\n                    Please report this message to the support : \n                    ")]),e._v(" "),n("pre",{staticClass:"rounded whitespace-pre-wrap bg-gray-700 text-white my-2 p-2"},[e._v(e._s(e.lastErrorMessage))])]):e._e()]),e._v(" "),n("div",{staticClass:"border-t border-gray-200 p-2 flex justify-between"},[n("div",[e.error?n("button",{staticClass:"rounded bg-red-400 shadow-inner text-white p-2",on:{click:function(t){return e.proceedUpdate()}}},[n("i",{staticClass:"las la-sync"}),e._v(" "),n("span",[e._v("Try Again")])]):e._e()]),e._v(" "),n("div",{staticClass:"flex"},[e.updating?n("button",{staticClass:"rounded bg-blue-400 shadow-inner text-white p-2"},[n("i",{staticClass:"las la-sync animate-spin"}),e._v(" "),e.updatingModule?e._e():n("span",[e._v("Updating...")]),e._v(" "),e.updatingModule?e._e():n("span",{staticClass:"mr-1"},[e._v(e._s(e.index)+"/"+e._s(e.files.length))]),e._v(" "),e.updatingModule?n("span",[e._v("Updating Modules...")]):e._e(),e._v(" "),e.updatingModule?n("span",{staticClass:"mr-1"},[e._v(e._s(e.index)+"/"+e._s(e.totalModules))]):e._e()]):e._e(),e._v(" "),e.updating?e._e():n("a",{staticClass:"rounded bg-blue-400 shadow-inner text-white p-2",attrs:{href:e.returnLink}},[n("i",{staticClass:"las la-undo"}),e._v(" "),n("span",[e._v("Return")])])])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex justify-center items-center py-6"},[t("img",{staticClass:"w-32",attrs:{src:"/svg/nexopos-variant-1.svg",alt:"NexoPOS"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"border-b border-gray-200 py-4 flex items-center justify-center"},[t("h3",{staticClass:"text-xl font-bold text-gray-700"},[this._v("Datebase Update")])])}],!1,null,null,null);t.default=l.exports}},[[260,0,1]]]);
//# sourceMappingURL=update.js.map