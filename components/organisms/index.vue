<template lang="pug">
  .container
    template(v-if="options.graph === true") 
      graph
      table
    template(v-if="options.scene === true") 
      field
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
import map from '~/components/organisms/scene'
import network from '~/components/organisms/scene'

import table from '~/components/molecules/table'

export default {
  components: {
    graph,
    scene,
    map,
    network
  },
  props: [
    'options'
  ]
}
</script>
