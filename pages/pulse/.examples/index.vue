<template lang="pug">
  .uk-panel(uk-height-viewport).uk-flex.uk-flex-center.uk-flex-middle.bg-blue-darkest
    no-ssr
      .uk-card.uk-card-default.rounded-lg
        .uk-card-header Maria™
        .uk-card-body.uk-padding-remove
          a-scene(embedded)
            a-sky(color="#080321")
            a-entity(camera="active: true" look-controls wasd-controls position="0 0 0" data-aframe-default-camera zoom="100")
            a-entity(position="0 1.25 -5" particle-system="preset: dust; type: 2; size: 3; color: #fd15ff,#2afff6,#88ccff")
            a-entity
              a-sphere(position="0 0 -15" color="white" material= "opacity: 0.1" radius="5" texture-animator="htiles:2; vtiles:2; tiles:16; src:planet/images/earthcloudmap.jpg; dur:5")
        .uk-card-footer © 2018
</template>
<style>
a-scene {
  width: 300px;
  height: 300px;
}
</style>
<script>

/* 

a-scene(embedded).uk-width-medium.uk-height-medium
            a-sphere(position="0 1.25 -8" radius="1" color="#EF2D5E")

*/

export default {
  auth: false,
  data(){
    return {
      fullsceen: false
    }
  },
  head () {
    return {
      title: 'Maria™',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.8/css/uikit.min.css' }
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.2/js/uikit.min.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.2/js/uikit-icons.min.js' },
        { src: 'https://rawgit.com/aframevr/aframe/master/dist/aframe-master.min.js' }
      ]
    }
  },
}
</script>

