(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{441:function(t,e,s){var n=s(522);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(27).default)("c5715a36",n,!1,{sourceMap:!1})},521:function(t,e,s){"use strict";var n=s(441);s.n(n).a},522:function(t,e,s){(t.exports=s(26)(!1)).push([t.i,"\n#screen {\n  max-height: 100vh;\n  overflow-y: auto;\n}\n",""])},537:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"uk-panel"},[e("div",{staticClass:"uk-grid-collapse uk-child-width-expand@s",attrs:{"uk-grid":"","uk-height-viewport":""}},[e("div",{staticClass:"uk-panel uk-background-primary uk-light"},[e("marcus")],1),e("div",{staticClass:"uk-panel uk-background-muted uk-padding",attrs:{id:"screen"}},[e("article",{attrs:{"uk-overflow-auto":""},domProps:{innerHTML:this._s(this.$md.render(this.article))}})])])])};n._withStripped=!0;s(45);var i,r=s(7),a=s.n(r),u={layout:"melissa",components:{marcus:s(471).a},created:function(){this.getItems()},methods:{getItems:(i=a()(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://raw.githubusercontent.com/athensinitiative/research/master/signs.md","https://raw.githubusercontent.com/athensinitiative/research/master/mini.md",t.next=4,this.$axios.$get("https://raw.githubusercontent.com/athensinitiative/research/master/mini.md");case 4:return s=t.sent,t.next=7,this.$axios.$get(e);case 7:t.sent,this.article=s,console.dir("ARTICLE LOADED",s);case 10:case"end":return t.stop()}},t,this)})),function(){return i.apply(this,arguments)})},data:function(){return{article:""}}},c=(s(521),s(5)),o=Object(c.a)(u,n,[],!1,null,null,null);o.options.__file="sidn.vue";e.default=o.exports}}]);