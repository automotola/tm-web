<template lang="pug">
  organism(:options="options") {{ option }}
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
      options: null
    }
  }
}
</script>

