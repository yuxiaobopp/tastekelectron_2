(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f2d6b1e"],{1329:function(e,t,o){"use strict";o("5119")},5119:function(e,t,o){},"8f29":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app-base-httpserver"}},[e._m(0),t("div",{staticClass:"one-block-2"},[t("a-space",[t("p",[e._v("* 状态："+e._s(e.currentStatus))])]),t("p",[e._v("* 地址："+e._s(e.servicAddress))])],1),e._m(1),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:function(t){return e.sendRequest("pictures")}}},[e._v(" 打开【我的图片】 ")])],1)],1)])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 1. 内置http server服务 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 2. 发送请求 ")])])}],l=o("cff8"),c=o.n(l),a=o("a358"),s={data(){return{currentStatus:"关闭",servicAddress:"无"}},mounted(){this.init()},methods:{init(){const e=this;this.$ipcInvoke(a["a"].checkHttpServer,{}).then(t=>{t.enable&&(e.currentStatus="开启",e.servicAddress=t.server,c.a.set("httpServiceConfig",t))})},sendRequest(e){if("关闭"==this.currentStatus)return void this.$message.error("http服务未开启");const t={id:e};Object(a["b"])(a["a"].doHttpRequest,t).then(e=>{})}}},i=s,p=(o("1329"),o("2877")),d=Object(p["a"])(i,r,n,!1,null,"0e3f9564",null);t["default"]=d.exports},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"c",(function(){return a})),o.d(t,"b",(function(){return s}));var r=o("cff8"),n=o.n(r),l=o("b775");const c={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",importExcel:"controller.example.importExcel",devt:"controller.example.devt",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcATSendSyncMsg:"controller.example.ipcATSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",hello:"controller.example.hello"},a={appUpdater:"app.updater"},s=(e,t)=>{const o=n.a.get("httpServiceConfig"),r=o.server||"http://127.0.0.1:7071";let c=e.split(".").join("/");return c=r+"/"+c,console.log("url:",c),Object(l["b"])({url:c,method:"post",data:t,params:{},timeout:6e4})}}}]);
//# sourceMappingURL=chunk-3f2d6b1e.c127499d.js.map