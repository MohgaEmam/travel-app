if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}})).then(e=>{const r=c(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-ec4d79a7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"./index.html",revision:"b1fec8046e95db70ae05cb46b121e5ef"},{url:"images/7822cb20c681e71ce86797a6ae8ad520-sky.jpg",revision:"b273ea0d276583b3ffc386536190ae1b"},{url:"images/b745e01afd3454d96469d51825c69212-sky.jpg",revision:"c4c84df82f66cd3a949ad1492d69b596"},{url:"main.css",revision:"be0d288f8c5209be2fc86a216e4958a4"},{url:"main.js",revision:"89368a2669b5787c86aa0726453b2d99"}],{})}));
