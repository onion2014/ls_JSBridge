!function(e){var o={};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)n.d(t,r,function(o){return e[o]}.bind(null,r));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=1)}([function(e,o,n){"use strict";var t={getUid:l("getUid"),getToken:l("getToken"),openWeChat:l("openWeChat"),follow:l("follow"),getParams:l("getParams"),closeWebPage:l("closeWebPage"),share:l("share"),init:function(e){void 0!==e&&void 0!==e.onready&&(this.onready=e.onready);if(this.debug=e.debug,"undefined"!=typeof loveshow||i())this.onready();else{if(!(r<200))throw new Error("loveshow JSBridge init fail!");var o=this;r+=1,setTimeout(function(){o.init(e)},50)}},onready:null},r=0;function i(){return"undefined"!=typeof window&&void 0!==window.webkit&&void 0!==window.webkit.messageHandlers&&void 0!==window.webkit.messageHandlers.Client&&void 0!==window.webkit.messageHandlers.Client.postMessage}function l(e){return function(o,n){!function(e,o,n){if(i()){t.debug&&console.log("in iOS"),t.debug&&console.log("调用："+e),t.debug&&console.log("参数：",o);var r={method:e,params:o,callback:e+"Back"};window[e+"Back"]="getUid"===e?function(e){n(parseInt(e,10))}:n,window.webkit.messageHandlers.Client.postMessage(r)}else{if("undefined"==typeof loveshow)throw new Error("not loveshow!");t.debug&&console.log("in android"),t.debug&&console.log("调用："+e),t.debug&&console.log("参数：",o),n("follow"===e?loveshow[e](o.hasFollow,o.uid):"getToken"===e?loveshow.getUserToken():"share"===e?loveshow[e](o.shareType,o.title,o.content,o.imgUrl,o.url):loveshow[e]())}}(e,o,n)}}e.exports=t},function(e,o,n){"use strict";window.JSBridge=n(0)}]);