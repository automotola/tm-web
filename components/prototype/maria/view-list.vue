<template lang="pug">
  table.uk-table.uk-table-divider.uk-margin-remove.uk-table-hover.uk-table-small
    thead
      tr
        th(v-for="key in data.keys") {{ key }}
    tbody
      tr(v-for="row in data.rows")
        td(v-for="column in row") {{ column }}

</template>
<script>
export default {
  props: [
    'data'
  ]
}
</script>
