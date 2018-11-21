<template>
  <div class="VueToNuxtLogo">
    <img :src="src" />
  </div>
</template>
<script>
export default {
  props: [
    'src'
  ]
}
</script>


<style>
.VueToNuxtLogo {
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 180px;
}
</style>

