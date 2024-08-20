self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('tic-tac-toe-cache').then(function(cache) {
        return cache.addAll([
          '/',
          'index.html',
          'Catch.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });