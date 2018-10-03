<template lang="pug">
.panel
  marcus(:content="content")
</template>
<script>
import marcus from '~/components/templates/marcus'
export default {
  components: {
    marcus
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
    title: 'Mother Earth Network'
  },
}
</script>
