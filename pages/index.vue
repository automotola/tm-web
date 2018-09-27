<template lang="pug">
  organisms Hello!
</template>
<script>
import organisms from '~/components/organisms'
export default {
  layout: 'base',
  components: {
    organisms
  },
  data () {
    return {
      options: {
        graph: true,
        scene: true,
        field: true,
        map: true,
      }
    }
  }
}
</script>
