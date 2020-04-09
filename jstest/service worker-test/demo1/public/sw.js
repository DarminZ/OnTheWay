self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/cache',
                '/demo1/index.html',
                '/css/style.css',
                '/js/index.js',
                '/js/main.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request).then(function (response) {
        // caches.match() always resolves
        // but in case of success response will have value
        if (response !== undefined) {
            console.log('cached', response);
            return response;
        } else {
            return fetch(event.request).then(function (response) {
                // 必须是有效请求，必须是同源响应，第三方的请求，因为不可控，最好不要缓存
                if (!response || response.status !== 200 || response.type !== 'basic' || event.request.method === 'POST') {
                    return response;
                }

                // response may be used only once
                // we need to save clone to put one copy in cache
                // and serve second one
                let responseClone = response.clone();
                caches.open('v1').then(function (cache) {
                    console.log('cache', event.request, responseClone);
                    cache.put(event.request, responseClone);
                });
                return response;
            }).catch(function (e) {
                console.log(e);
            });
        }
    }));
});
