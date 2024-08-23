const cacheWordleAsset = "wordle-replica-v=6";
const assets = [
  "/",
  "/index.html",
  "/img/icons/Icon-72.png",
  "/img/icons/Mubin.jpg",
  "/script/app.js",
  "/script/modal.js",
  "/script/util.js",
  "/style/app.css"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheWordleAsset).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});