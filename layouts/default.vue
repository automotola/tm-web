<template>
  <div>
    <nuxt/>
  </div>
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
