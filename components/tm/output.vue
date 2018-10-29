<template lang="pug">
.panel
  .card.uk-margin
    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="'https://ui-avatars.com/api/?name='+ user.name ", :alt="user.name+'`s ' + 'profile image'")
        .media-content
          p.title.is-5 {{ user.name }}
          p.subtitle.is-6 {{ user.role }}

</template>
<script>
export default {
  props: [
    'setting',
    'user'
  ]
}
</script>
