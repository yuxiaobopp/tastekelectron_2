(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11e34c7f"],{5723:function(e,t,o){"use strict";o("c628")},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"c",(function(){return c})),o.d(t,"b",(function(){return i}));var n=o("cff8"),r=o.n(n),l=o("b775");const a={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",importExcel:"controller.example.importExcel",devt:"controller.example.devt",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcATSendSyncMsg:"controller.example.ipcATSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",hello:"controller.example.hello"},c={appUpdater:"app.updater"},i=(e,t)=>{const o=r.a.get("httpServiceConfig"),n=o.server||"http://127.0.0.1:7071";let a=e.split(".").join("/");return a=n+"/"+a,console.log("url:",a),Object(l["b"])({url:a,method:"post",data:t,params:{},timeout:6e4})}},c628:function(e,t,o){},c9d6:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app-base-file"}},[t("div",{staticClass:"one-block-2"},[0!==e.image_info.length?t("a-list",{attrs:{size:"small",bordered:"","data-source":e.image_info},scopedSlots:e._u([{key:"renderItem",fn:function(o){return t("a-list-item",{staticStyle:{"text-align":"left"}},[e._v(" "+e._s(o.id)+". "+e._s(o.imageUrlText)+":  "),t("a",{attrs:{href:o.url,target:"_blank"}},[e._v(e._s(o.url))])])}}],null,!1,1145998633)}):e._e()],1),e._m(0),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:function(t){return e.messageShow("ipc")}}},[e._v("消息提示(ipc)")]),t("a-button",{on:{click:function(t){return e.messageShowConfirm("ipc")}}},[e._v("消息提示与确认(ipc)")])],1)],1),e._m(1),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:12}},[t("a-input",{attrs:{value:e.dir_path,"addon-before":"保存目录"},model:{value:e.dir_path,callback:function(t){e.dir_path=t},expression:"dir_path"}})],1),t("a-col",{attrs:{span:12}},[t("a-button",{on:{click:e.selectDir}},[e._v(" 修改目录 ")])],1)],1)],1),e._m(2),t("div",{staticClass:"one-block-2"},[t("a-list",{attrs:{grid:{gutter:16,column:4},"data-source":e.file_list},scopedSlots:e._u([{key:"renderItem",fn:function(o){return t("a-list-item",{on:{click:function(t){return e.openDirectry(o.id)}}},[t("a-card",{attrs:{title:o.content}},[t("a-button",{attrs:{type:"link"}},[e._v(" 打开 ")])],1)],1)}}])})],1),t("div",{staticClass:"footer"})])},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 1. 系统原生对话框 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 2. 选择保存目录 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 4. 打开文件夹 ")])])}],l=o("a358");const a=[{content:"【下载】目录",id:"downloads"},{content:"【图片】目录",id:"pictures"},{content:"【文档】目录",id:"documents"},{content:"【音乐】目录",id:"music"}];var c={data(){return{file_list:a,image_info:[],num:0,dir_path:"/temp"}},methods:{openDirectry(e){this.$ipcInvoke(l["a"].openDirectory,{id:e}).then(e=>{})},selectDir(){const e=this;e.$ipcInvoke(l["a"].selectFolder,"").then(t=>{e.dir_path=t,e.$message.info(t)})},messageShow(e){const t=this;console.log("[messageShow] type:",e),this.$ipcInvoke(l["a"].messageShow,"").then(e=>{t.$message.info(e)})},messageShowConfirm(e){const t=this;console.log("[messageShowConfirm] type:",e),this.$ipcInvoke(l["a"].messageShowConfirm,"").then(e=>{t.$message.info(e)})}}},i=c,s=(o("5723"),o("2877")),p=Object(s["a"])(i,n,r,!1,null,"5b83b74e",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-11e34c7f.244c97c1.js.map