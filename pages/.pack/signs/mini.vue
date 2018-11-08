<template lang="pug">
.panel
  .uk-grid-collapse(class='uk-child-width-expand@s', uk-grid='', uk-height-viewport)
    .uk-panel.uk-background-primary.uk-light.uk-flex.uk-flex-center
      // .uk-padding-small
        ul.uk-subnav(uk-tab="connect: #screen")
          li
            a(href='#') Account
      // ul.uk-switcher#screen
        li
      marcus.uk-width-large
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
  layout: 'mini',
  components: {
    marcus
  }
}
console.log("MINI PAGE LOADED", new Date().getUTCMilliseconds())
</script>
