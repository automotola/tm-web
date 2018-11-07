<template lang="pug">
melissa
</template>

<style>
#screen {
  max-height: 100vh;
  overflow-y: auto
}
</style>

<script>
import melissa from '~/components/prototype/melissa'
console.log("MARIA PAGE PROCESS START", new Date().getUTCMilliseconds())
export default {
  layout: 'maria',
  components: {
    melissa
  },
  created: () => {
    console.log("MARIA PAGE CREATED", new Date().getUTCMilliseconds())
  },
  mounted: () => {
    console.log("MARIA PAGE MOUNTED", new Date().getUTCMilliseconds())
  }
}
console.log("MARIA PAGE PROCESS END", new Date().getUTCMilliseconds())
</script>
