<template lang="pug">
.panel
  mini-hero(:brandName="brandName" :content="content")
</template>
<style>
.spinning {
  animation: rotate 30s infinite linear;
}
@keyframes rotate {
    100% {
        transform: rotateZ(360deg);
    }
}
</style>
<script>
import MiniHero from '~/components/molecules/MiniHero'

export default {
  props: [
    'brandName',
    'data',
    'content'
  ],
  components: {
    MiniHero
  }
}
</script>
