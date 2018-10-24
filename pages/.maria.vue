<template lang="pug">
.panel
  maria(:content="content" :brandName="brandName" :data="results.series")
</template>
<script>
import maria from '~/components/templates/maria'
import { legend } from '~/assets/js/sensors'
export default {
  props: [
    'brandName'
  ],
  components: {
    maria
  },
  data () {
    return {
      results: {},
      options: {
        graph: true,
        scene: true,
        field: true,
        location: true,
      },
      content: {
        hero: true
      }
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    async getItems() {
      const host = 'http://influx.rivm.nl:8086'
      const u = 'motherearth'
      const p = 'Y47bB108'
      const db = [
        legend.database[1][1],
        legend.database[1][2]
      ]
      const c = false
      const query = [
        'SELECT val3 FROM KIT_RTD01 WHERE time > now() - 1h GROUP BY id ',
        "SELECT time, val0, val3 FROM KIT_RTD01 WHERE id = '4891339' AND time > now() - 30m; SELECT time, val0, val3 FROM KIT_RTD01 WHERE id = '4891339' AND time > now() - 30m  ",
        "SELECT time, val0, val3 FROM KIT_RTD01 WHERE id IN ('4891339', '4892754') time > now() - 30m",
        "SELECT time, val0, val3 FROM KIT_RTD01 WHERE time > now() - 1h GROUP BY time(30m) id ",
        'SELECT time, id, val0, val3 FROM KIT_RTD01 WHERE time > now() - 1d',
        'SELECT time, id, val0, val3 FROM KIT_RTD01 WHERE time > now() - 1d and time > now() - 0d',
        "SELECT time, id, val0, val1, val3, val4, val5, val9 FROM KIT_RTD01 WHERE time > '2018-08-01 10:00:00' and time < '2018-08-01 10:10:00' "
      ]
      const q = encodeURIComponent(query[1])
      const request = `${host}/query?u=${u}&p=${p}&db=${db[1]}&chunked=${c}&q=${q}`
      const response = await this.$axios.$get(request)
      // console.log('Response', response.results[0])
      const results = response.results[0]
  

      // const rPulseSeries = R.pluck('series')(rPulse)

      // const pulse = rPulse.series[0].values
      // console.log('PulseSeries', pulse)
      this.results = results
      // const rPulseSeriesTime = R.take(1, rPulse.series[0].values)

      // const rPulseTimestampUTC = R.take(1, rPulse.series[0].values[0])
      // console.log(rPulseTimestampUTC[0])
      // const local = moment(rPulseTimestampUTC).format('YYYY-MM-DD HH:mm:ss')
      // console.log(local)
      // const natural = moment(rPulseTimestampUTC[0]).format('MMMM Do YYYY, h:mm:ss a')
      // const relative = moment(rPulseTimestampUTC[0]).fromNow()

      // console.log("HELLO", relative, natural, "WORLD")

      /*  const sideA = []
      const resultA = R.forEach(
        x => sideA[R.take(1, x)]
      )(pulse) */

      /* const takeTime = x => R.take(1, x)
      const arrayTime = R.map(takeTime, pulse)
      console.log(arrayTime) */

      /* const realTime = x => moment(x[0]).format('MMMM Do YYYY, h:mm:ss a')
      const arrayRealTime = R.map(realTime, arrayTime)
      console.log(arrayRealTime) */

      // const selectID = x => R.path('tags.id', x)
      // const sensors = R.map(selectID, rPulse.series)
      // console.dir(sensors, "SENSORS")

      /* Send data to view */
      // this.items = rPulse.series
      // this.keys = rPulse.series.columns

      /* Reproduce in store */
      // this.sensors = sensors
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mother Earth Network',
  },
}
</script>
