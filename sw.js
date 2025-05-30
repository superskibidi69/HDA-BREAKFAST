const CACHE_NAME = 'hda-breakfast-v0';
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll([
        '/',
        '/index.html',
        '/BreakfastBurritos_13.jpg',
        '/Corned_Beef_Hash_Pan.jpg',
        '/IMG_0749.jpeg',
        '/IMG_0752.jpeg',
        '/favicon.png',
        '/IMG_0754.jpeg',
        '/IMG_0755.jpeg',
        '/IMG_0756.jpeg',
        '/IMG_0761.jpeg',
        '/IMG_0788.webp',
        '/IMG_0793.jpeg',
        '/Jamaican-Fried-Dumpling_Featured-Image.jpg',
        '/Water.jpeg',
        '/Yogurt.jpeg',
        '/Youtiao.jpg',
        'banner.jpeg',
        'cinnamon.png',
        '/cmilk.jpeg',
        'cooltext478980411259758.png',
        'crepe.png',
        '/croissant.jpg',
        '/eggs-bene.jpg',
        '/frenchtoast.jpeg',
        'gravy.jpeg',
        '/manifest.json',
        '/milk.jpeg',
        '/oatmeal.jpg',
        '/orange.jpeg',
        '/robots.txt',
        '/offline.html',
        '/savoury-breakfast-muffins-recipe-header.jpg',
        'sitemap.xml',
        '/sizzle.mp3',
        '/smothie.webp',
        '/sunnyside.jpeg',
        '/touch-icon.png',
        '/zhou.jpg'
      ])
    )
  );
  self.skipWaiting();
});
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.endsWith('hero.mp4')) {
    event.respondWith(
      caches.match(event.request)
        .then(cached => cached || fetchAndCacheVideo(event.request))
    );
    return;
  }
  async function fetchAndCacheVideo(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    // Force full video download
    const response = await fetch(request, {
      headers: { 'Range': '' } // Override range requests
    });
    
    // Verify complete download
    if (response.status === 200) {
      await cache.put(request, response.clone());
      return response;
    }
    throw new Error('Incomplete video download');
  } catch (err) {
    // Fallback to network or cached partial
    const cached = await cache.match(request);
    return cached || Response.error();
  }
}
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
