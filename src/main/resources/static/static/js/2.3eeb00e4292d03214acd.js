webpackJsonp([2,8,15],{"/m49":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"MenuList",data:function(){return{zhoubaoWeeks:[],zhoubao:[],zhoubaoAll:[],loading:!0,imgSrc:["../static/html5.png","../static/pdf.png","../static/markdown80.png"]}},mounted:function(){this.shuaxin()},watch:{zhoubao:function(){for(var e=0,t=0;t<this.zhoubao.length;t++)this.zhoubao[e].week!=this.zhoubao[t].week&&(this.zhoubaoAll.push(this.makeWeek(this.zhoubao.slice(e,t))),e=t);this.zhoubaoAll.push(this.makeWeek(this.zhoubao.slice(e))),this.$nextTick(function(){this.loading=!1})}},methods:{shuaxin:function(){var e=this;this.axios.get("/zhoubao/getRecentWeeks/5").then(function(t){e.zhoubao=t.data})},makeWeek:function(e){var t=[];return t.push(this.boshi(e)),t[1]=this.shuoshi(e),t},getWeekCount:i("YF26").default.getWeekCount,fileType:function(e){if(0==e.localeCompare("-1"))return 0;var t=e.split("."),i=t[t.length-1].toLowerCase();return 0==i.localeCompare("pdf")?1:0==i.localeCompare("md")?2:void 0},viewer:function(e){var t=e.id;if(0==e.filePath.localeCompare("-1"))this.$router.push({name:"HtmlViewerAll",params:{userName:e.userName,week:e.week,zhoubao:e}});else{var i=e.filePath.split("."),a=i[i.length-1].toLowerCase();0==a.localeCompare("pdf")?this.$router.push({name:"pdfViewerAll",params:{zhoubao:e,id:t}}):0==a.localeCompare("md")&&this.$router.push({name:"MdViewerAll",params:{zhoubao:e,id:t}})}},timeFormat:function(e){var t=new Date,i=(e=new Date(e)).getMonth()+1+"月"+e.getDate()+"日";return e.getFullYear()==t.getFullYear()?i:e.getFullYear()+"年"+i},boshi:function(e){for(var t=0;t<e.length;t++)if(0==e[t].type)return e.slice(0,t)},shuoshi:function(e){for(var t=0,i=0;i<e.length;i++)if(0==e[i].type){t=i;break}var a=[];for(i=t=t;i<e.length;i++)e[i].year!=e[t].year&&(a.push(e.slice(t,i)),t=i);return a.push(e.slice(t)),a}}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"block"},[i("el-timeline",{staticStyle:{width:"90%",margin:"auto"}},[i("div",e._l(e.zhoubaoAll,function(t,a){return i("el-timeline-item",{key:t[0].id,attrs:{placement:"top",timestamp:"第"+e.getWeekCount(new Date(t[1][0][0].time))+"周"}},[i("el-card",{attrs:{shadow:"hover"}},[i("el-row",{attrs:{gutter:5,type:"flex",justify:"center"}},[i("el-col",{attrs:{span:23,offset:1}},[i("div",{staticStyle:{position:"relative",top:"20%","font-size":"x-large","font-weight":"700"}},[i("span",{staticStyle:{display:"inline-block"}},[e._v(e._s(e.timeFormat(t[1][0][0].time)))])])])],1),e._v(" "),i("el-row",{attrs:{gutter:5,type:"flex",justify:"center"}},[i("el-col",{attrs:{span:3,offset:1}},[i("div",{staticStyle:{position:"relative",top:"30%"}},[t[0].length?i("h3",[e._v("博士：")]):e._e()])]),e._v(" "),i("el-col",{attrs:{span:20}},[i("div",{staticClass:"boxFinding"},e._l(t[0],function(t,a){return i("div",{key:t.id,staticStyle:{display:"inline-block","text-align":"center",cursor:"pointer"},on:{click:function(i){return e.viewer(t)}}},[i("img",{attrs:{src:e.imgSrc[e.fileType(t.filePath)]}}),i("br"),e._v(" "),i("a",{staticStyle:{color:"black"}},[e._v(e._s(t.userName))]),i("br")])}),0)])],1),e._v(" "),e._l(t[1],function(t){return i("el-row",{key:t[0].id,attrs:{gutter:5,type:"flex",justify:"center"}},[i("el-col",{attrs:{span:3,offset:1}},[i("div",{staticStyle:{position:"relative",top:"20%"}},[i("h4",[e._v("硕士"+e._s(t[0].year)+"级：")])])]),e._v(" "),i("el-col",{attrs:{span:20}},[i("div",{staticClass:"boxFinding"},e._l(t,function(t,a){return i("div",{key:t.id,staticStyle:{display:"inline-block","text-align":"center",cursor:"pointer"},on:{click:function(i){return e.viewer(t)}}},[i("img",{attrs:{src:e.imgSrc[e.fileType(t.filePath)]}}),i("br"),e._v(" "),i("a",{staticStyle:{color:"black"}},[e._v(e._s(t.userName))]),i("br")])}),0)])],1)})],2)],1)}),1)])],1)},staticRenderFns:[]};var n=i("VU/8")(a,o,!1,function(e){i("DHq+")},"data-v-eca03286",null);t.default=n.exports},"DHq+":function(e,t){},LCgW:function(e,t){},Y4AI:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"NewAdminTimeLine",data:function(){return{zhoubaoWeeks:[],zhoubao:[],zhoubaoAll:[],loading:!0,imgSrc:["../static/html5.png","../static/pdf.png","../static/markdown80.png"],elLinkType:[]}},mounted:function(){this.shuaxin()},watch:{zhoubao:function(){for(var e=0,t=0;t<this.zhoubao.length;t++)this.zhoubao[e].week!=this.zhoubao[t].week&&(this.zhoubaoAll.push(this.makeWeek(this.zhoubao.slice(e,t))),e=t);this.zhoubaoAll.push(this.makeWeek(this.zhoubao.slice(e))),this.$nextTick(function(){this.loading=!1}),this.elLinkType=this.zhoubao.map(function(e){return"default"});var i=this.zhoubao.map(function(e){return e.id}).indexOf(this.$route.params.zhoubao.id);this.elLinkType.splice(i,1,"primary")}},methods:{changeMyType:function(e){var t=this.zhoubao.indexOf(e);this.elLinkType.splice(t,1,"primary")},shuaxin:function(){var e=this;this.axios.get("/zhoubao/getRecentWeeks/5").then(function(t){e.zhoubao=t.data})},makeWeek:function(e){var t=[];return t.push(this.boshi(e)),t[1]=this.shuoshi(e),t},getWeekCount:i("YF26").default.getWeekCount,fileType:function(e){if(0==e.localeCompare("-1"))return 0;var t=e.split("."),i=t[t.length-1].toLowerCase();return 0==i.localeCompare("pdf")?1:0==i.localeCompare("md")?2:void 0},viewer:function(e){var t=e.id;if(0==e.filePath.localeCompare("-1"))this.$router.push({name:"HtmlViewerAll",params:{userName:e.userName,week:e.week,zhoubao:e}});else{var i=e.filePath.split("."),a=i[i.length-1].toLowerCase();0==a.localeCompare("pdf")?this.$router.push({name:"pdfViewerAll",params:{zhoubao:e,id:t}}):0==a.localeCompare("md")&&this.$router.push({name:"MdViewerAll",params:{zhoubao:e,id:t}})}},timeFormat:function(e){var t=new Date,i=(e=new Date(e)).getMonth()+1+"月"+e.getDate()+"日";return e.getFullYear()==t.getFullYear()?i:e.getFullYear()+"年"+i},boshi:function(e){for(var t=0;t<e.length;t++)if(0==e[t].type)return e.slice(0,t)},shuoshi:function(e){for(var t=0,i=0;i<e.length;i++)if(0==e[i].type){t=i;break}var a=[];for(i=t=t;i<e.length;i++)e[i].year!=e[t].year&&(a.push(e.slice(t,i)),t=i);return a.push(e.slice(t)),a}}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"boxFinding",staticStyle:{width:"90%",margin:"0% 5%"}},e._l(e.zhoubaoAll,function(t,a){return i("div",{key:t[0].id,ref:"allPeople",refInFor:!0,staticStyle:{width:"65%"}},[i("h2",[e._v(e._s(e.timeFormat(t[1][0][0].time)))]),e._v(" "),i("div",[t[0].length?i("h4",[e._v("博士")]):e._e(),e._v(" "),e._l(t[0],function(t,a){return i("div",{key:e.zhoubao.id,staticStyle:{cursor:"pointer"}},[i("el-link",{staticStyle:{"font-size":"large",margin:"2% 0%"},attrs:{type:e.elLinkType[e.zhoubao.indexOf(t)]},on:{click:function(i){e.viewer(t),e.changeMyType(t)}}},[e._v(e._s(t.userName))])],1)})],2),e._v(" "),i("div",e._l(t[1],function(t,a){return i("div",{key:t[0].id},[i("h4",[e._v("硕士"+e._s(t[0].year)+"级")]),e._v(" "),e._l(t,function(t,a){return i("div",{key:t.id,staticStyle:{cursor:"pointer"}},[i("el-link",{staticStyle:{"font-size":"large",margin:"2% 0%"},attrs:{type:e.elLinkType[e.zhoubao.indexOf(t)]},on:{click:function(i){e.viewer(t),e.changeMyType(t)}}},[e._v(e._s(t.userName))])],1)})],2)}),0)])}),0)},staticRenderFns:[]};var n=i("VU/8")(a,o,!1,function(e){i("xkFe")},"data-v-62b680ec",null);t.default=n.exports},spRZ:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("g4PW"),o=i.n(a),n=i("/m49"),r=i("Y4AI"),s=(o()("production","production"),{name:"Viewer",data:function(){return{isPro:o()("production","production"),loading:!0,dialogPingjiaVisible:!1,zhoubao:"",user:"",clientHeight:""}},mounted:function(){this.zhoubao=this.$route.params.zhoubao,this.user=this.Cookies.get("userName"),this.clientHeight=""+document.documentElement.clientHeight,window.onresize=function(){this.clientHeight=""+document.documentElement.clientHeight}},props:{},watch:{$route:function(e,t){this.zhoubao=e.params.zhoubao},clientHeight:function(){this.changeFixed(this.clientHeight)}},components:{NewAdminTimeLine:n.default,MenuList:r.default},methods:{savePingjia:function(e){var t=this;this.axios({url:"/zhoubao/updateZhoubao",method:"post",data:t.zhoubao}).then(function(e){t.$message({message:"评价成功",type:"success"})})},changeFixed:function(e){this.$refs.viewerPage.$el.style.height=e-70+"px"},timeFormat:function(e){var t=new Date,i=(e=new Date(e)).getMonth()+1+"月"+e.getDate()+"日";return e.getFullYear()==t.getFullYear()?i:e.getFullYear()+"年"+i}}}),l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{ref:"viewerPage",staticStyle:{height:"500px"}},[i("el-aside",{attrs:{width:"15%"}},[i("MenuList")],1),e._v(" "),i("el-main",[i("div",{staticStyle:{position:"fixed",right:"60%",top:"10%","z-index":"10"}},[0==e.user.localeCompare("123")?i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.dialogPingjiaVisible=!0}}},[e._v("评价")]):e._e()],1),e._v(" "),i("router-view")],1),e._v(" "),i("el-dialog",{attrs:{title:"周报评价",visible:e.dialogPingjiaVisible},on:{"update:visible":function(t){e.dialogPingjiaVisible=t}}},[i("h2",{staticStyle:{display:"inline-block"}},[e._v(e._s(e.zhoubao.userName)+" "+e._s(e.timeFormat(e.zhoubao.time))+"周报")]),e._v(" "),i("br"),e._v(" "),i("el-input",{staticStyle:{color:"#000000","font-size":"xx-large"},attrs:{type:"textarea",autosize:{minRows:4,maxRows:8},placeholder:"请填写评价内容"},model:{value:e.zhoubao.pingjia,callback:function(t){e.$set(e.zhoubao,"pingjia",t)},expression:"zhoubao.pingjia"}}),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogPingjiaVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPingjiaVisible=!1,e.savePingjia()}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var u=i("VU/8")(s,l,!1,function(e){i("LCgW")},null,null);t.default=u.exports},xkFe:function(e,t){}});
//# sourceMappingURL=2.3eeb00e4292d03214acd.js.map