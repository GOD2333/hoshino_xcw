(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"2db1":function(t,e,a){"use strict";var s=a("39bc"),i=a.n(s);i.a},"39bc":function(t,e,a){},d684:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"doc-page"},[a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{title:"Treats",data:t.data,columns:t.columns,"row-key":"gid",selection:"multiple",selected:t.selected,filter:t.filter},on:{"update:selected":function(e){t.selected=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"q-table__title row"},[t._v("\n          授权群组管理\n        ")]),a("q-space"),a("div",{staticClass:"row"},[a("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),a("q-btn",{staticClass:"q-mr-xs",attrs:{color:"info"},on:{click:t.updateGroup}},[t._v("刷新")]),a("q-btn",{staticClass:"q-mr-xs",attrs:{color:"secondary"},on:{click:function(e){return t.modifySelect()}}},[t._v("修改")]),a("q-btn",{staticClass:"q-mr-xs",attrs:{color:"primary"},on:{click:function(e){t.isAdd=!0}}},[t._v("添加授权")]),a("q-btn",{staticClass:"q-mr-xs",attrs:{color:"accent"},on:{click:t.broadcastSelect}},[t._v("提醒续费")]),a("q-btn",{staticClass:"q-mr-xs",attrs:{color:"negative"},on:{click:t.gunSelect}},[t._v("退群")])],1)]},proxy:!0}])})],1),a("q-dialog",{model:{value:t.isAdd,callback:function(e){t.isAdd=e},expression:"isAdd"}},[a("q-card",{staticClass:"flex flex-center"},[a("div",{staticClass:"q-pa-md",staticStyle:{width:"480px"}},[a("q-form",{staticClass:"q-gutter-md"},[a("q-input",{attrs:{filled:"",type:"number",label:"群号","lazy-rules":"",rules:[function(t){return null!==t&&t>0},"请正确的群号!"]},model:{value:t.addGid,callback:function(e){t.addGid=e},expression:"addGid"}}),a("q-input",{attrs:{filled:"",type:"number",label:"时长","lazy-rules":"",rules:[function(t){return null!==t&&t>0},"请正确的时长!"]},model:{value:t.duration,callback:function(e){t.duration=e},expression:"duration"}}),a("div",{attrs:{align:"center"}},[a("q-btn",{attrs:{label:"Submit",color:"primary"},on:{click:function(e){return t.onSubmit()}}})],1)],1)],1)])],1)],1)},i=[],o=a("18d6"),l={data(){return{filter:"",selected:[],columns:[{name:"gid",required:!0,label:"群号",align:"left",field:t=>t.gid,format:t=>""+t,sortable:!0,sort:(t,e)=>parseInt(t,20)-parseInt(e,20)},{name:"groupName",required:!0,label:"群名称",align:"left",field:t=>t.groupName,format:t=>""+t},{name:"deadline",align:"right",label:"截至日期",field:"deadline",sortable:!0}],data:[],isAdd:!1,addGid:123456,duration:30}},methods:{updateGroup(){this.$axios.get("/get/group?password="+o["a"].getItem("password")).then(t=>{this.data=t.data,console.log(t.data)})},modifySelect(){this.$q.dialog({title:"修改",message:"请填写群组增加(减少)授权时长",prompt:{model:"",isValid:t=>t.length>0,type:"number"},cancel:!0,persistent:!0}).onOk(t=>{this.selected.forEach(e=>{this.modifyItem(e,t)}),this.updateGroup(),this.message("成功","修改完毕!")})},modifyItem(t,e){this.$axios.post("update/group?gid="+t.gid+"&duration="+e)},message(t,e){this.$q.dialog({title:t,message:e,html:!0})},onSubmit(){this.$axios.post("add/group?gid="+this.addGid+"&duration="+this.duration).then(t=>{t&&(this.message("成功","添加完成!"),this.isAdd=!1,this.updateGroup())}).catch(t=>{console.log(t)})},broadcastSelect(){this.$q.dialog({title:"请填写推送语",prompt:{model:"您的机器人即将到期，请及时续费!",type:"text"},cancel:!0}).onOk(t=>{this.selected.forEach(e=>{this.broadcastItem(e,t)})})},broadcastItem(t,e){this.$axios.post("/notify/group?gid="+t.gid+"&msg="+e).then(e=>{"failed"===e.data?this.$q.notify({message:"群"+t.gid+"推送失败!",position:"top",color:"purple"}):this.$q.notify({message:"群"+t.gid+"推送成功!",position:"top",color:"green"})}).catch(()=>{this.$q.notify({message:"群"+t.gid+"推送失败!",position:"top",color:"purple"})})},gunSelect(){this.$q.dialog({title:"确认",message:"确定退出群聊吗?",cancel:!0}).onOk(t=>{this.selected.forEach(t=>{this.gunItem(t)}),this.updateGroup()})},gunItem(t){this.$axios.post("/gun/group?gid="+t.gid).then(e=>{"failed"===e.data?this.$q.notify({message:"群"+t.gid+"退出失败!",position:"top",color:"purple"}):this.$q.notify({message:"群"+t.gid+"退出成功!",position:"top",color:"green"})}).catch(()=>{this.$q.notify({message:"群"+t.gid+"推送失败!",position:"top",color:"purple"})})}},created(){this.updateGroup()}},n=l,r=(a("2db1"),a("2877")),d=a("9989"),c=a("eaac"),u=a("2c91"),p=a("27f9"),m=a("0016"),g=a("9c40"),f=a("24e8"),h=a("f09f"),b=a("0378"),q=a("eebe"),y=a.n(q),x=Object(r["a"])(n,s,i,!1,null,null,null);e["default"]=x.exports;y()(x,"components",{QPage:d["a"],QTable:c["a"],QSpace:u["a"],QInput:p["a"],QIcon:m["a"],QBtn:g["a"],QDialog:f["a"],QCard:h["a"],QForm:b["a"]})}}]);