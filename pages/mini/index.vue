<template lang="pug">
  section.hero.is-fullheight
    .hero-body.level
      // .container
        h1.title
          | MINI
        h2.subtitle
          | A message insight network interpreter
      // .container
        div#local
        div#global
      .level-item.has-text-centered
        article
          p.heading Tweets
          p.title 3,456
          br
          paper(:x="150", :y="150", :r="70", :id="'thirdCanvas'")
        
      
</template>
<script>
import Viva from 'vivagraphjs'
import viva from '~/components/prototype/viva'
import paper from '~/components/prototype/paper'

import {
  userData,
  wasClicked
} from '~/assets/js/tm-pointer.js'

let u = userData.mailchimp
let s = userData.influx
let defaultQuery = s.q
let influxdb = `${s.h}/query?u=${s.u}&p=${s.p}&db=${s.db}&q=`
let mailchimpdb = `${u.h}/${u.db}/${u.q}.json`
const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    auth: {
          username: s.u,
          password: s.p
    }
}

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
          nodes: {
            people: {
              entities: [
                'omotola',
                'tjerk',
                'mini'
              ],
              pulse: {
                query: defaultQuery
              },
            },
            sensors: {
              entities: [],
              pulse: {
                query: defaultQuery
              },
            }
          },
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
    let nodes = graph.nodes.people.entities
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
    this.makeApiRequest()
    
  },
  methods: {
    async makeApiRequest() {
            let query = this.world.graph.nodes.sensors.pulse.query
            let influx = influxdb + query
            let sensors = await this.$axios.$get(influx)
            let series = sensors.results[0].series[0]
            let pulse = this.createPulse(query, series)
            this.updatePulse(pulse)
            console.log("NEW SENSOR RESULT", pulse)
        },
        updateQuery(query) {
            let pulse = this.createPulse(query, "NOT SENT")
            return this.updatePulse(pulse)
            console.log("UPDATED QUERY: ", pulse)
        },
        createPulse(req, res) {
            let pulse = {}
            pulse.query = req
            pulse.result = res
            pulse.moment = Date.now()
            pulse.description = 'New Pulse created from USP at ' + Date.now() + "."
            return pulse
        },
        updatePulse(pulse) {
            this.pulse = pulse
            // this.$store.commit('history/add', pulse)
        }
  }
}
</script>
