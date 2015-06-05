define("c",[],function(){"use strict";function d(e){return typeof e=="object"||typeof e=="function"?t[u.call(e)]:typeof e}var e={},t={},n=function(){},r=Array.prototype,i=String.prototype,s=Object.prototype,o=i.trim,u=s.toString,a=s.hasOwnProperty,f=Object.create,l=r.isArray,c=/[^,| ]+/g,h=!{toString:null}.propertyIsEnumerable("toString"),p=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];return"Boolean Number String Function Date RegExp Object".replace(c,function(n){var r=n.toLowerCase();t["[object "+n+"]"]=r,e["is"+n]=function(e){return d(e)===r}}),e.has=function(e,t){return a.call(e,t)},e.forIn=function(e,t,n){for(var r in e)if(t.call(n,e[r],r,e)===!1)return;if(h){var i=0,s=p.length;for(;i<s;i++)if(t.call(n,e[i],i,e)===!1)return}},e.extend=function(){var e,t,n,r,i,s,o,u,a,f=1,l=arguments,c=l.length,h=l[0];i=typeof h=="boolean",i&&(f++,h=l[1]),f===c&&(h=this,f--);for(;f<c;f++)n=arguments[f],n!=null&&this.forIn(n,function(t,r){e=h[r];if(h===t)return!1;if(i){o=t&&this.type(t);if(o==="object"&&this.has(n,r)||(a=o==="array"))s=e&&this.type(e),a?(a=!1,u=s==="object"?e:[]):u=s==="array"?e:{};h[r]=this.extend(i,u,t)}else t!==undefined&&(h[r]=t)});return h},e.extend({type:function(e){return e==null?e+"":d(e)},isNaN:function(e){return e===undefined?!1:isNaN(e)},isArray:l||function(e){return d(e)==="array"},size:function(e){return e==null?0:isArrayLike(e)?e.length:this.keys(e).length},baseClass:function(e,t,n){var r=typeof arguments[1]!="object",i,s;return r&&(n=t),s=n!=null,i=function(){arguments.length?(s&&n.apply(this,arguments),e.apply(this,arguments)):(s&&n.call(this),e.call(this))},s&&(i.superCtor=n,i.prototype=this.baseCreate(n.prototype),i.prototype.constructor=i),this.forIn(t,function(e,t){i.prototype[t]=e}),i},log:function(){window.console&&Function.apply.call(console.log,console,arguments)},baseCreate:function(e){if(!this.isObject(e))return{};if(f)return f(e);n.prototype=e;var t=new n;return n.prototype=null,t},trim:function(e){if(o)return o.call(e);e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},now:Date.now||function(){return+(new Date)},isArraylike:function(e){var t=e.length,n=this.type(e);return t||n==="array"||typeof t=="number"&&t>0&&t-1 in e||t===0}}),e}),define("es5",["c"],function(e){"use strict";function u(e){return function(t,n,r,i){var s=t.length,o=e>0?0:s-1;arguments.length<3&&(r=t[o],o+=e);for(;o>=0&&o<s;o+=e)r=n.call(i,r,t[o],o,t);return r}}var t={},n=Array.prototype,r=Function.prototype,i=n.slice,s=Object.keys,o=r.bind;return t={each:function(t,n,r){var i=0,s=t.length;if(e.isArraylike(t)){for(;i<s;i++)if(n.call(r,t[i],i,t)===!1)break}else e.forIn(t,function(i,s){if(e.has(t,s)&&n.call(r,i,s,t)===!1)return!1})},map:function(e,t,n){var r=[];return this.each(e,function(e,i,s){r.push(t.call(n,e,i,s))}),r},filter:function(e,t,n){var r=[];return this.each(e,function(e,i,s){t.call(n,e,i,s)&&r.push(e)}),r},some:function(e,t,n){var r=!1;return this.each(e,function(e,i,s){if(t.call(n,e,i,s)===!0)return r=!0,!1}),r},every:function(e,t,n){var r=!0;return this.each(e,function(e,i,s){if(t.call(n,e,i,s)===!1)return r=!1}),r},indexOf:function(t,n,r){var i=0,s=t.length;typeof r=="number"&&(i=r<0?Math.max(0,s+r):r);if(n!==n){for(;i<s;i++)if(e.isNaN(t[i]))return i}else for(;i<s;i++)if(t[i]===n)return i;return-1},lastIndexOf:function(t,n,r){var i=t?t.length:0;typeof r=="number"&&(i=r<0?i+r+1:Math.min(i,r+1));if(n!==n){while(--i>=0)if(e.isNaN(t[i]))return i}else while(--i>=0)if(t[i]===n)return i;return-1},bind:function(t,n){if(o)return o.apply(t,i.call(arguments,1));if(!e.isFunction(t))throw new TypeError("Bind must be called on a function");var r=i.call(arguments,2),s=function(r,i){var s=e.baseCreate(t.prototype),o=t.apply(t instanceof r?s:n,i);return e.isObject(o)?o:s},u=function(){return s(u,r.concat(i.call(arguments)))};return u},reduce:u(1),reduceRight:u(-1),keys:function(t){var n;return s?s(t):(n=[],e.forIn(t,function(r,i){e.has(t,i)&&n.push(i)}),n)}},t}),define("objectPath",[],function(){"use strict";var e={set:function(e,t,n){if(!e||!t)return!1;var r=t.split("."),i=0,s=r.length;while(i<s-1){var o=r[i];e[o]==null&&(e[o]={});if(typeof e[o]!="object")return!1;e=e[o],i++}return n!=null?e[r[i]]=n:delete e[r[i]],!0},get:function(e,t){if(!e||!t)return null;var n=t.split("."),r=0,i=n.length;while(r<i)if((e=e[n[r++]])==null)return null;return e}};return e}),define("ParseUrl",[],function(){"use strict";function n(n){n||(n=window.location.href);var r=t.exec(n),i=this.result={Attr:{},Param:{}},s,o=14;while(o--)i.Attr[e[o]]=r[o]||"";(s=i.Attr.query)&&s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(e,t,n){t&&(i.Param[t]=n)})}var e=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],t=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;return n.prototype.getAttr=function(e){var t=this.result.Attr;return e?t[e]:t},n.prototype.getParam=function(e){var t=this.result.Param;return e?t[e]:t},n}),define("util",[],function(){"use strict";function e(){return((1+Math.random())*65536|0).toString(16).substring(1)}var t={guid:function(){return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},getByteInfo:function(e,t){var n=0,r=e.length,i={length:0};for(;n<r;n++)e.charCodeAt(n)>255?i.length+=2:i.length+=1,t!==undefined&&i.index===undefined&&i.length>t&&(i.index=n);return i},pad:function(e,t,n,r,i){return e+="",!t||!i&&e.length>=t?e:(n==null&&(n=""),n=(new Array(t+1)).join(n),r?e=(e+n).substring(0,t):e=(n+e).substr(-t),e)}};return t}),define("date",["util"],function(e){"use strict";function t(t,n,r,i){return r=r||0,function(){var s=this["get"+t]();if(r>0||s>-r)s+=r;return s===0&&r==-12&&(s=12),e.pad(s,n,0,!1,i)}}function n(e){return function(){var t=this.getDay();return h.day[e].split(",")[t]}}function r(e){return function(){var t=h.ampm[e].split(",");return this.getHours()<12?t[0]:t[1]}}function i(){return Math.ceil((this.getMonth()+1)/3)}function s(t){return function(){var n=[31,28,31,30,31,30,31,31,30,31,30,31],r=this.getFullYear(),i=this.getMonth(),s=this.getDate(),o=0,u=0;for(;u<i;u++)o+=n[u];o+=s;if(i>1&&r%4===0&&r%100!==0||r%400===0)o+=1;return e.pad(o,t,0)}}function o(t,n){return function(){var r=u(this,t),i=a(this,t),s=+i- +r,o=1+Math.round(s/6048e5);return e.pad(o,n,0)}}function u(e,t){var n=e.getFullYear(),r=(new Date(n,0,1)).getDay(),i=t-r;return i>0&&(i-=7),new Date(n,0,1+i)}function a(e,t){var n=t-e.getDay();return n>0&&(n-=7),new Date(e.getFullYear(),e.getMonth(),e.getDate()+n)}function f(e){var t;if(typeof e=="string")c.test(e)?e=new Date(e):(t=e.match(l),t.length<3?e=new Date(+t[1]):e=new Date(t[1],t[2]-1,t[3]||1,t[4]||0,t[5]||0,t[6]||0,t[7]||0));else if(typeof e=="number")e=new Date(e);else if(e==null)e=new Date;else if(!Object.prototype.toString.call(e)==="[object Date]")return!1;return e}var l=/\d+/g,c=/^\d+$/,h={ampm:["AM,PM","am,am","上午,下午"],day:["周日,周一,周二,周三,周四,周五,周六","星期日,星期一,星期二,星期三,星期四,星期五,星期六"]},p=/(\\?)([MQDdwYAaHhmsS]+)/g,d={M:t("Month",null,1),MM:t("Month",2,1),Q:i,D:t("Date"),DD:t("Date",2),DDD:s(),DDDD:s(3),d:t("Day"),ddd:n(0),dddd:n(1),YY:t("FullYear",2,null,!0),YYYY:t("FullYear"),w:o(0),ww:o(0,2),A:r(0),a:r(1),aa:r(2),H:t("Hours"),HH:t("Hours",2),h:t("Hours",null,-12),hh:t("Hours",2,-12),m:t("Minutes"),mm:t("Minutes",2),s:t("Seconds"),ss:t("Seconds",2),S:t("Milliseconds"),SS:t("Milliseconds",2),SSS:t("Milliseconds",3)},v={format:function(e,t){arguments.length===1&&(t=e,e=null);if(!(e=f(e)))return;return t.replace(p,function(t,n,r){return n?r:d[r].call(e)})}},m=function(e){v[e]=function(t,n,r){return arguments.length===2&&(r=n,n=t,t=null),t=f(t),e==="sub"&&(r=-r),t["set"+n](t["get"+n]()+r),t}};return m("add"),m("sub"),v}),define("IdCard",["c","es5"],function(e,t){"use strict";function i(t,n){this.options=e.extend({requireAreaInfo:!1},n),this.num=t}var n=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],r=[1,0,"X",9,8,7,6,5,4,3,2];return i.prototype.checkCode=function(){var e=this.num;if(e.length===18){var t=0,i=0;for(;i<17;i++)t+=n[i]*e[i];if(e[17].toUpperCase()!==String(r[t%11]))return!1}return!0},i.prototype.checkBirth=function(){var e=this.getBirth(),t=new Date(e.year,e.month,e.day),n=t.getFullYear(),r=t.getMonth(),i=t.getDate(),s=new Date;return e.year!==n||e.month!==r||e.day!==i||t>s?!1:!0},i.prototype.checkArea=function(e){if(!this.options.requireAreaInfo)throw Error("requireAreaInfo is false");this.getArea(function(t){e(t.provinceName&&t.cityName&&t.districtName?!0:!1)})},i.prototype.getBirth=function(){var e=this.num;return e.length===15&&(e=e.slice(0,6)+"19"+e.slice(6,16)),{year:+e.slice(6,10),month:+e.slice(10,12),day:+e.slice(12,14)}},i.prototype.getSex=function(){var e,t=this.num;return t.length===18?e=t.substr(-2,1)%2:e=t.substr(-1,1)%2,e?"男":"女"},i.prototype.getArea=function(e){var n=this.num.slice(0,6),r=n.slice(0,4),i=r.slice(0,2),s={};if(!this.options.requireAreaInfo)throw Error("requireAreaInfo is false");require(["./data/area"],function(o){t.each(o,function(e){if(e.id===+i)return s.provinceName=e.name,t.each(e.citys,function(e){if(e.id===+r)return s.cityName=e.name,t.each(e.district,function(e){if(e.id===+n)return s.districtName=e.name,!1}),!1}),!1}),e(s)})},i}),define("Cookie",["c","es5"],function(e,t){"use strict";function n(e,t){return t?e:encodeURIComponent(e)}function r(e,t){return t?e:decodeURIComponent(e)}function i(e,t){return n(t?JSON.stringify(e):String(e))}function s(e,t){return t?JSON.parse(r(e)):r(e)}function o(t){this.options=e.extend({isRaw:!1,isJson:!1},t)}return o.prototype.get=function(e){var n=document.cookie,i=n?n.split("; "):[],o=null;return t.each(i,function(t){var n=t.split("="),i=r(n[0],this.isRaw);if(e===i)return o=s(n[1],this.isJson),!1},this),o},o.prototype.set=function(e,t,r){var r=r||{},s=new Date;r.expires&&s.setTime(+s+ +r.expires*864e5),document.cookie=[n(e),"=",i(t),r.expires?"; expires="+s:"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")},o.prototype.remove=function(e){this.set(e,"",{expires:-1})},o}),define("rules",[],function(){"use strict";var e={isRequired:function(e){return e!==""},isChinese:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isDoubleByte:function(e){return/[^\x00-\xff]/.test(e)},isZipcode:function(e){return/^\d{6}$/.test(e)},isQq:function(e){return/^[1-9]\d{4,9}$/.test(e)},isPicture:function(e){return/\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/.test(e)},isRar:function(e){return/\.(rar|zip|7zip|tgz|)$/.test(e)},isMobile:function(e){return/^1[34578]\d{9}$/.test(e)},isMoney:function(e){return/^([1-9]\d*(\.\d{1,2})?|0\.\d{1,2})$/.test(e)},isEnglish:function(e){return/^[A-Za-z]+$/.test(e)},isLowerCase:function(e){return/^[a-z]+$/.test(e)},isUpperCase:function(e){return/^[A-Z]+$/.test(e)},isNumber:function(e){return/^\d+$/.test(e)},isInteger:function(e){return/^-?[1-9]\d*$/.test(e)},isFloat:function(e){return/^-?([1-9]\d*(\.\d+)?|0\.\d+)$/.test(e)},isRealName:function(e){return/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(e)},isEmail:function(e){return/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(e)},isUrl:function(e){return/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(e)},isIdCard:function(e){return/^(\d{15}|\d{17}[0-9a-zA-Z])$/.test(e)},isPhone:function(e){return/^(\d{3,4}-)\d{7,8}(-\d{1,6})?$/.test(e)},isAreaNum:function(e){return/^\d{3,4}$/.test(e)},isHostNum:function(e){return/^\d{7,8}$/.test(e)},isExtensionNum:function(e){return/^\d{1,6}$/.test(e)},isIp:function(e){return/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(e)}};return e}),define("pubSub",["es5","objectPath"],function(e,t){"use strict";function i(n,r,s){var o=t.get(n,r);o&&e.each(o,function(e,t){~t.indexOf("id_")?e.handler.call(e.context,s):i(o,t,s)},this)}var n={},r=0,s={publish:function(e,t){i(n,e,t)},subscribe:function(e,i,s){var o=t.get(n,e);o==null&&t.set(n,e,o={}),o["id_"+r++]={handler:i,context:s}},unsubscribe:function(r,i){var s=t.get(n,r),o={};s&&(i?e.each(s,function(e,t){if(e.handler===i)return delete s[t],!1}):(e.each(s,function(e,t){~t.indexOf("id_")||(o[t]=e)}),t.set(n,r,o)))},clear:function(e){e?t.set(n,e,null):n={}}};return s}),define("AbstractStorage",["c"],function(e){"use strict";function t(e,t,n,r){var i=e.getItem(t),s=JSON.parse(i)||[],o=!0,u=0,a={key:n,timeout:r};for(;u<s.length;u++)s[u].key===n&&(s[u]=a,o=!1);o&&s.push(a),e.setItem(t,JSON.stringify(s))}function n(e,t,n){var r=0,i,s,o,u;if(i=e.getItem(t)){s=JSON.parse(i),n==null&&(n=5),s.sort(function(e,t){return e.timeout-t.timeout}),o=s.splice(0,n);for(u=o.length;r<n;r++)e.removeItem(o[r].key);s.length?e.setItem(t,JSON.stringify(s)):e.removeItem(t)}else e.clear()}function r(e,t,n,r){var i={timeout:r};return e!=null&&(i.value=e),t!=null&&(i.oldValue=t),n!=null&&(i.tag=n),i}var i=e.baseClass(function(t){this.options=e.extend({storage:null,timeMapKey:"CACHE_TIME_MAP"},t)},{set:function(e,i,s,o,u){var a=+(new Date),f=this.options.storage,l,c;if(o==null||o<a)o=a+864e5;this.getTag(e)===s&&(l=this.get(e,s,!u)),u?(c=i,i=l):c=l;try{return f.setItem(e,JSON.stringify(r(i,c,s,o))),t(f,this.options.timeMapKey,e,o),!0}catch(h){return h.name==="QuotaExceededError"&&(n(f,this.options.timeMapKey),this.set(e,i,s,o,u)),!1}},get:function(e,t,n){var r=this.options.storage.getItem(e),i=null;return r&&(r=JSON.parse(r),r.timeout>=+(new Date)&&(t==null||t&&t===r.tag)&&(i=n?r.oldValue:r.value)),i},getTag:function(e){var t=this.options.storage.getItem(e);return t?JSON.parse(t).tag:null},setExpireTime:function(e,t){var n=this.options.storage.getItem(e);if(n){n=JSON.parse(n);if(t<n.timeout)return;return this.set(e,value,tag,t)}return!1},getExpireTime:function(e){var t=this.options.storage.getItem(e);return t?JSON.parse(t).timeout:null},remove:function(e){return this.options.storage.removeItem(e)},clear:function(){return this.options.storage.clear()},gc:function(){var e=this.options.timeMapKey,t=this.options.storage,n,r,i=0,s,o,u,a=[];if(n=t.getItem(e)){r=JSON.parse(n),s=r.length;for(;i<s;i++)u=r[i],o=u.key,o!=="GUID"&&!this.get(o)&&!this.get(o,null,!0)?this.remove(o):a.push(u);a.length?t.setItem(e,JSON.stringify(a)):t.removeItem(e)}}});return i}),define("AbstractStore",["c","objectPath"],function(e,t){"use strict";function n(e){var t,n=e.charAt(e.length-1),r=parseInt(e);n=typeof n=="number"?"D":n.toUpperCase();switch(n){case"H":t=r*60*60*1e3;break;case"M":t=r*60*1e3;break;case"S":t=r*1e3;break;default:t=r*24*60*60*1e3}return t}var r=e.baseClass(function(t){this.options=e.extend({proxy:null,key:null,lifeTime:"1H",defaultData:null,rollbackEnabled:!1},t)},{set:function(e,t,r){if(!this.options.rollbackEnabled&&r)throw"param rollbackEnabled is false";var i=+(new Date)+n(this.options.lifeTime);return this.options.proxy.set(this.options.key,e,t,i,r)},setAttr:function(e,n,r,i){if(!this.options.rollbackEnabled&&i)throw"param rollbackEnabled is false";var s,o;if(typeof e=="object"){for(s in e)e.hasOwnProperty(s)&&this.setAttr(s,e[s],r,i);return}return o=this.get(r,i)||{},t.set(o,e,n),this.set(o,r,i)},get:function(e,t){return this.options.proxy.get(this.options.key,e,t)},getAttr:function(e,n,r){return t.get(this.get(n,r),e)},getTag:function(){return this.options.proxy.getTag(this.options.key)},remove:function(){return this.options.proxy.remove(this.options.key)},setExpireTime:function(){return this.options.proxy.setExpireTime(this.options.key)},getExpireTime:function(){return this.options.proxy.getExpireTime(this.options.key)},rollback:function(e){var t=this.getTag();if(!this.options.rollbackEnabled)throw"param rollbackEnabled is false";if(this.set(this.get(null,!0),t))return e&&this.set(null,t,!0),!0}});return r}),define("LocalStore",["c","AbstractStorage","AbstractStore"],function(e,t,n){"use strict";var r=e.baseClass(function(n){this.options=e.extend(this.options,{proxy:new t({storage:window.localStorage})},n)},n);return r}),define("SessionStore",["c","AbstractStorage","AbstractStore"],function(e,t,n){"use strict";var r=e.baseClass(function(n){this.options=e.extend(this.options,{proxy:new t({storage:window.sessionStorage})},n)},n);return r});