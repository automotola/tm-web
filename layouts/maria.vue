<template lang="pug">
  .uk-background-secondary(uk-height-viewport)
    nuxt
</template>
<script>
console.log("MARIA CONTEXT PROCESS START", new Date().getUTCMilliseconds())
export default {
  data() {
    return {

    }
  },
  head: {
    title: 'A Social Ecodata Network ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "" }
    ],
  },
  created: () => {
    console.log("MARIA CONTEXT IS CREATED",  new Date().getUTCMilliseconds())
  },
  mounted: () => {
    console.log("MARIA CONTEXT IS MOUNTED", new Date().getUTCMilliseconds())
  },
}
console.log("MARIA CONTEXT PROCESS END", new Date().getUTCMilliseconds())
</script>
