<template lang="pug">
  nuxt
</template>
<script>
export default {
  data() {
    return {

    }
  },
  head: {
    title: 'Machine Insight Network Interpreter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "" }
    ],
  },
  created: () => {
    console.log("MINI LAYOUT CREATED")
  }
}
</script>
