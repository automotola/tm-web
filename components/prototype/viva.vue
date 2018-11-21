<template lang="pug">
  div#mygraph
</template>
<script>
import Viva from 'vivagraphjs'
export default {
  props: [
    'nodes',
    'edges'
  ],
  mounted: function(){
    let nodes = this.nodes
    let edges = this.edges
    console.log("GRAPH", nodes, edges)
    let graph = Viva.Graph.graph();

    edges.forEach((edge) => {
      graph.addLink(edge[0], edge[1]);
    })
 
    // specify where it should be rendered:
    var renderer = Viva.Graph.View.renderer(graph, {
      container: document.getElementById('mygraph')
    });
    renderer.run();
  }
}
</script>
