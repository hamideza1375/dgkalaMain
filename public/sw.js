
const version = 34;
const preCacheName = `static-${version}`;
const preCache = [
  '/',
  '/home',
  '/productspopulars?key=client',
  '/beforepayment?key=client',
  '/profile?key=user',
  '/productbasket?key=client',
  '/paneladmin?key=admin',
  '/socket?key=client',
  '/login?key=user&active=no',
  '/productsoffers?key=client',

  '/css/font.css',

  '/fonts/AntDesign.ttf',
  '/fonts/B Baran Regular.ttf',
  '/fonts/FontAwesome5_Brands.ttf',
  '/fonts/FontAwesome5_Regular.ttf',
  '/fonts/FontAwesome5_Solid.ttf',
  '/fonts/IRANSansWeb_Bold.ttf',
  '/fonts/IRANSansWeb_Light.ttf',
  '/fonts/IRANSansWeb.ttf',
  '/fonts/MaterialIcons.ttf',
  '/fonts/Yekan Bakh Regular.ttf',

  "/manifest.json",
  "/app.js",
  'sw.js',

  '/logo.png',
  '/64x64.png',
  '/192x192.png',
  '/512x512.png',

  "/static/css/main.a6890c29.css",
  "/static/js/main.278d3b32.js",
  "/static/css/269.92b20761.chunk.css",
  "/static/js/269.abb55885.chunk.js",
  "/static/css/529.92b20761.chunk.css",
  "/static/js/529.ad1050d9.chunk.js",
  "/static/js/935.e8976ac1.chunk.js",
  "/static/js/12.801d5769.chunk.js",
  "/static/js/735.1c39d47e.chunk.js",
  "/static/js/517.260cf234.chunk.js",
  "/static/js/979.6ff1d14d.chunk.js",
  "/static/css/232.92b20761.chunk.css",
  "/static/js/232.19281f6d.chunk.js",
  "/static/js/818.4db866f3.chunk.js",
  "/static/js/707.cebb4045.chunk.js",
  "/static/js/881.795e2cfa.chunk.js",
  "/static/js/365.c5bdddd2.chunk.js",
  "/static/js/510.f9ea72e7.chunk.js",
  "/static/js/102.516b6cbf.chunk.js",
  "/static/js/496.1a783828.chunk.js",
  "/static/media/logo.18974f15ded44566f065.png",
  "/index.html",
  "/static/css/main.a6890c29.css.map",
  "/static/js/main.278d3b32.js.map",
  "/static/css/269.92b20761.chunk.css.map",
  "/static/js/269.abb55885.chunk.js.map",
  "/static/css/529.92b20761.chunk.css.map",
  "/static/js/529.ad1050d9.chunk.js.map",
  "/static/js/935.e8976ac1.chunk.js.map",
  "/static/js/12.801d5769.chunk.js.map",
  "/static/js/735.1c39d47e.chunk.js.map",
  "/static/js/517.260cf234.chunk.js.map",
  "/static/js/979.6ff1d14d.chunk.js.map",
  "/static/css/232.92b20761.chunk.css.map",
  "/static/js/232.19281f6d.chunk.js.map",
  "/static/js/818.4db866f3.chunk.js.map",
  "/static/js/707.cebb4045.chunk.js.map",
  "/static/js/881.795e2cfa.chunk.js.map",
  "/static/js/365.c5bdddd2.chunk.js.map",
  "/static/js/510.f9ea72e7.chunk.js.map",
  "/static/js/102.516b6cbf.chunk.js.map",
  "/static/js/496.1a783828.chunk.js.map"  
];




self.addEventListener('install', (ev) => {
  //installed
  ev.waitUntil(
    caches.open(preCacheName)
      .then((cache) => {
        console.log('caching the static files');
        cache.addAll(preCache);
      })
      .catch(console.warn)
  );
  //load pre-cache
});

self.addEventListener('activate', (ev) => {
  //activating
  ev.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key !== preCacheName)
            .map((key) => caches.delete(key))
        );
      })
      .catch(console.warn)
  );
  //delete old caches
});

self.addEventListener('fetch', (ev) => {
  //fetch request received
  //send back a response from cache or fetch
  ev.respondWith(
    caches.match(ev.request).then((cacheRes) => {
      // if(cacheRes) return cacheRes
      return (
        cacheRes ||
        fetch(ev.request).then(
          (response) => {
            return response;
          },
          (err) => {
            if (
              ev.request.url.indexOf('.html') > -1 ||
              ev.request.mode == 'navigation'
            ) {
              return caches.match('/index.html');
            }
          }
        )
      );
    })
  );
});

self.addEventListener('message', (ev) => {
  //message received
  //do things based on message props
  let data = ev.data;
  console.log('SW received', data);
});

const sendMessage = async (msg) => {
  let allClients = await clients.matchAll({ includeUncontrolled: true });
  return Promise.all(
    allClients.map((client) => {
      let channel = new MessageChannel();
      return client.postMessage(msg);
    })
  );
};