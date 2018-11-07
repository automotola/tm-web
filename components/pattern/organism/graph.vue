<template lang="pug">
    .uk-panel
        #viewGraph.uk-height-medium.uk-width-medium.uk-card.uk-margin-remove.uk-padding-remove.rounded
        span.uk-light.uk-icon.uk-icon-image(class="uk-position-absolute uk-transform-center" style="left: 50%; top: 50%" uk-icon="world" href="#")
</template>
<style>
canvas.rounded, .rounded > canvas {
    border-radius: 100% 100%;
}
</style>

<script>
const createGraph = require('ngraph.graph')
const crypto = require('crypto')

const H = crypto.createHash('sha512')
const G = createGraph()
const R = require('rambda')
// const M = require('mathjs')

const thisParsed = (object) => {
  let parsedObject = R.values(object)
  return parsedObject
}

/* Math BEGINS *************/
let getCombinations = function (array, size, start, initialStuff, output) {
  if (initialStuff.length >= size) {
    output.push(initialStuff)
  } else {
    var i
    for (i = start; i < array.length; ++i) {
      getCombinations(array, size, i + 1, initialStuff.concat(array[i]), output)
    }
  }
}
let getAllPossibleCombinations = function (array, size, output) {
  getCombinations(array, size, 0, [], output)
}
/** Math Setup ENDS */

export default {
  props: [
    'state',
    'action'
  ],
  data() {
    return {
      users: null
    }
  },
  created() {
    /** Math Setup ENDS */
    // console.log('Props:', this.props)
    this.getUsers()
  },
  mounted() {
    console.log('Mounted!')
  },
  methods: {
    async getUsers() {
      const url = 'https://thismedium.firebaseio.com/account/maria/admin/mailchimp/lists/fa72b1c58c/members.json'
      // let request = db + ref
      let request = url
      let response = await this.$axios.$get(request)
      const results = thisParsed(response)
      // console.log('Getting:', results.length)
      this.graphThis(results)
    },
    graphThis(data) {
      // Create a number for each item
      let count = R.times(R.identity, data.length)
      let links = []
      getAllPossibleCombinations(count, 2, links)
      let nodes = []
      data.forEach(n => {
        let digest = R.toString(R.values(n))
        H.update(digest)
        let hex = H.digest('hex')
        let node = {
          id: hex,
          data: n
        }
        nodes = R.append(node, nodes)
      })
      console.log(nodes)
      let edges = []
      links.forEach(e => {
        let nodeA = nodes[e[0]].id
        let nodeB = nodes[e[1]].id
        let digest = R.toString(nodeA, nodeB)
        H.update(digest)
        let hex = H.digest('hex')
        G.addLink(`${nodeA}`, `${nodeB}`)
        let edge = {
          id: hex,
          data: [nodeA, nodeB]
        }
        edges = R.append(edge, edges)
      })
      const renderGraph = require('ngraph.pixel')
      const renderer = renderGraph(G, {
        container: document.getElementById('viewGraph'),
        physics: {
          springLength: 40,
          springCoeff: 0.000005,
          gravity: -0.5,
          theta: 0.8,
          dragCoeff: 0.08
        },
        link: function createLinkUI(link) {
          if (link.data !== 'transmitting') return // don't need to render!
          // otherwise return default link:
          return {
            fromColor: 0xFF00FF,
            toColor: 0x00FFFF
          }
        },
        is3d: false
      })
      // const mariaID = '668a1a4129e21d5d971e3acec29c025ea52050244e73936c5865a1f767f99d2be120b28665f59ba8d578ba07777971f73e2af0cb41c82d03e8b3ff8111cb74a0'
      renderer.run()
    }
  }
}
</script>
