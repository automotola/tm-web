(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{588:function(t,e,a){var s=a(644);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(42).default)("50a1c902",s,!1,{sourceMap:!1})},589:function(t,e,a){var s=a(653);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(42).default)("fd7663c2",s,!1,{sourceMap:!1})},627:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel",attrs:{"uk-slider":"center: true; clsActivated: uk-transition-active"}},[a("div",{staticClass:"uk-position-relative uk-visible-toggle uk-light"},[a("ul",{staticClass:"uk-slider-items uk-grid uk-child-width-1-1@s"},t._l(t.stories,function(e){return a("li",[a("sequence",{attrs:{story:e,users:t.contacts,user:t.current,id:e.title}})],1)}))]),a("ul",{staticClass:"uk-slider-nav uk-dotnav uk-flex-center uk-position-bottom uk-padding-small"})])};s._withStripped=!0;var n=a(313),i=a.n(n),r=(a(27),a(78),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uk-panel"},[a("section",{staticClass:"hero is-medium"},[a("div",{staticClass:"hero-head"},[a("div",{staticClass:"uk-container"},[a("article",{staticClass:"uk-section uk-text-center uk-article"},[a("h3",{staticClass:"uk-article-meta"},[t._v(t._s(t.story.name))]),a("p",{staticClass:"uk-text-lead"},[t._v(t._s(t.story.description))])])])]),a("div",{staticClass:"hero-body panel uk-padding-remove-top"},[a("div",{staticClass:"panel"},[a("model",{staticClass:"uk-transition-slide-bottom-small",attrs:{story:t.story},on:{instance:t.createStatement}})],1),a("div",{staticClass:"panel"},[void 0===t.output?a("content-loader",{staticClass:"uk-background-muted",attrs:{speed:2,animate:!0,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb",height:103,width:299}},[a("rect",{attrs:{x:"86",y:"28",rx:"3",ry:"3",width:"128.64",height:"7.42"}}),a("rect",{attrs:{x:"50",y:"47",rx:"3",ry:"3",width:"201",height:"7.42"}}),a("rect",{attrs:{x:"50",y:"68",rx:"3",ry:"3",width:"201",height:"7.42"}})]):a("instance",{attrs:{story:t.story,output:t.output,user:t.user}})],1)]),a("div",{staticClass:"hero-foot"})])])});r._withStripped=!0;var o=a(650),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{name:t.story.title,action:t.story.action},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[t._l(t.story.activity,function(e){return a("div",{staticClass:"uk-width-1-1 uk-margin-remove"},[a("entry",{attrs:{action:e},on:{signal:t.readSignal}})],1)}),t._m(0)],2)};l._withStripped=!0;var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"molecule"},["text"===t.action.type?a("div",{staticClass:"atom uk-inline uk-width-1-1"},[a("span",{staticClass:"uk-form-icon",attrs:{"uk-icon":t.action.symbol}}),"checkbox"===t.action.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"},{name:"validate",rawName:"v-validate",value:t.action.valid,expression:"action.valid"}],staticClass:"uk-input",attrs:{name:t.action.name,placeholder:t.action.cue,type:"checkbox"},domProps:{checked:Array.isArray(t.entry)?t._i(t.entry,null)>-1:t.entry},on:{change:[function(e){var a=t.entry,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.entry=a.concat([null])):i>-1&&(t.entry=a.slice(0,i).concat(a.slice(i+1)))}else t.entry=n},t.signal]}}):"radio"===t.action.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"},{name:"validate",rawName:"v-validate",value:t.action.valid,expression:"action.valid"}],staticClass:"uk-input",attrs:{name:t.action.name,placeholder:t.action.cue,type:"radio"},domProps:{checked:t._q(t.entry,null)},on:{change:[function(e){t.entry=null},t.signal]}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"},{name:"validate",rawName:"v-validate",value:t.action.valid,expression:"action.valid"}],staticClass:"uk-input",attrs:{name:t.action.name,placeholder:t.action.cue,type:t.action.type},domProps:{value:t.entry},on:{change:t.signal,input:function(e){e.target.composing||(t.entry=e.target.value)}}})]):t._e(),"email"===t.action.type?a("div",{staticClass:"atom uk-inline uk-width-1-1"},[a("span",{staticClass:"uk-form-icon",attrs:{"uk-icon":t.action.symbol}}),"checkbox"===t.action.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"},{name:"validate",rawName:"v-validate",value:t.action.valid,expression:"action.valid"}],staticClass:"uk-input",attrs:{name:t.action.name,placeholder:t.action.cue,type:"checkbox"},domProps:{checked:Array.isArray(t.entry)?t._i(t.entry,null)>-1:t.entry},on:{change:[function(e){var a=t.entry,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.entry=a.concat([null])):i>-1&&(t.entry=a.slice(0,i).concat(a.slice(i+1)))}else t.entry=n},t.signal]}}):"radio"===t.action.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"},{name:"validate",rawName:"v-validate",value:t.action.valid,expression:"action.valid"}],staticClass:"uk-input",attrs:{name:t.action.name,placeholder:t.action.cue,type:"radio"},domProps:{checked:t._q(t.entry,null)},on:{change:[function(e){t.entry=null},t.signal]}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"},{name:"validate",rawName:"v-validate",value:t.action.valid,expression:"action.valid"}],staticClass:"uk-input",attrs:{name:t.action.name,placeholder:t.action.cue,type:t.action.type},domProps:{value:t.entry},on:{change:t.signal,input:function(e){e.target.composing||(t.entry=e.target.value)}}})]):"option"===t.action.type?a("div",{staticClass:"atom uk-inline uk-width-1-1"},[t._l(t.options,function(e){return e.value===t.entry?[a("span",{staticClass:"uk-form-icon",attrs:{"uk-icon":e.symbol}})]:t._e()}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"}],staticClass:"uk-input uk-select",attrs:{name:t.action.name},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.entry=e.target.multiple?a:a[0]},t.signal]}},t._l(t.options,function(e){return a("option",{attrs:{disabled:e.disabled},domProps:{value:e.value}},[t._v(t._s(e.name))])}))],2):t._e()])};c._withStripped=!0;var u={props:["action"],data:function(){return{entry:""}},methods:{signal:function(t){this.$emit("signal",t)}},computed:{options:function(){return this.action.option}}},d=a(10),p=Object(d.a)(u,c,[],!1,null,null,null);p.options.__file="entry.vue";var m,v=p.exports,y=a(104),h=(m={name:"model",props:["story"],components:{"vue-form-generator":a.n(y).a.component},data:function(){return{instance:{}}}},i()(m,"components",{Entry:v}),i()(m,"methods",{submit:function(){var t=this.instance;t.type=this.story.name,this.$emit("instance",t)},readSignal:function(t){console.log("GOT SIGNAL",t);var e=t.path[0];console.log("GOT DATA",e);var a=["name","value"];console.log("THESE KEYS",a);var s=this.$mark.wasObject(a,e);console.log("ACTUAL DATA",s);var n=this.recordData(s);console.log("STREAMING RECORD",n);var i=this.$mark.wasObject(["type","timeStamp","isTrusted"],t),r=this.recordEvent(i,n);this.$store.commit("stream/signal",r),console.log("STREAMING SIGNAL",r)},recordData:function(t){var e=this.instance,a=this.$mark.wasEntry(t.name,t.value),s=this.$mark.wasObject(e,a);return this.instance=s,s},recordEvent:function(t,e){var a={};return a.source=t,a.value=e,a.setting=this.story.title,a}}),m),k=(a(643),Object(d.a)(h,l,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"atom uk-inline uk-width-1-1"},[e("span",{staticClass:"uk-form-icon",attrs:{"uk-icon":"play-circle"}}),e("input",{staticClass:"uk-input uk-button",attrs:{type:"submit"}})])}],!1,null,null,null));k.options.__file="model.vue";var f=k.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card rounded-lg"},["profile"===t.story.type?a("div",{staticClass:"card-content is-paddingless"},[a("article",{staticClass:"message is-small"},[a("div",{staticClass:"message-header"},[a("div",{staticClass:"uk-grid-small uk-flex-middle",attrs:{"uk-grid":""}},[a("div",{staticClass:"uk-width-auto"},[a("img",{staticClass:"uk-border-circle",attrs:{width:"40",height:"40",src:"https://ui-avatars.com/api/?name="+t.output.name}})]),a("div",{staticClass:"uk-width-expand"},[a("ul",[a("li",[t._v(t._s(t.output.name)),a("dl",{staticClass:"uk-description-list"},[a("dd",[t._v(t._s(t.output.role))])])])])])])]),t._m(0)])]):"message"===t.story.type?a("div",{staticClass:"card-content is-paddingless"},[a("article",{staticClass:"message is-small"},[null!==t.user.name?a("div",{staticClass:"message-header"},[a("p",[t._v(t._s(t.output.domain))]),a("button",{staticClass:"delete is-small",attrs:{"aria-label":"delete"}})]):t._e(),a("div",{staticClass:"message-body"},[t._v(t._s(t.output.message)),a("div",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-left"},[t._v(t._s(t.output.time))]),a("div",{staticClass:"level-right"},[a("span",{staticClass:"tag"},[t._v(t._s(t.output.domain))])])])])])]):"profile"===t.story.type?a("div",{staticClass:"card-content is-paddingless"},[a("div",{staticClass:"uk-card uk-card-default"},[a("div",{staticClass:"uk-card-header"},[a("div",{staticClass:"uk-grid-small uk-flex-middle uk-text-center",attrs:{"uk-grid":""}},[a("div",{staticClass:"uk-width-1-1"},[a("dl",[a("dt",[t._v(t._s(t.output.type))]),a("dd",[t._v(t._s(t.output.name))]),a("dd",[t._v(t._s(t.output.email))]),a("dd",[t._v(t._s(t.output.geo))])])])])])])]):a("div",{staticClass:"card-content is-paddingless"},[a("div",{staticClass:"uk-card uk-card-default uk-width-1-2@m"},[a("div",{staticClass:"uk-card-header"},[a("div",{staticClass:"uk-grid-small uk-flex-middle uk-text-center",attrs:{"uk-grid":""}},[a("div",{staticClass:"uk-width-1-1"},[a("dl",[a("dt",[t._v(t._s(t.output.type))]),a("dd",[t._v(t._s(t.output.name))]),a("dd",[t._v(t._s(t.output.email))]),a("dd",[t._v(t._s(t.output.geo))])])])])])])])])};g._withStripped=!0;var _={name:"instance",props:["output","story","user"],mounted:function(){console.log("OBJECT INSTANCE LOADED")}},C=Object(d.a)(_,g,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"message-body"},[e("progress",{staticClass:"uk-progress is-marginless",attrs:{id:"js-progressbar",value:"10",max:"100"}})])}],!1,null,null,null);C.options.__file="instance.vue";var w=C.exports;a(2),a(645),a(646),a(648);a(309);var b={components:{Model:f,Instance:w,ContentLoader:o.a},props:["stream","story","users","user"],data:function(){return{output:void 0}},methods:{createStatement:function(t){this.output=t},createProfile:function(t){var e={};return e.name=t.user,e.role=t.role,e},checkSignature:function(t){}}},x=Object(d.a)(b,r,[],!1,null,null,null);x.options.__file="sequence.vue";var A,E=(A={props:["story"],components:{sequence:x.exports},data:function(){return{signs4:["add-circle-outline","analytics","aperture","apps"],signs20:["add-circle-outline","analytics","aperture","apps","barcode","basket","cafe","contact","desktop","fitness","football","globe","moon","rainy","water","trash","thumbs-up","thumbs-down","sunny","gift"]}},computed:{}},i()(A,"computed",{users:function(){var t=this.$gun.get("mini"),e=[];return t.map().once(function(t,a){var s=this.contact.name=t.name;console.log(t,s),e.push(s)}),console.log("List computed:",e,new Date),e},stories:function(){return this.$store.state.story.script},contacts:function(){return this.$store.state.user.contact},current:function(){return this.$store.state.record.instance}}),i()(A,"mounted",function(){this.$nextTick(function(){console.log("MARCUS APP LOADED")})}),A),N=(a(652),Object(d.a)(E,s,[],!1,null,null,null));N.options.__file="index.vue";e.a=N.exports},643:function(t,e,a){"use strict";var s=a(588);a.n(s).a},644:function(t,e,a){(t.exports=a(41)(!1)).push([t.i,'\ninput[type="submit"] {\n  text-align: left;\n}\n',""])},652:function(t,e,a){"use strict";var s=a(589);a.n(s).a},653:function(t,e,a){(t.exports=a(41)(!1)).push([t.i,"\n.spinning {\n  -webkit-animation: rotate 30s infinite linear;\n          animation: rotate 30s infinite linear;\n}\n@-webkit-keyframes rotate {\n100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n}\n}\n@keyframes rotate {\n100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n}\n}\n",""])}}]);