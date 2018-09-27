<template lang="pug">
  .container
    template(v-if="options.graph === true") 
      graph
      table
    template(v-if="options.scene === true") 
      scene
      table
    template(v-if="options.map === true") 
      map
      table
    template(v-if="options.netowrk === true") 
      network
      table
</template>
<script>
import scene from '~/components/organisms/scene'
import graph from '~/components/organisms/graph'
import map from '~/components/organisms/map'
import network from '~/components/organisms/network'

import table from '~/components/molecules/table'

export default {
  components: {
    graph,
    scene,
    map,
    network,
    table
  },
  props: [
    'options'
  ]
}
</script>
