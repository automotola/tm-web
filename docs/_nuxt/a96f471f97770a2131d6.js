(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{401:function(t,e,n){var i=n(415);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(32).default)("4fff1354",i,!1,{sourceMap:!1})},414:function(t,e,n){"use strict";var i=n(401);n.n(i).a},415:function(t,e,n){(t.exports=n(31)(!1)).push([t.i,"\n#screen {\n  max-height: 100vh;\n  overflow-y: auto;\n}\n",""])},421:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"uk-panel"},[e("div",{staticClass:"uk-grid-collapse uk-child-width-expand@s",attrs:{"uk-grid":"","uk-height-viewport":""}},[e("div",{staticClass:"uk-panel uk-background-primary uk-light"},[e("mini",{attrs:{content:this.content}})],1),e("div",{staticClass:"uk-panel uk-background-muted uk-padding",attrs:{id:"screen"}},[e("article",{attrs:{"uk-overflow-auto":""},domProps:{innerHTML:this._s(this.$md.render(this.article))}})])])])};i._withStripped=!0;n(41);var s,r=n(5),a=n.n(r),o={layout:"melissa",components:{mini:n(403).a},created:function(){this.getItems()},methods:{getItems:(s=a()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"https://raw.githubusercontent.com/athensinitiative/research/master/mini.md",t.next=3,this.$axios.$get("https://raw.githubusercontent.com/athensinitiative/research/master/mini.md");case 3:e=t.sent,this.article=e,console.dir("ARTICLE LOADED");case 6:case"end":return t.stop()}},t,this)})),function(){return s.apply(this,arguments)})},data:function(){return{article:"",options:{graph:!0,scene:!0,field:!0,location:!0},content:{hero:!0,logo:!1}}}},c=(n(414),n(9)),u=Object(c.a)(o,i,[],!1,null,null,null);u.options.__file="sidn.vue";e.default=u.exports}}]);