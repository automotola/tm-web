<template lang="pug">
.panel MAP
</template>

<script>
export default {
    data: () => {
      return {
        records: {
          horizon: [
            1,2,3,4,5,6
          ]
        }
      }
    },
    created: () => {
        console.log("TABLE created:")
    },
    mounted: () => {
        console.log("TABLE mounted:")
    },
    updated: () => {
        console.log("TABLE updated:")
    }
}
</script>
