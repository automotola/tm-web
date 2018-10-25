<template lang="pug">
  .uk-background-muted(uk-height-viewport).uk-flex.uk-flex-center.uk-flex-top
    nuxt
</template>

<style>
.rotated {
  animation: rotate 2s infinite;
}
@keyframes rotate {
    100% {
        transform: rotateY(180deg);
    }
}
</style>
