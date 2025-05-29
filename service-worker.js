const CACHE_NAME = 'hda-breakfast-v2';
const MAX_ITEMS = 150;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll([
        '/offline.html',
        '/',
        '/index.html',
        '/BreakfastBurritos_13.jpg',
        '/Corned_Beef_Hash_Pan.jpg',
        '/IMG_0749.jpeg',
        '/IMG_0752.jpeg',
        '/milk.jpeg',
        '/hero.mp4',
        '/favicon.png'
      ])
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, cloned);
            cleanUpCache(cache);
          });
          return response;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('/offline.html');
          }
          return new Response('', { status: 204 });
        });
    })
  );
});

async function cleanUpCache(cache) {
  const keys = await cache.keys();
  if (keys.length > MAX_ITEMS) {
    await cache.delete(keys[0]);
  }
}
