(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"268e":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,a,r,u,i){try{var o=e[u](i),s=o.value}catch(l){return void t(l)}o.done?n(s):Promise.resolve(s).then(a,r)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var i=e.apply(n,t);function o(e){u(i,a,r,o,s,"next",e)}function s(e){u(i,a,r,o,s,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,zhubanfangxingbieOptions:[],zhubanfangxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var n=this;return i(a.default.mark((function t(){var r;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],r=e.getStorageSync("loginTable"),n.tableName=r,"yonghu"==n.tableName&&(n.yonghuxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.yonghuxingbieOptions[0]),"zhubanfang"==n.tableName&&(n.zhubanfangxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.zhubanfangxingbieOptions[0]),n.styleChange();case 6:case"end":return t.stop()}}),t)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},zhubanfangxingbieChange:function(e){this.zhubanfangxingbieIndex=e.target.value,this.ruleForm.xingbie=this.zhubanfangxingbieOptions[this.zhubanfangxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return i(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.yonghuzhanghao||"yonghu"!=e.tableName){n.next=3;break}return e.$utils.msg("用户账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.yonghuxingming||"yonghu"!=e.tableName){n.next=6;break}return e.$utils.msg("用户姓名不能为空"),n.abrupt("return");case 6:if(e.ruleForm.mima||"yonghu"!=e.tableName){n.next=9;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 9:if("yonghu"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=12;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 12:if("yonghu"!=e.tableName||!e.ruleForm.yonghushouji||e.$validate.isMobile(e.ruleForm.yonghushouji)){n.next=15;break}return e.$utils.msg("用户手机应输入手机格式"),n.abrupt("return");case 15:if(e.ruleForm.mingcheng||"zhubanfang"!=e.tableName){n.next=18;break}return e.$utils.msg("名称不能为空"),n.abrupt("return");case 18:if(e.ruleForm.fuzeren||"zhubanfang"!=e.tableName){n.next=21;break}return e.$utils.msg("负责人不能为空"),n.abrupt("return");case 21:if(e.ruleForm.mima||"zhubanfang"!=e.tableName){n.next=24;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 24:if("zhubanfang"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=27;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 27:if("zhubanfang"!=e.tableName||!e.ruleForm.shoujihaoma||e.$validate.isMobile(e.ruleForm.shoujihaoma)){n.next=30;break}return e.$utils.msg("手机号码应输入手机格式"),n.abrupt("return");case 30:if("zhubanfang"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=33;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 33:return n.next=35,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 35:e.$utils.msgBack("注册成功");case 37:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,t("543d")["default"])},"2ad9":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement;e._self._c},u=[]},3619:function(e,n,t){"use strict";var a=t("b614"),r=t.n(a);r.a},7172:function(e,n,t){"use strict";var a=t("a0c1"),r=t.n(a);r.a},"7b1f":function(e,n,t){"use strict";t.r(n);var a=t("2ad9"),r=t("a31b");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("7172"),t("3619");var i,o=t("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"2f27f80e",null,!1,a["a"],i);n["default"]=s.exports},a0c1:function(e,n,t){},a31b:function(e,n,t){"use strict";t.r(n);var a=t("268e"),r=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);n["default"]=r.a},b614:function(e,n,t){},b7ab:function(e,n,t){"use strict";(function(e){t("c2b2");a(t("66fd"));var n=a(t("7b1f"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["b7ab","common/runtime","common/vendor"]]]);