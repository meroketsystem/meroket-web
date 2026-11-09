const CACHE_NAME = 'meroket-crm-erp-pwa-v2';
const ASSETS = ['/', '/katalog', '/tentang-kami', '/kontak', '/kebijakan-privasi', '/syarat-layanan', '/content/fashion_catalog.json', '/content/api_config.json'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
