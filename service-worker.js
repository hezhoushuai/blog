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
    "url": "404.html",
    "revision": "63de4b0d470f46ae8444610a10668e34"
  },
  {
    "url": "assets/css/0.styles.f60b988a.css",
    "revision": "881d98f4d21d625da11f154425df379a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c63c4a93.js",
    "revision": "138fd4109832bae8ff7166b509debf84"
  },
  {
    "url": "assets/js/11.10dbec4f.js",
    "revision": "0bcdc60a2d266a1fb18733325538cea6"
  },
  {
    "url": "assets/js/12.d74a862e.js",
    "revision": "568f07cc519352b6648a2e850e437074"
  },
  {
    "url": "assets/js/13.7c5dac6e.js",
    "revision": "94aae45393e58e1b17738fd3ba88d3e3"
  },
  {
    "url": "assets/js/14.f14e3dee.js",
    "revision": "a5bcbed265a7a136ebd78e06eb43d8dc"
  },
  {
    "url": "assets/js/2.53d6c154.js",
    "revision": "cec409affb285b3d695b9aac615c6fac"
  },
  {
    "url": "assets/js/3.d1649dea.js",
    "revision": "80c9c6c28e3fc739299b88ce00b2d1dc"
  },
  {
    "url": "assets/js/4.b538f53f.js",
    "revision": "3ecc9d859139b8b4450f577815b43a46"
  },
  {
    "url": "assets/js/5.8d8a1740.js",
    "revision": "6f3c6ec6c8f76f8fd045fd36f62093fb"
  },
  {
    "url": "assets/js/6.ff535cbe.js",
    "revision": "e175ec2baf82ae0213fa475ca50bc1d9"
  },
  {
    "url": "assets/js/7.d2ffa3d3.js",
    "revision": "ada52ab737f8b29ccbaa42bf2c741151"
  },
  {
    "url": "assets/js/8.75cffff1.js",
    "revision": "0d216c80487294617f1c54754a5a7df1"
  },
  {
    "url": "assets/js/9.9c1724c4.js",
    "revision": "a6a4e4d01b395ea578e8cdd9095db75c"
  },
  {
    "url": "assets/js/app.fe878997.js",
    "revision": "870968f6b161666fe77b7c3ee8a5fdcd"
  },
  {
    "url": "index.html",
    "revision": "9c3c65d3a5fb565af9bd76f959dca18d"
  },
  {
    "url": "node/index.html",
    "revision": "6899a611f989c670268f69779be58270"
  },
  {
    "url": "node/path.html",
    "revision": "649110a4bb2ad035ac45f6896d346108"
  },
  {
    "url": "node/stream.html",
    "revision": "299c4cd0006607c427ce86fe6a5ca981"
  },
  {
    "url": "node/what.html",
    "revision": "0ddad20564adddfe29d6807bc951509b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
