"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("node-fetch"),r=require("qs");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),o=t(r);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function i(e,r,t,n){return new(t||(t=Promise))((function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(s,a)}u((n=n.apply(e,r||[])).next())}))}function s(e,r){var t,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=r.call(e,s)}catch(e){i=[6,e],n=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var a=function(e){return null!==e&&"string"==typeof e};exports.createClient=function(e){var r=e.serviceDomain,t=e.apiKey;if(!r||!t)throw new Error("parameter is required (check serviceDomain and apiKey)");if(!a(r)||!a(t))throw new Error("parameter is not string");var u="https://"+r+".microcms.io/api/v1",c=function(e){var r=e.endpoint,a=e.contentId,c=e.queries,d=void 0===c?{}:c;return i(void 0,void 0,void 0,(function(){var e,i,c,l,f,p;return s(this,(function(s){switch(s.label){case 0:e=function(e){if(null===(r=e)||"object"!=typeof r)throw new Error("queries is not object");var r;return o.default.stringify(e,{arrayFormat:"comma"})}(d),i={headers:{"X-MICROCMS-API-KEY":t}},c=u+"/"+r+(a?"/"+a:"")+(e?"?"+e:""),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,n.default(c,i)];case 2:if(!(l=s.sent()).ok)throw new Error("fetch API response status: "+l.status);return[2,l.json()];case 3:if((f=s.sent()).data)throw f.data;if(null===(p=f.response)||void 0===p?void 0:p.data)throw f.response.data;return[2,Promise.reject(new Error("serviceDomain or endpoint may be wrong.\n Details: "+f))];case 4:return[2]}}))}))};return{get:function(e){var r=e.endpoint,t=e.contentId,n=e.queries,o=void 0===n?{}:n;return i(void 0,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return r?[4,c({endpoint:r,contentId:t,queries:o})]:[2,Promise.reject(new Error("endpoint is required"))];case 1:return[2,e.sent()]}}))}))},getList:function(e){var r=e.endpoint,t=e.queries,n=void 0===t?{}:t;return i(void 0,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return r?[4,c({endpoint:r,queries:n})]:[2,Promise.reject(new Error("endpoint is required"))];case 1:return[2,e.sent()]}}))}))},getListDetail:function(e){var r=e.endpoint,t=e.contentId,n=e.queries,o=void 0===n?{}:n;return i(void 0,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return r?[4,c({endpoint:r,contentId:t,queries:o})]:[2,Promise.reject(new Error("endpoint is required"))];case 1:return[2,e.sent()]}}))}))},getObject:function(e){var r=e.endpoint,t=e.queries,n=void 0===t?{}:t;return i(void 0,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return r?[4,c({endpoint:r,queries:n})]:[2,Promise.reject(new Error("endpoint is required"))];case 1:return[2,e.sent()]}}))}))},post:function(e,r){return i(void 0,void 0,void 0,(function(){var o,i,a,c,d,l;return s(this,(function(s){switch(s.label){case 0:o=JSON.stringify(r),i={headers:{"X-MICROCMS-API-KEY":t,"Content-Type":"application/json"},method:"POST",body:o},a=u+"/"+e,s.label=1;case 1:return s.trys.push([1,3,,4]),[4,n.default(a,i)];case 2:if(!(c=s.sent()).ok)throw console.log(o),console.dir(c),new Error("fetch API response status: "+c.status+"; response body: "+c.body);return[2,c.json()];case 3:if((d=s.sent()).data)throw d.data;if(null===(l=d.response)||void 0===l?void 0:l.data)throw d.response.data;return[2,Promise.reject(new Error("serviceDomain or endpoint may be wrong.\n Details: "+d))];case 4:return[2]}}))}))}}};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm9jbXMtanMtc2RrLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OyJ9
