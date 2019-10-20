/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/favicon.ico",
    "revision": "9ed302ec446b361c854dab3da30d756d"
  },
  {
    "url": "images/icon-128x128.png",
    "revision": "601e0c8b9b91defea4834da229652a18"
  },
  {
    "url": "images/icon-144x144.png",
    "revision": "b68c2201b86eb60cb02b076040774fdb"
  },
  {
    "url": "images/icon-152x152.png",
    "revision": "3616794f22c5877e40df36b545d393e5"
  },
  {
    "url": "images/icon-192x192.png",
    "revision": "691d47c4b70399b67f934946d81de445"
  },
  {
    "url": "images/icon-384x384.png",
    "revision": "547789888a3791d4b5905ea567a9e0c9"
  },
  {
    "url": "images/icon-512x512.png",
    "revision": "747eaf0765c70131a69fc315301d432a"
  },
  {
    "url": "images/icon-72x72.png",
    "revision": "09741aac7b11ddb2a4f5eae3fa805ff9"
  },
  {
    "url": "images/icon-96x96.png",
    "revision": "30d4938bb087be62462dfeeb083ae7dd"
  },
  {
    "url": "index.html",
    "revision": "8564dde0b017270209f5acbf8b5e4ebc"
  },
  {
    "url": "manifest.json",
    "revision": "b0546b7a9a84eabcedb7ad78459bdedd"
  },
  {
    "url": "sw.html",
    "revision": "8dfd9f9e1c6a310184cbb3f971494776"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn.ampproject.org/, new workbox.strategies.StaleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
