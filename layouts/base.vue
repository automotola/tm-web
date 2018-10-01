<template lang="pug">
  #base
    header
      navigation(:brandName="brandName")
    main
      nuxt(:brandName="brandName")
</template>

<script>
import navigation from '~/components/molecules/navigation'
export default {
  components: {
    navigation
  },
  data () {
    return {
      brandName: 'Maria Network',
    }
  }
}
</script>

