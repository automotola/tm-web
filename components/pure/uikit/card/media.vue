<template lang="pug">
  .uk-card-media
    template(v-if="item.name === 'marker-output'")
      canvas(:id="item.name")
</template>
<script>
export default {
  props: [
    'item'
  ]
}
</script>

