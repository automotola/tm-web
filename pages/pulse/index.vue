<template lang="pug">
  organism(:options="options")
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

