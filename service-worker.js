"use strict";var precacheConfig=[["/recipesapp.com/index.html","c1e0ff09c2504fd8fe12641454dc0e3c"],["/recipesapp.com/static/css/main.3a99bc91.css","88e60d81ceb2a7554a687888c4a5db39"],["/recipesapp.com/static/js/main.2df3248a.js","509165c779c8f517f1bfbe3a67079077"],["/recipesapp.com/static/media/appleCake.853f54c5.jpg","853f54c56ae80e76d656b9d7b4243a05"],["/recipesapp.com/static/media/appleJuice.59af0196.jpg","59af019612ff8b501118f6c9aca7d31a"],["/recipesapp.com/static/media/burger.7a91fa32.jpeg","7a91fa32664ec31ec47d7a26baef2317"],["/recipesapp.com/static/media/burrito.cc12bdb6.jpg","cc12bdb6340bf7e218ff3bbfe3994aef"],["/recipesapp.com/static/media/fish.4055e321.jpg","4055e32108c0478f899f9d9b1d8614f0"],["/recipesapp.com/static/media/grillMeat.6321ee7e.jpg","6321ee7e5064f5c2e67330e54c98f84e"],["/recipesapp.com/static/media/iceCream.5e223e5e.jpg","5e223e5e90bcaae559151f810978d8e5"],["/recipesapp.com/static/media/meatSalad.1b1ca1ee.jpg","1b1ca1eeb45100d5301c2d69f02ce954"],["/recipesapp.com/static/media/salad.95b34816.jpg","95b348168ff4d85022bcce42935ac7c7"],["/recipesapp.com/static/media/salmon.f87031f7.jpg","f87031f7143de24665bb7c78964492dc"],["/recipesapp.com/static/media/shake.811257ef.jpg","811257efccba0946000589cfa15ddf62"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var c="/recipesapp.com/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});