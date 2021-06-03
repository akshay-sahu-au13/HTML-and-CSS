var CACHE_STATIC = "static";

var urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/image/favicon.ico",
  "/image/hero.svg",
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_STATIC).then(function (cache) {
      console.log("Pre Caching");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", function (e) {
  console.log("SW activated");
});

self.addEventListener("fetch", function (e) {
  e.respondWith(caches.match(e.request));
});
