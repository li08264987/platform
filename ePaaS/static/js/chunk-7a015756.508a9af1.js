(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a015756"],{"0881":function(e,t,a){"use strict";var n=a("2ae7"),i=a.n(n);i.a},"2ae7":function(e,t,a){},"4d56":function(e,t,a){},"8cbc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-button",{attrs:{size:e.size,type:e.type,icon:e.icon,loading:e.loading,disabled:e.perms},on:{click:e.handleClick}},[e._v("\n  "+e._s(e.label)+"\n")])},i=[],l={name:"PlatSettingButton",props:{label:{type:String,default:""},icon:{type:String,default:""},size:{type:String,default:"mini"},type:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!0},perms:{type:String,default:null}},data:function(){return{}},mounted:function(){},methods:{handleClick:function(){this.$emit("click",{})}}},r=l,o=a("e90a"),s=Object(o["a"])(r,n,i,!1,null,null,null);t["a"]=s.exports},a518:function(e,t,a){"use strict";var n=a("4d56"),i=a.n(n);i.a},a9f1:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"authorityManage"}},[a("div",{staticClass:"searchWord"},[a("el-input",{staticStyle:{display:"inline-block",width:"212px"},attrs:{placeholder:"请输入角色名搜索","suffix-icon":"el-icon-search"},on:{input:e.handleFilter},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),e._v(" "),a("div",{staticClass:"table-container"},[a("authorityTable",{ref:"child",attrs:{height:750,border:e.border,data:e.pageResult},on:{"update:data":function(t){e.pageResult=t},findPage:e.findPage,handleEdit:e.handleEdit}})],1),e._v(" "),a("div",{staticClass:"tree-dialog-container"},[a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"tree-dialog",attrs:{title:"修改权限",width:"40%",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t},close:e.closeDialog}},[a("el-tree",{ref:"tree",staticClass:"authority-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routes,props:e.defaultProps,"default-checked-keys":e.defaultCheckedKeys,"node-key":e.nodeKey,"show-checkbox":""},on:{check:e.handleCheck}})],1)],1)])},i=[],l=(a("6d57"),a("cc57"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"table-container"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%","font-size":"14px"},attrs:{data:e.data.content,"highlight-current-row":e.highlightCurrentRow,border:e.border,stripe:e.stripe,"show-overflow-tooltip":e.showOverflowTooltip,"max-height":e.maxHeight,height:e.height,size:e.size,align:e.align,"header-cell-style":{background:"#F1F4FD"}},on:{"update:data":function(t){return e.$set(e.data,"content",t)},"selection-change":e.selectionChange,"current-change":e.handleCurrentChange}},[a("el-table-column",{attrs:{prop:"ROLE_ID",label:"角色编号","min-width":"50","header-align":"center",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ROLE_NAME",label:"角色名称","min-width":"50","header-align":"center",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"authority",label:"权限","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"tag-container"},e._l(t.row.authority,(function(t){return a("el-tag",{key:t.value,staticClass:"table-tag",attrs:{size:"medium"}},[e._v(e._s(t.name))])})),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"EXTENDS",label:"扩展","min-width":"50","header-align":"center",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("platSettingButton",{attrs:{label:"修改权限",size:e.size},on:{click:function(a){return e.alterAuthority(t.$index,t.row)}}})]}}])})],1),e._v(" "),a("div",{staticClass:"toolbar"},[a("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper","current-page":e.pageRequest.pageNum,"page-size":e.pageRequest.pageSize,total:e.data.totalSize},on:{"update:total":function(t){return e.$set(e.data,"totalSize",t)},"current-change":e.refreshPageRequest}})],1)],1)}),r=[],o=(a("163d"),a("8cbc")),s={name:"PlatSettingTable",components:{platSettingButton:o["a"]},props:{data:{type:Object,default:null},size:{type:String,default:"mini"},align:{type:String,default:"left"},maxHeight:{type:Number,default:800},height:{type:Number,default:250},showOperation:{type:Boolean,default:!0},border:{type:Boolean,default:!1},stripe:{type:Boolean,default:!0},highlightCurrentRow:{type:Boolean,default:!0},showOverflowTooltip:{type:Boolean,default:!0},showBatchDelete:{type:Boolean,default:!0}},data:function(){return{pageRequest:{pageNum:1,pageSize:15},loading:!1,selections:[]}},mounted:function(){this.refreshPageRequest(1)},methods:{alterAuthority:function(e,t){this.$emit("handleEdit",{index:e,row:t})},refreshPageRequest:function(e){this.pageRequest.pageNum=e,this.findPage()},findPage:function(){var e=this;this.loading=!0;var t=function(t){e.loading=!1};this.$emit("findPage",{pageRequest:this.pageRequest,callback:t})},selectionChange:function(e){this.selections=e,this.$emit("selectionChange",{selections:e})},handleCurrentChange:function(e){this.$emit("handleCurrentChange",{val:e})},handleEdit:function(e,t){this.$emit("handleEdit",{index:e,row:t})},handleDelete:function(e,t){this.delete({index:e,row:t})},delete:function(e){var t=this;this.$confirm("确认删除所选内容？","提示",{type:"warning"}).then((function(){var a=function(e){1===e.state?(t.$message({message:"删除成功",type:"success"}),t.findPage()):t.$message({message:"删除失败",type:"error"}),t.loading=!1};t.$emit("handleDelete",{rowInfor:e,callback:a}),t.loading=!1})).catch((function(){}))}}},c=s,u=(a("a518"),a("e90a")),d=Object(u["a"])(c,l,r,!1,null,null,null),h=d.exports,g=a("a48f");function f(e){return Object(g["a"])({url:"/setting/authorityManage/getAuthorityList",method:"post",params:e})}function p(e){return Object(g["a"])({url:"/setting/authorityManage/updataAuthorityOfRole",method:"post",params:e})}var m={components:{authorityTable:h},data:function(){return{loading:!1,size:"small",filters:{name:""},border:!0,pageRequest:{pageNum:1,pageSize:10},pageResult:{},authorityList:[],operation:!1,dialogVisible:!1,dialogEdit:"",editLoading:!1,checkStrictly:!1,defaultProps:{children:"children",label:"name"},nodeKey:"value",routes:[],defaultCheckedKeys:[],clickRecord:{}}},computed:{},mounted:function(){},methods:{findPage:function(e){var t=this;null!==e&&(this.pageRequest=e.pageRequest),this.pageRequest["filterRoleName"]=this.filters.name,f(this.pageRequest).then((function(e){t.pageResult.content=e.roleList,t.pageResult.totalSize=e.roleListCount,t.authorityList=e.authorityList})).then(null!=e?e.callback:"")},handleEdit:function(e){var t=this;this.dialogVisible=!0,this.checkStrictly=!0,this.clickRecord=e,this.$nextTick((function(){var a=t.getRootDatas(e);t.routes=a,t.defaultCheckedKeys=[],t.generateArr(a,t.defaultCheckedKeys),t.checkStrictly=!1}))},generateArr:function(e,t){var a=this;e.forEach((function(e){!0===e.checked&&t.push(e.value),e.children&&a.generateArr(e.children,t)}))},getRootDatas:function(e){var t=[],a=e.row.authority,n=JSON.parse(JSON.stringify(this.authorityList));if("undefined"!==typeof n&&a.length>0)for(var i=0;i<a.length;i++)t[a[i].value]=a[i].name;for(var l=[],r=[],o=0;o<n.length;o++)if(null!==n[o].PARENT_ID&&n[o].PARENT_ID!==n[o].AUTH_ID&&this.authContains(n[o].PARENT_ID,n))r.push(n[o]);else{var s=!1;void 0!==t[n[o].AUTH_ID]&&(s=!0),l.push({name:n[o].NAME,value:n[o].AUTH_ID,checked:s})}var c=function(){u=JSON.parse(JSON.stringify(r));for(var e=0;e<l.length;e++)a(l[e]);function a(e){if(e.children)for(var n=0;n<e.children.length;n++)a(e.children[n]);else{for(var i=!0,l=0;l<r.length;l++)if(r[l].PARENT_ID===e.value){e.isParent=!0;var o=!1;void 0!==t[r[l].AUTH_ID]&&(o=!0),e.children?e.children.push({name:r[l].NAME,value:r[l].AUTH_ID,checked:o}):e.children=[{name:r[l].NAME,value:r[l].AUTH_ID,checked:o}],i=!1;for(var s=0;s<u.length;s++)if(u[s].AUTH_ID===r[l].AUTH_ID){u.splice(s,1);break}}i&&(e.isParent=!1,e.children=[])}}r=u};while(r.length>0){var u;c()}return l},authContains:function(e,t){for(var a=!1,n=0;n<t.length;n++)t[n].AUTH_ID===e&&(a=!0);return a},closeDialog:function(e){this.$refs.child.refreshPageRequest(this.pageRequest.pageNum)},handleCheck:function(e,t){var a=t.checkedKeys,n=t.halfCheckedKeys,i=a.concat(n),l=JSON.parse(JSON.stringify(this.clickRecord.row));l.AUTHORITY=i.join(),p(l).then((function(e){})).catch((function(e){console.log(e)}))},handleFilter:function(){this.$refs.child.refreshPageRequest(this.pageRequest.pageNum)}}},v=m,y=(a("0881"),Object(u["a"])(v,n,i,!1,null,"5d6ab95f",null));t["default"]=y.exports}}]);