const gamecore = 'site-static'


//INSTALL
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(gamecore).then(cache => {
            console.log('caching game core')
            cache.addAll([
                    '/index.html',
                    '/cards/Chest.png',
                    '/cards/Redstone.png',
                    '/cards/Lazuli.png',
                    '/cards/Emerald.png',
                    '/cards/Diamond.png',
                    '/cards/Gold.png',
                    '/cards/Iron.png',
                    '/cards/Stone.png',
                    '/style.css',
                    '/app.js',
                    '/logo.png',
                  ])
        })
    )
    console.log('Service worker has been installed', e)
})

//ACTIVATE
self.addEventListener('activate', e => {
    console.log('Service worker has been activated')
})

//FETCH
self.addEventListener('fetch', e => {
    // console.log('fetch', evt)
    e.respondWith(
        caches.match(e.request).then(cacheResponse => {
            return cacheResponse || fetch(e.request)
        })
    )
})

