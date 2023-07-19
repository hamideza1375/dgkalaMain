const random = String(Math.random())
const d_version = 35;
const version = 35;
const dynamicVersion = `dinamic-${d_version}`;
const preCacheName = `static-${version}`;
const preCache = [
  '/',
  '/home',
  '/index.html',
  '/productspopulars?key=client',
  '/beforepayment?key=client',
  '/profile?key=user',
  '/productbasket?key=client',
  '/paneladmin?key=admin',
  '/socket?key=socket',
  '/login?key=user&active=no',
  '/productsoffers?key=client',
  '/getCode?key=user&active=yess&resetSpecification=true&newCode=true',
  '/getCode?key=user&active=yess&forgetPass=true&newCode=true',
  '/getCode?key=user&active=yess&register=true',
  '/getCode?key=user&active=yess&login=true',

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


  '/64x64.png',
  '/192x192.png',
  '/512x512.png',

  
];


self.addEventListener('install', (ev) => {
  ev.waitUntil(
    caches.open(preCacheName)
      .then((cache) => {
        console.log('caching the static files');
        cache.addAll(preCache);
      })
      .catch(console.warn)
  );
});


self.addEventListener('activate', (ev) => {
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
});


self.addEventListener('fetch', (ev) => {
  ev.respondWith(
    caches.match(ev.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(ev.request).then(
          (res) => {
            if (ev.request.url.split('.')[ev.request.url.split('.').length - 1] === 'mp3' || ev.request.url.split('.')[ev.request.url.split('.').length - 1] === 'png' || ev.request.url.split('.')[ev.request.url.split('.').length - 1] === 'jpg' || ev.request.url.split('.')[ev.request.url.split('.').length - 1] === 'jpeg') {
              return caches.open(dynamicVersion).then((cache) => {
                cache.put(ev.request.url, res.clone())
                return res
              })
            }
            else if (ev.request.url.split('.')[ev.request.url.split('.').length - 1] === 'mp4') {
              return caches.open(random).then((cache) => {
                cache.put(ev.request.url, res.clone())
                return res
              })
            }
            else return res
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
