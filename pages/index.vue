<template lang="pug">
.panel
  SignsHero(:content="content")
</template>
<script>
import SignsHero from '~/components/molecules/SignsHero'

export default {
  layout: 'abrie',
  components: {
    SignsHero,
  },
  created() {
    this.getItems()
  },
  methods: {
    async getItems() {
      const request = `https://raw.githubusercontent.com/athensinitiative/research/master/mini.md`
      const response = await this.$axios.$get(request)
      console.log(response)
      this.article = response
    }
  },
  data () {
    return {
      article: '',
      options: {
        graph: true,
        scene: true,
        field: true,
        location: true,
      },
      content: {
        hero: true,
        logo: true
      }
    }
  }
}
</script>
