<template lang="pug">
  .container
    template(v-if="options !== null")
      template(v-if="options.graph === true") 
        graph
      template(v-else-if="options.scene === true") 
        scene
      template(v-else-if="options.location === true") 
        map
      template(v-else-if="options.netowrk === true") 
        network
      template(v-else)
        span Hello
    template(v-else)
      maria-table
</template>
<script>
import scene from '~/components/organisms/scene'
import graph from '~/components/organisms/graph'
import location from '~/components/organisms/location'
import network from '~/components/organisms/network'
import MariaTable from '~/components/molecules/MariaTable'


export default {
  name: 'organism',
  components: {
    graph,
    scene,
    location,
    network,
    MariaTable
  },
  props: [
    'options'
  ]
}
</script>
