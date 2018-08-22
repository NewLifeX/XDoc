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
    "revision": "d5380c1f7305426cbea60aeb0783a79a"
  },
  {
    "url": "Agent/index.html",
    "revision": "4c8829d45a8b1130c1ddc7d149bb60b7"
  },
  {
    "url": "Api/index.html",
    "revision": "2306f6386052e827d105e417fd10cab4"
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
    "url": "assets/js/app.94b9aa14.js",
    "revision": "0941c39b20c62d2d7a4eaa2ebd1386b5"
  },
  {
    "url": "Cube/index.html",
    "revision": "0328fa87ca0d5a1ff90939b682732672"
  },
  {
    "url": "CubeCore/index.html",
    "revision": "f0cd12ce88dc6c4950e35d6536089ee9"
  },
  {
    "url": "CubeCore/中级教程/index.html",
    "revision": "f11c7bf81345a71944b1bbf6031d7af2"
  },
  {
    "url": "CubeCore/中级教程/自定义高级查询.html",
    "revision": "212fd9f889f8ee9af4a272fc6bc5b895"
  },
  {
    "url": "CubeCore/入门教程/index.html",
    "revision": "1a4e0826d8f21bd216fd00f770bd99a2"
  },
  {
    "url": "CubeCore/入门教程/运行.html",
    "revision": "9db4a6c205473241242aa31abc963cf1"
  },
  {
    "url": "CubeCore/魔方core.html",
    "revision": "4cdf1a362d0d5ff9ab0e81047aef0135"
  },
  {
    "url": "DotNetCore/index.html",
    "revision": "99188a9640da2910a3eec41b0baaab38"
  },
  {
    "url": "DotNetCore/netcore_centos.html",
    "revision": "efad83736a19c714e26fc40cec2f370d"
  },
  {
    "url": "icons/logo-256x256.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "index.html",
    "revision": "844136ae8135006cd55d8caa29f669c4"
  },
  {
    "url": "logo.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "Mobile/index.html",
    "revision": "b97e53306af7c3a8a7d5b55ef5d611b0"
  },
  {
    "url": "Net/index.html",
    "revision": "dea540107ffa2580c789b13e33dd6b5d"
  },
  {
    "url": "Net/新生命网络库客户端用法.html",
    "revision": "b566b35304b168cbb7dc113f2aed3810"
  },
  {
    "url": "Net/新生命网络库比较典型的简单用法.html",
    "revision": "b1186cf934aeb3504513bd4cd1e6dfb7"
  },
  {
    "url": "Reflect/index.html",
    "revision": "59e65593e1e4de3d8a67a741b5a92fa0"
  },
  {
    "url": "Security/index.html",
    "revision": "32718ded9fc3d8c89c0e08b0b1d05872"
  },
  {
    "url": "Serialization/index.html",
    "revision": "21c83621b9a9b838d64aedd235532f2c"
  },
  {
    "url": "Thread/index.html",
    "revision": "1a9513c7842ee7a7a8f3b46c69c4c1b5"
  },
  {
    "url": "XCode/EntityCache.html",
    "revision": "03e8210776d7496a6e2fc6f95c55e283"
  },
  {
    "url": "XCode/ExtendProperty.html",
    "revision": "b74325e275232dc0a21e2ba1fb39f936"
  },
  {
    "url": "XCode/Get-Start.html",
    "revision": "1d0e2bdfaf49d710c34eb6e620ff125e"
  },
  {
    "url": "XCode/index.html",
    "revision": "bb9578036d5de84ad0c9f4e8017611c2"
  },
  {
    "url": "XCode/Migration.html",
    "revision": "c5bb9127ec74e76648e166be325e5c14"
  },
  {
    "url": "XCode/Model.html",
    "revision": "bba2d30e7234378385abf252ea3cf2e7"
  },
  {
    "url": "XCode/Normal.html",
    "revision": "7be12d2eb3b7ae074c08b63af09d9b45"
  },
  {
    "url": "XCode/Search.html",
    "revision": "e283d6f0ca08a4a7fdfe4ee2541cd8f4"
  },
  {
    "url": "XCode/SingleCache.html",
    "revision": "73d7cf240dde4df18b4b8634242da8de"
  },
  {
    "url": "XCoder/index.html",
    "revision": "58efe3d1a7d3ff7b426c8070e3745981"
  },
  {
    "url": "XScript/index.html",
    "revision": "c9ecb0abb6812c9182e2c743194cb243"
  },
  {
    "url": "XTemplate/index.html",
    "revision": "260df04cb5d0300354c2df22be49333f"
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
