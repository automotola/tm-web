<template lang="pug">
  .uk-background-muted(uk-height-viewport).uk-flex.uk-flex-center.uk-flex-middle
    nuxt
</template>

<style>
.rotated {
  animation: rotate 2s infinite;
}
.idwh {
  width: 383px;
  height: auto;
}
.idwv {
  width: 240px;
  height: auto;
}
.idhh {
  height: 240px;
  width: auto;
}
.idhv {
  height: 383px;
  width: auto;
}
@keyframes rotate {
    100% {
        transform: rotateY(180deg);
    }
}
</style>
