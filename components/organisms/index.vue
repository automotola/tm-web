<template lang="pug">
  .container
    template(v-if="option.graph === true") 
      graph
      table
    template(v-else-if="option.scene === true") 
      scene
      table
    template(v-else-if="option.location === true") 
      map
      table
    template(v-else-if="option.netowrk === true") 
      network
      table
    template(v-else)
      span Hello!
</template>
<script>
import scene from '~/components/organisms/scene'
import graph from '~/components/organisms/graph'
import location from '~/components/organisms/location'
import network from '~/components/organisms/network'

import table from '~/components/molecules/table'

export default {
  name: 'organism',
  components: {
    graph,
    scene,
    location,
    network,
    table
  },
  props: [
    'options'
  ]
}
</script>
