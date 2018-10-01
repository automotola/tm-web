<template lang="pug">
.panel
  onepage(:content="content")
</template>
<script>
import onepage from '~/components/templates/onepage'
export default {
  components: {
    onepage
  },
  data () {
    return {
      options: {
        graph: true,
        scene: true,
        field: true,
        location: true,
      },
      content: {
        hero: true
      }
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '2Tango | Signs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
}
</script>
