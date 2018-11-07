<template lang="pug">
.panel
  maria-hero(:brandName="brandName" :content="content")
  maria-map
  .uk-panel(v-for="i in data")
    maria-chart(:datum="i" :key="i.index")
    maria-table(:data="i" :key="i.index").uk-overflow-auto
  footer.footer
    .content.has-text-centered
      p
        strong {{ brandName }}
</template>
<style>
.spinning {
  animation: rotate 30s infinite linear;
}
@keyframes rotate {
    100% {
        transform: rotateZ(360deg);
    }
}
</style>
<script>
import MariaChart from '~/components/atomic/molecules/MariaChart'
import MariaMap from '~/components/atomic/molecules/MariaMap'
import MariaTable from '~/components/atomic/molecules/MariaTable'
import MariaHero from '~/components/atomic/molecules/MariaHero'

export default {
  layout: 'abrie',
  props: [
    'brandName',
    'data',
    'content'
  ],
  components: {
    MariaChart,
    MariaMap,
    MariaTable,
    MariaHero
  }
}
</script>
