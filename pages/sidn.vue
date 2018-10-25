<template lang="pug">
.uk-panel
  .uk-grid-collapse(class='uk-child-width-expand@s', uk-grid='', uk-height-viewport)
    .uk-panel.uk-background-primary.uk-light
      .uk-padding-small
        ul.uk-subnav(uk-tab="connect: #screen")
          li
            a(href='#') Account
      ul.uk-switcher.uk-margin#screen
        li
          mini(:content="content")
    .uk-panel.uk-background-muted.uk-padding#screen
      article(v-html="$md.render(article)" uk-overflow-auto)
</template>
<style>
#screen {
  max-height: 100vh;
  overflow-y: auto
}
</style>

<script>
import mini from '~/components/templates/mini'

export default {
  layout: 'melissa',
  components: {
    mini,
  },
  created() {
    this.getItems()
  },
  methods: {
    async getItems() {
      const request = `https://raw.githubusercontent.com/athensinitiative/research/master/mini.md`
      const response = await this.$axios.$get(request)
      this.article = response
      console.dir("ARTICLE LOADED")
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
        logo: false
      }
    }
  }
}
</script>
