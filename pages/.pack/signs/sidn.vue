<template lang="pug">
.uk-panel
  .uk-grid-collapse(class='uk-child-width-expand@s', uk-grid='', uk-height-viewport)
    .uk-panel.uk-background-primary.uk-light
      //.uk-padding-small
        ul.uk-subnav(uk-tab="connect: #screen")
          li
            a(href='#') Account
      // ul.uk-switcher.uk-margin#screen
        li
      marcus
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
import marcus from '~/components/prototype/marcus'

export default {
  layout: 'melissa',
  components: {
    marcus
  },
  created() {
    this.getItems()
  },
  methods: {
    async getItems() {
      const urlSigns = `https://raw.githubusercontent.com/athensinitiative/research/master/signs.md`
      const urlMini = `https://raw.githubusercontent.com/athensinitiative/research/master/mini.md`
      const docsMini = await this.$axios.$get(urlMini)
      const docsSigns = await this.$axios.$get(urlSigns)
      this.article = docsMini
      console.dir("ARTICLE LOADED", docsMini)
    }
  },
  data () {
    return {
      article: '',
    }
  }
}
</script>
