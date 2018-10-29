<template lang="pug">
  .section
    .container
      slide(v-for="slide in slides" :key="slide.index" :content="slide.content") 
</template>
<script>
import slide from '~/components/presentation/slide'
export default {
  components: {
    slide
  },
  props: [
    'slides',
    'options'
  ]
}
</script>

