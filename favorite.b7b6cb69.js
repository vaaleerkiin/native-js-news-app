function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequired7c6=s),s.register("31u3U",(function(t,n){e(t.exports,"FavoriteStorage",(function(){return r})),e(t.exports,"ReadStorage",(function(){return i}));class r{getNews(){const e=localStorage.getItem(this.KEY);return e?JSON.parse(e):[]}addNews(e){const t=this.getNews();this.hasNews(e)||(t.push(e),localStorage.setItem(this.KEY,JSON.stringify(t)))}hasNews(e){return this.getNews().some((({url:t})=>t===e.url))}removeNews(e){const t=this.getNews();t.forEach(((n,r)=>{n.url===e.url&&t.splice(r,1)})),localStorage.setItem(this.KEY,JSON.stringify(t))}constructor(){this.KEY="FAVORITE_NEWS"}}class i{getNews(){const e=localStorage.getItem(this.KEY);return e?JSON.parse(e):[]}addNews(e){const t=this.getNews();this.hasNews(e)||(t.push(e),localStorage.setItem(this.KEY,JSON.stringify(t)))}hasNews(e){return this.getNews().some((({url:t})=>t===e.url))}constructor(){this.KEY="READ_NEWS"}}})),s.register("7Sa78",(function(n,r){e(n.exports,"onCardClick",(function(){return u})),e(n.exports,"onReadClick",(function(){return l}));var i=s("31u3U"),o=s("cxTnx");const a=new(0,i.FavoriteStorage),c=new(0,i.ReadStorage);function u(e){if("button"===e.target.tagName.toLowerCase()){console.log("Click");const t=e.target.closest("BUTTON");console.log(t);const n=t.closest("li"),r=n.querySelector(".card-title").textContent,i=n.querySelector("img").getAttribute("src"),s=n.querySelector("img").getAttribute("alt"),o=n.querySelector("p").textContent,c=n.querySelector(".card-date").textContent,u=n.querySelector(".card-category").textContent,l={src:i,title:r,url:n.querySelector(".card-url").getAttribute("href"),info:o,published_date:c,alt:s,section:u};return a.hasNews(l)?(a.removeNews(l),t.classList.replace("favorite-button__activ","add-to-favorite"),t.innerHTML='Add to favorite <svg class=" active-news-icon" width="16" height="16" viewBox="0 0 37 32"><path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path></svg>'):(a.addNews(l),t.classList.replace("add-to-favorite","favorite-button__activ"),t.innerHTML='Remove from favorite  <svg class="news-icon" width="16" height="16" viewBox="0 0 37 32"><path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path></svg>'),l}}function l(e){if("a"===e.target.tagName.toLowerCase()){const n=e.target.closest("A");console.log(n);const r=n.closest("li");console.log(r),r.classList.add("opacity");const i=r.querySelector(".card-title").textContent;r.insertAdjacentHTML("beforeend",'<span class="news__read-status">Already read <span class="card-icon"></span></span>');const s=r.querySelector("img").getAttribute("src"),a=r.querySelector("img").getAttribute("alt"),u=r.querySelector("p").textContent,l=r.querySelector(".card-date").textContent,d=r.querySelector(".card-category").textContent,h=r.querySelector(".card-url").getAttribute("href"),f={readDate:t(o)(Date.now()).format("DD/MM/YYYY"),src:s,title:i,url:h,info:u,published_date:l,alt:a,section:d};console.log(f),c.addNews(f)}}})),s.register("cxTnx",(function(e,t){e.exports=function(){var t,n;function r(){return t.apply(null,arguments)}function i(e){t=e}function s(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function o(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(a(e,t))return!1;return!0}function u(e){return void 0===e}function l(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function d(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function h(e,t){var n,r=[],i=e.length;for(n=0;n<i;++n)r.push(t(e[n],n));return r}function f(e,t){for(var n in t)a(t,n)&&(e[n]=t[n]);return a(t,"toString")&&(e.toString=t.toString),a(t,"valueOf")&&(e.valueOf=t.valueOf),e}function m(e,t,n,r){return $n(e,t,n,r,!0).utc()}function p(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function g(e){return null==e._pf&&(e._pf=p()),e._pf}function v(e){if(null==e._isValid){var t=g(e),r=n.call(t.parsedDateParts,(function(e){return null!=e})),i=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r);if(e._strict&&(i=i&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return i;e._isValid=i}return e._isValid}function _(e){var t=m(NaN);return null!=e?f(g(t),e):g(t).userInvalidated=!0,t}n=Array.prototype.some?Array.prototype.some:function(e){var t,n=Object(this),r=n.length>>>0;for(t=0;t<r;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};var y=r.momentProperties=[],w=!1;function b(e,t){var n,r,i,s=y.length;if(u(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),u(t._i)||(e._i=t._i),u(t._f)||(e._f=t._f),u(t._l)||(e._l=t._l),u(t._strict)||(e._strict=t._strict),u(t._tzm)||(e._tzm=t._tzm),u(t._isUTC)||(e._isUTC=t._isUTC),u(t._offset)||(e._offset=t._offset),u(t._pf)||(e._pf=g(t)),u(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)u(i=t[r=y[n]])||(e[r]=i);return e}function k(e){b(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===w&&(w=!0,r.updateOffset(this),w=!1)}function S(e){return e instanceof k||null!=e&&null!=e._isAMomentObject}function I(e){!1===r.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function T(e,t){var n=!0;return f((function(){if(null!=r.deprecationHandler&&r.deprecationHandler(null,e),n){var i,s,o,c=[],u=arguments.length;for(s=0;s<u;s++){if(i="","object"==typeof arguments[s]){for(o in i+="\n["+s+"] ",arguments[0])a(arguments[0],o)&&(i+=o+": "+arguments[0][o]+", ");i=i.slice(0,-2)}else i=arguments[s];c.push(i)}I(e+"\nArguments: "+Array.prototype.slice.call(c).join("")+"\n"+(new Error).stack),n=!1}return t.apply(this,arguments)}),t)}var E,D={};function O(e,t){null!=r.deprecationHandler&&r.deprecationHandler(e,t),D[e]||(I(t),D[e]=!0)}function M(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function N(e){var t,n;for(n in e)a(e,n)&&(M(t=e[n])?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function R(e,t){var n,r=f({},e);for(n in t)a(t,n)&&(o(e[n])&&o(t[n])?(r[n]={},f(r[n],e[n]),f(r[n],t[n])):null!=t[n]?r[n]=t[n]:delete r[n]);for(n in e)a(e,n)&&!a(t,n)&&o(e[n])&&(r[n]=f({},r[n]));return r}function C(e){null!=e&&this.set(e)}r.suppressDeprecationWarnings=!1,r.deprecationHandler=null,E=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)a(e,t)&&n.push(t);return n};var A={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function L(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return M(r)?r.call(t,n):r}function x(e,t,n){var r=""+Math.abs(e),i=t-r.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var P=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,U=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Y={},F={};function W(e,t,n,r){var i=r;"string"==typeof r&&(i=function(){return this[r]()}),e&&(F[e]=i),t&&(F[t[0]]=function(){return x(i.apply(this,arguments),t[1],t[2])}),n&&(F[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function H(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function j(e){var t,n,r=e.match(P);for(t=0,n=r.length;t<n;t++)F[r[t]]?r[t]=F[r[t]]:r[t]=H(r[t]);return function(t){var i,s="";for(i=0;i<n;i++)s+=M(r[i])?r[i].call(t,e):r[i];return s}}function V(e,t){return e.isValid()?(t=B(t,e.localeData()),Y[t]=Y[t]||j(t),Y[t](e)):e.localeData().invalidDate()}function B(e,t){var n=5;function r(e){return t.longDateFormat(e)||e}for(U.lastIndex=0;n>=0&&U.test(e);)e=e.replace(U,r),U.lastIndex=0,n-=1;return e}var q={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function z(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(P).map((function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e})).join(""),this._longDateFormat[e])}var G="Invalid date";function $(){return this._invalidDate}var K="%d",J=/\d{1,2}/;function Z(e){return this._ordinal.replace("%d",e)}var X={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Q(e,t,n,r){var i=this._relativeTime[n];return M(i)?i(e,t,n,r):i.replace(/%d/i,e)}function ee(e,t){var n=this._relativeTime[e>0?"future":"past"];return M(n)?n(t):n.replace(/%s/i,t)}var te={};function ne(e,t){var n=e.toLowerCase();te[n]=te[n+"s"]=te[t]=e}function re(e){return"string"==typeof e?te[e]||te[e.toLowerCase()]:void 0}function ie(e){var t,n,r={};for(n in e)a(e,n)&&(t=re(n))&&(r[t]=e[n]);return r}var se={};function oe(e,t){se[e]=t}function ae(e){var t,n=[];for(t in e)a(e,t)&&n.push({unit:t,priority:se[t]});return n.sort((function(e,t){return e.priority-t.priority})),n}function ce(e){return e%4==0&&e%100!=0||e%400==0}function ue(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function le(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=ue(t)),n}function de(e,t){return function(n){return null!=n?(fe(this,e,n),r.updateOffset(this,t),this):he(this,e)}}function he(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function fe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ce(e.year())&&1===e.month()&&29===e.date()?(n=le(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Qe(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function me(e){return M(this[e=re(e)])?this[e]():this}function pe(e,t){if("object"==typeof e){var n,r=ae(e=ie(e)),i=r.length;for(n=0;n<i;n++)this[r[n].unit](e[r[n].unit])}else if(M(this[e=re(e)]))return this[e](t);return this}var ge,ve=/\d/,_e=/\d\d/,ye=/\d{3}/,we=/\d{4}/,be=/[+-]?\d{6}/,ke=/\d\d?/,Se=/\d\d\d\d?/,Ie=/\d\d\d\d\d\d?/,Te=/\d{1,3}/,Ee=/\d{1,4}/,De=/[+-]?\d{1,6}/,Oe=/\d+/,Me=/[+-]?\d+/,Ne=/Z|[+-]\d\d:?\d\d/gi,Re=/Z|[+-]\d\d(?::?\d\d)?/gi,Ce=/[+-]?\d+(\.\d{1,3})?/,Ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function Le(e,t,n){ge[e]=M(t)?t:function(e,r){return e&&n?n:t}}function xe(e,t){return a(ge,e)?ge[e](t._strict,t._locale):new RegExp(Pe(e))}function Pe(e){return Ue(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(e,t,n,r,i){return t||n||r||i})))}function Ue(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}ge={};var Ye={};function Fe(e,t){var n,r,i=t;for("string"==typeof e&&(e=[e]),l(t)&&(i=function(e,n){n[t]=le(e)}),r=e.length,n=0;n<r;n++)Ye[e[n]]=i}function We(e,t){Fe(e,(function(e,n,r,i){r._w=r._w||{},t(e,r._w,r,i)}))}function He(e,t,n){null!=t&&a(Ye,e)&&Ye[e](t,n._a,n,e)}var je,Ve=0,Be=1,qe=2,ze=3,Ge=4,$e=5,Ke=6,Je=7,Ze=8;function Xe(e,t){return(e%t+t)%t}function Qe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=Xe(t,12);return e+=(t-n)/12,1===n?ce(e)?29:28:31-n%7%2}je=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},W("M",["MM",2],"Mo",(function(){return this.month()+1})),W("MMM",0,0,(function(e){return this.localeData().monthsShort(this,e)})),W("MMMM",0,0,(function(e){return this.localeData().months(this,e)})),ne("month","M"),oe("month",8),Le("M",ke),Le("MM",ke,_e),Le("MMM",(function(e,t){return t.monthsShortRegex(e)})),Le("MMMM",(function(e,t){return t.monthsRegex(e)})),Fe(["M","MM"],(function(e,t){t[Be]=le(e)-1})),Fe(["MMM","MMMM"],(function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);null!=i?t[Be]=i:g(n).invalidMonth=e}));var et="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),tt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),nt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,rt=Ae,it=Ae;function st(e,t){return e?s(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||nt).test(t)?"format":"standalone"][e.month()]:s(this._months)?this._months:this._months.standalone}function ot(e,t){return e?s(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[nt.test(t)?"format":"standalone"][e.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function at(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=m([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=je.call(this._shortMonthsParse,o))?i:null:-1!==(i=je.call(this._longMonthsParse,o))?i:null:"MMM"===t?-1!==(i=je.call(this._shortMonthsParse,o))||-1!==(i=je.call(this._longMonthsParse,o))?i:null:-1!==(i=je.call(this._longMonthsParse,o))||-1!==(i=je.call(this._shortMonthsParse,o))?i:null}function ct(e,t,n){var r,i,s;if(this._monthsParseExact)return at.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=m([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[r]||(s="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[r].test(e))return r;if(n&&"MMM"===t&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function ut(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=le(t);else if(!l(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Qe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function lt(e){return null!=e?(ut(this,e),r.updateOffset(this,!0),this):he(this,"Month")}function dt(){return Qe(this.year(),this.month())}function ht(e){return this._monthsParseExact?(a(this,"_monthsRegex")||mt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(a(this,"_monthsShortRegex")||(this._monthsShortRegex=rt),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ft(e){return this._monthsParseExact?(a(this,"_monthsRegex")||mt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(a(this,"_monthsRegex")||(this._monthsRegex=it),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function mt(){function e(e,t){return t.length-e.length}var t,n,r=[],i=[],s=[];for(t=0;t<12;t++)n=m([2e3,t]),r.push(this.monthsShort(n,"")),i.push(this.months(n,"")),s.push(this.months(n,"")),s.push(this.monthsShort(n,""));for(r.sort(e),i.sort(e),s.sort(e),t=0;t<12;t++)r[t]=Ue(r[t]),i[t]=Ue(i[t]);for(t=0;t<24;t++)s[t]=Ue(s[t]);this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function pt(e){return ce(e)?366:365}W("Y",0,0,(function(){var e=this.year();return e<=9999?x(e,4):"+"+e})),W(0,["YY",2],0,(function(){return this.year()%100})),W(0,["YYYY",4],0,"year"),W(0,["YYYYY",5],0,"year"),W(0,["YYYYYY",6,!0],0,"year"),ne("year","y"),oe("year",1),Le("Y",Me),Le("YY",ke,_e),Le("YYYY",Ee,we),Le("YYYYY",De,be),Le("YYYYYY",De,be),Fe(["YYYYY","YYYYYY"],Ve),Fe("YYYY",(function(e,t){t[Ve]=2===e.length?r.parseTwoDigitYear(e):le(e)})),Fe("YY",(function(e,t){t[Ve]=r.parseTwoDigitYear(e)})),Fe("Y",(function(e,t){t[Ve]=parseInt(e,10)})),r.parseTwoDigitYear=function(e){return le(e)+(le(e)>68?1900:2e3)};var gt=de("FullYear",!0);function vt(){return ce(this.year())}function _t(e,t,n,r,i,s,o){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,r,i,s,o),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,r,i,s,o),a}function yt(e){var t,n;return e<100&&e>=0?((n=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function wt(e,t,n){var r=7+t-n;return-(7+yt(e,0,r).getUTCDay()-t)%7+r-1}function bt(e,t,n,r,i){var s,o,a=1+7*(t-1)+(7+n-r)%7+wt(e,r,i);return a<=0?o=pt(s=e-1)+a:a>pt(e)?(s=e+1,o=a-pt(e)):(s=e,o=a),{year:s,dayOfYear:o}}function kt(e,t,n){var r,i,s=wt(e.year(),t,n),o=Math.floor((e.dayOfYear()-s-1)/7)+1;return o<1?r=o+St(i=e.year()-1,t,n):o>St(e.year(),t,n)?(r=o-St(e.year(),t,n),i=e.year()+1):(i=e.year(),r=o),{week:r,year:i}}function St(e,t,n){var r=wt(e,t,n),i=wt(e+1,t,n);return(pt(e)-r+i)/7}function It(e){return kt(e,this._week.dow,this._week.doy).week}W("w",["ww",2],"wo","week"),W("W",["WW",2],"Wo","isoWeek"),ne("week","w"),ne("isoWeek","W"),oe("week",5),oe("isoWeek",5),Le("w",ke),Le("ww",ke,_e),Le("W",ke),Le("WW",ke,_e),We(["w","ww","W","WW"],(function(e,t,n,r){t[r.substr(0,1)]=le(e)}));var Tt={dow:0,doy:6};function Et(){return this._week.dow}function Dt(){return this._week.doy}function Ot(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function Mt(e){var t=kt(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}function Nt(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)}function Rt(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Ct(e,t){return e.slice(t,7).concat(e.slice(0,t))}W("d",0,"do","day"),W("dd",0,0,(function(e){return this.localeData().weekdaysMin(this,e)})),W("ddd",0,0,(function(e){return this.localeData().weekdaysShort(this,e)})),W("dddd",0,0,(function(e){return this.localeData().weekdays(this,e)})),W("e",0,0,"weekday"),W("E",0,0,"isoWeekday"),ne("day","d"),ne("weekday","e"),ne("isoWeekday","E"),oe("day",11),oe("weekday",11),oe("isoWeekday",11),Le("d",ke),Le("e",ke),Le("E",ke),Le("dd",(function(e,t){return t.weekdaysMinRegex(e)})),Le("ddd",(function(e,t){return t.weekdaysShortRegex(e)})),Le("dddd",(function(e,t){return t.weekdaysRegex(e)})),We(["dd","ddd","dddd"],(function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e})),We(["d","e","E"],(function(e,t,n,r){t[r]=le(e)}));var At="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Lt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),xt="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Pt=Ae,Ut=Ae,Yt=Ae;function Ft(e,t){var n=s(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?Ct(n,this._week.dow):e?n[e.day()]:n}function Wt(e){return!0===e?Ct(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Ht(e){return!0===e?Ct(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function jt(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=m([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=je.call(this._weekdaysParse,o))?i:null:"ddd"===t?-1!==(i=je.call(this._shortWeekdaysParse,o))?i:null:-1!==(i=je.call(this._minWeekdaysParse,o))?i:null:"dddd"===t?-1!==(i=je.call(this._weekdaysParse,o))||-1!==(i=je.call(this._shortWeekdaysParse,o))||-1!==(i=je.call(this._minWeekdaysParse,o))?i:null:"ddd"===t?-1!==(i=je.call(this._shortWeekdaysParse,o))||-1!==(i=je.call(this._weekdaysParse,o))||-1!==(i=je.call(this._minWeekdaysParse,o))?i:null:-1!==(i=je.call(this._minWeekdaysParse,o))||-1!==(i=je.call(this._weekdaysParse,o))||-1!==(i=je.call(this._shortWeekdaysParse,o))?i:null}function Vt(e,t,n){var r,i,s;if(this._weekdaysParseExact)return jt.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=m([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[r].test(e))return r;if(n&&"ddd"===t&&this._shortWeekdaysParse[r].test(e))return r;if(n&&"dd"===t&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function Bt(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=Nt(e,this.localeData()),this.add(e-t,"d")):t}function qt(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function zt(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=Rt(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}function Gt(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Jt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(a(this,"_weekdaysRegex")||(this._weekdaysRegex=Pt),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function $t(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Jt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(a(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Ut),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Kt(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Jt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(a(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Yt),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Jt(){function e(e,t){return t.length-e.length}var t,n,r,i,s,o=[],a=[],c=[],u=[];for(t=0;t<7;t++)n=m([2e3,1]).day(t),r=Ue(this.weekdaysMin(n,"")),i=Ue(this.weekdaysShort(n,"")),s=Ue(this.weekdays(n,"")),o.push(r),a.push(i),c.push(s),u.push(r),u.push(i),u.push(s);o.sort(e),a.sort(e),c.sort(e),u.sort(e),this._weekdaysRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function Zt(){return this.hours()%12||12}function Xt(){return this.hours()||24}function Qt(e,t){W(e,0,0,(function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)}))}function en(e,t){return t._meridiemParse}function tn(e){return"p"===(e+"").toLowerCase().charAt(0)}W("H",["HH",2],0,"hour"),W("h",["hh",2],0,Zt),W("k",["kk",2],0,Xt),W("hmm",0,0,(function(){return""+Zt.apply(this)+x(this.minutes(),2)})),W("hmmss",0,0,(function(){return""+Zt.apply(this)+x(this.minutes(),2)+x(this.seconds(),2)})),W("Hmm",0,0,(function(){return""+this.hours()+x(this.minutes(),2)})),W("Hmmss",0,0,(function(){return""+this.hours()+x(this.minutes(),2)+x(this.seconds(),2)})),Qt("a",!0),Qt("A",!1),ne("hour","h"),oe("hour",13),Le("a",en),Le("A",en),Le("H",ke),Le("h",ke),Le("k",ke),Le("HH",ke,_e),Le("hh",ke,_e),Le("kk",ke,_e),Le("hmm",Se),Le("hmmss",Ie),Le("Hmm",Se),Le("Hmmss",Ie),Fe(["H","HH"],ze),Fe(["k","kk"],(function(e,t,n){var r=le(e);t[ze]=24===r?0:r})),Fe(["a","A"],(function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e})),Fe(["h","hh"],(function(e,t,n){t[ze]=le(e),g(n).bigHour=!0})),Fe("hmm",(function(e,t,n){var r=e.length-2;t[ze]=le(e.substr(0,r)),t[Ge]=le(e.substr(r)),g(n).bigHour=!0})),Fe("hmmss",(function(e,t,n){var r=e.length-4,i=e.length-2;t[ze]=le(e.substr(0,r)),t[Ge]=le(e.substr(r,2)),t[$e]=le(e.substr(i)),g(n).bigHour=!0})),Fe("Hmm",(function(e,t,n){var r=e.length-2;t[ze]=le(e.substr(0,r)),t[Ge]=le(e.substr(r))})),Fe("Hmmss",(function(e,t,n){var r=e.length-4,i=e.length-2;t[ze]=le(e.substr(0,r)),t[Ge]=le(e.substr(r,2)),t[$e]=le(e.substr(i))}));var nn=/[ap]\.?m?\.?/i,rn=de("Hours",!0);function sn(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var on,an={calendar:A,longDateFormat:q,invalidDate:G,ordinal:K,dayOfMonthOrdinalParse:J,relativeTime:X,months:et,monthsShort:tt,week:Tt,weekdays:At,weekdaysMin:xt,weekdaysShort:Lt,meridiemParse:nn},cn={},un={};function ln(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function dn(e){return e?e.toLowerCase().replace("_","-"):e}function hn(e){for(var t,n,r,i,s=0;s<e.length;){for(t=(i=dn(e[s]).split("-")).length,n=(n=dn(e[s+1]))?n.split("-"):null;t>0;){if(r=mn(i.slice(0,t).join("-")))return r;if(n&&n.length>=t&&ln(i,n)>=t-1)break;t--}s++}return on}function fn(e){return null!=e.match("^[^/\\\\]*$")}function mn(t){var n=null;if(void 0===cn[t]&&e&&e.exports&&fn(t))try{n=on._abbr,(void 0)("./locale/"+t),pn(n)}catch(e){cn[t]=null}return cn[t]}function pn(e,t){var n;return e&&((n=u(t)?_n(e):gn(e,t))?on=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),on._abbr}function gn(e,t){if(null!==t){var n,r=an;if(t.abbr=e,null!=cn[e])O("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=cn[e]._config;else if(null!=t.parentLocale)if(null!=cn[t.parentLocale])r=cn[t.parentLocale]._config;else{if(null==(n=mn(t.parentLocale)))return un[t.parentLocale]||(un[t.parentLocale]=[]),un[t.parentLocale].push({name:e,config:t}),null;r=n._config}return cn[e]=new C(R(r,t)),un[e]&&un[e].forEach((function(e){gn(e.name,e.config)})),pn(e),cn[e]}return delete cn[e],null}function vn(e,t){if(null!=t){var n,r,i=an;null!=cn[e]&&null!=cn[e].parentLocale?cn[e].set(R(cn[e]._config,t)):(null!=(r=mn(e))&&(i=r._config),t=R(i,t),null==r&&(t.abbr=e),(n=new C(t)).parentLocale=cn[e],cn[e]=n),pn(e)}else null!=cn[e]&&(null!=cn[e].parentLocale?(cn[e]=cn[e].parentLocale,e===pn()&&pn(e)):null!=cn[e]&&delete cn[e]);return cn[e]}function _n(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return on;if(!s(e)){if(t=mn(e))return t;e=[e]}return hn(e)}function yn(){return E(cn)}function wn(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[Be]<0||n[Be]>11?Be:n[qe]<1||n[qe]>Qe(n[Ve],n[Be])?qe:n[ze]<0||n[ze]>24||24===n[ze]&&(0!==n[Ge]||0!==n[$e]||0!==n[Ke])?ze:n[Ge]<0||n[Ge]>59?Ge:n[$e]<0||n[$e]>59?$e:n[Ke]<0||n[Ke]>999?Ke:-1,g(e)._overflowDayOfYear&&(t<Ve||t>qe)&&(t=qe),g(e)._overflowWeeks&&-1===t&&(t=Je),g(e)._overflowWeekday&&-1===t&&(t=Ze),g(e).overflow=t),e}var bn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,kn=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Sn=/Z|[+-]\d\d(?::?\d\d)?/,In=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Tn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],En=/^\/?Date\((-?\d+)/i,Dn=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,On={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Mn(e){var t,n,r,i,s,o,a=e._i,c=bn.exec(a)||kn.exec(a),u=In.length,l=Tn.length;if(c){for(g(e).iso=!0,t=0,n=u;t<n;t++)if(In[t][1].exec(c[1])){i=In[t][0],r=!1!==In[t][2];break}if(null==i)return void(e._isValid=!1);if(c[3]){for(t=0,n=l;t<n;t++)if(Tn[t][1].exec(c[3])){s=(c[2]||" ")+Tn[t][0];break}if(null==s)return void(e._isValid=!1)}if(!r&&null!=s)return void(e._isValid=!1);if(c[4]){if(!Sn.exec(c[4]))return void(e._isValid=!1);o="Z"}e._f=i+(s||"")+(o||""),Hn(e)}else e._isValid=!1}function Nn(e,t,n,r,i,s){var o=[Rn(e),tt.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return s&&o.push(parseInt(s,10)),o}function Rn(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Cn(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function An(e,t,n){return!e||Lt.indexOf(e)===new Date(t[0],t[1],t[2]).getDay()||(g(n).weekdayMismatch=!0,n._isValid=!1,!1)}function Ln(e,t,n){if(e)return On[e];if(t)return 0;var r=parseInt(n,10),i=r%100;return(r-i)/100*60+i}function xn(e){var t,n=Dn.exec(Cn(e._i));if(n){if(t=Nn(n[4],n[3],n[2],n[5],n[6],n[7]),!An(n[1],t,e))return;e._a=t,e._tzm=Ln(n[8],n[9],n[10]),e._d=yt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function Pn(e){var t=En.exec(e._i);null===t?(Mn(e),!1===e._isValid&&(delete e._isValid,xn(e),!1===e._isValid&&(delete e._isValid,e._strict?e._isValid=!1:r.createFromInputFallback(e)))):e._d=new Date(+t[1])}function Un(e,t,n){return null!=e?e:null!=t?t:n}function Yn(e){var t=new Date(r.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Fn(e){var t,n,r,i,s,o=[];if(!e._d){for(r=Yn(e),e._w&&null==e._a[qe]&&null==e._a[Be]&&Wn(e),null!=e._dayOfYear&&(s=Un(e._a[Ve],r[Ve]),(e._dayOfYear>pt(s)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=yt(s,0,e._dayOfYear),e._a[Be]=n.getUTCMonth(),e._a[qe]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=r[t];for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ze]&&0===e._a[Ge]&&0===e._a[$e]&&0===e._a[Ke]&&(e._nextDay=!0,e._a[ze]=0),e._d=(e._useUTC?yt:_t).apply(null,o),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ze]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}function Wn(e){var t,n,r,i,s,o,a,c,u;null!=(t=e._w).GG||null!=t.W||null!=t.E?(s=1,o=4,n=Un(t.GG,e._a[Ve],kt(Kn(),1,4).year),r=Un(t.W,1),((i=Un(t.E,1))<1||i>7)&&(c=!0)):(s=e._locale._week.dow,o=e._locale._week.doy,u=kt(Kn(),s,o),n=Un(t.gg,e._a[Ve],u.year),r=Un(t.w,u.week),null!=t.d?((i=t.d)<0||i>6)&&(c=!0):null!=t.e?(i=t.e+s,(t.e<0||t.e>6)&&(c=!0)):i=s),r<1||r>St(n,s,o)?g(e)._overflowWeeks=!0:null!=c?g(e)._overflowWeekday=!0:(a=bt(n,r,i,s,o),e._a[Ve]=a.year,e._dayOfYear=a.dayOfYear)}function Hn(e){if(e._f!==r.ISO_8601)if(e._f!==r.RFC_2822){e._a=[],g(e).empty=!0;var t,n,i,s,o,a,c,u=""+e._i,l=u.length,d=0;for(c=(i=B(e._f,e._locale).match(P)||[]).length,t=0;t<c;t++)s=i[t],(n=(u.match(xe(s,e))||[])[0])&&((o=u.substr(0,u.indexOf(n))).length>0&&g(e).unusedInput.push(o),u=u.slice(u.indexOf(n)+n.length),d+=n.length),F[s]?(n?g(e).empty=!1:g(e).unusedTokens.push(s),He(s,n,e)):e._strict&&!n&&g(e).unusedTokens.push(s);g(e).charsLeftOver=l-d,u.length>0&&g(e).unusedInput.push(u),e._a[ze]<=12&&!0===g(e).bigHour&&e._a[ze]>0&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ze]=jn(e._locale,e._a[ze],e._meridiem),null!==(a=g(e).era)&&(e._a[Ve]=e._locale.erasConvertYear(a,e._a[Ve])),Fn(e),wn(e)}else xn(e);else Mn(e)}function jn(e,t,n){var r;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((r=e.isPM(n))&&t<12&&(t+=12),r||12!==t||(t=0),t):t}function Vn(e){var t,n,r,i,s,o,a=!1,c=e._f.length;if(0===c)return g(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<c;i++)s=0,o=!1,t=b({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Hn(t),v(t)&&(o=!0),s+=g(t).charsLeftOver,s+=10*g(t).unusedTokens.length,g(t).score=s,a?s<r&&(r=s,n=t):(null==r||s<r||o)&&(r=s,n=t,o&&(a=!0));f(e,n||t)}function Bn(e){if(!e._d){var t=ie(e._i),n=void 0===t.day?t.date:t.day;e._a=h([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],(function(e){return e&&parseInt(e,10)})),Fn(e)}}function qn(e){var t=new k(wn(zn(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function zn(e){var t=e._i,n=e._f;return e._locale=e._locale||_n(e._l),null===t||void 0===n&&""===t?_({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),S(t)?new k(wn(t)):(d(t)?e._d=t:s(n)?Vn(e):n?Hn(e):Gn(e),v(e)||(e._d=null),e))}function Gn(e){var t=e._i;u(t)?e._d=new Date(r.now()):d(t)?e._d=new Date(t.valueOf()):"string"==typeof t?Pn(e):s(t)?(e._a=h(t.slice(0),(function(e){return parseInt(e,10)})),Fn(e)):o(t)?Bn(e):l(t)?e._d=new Date(t):r.createFromInputFallback(e)}function $n(e,t,n,r,i){var a={};return!0!==t&&!1!==t||(r=t,t=void 0),!0!==n&&!1!==n||(r=n,n=void 0),(o(e)&&c(e)||s(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=r,qn(a)}function Kn(e,t,n,r){return $n(e,t,n,r,!1)}r.createFromInputFallback=T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))})),r.ISO_8601=function(){},r.RFC_2822=function(){};var Jn=T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=Kn.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:_()})),Zn=T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=Kn.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:_()}));function Xn(e,t){var n,r;if(1===t.length&&s(t[0])&&(t=t[0]),!t.length)return Kn();for(n=t[0],r=1;r<t.length;++r)t[r].isValid()&&!t[r][e](n)||(n=t[r]);return n}function Qn(){return Xn("isBefore",[].slice.call(arguments,0))}function er(){return Xn("isAfter",[].slice.call(arguments,0))}var tr=function(){return Date.now?Date.now():+new Date},nr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function rr(e){var t,n,r=!1,i=nr.length;for(t in e)if(a(e,t)&&(-1===je.call(nr,t)||null!=e[t]&&isNaN(e[t])))return!1;for(n=0;n<i;++n)if(e[nr[n]]){if(r)return!1;parseFloat(e[nr[n]])!==le(e[nr[n]])&&(r=!0)}return!0}function ir(){return this._isValid}function sr(){return Or(NaN)}function or(e){var t=ie(e),n=t.year||0,r=t.quarter||0,i=t.month||0,s=t.week||t.isoWeek||0,o=t.day||0,a=t.hour||0,c=t.minute||0,u=t.second||0,l=t.millisecond||0;this._isValid=rr(t),this._milliseconds=+l+1e3*u+6e4*c+36e5*a,this._days=+o+7*s,this._months=+i+3*r+12*n,this._data={},this._locale=_n(),this._bubble()}function ar(e){return e instanceof or}function cr(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function ur(e,t,n){var r,i=Math.min(e.length,t.length),s=Math.abs(e.length-t.length),o=0;for(r=0;r<i;r++)(n&&e[r]!==t[r]||!n&&le(e[r])!==le(t[r]))&&o++;return o+s}function lr(e,t){W(e,0,0,(function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+x(~~(e/60),2)+t+x(~~e%60,2)}))}lr("Z",":"),lr("ZZ",""),Le("Z",Re),Le("ZZ",Re),Fe(["Z","ZZ"],(function(e,t,n){n._useUTC=!0,n._tzm=hr(Re,e)}));var dr=/([\+\-]|\d\d)/gi;function hr(e,t){var n,r,i=(t||"").match(e);return null===i?null:0===(r=60*(n=((i[i.length-1]||[])+"").match(dr)||["-",0,0])[1]+le(n[2]))?0:"+"===n[0]?r:-r}function fr(e,t){var n,i;return t._isUTC?(n=t.clone(),i=(S(e)||d(e)?e.valueOf():Kn(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+i),r.updateOffset(n,!1),n):Kn(e).local()}function mr(e){return-Math.round(e._d.getTimezoneOffset())}function pr(e,t,n){var i,s=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=hr(Re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(i=mr(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),s!==e&&(!t||this._changeInProgress?Ar(this,Or(e-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,r.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?s:mr(this)}function gr(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function vr(e){return this.utcOffset(0,e)}function _r(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(mr(this),"m")),this}function yr(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=hr(Ne,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function wr(e){return!!this.isValid()&&(e=e?Kn(e).utcOffset():0,(this.utcOffset()-e)%60==0)}function br(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function kr(){if(!u(this._isDSTShifted))return this._isDSTShifted;var e,t={};return b(t,this),(t=zn(t))._a?(e=t._isUTC?m(t._a):Kn(t._a),this._isDSTShifted=this.isValid()&&ur(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Sr(){return!!this.isValid()&&!this._isUTC}function Ir(){return!!this.isValid()&&this._isUTC}function Tr(){return!!this.isValid()&&this._isUTC&&0===this._offset}r.updateOffset=function(){};var Er=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Dr=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Or(e,t){var n,r,i,s=e,o=null;return ar(e)?s={ms:e._milliseconds,d:e._days,M:e._months}:l(e)||!isNaN(+e)?(s={},t?s[t]=+e:s.milliseconds=+e):(o=Er.exec(e))?(n="-"===o[1]?-1:1,s={y:0,d:le(o[qe])*n,h:le(o[ze])*n,m:le(o[Ge])*n,s:le(o[$e])*n,ms:le(cr(1e3*o[Ke]))*n}):(o=Dr.exec(e))?(n="-"===o[1]?-1:1,s={y:Mr(o[2],n),M:Mr(o[3],n),w:Mr(o[4],n),d:Mr(o[5],n),h:Mr(o[6],n),m:Mr(o[7],n),s:Mr(o[8],n)}):null==s?s={}:"object"==typeof s&&("from"in s||"to"in s)&&(i=Rr(Kn(s.from),Kn(s.to)),(s={}).ms=i.milliseconds,s.M=i.months),r=new or(s),ar(e)&&a(e,"_locale")&&(r._locale=e._locale),ar(e)&&a(e,"_isValid")&&(r._isValid=e._isValid),r}function Mr(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Nr(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Rr(e,t){var n;return e.isValid()&&t.isValid()?(t=fr(t,e),e.isBefore(t)?n=Nr(e,t):((n=Nr(t,e)).milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Cr(e,t){return function(n,r){var i;return null===r||isNaN(+r)||(O(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=n,n=r,r=i),Ar(this,Or(n,r),e),this}}function Ar(e,t,n,i){var s=t._milliseconds,o=cr(t._days),a=cr(t._months);e.isValid()&&(i=null==i||i,a&&ut(e,he(e,"Month")+a*n),o&&fe(e,"Date",he(e,"Date")+o*n),s&&e._d.setTime(e._d.valueOf()+s*n),i&&r.updateOffset(e,o||a))}Or.fn=or.prototype,Or.invalid=sr;var Lr=Cr(1,"add"),xr=Cr(-1,"subtract");function Pr(e){return"string"==typeof e||e instanceof String}function Ur(e){return S(e)||d(e)||Pr(e)||l(e)||Fr(e)||Yr(e)||null==e}function Yr(e){var t,n,r=o(e)&&!c(e),i=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],u=s.length;for(t=0;t<u;t+=1)n=s[t],i=i||a(e,n);return r&&i}function Fr(e){var t=s(e),n=!1;return t&&(n=0===e.filter((function(t){return!l(t)&&Pr(e)})).length),t&&n}function Wr(e){var t,n,r=o(e)&&!c(e),i=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"];for(t=0;t<s.length;t+=1)n=s[t],i=i||a(e,n);return r&&i}function Hr(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function jr(e,t){1===arguments.length&&(arguments[0]?Ur(arguments[0])?(e=arguments[0],t=void 0):Wr(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||Kn(),i=fr(n,this).startOf("day"),s=r.calendarFormat(this,i)||"sameElse",o=t&&(M(t[s])?t[s].call(this,n):t[s]);return this.format(o||this.localeData().calendar(s,this,Kn(n)))}function Vr(){return new k(this)}function Br(e,t){var n=S(e)?e:Kn(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=re(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())}function qr(e,t){var n=S(e)?e:Kn(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=re(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())}function zr(e,t,n,r){var i=S(e)?e:Kn(e),s=S(t)?t:Kn(t);return!!(this.isValid()&&i.isValid()&&s.isValid())&&("("===(r=r||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===r[1]?this.isBefore(s,n):!this.isAfter(s,n))}function Gr(e,t){var n,r=S(e)?e:Kn(e);return!(!this.isValid()||!r.isValid())&&("millisecond"===(t=re(t)||"millisecond")?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))}function $r(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Kr(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Jr(e,t,n){var r,i,s;if(!this.isValid())return NaN;if(!(r=fr(e,this)).isValid())return NaN;switch(i=6e4*(r.utcOffset()-this.utcOffset()),t=re(t)){case"year":s=Zr(this,r)/12;break;case"month":s=Zr(this,r);break;case"quarter":s=Zr(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-i)/864e5;break;case"week":s=(this-r-i)/6048e5;break;default:s=this-r}return n?s:ue(s)}function Zr(e,t){if(e.date()<t.date())return-Zr(t,e);var n=12*(t.year()-e.year())+(t.month()-e.month()),r=e.clone().add(n,"months");return-(n+(t-r<0?(t-r)/(r-e.clone().add(n-1,"months")):(t-r)/(e.clone().add(n+1,"months")-r)))||0}function Xr(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Qr(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?V(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):M(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+6e4*this.utcOffset()).toISOString().replace("Z",V(n,"Z")):V(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function ei(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t,n,r,i="moment",s="";return this.isLocal()||(i=0===this.utcOffset()?"moment.utc":"moment.parseZone",s="Z"),e="["+i+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n="-MM-DD[T]HH:mm:ss.SSS",r=s+'[")]',this.format(e+t+n+r)}function ti(e){e||(e=this.isUtc()?r.defaultFormatUtc:r.defaultFormat);var t=V(this,e);return this.localeData().postformat(t)}function ni(e,t){return this.isValid()&&(S(e)&&e.isValid()||Kn(e).isValid())?Or({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function ri(e){return this.from(Kn(),e)}function ii(e,t){return this.isValid()&&(S(e)&&e.isValid()||Kn(e).isValid())?Or({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function si(e){return this.to(Kn(),e)}function oi(e){var t;return void 0===e?this._locale._abbr:(null!=(t=_n(e))&&(this._locale=t),this)}r.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",r.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var ai=T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(e){return void 0===e?this.localeData():this.locale(e)}));function ci(){return this._locale}var ui=1e3,li=60*ui,di=60*li,hi=3506328*di;function fi(e,t){return(e%t+t)%t}function mi(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-hi:new Date(e,t,n).valueOf()}function pi(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-hi:Date.UTC(e,t,n)}function gi(e){var t,n;if(void 0===(e=re(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?pi:mi,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=fi(t+(this._isUTC?0:this.utcOffset()*li),di);break;case"minute":t=this._d.valueOf(),t-=fi(t,li);break;case"second":t=this._d.valueOf(),t-=fi(t,ui)}return this._d.setTime(t),r.updateOffset(this,!0),this}function vi(e){var t,n;if(void 0===(e=re(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?pi:mi,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=di-fi(t+(this._isUTC?0:this.utcOffset()*li),di)-1;break;case"minute":t=this._d.valueOf(),t+=li-fi(t,li)-1;break;case"second":t=this._d.valueOf(),t+=ui-fi(t,ui)-1}return this._d.setTime(t),r.updateOffset(this,!0),this}function _i(){return this._d.valueOf()-6e4*(this._offset||0)}function yi(){return Math.floor(this.valueOf()/1e3)}function wi(){return new Date(this.valueOf())}function bi(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function ki(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Si(){return this.isValid()?this.toISOString():null}function Ii(){return v(this)}function Ti(){return f({},g(this))}function Ei(){return g(this).overflow}function Di(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Oi(e,t){var n,i,s,o=this._eras||_n("en")._eras;for(n=0,i=o.length;n<i;++n)switch("string"==typeof o[n].since&&(s=r(o[n].since).startOf("day"),o[n].since=s.valueOf()),typeof o[n].until){case"undefined":o[n].until=1/0;break;case"string":s=r(o[n].until).startOf("day").valueOf(),o[n].until=s.valueOf()}return o}function Mi(e,t,n){var r,i,s,o,a,c=this.eras();for(e=e.toUpperCase(),r=0,i=c.length;r<i;++r)if(s=c[r].name.toUpperCase(),o=c[r].abbr.toUpperCase(),a=c[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(o===e)return c[r];break;case"NNNN":if(s===e)return c[r];break;case"NNNNN":if(a===e)return c[r]}else if([s,o,a].indexOf(e)>=0)return c[r]}function Ni(e,t){var n=e.since<=e.until?1:-1;return void 0===t?r(e.since).year():r(e.since).year()+(t-e.offset)*n}function Ri(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until)return r[e].name;if(r[e].until<=n&&n<=r[e].since)return r[e].name}return""}function Ci(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until)return r[e].narrow;if(r[e].until<=n&&n<=r[e].since)return r[e].narrow}return""}function Ai(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until)return r[e].abbr;if(r[e].until<=n&&n<=r[e].since)return r[e].abbr}return""}function Li(){var e,t,n,i,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(n=s[e].since<=s[e].until?1:-1,i=this.clone().startOf("day").valueOf(),s[e].since<=i&&i<=s[e].until||s[e].until<=i&&i<=s[e].since)return(this.year()-r(s[e].since).year())*n+s[e].offset;return this.year()}function xi(e){return a(this,"_erasNameRegex")||ji.call(this),e?this._erasNameRegex:this._erasRegex}function Pi(e){return a(this,"_erasAbbrRegex")||ji.call(this),e?this._erasAbbrRegex:this._erasRegex}function Ui(e){return a(this,"_erasNarrowRegex")||ji.call(this),e?this._erasNarrowRegex:this._erasRegex}function Yi(e,t){return t.erasAbbrRegex(e)}function Fi(e,t){return t.erasNameRegex(e)}function Wi(e,t){return t.erasNarrowRegex(e)}function Hi(e,t){return t._eraYearOrdinalRegex||Oe}function ji(){var e,t,n=[],r=[],i=[],s=[],o=this.eras();for(e=0,t=o.length;e<t;++e)r.push(Ue(o[e].name)),n.push(Ue(o[e].abbr)),i.push(Ue(o[e].narrow)),s.push(Ue(o[e].name)),s.push(Ue(o[e].abbr)),s.push(Ue(o[e].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+r.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+i.join("|")+")","i")}function Vi(e,t){W(0,[e,e.length],0,t)}function Bi(e){return Ji.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function qi(e){return Ji.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function zi(){return St(this.year(),1,4)}function Gi(){return St(this.isoWeekYear(),1,4)}function $i(){var e=this.localeData()._week;return St(this.year(),e.dow,e.doy)}function Ki(){var e=this.localeData()._week;return St(this.weekYear(),e.dow,e.doy)}function Ji(e,t,n,r,i){var s;return null==e?kt(this,r,i).year:(t>(s=St(e,r,i))&&(t=s),Zi.call(this,e,t,n,r,i))}function Zi(e,t,n,r,i){var s=bt(e,t,n,r,i),o=yt(s.year,0,s.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function Xi(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}W("N",0,0,"eraAbbr"),W("NN",0,0,"eraAbbr"),W("NNN",0,0,"eraAbbr"),W("NNNN",0,0,"eraName"),W("NNNNN",0,0,"eraNarrow"),W("y",["y",1],"yo","eraYear"),W("y",["yy",2],0,"eraYear"),W("y",["yyy",3],0,"eraYear"),W("y",["yyyy",4],0,"eraYear"),Le("N",Yi),Le("NN",Yi),Le("NNN",Yi),Le("NNNN",Fi),Le("NNNNN",Wi),Fe(["N","NN","NNN","NNNN","NNNNN"],(function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?g(n).era=i:g(n).invalidEra=e})),Le("y",Oe),Le("yy",Oe),Le("yyy",Oe),Le("yyyy",Oe),Le("yo",Hi),Fe(["y","yy","yyy","yyyy"],Ve),Fe(["yo"],(function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[Ve]=n._locale.eraYearOrdinalParse(e,i):t[Ve]=parseInt(e,10)})),W(0,["gg",2],0,(function(){return this.weekYear()%100})),W(0,["GG",2],0,(function(){return this.isoWeekYear()%100})),Vi("gggg","weekYear"),Vi("ggggg","weekYear"),Vi("GGGG","isoWeekYear"),Vi("GGGGG","isoWeekYear"),ne("weekYear","gg"),ne("isoWeekYear","GG"),oe("weekYear",1),oe("isoWeekYear",1),Le("G",Me),Le("g",Me),Le("GG",ke,_e),Le("gg",ke,_e),Le("GGGG",Ee,we),Le("gggg",Ee,we),Le("GGGGG",De,be),Le("ggggg",De,be),We(["gggg","ggggg","GGGG","GGGGG"],(function(e,t,n,r){t[r.substr(0,2)]=le(e)})),We(["gg","GG"],(function(e,t,n,i){t[i]=r.parseTwoDigitYear(e)})),W("Q",0,"Qo","quarter"),ne("quarter","Q"),oe("quarter",7),Le("Q",ve),Fe("Q",(function(e,t){t[Be]=3*(le(e)-1)})),W("D",["DD",2],"Do","date"),ne("date","D"),oe("date",9),Le("D",ke),Le("DD",ke,_e),Le("Do",(function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient})),Fe(["D","DD"],qe),Fe("Do",(function(e,t){t[qe]=le(e.match(ke)[0])}));var Qi=de("Date",!0);function es(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}W("DDD",["DDDD",3],"DDDo","dayOfYear"),ne("dayOfYear","DDD"),oe("dayOfYear",4),Le("DDD",Te),Le("DDDD",ye),Fe(["DDD","DDDD"],(function(e,t,n){n._dayOfYear=le(e)})),W("m",["mm",2],0,"minute"),ne("minute","m"),oe("minute",14),Le("m",ke),Le("mm",ke,_e),Fe(["m","mm"],Ge);var ts=de("Minutes",!1);W("s",["ss",2],0,"second"),ne("second","s"),oe("second",15),Le("s",ke),Le("ss",ke,_e),Fe(["s","ss"],$e);var ns,rs,is=de("Seconds",!1);for(W("S",0,0,(function(){return~~(this.millisecond()/100)})),W(0,["SS",2],0,(function(){return~~(this.millisecond()/10)})),W(0,["SSS",3],0,"millisecond"),W(0,["SSSS",4],0,(function(){return 10*this.millisecond()})),W(0,["SSSSS",5],0,(function(){return 100*this.millisecond()})),W(0,["SSSSSS",6],0,(function(){return 1e3*this.millisecond()})),W(0,["SSSSSSS",7],0,(function(){return 1e4*this.millisecond()})),W(0,["SSSSSSSS",8],0,(function(){return 1e5*this.millisecond()})),W(0,["SSSSSSSSS",9],0,(function(){return 1e6*this.millisecond()})),ne("millisecond","ms"),oe("millisecond",16),Le("S",Te,ve),Le("SS",Te,_e),Le("SSS",Te,ye),ns="SSSS";ns.length<=9;ns+="S")Le(ns,Oe);function ss(e,t){t[Ke]=le(1e3*("0."+e))}for(ns="S";ns.length<=9;ns+="S")Fe(ns,ss);function os(){return this._isUTC?"UTC":""}function as(){return this._isUTC?"Coordinated Universal Time":""}rs=de("Milliseconds",!1),W("z",0,0,"zoneAbbr"),W("zz",0,0,"zoneName");var cs=k.prototype;function us(e){return Kn(1e3*e)}function ls(){return Kn.apply(null,arguments).parseZone()}function ds(e){return e}cs.add=Lr,cs.calendar=jr,cs.clone=Vr,cs.diff=Jr,cs.endOf=vi,cs.format=ti,cs.from=ni,cs.fromNow=ri,cs.to=ii,cs.toNow=si,cs.get=me,cs.invalidAt=Ei,cs.isAfter=Br,cs.isBefore=qr,cs.isBetween=zr,cs.isSame=Gr,cs.isSameOrAfter=$r,cs.isSameOrBefore=Kr,cs.isValid=Ii,cs.lang=ai,cs.locale=oi,cs.localeData=ci,cs.max=Zn,cs.min=Jn,cs.parsingFlags=Ti,cs.set=pe,cs.startOf=gi,cs.subtract=xr,cs.toArray=bi,cs.toObject=ki,cs.toDate=wi,cs.toISOString=Qr,cs.inspect=ei,"undefined"!=typeof Symbol&&null!=Symbol.for&&(cs[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),cs.toJSON=Si,cs.toString=Xr,cs.unix=yi,cs.valueOf=_i,cs.creationData=Di,cs.eraName=Ri,cs.eraNarrow=Ci,cs.eraAbbr=Ai,cs.eraYear=Li,cs.year=gt,cs.isLeapYear=vt,cs.weekYear=Bi,cs.isoWeekYear=qi,cs.quarter=cs.quarters=Xi,cs.month=lt,cs.daysInMonth=dt,cs.week=cs.weeks=Ot,cs.isoWeek=cs.isoWeeks=Mt,cs.weeksInYear=$i,cs.weeksInWeekYear=Ki,cs.isoWeeksInYear=zi,cs.isoWeeksInISOWeekYear=Gi,cs.date=Qi,cs.day=cs.days=Bt,cs.weekday=qt,cs.isoWeekday=zt,cs.dayOfYear=es,cs.hour=cs.hours=rn,cs.minute=cs.minutes=ts,cs.second=cs.seconds=is,cs.millisecond=cs.milliseconds=rs,cs.utcOffset=pr,cs.utc=vr,cs.local=_r,cs.parseZone=yr,cs.hasAlignedHourOffset=wr,cs.isDST=br,cs.isLocal=Sr,cs.isUtcOffset=Ir,cs.isUtc=Tr,cs.isUTC=Tr,cs.zoneAbbr=os,cs.zoneName=as,cs.dates=T("dates accessor is deprecated. Use date instead.",Qi),cs.months=T("months accessor is deprecated. Use month instead",lt),cs.years=T("years accessor is deprecated. Use year instead",gt),cs.zone=T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",gr),cs.isDSTShifted=T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",kr);var hs=C.prototype;function fs(e,t,n,r){var i=_n(),s=m().set(r,t);return i[n](s,e)}function ms(e,t,n){if(l(e)&&(t=e,e=void 0),e=e||"",null!=t)return fs(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=fs(e,r,n,"month");return i}function ps(e,t,n,r){"boolean"==typeof e?(l(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,l(t)&&(n=t,t=void 0),t=t||"");var i,s=_n(),o=e?s._week.dow:0,a=[];if(null!=n)return fs(t,(n+o)%7,r,"day");for(i=0;i<7;i++)a[i]=fs(t,(i+o)%7,r,"day");return a}function gs(e,t){return ms(e,t,"months")}function vs(e,t){return ms(e,t,"monthsShort")}function _s(e,t,n){return ps(e,t,n,"weekdays")}function ys(e,t,n){return ps(e,t,n,"weekdaysShort")}function ws(e,t,n){return ps(e,t,n,"weekdaysMin")}hs.calendar=L,hs.longDateFormat=z,hs.invalidDate=$,hs.ordinal=Z,hs.preparse=ds,hs.postformat=ds,hs.relativeTime=Q,hs.pastFuture=ee,hs.set=N,hs.eras=Oi,hs.erasParse=Mi,hs.erasConvertYear=Ni,hs.erasAbbrRegex=Pi,hs.erasNameRegex=xi,hs.erasNarrowRegex=Ui,hs.months=st,hs.monthsShort=ot,hs.monthsParse=ct,hs.monthsRegex=ft,hs.monthsShortRegex=ht,hs.week=It,hs.firstDayOfYear=Dt,hs.firstDayOfWeek=Et,hs.weekdays=Ft,hs.weekdaysMin=Ht,hs.weekdaysShort=Wt,hs.weekdaysParse=Vt,hs.weekdaysRegex=Gt,hs.weekdaysShortRegex=$t,hs.weekdaysMinRegex=Kt,hs.isPM=tn,hs.meridiem=sn,pn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===le(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),r.lang=T("moment.lang is deprecated. Use moment.locale instead.",pn),r.langData=T("moment.langData is deprecated. Use moment.localeData instead.",_n);var bs=Math.abs;function ks(){var e=this._data;return this._milliseconds=bs(this._milliseconds),this._days=bs(this._days),this._months=bs(this._months),e.milliseconds=bs(e.milliseconds),e.seconds=bs(e.seconds),e.minutes=bs(e.minutes),e.hours=bs(e.hours),e.months=bs(e.months),e.years=bs(e.years),this}function Ss(e,t,n,r){var i=Or(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function Is(e,t){return Ss(this,e,t,1)}function Ts(e,t){return Ss(this,e,t,-1)}function Es(e){return e<0?Math.floor(e):Math.ceil(e)}function Ds(){var e,t,n,r,i,s=this._milliseconds,o=this._days,a=this._months,c=this._data;return s>=0&&o>=0&&a>=0||s<=0&&o<=0&&a<=0||(s+=864e5*Es(Ms(a)+o),o=0,a=0),c.milliseconds=s%1e3,e=ue(s/1e3),c.seconds=e%60,t=ue(e/60),c.minutes=t%60,n=ue(t/60),c.hours=n%24,o+=ue(n/24),a+=i=ue(Os(o)),o-=Es(Ms(i)),r=ue(a/12),a%=12,c.days=o,c.months=a,c.years=r,this}function Os(e){return 4800*e/146097}function Ms(e){return 146097*e/4800}function Ns(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if("month"===(e=re(e))||"quarter"===e||"year"===e)switch(t=this._days+r/864e5,n=this._months+Os(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Ms(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return 24*t+r/36e5;case"minute":return 1440*t+r/6e4;case"second":return 86400*t+r/1e3;case"millisecond":return Math.floor(864e5*t)+r;default:throw new Error("Unknown unit "+e)}}function Rs(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*le(this._months/12):NaN}function Cs(e){return function(){return this.as(e)}}var As=Cs("ms"),Ls=Cs("s"),xs=Cs("m"),Ps=Cs("h"),Us=Cs("d"),Ys=Cs("w"),Fs=Cs("M"),Ws=Cs("Q"),Hs=Cs("y");function js(){return Or(this)}function Vs(e){return e=re(e),this.isValid()?this[e+"s"]():NaN}function Bs(e){return function(){return this.isValid()?this._data[e]:NaN}}var qs=Bs("milliseconds"),zs=Bs("seconds"),Gs=Bs("minutes"),$s=Bs("hours"),Ks=Bs("days"),Js=Bs("months"),Zs=Bs("years");function Xs(){return ue(this.days()/7)}var Qs=Math.round,eo={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function to(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function no(e,t,n,r){var i=Or(e).abs(),s=Qs(i.as("s")),o=Qs(i.as("m")),a=Qs(i.as("h")),c=Qs(i.as("d")),u=Qs(i.as("M")),l=Qs(i.as("w")),d=Qs(i.as("y")),h=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||o<=1&&["m"]||o<n.m&&["mm",o]||a<=1&&["h"]||a<n.h&&["hh",a]||c<=1&&["d"]||c<n.d&&["dd",c];return null!=n.w&&(h=h||l<=1&&["w"]||l<n.w&&["ww",l]),(h=h||u<=1&&["M"]||u<n.M&&["MM",u]||d<=1&&["y"]||["yy",d])[2]=t,h[3]=+e>0,h[4]=r,to.apply(null,h)}function ro(e){return void 0===e?Qs:"function"==typeof e&&(Qs=e,!0)}function io(e,t){return void 0!==eo[e]&&(void 0===t?eo[e]:(eo[e]=t,"s"===e&&(eo.ss=t-1),!0))}function so(e,t){if(!this.isValid())return this.localeData().invalidDate();var n,r,i=!1,s=eo;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(i=e),"object"==typeof t&&(s=Object.assign({},eo,t),null!=t.s&&null==t.ss&&(s.ss=t.s-1)),r=no(this,!i,s,n=this.localeData()),i&&(r=n.pastFuture(+this,r)),n.postformat(r)}var oo=Math.abs;function ao(e){return(e>0)-(e<0)||+e}function co(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,r,i,s,o,a,c=oo(this._milliseconds)/1e3,u=oo(this._days),l=oo(this._months),d=this.asSeconds();return d?(e=ue(c/60),t=ue(e/60),c%=60,e%=60,n=ue(l/12),l%=12,r=c?c.toFixed(3).replace(/\.?0+$/,""):"",i=d<0?"-":"",s=ao(this._months)!==ao(d)?"-":"",o=ao(this._days)!==ao(d)?"-":"",a=ao(this._milliseconds)!==ao(d)?"-":"",i+"P"+(n?s+n+"Y":"")+(l?s+l+"M":"")+(u?o+u+"D":"")+(t||e||c?"T":"")+(t?a+t+"H":"")+(e?a+e+"M":"")+(c?a+r+"S":"")):"P0D"}var uo=or.prototype;return uo.isValid=ir,uo.abs=ks,uo.add=Is,uo.subtract=Ts,uo.as=Ns,uo.asMilliseconds=As,uo.asSeconds=Ls,uo.asMinutes=xs,uo.asHours=Ps,uo.asDays=Us,uo.asWeeks=Ys,uo.asMonths=Fs,uo.asQuarters=Ws,uo.asYears=Hs,uo.valueOf=Rs,uo._bubble=Ds,uo.clone=js,uo.get=Vs,uo.milliseconds=qs,uo.seconds=zs,uo.minutes=Gs,uo.hours=$s,uo.days=Ks,uo.weeks=Xs,uo.months=Js,uo.years=Zs,uo.humanize=so,uo.toISOString=co,uo.toString=co,uo.toJSON=co,uo.locale=oi,uo.localeData=ci,uo.toIsoString=T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",co),uo.lang=ai,W("X",0,0,"unix"),W("x",0,0,"valueOf"),Le("x",Me),Le("X",Ce),Fe("X",(function(e,t,n){n._d=new Date(1e3*parseFloat(e))})),Fe("x",(function(e,t,n){n._d=new Date(le(e))})),
//! moment.js
r.version="2.29.4",i(Kn),r.fn=cs,r.min=Qn,r.max=er,r.now=tr,r.utc=m,r.unix=us,r.months=gs,r.isDate=d,r.locale=pn,r.invalid=_,r.duration=Or,r.isMoment=S,r.weekdays=_s,r.parseZone=ls,r.localeData=_n,r.isDuration=ar,r.monthsShort=vs,r.weekdaysMin=ws,r.defineLocale=gn,r.updateLocale=vn,r.locales=yn,r.weekdaysShort=ys,r.normalizeUnits=re,r.relativeTimeRounding=ro,r.relativeTimeThreshold=io,r.calendarFormat=Hr,r.prototype=cs,r.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},r}()})),s.register("iJAZj",(function(t,n){function r(){const e=document.querySelector(".search-form__icon-search"),t=document.querySelector(".search"),n=document.querySelector(".search-form__button");e.addEventListener("click",(e=>{e.stopPropagation(),t.classList.add("search--active")})),n.addEventListener("click",(()=>{t.classList.remove("search--active")}))}e(t.exports,"searchInputAnimation",(function(){return r}))})),s.register("8FnLx",(function(t,n){function r(){const e=s("jQ7WT"),t=(e.disableBodyScroll,e.enableBodyScroll,document.querySelector(".js-menu-container")),n=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),i=()=>{const r="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!r),t.classList.toggle("is-open");e[r?"enableBodyScroll":"disableBodyScroll"](document.body)};n.addEventListener("click",i),r.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(r=>{r.matches&&(t.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),e.enableBodyScroll(document.body))}))}e(t.exports,"oNmobileMenu",(function(){return r}))})),s.register("jQ7WT",(function(t,n){e(t.exports,"disableBodyScroll",(function(){return g})),e(t.exports,"clearAllBodyScrollLocks",(function(){return v})),e(t.exports,"enableBodyScroll",(function(){return _}));var r=!1;if("undefined"!=typeof window){var i={get passive(){r=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var s="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),o=[],a=!1,c=-1,u=void 0,l=void 0,d=void 0,h=function(e){return o.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},f=function(e){var t=e||window.event;return!!h(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},m=function(){void 0!==d&&(document.body.style.paddingRight=d,d=void 0),void 0!==u&&(document.body.style.overflow=u,u=void 0)},p=function(){if(void 0!==l){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=l.position,document.body.style.top=l.top,document.body.style.left=l.left,window.scrollTo(t,e),l=void 0}},g=function(e,t){if(e){if(!o.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};o=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(o),[n]),s?window.requestAnimationFrame((function(){if(void 0===l){l={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,r=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=r-window.innerHeight;e&&t>=r&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===d){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);d=document.body.style.paddingRight,document.body.style.paddingRight=r+n+"px"}}void 0===u&&(u=document.body.style.overflow,document.body.style.overflow="hidden")}(t),s&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-c;!h(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?f(e):e.stopPropagation())}(t,e)},a||(document.addEventListener("touchmove",f,r?{passive:!1}:void 0),a=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},v=function(){s&&(o.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),a&&(document.removeEventListener("touchmove",f,r?{passive:!1}:void 0),a=!1),c=-1),s?p():m(),o=[]},_=function(e){e?(o=o.filter((function(t){return t.targetElement!==e})),s&&(e.ontouchstart=null,e.ontouchmove=null,a&&0===o.length&&(document.removeEventListener("touchmove",f,r?{passive:!1}:void 0),a=!1)),s?p():m()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}})),s.register("lRJrH",(function(t,n){e(t.exports,"monitorAuthState",(function(){return d}));var r=s("aWeqn");s("eyjy7");var i=s("g9RKX");s("eyjy7");i=s("g9RKX");var o=s("bTcpz");s("ffjl9");const a=document.querySelector(".order-form");a.addEventListener("submit",(async function(e){e.preventDefault();const t=e.target.email.value,n=e.target.password.value;try{await(0,i.a6)(r.auth,t,n).then((e=>{e.user&&((0,o.toggleModal)(),a.reset(),l.textContent="")}))}catch(e){l.textContent="Wrong email or password. Please, try again.",console.log(e.message),l.classList.contains("modal-err-message")&&l.classList.remove("modal-err-message"),l.classList.contains("modal-ok-message")&&l.classList.remove("modal-ok-message"),l.classList.add("modal-err-message")}}));document.getElementById("register-button").addEventListener("click",(async function(){const e=a.email.value.trim(),t=a.password.value;if(!t.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/))return l.textContent="A password must be between 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter.",l.classList.contains("modal-err-message")&&l.classList.remove("modal-err-message"),l.classList.contains("modal-ok-message")&&l.classList.remove("modal-ok-message"),void l.classList.add("modal-err-message");(0,i.a5)(r.auth,e,t).then((e=>{e.user&&(0,i.ab)(r.auth.currentUser).then((()=>{l.textContent="Email verification sent.",console.log("Email verification sent!"),l.classList.contains("modal-err-message")&&l.classList.remove("modal-err-message"),l.classList.contains("modal-ok-message")&&l.classList.remove("modal-ok-message"),l.classList.add("modal-ok-message")}))})).catch((e=>{const t=e.code,n=e.message;console.log(t),console.log(n),l.textContent=n}))}));const c=document.querySelector(".loginState"),u=document.querySelector(".button-authorization"),l=document.getElementById("modal-error-message-area");async function d(){(0,i.v)(r.auth,(e=>{e?(u.textContent="Logout",function(e){c.innerHTML=`<p>${e.email}</p>`}(e)):(u.textContent="Log In",c.innerHTML="")}))}})),s.register("aWeqn",(function(t,n){e(t.exports,"auth",(function(){return a})),s("gKkQl");var r=s("ix4Jr");s("eyjy7");var i=s("g9RKX");const o=(0,r.initializeApp)({apiKey:"AIzaSyBSt5AK9ankO22Qk0ytWWjzBr4utQCOgH8",authDomain:"fir-test-4ec8b.firebaseapp.com",projectId:"fir-test-4ec8b",storageBucket:"fir-test-4ec8b.appspot.com",messagingSenderId:"941413940221",appId:"1:941413940221:web:19b2f749a8bacf86113794"}),a=(0,i.n)(o)})),s.register("gKkQl",(function(t,n){e(t.exports,"initializeApp",(function(){return s("ix4Jr").initializeApp})),e(t.exports,"registerVersion",(function(){return s("ix4Jr").registerVersion}));s("ix4Jr");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s("ix4Jr").registerVersion)("firebase","9.18.0","app")})),s.register("ix4Jr",(function(t,n){e(t.exports,"_registerComponent",(function(){return v})),e(t.exports,"_getProvider",(function(){return _})),e(t.exports,"SDK_VERSION",(function(){return k})),e(t.exports,"initializeApp",(function(){return S})),e(t.exports,"getApp",(function(){return I})),e(t.exports,"registerVersion",(function(){return T}));var r=s("4a6xH"),i=s("7vF8m"),o=s("ffjl9"),a=s("cCiiD");o=s("ffjl9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const u="@firebase/app",l="0.9.5",d=new(0,i.Logger)("@firebase/app"),h="[DEFAULT]",f={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},m=new Map,p=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){d.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function v(e){const t=e.name;if(p.has(t))return d.debug(`There were multiple attempts to register component ${t}.`),!1;p.set(t,e);for(const t of m.values())g(t,e);return!0}function _(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},w=new(0,o.ErrorFactory)("app","Firebase",y);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw w.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,r.Component)("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k="9.18.0";function S(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:h,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw w.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw w.create("no-options");const a=m.get(s);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(i,a.config))return a;throw w.create("duplicate-app",{appName:s})}const c=new(0,r.ComponentContainer)(s);for(const e of p.values())c.addComponent(e);const u=new b(n,i,c);return m.set(s,u),u}function I(e="[DEFAULT]"){const t=m.get(e);if(!t&&e===h)return S();if(!t)throw w.create("no-app",{appName:e});return t}function T(e,t,n){var i;let s=null!==(i=f[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void d.warn(e.join(" "))}v(new(0,r.Component)(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="firebase-heartbeat-store";let D=null;function O(){return D||(D=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(E)}}).catch((e=>{throw w.create("idb-open",{originalErrorMessage:e.message})}))),D}async function M(e,t){try{const n=(await O()).transaction(E,"readwrite"),r=n.objectStore(E);return await r.put(t,N(e)),n.done}catch(e){if(e instanceof o.FirebaseError)d.warn(e.message);else{const t=w.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});d.warn(t.message)}}}function N(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=C();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=C(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),L(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),L(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new A(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function C(){return(new Date).toISOString().substring(0,10)}class A{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await O()).transaction(E).objectStore(E).get(N(e))}catch(e){if(e instanceof o.FirebaseError)d.warn(e.message);else{const t=w.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});d.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return M(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return M(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function L(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;x="",v(new(0,r.Component)("platform-logger",(e=>new c(e)),"PRIVATE")),v(new(0,r.Component)("heartbeat",(e=>new R(e)),"PRIVATE")),T(u,l,x),T(u,l,"esm2017"),T("fire-js","")})),s.register("4a6xH",(function(t,n){e(t.exports,"Component",(function(){return i})),e(t.exports,"ComponentContainer",(function(){return c}));var r=s("ffjl9");class i{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,r.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===o?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class c{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}})),s.register("ffjl9",(function(t,r){e(t.exports,"base64urlEncodeWithoutPadding",(function(){return u})),e(t.exports,"base64Decode",(function(){return l})),e(t.exports,"getDefaultEmulatorHost",(function(){return f})),e(t.exports,"getDefaultAppConfig",(function(){return m})),e(t.exports,"getExperimentalSetting",(function(){return p})),e(t.exports,"Deferred",(function(){return g})),e(t.exports,"getUA",(function(){return v})),e(t.exports,"isMobileCordova",(function(){return _})),e(t.exports,"isBrowserExtension",(function(){return y})),e(t.exports,"isReactNative",(function(){return w})),e(t.exports,"isIE",(function(){return b})),e(t.exports,"isIndexedDBAvailable",(function(){return k})),e(t.exports,"validateIndexedDBOpenable",(function(){return S})),e(t.exports,"FirebaseError",(function(){return I})),e(t.exports,"ErrorFactory",(function(){return T})),e(t.exports,"isEmpty",(function(){return D})),e(t.exports,"deepEqual",(function(){return O})),e(t.exports,"querystring",(function(){return N})),e(t.exports,"querystringDecode",(function(){return R})),e(t.exports,"extractQuerystring",(function(){return C})),e(t.exports,"createSubscribe",(function(){return A})),e(t.exports,"getModularInstance",(function(){return P}));var i=s("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let d=(15&o)<<2|c>>6,h=63&c;a||(h=64,s||(d=64)),r.push(n[u],n[l],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new c;const u=i<<2|s>>4;if(r.push(u),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){return function(e){const t=o(e);return a.encodeByteArray(t,!0)}(e).replace(/\./g,"")},l=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const d=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,h=()=>{try{return d()||(()=>{if(void 0===i||void 0===i.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&l(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},f=e=>{var t,n;return null===(n=null===(t=h())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=()=>{var e;return null===(e=h())||void 0===e?void 0:e.config},p=e=>{var t;return null===(t=h())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class g{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function v(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function _(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function y(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function w(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function b(){const e=v();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){try{return"object"==typeof indexedDB}catch(e){return!1}}function S(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class I extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(E,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new I(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function O(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(M(n)&&M(s)){if(!O(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function M(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function R(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function C(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){const n=new L(e,t);return n.subscribe.bind(n)}class L{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=x),void 0===r.error&&(r.error=x),void 0===r.complete&&(r.complete=x);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function x(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){return e&&e._delegate?e._delegate:e}})),s.register("4TNnu",(function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,u=[],l=!1,d=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&f())}function f(){if(!l){var e=a(h);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||l||a(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),s.register("7vF8m",(function(t,n){e(t.exports,"LogLevel",(function(){return i})),e(t.exports,"Logger",(function(){return l})),e(t.exports,"setLogLevel",(function(){return d})),e(t.exports,"setUserLogHandler",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i,s;(s=i||(i={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,c={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=c[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,r.push(this)}}function d(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}})),s.register("cCiiD",(function(t,n){e(t.exports,"openDB",(function(){return i}));var r=s("ekHjI");r=s("ekHjI");function i(e,t,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(e,t),c=(0,r.w)(a);return i&&a.addEventListener("upgradeneeded",(e=>{i((0,r.w)(a.result),e.oldVersion,e.newVersion,(0,r.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),c.then((e=>{o&&e.addEventListener("close",(()=>o())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),c}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],c=new Map;function u(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(c.get(t))return c.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!o.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return c.set(t,s),s}(0,r.r)((e=>({...e,get:(t,n,r)=>u(t,n)||e.get(t,n,r),has:(t,n)=>!!u(t,n)||e.has(t,n)})))})),s.register("ekHjI",(function(t,n){e(t.exports,"w",(function(){return m})),e(t.exports,"r",(function(){return d}));let r,i;const s=new WeakMap,o=new WeakMap,a=new WeakMap,c=new WeakMap,u=new WeakMap;let l={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){l=e(l)}function h(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(p(this),t),m(s.get(this))}:function(...t){return m(e.apply(p(this),t))}:function(t,...n){const r=e.call(p(this),t,...n);return a.set(r,t.sort?t.sort():[t]),m(r)}}function f(e){return"function"==typeof e?h(e):(e instanceof IDBTransaction&&function(e){if(o.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));o.set(e,t)}(e),t=e,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,l):e);var t}function m(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(m(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&s.set(t,e)})).catch((()=>{})),u.set(t,e),t}(e);if(c.has(e))return c.get(e);const t=f(e);return t!==e&&(c.set(e,t),u.set(t,e)),t}const p=e=>u.get(e)})),s.register("eyjy7",(function(t,n){e(t.exports,"createUserWithEmailAndPassword",(function(){return s("g9RKX").a5})),e(t.exports,"sendEmailVerification",(function(){return s("g9RKX").ab})),e(t.exports,"signInWithEmailAndPassword",(function(){return s("g9RKX").a6})),e(t.exports,"onAuthStateChanged",(function(){return s("g9RKX").v})),e(t.exports,"getAuth",(function(){return s("g9RKX").n})),s("1iO0g")})),s.register("1iO0g",(function(t,n){e(t.exports,"createUserWithEmailAndPassword",(function(){return s("g9RKX").a5})),e(t.exports,"getAuth",(function(){return s("g9RKX").n})),e(t.exports,"onAuthStateChanged",(function(){return s("g9RKX").v})),e(t.exports,"sendEmailVerification",(function(){return s("g9RKX").ab})),e(t.exports,"signInWithEmailAndPassword",(function(){return s("g9RKX").a6})),s("ffjl9"),s("ix4Jr"),s("7vF8m"),s("4a6xH");s("g9RKX")})),s.register("g9RKX",(function(t,n){e(t.exports,"a5",(function(){return je})),e(t.exports,"a6",(function(){return Ve})),e(t.exports,"ab",(function(){return Be})),e(t.exports,"v",(function(){return qe})),e(t.exports,"n",(function(){return on}));var r=s("ffjl9"),i=s("ix4Jr"),o=s("7vF8m"),a=s("l73V3"),c=s("4a6xH");function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=u,d=new(0,r.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),h=new(0,o.Logger)("@firebase/auth");function f(e,...t){h.logLevel<=o.LogLevel.ERROR&&h.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e,...t){throw v(e,...t)}function p(e,...t){return v(e,...t)}function g(e,t,n){const i=Object.assign(Object.assign({},l()),{[t]:n});return new(0,r.ErrorFactory)("auth","Firebase",i).create(t,{appName:e.name})}function v(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return d.create(e,...t)}function _(e,t,...n){if(!e)throw v(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function w(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function k(e){w(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function S(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(I()||(0,r.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.isMobileCordova)()||(0,r.isReactNative)()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},N=new E(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function C(e,t,n,i,s={}){return A(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.querystring)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),O.fetch()(x(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function A(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},M),t);try{const t=new P(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw U(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw U(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw U(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);m(e,a)}}catch(t){if(t instanceof r.FirebaseError)throw t;m(e,"internal-error",{message:String(t)})}}async function L(e,t,n,r,i={}){const s=await C(e,t,n,r,i);return"mfaPendingCredential"in s&&m(e,"multi-factor-auth-required",{_serverResponse:s}),s}function x(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?D(e.config,i):`${e.config.apiScheme}://${i}`}class P{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),N.get())}))}}function U(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return 1e3*Number(e)}function W(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.base64Decode)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(e){return f("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function H(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class j{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{_initializeTime(){this.lastSignInTime=Y(this.lastLoginAt),this.creationTime=Y(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e){var t;const n=e.auth,r=await e.getIdToken(),i=await H(e,async function(e,t){return C(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));_(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,a.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const c=(u=e.providerData,l=o,[...u.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var u,l;const d=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==c?void 0:c.length)),f=!!d&&h,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new V(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,m)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(void 0!==e.idToken,"internal-error"),_(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=W(e);return _(t,"internal-error"),_(void 0!==t.exp,"internal-error"),_(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await A(e,{},(async()=>{const n=(0,r.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=x(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new q;return n&&(_("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(_("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(_("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new q,this.toJSON())}_performRefresh(){return y("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t){_("string"==typeof e||void 0===e,"internal-error",{appName:t})}class G{async getIdToken(e){const t=await H(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,r.getModularInstance)(e),i=await n.getIdToken(t),s=W(i);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:Y(F(s.auth_time)),issuedAtTime:Y(F(s.iat)),expirationTime:Y(F(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,r.getModularInstance)(e);await B(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new G(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await B(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await H(this,async function(e,t){return C(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,m=null!==(o=t.tenantId)&&void 0!==o?o:void 0,p=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:k,stsTokenManager:S}=t;_(y&&S,e,"internal-error");const I=q.fromJSON(this.name,S);_("string"==typeof y,e,"internal-error"),z(l,e.name),z(d,e.name),_("boolean"==typeof w,e,"internal-error"),_("boolean"==typeof b,e,"internal-error"),z(h,e.name),z(f,e.name),z(m,e.name),z(p,e.name),z(g,e.name),z(v,e.name);const T=new G({uid:y,auth:e,email:d,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:h,tenantId:m,stsTokenManager:I,createdAt:g,lastLoginAt:v});return k&&Array.isArray(k)&&(T.providerData=k.map((e=>Object.assign({},e)))),p&&(T._redirectEventId=p),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new q;r.updateFromServerResponse(t);const i=new G({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await B(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=(0,a.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new V(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}$.type="NONE";const K=$;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t,n){return`firebase:${e}:${t}:${n}`}class Z{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?G._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Z(k(K),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||k(K);const s=J(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=G._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Z(i,e,n)):new Z(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=J(this.userKey,r.apiKey,i),this.fullPersistenceKey=J("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ne(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Q(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ie(t))return"Blackberry";if(se(t))return"Webos";if(ee(t))return"Safari";if((t.includes("chrome/")||te(t))&&!t.includes("edge/"))return"Chrome";if(re(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Q(e=(0,r.getUA)()){return/firefox\//i.test(e)}function ee(e=(0,r.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function te(e=(0,r.getUA)()){return/crios\//i.test(e)}function ne(e=(0,r.getUA)()){return/iemobile/i.test(e)}function re(e=(0,r.getUA)()){return/android/i.test(e)}function ie(e=(0,r.getUA)()){return/blackberry/i.test(e)}function se(e=(0,r.getUA)()){return/webos/i.test(e)}function oe(e=(0,r.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ae(e=(0,r.getUA)()){return oe(e)||re(e)||se(e)||ie(e)||/windows phone/i.test(e)||ne(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(e,t=[]){let n;switch(e){case"Browser":n=X((0,r.getUA)());break;case"Worker":n=`${X((0,r.getUA)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=k(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Z.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await B(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.getModularInstance)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(k(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,r.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&k(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await Z.create(this,[k(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new he(this),this.idTokenSubscription=new he(this),this.beforeStateQueue=new ue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function de(e){return(0,r.getModularInstance)(e)}class he{get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.createSubscribe)((e=>this.observer=e))}}function fe(e,t,n){const r=de(e);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=me(t),{host:o,port:a}=function(e){const t=me(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:pe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:pe(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function me(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function pe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ge{toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(e,t){return C(e,"POST","/v1/accounts:update",t)}async function _e(e,t){return C(e,"POST","/v1/accounts:sendOobCode",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye extends ge{static _fromEmailAndPassword(e,t){return new ye(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ye(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return L(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}(e,{email:this._email,oobCode:this._password});default:m(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ve(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:m(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(e,t){return L(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends ge{static _fromParams(e){const t=new be(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):m("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=(0,a.__rest)(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new be(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return we(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,we(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,we(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,r.querystring)(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends ge{static _fromVerification(e,t){return new Se({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Se({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await L(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw U(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ke)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Se({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static parseLink(e){const t=function(e){const t=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).link,n=t?(0,r.querystringDecode)((0,r.extractQuerystring)(t)).deep_link_id:null,i=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).deep_link_id;return(i?(0,r.querystringDecode)((0,r.extractQuerystring)(i)).link:null)||i||n||t||e}(e);try{return new Ie(t)}catch(e){return null}}constructor(e){var t,n,i,s,o,a;const c=(0,r.querystringDecode)((0,r.extractQuerystring)(e)),u=null!==(t=c.apiKey)&&void 0!==t?t:null,l=null!==(n=c.oobCode)&&void 0!==n?n:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);_(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(s=c.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{static credential(e,t){return ye._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ie.parseLink(t);return _(n,"argument-error"),ye._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Te.PROVIDER_ID}}Te.PROVIDER_ID="password",Te.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Te.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Ee{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe extends De{static credential(e){return be._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Oe.FACEBOOK_SIGN_IN_METHOD="facebook.com",Oe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me extends De{static credential(e,t){return be._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Me.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Me.GOOGLE_SIGN_IN_METHOD="google.com",Me.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne extends De{static credential(e){return be._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Ne.GITHUB_SIGN_IN_METHOD="github.com",Ne.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re extends De{static credential(e,t){return be._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Re.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ce(e,t){return L(e,"POST","/v1/accounts:signUp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re.TWITTER_SIGN_IN_METHOD="twitter.com",Re.PROVIDER_ID="twitter.com";class Ae{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await G._fromIdTokenResponse(e,n,r),s=Le(n);return new Ae({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Le(n);return new Ae({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Le(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe extends r.FirebaseError{static _fromErrorAndOperation(e,t,n,r){return new xe(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,xe.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Pe(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw xe._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(e,t,n=!1){const r=await H(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ae._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ye(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await H(e,Pe(r,i,t,e),n);_(s.idToken,r,"internal-error");const o=W(s.idToken);_(o,r,"internal-error");const{sub:a}=o;return _(e.uid===a,r,"user-mismatch"),Ae._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&m(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t,n=!1){const r="signIn",i=await Pe(e,r,t),s=await Ae._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function We(e,t){return Fe(de(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(e,t,n){var r;_((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),_(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(_(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(_(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(e,t,n){const r=de(e),i=await Ce(r,{returnSecureToken:!0,email:t,password:n}),s=await Ae._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Ve(e,t,n){return We((0,r.getModularInstance)(e),Te.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){const n=(0,r.getModularInstance)(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&He(n.auth,i,t);const{email:s}=await async function(e,t){return _e(e,t)}(n.auth,i);s!==e.email&&await e.reload()}function qe(e,t,n,i){return(0,r.getModularInstance)(e).onAuthStateChanged(t,n,i)}new WeakMap;const ze="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{_isAvailable(){try{return this.storage?(this.storage.setItem(ze,"1"),this.storage.removeItem(ze),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Ge{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(0,r.isIE)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,r.getUA)();return ee(e)||oe(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ae(),this._shouldAllowMigration=!0}}$e.type="LOCAL";const Ke=$e;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Ge{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Je.type="SESSION";const Ze=Je;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Xe(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qe(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe.receivers=[];class et{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Qe("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nt(){return void 0!==tt().WorkerGlobalScope&&"function"==typeof tt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rt="firebaseLocalStorageDb",it="firebaseLocalStorage",st="fbase_key";class ot{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function at(e,t){return e.transaction([it],t?"readwrite":"readonly").objectStore(it)}function ct(){const e=indexedDB.open(rt,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(it,{keyPath:st})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(it)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(rt);return new ot(e).toPromise()}(),t(await ct()))}))}))}async function ut(e,t,n){const r=at(e,!0).put({[st]:t,value:n});return new ot(r).toPromise()}function lt(e,t){const n=at(e,!0).delete(t);return new ot(n).toPromise()}class dt{async _openDb(){return this.db||(this.db=await ct()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xe._getInstance(nt()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new et(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ct();return await ut(e,ze,"1"),await lt(e,ze),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ut(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=at(e,!1).get(t),r=await new ot(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>lt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=at(e,!1).getAll();return new ot(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}dt.type="LOCAL";const ht=dt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function mt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
mt("rcb"),new E(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pt="recaptcha";async function gt(e,t,n){var r;const i=await n.verify();try{let s;if(_("string"==typeof i,e,"argument-error"),_(n.type===pt,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){_("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return C(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;_(n,e,"missing-multi-factor-info");const o=await function(e,t){return C(e,"POST","/v2/accounts/mfaSignIn:start",R(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return C(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{verifyPhoneNumber(e,t){return gt(this.auth,e,(0,r.getModularInstance)(t))}static credential(e,t){return Se._fromVerification(e,t)}static credentialFromResult(e){const t=e;return vt.credentialFromTaggedObject(t)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Se._fromTokenResponse(t,n):null}constructor(e){this.providerId=vt.PROVIDER_ID,this.auth=de(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _t(e,t){return t?k(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.PROVIDER_ID="phone",vt.PHONE_SIGN_IN_METHOD="phone";class yt extends ge{_getIdTokenResponse(e){return we(e,this._buildIdpRequest())}_linkToIdToken(e,t){return we(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return we(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function wt(e){return Fe(e.auth,new yt(e),e.bypassAuthState)}function bt(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Ye(n,new yt(e),e.bypassAuthState)}async function kt(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Ue(n,new yt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wt;case"linkViaPopup":case"linkViaRedirect":return kt;case"reauthViaPopup":case"reauthViaRedirect":return bt;default:m(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new E(2e3,1e4);class Tt extends St{async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=Qe();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,It.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Tt.currentPopupAction&&Tt.currentPopupAction.cancel(),Tt.currentPopupAction=this}}Tt.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Et=new Map;class Dt extends St{async execute(){let e=Et.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Nt(t),r=Mt(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Et.set(this.auth._key(),e)}return this.bypassAuthState||Et.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Ot(e,t){Et.set(e._key(),t)}function Mt(e){return k(e._redirectPersistence)}function Nt(e){return J("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){const r=de(e),i=_t(r,t),s=new Dt(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Ct{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Lt(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(At(e))}saveEventToCache(e){this.cachedEventUids.add(At(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function At(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Lt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pt=/^https?/;async function Ut(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return C(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Yt(e))return}catch(e){}m(e,"unauthorized-domain")}function Yt(e){const t=S(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Pt.test(n))return!1;if(xt.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new E(3e4,6e4);function Wt(){const e=tt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Ht=null;function jt(e){return Ht=Ht||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Wt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Wt(),n(p(e,"network-request-failed"))},timeout:Ft.get()})}if(null===(i=null===(r=tt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=tt().gapi)||void 0===s?void 0:s.load)){const t=mt("iframefcb");return tt()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},ft(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Ht=null,e}))}(e),Ht}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new E(5e3,15e3),Bt={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qt=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zt(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?D(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},o=qt.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.querystring)(s).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class $t{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Kt(e,t,n,i=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Gt),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.getUA)().toLowerCase();n&&(c=te(l)?"_blank":n),Q(l)&&(t=t||"http://localhost",u.scrollbars="yes");const d=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,r.getUA)()){var t;return oe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",c),new $t(null);const h=window.open(t||"",c,d);_(h,e,"popup-blocked");try{h.focus()}catch(e){}return new $t(h)}const Jt="emulator/auth/handler";function Zt(e,t,n,s,o,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.SDK_VERSION,eventId:o};if(t instanceof Ee){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.isEmpty)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof De){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const e of Object.keys(u))void 0===u[e]&&delete u[e];return`${function({config:e}){return e.emulator?D(e,Jt):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${(0,r.querystring)(u).slice(1)}`}const Xt="webStorageSupport";const Qt=class{async _openPopup(e,t,n,r){var i;w(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Kt(e,Zt(e,t,n,S(),r),Qe())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Zt(e,t,n,S(),r),tt().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await jt(e),n=tt().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:zt(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bt,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=tt().setTimeout((()=>{r(i)}),Vt.get());function o(){tt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Ct(e);return t.register("authEvent",(t=>{_(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xt,{type:Xt},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),m(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ut(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ae()||ee()||oe()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ze,this._completeRedirectFn=Rt,this._overrideRedirectResult=Ot}};var en="@firebase/auth",tn="0.21.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rn=(0,r.getExperimentalSetting)("authIdTokenMaxAge")||300;let sn=null;function on(e=(0,i.getApp)()){const t=(0,i._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,i._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.deepEqual)(i,null!=t?t:{}))return e;m(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Qt,persistence:[ht,Ke,Ze]}),s=(0,r.getExperimentalSetting)("authTokenSyncURL");if(s){const e=(o=s,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>rn)return;const r=null==t?void 0:t.token;sn!==r&&(sn=r,await fetch(o,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){(0,r.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){(0,r.getModularInstance)(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var o;const a=(0,r.getDefaultEmulatorHost)("auth");return a&&fe(n,`http://${a}`),n}var an;an="Browser",(0,i._registerComponent)(new(0,c.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{_(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),_(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:an,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ce(an)},o=new le(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(k);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,i._registerComponent)(new(0,c.Component)("auth-internal",(e=>{const t=de(e.getProvider("auth").getImmediate());return new nn(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(en,tn,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(an)),(0,i.registerVersion)(en,tn,"esm2017")})),s.register("l73V3",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),s.register("bTcpz",(function(t,n){e(t.exports,"toggleModal",(function(){return o}));var r=s("aWeqn");const i={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtn2:document.querySelector("[data-modal-open2]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){i.modal.classList.toggle("is-hidden")}function a(){"Logout"===i.openModalBtn.textContent?async function(){await r.auth.signOut()}():o()}i.openModalBtn.addEventListener("click",a),i.openModalBtn2.addEventListener("click",a),i.closeModalBtn.addEventListener("click",(function(){o(),document.getElementById("modal-error-message-area").textContent="",document.querySelector(".order-form").reset()}))})),s.register("1iCTa",(function(e,t){s("31u3U");const n="selectedTheme",r={themeSwitcherEl:document.querySelector("#theme"),bodyEl:document.body,burgerEl:document.querySelector("#theme-burger"),switcherLightEl:document.querySelector(".switcher__text-light"),switcherDarkEl:document.querySelector(".switcher__text-dark"),linksEl:document.querySelectorAll(".nav__link"),logoEl:document.querySelector(".header__logo"),searchInputEl:document.querySelector(".search-form__input"),searchIconEl:document.querySelector(".search-form__icon"),modalEl:document.querySelector(".modal"),iconSun:document.querySelector(".icon-sun"),iconMoon:document.querySelector(".icon-moon"),calendarEl:document.querySelector(".date-form__input"),calendarButton:document.querySelector(".date-form__button-icon"),headerEl:document.querySelector(".header"),buttonAuthorization:document.querySelector(".button-authorization"),mobileLogo:document.querySelector(".mobile-logo"),mobileLink:document.querySelectorAll(".mobile-menu__link"),mobileCont:document.querySelector(".mobile-menu-container"),mobileArr:document.querySelector(".mobile-menu__right-arrow"),btnEl:document.querySelectorAll(".mobile-menu-button__icon"),iconBrgSun:document.querySelector(".icon-sun-burger"),iconBrgMoon:document.querySelector(".icon-moon-burger")};function i(){r.bodyEl.classList.toggle("dark-mode"),r.switcherLightEl&&r.switcherLightEl.classList.toggle("switcher-dark"),r.switcherDarkEl&&r.switcherDarkEl.classList.toggle("switcher-light"),r.linksEl&&r.linksEl.forEach((e=>e.classList.toggle("light-text"))),r.logoEl&&r.logoEl.classList.toggle("light-text"),r.searchInputEl&&r.searchInputEl.classList.toggle("search-form__input--dark"),r.searchIconEl&&r.searchIconEl.classList.toggle("search-form__icon--dark"),r.searchIconEl&&r.searchIconEl.setAttribute("fill",r.bodyEl.classList.contains("dark-mode")?"#fff":""),r.headerEl&&r.headerEl.classList.toggle("header-border"),r.modalEl&&r.modalEl.classList.toggle("dark-text"),r.iconSun&&r.iconSun.classList.toggle("icon-sun-night"),r.iconMoon&&r.iconMoon.classList.toggle("icon-moon-night"),r.calendarEl&&r.calendarEl.classList.toggle("input-dark-mode"),r.calendarButton&&r.calendarButton.classList.toggle("button-dark-mode"),r.calendarEl&&r.calendarEl.classList.toggle("light-text",!r.bodyEl.classList.contains("dark-mode")),r.mobileLogo&&r.mobileLogo.classList.toggle("light-text"),r.mobileLink&&r.mobileLink.forEach((e=>e.classList.toggle("light-text"))),r.iconBrgSun&&r.iconBrgSun.classList.toggle("icon-sun-night-burger"),r.iconBrgMoon&&r.iconBrgMoon.classList.toggle("icon-moon-night-burger"),r.mobileCont&&r.mobileCont.classList.toggle("dark-mode"),r.btnEl&&r.btnEl.forEach((e=>e.classList.toggle("white-icon"))),r.buttonAuthorization&&r.buttonAuthorization.classList.toggle("buttonAuthorization-dark"),localStorage.setItem(n,r.bodyEl.classList.contains("dark-mode")?"dark":"light"),r.themeSwitcherEl.checked=r.bodyEl.classList.contains("dark-mode"),r.burgerEl.checked=r.bodyEl.classList.contains("dark-mode")}"dark"===localStorage.getItem(n)&&(r.themeSwitcherEl.checked=!0,r.burgerEl.checked=!0,i()),r.mobileCont&&(r.burgerEl.checked=r.bodyEl.classList.contains("dark-mode")),r.themeSwitcherEl.addEventListener("change",i),r.burgerEl.addEventListener("change",i)}));
//# sourceMappingURL=favorite.b7b6cb69.js.map
