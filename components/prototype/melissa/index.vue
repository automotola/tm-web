<template lang="pug">
.hero
  .container
    .columns
      .column(v-for="item in item.list")
        card(:item="item")
</template>
<script>
import card from '~/components/pure/uikit/card'
import Papa from 'papaparse'
export default {
  components: {
    card
  },
  data() {
    return {
      item: {
        name: 'location',
        list:[
        {
          name: 'utrecht',
          center: [5.1214201, 52.0907374],
          table: this.usp
        },
        {
          name: 'zwolle',
          center: [6.0830219, 52.5167747],
          table: this.zwl
        }
/*         {
          name: 'Rotterdam',
          center: [4.4777325, 51.9244201]
        } */
        ]
      }
    }
  },
  computed: {
    usp: function () {
      let csv = require("~/static/csv/utrecht.csv")
      let table = R.take(3, this.$mark.wasTable('utrecht', csv))
      // let object = this.$mark.wasArray(table)
      return table
    },
    zwl: function () {
      let csv = require("~/static/csv/zwolle.csv")
      let table = R.take(3, this.$mark.wasTable('zwolle', csv))
      return table
    }
  }
}
</script>
