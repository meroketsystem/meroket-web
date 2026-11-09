const CACHE_NAME = 'meroket-pwa-v1';
const ASSETS = ['/', '/katalog', '/tentang-kami', '/kontak', '/kebijakan-privasi', '/syarat-layanan', '/content/fashion_catalog.json'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
