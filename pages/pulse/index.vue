<template lang="pug">
  organism(:option="option") {{ option }}
</template>
<script>
import organism from '~/components/organisms'
export default {
  layout: 'base',
  components: {
    organism
  },
  data: () => {
    return {
      option: 'none'
    }
  }
}
</script>

