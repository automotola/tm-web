importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0868c7e62a8083e7168b.js",
    "revision": "aa7681f972ba350b531dfea41cf2da9c"
  },
  {
    "url": "/_nuxt/11682c0def85711d7e8a.js",
    "revision": "c441c3844472525e7a84c7826c7298a0"
  },
  {
    "url": "/_nuxt/192464ff3b9187643c6f.js",
    "revision": "c79c5fdfac32ad99e988154bccccff63"
  },
  {
    "url": "/_nuxt/2fdf4c9455bbfde838bb.js",
    "revision": "474262ba0c85c4efa05d7b684f48af2a"
  },
  {
    "url": "/_nuxt/343d6d3eecc6c1b242ca.js",
    "revision": "62be5ca92954a4c9afb3b4ff58ae644a"
  },
  {
    "url": "/_nuxt/34650f96ebcf9ba74590.js",
    "revision": "51a46728243dec8fe4d02fcba4d47f58"
  },
  {
    "url": "/_nuxt/5003d8f964440280b8ce.js",
    "revision": "1336b72a204923b997804ef64a1f79ff"
  },
  {
    "url": "/_nuxt/6ac55c9d2e369b47d1b5.js",
    "revision": "e793938fa1a2cfc2627ce7405f530401"
  },
  {
    "url": "/_nuxt/6c2093df3162373dc265.js",
    "revision": "f3cc8348dd7a523b1b522571b901c61d"
  },
  {
    "url": "/_nuxt/6df62520f33de668496d.js",
    "revision": "5a481cafc4b85bf4be1d774b07bd6e9e"
  },
  {
    "url": "/_nuxt/81c42502c8bb88804845.js",
    "revision": "1d4d75d9f36aa92007cccccb768b6d49"
  },
  {
    "url": "/_nuxt/8dfd311636c3c82add09.js",
    "revision": "c1a383e84ed761267ca97441fe92f943"
  },
  {
    "url": "/_nuxt/9c61068c12817605c17d.js",
    "revision": "b19bc4bd92bd973f0290135dc290ec07"
  },
  {
    "url": "/_nuxt/afb6a513cb069c5615b3.js",
    "revision": "24840913cd9bbca64ac826bc752f4561"
  },
  {
    "url": "/_nuxt/b173e888e463ba6450b8.js",
    "revision": "83856a6d713bf39786727b52f00a0353"
  },
  {
    "url": "/_nuxt/d1d5096136bb7fbdfe1e.js",
    "revision": "e8cc104200c4375841135e6eeca5a740"
  },
  {
    "url": "/_nuxt/d729ebf6394015cb3847.js",
    "revision": "ef2e423cc58ba0945465a4e908fbf744"
  },
  {
    "url": "/_nuxt/d7e42ba311e7c8f196c0.js",
    "revision": "4252e9fe3a98d8aa15261815bd189d47"
  },
  {
    "url": "/_nuxt/e109e91c1e1cf5e81402.js",
    "revision": "65ab2a989ea1afa05dbf4d52f9aaaacd"
  },
  {
    "url": "/_nuxt/ffd13ab324eff27a014a.js",
    "revision": "a52b23f9f0420603cb00c2f1aa8c0eef"
  }
], {
  "cacheId": "app-maria",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





