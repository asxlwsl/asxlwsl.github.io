/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["H:/myblog2/public/2019/11/25/first/index.html","c828991ca64dffd913dab4cf5fa218d3"],["H:/myblog2/public/2019/11/25/second/index.html","396690478d1ca4387c69315f12ce13d9"],["H:/myblog2/public/2019/11/28/third/index.html","b8bf6c1d389fa841cda166751798d8ba"],["H:/myblog2/public/2019/11/29/four/index.html","f7b6296bfd485975cc4a855a5c8d4f22"],["H:/myblog2/public/2019/12/01/five/index.html","3e02d9bd9db3536018e092f14342ddd9"],["H:/myblog2/public/2020/02/12/six/index.html","dd04c9020d4781a68a6bc6f70784103e"],["H:/myblog2/public/2020/02/14/seven/index.html","f6800149250fe19f4de5a37e3bc1c114"],["H:/myblog2/public/about/index.html","0211762a43869bf77fe83db5c3169035"],["H:/myblog2/public/archives/2019/11/index.html","9cb4765bf7c8e6ffb7d46c588d61598b"],["H:/myblog2/public/archives/2019/12/index.html","3bf9ab016501d2ee66771468d90d0ab2"],["H:/myblog2/public/archives/2019/index.html","03651abe3e062463116aa5bf36be6558"],["H:/myblog2/public/archives/2020/02/index.html","b1cdc610a32b6fc2834b6c039f796da3"],["H:/myblog2/public/archives/2020/index.html","d327d6b7bc9516cda41cda06ecc3e9c9"],["H:/myblog2/public/archives/index.html","4228ea0a0564327c4add325eb04e390d"],["H:/myblog2/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["H:/myblog2/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["H:/myblog2/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["H:/myblog2/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["H:/myblog2/public/categories/Android学习笔记/index.html","54a3d1f99889a5081affc3dc614a1d6f"],["H:/myblog2/public/categories/JAVA图形化编程/index.html","bc1b803aac720d0eb42ae44bea006da7"],["H:/myblog2/public/categories/MarkDown语法/index.html","157aa444f9d3fce93413a9613c708adc"],["H:/myblog2/public/categories/MySQL学习笔记/index.html","984c46fecb7e34493a06a86d925874cc"],["H:/myblog2/public/categories/Unity/index.html","3bf68d1e099bb6a9d89522cfe985c602"],["H:/myblog2/public/categories/index.html","849409d7e9a6690f7d18e201b70091d7"],["H:/myblog2/public/categories/前端学习笔记/index.html","e4f210a3c9a027158643f3ef124d1f58"],["H:/myblog2/public/css/index.css","9372a3094141580578b2d9288669f8fb"],["H:/myblog2/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["H:/myblog2/public/gallery/index.html","7325eef0435ebcf316f57d01776189e9"],["H:/myblog2/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["H:/myblog2/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["H:/myblog2/public/img/bg1.jpg","d4a01e95d17212a9b0799ccf78ee6676"],["H:/myblog2/public/img/bg2.jpg","5ce2621fd4312290dcc24108ea0fe3d7"],["H:/myblog2/public/img/bg3.jpg","f40f483f98817d91a0e347f490fd5a94"],["H:/myblog2/public/img/bg4.jpg","2888ff0a50e66e64bd4e2d957337611d"],["H:/myblog2/public/img/bg5.jpg","bb0849767ff3713d85cad7dfa623bee6"],["H:/myblog2/public/img/bg6.jpg","8bf7225e8f2ab4d4ed9177fec233dcf9"],["H:/myblog2/public/img/bg7.jpg","1f3c5e501b090b6ccdcc08c73f22a57d"],["H:/myblog2/public/img/head.png","81a3acdb9b25111fe2ce5396891fba0e"],["H:/myblog2/public/img/qr.jpg","d383b53588f34aca05a981bedb045335"],["H:/myblog2/public/index.html","f54a281c213eaa1e93ba9c52e38e97dc"],["H:/myblog2/public/interations/qq_tel.html","947f402e763feac091bdb9e703eaf323"],["H:/myblog2/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["H:/myblog2/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["H:/myblog2/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["H:/myblog2/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["H:/myblog2/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["H:/myblog2/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["H:/myblog2/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["H:/myblog2/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["H:/myblog2/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["H:/myblog2/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["H:/myblog2/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["H:/myblog2/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["H:/myblog2/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["H:/myblog2/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["H:/myblog2/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["H:/myblog2/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["H:/myblog2/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["H:/myblog2/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["H:/myblog2/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["H:/myblog2/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["H:/myblog2/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["H:/myblog2/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["H:/myblog2/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["H:/myblog2/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["H:/myblog2/public/live2dw/assets/moc/miku.2048/texture_00.png","f69191e3aa1aa64d66bef43d38bb45e8"],["H:/myblog2/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["H:/myblog2/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["H:/myblog2/public/slides/index.html","a0b1b2d19b8f996de3b6827ecbc251dd"],["H:/myblog2/public/tags/Android/index.html","fdff737742cecbe5a137ba8eaea1aa31"],["H:/myblog2/public/tags/GUI/index.html","cb2557f34070e190cf52600cade160fa"],["H:/myblog2/public/tags/Java/index.html","d1d9710608ed2ed4c3c853d9c058ec52"],["H:/myblog2/public/tags/JavaScrpit/index.html","e5ba1c7b941efeab43cf993000615df1"],["H:/myblog2/public/tags/MarkDown/index.html","222a68f8d95180d7984e9036bdc75186"],["H:/myblog2/public/tags/MySQL/index.html","07c943995031c4a10284fc21c88ae547"],["H:/myblog2/public/tags/Unity/index.html","ab73b109840e09ebd6b69a75a575579f"],["H:/myblog2/public/tags/View/index.html","020cb37639c00fa1e402d97230345978"],["H:/myblog2/public/tags/index.html","dc9e4aa9f008b80fecd5b699485e65fe"],["H:/myblog2/public/tags/学习/index.html","d03200a7b295d06db86ecc0b34671220"],["H:/myblog2/public/tags/数据库/index.html","38af9c25c40c7c8a54e94c77f0a92999"],["H:/myblog2/public/tags/游戏引擎/index.html","578ceabbcfce320704dc5c64b23d2b3f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







