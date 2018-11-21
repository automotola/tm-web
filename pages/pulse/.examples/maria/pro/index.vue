<template lang="pug">
  .uk-panel.uk-background-secondary(uk-height-viewport).uk-grid
    .uk-panel
    panel(:list="list[1]").uk-panel
    .uk-card.uk-card-body.uk-card-secondary.uk-width-expand
      a Professional
</template>
<script>
import AppLogo from '~/components/custom/AppLogo'
import Panel from '~/components/patterns/panel'

export default {
  layout: 'dashboard',
  components: {
    AppLogo,
    Panel
  },
  data() {
    return {
      list: [
        { 
          type: 'links',
          columns: [
            'label',
            'endpoint'
          ] 
        },
        [
          'Overview', 
          'Stats', 
          'Sensors',
          'Subscribers',
          'Settings'
        ]
      ]
    }
  }
}
</script>