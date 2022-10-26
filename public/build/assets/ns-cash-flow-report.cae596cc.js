import{y as r,m as s,p as a}from"./bootstrap.4fc50695.js";import{e as i,f as n}from"./components.e6ff6fc8.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./ns-notice.3d1887a3.js";import"./ns-pos-confirm-popup.04ed5413.js";import"./ns-numpad-plus.89338cd1.js";import"./ns-paginate.01fa3ad3.js";import"./ns-prompt-popup.38fbac9c.js";import"./ns-alert-popup.e97ff427.js";import"./ns-pos-loading-popup.c4bd0a89.js";const Y={name:"ns-cash-flow",mounted(){},components:{nsDatepicker:i,nsDateTimePicker:n},data(){return{startDate:r(),endDate:r(),report:new Object}},computed:{balance(){return Object.values(this.report).length===0?0:this.report.total_credit-this.report.total_debit},totalDebit(){return 0},totalCredit(){return 0}},methods:{setStartDate(t){this.startDate=t.format("YYYY/MM/DD HH:mm")},setEndDate(t){this.endDate=t.format("YYYY/MM/DD HH:mm")},loadReport(){const t=this.startDate,o=this.endDate;s.post("/api/nexopos/v4/reports/cash-flow",{startDate:t,endDate:o}).subscribe({next:e=>{this.report=e,console.log(this.report)},error:e=>{a.error(e.message).subscribe()}})}}};export{Y as default};