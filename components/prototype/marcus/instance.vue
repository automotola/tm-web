<template lang="pug">
  .card.rounded-lg
    .card-content.is-paddingless(v-if="story.type === 'profile'")
      article.message.is-small
        .message-header
          .uk-grid-small.uk-flex-middle(uk-grid='')
            .uk-width-auto
              img.uk-border-circle(width='40', height='40', :src="'https://ui-avatars.com/api/?name='+ output.name ")
            .uk-width-expand
              ul
                li {{ output.name }}
                  dl.uk-description-list
                    dd {{ output.role }}
        .message-body
          progress#js-progressbar.uk-progress.is-marginless(value='10', max='100')
    .card-content.is-paddingless(v-else-if="story.type === 'message'")
      article.message.is-small
            .message-header(v-if="user.name !== null")
              p {{ output.domain }}
              button.delete.is-small(aria-label='delete')
            .message-body {{ output.message }}
              .level.is-mobile
                .level-left {{ output.time }}
                .level-right
                  span.tag {{ output.domain }}
    .card-content.is-paddingless(v-else-if="story.type === 'profile'")
      .uk-card.uk-card-default(class='uk-width-1-2@m')
        // .uk-card-media-top
          img(src='https://placeholdit.co//i/385x243?&bg=black&fc=white&text=text', alt='')
        .uk-card-header
          .uk-grid-small.uk-flex-middle.uk-text-center(uk-grid='')
            // .uk-width-1-1
              img.uk-border-circle(width='40', height='40', :src="'https://ui-avatars.com/api/?name='+ output.name ")
            .uk-width-1-1
              dl
                dt {{ output.type }}
                dd {{ output.name }}
                dd {{ output.email }}
                dd {{ output.geo }}
    .card-content.is-paddingless(v-else)
      .uk-card.uk-card-default(class='uk-width-1-2@m')
        .uk-card-header
          .uk-grid-small.uk-flex-middle.uk-text-center(uk-grid='')
            // .uk-width-1-1
              img.uk-border-circle(width='40', height='40', :src="'https://ui-avatars.com/api/?name='+ output.name ")
            .uk-width-1-1
              dl
                dt {{ output.type }}
                dd {{ output.name }}
                dd {{ output.email }}
                dd {{ output.geo }}


</template>
<script>
export default {
  name: 'instance',
  props: [
    'output',
    'story',
    'user'
  ],
  mounted: function() {
    console.log("OBJECT INSTANCE LOADED")
  }
}
</script>
