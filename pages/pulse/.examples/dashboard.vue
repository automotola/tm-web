<template lang="pug">
  #content(data-uk-height-viewport)
    .uk-container.uk-container-expand
      .uk-grid-match.uk-grid(class='uk-child-width-1-4@s' uk-grid='')
        Card(v-for='card in cards' :card='card' :key='card.name')
      Map(:data="mapdata",:table="tabledata")
</template>
<script>
import Card from '~/components/patterns/card'
import Map from '~/components/patterns/map'

export default {
  components: {
    Card,
    Map
  },
  layout: 'dashboard',
  auth: false,
  data(){
    return {
      fullsceen: false,
      cards: [
        {
          name: "sensors-in-service",
          title: "Sensors in service",
          icon: "icon: nut; ratio: 2",
          value: "100",
          max: "140"
        },
        {
          name: "sensors-not-in-service",
          title: "Sensors not in service",
          icon: "icon: warning; ratio: 2",
          value: "40",
          max: "140"
        },
        {
          name: "sensors-in-maintenance",
          title: "Sensors undergoing maintenance",
          icon: "icon: cog; ratio: 2",
          value: "10",
          max: "40"
        },
        {
          name: "incoming-data",
          title: "Incoming data per day",
          icon: "icon: database; ratio: 2",
          value: "13",
          max: "30"
        }
      ],
      mapdata: {
        name: 'sensormap',
        center: [1,2]
      },
      tabledata: {
        rows: [
          {
            id: 'sadlfjdlf',
            lat: '1',
            lon: '2'
          }
        ]
      }
    }
  },
  head () {
    return {
      title: 'Maria™',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.8/css/uikit.min.css' }
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.2/js/uikit.min.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.2/js/uikit-icons.min.js' },
        { src: 'https://rawgit.com/aframevr/aframe/master/dist/aframe-master.min.js' }
      ]
    }
  },
}
</script>

