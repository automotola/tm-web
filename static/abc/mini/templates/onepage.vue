<template lang="pug">
.panel
  section.hero.is-medium.is-fullheight
    template(v-if="content.hero === true")
      // Hero head: will stick at the top
      .hero-head
      // Hero content: will be in the middle
      .hero-body
        .container.has-text-centered
          h1.title
            | {{ brandName }}
          // h2.subtitle
            | Subtitle
          figure.image.is-128x128.is-inline-block
            img(src="~/assets/img/logo.png").spinning
          // maria-map(:data="data")
          // maria-table(:data="data")
      // Hero footer: will stick at the bottom
      .hero-foot
        nav.tabs
          .container
            // ul
              li.is-active
                a Overview
    template(v-else)
      .hero-head
      // Hero content: will be in the middle
      .hero-body
        .container.has-text-centered
          h1.title
            | {{ brandName }}
          // h2.subtitle
            | Subtitle
          figure.image.is-128x128.is-inline-block
            img(src="~/assets/img/logo.png").spinning
          // maria-map(:data="data")
          // maria-table(:data="data")
      // Hero footer: will stick at the bottom
      .hero-foot
        nav.tabs
          .container
            // ul
              li.is-active
                a Overview
</template>
<style>
.spinning {
  animation: rotate 30s infinite linear;
}
@keyframes rotate {
    100% {
        transform: rotateZ(360deg);
    }
}
</style>
<script>
import MariaTable from '~/components/molecules/MariaTable'
import MariaMap from '~/components/molecules/MariaMap'

export default {
  props: [
    'brandName',
    'data',
    'content'
  ],
  components: {
    MariaTable,
    MariaMap
  }
}
</script>
