<template lang="pug">
.panel
  SignsHero(:content="content")
</template>
<script>
import SignsHero from '~/components/prototype/signs/SignsHero'

export default {
  layout: 'abrie',
  components: {
    SignsHero,
  },
  data () {
    return {
      content: {
        hero: true,
        logo: true
      }
    }
  }
}
</script>
