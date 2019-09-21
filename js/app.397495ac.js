(function(e){function t(t){for(var n,l,u=t[0],a=t[1],s=t[2],p=0,f=[];p<u.length;p++)l=u[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);i&&i(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(c.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},c=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vuejs-traffic-light-simulator/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var i=a;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"191a":function(e,t,r){"use strict";var n=r("22c1"),o=r.n(n);o.a},"22c1":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},c=[],l=r("2877"),u={},a=Object(l["a"])(u,o,c,!1,null,null,null),s=a.exports,i=(r("7f7f"),r("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("Lamp",{staticClass:"lamp",attrs:{color:"red",currentColorIsOn:e.currentColorIsOn,sec:e.counter}}),r("Lamp",{staticClass:"lamp",attrs:{color:"yellow",currentColorIsOn:e.currentColorIsOn,sec:e.counter}}),r("Lamp",{staticClass:"lamp",attrs:{color:"green",currentColorIsOn:e.currentColorIsOn,sec:e.counter}})],1)},f=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:"lamp_"+e.color+(e.color===e.currentColorIsOn?"":"_off")+" "+(e.sec<4&&e.color===e.currentColorIsOn?"blink":"")},[r("div",{staticClass:"lamp__counter"},[e._v("\n    "+e._s(e.color===e.currentColorIsOn?e.sec:"")+"\n  ")])])},h=[],d={name:"Lamp",props:["color","currentColorIsOn","sec"]},v=d,O=(r("191a"),Object(l["a"])(v,m,h,!1,null,null,null)),b=O.exports,C={name:"home",props:["currentColorIsOn","time","nextColor"],components:{Lamp:b},data:function(){return{counter:this.time/1e3,interval:null}},watch:{$route:function(e,t){var r=this,n=this.time;setTimeout((function(){r.$router.push(r.nextColor)}),n),this.counter=this.time/1e3,clearInterval(this.interval),this.interval=setInterval((function(){r.counter-=1}),1e3)}},mounted:function(){var e=this,t=this.time;setTimeout((function(){e.$router.push(e.nextColor)}),t),this.interval=setInterval((function(){e.counter-=1}),1e3)}},y=C,w=(r("cccb"),Object(l["a"])(y,p,f,!1,null,null,null)),g=w.exports;n["a"].use(i["a"]);var I=new i["a"]({mode:"history",base:"/vuejs-traffic-light-simulator/",routes:[{path:"/",name:"home",component:g,props:{currentColorIsOn:"none"}},{path:"/red",name:"red",component:g,props:{currentColorIsOn:"red",time:1e4,nextColor:"yellow"}},{path:"/yellow",name:"yellow",component:g,props:{currentColorIsOn:"yellow",time:3e3,nextColor:"green"}},{path:"/green",name:"green",component:g,props:{currentColorIsOn:"green",time:15e3,nextColor:"red"}}]});I.beforeEach((function(e,t,r){"home"===e.name?I.push("red"):r()}));var _=I,x=r("2f62");n["a"].use(x["a"]);var j=new x["a"].Store({state:{},mutations:{}});n["a"].config.productionTip=!1,new n["a"]({router:_,store:j,render:function(e){return e(s)}}).$mount("#app")},cccb:function(e,t,r){"use strict";var n=r("d563"),o=r.n(n);o.a},d563:function(e,t,r){}});
//# sourceMappingURL=app.397495ac.js.map