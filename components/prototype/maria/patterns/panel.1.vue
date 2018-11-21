<template lang="pug">
  .uk-panel.uk-padding-small.uk-width-small
      h1.uk-text-meta Dashboard
      .uk-divider-small
      ul.uk-list
        li(v-for="item in list")
          a(href="#") {{ item }}
</template>
<script>
export default {
  props: [
    'list'
  ]
}
</script>
