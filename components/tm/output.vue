<template lang="pug">
.card
  .card-content
    .media
      .media-content
        p.title.is-5 {{ setting.user }}
        p.subtitle.is-6 {{ setting.role }}
    .content
    | {{ setting.message }}
    
    br
    time(:datetime="setting.time") {{ setting.time }}
    br 
    span(v-show="setting.context !== undefined") {{ "#" + setting.context}}
  footer.card-footer
    a.card-footer-item(href='#') Save
    a.card-footer-item(href='#') Edit
    a.card-footer-item(href='#') Delete

</template>
<script>
export default {
  props: [
    'setting'
  ]
}
</script>
