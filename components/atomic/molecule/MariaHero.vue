<template lang="pug">
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
            img(src="~/assets/img/logo.png")
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
            | Mother Earth Network
          // h2.subtitle
            | Subtitle
          //figure.image.is-128x128.is-inline-block
            img(src="~/assets/img/logo.png").spinning
          graph
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
<script>
import Graph from '~/components/atomic/organism/graph'
export default {
  props: [
    'brandName',
    'content'
  ],
  components: {
    Graph
  }
}
</script>

