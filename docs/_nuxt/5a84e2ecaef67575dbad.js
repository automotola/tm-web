(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{399:function(t,e,s){var a=s(411);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(32).default)("5b8efb8d",a,!1,{sourceMap:!1})},400:function(t,e,s){var a=s(413);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(32).default)("6bd7887e",a,!1,{sourceMap:!1})},403:function(t,s,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel"},[e("mini-pad",{attrs:{symbols:this.signs4,users:this.signs4}})],1)};n._withStripped=!0;var i=a(63),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-position-bottom uk-overlay uk-overlay-default uk-text-center"},[s("a",{staticClass:"uk-button uk-button-default rounded-full",attrs:{href:"#offcanvas-slide","uk-toggle":""}},[t._v(t._s(t.medium))]),s("div",{staticClass:"uk-background-muted",attrs:{id:"offcanvas-slide","uk-offcanvas":""}},[s("div",{staticClass:"uk-offcanvas-bar"},[s("ul",{staticClass:"uk-nav uk-nav-default"},[t._m(0),t._l(t.options,function(e){return s("li",{key:e.index},[s("a",{attrs:{href:"#"}},[s("i",{class:"icon ion-ios-"+e}),t._v(t._s(e))])])})],2)])])])};o._withStripped=!0;var r={props:["medium","options"],data:function(){return{selection:1}}},u=a(9),l=Object(u.a)(r,o,[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#"}},[this._v("Options")])])}],!1,null,null,null);l.options.__file="MiniBar.vue";var c=l.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-panel"},[s("section",{staticClass:"hero is-medium is-large"},[s("div",{staticClass:"hero-head"},[s("div",{staticClass:"uk-container uk-padding-top"},[s("article",{staticClass:"uk-section uk-text-center uk-article uk-height-small"},[s("h3",{staticClass:"uk-article-meta"},[t._v(t._s(t.story[0].title))]),s("p",{staticClass:"uk-text-lead"},[t._v(t._s(t.story[0].description))])])])]),s("div",{staticClass:"hero-body uk-padding-remove-top"},[s("div",{staticClass:"uk-container"},[s("div",{staticClass:"uk-margin"},[s("div",{staticClass:"uk-panel uk-inline uk-width-1-1"},[s("div",{staticClass:"uk-width-1-1",attrs:{id:"one"}},["global"===t.input.type?[s("button",{staticClass:"uk-form-icon uk-margin-small-left",attrs:{"uk-icon":"world"}})]:"social"===t.input.type?[s("button",{staticClass:"uk-form-icon uk-margin-small-left",attrs:{"uk-icon":"social"}})]:"personal"===t.input.type?[s("button",{staticClass:"uk-form-icon uk-margin-small-left",attrs:{"uk-icon":"users"}})]:[s("button",{staticClass:"uk-form-icon uk-margin-small-left",attrs:{"uk-icon":"user"}})],s("div",{attrs:{"uk-drop":"pos: top-justify; boundary: #one; boundary-align: true; mode: click; offset: 0"}},[s("div",{staticClass:"uk-card uk-card-small uk-card-body uk-card-default rounded uk-height-small uk-flex uk-flex-middle"},[s("div",{staticClass:"uk-form-label"}),s("div",{staticClass:"uk-form-controls"},t._l(t.control.message,function(e){return s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.type,expression:"input.type"}],staticClass:"uk-radio",attrs:{type:"radio",name:"radio-"+e.name},domProps:{value:e.name,checked:e.checked,checked:t._q(t.input.type,e.name)},on:{change:function(s){t.$set(t.input,"type",e.name)}}}),t._v(" "+t._s(e.name)),s("br")])}))])])],2),s("button",{staticClass:"uk-form-icon uk-form-icon-flip uk-margin-small-top uk-margin-small-right uk-icon-button",attrs:{href:"","uk-icon":"check"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.message,expression:"input.message"}],staticClass:"uk-form-large uk-input shadow rounded",attrs:{placeholder:t.story[0].plot[0].call,type:"text"},domProps:{value:t.input.message},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleSubmit(e):null},input:function(e){e.target.composing||t.$set(t.input,"message",e.target.value)}}})])]),s("div",{staticClass:"uk-margin"},[s("div",{staticClass:"uk-card uk-card-body uk-padding-remove"},[s("div",{staticClass:"uk-panel"},[s("ul",{staticClass:"uk-subnav uk-subnav-pills",attrs:{"uk-tab":"connect: #display"}},[t._m(0),s("li",[s("a",{attrs:{href:"#Messages"}},[0===t.events.length?[s("span",[t._v(t._s("Messages"))])]:1===t.events.length?[s("span",[t._v(t._s(t.events.length+" Message"))])]:[s("span",[t._v(t._s(t.events.length+" Messages"))])]],2)]),t._m(1)]),s("ul",{staticClass:"uk-switcher uk-margin",attrs:{id:"display"}},[s("li",[s("pre",{staticClass:"uk-height-small"},[t._v(t._s(t.input))])]),s("li",[s("div",{staticClass:"uk-overflow-auto uk-height-small"},[s("table",{staticClass:"uk-table uk-tsable-small uk-table-divider uk-table-hover uk-margin-remove"},[t._m(2),s("tbody",t._l(t.events,function(e){return s("tr",{staticClass:"rounded"},[s("td",[t._v(t._s(e.message))]),s("td",[t._v(t._s(e.time))])])}))])])]),s("li",[s("div",{staticClass:"uk-overflow-auto uk-height-small"},[s("table",{staticClass:"uk-table uk-tsable-small uk-table-divider uk-table-hover uk-margin-remove"},[t._m(3),s("tbody",t._l(t.users,function(e){return s("tr",{staticClass:"rounded"},[s("td",[t._v(t._s(e.username))]),s("td",[t._v(t._s(e.description))])])}))])])])])])])]),s("div",{staticClass:"uk-margin"})])]),s("div",{staticClass:"hero-foot"})])])};m._withStripped=!0;a(20);var d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-panel uk-inline uk-width-1-1"},[s("div",{staticClass:"uk-width-1-1"},[s("button",{staticClass:"uk-form-icon uk-margin-small-left",attrs:{"uk-icon":"world"}}),s("div",{attrs:{"uk-drop":"pos: top-justify; boundary: .uk-width-1-1; boundary-align: true; mode: click"}},[s("div",{staticClass:"uk-card uk-card-small uk-card-body uk-card-default rounded"},[s("div",{staticClass:"uk-form-label"}),s("div",{staticClass:"uk-form-controls"},t._l(t.control.message,function(e){return s("label",[s("input",{staticClass:"uk-radio",attrs:{type:"radio",name:"radio-"+e}}),t._v(" "+t._s(e)),s("br")])}))])])]),t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.message,expression:"input.message"}],staticClass:"uk-form-large uk-input shadow rounded",attrs:{placeholder:t.state.script,type:"text"},domProps:{value:t.input.message},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleSubmit(e):null},input:function(e){e.target.composing||t.$set(t.input,"message",e.target.value)}}})])};d._withStripped=!0;var p=a(29),k=a.n(p),f=void 0,v={name:"uk-form",data:function(){return{username:"",editable:{username:!1}}},computed:k()({},Object(i.c)({account:function(t){return t.account}})),methods:k()({},Object(i.b)({updateActiveAccount:"updateActiveAccount"}),{submitAccountForm:function(){console.log("ACCOUNT FORM SUBMITTED",f.username),f.$store.commit("user/update",f.username)},updateAccount:function(){f.$store.commit("user/update",f.name),f.$store.commit("user/updateActiveAccount",val)},updateFamily:function(){var t={name:this.name},e=this.$gun.get("mini/family"),s=this.$gun.get("mini/me");s.put(t),e.set(s)},toggleEditable:function(){this.e=!e}})},h=Object(u.a)(v,d,[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"uk-form-icon uk-form-icon-flip uk-margin-small-right"},[e("a",{staticClass:"uk-icon-button",attrs:{href:"","uk-icon":"check"}})])}],!1,null,null,null);h.options.__file="form.vue";var g=h.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("label"),t._v("Username:"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),s("button",{attrs:{type:"submit"}},[t._v("Submit")])])};_._withStripped=!0;var b={name:"vanilla-form",data:function(){return{name:""}},computed:k()({},Object(i.c)({updateAccount:function(t){return t.account}})),methods:{handleSubmit:function(){console.log("ACCOUNT FORM SUBMITTED",this.name)}}},y=Object(u.a)(b,_,[],!1,null,null,null);y.options.__file="form.vue";var C=y.exports,w=a(0);a(404),a(405),a(407);a(409);var x={props:["medium","symbols"],components:{UkForm:g,VanillaForm:C},data:function(){return{input:{message:"",type:""},events:[],story:[{title:"Messaging",description:"Write a message!",plot:[{call:"Write your message",type:"action"}],events:[]},{title:"Privacy",description:"Select your level of privacy.",plot:[{call:"Write your message",type:"action"}],events:[]}],control:{message:[{name:"global",checked:"checked"},{name:"social",checked:"unchecked"},{name:"personal",checked:"unchecked"},{name:"private",checked:"unchecked"}]}}},computed:{origin:function(){return this.$store.state.account}},methods:{handleSubmit:function(){var t={};t.from=this.user,t.time=new Date,t.message=this.input.message,t.type=this.input.type,console.log("NEW SIGNAL",t);var e=this.events;console.log("OLD STORY",e),e.push(t),console.log("NEW STORY",e),this.$gun.get("mini/signs").map().once(function(t,e){var s={};s.text=t.name,signs.push(s)})}},mounted:function(){this.$nextTick(function(){console.log("MINI PAD LOADED"),console.log("MINI BOT LOADED"),w.a.config.devtools=!0})}},M=(a(410),Object(u.a)(x,m,[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#Message"}},[this._v("Data")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#Members"}},[this._v("Members")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Message")]),e("th",[this._v("Moment")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Username")]),e("th",[this._v("Description")])])])}],!1,null,"32cde623",null));M.options.__file="MiniPad.vue";var $={head:{title:"Machine Insight Network Interpreter",link:[{rel:"stylesheet",type:"text/css",href:"https://unpkg.com/ionicons@4.4.6/dist/css/ionicons.min.css"}]},props:["content"],components:{MiniPad:M.exports,MiniBar:c},data:function(){return{signs4:["add-circle-outline","analytics","aperture","apps"],signs20:["add-circle-outline","analytics","aperture","apps","barcode","basket","cafe","contact","desktop","fitness","football","globe","moon","rainy","water","trash","thumbs-up","thumbs-down","sunny","gift"]}},computed:{},mounted:function(){this.$nextTick(function(){console.log("MINI TEMP LOADED")})}},E=(a(412),Object(u.a)($,n,[],!1,null,null,null));E.options.__file="mini.vue";s.a=E.exports},410:function(t,e,s){"use strict";var a=s(399);s.n(a).a},411:function(t,e,s){(t.exports=s(31)(!1)).push([t.i,"\n.uk-form-large[data-v-32cde623]:not(textarea):not([multiple]):not([size]) {\n  padding-right: 50px !important;\n}\n.uk-form-large[data-v-32cde623]:not(textarea):not([multiple]):not([size]) {\n  padding-left: 45px !important;\n}\n.uk-margin-small-right[data-v-32cde623] {\n  margin-right: 5px !important;\n}\n.uk-margin-small-left[data-v-32cde623] {\n  margin-left: 5px !important;\n}\n",""])},412:function(t,e,s){"use strict";var a=s(400);s.n(a).a},413:function(t,e,s){(t.exports=s(31)(!1)).push([t.i,"\n.spinning {\n  -webkit-animation: rotate 30s infinite linear;\n          animation: rotate 30s infinite linear;\n}\n@-webkit-keyframes rotate {\n100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n}\n}\n@keyframes rotate {\n100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n}\n}\n",""])}}]);