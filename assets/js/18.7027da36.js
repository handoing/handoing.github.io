(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{103:function(t,e,n){},129:function(t,e,n){"use strict";var o=n(103);n.n(o).a},154:function(t,e,n){"use strict";n.r(e);var o={props:{updateEvent:{type:Object,default:null}},computed:{popupConfig(){for(const t of[this.$themeLocaleConfig,this.$site.themeConfig]){const e=t.serviceWorker;if(e&&e.updatePopup)return"object"==typeof e.updatePopup?e.updatePopup:{}}return null},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const t=this.popupConfig;return t&&t.message||"Get new content"},buttonText(){const t=this.popupConfig;return t&&t.buttonText||"Refresh"}},methods:{reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{console.log("PWA 正在开启新的 serviceWorker"),location.reload(!0)}),this.updateEvent=null)}}},p=(n(129),n(2)),s=Object(p.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n    "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()])}),[],!1,null,null,null);e.default=s.exports}}]);