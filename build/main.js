!function(n){var e={};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/assets/",o(o.s=0)}([function(n,e,o){n.exports=o(1)},function(n,e,o){"use strict";o.r(e);o(2),o(3),o(4),o(5);window.years=function(){let n=prompt("?"),e=prompt("?");isNaN(n)&&isNaN(e);for(let o=n;o<=e;o++){0==o%4&&console.log(o)}}},function(n,e){window.MakeArr=function(){for(var n=[],e=0,o=0,t=0,r=function(n,e){for(var o=0;o<n.length;o++)if(n[o]===e)return o;return-1};50!==n.length;){let e=~~Math.floor(100*Math.random());-1==r(n,e)&&(n[t]=e,t++)}var i=function n(e){if(e.length<=1)return e;for(var o=[],t=[],r=e.pop(),i=e.length,u=0;u<i;u++)e[u]<=r?o.push(e[u]):t.push(e[u]);return[].concat(n(o),r,n(t))}(n);for(let n=0;n<50;n++)console.log(i[n]);for(let n=0;n<50;n++){0==i[n]%2?i[n]>o&&(o=i[n]):i[n]>e&&(e=i[n])}console.log("макс парное->"+o),console.log("макс не парное->"+e)}},function(n,e){window.MakeObj=function(){var n=[{id:27,name:"Mihail"},{id:15,name:"Marina"},{id:3,name:"andrew"},{id:4,name:"Ilya"}],e=n.reduce((e,o,t)=>(e[t=n[t].id]=o.name,e),{});console.log(e)}},function(n,e){window.showEmpty=function(){console.log(function(n){for(var e in n)return!1;return!0}())}},function(n,e){window.Callfactorial=function(){let n=function(e){return 1!=e?e*n(e-1):1};console.log(n(7))}}]);