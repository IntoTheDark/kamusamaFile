webpackJsonp([1],{C5bi:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},s,!1,function(t){a("C5bi")},null,null).exports,r=a("/ocq"),l={data:function(){return{tableData:[]}},methods:{getData:function(){var t=this;this.axios({method:"get",url:"/"}).then(function(e){200===e.status?t.tableData=e.data.Entries:t.$message({message:e.data.msg,type:"error"})})},deleteData:function(t){this.axios({method:"get",url:"/delete?key="+t}).then(function(t){location.reload()})},refresh:function(){location.reload()},findData:function(t){return"https://110.42.14.9:10013/read?key="+t},findDataUrl:function(t){location.href="https://110.42.14.9:10013/read?key="+t},sizeData:function(t){return(t/1024/1024).toFixed(2)+"MB"}},mounted:function(){this.getData()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"https://110.42.14.9:10013/cd29170202e22724bb6346f4c7be156e","on-success":t.refresh}},[a("i",{staticClass:"el-icon-upload"}),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])]),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("大小尽量不超过500MB")])]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"Name",label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-link",{attrs:{href:t.findData(e.row.Name),type:"success",size:"small"}},[t._v(t._s(e.row.Name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){return t.findDataUrl(e.row.Name)}}},[t._v("下载")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return t.deleteData(e.row.Name)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var u=a("VU/8")(l,i,!1,function(t){a("h5Zn")},null,null).exports;n.default.use(r.a);var c=new r.a({routes:[{path:"/",name:"HelloWorld",component:u}]}),d=a("zL8q"),f=a.n(d),p=(a("tvR6"),a("LGsn")),m=a.n(p),h=a("mtWM");n.default.prototype.axios=h.a,n.default.prototype.fileDownload=m.a,h.a.defaults.baseURL="https://110.42.14.9:10013",n.default.use(f.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:c,components:{App:o},template:"<App/>"})},h5Zn:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.41029ada1d9f408c487b.js.map