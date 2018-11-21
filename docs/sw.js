importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0678d35e582b4e96dd1c.js",
    "revision": "6f1c0d6fde72d064fe72596f39fd1e94"
  },
  {
    "url": "/_nuxt/1af27c96cab4a3869500.js",
    "revision": "188999aa7a589d5966099e0fa7f9a4f7"
  },
  {
    "url": "/_nuxt/22b36d62b3a6fa48c986.js",
    "revision": "c01cc6d3b9fabce15f3659d6b9029bd5"
  },
  {
    "url": "/_nuxt/4f35f50a2ee1b3531796.js",
    "revision": "98762de06a3cf76456d777717600daad"
  },
  {
    "url": "/_nuxt/5f6d898e9fb118c27257.js",
    "revision": "e598714a51cc574187f68ba46963b6bb"
  },
  {
    "url": "/_nuxt/61b9a96364c9b7bcf4d9.js",
    "revision": "8cba41be5b8a6bdc0e50ff7418bd9305"
  },
  {
    "url": "/_nuxt/65c61a31774139a2d04e.js",
    "revision": "cab36fe1edfcf1173e3c8045f6ccbb00"
  },
  {
    "url": "/_nuxt/8b2f863600d5ace85fd2.js",
    "revision": "3c97524ba546a484daf6dbff19e82a4e"
  },
  {
    "url": "/_nuxt/91e05c6e29313dbd0a00.js",
    "revision": "adf24064230838dc5fe47a7f813add06"
  },
  {
    "url": "/_nuxt/91eab351c1c62ee29bba.js",
    "revision": "ee972883f11d12f06221bdc722b9fc40"
  },
  {
    "url": "/_nuxt/991afe49bdd7f9323795.js",
    "revision": "cc096b4686321603afa97011ccc8c532"
  },
  {
    "url": "/_nuxt/a01dde7f7b23a8566fae.js",
    "revision": "3a51049a3520cda0e11485b9032b22ca"
  },
  {
    "url": "/_nuxt/aad204eb00fc28f1c12e.js",
    "revision": "db95d2290c6afbd4a3e894590ba99876"
  },
  {
    "url": "/_nuxt/b444387ebb151dbc5556.js",
    "revision": "40e17cf3c34110040ef405e9aa073c54"
  },
  {
    "url": "/_nuxt/b6665bc99f2be7e3e647.js",
    "revision": "07a9d758da677e2acce96f4cc9fe962f"
  },
  {
    "url": "/_nuxt/bf74eadd3c184d01bdfb.js",
    "revision": "7c31ac56137389694b6154351e89f5dc"
  },
  {
    "url": "/_nuxt/c6d79cd591dce97d431a.js",
    "revision": "02539b021d92ab4daa40be7200a88fd8"
  },
  {
    "url": "/_nuxt/cb2363c1fb5edd57349c.js",
    "revision": "561e26801d857f3149417a5db5cf8fc6"
  },
  {
    "url": "/_nuxt/cf4ecd00224c91178886.js",
    "revision": "33d45faa6b54e378bb51c8a233c1fd02"
  },
  {
    "url": "/_nuxt/e1e02ddc9b046b7142ea.js",
    "revision": "e3dfeab1931ac0378252f3cd32b7b50a"
  },
  {
    "url": "/_nuxt/f822de3457a77b57cfad.js",
    "revision": "4b28f293470ee707251b73ec7e2c1904"
  },
  {
    "url": "/_nuxt/fe89e9e7caa6928ddd35.js",
    "revision": "532d6a9efe9130ebda3b4d213629c4f8"
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





