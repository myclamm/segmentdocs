!function(e){var o=!1;if("function"==typeof define&&define.amd&&(define(e),o=!0),"object"==typeof exports&&(module.exports=e(),o=!0),!o){var t=window.Cookies,n=window.Cookies=e();n.noConflict=function(){return window.Cookies=t,n}}}(function(){function e(){for(var e=0,o={};e<arguments.length;e++){var t=arguments[e];for(var n in t)o[n]=t[n]}return o}function o(t){function n(o,i,r){var c;if("undefined"!=typeof document){if(arguments.length>1){if(r=e({path:"/"},n.defaults,r),"number"==typeof r.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{c=JSON.stringify(i),/^[\{\[]/.test(c)&&(i=c)}catch(a){}return i=t.write?t.write(i,o):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),o=encodeURIComponent(String(o)),o=o.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),o=o.replace(/[\(\)]/g,escape),document.cookie=[o,"=",i,r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}o||(c={});for(var d=document.cookie?document.cookie.split("; "):[],u=/(%[0-9A-Z]{2})+/g,l=0;l<d.length;l++){var p=d[l].split("="),f=p.slice(1).join("=");'"'===f.charAt(0)&&(f=f.slice(1,-1));try{var v=p[0].replace(u,decodeURIComponent);if(f=t.read?t.read(f,v):t(f,v)||f.replace(u,decodeURIComponent),this.json)try{f=JSON.parse(f)}catch(a){}if(o===v){c=f;break}o||(c[v]=f)}catch(a){}}return c}}return n.set=n,n.get=function(e){return n.call(n,e)},n.getJSON=function(){return n.apply({json:!0},[].slice.call(arguments))},n.defaults={},n.remove=function(o,t){n(o,"",e(t,{expires:-1}))},n.withConverter=o,n}return o(function(){})});var cookiesEuTemplate='<div class="cookies-eu js-cookies-eu"><button class="js-cookies-eu-ok">OK</button><span class="cookies-eu-message">Cookies help us deliver our services. By using our services, you agree to our use of cookies. <a href="https://www.algolia.com/policies/cookies" target="_blank">Learn more</a></span></div>',cookiesEu={init:function(){if("true"!==Cookies.get("cookie_eu_consented")){this.appendBanner();var e=document.querySelector(".js-cookies-eu-ok");this.addListener(e)}},addListener:function(e){e.attachEvent?e.attachEvent("onclick",this.setCookie):e.addEventListener("click",this.setCookie,!1)},setCookie:function(){var e={path:"/",expires:365};/algolia\.com$/.test(location.host)&&(e.domain=".algolia.com"),Cookies.set("cookie_eu_consented",!0,e);var o=document.querySelector(".js-cookies-eu");o.parentNode.removeChild(o)},appendBanner:function(){var e=document.createElement("div"),o=document.body;e.innerHTML=cookiesEuTemplate;var t=e.children[0];o.insertBefore(t,o.firstChild)}};!function(){function e(){o||(o=!0,cookiesEu.init())}var o=!1;document.addEventListener&&document.addEventListener("DOMContentLoaded",e,!1),window.addEventListener?window.addEventListener("load",e,!1):window.attachEvent&&window.attachEvent("onload",e)}();