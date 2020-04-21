!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){const{calculateTime:r}=n(2),{createTrip:i}=n(9),a=document.querySelector("#save-button"),o=document.getElementById("city"),d=document.getElementById("start-date"),c=document.getElementById("end-date"),s=document.getElementById("error-text"),l=document.getElementById("trips");e.exports={formSubmitHandler:()=>{const e=o.value,t=d.value,n=c.value,u=new Date(t).getTime()/1e3,p=r(t,n);if(""==e||""==t||""==n)alert("Please enter a valid city and date!");else if("error"===p)return s.setAttribute("display","block"),void(s.textContent="Check the dates");s.textContent="",s.setAttribute("display","none"),(async(e="",t="",n="",r="")=>{const i={city:e,start_date:t,end_date:n,date:r},a=await fetch("http://localhost:3000/fetchInfo",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({tripData:i})});try{return await a.json()}catch(e){console.log("error",e)}})(e,t,n,u).then(e=>{const t=i(e.city,e.startDate,e.endDate,p,e.weather,e.temp,e.timezone,e.cityImageUrl);l.appendChild(t),a.textContent="Save trip"})}}},function(e,t,n){"use strict";const r=document.querySelector(".container"),i=document.querySelector(".input"),a=document.querySelector(".add");if(null==window.localStorage.getItem("todos")){var o=[];window.localStorage.setItem("todos",JSON.stringify(o))}var d=window.localStorage.getItem("todos");o=JSON.parse(d);class c{constructor(e){this.createItem(e)}createItem(e){const t=document.createElement("div");t.classList.add("item");const n=document.createElement("input");n.type="text",n.disabled=!0,n.value=e,n.classList.add("item_input");const i=document.createElement("button");i.classList.add("edit"),i.innerHTML="EDIT",i.addEventListener("click",()=>this.edit(n,e));const a=document.createElement("button");a.classList.add("remove"),a.innerHTML="REMOVE",a.addEventListener("click",()=>this.remove(t,e)),r.appendChild(t),t.appendChild(n),t.appendChild(i),t.appendChild(a)}edit(e,t){if(1==e.disabled)e.disabled=!e.disabled;else{e.disabled=!e.disabled;let n=o.indexOf(t);o[n]=e.value,window.localStorage.setItem("todos",JSON.stringify(o))}}remove(e,t){e.parentNode.removeChild(e);let n=o.indexOf(t);o.splice(n,1),window.localStorage.setItem("todos",JSON.stringify(o))}}function s(){""!=i.value&&(new c(i.value),o.push(i.value),window.localStorage.setItem("todos",JSON.stringify(o)),i.value="")}a.addEventListener("click",s),window.addEventListener("keydown",e=>{13==e.which&&s()});for(let e=0;e<o.length;e++)new c(o[e]);new c("buy tickets")},function(e,t){const n=()=>{const e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},r=e=>new Date(e).getTime()/1e3,i=(e,t)=>{const n=new Date(e);return(new Date(t).getTime()-n.getTime())/864e5};e.exports={calculateTime:function(e,t){const a=n();return r(e)<r(a)||r(t)<=r(a)||r(t)<=r(e)?"error":i(e,t)}}},function(e,t,n){"use strict";n.r(t);n(4),n(5),n(6),n(7),n(1),n(8),n(2);var r=n(0);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);document.getElementById("save-button").addEventListener("click",r.formSubmitHandler),document.querySelector("#reset").addEventListener("click",()=>{document.querySelector("#trips").style.display="none"})},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){e.exports='<!doctype html> <html> <head> <meta name=viewport content="width=device-width,initial-scale=1"/> <title>Traveler</title> </head> <body> <div class=cover> <form class=form> <input id=city type=search placeholder="Where do you want to go?"> <label for=start-date>From</label> <input id=start-date type=date name=from> <label for=end-date>To</label> <input id=end-date type=date name=to> <input id=save-button type=submit value=Search> <input id=reset type=reset value=Reset> </form> </div> <span id=error-text class=error></span> <div id=my-trips> My Trips </div> <div id=trips class=trips></div> <h1><span class=title>Todo</span>List</h1> <div class=inputDiv> <input type=text class=input placeholder="What Do You Want to Do..."> <button class=add></button> </div> <div class=container> </div> <script>"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js")})<\/script> </body> </html>'},function(e,t){const n=(e,t,n)=>{const r=document.createElement("div");r.classList.add(e);const i=document.createElement("div");i.classList.add("trip-label"),i.textContent=t,r.appendChild(i);const a=document.createElement("div");return a.classList.add("trip-value"),a.innerHTML=n,r.appendChild(a),r};e.exports={createTrip:(e,t,r,i,a,o,d)=>{const c=document.createElement("div");c.classList.add("trip");const s=document.createElement("img");s.setAttribute("src",d),c.appendChild(s);const l=n("destination-container","Destination: ",e);c.appendChild(l);const u=n("start-date-container","Departure date: ",t);c.appendChild(u);const p=n("end-date-container","Return Date: ",r);c.appendChild(p);const m=n("duration-container","Duration : ",i+" days away");c.appendChild(m);const f=n("weather-info-container","Weather will be like ",`${weather_summary} <br/> Temperature:${o}${String.fromCharCode(176)}C`);return c.appendChild(f),c}}}]);