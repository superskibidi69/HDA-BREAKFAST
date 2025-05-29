const CACHE_NAME = 'hda-breakfast-v1';
const MAX_ITEMS = 100; // Limit total number of cached requests

// Clean up old cache keys
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

// Cache everything dynamically with cleanup
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then((response) => {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, cloned);
            cleanUpCache(cache); // cleanup logic here
          });
          return response;
        })
        .catch(() =>
          new Response('Offline or resource unavailable.', {
            status: 503,
            statusText: 'Service Unavailable',
          })
        );
    })
  );
});

// Cache cleanup helper: enforce MAX_ITEMS
async function cleanUpCache(cache) {
  const keys = await cache.keys();
  if (keys.length > MAX_ITEMS) {
    // Delete oldest entries
    await cache.delete(keys[0]);
  }
}
