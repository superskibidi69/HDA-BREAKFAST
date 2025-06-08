const CACHE_NAME = 'hda-breakfast-plswork';
const MAX_CACHE_SIZE = 150;

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/favicon.png',
];

const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isImage = IMAGE_EXTENSIONS.some(ext => url.pathname.endsWith(`.${ext}`));

  if (event.request.method !== 'GET' || url.pathname.startsWith('/_vercel')) {
    return;
  }

  event.respondWith(
    isImage ? cacheFirst(event.request) : networkFirst(event.request)
  );
});

// Caching strategies

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  return cached || fetchAndCache(request, cache);
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || caches.match('/offline.html');
  }
}

async function fetchAndCache(request, cache) {
  const response = await fetch(request);
  if (response.ok) {
    await cleanCache(cache);
    await cache.put(request, response.clone());
  }
  return response;
}

async function cleanCache(cache) {
  const keys = await cache.keys();
  if (keys.length > MAX_CACHE_SIZE) {
    await cache.delete(keys[0]);
  }
}

// Optional background sync (still included)
self.addEventListener('sync', event => {
  if (event.tag === 'update-content') {
    event.waitUntil(updateCache());
  }
});

async function updateCache() {
  const cache = await caches.open(CACHE_NAME);
  return cache.addAll(['/index.html']);
}
