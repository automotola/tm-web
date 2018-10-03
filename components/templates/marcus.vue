<template lang="pug">
.panel
  maria-hero(:brandName="brandName" :content="content")
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
import MariaHero from '~/components/molecules/MariaHero'

export default {
  props: [
    'brandName',
    'data',
    'content'
  ],
  components: {
    MariaHero,
  }
}
</script>
