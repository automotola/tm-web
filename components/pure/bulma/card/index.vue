<template lang="pug">
.card
  .card-image(v-if="image")
    figure.image.is-4by4
      img(:src='image', alt='Placeholder image')
  .card-content(v-if="content")
    // .media
      .media-left
        figure.image.is-48x48
          img(src='https://bulma.io/images/placeholders/96x96.png', alt='Placeholder image')
      .media-content
        p.title.is-4 John Smith
        p.subtitle.is-6 @johnsmith
    .content {{ content.text }}
      // a @bulmaio
      br
      a(href='#' v-for="tag in content.tags") {{ '#' + tag + " " }}
      br
      time(datetime='2016-1-1') {{ new Date() }}

</template>
<script>
export default {
  props: [
    'content',
    'image'
  ]
}
</script>
