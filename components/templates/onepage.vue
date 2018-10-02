<template lang="pug">
.panel
  maria-hero(:brandName="brandName" :content="content")
  maria-map
  maria-table(v-for="i in data" :data="i" :key="i.index")
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
import MariaTable from '~/components/molecules/MariaTable'
import MariaMap from '~/components/molecules/MariaMap'
import MariaHero from '~/components/molecules/MariaHero'

export default {
  props: [
    'brandName',
    'data',
    'content'
  ],
  components: {
    MariaTable,
    MariaMap,
    MariaHero
  }
}
</script>
