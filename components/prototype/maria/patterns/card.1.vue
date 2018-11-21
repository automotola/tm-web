<template lang="pug">
  div
    .uk-card.uk-card-default.uk-card-small.uk-card-body
      span(:uk-icon='card.icon')
      |  {{ card.value }}
      h3.uk-card-title {{ card.title }}
      progress.uk-progress.success(:value='card.value' :max='card.max')
</template>
<script>
export default {
  props: [
    'card'
  ]
}
</script>