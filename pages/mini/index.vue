<template lang="pug">
  section.hero.is-fullheight
    .hero-body
      .container
        h1.title
          | MINI
        h2.subtitle
          | A message insight network interpreter
      .container
        div#local
        div#global
        paper
        
      
</template>
<script>
import Viva from 'vivagraphjs'
import viva from '~/components/prototype/viva'
import paper from '~/components/prototype/paper'

export default {
  layout: 'mini',
  components: {
    paper,
    viva
  },
  data: function() {
    return {
      world: {
        name: 'athens',
        graph: {
          nodes: [
            'omotola',
            'tjerk',
            'mini'
          ],
          edges: [
            ['omotola', 'mini'],
            ['tjerk', 'mini']
          ],
        }
      },
      context: {}
    }
  },
  mounted: function() {
    let world = this.world
    let graph = world.graph
    let nodes = graph.nodes
    let edges = graph.edges

    console.log("WORLD", world)
    console.log("GRAPH", graph)
    console.log("EDGES", edges)
    console.log("NODES", nodes)

    let localNet = Viva.Graph.graph();
    let globalNet = Viva.Graph.graph();

    edges.forEach((edge) => {
      localNet.addLink(edge[0], edge[1]);
    })

    // specify where it should be rendered:
    var rendererlocal = Viva.Graph.View.renderer(localNet, {
      container: document.getElementById('local')
    });
    rendererlocal.run();

    let aux = this.$gun.get('athens')
    let auxGraph = aux.get('graph')
    let auxNodes = aux.get('graph').get('nodes')
    let auxEdges = aux.get('graph').get('edges')

    nodes.forEach((node) => {
      auxNodes.set({
        name: node
      });
      globalNet.addNode(node);
    })
    edges.forEach((edge) => {
      auxEdges.set({
        source: edge[0],
        target: edge[1]
      });
      globalNet.addLink(edge[0], edge[1]);
    })
/*     auxGraph.on((node,key) => {
      console.log("AUX_GRAPH", key, node)
    })
    auxNodes.on((node,key) => {
      console.log("AUX_NODES", key, node)
    })
    auxEdges.on((node,key) => {
      console.log("AUX_EDGES", key, node)
    }) */

    auxGraph.map().on((node, key) => {
      // add results straight to the Vue component state
      // and get updates when nodes are updated by GUN
        console.log("Hello GUN", key, node)
      this.context[key] = node;
    });

      // specify where it should be rendered:
    var rendererGlobal = Viva.Graph.View.renderer(localNet, {
      container: document.getElementById('global')
    });
    rendererGlobal.run();

  }
}
</script>
