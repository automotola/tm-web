<template lang="pug">
.panel
  ul.uk-subnav.uk-subnav-pill(uk-switcher='')
    li
      a(href='#') Mini + Signs
    li
      a(href='#') Documentation
  ul.uk-switcher.uk-margin
    li Use Case
      mini(:content="content" :medium="'mini'")
    li Documentation
      vue-markdown {{ article }}
</template>
<script>
import mini from '~/components/templates/mini'
import VueMarkdown from 'vue-markdown'
import miniDocs from '~/static/md/ai/mini.md';

export default {
  layout: 'abrie',
  components: {
    mini,
    VueMarkdown
  },
  computed: {
    article() {
      return miniDocs
    }
  },
  data () {
    return {
      options: {
        graph: true,
        scene: true,
        field: true,
        location: true,
      },
      content: {
        hero: true,
        logo: false,
        article: `i am a ~~tast~~ **test**.`
      }
    }
  }
}
</script>
