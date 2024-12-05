'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "70128b8bd8f7e8799de27f7d15870685",
"version.json": "edd7c9c2294696894a4ba129b5e92dba",
"index.html": "ad99a6512c7bb2ccbfd4459840a58636",
"/": "ad99a6512c7bb2ccbfd4459840a58636",
"main.dart.js": "d4ae1d92c7bd00acbf2a09808dfb4b05",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "429219bd8fff252c8ad9a9551cd5b991",
"assets/AssetManifest.json": "e7b2b6c3505b159819d1fba0513269a9",
"assets/NOTICES": "06e17832af71df988caab62d176b36d6",
"assets/FontManifest.json": "471475130381cbae70ee4b97acfce655",
"assets/AssetManifest.bin.json": "4fd479487c6a842d06d9287299fa4bd1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "35e0c6cd85c23a16933d18d5cabf69a7",
"assets/fonts/MaterialIcons-Regular.otf": "35dc5c976daf281b2e79d87fbe29cc34",
"assets/assets/images/hero.png": "f5a08880fe38220d9f6fcd58c5eb30eb",
"assets/assets/images/qrCode.png": "e32171b51362e2c68431a9a5eb6d0a44",
"assets/assets/images/order.png": "07864657e500aa8ef23b716a096304bb",
"assets/assets/images/instagram.png": "f30f25669f291b5b930b3a2bd7ba2a84",
"assets/assets/images/single_food_5.png": "3a969408e957424976211f8436c43bdf",
"assets/assets/images/single_food_4.png": "d4baa5b881f7884310f2d80aefbfca20",
"assets/assets/images/single_food_6.png": "3c872ace8b55c1aa830a68236f11c2ad",
"assets/assets/images/testimonial-4.jpg": "efa63a57f8da299aa8f4f143c2eb4404",
"assets/assets/images/single_food_3.png": "f193816a7861345b1828ea114c28da5e",
"assets/assets/images/customer_service.png": "2d6ab641c25787cfe8ff622555698af4",
"assets/assets/images/single_food_2.png": "aba33aa7dc9121fe39a8fdc69dbdd6ce",
"assets/assets/images/testimonial-1.jpg": "64a5d16c40afde3d3c2109477c217bfd",
"assets/assets/images/testimonial-3.jpg": "6d6cd5a03aa8ae932d5fce413740e597",
"assets/assets/images/background.jpg": "cd7c3795d641ad09402b4e4be37c7bbc",
"assets/assets/images/single_food_1.png": "e533c3547da238354da0b80ba1230b8f",
"assets/assets/images/testimonial-2.jpg": "edf85c62027f4c849fac2345997fd364",
"assets/assets/images/masterchefs.png": "7cb89f7ab0007a1dcca07ed827d3416a",
"assets/assets/images/quote.png": "56b329fbe789286ddcb0c2439f449326",
"assets/assets/images/logo.png": "a5fb67de7fdd327d1176251573236dbd",
"assets/assets/images/twitter.png": "a1088f41551510b4dcd2121e5959a8ac",
"assets/assets/images/video.jpg": "6c9284ef9adc85f41e5b5c5bff49cae8",
"assets/assets/images/about-4.jpg": "8370c1da581077f080068dba122303e4",
"assets/assets/images/youtube.png": "4966b5c839dbec20a84ca0d38a887311",
"assets/assets/images/team-1.jpg": "e2148df468b0738e53f7d80e2a853fa6",
"assets/assets/images/team-3.jpg": "134093f2c09740aa51015a42271e86c7",
"assets/assets/images/team-2.jpg": "9dd578190205ebfd64c837bd2894b6f0",
"assets/assets/images/breakfast.png": "a874b50c00ddf7d4c1949d79c9bc5e4c",
"assets/assets/images/facebook.png": "8f7852f1cbc27ed1b9255583930a65f6",
"assets/assets/images/drinks.png": "a2c6ea84770c9d898859ef64f18243c2",
"assets/assets/images/about-3.jpg": "2ae931a605355a99884de62c0cd945a2",
"assets/assets/images/about-2.jpg": "c3ab666abf007900ffb21f9ee6c34f75",
"assets/assets/images/launch.png": "82eef1fbaec7aeaa6c356ac144225e8f",
"assets/assets/images/about-1.jpg": "53f1fa7a60834995b2cdbee68eaa442f",
"assets/assets/images/team-4.jpg": "fbbe02d67b3a3ad1be55400370be0ede",
"assets/assets/images/bg.jpg": "b4b0e6e8cca57011cf9c66d7f7ccf1f5",
"assets/assets/fonts/Quicksand-Bold.ttf": "e8dcee4bbf2288a2d264c76fa547f37a",
"assets/assets/fonts/Quicksand-Medium.ttf": "fd7f304a26dd790aef9f1ae84403eab3",
"assets/assets/fonts/Quicksand-Regular.ttf": "7194c41ffab51721bd84ca104553c4e1",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "025d26a905aa7e016827cdc2b429552f",
"assets/assets/fonts/Quicksand-Light.ttf": "e60d43df6abf50de0980883f4596e268",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
