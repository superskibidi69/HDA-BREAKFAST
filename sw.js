const CACHE_NAME = 'hda-breakfast-v4';
const VIDEO_CACHE = 'hda-videos-v1';
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
          if (cache !== CACHE_NAME && cache !== VIDEO_CACHE) {
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
  const isVideo = url.pathname.endsWith('.mp4') || url.pathname.endsWith('.webm'); || url.pathname.endsWith('.mov');
  if (event.request.method !== 'GET' || url.pathname.startsWith('/_vercel')) {
    return;
  }
  if (isVideo) {
    event.respondWith(
      cacheFirstWithRefresh(event.request, VIDEO_CACHE)
    );
    return;
  }
  event.respondWith(
    isImage ? cacheFirst(event.request) : networkFirst(event.request)
  );
});
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

async function cacheFirstWithRefresh(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (navigator.onLine) {
    fetchAndCache(request, cache).catch(() => {});
  }
  
  return cached || fetchAndCache(request, cache);
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
self.addEventListener('sync', event => {
  if (event.tag === 'update-content') {
    event.waitUntil(updateCache());
  }
});

async function updateCache() {
  const cache = await caches.open(CACHE_NAME);
  return cache.addAll(['/index.html']);
}
