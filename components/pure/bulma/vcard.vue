<template lang="pug">
  .card
    view-map(:data="data" :table="table")
    view-list(:data="table")
    // i(data-feather="map")
</template>
<script>
import ViewMap from '~/components/prototype/maria/view-map'
import ViewList from '~/components/prototype/maria/view-list'
import feather from 'feather-icons'
export default {
  props: [
    'data'
  ],
  components: {
    ViewList,
    ViewMap
  },
  mounted: function() {
    feather.replace()
  },
  computed: {
    table: function () {
      const R = require('rambda')
      let csv = require(`~/static/csv/${this.data.name}.csv`)
      let table = this.$mark.wasTable('utrecht', csv)
      let oldRows = table.rows
      let oldKeys = table.keys
      table.rows = this.$mark.wasArray(oldRows, 3)
      table.keys = R.take(3, oldKeys)
      return table
    }
  }
}
</script>
