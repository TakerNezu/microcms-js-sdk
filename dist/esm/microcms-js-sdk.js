import e from"node-fetch";import r from"qs";
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
***************************************************************************** */function n(e,r,n,t){return new(n||(n=Promise))((function(o,i){function s(e){try{u(t.next(e))}catch(e){i(e)}}function a(e){try{u(t.throw(e))}catch(e){i(e)}}function u(e){var r;e.done?o(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,a)}u((t=t.apply(e,r||[])).next())}))}function t(e,r){var n,t,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,t=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=r.call(e,s)}catch(e){i=[6,e],t=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var o=function(e){return null!==e&&"string"==typeof e},i=function(i){var s=i.serviceDomain,a=i.apiKey;if(!s||!a)throw new Error("parameter is required (check serviceDomain and apiKey)");if(!o(s)||!o(a))throw new Error("parameter is not string");var u="https://"+s+".microcms.io/api/v1",c=function(o){var i=o.endpoint,s=o.contentId,c=o.queries,d=void 0===c?{}:c;return n(void 0,void 0,void 0,(function(){var n,o,c,f,l,p;return t(this,(function(t){switch(t.label){case 0:n=function(e){if(null===(n=e)||"object"!=typeof n)throw new Error("queries is not object");var n;return r.stringify(e,{arrayFormat:"comma"})}(d),o={headers:{"X-MICROCMS-API-KEY":a}},c=u+"/"+i+(s?"/"+s:"")+(n?"?"+n:""),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,e(c,o)];case 2:if(!(f=t.sent()).ok)throw new Error("fetch API response status: "+f.status);return[2,f.json()];case 3:if((l=t.sent()).data)throw l.data;if(null===(p=l.response)||void 0===p?void 0:p.data)throw l.response.data;return[2,Promise.reject(new Error("serviceDomain or endpoint may be wrong.\n Details: "+l))];case 4:return[2]}}))}))};return{get:function(e){var r=e.endpoint,o=e.contentId,i=e.queries,s=void 0===i?{}:i;return n(void 0,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return r?[4,c({endpoint:r,contentId:o,queries:s})]:[2,Promise.reject(new Error("endpoint is required"))];case 1:return[2,e.sent()]}}))}))},getList:function(e){var r=e.endpoint,o=e.queries,i=void 0===o?{}:o;return n(void 0,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return r?[4,c({endpoint:r,queries:i})]:[2,Promise.reject(new Error("endpoint is required"))];case 1:return[2,e.sent()]}}))}))},getListDetail:function(e){var r=e.endpoint,o=e.contentId,i=e.queries,s=void 0===i?{}:i;return n(void 0,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return r?[4,c({endpoint:r,contentId:o,queries:s})]:[2,Promise.reject(new Error("endpoint is required"))];case 1:return[2,e.sent()]}}))}))},getObject:function(e){var r=e.endpoint,o=e.queries,i=void 0===o?{}:o;return n(void 0,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return r?[4,c({endpoint:r,queries:i})]:[2,Promise.reject(new Error("endpoint is required"))];case 1:return[2,e.sent()]}}))}))},post:function(r,o){return n(void 0,void 0,void 0,(function(){var n,i,s,c,d;return t(this,(function(t){switch(t.label){case 0:n={headers:{"X-MICROCMS-API-KEY":a},method:"POST",body:JSON.stringify(o)},console.log(JSON.stringify(o)),i=u+"/"+r,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,e(i,n)];case 2:if(s=t.sent(),console.dir(s),!s.ok)throw new Error("fetch API response status: "+s.status);return[2,s.json()];case 3:if((c=t.sent()).data)throw c.data;if(null===(d=c.response)||void 0===d?void 0:d.data)throw c.response.data;return[2,Promise.reject(new Error("serviceDomain or endpoint may be wrong.\n Details: "+c))];case 4:return[2]}}))}))}}};export{i as createClient};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm9jbXMtanMtc2RrLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7In0=
