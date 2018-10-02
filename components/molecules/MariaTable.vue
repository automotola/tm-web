<template lang="pug">
.panel
  .has-background-light
    table.table.is-bordered.is-striped.is-narrow.is-hoverable.is-fullwidth 
      thead
        tr
          th(v-for="column in data.columns")
            abbr(title="Title") {{ column }} 
      tfoot
        tr
          th(v-for="column in data.columns")
            abbr(title="Title") {{ column }} 
      tbody
        tr(v-for="values in data.values")
          td(v-for="value in values") {{ value }}
</template>

<script>
export default {
  props: [
    'data'
  ],
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
