const version = 18;
const preCacheName = `static-${version}`;
const preCache = [
  // '/',
  // '/home',
  // '/childpopulars?key=client',
  // '/beforepayment?key=client',
  // '/profile?key=user',
  // '/css/font.css',

  // '/fonts/AntDesign.ttf',
  // '/fonts/B Baran Regular.ttf',
  // '/fonts/FontAwesome5_Brands.ttf',
  // '/fonts/FontAwesome5_Regular.ttf',
  // '/fonts/FontAwesome5_Solid.ttf',
  // '/fonts/IRANSansWeb_Bold.ttf',
  // '/fonts/IRANSansWeb_Light.ttf',
  // '/fonts/IRANSansWeb.ttf',
  // '/fonts/MaterialIcons.ttf',
  // '/fonts/Yekan Bakh Regular.ttf',

  // "/manifest.json",
  // "/app.js",

  // '/logo.png',
  // '/64x64.png',
  // '/192x192.png',
  // '/512x512.png',

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