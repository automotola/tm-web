<template lang="pug">
  #base
    header
      maria-nav(:brandName="brandName")
    main
      nuxt
</template>

<script>
import MariaNav from '~/components/molecules/MariaNav'
export default {
  components: {
    MariaNav
  },
  data () {
    return {
      brandName: 'Maria Network',
    }
  }
}
</script>

