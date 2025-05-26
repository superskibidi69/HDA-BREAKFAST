const CACHE_NAME = 'hda';
const urlsToCache = [
  '/', 
  '/index.html',
  '/favicon.png',
  '/touch-icon.png',
  '/manifest.json',
  '/hero.mp4',
  '/sizzle.mp3',
  '/corned_Beef_Hash_Pan.jpg',
  '/cmilk.jpeg',
  '/crepe.png',
  '/cinnamon.png',
  '/cross.jpeg',
  '/milk.jpeg',
  '/orange.jpeg',
  '/smothie.webp',
  '/yogurt.jpeg',
  '/sunnyside.jpeg',
  '/frenchtoast.jpeg',
  '/sizzle.mp3',
  '/Water.jpeg',
  '/IMG_0749.jpeg',
  '/IMG_0752.jpeg',
  '/IMG_0754.jpeg',
  '/IMG_0755.jpeg',
  '/IMG_0756.jpeg',
  '/IMG_0761.jpeg',
  '/IMG_0788.webp',
  '/IMG_0793.jpeg',
  '/BreakfastBurritos_13.jpg',
  '/eggs-bene.jpg',
  '/oatmeal.jpg',
  '/zhou.jpg',
  '/Youtiao.jpg',
  '/Jamaican-Fried-Dumpling_Featured-Image.jpg',
  '/savoury-breakfast-muffins-recipe-header.jpg',
  '/croissant.jpg',
  '/Yogurt.jpeg',
  '/cooltext478980411259758.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
});
