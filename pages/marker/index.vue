<template lang="pug">
  navbar(:i="brand")
</template>
<script>
import navbar from "~/components/pure/bulma/navbar"
export default {
  layout: 'melissa',
  components: {
    navbar
  },
  data: function() {
    return {
      brand: {
        logo: {
          source: 'https://scontent-amt2-1.cdninstagram.com/vp/5710316f2856b60e4837a01dda48f628/5C6BC27D/t51.2885-19/s150x150/43025534_340578996690957_5974282625219559424_n.jpg',
          target: '#'
        }
      }
    }
  }
}
</script>
