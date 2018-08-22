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
    "revision": "3c1445a2b09fb970d77671ab7c8589a8"
  },
  {
    "url": "Agent/index.html",
    "revision": "00eea617a6a07c123c40122b7a5994c3"
  },
  {
    "url": "Api/index.html",
    "revision": "0cb14637ef6ce6b992af24b385d0d390"
  },
  {
    "url": "assets/css/0.styles.ca81c8eb.css",
    "revision": "26079042b395827fed51e0a8cf03679f"
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
    "url": "assets/js/19.72e7a8df.js",
    "revision": "f9d85909e72249799a96ccdc6e1313f5"
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
    "url": "assets/js/app.137aedef.js",
    "revision": "f815fc3b2b028d5e4a554489652f1067"
  },
  {
    "url": "Cube/index.html",
    "revision": "c30ac0908703d610678c7577ff31a79b"
  },
  {
    "url": "CubeCore/index.html",
    "revision": "811d3f0049f54ef904d4069d3d1a4a28"
  },
  {
    "url": "CubeCore/中级教程/index.html",
    "revision": "4309c0c5ee3637b493dfb3bdf3a977f1"
  },
  {
    "url": "CubeCore/中级教程/自定义高级查询.html",
    "revision": "f8a1e7896bd9fe80ee25c9cd86cb1cff"
  },
  {
    "url": "CubeCore/入门教程/index.html",
    "revision": "78ac1e8c66cc99e774906e1eedba9972"
  },
  {
    "url": "CubeCore/入门教程/运行.html",
    "revision": "424cbd23a9ba8d7198d0a6a7319fe862"
  },
  {
    "url": "CubeCore/魔方core.html",
    "revision": "3c2c31ec7181e1d7367f92e3b6db816e"
  },
  {
    "url": "DotNetCore/index.html",
    "revision": "5450f0eeeb8f3960a89954a1389538f6"
  },
  {
    "url": "DotNetCore/netcore_centos.html",
    "revision": "f794ce3b0a981e8d32a1ca4bc82df645"
  },
  {
    "url": "icons/logo-256x256.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "index.html",
    "revision": "b0e852df0b0c0073f64b49e281298e08"
  },
  {
    "url": "logo.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "Mobile/index.html",
    "revision": "61ddeaf3166db59620ed3896eb926683"
  },
  {
    "url": "Net/index.html",
    "revision": "88dbbaf9fb86ce8fe4f8c9f52cde3000"
  },
  {
    "url": "Net/新生命网络库客户端用法.html",
    "revision": "a76fd889adec13003e9357d898b7f92e"
  },
  {
    "url": "Net/新生命网络库比较典型的简单用法.html",
    "revision": "108b242c69ca67a20c6f113b1963f2a2"
  },
  {
    "url": "Reflect/index.html",
    "revision": "7d81256cbf46c371f70ba30114a46119"
  },
  {
    "url": "Security/index.html",
    "revision": "9f161a268b5ab5e851fd12aefdc64178"
  },
  {
    "url": "Serialization/index.html",
    "revision": "038f0c1e596ea9a4e4a1ba92dbf11c24"
  },
  {
    "url": "Thread/index.html",
    "revision": "bb36565909dc29a9e408e088126677d8"
  },
  {
    "url": "XCode/EntityCache.html",
    "revision": "6fc6b6abe896714560287f8f81417d13"
  },
  {
    "url": "XCode/ExtendProperty.html",
    "revision": "339de83bb3cd0e1d283a885073a22429"
  },
  {
    "url": "XCode/Get-Start.html",
    "revision": "2185899554b10c0af2c6ba35f08e99e9"
  },
  {
    "url": "XCode/index.html",
    "revision": "2b4b14d36ea3152427dad47ed5693d2b"
  },
  {
    "url": "XCode/Migration.html",
    "revision": "84cd63d1ecc11b25b270712bd1004f13"
  },
  {
    "url": "XCode/Model.html",
    "revision": "d4fcdde9ffa8cfbce40f84e4c67b7bf8"
  },
  {
    "url": "XCode/Normal.html",
    "revision": "e52341353872b08e5e4e204642bab0c9"
  },
  {
    "url": "XCode/Search.html",
    "revision": "6c0d548ae4eb896543e7b302858e10bb"
  },
  {
    "url": "XCode/SingleCache.html",
    "revision": "19fa89bfb41a5f283de9c75d06c3ddfa"
  },
  {
    "url": "XCoder/index.html",
    "revision": "77cf7b55760e3913e469c2155733c4ef"
  },
  {
    "url": "XScript/index.html",
    "revision": "75ca2fc59239aff2520be6227b739deb"
  },
  {
    "url": "XTemplate/index.html",
    "revision": "1e57d992b3a045686b2b32733ff01060"
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
