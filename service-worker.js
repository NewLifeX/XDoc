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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1a84f47b978e9b3fb8263ffb543d1931"
  },
  {
    "url": "Agent/index.html",
    "revision": "2dc6d3dfb44697cede4aaea58ab628cd"
  },
  {
    "url": "Api/index.html",
    "revision": "15abf1e4f462fd9a09bab47019b0b529"
  },
  {
    "url": "assets/css/0.styles.5bfd6125.css",
    "revision": "cce1cedce2501badac823b1d23aa886c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0520b8aa.js",
    "revision": "564a655bab1a35d9d052b021e477c2fd"
  },
  {
    "url": "assets/js/11.dc6d82d4.js",
    "revision": "0397b333fa0f7208eedcec891af9fdc8"
  },
  {
    "url": "assets/js/12.552f7804.js",
    "revision": "525bd8f7aca797c5e9aa0b39b59aa15e"
  },
  {
    "url": "assets/js/13.cbd337b4.js",
    "revision": "48c735a9448d371ddde1b6fd55012d38"
  },
  {
    "url": "assets/js/14.773683b4.js",
    "revision": "2ac7c79bef66844e6d3fafd47b8a2061"
  },
  {
    "url": "assets/js/15.2199b3b5.js",
    "revision": "2a9974f49770f57c230e713a920b7f96"
  },
  {
    "url": "assets/js/16.3d4cd3dd.js",
    "revision": "659acb6c51374b98f04dc551c4c6c824"
  },
  {
    "url": "assets/js/17.2b82682a.js",
    "revision": "8cbb19ae7b2e6bb0a3e3bec59ac5260a"
  },
  {
    "url": "assets/js/18.d661a270.js",
    "revision": "14480c1a84ebdaebf1a0c7585fbbf656"
  },
  {
    "url": "assets/js/19.1a412e29.js",
    "revision": "139419415a57da8b30b42abe3a9c6f0b"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.25181d57.js",
    "revision": "6eec78bfb5c18083ace7750b5dfb9b5c"
  },
  {
    "url": "assets/js/21.823f0cd6.js",
    "revision": "e6f609b955f5aa4cbb2f5e89d895159d"
  },
  {
    "url": "assets/js/22.ab2e7d9a.js",
    "revision": "96a8c9a873d29eb655dcc1b262cd25b5"
  },
  {
    "url": "assets/js/23.9d68f6f2.js",
    "revision": "8b3d894fca1f9a19ba214362c75426b8"
  },
  {
    "url": "assets/js/24.dee832e5.js",
    "revision": "8b5b6a86d29e44b7619ba3911e332c6e"
  },
  {
    "url": "assets/js/25.954bb1ce.js",
    "revision": "650fc76229df0296d8bf5177c82efb32"
  },
  {
    "url": "assets/js/26.779b2653.js",
    "revision": "1b0d521559d7576a3e989cbf63274f33"
  },
  {
    "url": "assets/js/27.2ab550d5.js",
    "revision": "867908812384269935e338035c50b04a"
  },
  {
    "url": "assets/js/28.dbccf6d0.js",
    "revision": "3510edaea742f84893a933f3d327bea0"
  },
  {
    "url": "assets/js/29.ca80e734.js",
    "revision": "48846206a1410efef09d6bf2910be587"
  },
  {
    "url": "assets/js/3.db486be8.js",
    "revision": "5a8540a7eb53d54bd7733f416854373a"
  },
  {
    "url": "assets/js/30.64433ee7.js",
    "revision": "902a32b661a7f502be5f490e8f7a9fd1"
  },
  {
    "url": "assets/js/31.7893e15c.js",
    "revision": "379d9c212d74a951ffbd4dc1d604df69"
  },
  {
    "url": "assets/js/32.1c72c157.js",
    "revision": "4e692ffb348a1c4e45be183309532e44"
  },
  {
    "url": "assets/js/33.7e5c39ea.js",
    "revision": "a6908999f9b10adff28441c7cc17e1f5"
  },
  {
    "url": "assets/js/34.80a22000.js",
    "revision": "d51607162901ff4dd529c2fef3990616"
  },
  {
    "url": "assets/js/35.6ad22b09.js",
    "revision": "24a4cb5a638f1b7d1403ef2f0feaf550"
  },
  {
    "url": "assets/js/4.c467984e.js",
    "revision": "7636211925c61b24682bc04cc3942f5d"
  },
  {
    "url": "assets/js/5.ea014a72.js",
    "revision": "5e53e6c34c84659ce45a9337a448ca86"
  },
  {
    "url": "assets/js/6.f309871c.js",
    "revision": "30fbcf8ab821721887f4053c24ad58c9"
  },
  {
    "url": "assets/js/7.c3c77c99.js",
    "revision": "7c558ee298db3fc6718d025bba41b5ba"
  },
  {
    "url": "assets/js/8.d46f66f3.js",
    "revision": "02b5792a9fdcfc17e273c309b2750921"
  },
  {
    "url": "assets/js/9.0d8189ba.js",
    "revision": "eaf896ce4ab59b6198afac176630bcb2"
  },
  {
    "url": "assets/js/app.bb0468f7.js",
    "revision": "db07e74647d1747f8149e4cfd03c18df"
  },
  {
    "url": "Cube/index.html",
    "revision": "7941d018b09b23336d84da5ab6126f52"
  },
  {
    "url": "CubeCore/index.html",
    "revision": "4b4bdc4d1313c50333c31f8921287f68"
  },
  {
    "url": "CubeCore/中级教程/index.html",
    "revision": "080e2eeecbcf1c13b656d44c471bc84c"
  },
  {
    "url": "CubeCore/中级教程/自定义高级查询.html",
    "revision": "d45e563c8129bd5a6b67cd5875d8222d"
  },
  {
    "url": "CubeCore/入门教程/index.html",
    "revision": "6a706c6fae2485493dfe84e651b0b4ed"
  },
  {
    "url": "CubeCore/入门教程/运行.html",
    "revision": "ff06c73dd75f6fc5b06abb78e637c0fe"
  },
  {
    "url": "CubeCore/魔方core.html",
    "revision": "5005e2f09d5b363dabf49342c4adece4"
  },
  {
    "url": "DotNetCore/index.html",
    "revision": "4615c1c99b0c6898097eb5b73468ca35"
  },
  {
    "url": "DotNetCore/netcore_centos.html",
    "revision": "b661b8f621beab4ed76b1ab2ce93ea29"
  },
  {
    "url": "icons/logo-256x256.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "index.html",
    "revision": "6a9a27796894671915f1b908d732d4b1"
  },
  {
    "url": "logo.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "Mobile/index.html",
    "revision": "0f72114684b9cfdb84eefdf6af01c320"
  },
  {
    "url": "Net/index.html",
    "revision": "6eaadd0371518c0169f9ca9241643861"
  },
  {
    "url": "Net/新生命网络库客户端用法.html",
    "revision": "b4b303d30d6807ea27afd3b8b4ff5bd2"
  },
  {
    "url": "Net/新生命网络库比较典型的简单用法.html",
    "revision": "c469df3b041dd513bf8513a454d78aba"
  },
  {
    "url": "Reflect/index.html",
    "revision": "4c811a101ef67aec0da64623fb5c000a"
  },
  {
    "url": "Security/index.html",
    "revision": "4f6ba130f99610cea2adc1bf10a68e02"
  },
  {
    "url": "Serialization/index.html",
    "revision": "9d5ad6cb654f9d854771302cf3d41531"
  },
  {
    "url": "Thread/index.html",
    "revision": "803026921e403818e99983703e7e20ba"
  },
  {
    "url": "XCode/EntityCache.html",
    "revision": "de9e25db209dc81deece1a8c69fa2820"
  },
  {
    "url": "XCode/ExtendProperty.html",
    "revision": "1ca072b90343ae0aeb332761d33ef9cb"
  },
  {
    "url": "XCode/Get-Start.html",
    "revision": "139492f6a10f7c235454812ff119f117"
  },
  {
    "url": "XCode/index.html",
    "revision": "6513862390bd015fb2ee7fb2c4fd3a27"
  },
  {
    "url": "XCode/Migration.html",
    "revision": "581fda956a228a1a14df9b61eca6cadd"
  },
  {
    "url": "XCode/Model.html",
    "revision": "7bad626fa14196dabadc4e0cd65d8e68"
  },
  {
    "url": "XCode/Normal.html",
    "revision": "4393192c5aadff4172b88c969ea53bb3"
  },
  {
    "url": "XCode/Search.html",
    "revision": "635ed229e2ee624e34cb4bb29553ca87"
  },
  {
    "url": "XCode/SingleCache.html",
    "revision": "c92496a2decf1027b884af92ac430b17"
  },
  {
    "url": "XCoder/index.html",
    "revision": "258699e068da3d7fc9ad393a741c624a"
  },
  {
    "url": "XDoc/icons/logo-256x256.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "XDoc/logo.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "XScript/index.html",
    "revision": "882d0881f1f74d953447a5dd546bbf2d"
  },
  {
    "url": "XTemplate/index.html",
    "revision": "67aed363883ec45dc9d8e36816fa7c64"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
