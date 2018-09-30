<template lang="pug">
  .panel
    vue-markdown {{ content }}
</template>
<script>
import VueMarkdown from 'vue-markdown'
export default {
  components: {
    VueMarkdown
  },
  props: [
    'content'
  ]
}
</script>
