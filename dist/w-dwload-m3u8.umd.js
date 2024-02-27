/*!
 * w-dwload-m3u8 v1.0.5
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path"),require("fs"),require("process"),require("child_process")):"function"==typeof define&&define.amd?define(["path","fs","process","child_process"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-dwload-m3u8"]=e(t.path,t.fs,t.process,t.child_process)}(this,(function(t,e,r,n){"use strict";var o=Array.isArray,u="object"==typeof global&&global&&global.Object===Object&&global,i="object"==typeof self&&self&&self.Object===Object&&self,a=u||i||Function("return this")(),c=a.Symbol,s=Object.prototype,f=s.hasOwnProperty,l=s.toString,h=c?c.toStringTag:void 0;var d=Object.prototype.toString;var p="[object Null]",v="[object Undefined]",y=c?c.toStringTag:void 0;function b(t){return null==t?void 0===t?v:p:y&&y in Object(t)?function(t){var e=f.call(t,h),r=t[h];try{t[h]=void 0;var n=!0}catch(t){}var o=l.call(t);return n&&(e?t[h]=r:delete t[h]),o}(t):function(t){return d.call(t)}(t)}function g(t){return null!=t&&"object"==typeof t}var _="[object Symbol]";function j(t){return"symbol"==typeof t||g(t)&&b(t)==_}var m=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$=/^\w*$/;function S(t,e){if(o(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!j(t))||($.test(t)||!m.test(t)||null!=e&&t in Object(e))}function w(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var O="[object AsyncFunction]",M="[object Function]",x="[object GeneratorFunction]",D="[object Proxy]";function A(t){if(!w(t))return!1;var e=b(t);return e==M||e==x||e==O||e==D}var k,z=a["__core-js_shared__"],P=(k=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"";var T=Function.prototype.toString;function E(t){if(null!=t){try{return T.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var F=/^\[object .+?Constructor\]$/,L=Function.prototype,I=Object.prototype,N=L.toString,R=I.hasOwnProperty,Y=RegExp("^"+N.call(R).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function C(t){return!(!w(t)||(e=t,P&&P in e))&&(A(t)?Y:F).test(E(t));var e}function H(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return C(r)?r:void 0}var W=H(Object,"create");var U=Object.prototype.hasOwnProperty;var B=Object.prototype.hasOwnProperty;function q(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function V(t,e){return t===e||t!=t&&e!=e}function J(t,e){for(var r=t.length;r--;)if(V(t[r][0],e))return r;return-1}q.prototype.clear=function(){this.__data__=W?W(null):{},this.size=0},q.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},q.prototype.get=function(t){var e=this.__data__;if(W){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return U.call(e,t)?e[t]:void 0},q.prototype.has=function(t){var e=this.__data__;return W?void 0!==e[t]:B.call(e,t)},q.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=W&&void 0===e?"__lodash_hash_undefined__":e,this};var Z=Array.prototype.splice;function G(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}G.prototype.clear=function(){this.__data__=[],this.size=0},G.prototype.delete=function(t){var e=this.__data__,r=J(e,t);return!(r<0)&&(r==e.length-1?e.pop():Z.call(e,r,1),--this.size,!0)},G.prototype.get=function(t){var e=this.__data__,r=J(e,t);return r<0?void 0:e[r][1]},G.prototype.has=function(t){return J(this.__data__,t)>-1},G.prototype.set=function(t,e){var r=this.__data__,n=J(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var Q=H(a,"Map");function K(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function X(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}X.prototype.clear=function(){this.size=0,this.__data__={hash:new q,map:new(Q||G),string:new q}},X.prototype.delete=function(t){var e=K(this,t).delete(t);return this.size-=e?1:0,e},X.prototype.get=function(t){return K(this,t).get(t)},X.prototype.has=function(t){return K(this,t).has(t)},X.prototype.set=function(t,e){var r=K(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};var tt="Expected a function";function et(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(tt);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],u=r.cache;if(u.has(o))return u.get(o);var i=t.apply(this,n);return r.cache=u.set(o,i)||u,i};return r.cache=new(et.Cache||X),r}et.Cache=X;var rt,nt,ot,ut=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,it=/\\(\\)?/g,at=(rt=function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ut,(function(t,r,n,o){e.push(n?o.replace(it,"$1"):r||t)})),e},nt=et(rt,(function(t){return 500===ot.size&&ot.clear(),t})),ot=nt.cache,nt),ct=at;var st=1/0,ft=c?c.prototype:void 0,lt=ft?ft.toString:void 0;function ht(t){if("string"==typeof t)return t;if(o(t))return function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,ht)+"";if(j(t))return lt?lt.call(t):"";var e=t+"";return"0"==e&&1/t==-st?"-0":e}function dt(t){return null==t?"":ht(t)}function pt(t,e){return o(t)?t:S(t,e)?[t]:ct(dt(t))}var vt=1/0;function yt(t){if("string"==typeof t||j(t))return t;var e=t+"";return"0"==e&&1/t==-vt?"-0":e}function bt(t,e){for(var r=0,n=(e=pt(e,t)).length;null!=t&&r<n;)t=t[yt(e[r++])];return r&&r==n?t:void 0}function gt(t,e,r){var n=null==t?void 0:bt(t,e);return void 0===n?r:n}function _t(t,e){for(var r=-1,n=null==t?0:t.length,o=0,u=[];++r<n;){var i=t[r];e(i,r,t)&&(u[o++]=i)}return u}var jt,mt=function(t,e,r){for(var n=-1,o=Object(t),u=r(t),i=u.length;i--;){var a=u[jt?i:++n];if(!1===e(o[a],a,o))break}return t};function $t(t){return g(t)&&"[object Arguments]"==b(t)}var St=Object.prototype,wt=St.hasOwnProperty,Ot=St.propertyIsEnumerable,Mt=$t(function(){return arguments}())?$t:function(t){return g(t)&&wt.call(t,"callee")&&!Ot.call(t,"callee")},xt=Mt;var Dt="object"==typeof exports&&exports&&!exports.nodeType&&exports,At=Dt&&"object"==typeof module&&module&&!module.nodeType&&module,kt=At&&At.exports===Dt?a.Buffer:void 0,zt=(kt?kt.isBuffer:void 0)||function(){return!1},Pt=9007199254740991,Tt=/^(?:0|[1-9]\d*)$/;function Et(t,e){var r=typeof t;return!!(e=null==e?Pt:e)&&("number"==r||"symbol"!=r&&Tt.test(t))&&t>-1&&t%1==0&&t<e}var Ft=9007199254740991;function Lt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Ft}var It={};function Nt(t){return function(e){return t(e)}}It["[object Float32Array]"]=It["[object Float64Array]"]=It["[object Int8Array]"]=It["[object Int16Array]"]=It["[object Int32Array]"]=It["[object Uint8Array]"]=It["[object Uint8ClampedArray]"]=It["[object Uint16Array]"]=It["[object Uint32Array]"]=!0,It["[object Arguments]"]=It["[object Array]"]=It["[object ArrayBuffer]"]=It["[object Boolean]"]=It["[object DataView]"]=It["[object Date]"]=It["[object Error]"]=It["[object Function]"]=It["[object Map]"]=It["[object Number]"]=It["[object Object]"]=It["[object RegExp]"]=It["[object Set]"]=It["[object String]"]=It["[object WeakMap]"]=!1;var Rt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Yt=Rt&&"object"==typeof module&&module&&!module.nodeType&&module,Ct=Yt&&Yt.exports===Rt&&u.process,Ht=function(){try{var t=Yt&&Yt.require&&Yt.require("util").types;return t||Ct&&Ct.binding&&Ct.binding("util")}catch(t){}}(),Wt=Ht&&Ht.isTypedArray,Ut=Wt?Nt(Wt):function(t){return g(t)&&Lt(t.length)&&!!It[b(t)]},Bt=Object.prototype.hasOwnProperty;function qt(t,e){var r=o(t),n=!r&&xt(t),u=!r&&!n&&zt(t),i=!r&&!n&&!u&&Ut(t),a=r||n||u||i,c=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],s=c.length;for(var f in t)!e&&!Bt.call(t,f)||a&&("length"==f||u&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Et(f,s))||c.push(f);return c}var Vt=Object.prototype;var Jt=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),Zt=Jt,Gt=Object.prototype.hasOwnProperty;function Qt(t){if(r=(e=t)&&e.constructor,e!==("function"==typeof r&&r.prototype||Vt))return Zt(t);var e,r,n=[];for(var o in Object(t))Gt.call(t,o)&&"constructor"!=o&&n.push(o);return n}function Kt(t){return null!=t&&Lt(t.length)&&!A(t)}function Xt(t){return Kt(t)?qt(t):Qt(t)}var te=function(t,e){return function(r,n){if(null==r)return r;if(!Kt(r))return t(r,n);for(var o=r.length,u=e?o:-1,i=Object(r);(e?u--:++u<o)&&!1!==n(i[u],u,i););return r}}((function(t,e){return t&&mt(t,e,Xt)})),ee=te;function re(t,e){var r=[];return ee(t,(function(t,n,o){e(t,n,o)&&r.push(t)})),r}function ne(t){var e=this.__data__=new G(t);this.size=e.size}ne.prototype.clear=function(){this.__data__=new G,this.size=0},ne.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},ne.prototype.get=function(t){return this.__data__.get(t)},ne.prototype.has=function(t){return this.__data__.has(t)},ne.prototype.set=function(t,e){var r=this.__data__;if(r instanceof G){var n=r.__data__;if(!Q||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new X(n)}return r.set(t,e),this.size=r.size,this};function oe(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new X;++e<r;)this.add(t[e])}function ue(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function ie(t,e){return t.has(e)}oe.prototype.add=oe.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},oe.prototype.has=function(t){return this.__data__.has(t)};var ae=1,ce=2;function se(t,e,r,n,o,u){var i=r&ae,a=t.length,c=e.length;if(a!=c&&!(i&&c>a))return!1;var s=u.get(t),f=u.get(e);if(s&&f)return s==e&&f==t;var l=-1,h=!0,d=r&ce?new oe:void 0;for(u.set(t,e),u.set(e,t);++l<a;){var p=t[l],v=e[l];if(n)var y=i?n(v,p,l,e,t,u):n(p,v,l,t,e,u);if(void 0!==y){if(y)continue;h=!1;break}if(d){if(!ue(e,(function(t,e){if(!ie(d,e)&&(p===t||o(p,t,r,n,u)))return d.push(e)}))){h=!1;break}}else if(p!==v&&!o(p,v,r,n,u)){h=!1;break}}return u.delete(t),u.delete(e),h}var fe=a.Uint8Array;function le(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function he(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var de=1,pe=2,ve="[object Boolean]",ye="[object Date]",be="[object Error]",ge="[object Map]",_e="[object Number]",je="[object RegExp]",me="[object Set]",$e="[object String]",Se="[object Symbol]",we="[object ArrayBuffer]",Oe="[object DataView]",Me=c?c.prototype:void 0,xe=Me?Me.valueOf:void 0;var De=Object.prototype.propertyIsEnumerable,Ae=Object.getOwnPropertySymbols,ke=Ae?function(t){return null==t?[]:(t=Object(t),_t(Ae(t),(function(e){return De.call(t,e)})))}:function(){return[]};function ze(t){return function(t,e,r){var n=e(t);return o(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Xt,ke)}var Pe=1,Te=Object.prototype.hasOwnProperty;var Ee=H(a,"DataView"),Fe=H(a,"Promise"),Le=H(a,"Set"),Ie=H(a,"WeakMap"),Ne="[object Map]",Re="[object Promise]",Ye="[object Set]",Ce="[object WeakMap]",He="[object DataView]",We=E(Ee),Ue=E(Q),Be=E(Fe),qe=E(Le),Ve=E(Ie),Je=b;(Ee&&Je(new Ee(new ArrayBuffer(1)))!=He||Q&&Je(new Q)!=Ne||Fe&&Je(Fe.resolve())!=Re||Le&&Je(new Le)!=Ye||Ie&&Je(new Ie)!=Ce)&&(Je=function(t){var e=b(t),r="[object Object]"==e?t.constructor:void 0,n=r?E(r):"";if(n)switch(n){case We:return He;case Ue:return Ne;case Be:return Re;case qe:return Ye;case Ve:return Ce}return e});var Ze=Je,Ge=1,Qe="[object Arguments]",Ke="[object Array]",Xe="[object Object]",tr=Object.prototype.hasOwnProperty;function er(t,e,r,n,u,i){var a=o(t),c=o(e),s=a?Ke:Ze(t),f=c?Ke:Ze(e),l=(s=s==Qe?Xe:s)==Xe,h=(f=f==Qe?Xe:f)==Xe,d=s==f;if(d&&zt(t)){if(!zt(e))return!1;a=!0,l=!1}if(d&&!l)return i||(i=new ne),a||Ut(t)?se(t,e,r,n,u,i):function(t,e,r,n,o,u,i){switch(r){case Oe:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case we:return!(t.byteLength!=e.byteLength||!u(new fe(t),new fe(e)));case ve:case ye:case _e:return V(+t,+e);case be:return t.name==e.name&&t.message==e.message;case je:case $e:return t==e+"";case ge:var a=le;case me:var c=n&de;if(a||(a=he),t.size!=e.size&&!c)return!1;var s=i.get(t);if(s)return s==e;n|=pe,i.set(t,e);var f=se(a(t),a(e),n,o,u,i);return i.delete(t),f;case Se:if(xe)return xe.call(t)==xe.call(e)}return!1}(t,e,s,r,n,u,i);if(!(r&Ge)){var p=l&&tr.call(t,"__wrapped__"),v=h&&tr.call(e,"__wrapped__");if(p||v){var y=p?t.value():t,b=v?e.value():e;return i||(i=new ne),u(y,b,r,n,i)}}return!!d&&(i||(i=new ne),function(t,e,r,n,o,u){var i=r&Pe,a=ze(t),c=a.length;if(c!=ze(e).length&&!i)return!1;for(var s=c;s--;){var f=a[s];if(!(i?f in e:Te.call(e,f)))return!1}var l=u.get(t),h=u.get(e);if(l&&h)return l==e&&h==t;var d=!0;u.set(t,e),u.set(e,t);for(var p=i;++s<c;){var v=t[f=a[s]],y=e[f];if(n)var b=i?n(y,v,f,e,t,u):n(v,y,f,t,e,u);if(!(void 0===b?v===y||o(v,y,r,n,u):b)){d=!1;break}p||(p="constructor"==f)}if(d&&!p){var g=t.constructor,_=e.constructor;g==_||!("constructor"in t)||!("constructor"in e)||"function"==typeof g&&g instanceof g&&"function"==typeof _&&_ instanceof _||(d=!1)}return u.delete(t),u.delete(e),d}(t,e,r,n,u,i))}function rr(t,e,r,n,o){return t===e||(null==t||null==e||!g(t)&&!g(e)?t!=t&&e!=e:er(t,e,r,n,rr,o))}var nr=1,or=2;function ur(t){return t==t&&!w(t)}function ir(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}}function ar(t){var e=function(t){for(var e=Xt(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,ur(o)]}return e}(t);return 1==e.length&&e[0][2]?ir(e[0][0],e[0][1]):function(r){return r===t||function(t,e,r,n){var o=r.length,u=o,i=!n;if(null==t)return!u;for(t=Object(t);o--;){var a=r[o];if(i&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<u;){var c=(a=r[o])[0],s=t[c],f=a[1];if(i&&a[2]){if(void 0===s&&!(c in t))return!1}else{var l=new ne;if(n)var h=n(s,f,c,t,e,l);if(!(void 0===h?rr(f,s,nr|or,n,l):h))return!1}}return!0}(r,t,e)}}function cr(t,e){return null!=t&&e in Object(t)}function sr(t,e){return null!=t&&function(t,e,r){for(var n=-1,u=(e=pt(e,t)).length,i=!1;++n<u;){var a=yt(e[n]);if(!(i=null!=t&&r(t,a)))break;t=t[a]}return i||++n!=u?i:!!(u=null==t?0:t.length)&&Lt(u)&&Et(a,u)&&(o(t)||xt(t))}(t,e,cr)}var fr=1,lr=2;function hr(t){return t}function dr(t){return function(e){return null==e?void 0:e[t]}}function pr(t){return S(t)?dr(yt(t)):function(t){return function(e){return bt(e,t)}}(t)}function vr(t){return"function"==typeof t?t:null==t?hr:"object"==typeof t?o(t)?function(t,e){return S(t)&&ur(e)?ir(yt(t),e):function(r){var n=gt(r,t);return void 0===n&&n===e?sr(r,t):rr(e,n,fr|lr)}}(t[0],t[1]):ar(t):pr(t)}var yr="[object String]";var br=dr("length"),gr=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function _r(t){return gr.test(t)}var jr="\\ud800-\\udfff",mr="["+jr+"]",$r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Sr="\\ud83c[\\udffb-\\udfff]",wr="[^"+jr+"]",Or="(?:\\ud83c[\\udde6-\\uddff]){2}",Mr="[\\ud800-\\udbff][\\udc00-\\udfff]",xr="(?:"+$r+"|"+Sr+")"+"?",Dr="[\\ufe0e\\ufe0f]?",Ar=Dr+xr+("(?:\\u200d(?:"+[wr,Or,Mr].join("|")+")"+Dr+xr+")*"),kr="(?:"+[wr+$r+"?",$r,Or,Mr,mr].join("|")+")",zr=RegExp(Sr+"(?="+Sr+")|"+kr+Ar,"g");function Pr(t){return _r(t)?function(t){for(var e=zr.lastIndex=0;zr.test(t);)++e;return e}(t):br(t)}var Tr="[object Map]",Er="[object Set]";function Fr(t){if(null==t)return 0;if(Kt(t))return"string"==typeof(e=t)||!o(e)&&g(e)&&b(e)==yr?Pr(t):t.length;var e,r=Ze(t);return r==Tr||r==Er?t.size:Qt(t).length}var Lr=/\s/;var Ir=/^\s+/;function Nr(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&Lr.test(t.charAt(e)););return e}(t)+1).replace(Ir,""):t}var Rr=NaN,Yr=/^[-+]0x[0-9a-f]+$/i,Cr=/^0b[01]+$/i,Hr=/^0o[0-7]+$/i,Wr=parseInt;function Ur(t){if("number"==typeof t)return t;if(j(t))return Rr;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Nr(t);var r=Cr.test(t);return r||Hr.test(t)?Wr(t.slice(2),r?2:8):Yr.test(t)?Rr:+t}var Br=1/0,qr=17976931348623157e292;function Vr(t){return t?(t=Ur(t))===Br||t===-Br?(t<0?-1:1)*qr:t==t?t:0:0===t?t:0}function Jr(t){var e=Vr(t),r=e%1;return e==e?r?e-r:e:0}function Zr(t){return!(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t)||""===t)}function Gr(t){let e=!1;if(Zr(t))e=!isNaN(Number(t));else if(function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)){if(function(t){return t!=t}(t))return!1;e=!0}return e}function Qr(t){if(!Gr(t))return 0;return Vr(t)}function Kr(t){return!!Gr(t)&&(t=Qr(t),"number"==typeof(e=t)&&e==Jr(e));var e}var Xr=a.isFinite,tn=Math.min;var en=function(t){var e=Math[t];return function(t,r){if(t=Ur(t),(r=null==r?0:tn(Jr(r),292))&&Xr(t)){var n=(dt(t)+"e").split("e");return+((n=(dt(e(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return e(t)}}("round"),rn=en;function nn(t){if(!Gr(t))return 0;t=Qr(t);let e=rn(t);return"0"===String(e)?0:e}let on="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),un=on.length;function an(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,e=[];var r;t=Kr(r=t)&&nn(r)>0?nn(t):32;for(let r=0;r<t;r++)e[r]=on[0|Math.random()*un];return e.join("")}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function cn(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sn={exports:{}};!function(t,e){t.exports=function(){var t=1e3,e=6e4,r=36e5,n="millisecond",o="second",u="minute",i="hour",a="day",c="week",s="month",f="quarter",l="year",h="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},b=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},g={s:b,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),o=r%60;return(e<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),o=e.clone().add(n,s),u=r-o<0,i=e.clone().add(n+(u?-1:1),s);return+(-(n+(r-o)/(u?o-i:i-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:s,y:l,w:c,d:a,D:h,h:i,m:u,s:o,ms:n,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",j={};j[_]=y;var m="$isDayjsObject",$=function(t){return t instanceof M||!(!t||!t[m])},S=function t(e,r,n){var o;if(!e)return _;if("string"==typeof e){var u=e.toLowerCase();j[u]&&(o=u),r&&(j[u]=r,o=u);var i=e.split("-");if(!o&&i.length>1)return t(i[0])}else{var a=e.name;j[a]=e,o=a}return!n&&o&&(_=o),o||!n&&_},w=function(t,e){if($(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new M(r)},O=g;O.l=S,O.i=$,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function y(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[m]=!0}var b=y.prototype;return b.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(p);if(n){var o=n[2]-1||0,u=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,u)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,u)}}return new Date(e)}(t),this.init()},b.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},b.$utils=function(){return O},b.isValid=function(){return!(this.$d.toString()===d)},b.isSame=function(t,e){var r=w(t);return this.startOf(e)<=r&&r<=this.endOf(e)},b.isAfter=function(t,e){return w(t)<this.startOf(e)},b.isBefore=function(t,e){return this.endOf(e)<w(t)},b.$g=function(t,e,r){return O.u(t)?this[e]:this.set(r,t)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(t,e){var r=this,n=!!O.u(e)||e,f=O.p(t),d=function(t,e){var o=O.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?o:o.endOf(a)},p=function(t,e){return O.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},v=this.$W,y=this.$M,b=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case l:return n?d(1,0):d(31,11);case s:return n?d(1,y):d(0,y+1);case c:var _=this.$locale().weekStart||0,j=(v<_?v+7:v)-_;return d(n?b-j:b+(6-j),y);case a:case h:return p(g+"Hours",0);case i:return p(g+"Minutes",1);case u:return p(g+"Seconds",2);case o:return p(g+"Milliseconds",3);default:return this.clone()}},b.endOf=function(t){return this.startOf(t,!1)},b.$set=function(t,e){var r,c=O.p(t),f="set"+(this.$u?"UTC":""),d=(r={},r[a]=f+"Date",r[h]=f+"Date",r[s]=f+"Month",r[l]=f+"FullYear",r[i]=f+"Hours",r[u]=f+"Minutes",r[o]=f+"Seconds",r[n]=f+"Milliseconds",r)[c],p=c===a?this.$D+(e-this.$W):e;if(c===s||c===l){var v=this.clone().set(h,1);v.$d[d](p),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},b.set=function(t,e){return this.clone().$set(t,e)},b.get=function(t){return this[O.p(t)]()},b.add=function(n,f){var h,d=this;n=Number(n);var p=O.p(f),v=function(t){var e=w(d);return O.w(e.date(e.date()+Math.round(t*n)),d)};if(p===s)return this.set(s,this.$M+n);if(p===l)return this.set(l,this.$y+n);if(p===a)return v(1);if(p===c)return v(7);var y=(h={},h[u]=e,h[i]=r,h[o]=t,h)[p]||1,b=this.$d.getTime()+n*y;return O.w(b,this)},b.subtract=function(t,e){return this.add(-1*t,e)},b.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",o=O.z(this),u=this.$H,i=this.$m,a=this.$M,c=r.weekdays,s=r.months,f=r.meridiem,l=function(t,r,o,u){return t&&(t[r]||t(e,n))||o[r].slice(0,u)},h=function(t){return O.s(u%12||12,t,"0")},p=f||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(v,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return O.s(e.$y,4,"0");case"M":return a+1;case"MM":return O.s(a+1,2,"0");case"MMM":return l(r.monthsShort,a,s,3);case"MMMM":return l(s,a);case"D":return e.$D;case"DD":return O.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(r.weekdaysMin,e.$W,c,2);case"ddd":return l(r.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(u);case"HH":return O.s(u,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(u,i,!0);case"A":return p(u,i,!1);case"m":return String(i);case"mm":return O.s(i,2,"0");case"s":return String(e.$s);case"ss":return O.s(e.$s,2,"0");case"SSS":return O.s(e.$ms,3,"0");case"Z":return o}return null}(t)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,d){var p,v=this,y=O.p(h),b=w(n),g=(b.utcOffset()-this.utcOffset())*e,_=this-b,j=function(){return O.m(v,b)};switch(y){case l:p=j()/12;break;case s:p=j();break;case f:p=j()/3;break;case c:p=(_-g)/6048e5;break;case a:p=(_-g)/864e5;break;case i:p=_/r;break;case u:p=_/e;break;case o:p=_/t;break;default:p=_}return d?p:O.a(p)},b.daysInMonth=function(){return this.endOf(s).$D},b.$locale=function(){return j[this.$L]},b.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=S(t,e,!0);return n&&(r.$L=n),r},b.clone=function(){return O.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},y}(),x=M.prototype;return w.prototype=x,[["$ms",n],["$s",o],["$m",u],["$H",i],["$W",a],["$M",s],["$y",l],["$D",h]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,M,w),t.$i=!0),w},w.locale=S,w.isDayjs=$,w.unix=function(t){return w(1e3*t)},w.en=j[_],w.Ls=j,w.p={},w}()}(sn);var fn=cn(sn.exports);function ln(t){let e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function hn(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var u=Array(o);++n<o;)u[n]=t[n+e];return u}(t,e,r)}var dn=Ht&&Ht.isRegExp,pn=dn?Nt(dn):function(t){return g(t)&&"[object RegExp]"==b(t)};var vn="\\ud800-\\udfff",yn="["+vn+"]",bn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",gn="\\ud83c[\\udffb-\\udfff]",_n="[^"+vn+"]",jn="(?:\\ud83c[\\udde6-\\uddff]){2}",mn="[\\ud800-\\udbff][\\udc00-\\udfff]",$n="(?:"+bn+"|"+gn+")"+"?",Sn="[\\ufe0e\\ufe0f]?",wn=Sn+$n+("(?:\\u200d(?:"+[_n,jn,mn].join("|")+")"+Sn+$n+")*"),On="(?:"+[_n+bn+"?",bn,jn,mn,yn].join("|")+")",Mn=RegExp(gn+"(?="+gn+")|"+On+wn,"g");function xn(t){return _r(t)?function(t){return t.match(Mn)||[]}(t):function(t){return t.split("")}(t)}var Dn=4294967295;function An(t,e,r){return r&&"number"!=typeof r&&function(t,e,r){if(!w(r))return!1;var n=typeof e;return!!("number"==n?Kt(r)&&Et(e,r.length):"string"==n&&e in r)&&V(r[e],t)}(t,e,r)&&(e=r=void 0),(r=void 0===r?Dn:r>>>0)?(t=dt(t))&&("string"==typeof e||null!=e&&!pn(e))&&!(e=ht(e))&&_r(t)?hn(xn(t),0,r):t.split(e,r):[]}function kn(t){if(!Kr(t))return!1;return nn(t)>=0}function zn(t,e){if(!Zr(t))return"";if(!kn(e))return"";if(0===(e=nn(e)))return"";let r=t.length-e;return r<0&&(r=0),t.substr(r,e)}function Pn(t,e){return Zr(t)&&kn(e)?0===(e=nn(e))?t:function(t,e){return Zr(t)&&kn(e)?0===(e=nn(e))?"":t.substring(0,e):""}(t,t.length-e):""}function Tn(t){if(!Zr(t))return"";let e=function(t){if(!Zr(t))return{path:"",isRoot:!1};for(;t.indexOf("\\\\")>=0;)t=t.replace("\\\\","\\");for(;t.indexOf("//")>=0;)t=t.replace("//","/");if(":"===zn(t,1))return{path:`${t}\\`,isRoot:!0};if("\\"===zn(t,1)){let e=Pn(t,1);return":"===zn(e,1)?{path:t,isRoot:!0}:{path:e,isRoot:!1}}if("/"===zn(t,1)){let e=Pn(t,1);return 0===Fr(e)?{path:t,isRoot:!0}:{path:e,isRoot:!1}}return{path:t,isRoot:!1}}(t);if(e.isRoot)return e.path;let r=e.path;try{r=r.split("\\").pop().split("/").pop()}catch(t){}return r}var En="[object Boolean]";function Fn(t){return!0===(e=t)||!1===e||g(e)&&b(e)==En;var e}function Ln(t,e){function r(t){try{return t.toString("utf8")}catch(t){}return""}return new Promise((function(o,u){let i="";n.exec(`${t} ${e}`,((t,e,n)=>{if(t)return u(t);Zr(e=r(e))&&(i+=e),Zr(n=r(n))&&(i+=n)})).on("close",(t=>{o(i)}))}))}function In(t){return!!e.existsSync(t)&&(!e.lstatSync(t).isDirectory()&&!e.lstatSync(t).isSymbolicLink())}function Nn(t){return!!e.existsSync(t)&&(!e.lstatSync(t).isFile()&&!e.lstatSync(t).isSymbolicLink())}function Rn(t){if(!e.existsSync(t))return{success:"folder does not exist: "+t};if(!Nn(t))return{error:"input path is not a folder: "+t};try{e.readdirSync(t).forEach((function(r){let n=t+"/"+r;if(e.lstatSync(n).isDirectory())Rn(n);else try{e.unlinkSync(n)}catch(t){}}))}catch(t){return{error:t}}try{e.rmdirSync(t)}catch(t){return{error:t}}return{success:"done: "+t}}function Yn(t){if(!e.existsSync(t)){let r=function(t){if(Nn(t))return{success:"input folder is already exists: "+t};if(e.existsSync(t))return{error:"input path already exists: "+t};try{e.mkdirSync(t,{recursive:!0})}catch(t){return{error:t}}return{success:"done: "+t}}(t);return r.error?r.error:{success:"done: "+t}}if(!Nn(t))return{error:"input path is not a folder"};try{e.readdirSync(t).forEach((function(r){let n=t+"/"+r;if(e.lstatSync(n).isDirectory())Rn(n);else try{e.unlinkSync(n)}catch(t){}}))}catch(t){return{error:t}}return{success:"done: "+t}}function Cn(t){if(!e.existsSync(t))return{success:"file does not exist: "+t};if(!In(t))return{error:"input path is not a file: "+t};try{e.unlinkSync(t)}catch(t){return{error:t}}return{success:"done: "+t}}function Hn(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t}function Wn(t,e){var r;return(o(t)?Hn:ee)(t,"function"==typeof(r=e)?r:hr)}let Un=t.resolve();return async function(n,u){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=null,c=gt(i,"clean");Fn(c)||(c=!1);let s=gt(i,"funProg");if("win32"!==r.platform)return Promise.reject("operating system is not windows");if(!Zr(n))return Promise.reject("url is not a file");let f="N_m3u8DL-CLI-3.0.2",l=`${Un}/node_modules/w-dwload-m3u8/${f}/`,h=`${Un}/${f}/`;Nn(l)&&(h=l);let d=t.resolve(h,"N_m3u8DL-CLI.exe");d=`"${d}"`;let p=t.resolve(h,"ffmpeg.exe");p=`"${p}"`;let v=r.cwd(),y=h;r.chdir(y);let b=`${function(){if(!ln(fn))throw new Error("invalid dayjs");return fn().format("YYYYMMDDHHmmss")}()}-${an(6)}`,g=`${b}.mp4`,_=`${b}.ts`,j=t.resolve(h,"Downloads"),m=t.resolve(h,"Logs");c&&(Yn(j),Yn(m));let $,S=t.resolve(j,b),w=t.resolve(j,g),O=t.resolve(j,_),M=t.resolve(S,"meta.json"),x=null,D=ln(s),A=-1,k=setInterval((()=>{let r=gt(x,"m3u8Info.count",0);if(0===r&&In(M)){let t=e.readFileSync(M,"utf8");x=function(t){if(!Zr(t))return{};let e={};try{e=JSON.parse(t)}catch(t){e={}}return e}(t)}let n=function(r){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=1;return function r(u){let i=[];return Wn(e.readdirSync(u),(function(a){let c=t.resolve(u,a),s=null;try{s=e.statSync(c)}catch(t){}s&&s.isDirectory()?(i.push({isFolder:!0,level:o,path:c,name:t.basename(c)}),o+=1,(o<=n||null===n)&&(i=i.concat(r(c))),o-=1):i.push({isFolder:!1,level:o,path:c,name:t.basename(c)})})),i}(r)}(S,null);var u,i;i=t=>"ts"===function(t){if(!Zr(t))return"";let e=An(Tn(t),".");if(Fr(e)<=1)return"";let r="";try{r=(o=null==(n=e)?0:n.length)?n[o-1]:void 0}catch(t){}var n,o;return r}(t.name),n=(o(u=n)?_t:re)(u,vr(i));let a=Fr(n);if(a=Math.min(a,r),r>0&&A!==a){D&&s(a/r*100,a,r)}A=a}),1e3),z=`"${n}" --saveName "${b}"`;if(await Ln(d,z).catch((t=>{console.log("execProcess catch",t),a="execProcess error"})),clearInterval(k),r.chdir(v),Zr(a))return Promise.reject(a);if(!In(w)&&In(O)){let t=`-i "${O}" -vcodec copy -acodec copy "${w}"`;await Ln(p,t).catch((()=>{}))}return In(w)?($=function(t,r){try{e.copyFileSync(t,r)}catch(t){return{error:t}}return{success:"done: "+r}}(w,u),a=gt($,"error"),a?Promise.reject(a.toString()):($=Cn(w),a=gt($,"error"),a?Promise.reject(a.toString()):($=Cn(O),$=Rn(S),a=gt($,"error"),a?Promise.reject(a.toString()):($=Yn(m),a=gt($,"error"),a?Promise.reject(a.toString()):"ok")))):(a=`can not find the merged file[${g}]`,Promise.reject(a))}}));
//# sourceMappingURL=w-dwload-m3u8.umd.js.map
