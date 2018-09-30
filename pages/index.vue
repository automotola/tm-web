<template lang="pug">
  website(:options="options")
</template>
<script>
import website from '~/pages/website'
export default {
  layout: 'base',
  components: {
    website
  },
  data () {
    return {
      options: {
        graph: true,
        scene: true,
        field: true,
        location: true,
      }
    }
  }
}
</script>
