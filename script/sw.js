const CACHE_NAME = 'greenbite-v1';
const urlsToCache = [
  './',
  './styles/styles.css',
  './index.html',
  './recipes.html',
  './calculator.html',
  './workout.html',
  './mindfulness.html',
  './contact.html',
  './favicon_io/favicon.ico',
  './favicon_io/android-chrome-192x192.png',
  './favicon_io/android-chrome-512x512.png',
  './json/manifest.json',
  './script/script.js'
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