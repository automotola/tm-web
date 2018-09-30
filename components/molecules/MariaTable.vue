<template lang="pug">
.panel
  table.table.is-bordered.is-striped.is-narrow.is-hoverable.is-fullwidth 
    thead
      tr
        th
          abbr(title="Title") T 
    tfoot
      tr
        th
          abbr(title="Title") T 
    tbody
      tr 
        th 1
        td
          a(href="#" title="Title") Title
          strong C
        td 34
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
