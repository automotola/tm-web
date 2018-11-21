<template lang="pug">
  .uk-tile.uk-padding-remove
    media(:item="item")
    // .uk-card-media
      view-map(:data="item")
    // .uk-card-body.uk-padding-remove.uk-overflow-auto.uk-height-medium
      view-list(:data="table")
    // i(data-feather="map")
</template>
<script>
import ViewMap from '~/components/prototype/maria/view-map'
import ViewList from '~/components/prototype/maria/view-list'
import Media from './media'
// import feather from 'feather-icons'
export default {
  props: [
    'item'
  ],
  components: {
    ViewList,
    ViewMap,
    Media
  },
  created: function() {
    console.log("uikit card created")
  },
  mounted: function() {
    console.log("uikit card mounted")
    // feather.replace()
  },
  computed: {
/*     table: function () {
      const R = require('rambda')
      let csv = require(`~/static/csv/${this.item.name}.csv`)
      let table = this.$mark.wasTable('utrecht', csv)
      let oldRows = table.rows
      let oldKeys = table.keys
      table.rows = this.$mark.wasArray(oldRows, 3)
      table.keys = R.take(3, oldKeys)
      return table
    } */
  }
}
</script>
