<template lang="pug">
    div.uk-container
      app-logo(:src="brand.img")
      h1.title Maria
      h2.subtitle  The eco-data network of people and sensors.
</template>
<script>
import AppLogo from '~/components/custom/AppLogo.vue'

export default {
  auth: false,
  layout: 'universal',
  components: {
    AppLogo
  },
  data() {
    return {
      brand: {
        img: "img/logo.png"
      }
    }
  }
}
</script>
