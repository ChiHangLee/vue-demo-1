(function(n){function t(t){for(var l,c,i=t[0],u=t[1],s=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(n[l]=u[l]);a&&a(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var n,t=0;t<o.length;t++){for(var e=o[t],l=!0,i=1;i<e.length;i++){var u=e[i];0!==r[u]&&(l=!1)}l&&(o.splice(t--,1),n=c(c.s=e[0]))}return n}var l={},r={app:0},o=[];function c(t){if(l[t])return l[t].exports;var e=l[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=n,c.c=l,c.d=function(n,t,e){c.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,t){if(1&t&&(n=c(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var l in n)c.d(e,l,function(t){return n[t]}.bind(null,l));return e},c.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="/vue-demo-1/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var a=u;o.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";e("85ec")},"07e1":function(n,t,e){"use strict";e("2acc")},"2acc":function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var l=e("2b0e"),r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",[n._v("n 的值为"+n._s(n.n))]),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(0,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(1,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(2,t)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(3,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(4,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(5,t)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(6,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(7,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(8,t)}}})],1),e("div",[n._v(n._s(n.map))]),e("div",[n._v(n._s(n.result))])])},o=[],c=(e("99af"),e("d81d"),function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n._v(" "+n._s(n.n)+" "),e("div",{staticClass:"cell",on:{click:n.onClickSelf}},[n.a?[n._v(n._s(n.text))]:void 0],2)])}),i=[],u={props:["n"],data:function(){return{a:!1,text:""}},methods:{onClickSelf:function(){""===this.text&&(this.a=!0,this.text=this.n%2===0?"x":"o",this.$emit("click",this.text))}}},s=u,a=(e("07e1"),e("2877")),f=Object(a["a"])(s,c,i,!1,null,null,null),p=f.exports,d={components:{Cell:p},data:function(){return{n:0,map:[[null,null,null],[null,null,null],[null,null,null]],result:!1}},methods:{onClickCell:function(n,t){console.log("".concat(n,"号被点击, 内容是: ").concat(t)),this.map[Math.floor(n/3)][n%3]=t,this.n=this.n+1,this.tell()},tell:function(){for(var n=this.map,t=0;t<2;t++)console.log(n[t][0]),console.log(n[t][1]),console.log(n[t][2]),null!==n[t][0]&&n[t][0]===n[t][1]&&n[t][1]===n[t][2]&&(this.result=!0);for(var e=0;e<2;e++)null!==n[0][e]&&n[0][e]===n[1][e]&&n[0][e]===n[2][e]&&(this.result=n[0][e]);null!==n[0][0]&&n[0][0]===n[1][1]&&n[1][1]===n[2][2]&&(this.result=n[0][0]),null!==n[0][2]&&n[0][2]===n[1][1]&&n[1][1]===n[2][0]&&(this.result=n[0][2])}}},v=d,h=(e("034f"),Object(a["a"])(v,r,o,!1,null,null,null)),C=h.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(n){return n(C)}}).$mount("#div1")},"85ec":function(n,t,e){}});
//# sourceMappingURL=app.81d47f23.js.map