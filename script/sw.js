const CACHE_NAME = 'greenbite-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/index.html',
  '/recipes.html',
  '/calculator.html',
  '/workout.html',
  '/mindfulness.html',
  '/contact.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});