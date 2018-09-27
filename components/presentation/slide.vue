<template lang="pug">
  .box
    .content 
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
