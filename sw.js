
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing Service Worker...', event);
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating Service Worker...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  console.log('[Service Worker] Fetch event: ' + event.request.url);
});
