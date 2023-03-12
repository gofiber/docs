(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);const o="__WB_REVISION__";function h(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set(o,s),{cacheKey:n.href,url:i.href}}class l{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class u{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let f;async function d(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===f){const e=new Response("");if("body"in e)try{new Response(e.body),f=!0}catch(e){f=!1}f=!1}return f}()?n.body:await n.blob();return new Response(c,r)}function p(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const y=new Set;s(873);function w(e){return"string"==typeof e?new Request(e):e}class _{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=w(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=w(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=w(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=p(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===p(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of y)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=w(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class v{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new _(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class m extends v{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==m.copyRedirectedCacheableResponsesPlugin&&(a===m.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await d(e):e};class R{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:i(e),plugins:[...t,new u({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=h(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new l;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"7ecc36bd42522fd342085adf2802c97e","url":"-middleware/index.html"},{"revision":"f516f87483bdf3c14b3e64b394de7358","url":"404.html"},{"revision":"434b63bb7a45e0001307cc1e89661b16","url":"api/app/index.html"},{"revision":"2a7b9079d7cbd3d675fec6c14f9583d0","url":"api/client/index.html"},{"revision":"d3ebb47bea30a98ed34e6accc6c0c0b9","url":"api/constants/index.html"},{"revision":"3927432ae0d03ccab553eb68bbf35126","url":"api/ctx/index.html"},{"revision":"bfdb3f7eb0d6949bdf55a80109354ee3","url":"api/fiber/index.html"},{"revision":"efcd53474ba79a80a7f4f60693d23afc","url":"api/middleware/basicauth/index.html"},{"revision":"73fc3c1b28893a7cc5c7290defb5d3d5","url":"api/middleware/cache/index.html"},{"revision":"a87583096d290b48943d9ab5c41b7bf8","url":"api/middleware/compress/index.html"},{"revision":"177b93ee11e0e5f4c7db6c0c6af5c750","url":"api/middleware/cors/index.html"},{"revision":"93f8e6309791ccf491f641ae6b29e002","url":"api/middleware/csrf/index.html"},{"revision":"cefdda452f2ec0e3b94e7255c1ecfdb2","url":"api/middleware/earlydata/index.html"},{"revision":"29de8c86b85ddd2b0f3afd61649d48cf","url":"api/middleware/encryptcookie/index.html"},{"revision":"0bddc527cc991c5175e7a0b0b76eed3d","url":"api/middleware/envvar/index.html"},{"revision":"0b6e298585e70b25f6659ac263093bbb","url":"api/middleware/etag/index.html"},{"revision":"43fee3a298eed82a522f08a31a7e4d93","url":"api/middleware/expvar/index.html"},{"revision":"099194d4060c307948f1714bcb332f00","url":"api/middleware/favicon/index.html"},{"revision":"84393e494570ff456cd11b550a0dfc8b","url":"api/middleware/filesystem/index.html"},{"revision":"309d739929fb5ff0bdf5f2be8d2fa6e3","url":"api/middleware/idempotency/index.html"},{"revision":"9e583947dae89b41b9852b37d751a7be","url":"api/middleware/limiter/index.html"},{"revision":"25a5222e4a6a62be49b7bc5a03ac0c30","url":"api/middleware/logger/index.html"},{"revision":"1dc9c4471b21da460dabe4eaf2cb0691","url":"api/middleware/monitor/index.html"},{"revision":"5ef3cf48fbff8546bce2bdb27b7fb382","url":"api/middleware/pprof/index.html"},{"revision":"b20c022a34c6e467ecde463161af7642","url":"api/middleware/proxy/index.html"},{"revision":"8089f81eb456e82a45bbdfdea5f1285d","url":"api/middleware/recover/index.html"},{"revision":"08313bba473905d8b9fc6f4e8cd18a7d","url":"api/middleware/requestid/index.html"},{"revision":"d6f64fc9176a2b45a0649373f2a085ba","url":"api/middleware/session/index.html"},{"revision":"18a821d1264400daa3e162ff8649210d","url":"api/middleware/skip/index.html"},{"revision":"77d3853e8e5fa5d251ec38853a14a665","url":"api/middleware/timeout/index.html"},{"revision":"394ccdeac545e6451ecc18a52d7ad149","url":"assets/css/styles.bd0e21b3.css"},{"revision":"4ad4004d358c66a72fb69a730ae0ac93","url":"assets/js/05a04cc8.f70d38fb.js"},{"revision":"80e8ca18ed96fbe32ca9d6110ea26cd8","url":"assets/js/05e2dc8a.52c3cccb.js"},{"revision":"2a74277554e7f438b24aec1744338d48","url":"assets/js/089526fe.a855b385.js"},{"revision":"11432004bc10ead1448dded5f33d1d54","url":"assets/js/0b8e8946.cb01b09c.js"},{"revision":"e0703c5ccb6ac358e0f8fc52ec0e93c8","url":"assets/js/0c35ae3f.498db8ef.js"},{"revision":"cb26200ee1d5a72f0e6fe4f567d427ba","url":"assets/js/0e384e19.4c3e767a.js"},{"revision":"60af7e30d9305fc50d1604b0ea99b326","url":"assets/js/0f17a9fe.312542fc.js"},{"revision":"e130e2350907568aff3e97936954a70c","url":"assets/js/0faeb6cb.ac01fd04.js"},{"revision":"3e46aae2dc3ed89351213800b8798ebf","url":"assets/js/105f1242.9cbc18c4.js"},{"revision":"1ed5584d839fbde7b5440cd3bfe8f63b","url":"assets/js/14a7e971.4bc5b05e.js"},{"revision":"f0eb3e10492ffbaf85677dfcb8fb4a90","url":"assets/js/14eb3368.deff6f73.js"},{"revision":"925f141495c9b9f1fa9a2530f4e2d225","url":"assets/js/1588a372.64be5218.js"},{"revision":"88a4e2168e011b1ca9509fae1a070225","url":"assets/js/17896441.0f017951.js"},{"revision":"08a042fe968f1fbf363f46018e90b0a7","url":"assets/js/19e7c5f6.805c02ac.js"},{"revision":"798ee997e51f42d52a40e720014fbaf5","url":"assets/js/1a4e3797.3b0d9fd8.js"},{"revision":"113cbe141f58afd2dac0474635f8a2f1","url":"assets/js/1a56c576.e60e5cb8.js"},{"revision":"c1c20b8b7315f9b2dc201e0e26284a7a","url":"assets/js/1be78505.0df9947b.js"},{"revision":"97c292a0091b213781a8a252e7fa7816","url":"assets/js/1ed4c90d.f4e53ac9.js"},{"revision":"2b4ed96e958e6ae32cae2f437a4f5b67","url":"assets/js/20e81fa7.c2bac724.js"},{"revision":"21f65e983e654a0b6825c9e4338f52e5","url":"assets/js/230.06e9bff8.js"},{"revision":"8278edc76fc3c4a2be3323fc17dc643c","url":"assets/js/247783bb.b20f80cc.js"},{"revision":"f32e472cc2efdf011c9346aad6f4d9f0","url":"assets/js/24847ea2.981bc437.js"},{"revision":"3b5f167a3b753247b5ec5a5166039390","url":"assets/js/26257c43.5393561a.js"},{"revision":"47c2a248636813c694577edd76873345","url":"assets/js/2bc33efd.086be935.js"},{"revision":"3413573d93a860d69d7d52e0ead448d9","url":"assets/js/3201faa7.668bea39.js"},{"revision":"1961fe9d154d15c6fbae3969ad3093b1","url":"assets/js/32778213.5608e9ea.js"},{"revision":"117622d6cdae37c04db83d458a4221e5","url":"assets/js/354823c1.28099309.js"},{"revision":"8e3b8f167516f6567f6ff34522196d4d","url":"assets/js/3719c62c.693effe3.js"},{"revision":"532b082893c913a80e0d808dff219b06","url":"assets/js/37882858.57d2039f.js"},{"revision":"77df68a9cf48b54e102a460acedebc11","url":"assets/js/396a05ac.a0af79d2.js"},{"revision":"d3c78843421aad8d5187b95b2076f6da","url":"assets/js/411460cb.c1c3a681.js"},{"revision":"d13a0b82e439e1243fdf336a7c1e84cb","url":"assets/js/4129286c.6024df0a.js"},{"revision":"9f48dea6baeb2166b2fd876259609ace","url":"assets/js/41a4aef8.ea59b296.js"},{"revision":"f8ec7cd8ce422b7e651faf2728cbabd3","url":"assets/js/44ea2a3d.994c684f.js"},{"revision":"99f95da9c1204274b8dd0d8c16d90d76","url":"assets/js/48c6cc07.564e2893.js"},{"revision":"1cfe226c888a7923f2b64afa8c36623a","url":"assets/js/4972.c68e3ad3.js"},{"revision":"dfdc047e7afe6501183a47febc3c7350","url":"assets/js/4a9dde3b.e2c927cd.js"},{"revision":"8f82d637c258d96bdc9bceb7d3f3a466","url":"assets/js/4b47f78b.c2b8ccd9.js"},{"revision":"8a586a383e4e62a3235a9d462a349eb7","url":"assets/js/5131.8aadd48c.js"},{"revision":"d02b8f83b2fcbfafa04852db77a22925","url":"assets/js/5229ce75.bfd3828b.js"},{"revision":"0933a70374cdd0535785868363a5598d","url":"assets/js/5283.0af36832.js"},{"revision":"1db7139270887fccf88a1866597bed62","url":"assets/js/5525.999d509e.js"},{"revision":"49993015e7ed9c183a5cd20d5d13f15d","url":"assets/js/563969e6.ce05c937.js"},{"revision":"a6c3eadaf21a0ad51ea0ee11904b451b","url":"assets/js/5995d508.69d14c39.js"},{"revision":"7ece875498d87f4d42bf02f92735b566","url":"assets/js/59e3a47e.af85959e.js"},{"revision":"29c7ddc6622e60de40d96642b4fcf8cd","url":"assets/js/5aebd6e8.0fe7cb17.js"},{"revision":"5c9c9e308ece83fb115659ddd21469eb","url":"assets/js/5f49a855.f25d9bf5.js"},{"revision":"e9f1b777e9c4309263aec9edc71f332b","url":"assets/js/615fd3de.9c409b23.js"},{"revision":"31065a46960829505f7256a713d62f45","url":"assets/js/65a2e3ff.8cb8b5c4.js"},{"revision":"c2bbfc181a02d216f98b4c3d2f3ed240","url":"assets/js/683903ba.b973692b.js"},{"revision":"942216b12e920343b6b540c7d9358435","url":"assets/js/696b59c8.6b3be49d.js"},{"revision":"3a05abd2a87feadc7c1ca8499e1207fd","url":"assets/js/696e1f87.cde2999d.js"},{"revision":"9f8fe30afdbdba19459b77e7c9b90a7b","url":"assets/js/6b69f1ff.9094fde8.js"},{"revision":"51ddaa39c28919dcada7a5e75f451849","url":"assets/js/6e3111c2.2867e09d.js"},{"revision":"03a0beb2843e96bd03bb1e8908c75993","url":"assets/js/6f9f0f49.525981c9.js"},{"revision":"2924e873190c3325d2640017d3c4c502","url":"assets/js/72c9b8f6.1e1e035d.js"},{"revision":"1f4cb8edb799f5849d6d1c5979331f02","url":"assets/js/7449d9ed.10a902f8.js"},{"revision":"5f77bd1ec2db6461245a03532119d9f7","url":"assets/js/7859bc5c.10b9decf.js"},{"revision":"5dabb9ae2c7d6de31219edd93b2570e0","url":"assets/js/78c6c509.806018ea.js"},{"revision":"8d602ab3207a077732f7bc6ea2cef65e","url":"assets/js/7998e0de.c57144a2.js"},{"revision":"062842f59962e7116442591a55296fae","url":"assets/js/7a7fff1b.469abaaf.js"},{"revision":"45ec95693cc920a28f706bb6adf47d31","url":"assets/js/7e307fec.f703c21b.js"},{"revision":"98c5dab6c9b1eda8c861db26badd993a","url":"assets/js/800a3acf.456d18ee.js"},{"revision":"7bd70d0403ad5efab19c982a361b18f5","url":"assets/js/8231ac58.1b02e4a1.js"},{"revision":"b349c076e8b93e2fab83ac80c759c07a","url":"assets/js/82a52177.b8d9c998.js"},{"revision":"b85e1f5cf0fbbbd0f26fb82998b39dbb","url":"assets/js/8443.f0fb2769.js"},{"revision":"c78d12fb96d27a9cdff75922ef4ee355","url":"assets/js/894f4d94.748e5020.js"},{"revision":"f991766a7874807de05049591ede22a5","url":"assets/js/8d52ac26.b3317c0c.js"},{"revision":"05ed773db30686fb631acb94d9e1972d","url":"assets/js/8ec8555c.bdcbcebe.js"},{"revision":"a1f8c9c556fcf720b70b4b2f06ca2541","url":"assets/js/9169002b.41cd9c0b.js"},{"revision":"a1211cf5a6d622fa1e090e4e5ae385e4","url":"assets/js/9226f6dc.f30749c7.js"},{"revision":"f28d4c7c913e755b9dd35fe874e8110b","url":"assets/js/935f2afb.1b5bf152.js"},{"revision":"f073c38da8530bbcdbc0a6b2fb6aedfb","url":"assets/js/9717e045.35084eb4.js"},{"revision":"fe0b6338ca6538af720782ab3043806c","url":"assets/js/9947fe9c.e5aa0630.js"},{"revision":"3d56346517968c3b9c79ace086da4ccd","url":"assets/js/9a57fc4d.b86d3cd1.js"},{"revision":"37ae3ea0a34a2db10b1d4b5d6bd3dafd","url":"assets/js/9c153fbf.0546dc18.js"},{"revision":"a184b36d8ce82310d106c993836d02aa","url":"assets/js/9e17a0a7.1653b57e.js"},{"revision":"a4569de2dbd0ef56eed3713dea3c67c9","url":"assets/js/a1a0db23.86bab087.js"},{"revision":"cf0cc78a17a2affd9cdd116406f4a85d","url":"assets/js/a4f7be8a.62e6a2d6.js"},{"revision":"6b9e4899b7d5cfd88672814584ed6d8e","url":"assets/js/a98ab587.38a38dde.js"},{"revision":"98768dfd2f0c9b2698a8a5718ba5f8cd","url":"assets/js/b0ac2aab.87547976.js"},{"revision":"03b0fdc892648a2f2083bfed0530698f","url":"assets/js/b45514a6.5c180ab6.js"},{"revision":"adbff97c6b46d61f500929eb1fa00ba1","url":"assets/js/bafae794.59d2198d.js"},{"revision":"297527db6680c68adbc5a370021edd18","url":"assets/js/c1bcbd07.aa570483.js"},{"revision":"88c7d8c27b398a7110531349145bc348","url":"assets/js/c36fa059.e3f69d72.js"},{"revision":"da8117d9a8199b05af31efae3764e727","url":"assets/js/c6147012.922b4b95.js"},{"revision":"e684cf267e986a46bce9098f2ec1db77","url":"assets/js/c91a29ee.71c8113a.js"},{"revision":"bfe45a15064370acdd3fd671f5bec689","url":"assets/js/c921e1c5.626d07ab.js"},{"revision":"92095acdaf1ac868a28ec9e99a2323db","url":"assets/js/c9386115.e1084bd0.js"},{"revision":"8486de863455aff9c3a8e1d00f46c211","url":"assets/js/ca4084cc.39505eac.js"},{"revision":"feeaad9065401ab9f85eba38f1873d87","url":"assets/js/cd01922d.05c479f3.js"},{"revision":"8319cccdcf068cb60e1db5ad35e57ca4","url":"assets/js/ceb3afff.a87262a3.js"},{"revision":"b66e417b5613a64b9adad6ab671cbbc3","url":"assets/js/cf63ef8e.c72c74e1.js"},{"revision":"3bb36837e6a45f75360e992e0ff2c1c8","url":"assets/js/d3f7bfd6.db9d7f4f.js"},{"revision":"3e5f94fdbcdebffa83f45f90584e3dbf","url":"assets/js/d56ded4a.46d4c4cd.js"},{"revision":"2acb679fb18c3ec42c2cb47cb9a2c417","url":"assets/js/d8d851c4.1b4c7adb.js"},{"revision":"83073dcb1f1295eb6b34c5cd33f8caba","url":"assets/js/dd6e99a2.facf7223.js"},{"revision":"95dac62019e83ce7bdb944a0cf307d78","url":"assets/js/df7efcc1.f67cb43d.js"},{"revision":"e9dd59aa40bc65f5ab0af0ac5a0b65c9","url":"assets/js/dfc29094.35f8cc56.js"},{"revision":"0711401c5f69a2777285e7fa0a9998cf","url":"assets/js/e02ba15b.2ce03509.js"},{"revision":"f51ff60707654d380ded479c75a2fa80","url":"assets/js/e3a7aa50.a11a5066.js"},{"revision":"2d86ff23bc975fa4a149edc7805480b6","url":"assets/js/e5c54bdb.07846b2f.js"},{"revision":"a144fb643d230a47e5adf4b952e3bcfa","url":"assets/js/e77f4328.3f7068b4.js"},{"revision":"2ca158741fa15df38786e05009030c3c","url":"assets/js/e7e568e4.cebaa8b2.js"},{"revision":"b2982b18e7a9855a73847e8db9ffab8e","url":"assets/js/e9780dc4.e7acfff5.js"},{"revision":"1db289199c9040634a1b9caa830d97bb","url":"assets/js/ee02910b.0084bdb3.js"},{"revision":"352835ffa9cb893989a56d83ad27ff8f","url":"assets/js/f2e0d9eb.b2924274.js"},{"revision":"3c68906c703a6fe06c1167f7529dff8e","url":"assets/js/f36dee5a.508ab57d.js"},{"revision":"51d9b295fc96a607ee116d7b62256f52","url":"assets/js/f3a8b621.aeec68ca.js"},{"revision":"8c1220e56ddf71d00abb141d5f4ddb15","url":"assets/js/f740b2ca.a864d1f4.js"},{"revision":"ffceac3d80bb65862a68566cbe90d708","url":"assets/js/f7cef55a.17838fee.js"},{"revision":"3a8d44fff30584f07e8757d7a9872e89","url":"assets/js/f9806908.b2b5825d.js"},{"revision":"0386e4eb04832791e6b075cbbedfe0e1","url":"assets/js/fba67bfa.5036584f.js"},{"revision":"1b7c7687d0e744ecf3ef82930b445972","url":"assets/js/fbe53b78.d7ecff38.js"},{"revision":"eddb33a63cad7b430ad24c2b3bf4aa98","url":"assets/js/fc970c7f.57c4e39b.js"},{"revision":"b88d403670c086cac0cc5d0eeecd6055","url":"assets/js/main.869f6dc3.js"},{"revision":"fac2808022faa283ca26316306b347b2","url":"assets/js/runtime~main.23c96fdc.js"},{"revision":"914f6c7cc498dc7b1c58f4edae436269","url":"category/-middleware/index.html"},{"revision":"dbf622ac47ce1b2d3a5d930534228ada","url":"category/api/index.html"},{"revision":"04e4e994e7f2adcedfccbcd30d994a8c","url":"category/extra/index.html"},{"revision":"1f5b4255ae1074a45dab6050ef044d20","url":"category/guide/index.html"},{"revision":"b6e1edb92f0995eef46b84dc443d4bf4","url":"ctx/index.html"},{"revision":"ce67e51998de35db6953d15361d2900a","url":"extra/benchmarks/index.html"},{"revision":"af595b3c3f126603118dcdb869a4fe18","url":"extra/faq/index.html"},{"revision":"9512834c5586a0ec95cdfbb454e68d84","url":"guide/error-handling/index.html"},{"revision":"c27346b979dbf0a51f71c4503b27ebc5","url":"guide/faster-fiber/index.html"},{"revision":"79b1197d11009dabe8dd28319fc5fc27","url":"guide/grouping/index.html"},{"revision":"fd08b352d7afc1ee7bc697e940eeca31","url":"guide/hooks/index.html"},{"revision":"e1c932a6e3ac642dfdb9f092713635da","url":"guide/routing/index.html"},{"revision":"f1402aa25a16c4c24aa068542fdd7c32","url":"guide/templates/index.html"},{"revision":"048d491f9120b013842c3a5154a37db3","url":"guide/validation/index.html"},{"revision":"0a2616d5a96efaf933b23cb904f36dde","url":"index.html"},{"revision":"f42d1aef9f7789a8723990f4843b6f7a","url":"manifest.json"},{"revision":"583457f14a56f69cc1bb7235d54bf6be","url":"next/api/app/index.html"},{"revision":"79c5b598363979a1fb3ca7f7b776e06e","url":"next/api/client/index.html"},{"revision":"0f558c86e64fe1f8ee2c8fc85f35d390","url":"next/api/constants/index.html"},{"revision":"ea0e1e807a01f5fd5cc197171dae99ba","url":"next/api/ctx/index.html"},{"revision":"c71e47bf8290dd899381688ef29b949b","url":"next/api/fiber/index.html"},{"revision":"59faae99732e15b979bba319380cbe89","url":"next/api/middleware/basicauth/index.html"},{"revision":"3ec0884be026fa2b7e5b9f05c9b2e8ba","url":"next/api/middleware/cache/index.html"},{"revision":"15899374669c8aac2ded1dcc2557ff0a","url":"next/api/middleware/compress/index.html"},{"revision":"79e187471d9b636424978df527528675","url":"next/api/middleware/cors/index.html"},{"revision":"a4b730cfb7d1c7ac9ed9c1cc7d71e034","url":"next/api/middleware/csrf/index.html"},{"revision":"d42b0bcb136bbed14946f76694aba55b","url":"next/api/middleware/earlydata/index.html"},{"revision":"6595f2e5b145522fb6aafe6deb7f98dd","url":"next/api/middleware/encryptcookie/index.html"},{"revision":"583acc6aeea1c9ca140d6b4888ea6799","url":"next/api/middleware/envvar/index.html"},{"revision":"ad78fca73d0774183a7318558851a628","url":"next/api/middleware/etag/index.html"},{"revision":"2989d6f18f0eb3dfd2c9211e96adf3b2","url":"next/api/middleware/expvar/index.html"},{"revision":"54473b332edafa5158528efb75ebbef7","url":"next/api/middleware/favicon/index.html"},{"revision":"fe9f6ab825d977e7d8ba119b6ec1cf8f","url":"next/api/middleware/filesystem/index.html"},{"revision":"4bcce5551f2da92a08f6f96554d8efea","url":"next/api/middleware/idempotency/index.html"},{"revision":"9556de4644da51a485463180bc32bdb8","url":"next/api/middleware/limiter/index.html"},{"revision":"cceaa355efb9d95010188a174b0ea476","url":"next/api/middleware/logger/index.html"},{"revision":"9713523882b007e58e6bafa3fecc8705","url":"next/api/middleware/monitor/index.html"},{"revision":"1867b99d70751267641ccb5eda22ca0b","url":"next/api/middleware/pprof/index.html"},{"revision":"6caee331bc7247e17a3ff06251ba868f","url":"next/api/middleware/proxy/index.html"},{"revision":"0014c6973dd562e8e62ffcbf82d08e5a","url":"next/api/middleware/recover/index.html"},{"revision":"79148ceab0c134f1fdf5d13a1e899c95","url":"next/api/middleware/requestid/index.html"},{"revision":"7cbc3bb79ab107048f7303a24f86763c","url":"next/api/middleware/session/index.html"},{"revision":"d18c3dde14ca619911dff46403c03fe0","url":"next/api/middleware/skip/index.html"},{"revision":"8174fcb732e4ee4b379287c042bfabc9","url":"next/api/middleware/timeout/index.html"},{"revision":"00ea651b0c94933caf9b55e2c4006c2e","url":"next/category/-middleware/index.html"},{"revision":"96e3bed7ea6dbcccd8435935292e221f","url":"next/category/api/index.html"},{"revision":"186c790cb5af952ae7d2fec07f3d96d5","url":"next/category/extra/index.html"},{"revision":"d962d4c05b28de9757fce3ca3e93a5a7","url":"next/category/guide/index.html"},{"revision":"4195044fd92b42c8cee6411305f0620d","url":"next/extra/benchmarks/index.html"},{"revision":"6bf058db73537d583a35e74eb3b377de","url":"next/extra/faq/index.html"},{"revision":"ccfca293ea32021d78bd123ad1d21a6c","url":"next/guide/error-handling/index.html"},{"revision":"475d561f156a6c9a764d17b6c6f0a0c5","url":"next/guide/faster-fiber/index.html"},{"revision":"08f9dd719404910b629522dfd22ff865","url":"next/guide/grouping/index.html"},{"revision":"148fc58a9bdf7b84985808c27f86b232","url":"next/guide/hooks/index.html"},{"revision":"2eacbaedd1f22dd139b245eb7988008e","url":"next/guide/routing/index.html"},{"revision":"85afae7c4afc6f60550a6abe47f8e161","url":"next/guide/templates/index.html"},{"revision":"2e5ded3a555bb2ac10e1563d26984c90","url":"next/guide/validation/index.html"},{"revision":"b2877a02fc332861b9a930b6a9936bd1","url":"next/index.html"},{"revision":"2b073930e64f0c01f24149fa01d1ca7c","url":"next/partials/routing/route-handlers/index.html"},{"revision":"982dfa86be8c6b02e7ddcdb9bc998dd3","url":"next/search-index.json"},{"revision":"7832b28971408100603316047960219d","url":"partials/routing/route-handlers/index.html"},{"revision":"356e031ffc88212f8de1807330821393","url":"routing/index.html"},{"revision":"28632562e891b7a87a17433f4eda487d","url":"search-index.json"},{"revision":"c998d92e7802d99eb578e6498d4d3c01","url":"search/index.html"},{"revision":"8084f2f83a2f477735ed11e2bf0e8213","url":"v/1.x/api/app/index.html"},{"revision":"08b749d0b0d95853310eb8d8cb6106d8","url":"v/1.x/api/ctx/index.html"},{"revision":"b785b5746370eebb99f2ee0869bd7c1a","url":"v/1.x/api/middleware/index.html"},{"revision":"ea032e7aa0080b3a208b1f36dd4b3e42","url":"v/1.x/category/api/index.html"},{"revision":"05f4a343184e6860b0ff5ee3d300a985","url":"v/1.x/category/guide/index.html"},{"revision":"43020c9060b711302b75140744628b1b","url":"v/1.x/category/misc/index.html"},{"revision":"6ed7cc0b075f329589b4401d334837af","url":"v/1.x/guide/error-handling/index.html"},{"revision":"36bb8767aaf25e55f7243dfbce1f06d1","url":"v/1.x/guide/grouping/index.html"},{"revision":"270595eab09ebe6d8ea33a90976c9797","url":"v/1.x/guide/routing/index.html"},{"revision":"46f9f665213c2a17baa88d4fb42bad58","url":"v/1.x/guide/templates/index.html"},{"revision":"a87db992f4d13bf4aa792129f43a42d9","url":"v/1.x/guide/validating/index.html"},{"revision":"4d5bf161ff11ab65805a05e165db85c0","url":"v/1.x/index.html"},{"revision":"060cd4ea1beb6b3a8224a6e8b6692d10","url":"v/1.x/misc/benchmarks/index.html"},{"revision":"27fe56b7b2ab21f8d3e02c0e09958cef","url":"v/1.x/misc/faq/index.html"},{"revision":"1c654f684c2acec5bbe61360bfa6a887","url":"v1.x/api/app/index.html"},{"revision":"7c222b0b6cb02346de9b6bb5c3cf9b55","url":"v1.x/api/ctx/index.html"},{"revision":"388fcbaffd6677d656b3aeae8458df21","url":"v1.x/api/middleware/index.html"},{"revision":"58a011ad68a70d166f20759e752a6adf","url":"v1.x/category/api/index.html"},{"revision":"0f21b837e141803b842b0715f51d7249","url":"v1.x/category/guide/index.html"},{"revision":"c2b5a44eb0c002fb195345219042d456","url":"v1.x/category/misc/index.html"},{"revision":"1de37bb8bca5259c0d1c3f4ba9f7f19d","url":"v1.x/guide/error-handling/index.html"},{"revision":"ae841e8777c335c02c0b55e772ff99d6","url":"v1.x/guide/grouping/index.html"},{"revision":"a5fbf6d5ee944b64929f6a08e8d44fa7","url":"v1.x/guide/routing/index.html"},{"revision":"f4ed1eb3ed69ef2e9ed751bc2617cc80","url":"v1.x/guide/templates/index.html"},{"revision":"114662a08e879e8bbcc8fd623d5378c5","url":"v1.x/guide/validating/index.html"},{"revision":"143cff365a3db9a08b2f7acea0122e5a","url":"v1.x/index.html"},{"revision":"f5d7759bb603e410656344eee99ca3b9","url":"v1.x/misc/benchmarks/index.html"},{"revision":"70c4bd0207e2ed2ebc09d80b0ca2b670","url":"v1.x/misc/faq/index.html"},{"revision":"265fbd2648cf440b1b3f6c57d3a90a94","url":"v1.x/search-index.json"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"assets/images/benchmark_alloc-dec96faa96e07bcec84f40a4dfc8d187.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"assets/images/benchmark_latency-b67a470cf1b261c3092b80cbf42ef16b.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"assets/images/benchmark-18e23fcf42afc7f5e12ea23aceb27885.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"assets/images/benchmark-pipeline-b49cbb1db36293acdfb0e6c96d844e1a.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"assets/images/concurrency_alloc-6f2d485576803f7de2fe0a1deca21a09.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"assets/images/concurrency_latency-5a223848a8bee8df21cc02451f0db2b6.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"assets/images/concurrency-1307e1d23c01a561a4b2a0f5bdd7e1bc.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"assets/images/concurrency-pipeline-b0d3c211d9c7cb5474fd191223a41241.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"assets/images/data_updates_express-2f55d1b0975ec391d29d823b48faf617.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"assets/images/data_updates-3be85c418d6971091854c5086af9ed10.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"assets/images/graph-afbd400b1c3e1c6f137dae3cfc1890ce.svg"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"assets/images/json_express-aa631b2de86808970aa4bb7c9c9d3edf.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"assets/images/json-62868f61b34e3790f3a8b3b52b1a3a3b.png"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"assets/images/multiple_queries_express-ec4dc8013e85dc2a2fa4f5eeb55ce8dd.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"assets/images/multiple_queries-2c2e81674208b90b9aeb1cb791a3f0dc.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"assets/images/plaintext_express-ef6522843412bb5b14b3c6b6a4f032de.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"assets/images/plaintext-e25d187f782d18fdd35b84e3d7c625eb.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"assets/images/single_query_express-d8e41422b4f5c0a9496272e4a66a97c4.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"assets/images/single_query-4f7782d3c3ff91e92ac27e382b09f6ac.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"assets/images/support-discord-baf5f38231088813dfbc3ccdc6966634.png"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"img/benchmark_alloc.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"img/benchmark_latency.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"img/benchmark-pipeline.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"img/benchmark.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"img/concurrency_alloc.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"img/concurrency_latency.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"img/concurrency-pipeline.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"img/concurrency.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"img/data_updates_express.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"img/data_updates.png"},{"revision":"3b4420315b7baefee56d433e4c78f268","url":"img/favicon.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"img/graph.svg"},{"revision":"354ea4a4bcaad920949e253d33683869","url":"img/icons/icon-192x192.png"},{"revision":"4039790fa05a5dc7e9259485b4324433","url":"img/icons/icon-256x256.png"},{"revision":"93b99bdaaad38831b46a296dfeab4863","url":"img/icons/icon-384x384.png"},{"revision":"096c82692efe3ec986ab2b4fc5d60aea","url":"img/icons/icon-512x512.png"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"img/json_express.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"img/json.png"},{"revision":"171b53337ba05d4e62332e230f3c212b","url":"img/logo-dark.svg"},{"revision":"e2c2dc9b6b5f44183247f7c48d65ccef","url":"img/logo.svg"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"img/multiple_queries_express.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"img/multiple_queries.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"img/plaintext_express.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"img/plaintext.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"img/single_query_express.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"img/single_query.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"img/support-discord.png"}],s=new R({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();