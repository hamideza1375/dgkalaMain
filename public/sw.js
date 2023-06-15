const random = String(Math.random())
const d_version = 24;
const version = 24;
const dynamicVersion = `dinamic-${d_version}`;
const preCacheName = `static-${version}`;
const preCache = [
  '/',
  '/home',
  // '/productspopulars?key=client',
  // '/beforepayment?key=client',
  // '/profile?key=user',
  // '/productbasket?key=client',
  // '/paneladmin?key=admin',
  // '/socket?key=socket',
  // '/login?key=user&active=no',
  // '/productsoffers?key=client',
  // '/getCode?key=user&active=yess&resetSpecification=true&newCode=true',
  // '/getCode?key=user&active=yess&forgetPass=true&newCode=true',
  // '/getCode?key=user&active=yess&register=true',
  // '/getCode?key=user&active=yess&login=true',

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
  // 'sw.js',

  // '/logo.png',
  // '/64x64.png',
  // '/192x192.png',
  // '/512x512.png',
  
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

// self.addEventListener('fetch', (ev) => {
//   ev.respondWith(
//     caches.match(ev.request).then((cacheRes) => {
//       if (cacheRes) return cacheRes
//       else {
//         return fetch(ev.request).then((res) => {
//            if ( ev.request.url.split('/').find(url => url === 'getSlider') || ev.request.url.split('/').find(url => url === 'getCategory') || ev.request.url.split('/').find(url => url === 'getOffers') || ev.request.url.split('/').find(url => url === 'getCategory') || ev.request.url.split('/').find(url => url === 'getProducts') || ev.request.url.split('/').find(url => url === 'getSingleProduct') || ev.request.url.split('.')[ev.request.url.split('.').length -1] === 'png' || ev.request.url.split('.')[ev.request.url.split('.').length -1] === 'jpg' || ev.request.url.split('.')[ev.request.url.split('.').length -1] === 'jpeg' || ev.request.url === 'http://localhost:4000/getSlider' || ev.request.url === 'http://localhost:4000/getCategory' || ev.request.url === 'http://localhost:4000/getOffers' || ev.request.url === 'http://localhost:4000/getCategory' || ev.request.url === 'http://localhost:4000/getPopulars'  ) {
//             return caches.open(dynamicVersion).then((cache) => {
//               console.log('dynamicCache');
//               cache.put(ev.request.url, res.clone())
//               return res
//             })
//           } else return res
//           })
//       }
//     })
//   )
// });





// self.addEventListener('fetch', (ev) => {
//   ev.respondWith(
//     fetch(ev.request)
//       .then((res) => {
//         return caches.open(dynamicVersion)
//           .then((cache) => {
//             console.log('dynamicCache');
//             cache.put(ev.request.url, res.clone())
//             return res
//           })
//       })
//       .catch((err) => {
//         return caches.match(ev.request)
//       })
//   );
// });

// self.addEventListener('fetch', (ev) => {
//   //fetch request received
//   //send back a response from cache or fetch
//   ev.respondWith(
//     caches.match(ev.request).then((cacheRes) => {
//       // if(cacheRes) return cacheRes
//       return (
//         cacheRes ||
//         fetch(ev.request).then(
//           (res) => {

//             if ( ev.request.url.split('.')[ev.request.url.split('.').length -1] === 'mp3' || ev.request.url.split('.')[ev.request.url.split('.').length -1] === 'mp4' || ev.request.url.split('.')[ev.request.url.split('.').length -1] === 'png' || ev.request.url.split('.')[ev.request.url.split('.').length -1] === 'jpg' || ev.request.url.split('.')[ev.request.url.split('.').length -1] === 'jpeg' ) {
//               return caches.open(dynamicVersion).then((cache) => {
//                  console.log('dynamicCache');
//                  cache.put(ev.request.url, res.clone())
//                  return res
//                })
//              } else 
//              return res

//           },
//           (err) => {
//             if (
//               ev.request.url.indexOf('.html') > -1 ||
//               ev.request.mode == 'navigation'
//             ) {
//               return caches.match('/index.html');
//             }
//           }
//         )
//       );
//     })
//   );
// });