<template lang="pug">
  .uk-panel
    section.hero.is-medium.is-large
      .hero-head
        .uk-container
          article.uk-section
            h3 {{ story.title }}
            p {{ story.description }}
      .hero-body.uk-padding-remove
          .uk-container
            .uk-margin
              .uk-card.uk-card-default.rounded-lg.uk-background-default.uk-dark
                .uk-padding-top
                  uk-form(:action="control.session.update")
            .uk-margin
              .uk-card.uk-placeholder.uk-padding-remove.rounded-lg
                .uk-body 
                  pre {{ users }}
                  .uk-overflow-auto
                    table.uk-table.uk-table-divider.uk-table-hover.uk-margin-remove.uk-table-responsive
                      thead
                        tr
                          th User Name
                      tbody
                        tr(v-for="user in users").rounded-lg
                          td {{ name }}
            // .uk-card.uk-card-secondary.rounded-lg
              .uk-panel.uk-text-center
                template(v-for="symbol in state.symbology")
                  a.uk-button {{ symbol }}
            .uk-margin
              .uk-card
                .uk-panel.uk-text-center.uk-inline.uk-width-1-1
                  // span.uk-form-icon(uk-icon='comment')
                  a.uk-form-icon.uk-form-icon-flip(href='', uk-icon='push')
                  input.uk-form-large.uk-input.shadow.rounded-lg(:placeholder="state.script" type="text")
            .uk-margin
              .uk-card
                .uk-grid-collapse(class='uk-child-width-1-4', uk-grid='')
                  template(v-for="symbol in symbols")
                    a.uk-margin-remove
                      .uk-tile.uk-padding-small.uk-text-center
                        i(:class="'icon' + ' ' + 'ion-ios-' + symbol")
      .hero-foot
</template>

<script>
import { mapMutations } from 'vuex'
import UkForm from '~/components/uikit/form'
export default {
  props: [
    'medium',
    'symbols',
    'user',
    'users'
  ],
  components: {
    UkForm
  },
  data() {
    return {
      story: {
        title: 'Mini + Signs',
        description: 'An example use case for MINI.',
      },
      state: {
        initial: 'Hello!',
        script: 'Send a message..',
        symbology: null,
      },
      control: {
        session: {
          update: "Update Session"
        }
      }
    }
  },
  computed: {
    origin() { return this.$store.state.user }
  },
  methods: {
    updateMiniUser (e) {
      this.$store.commit('user/update', e.target.value)
    },
    ...mapMutations({
      update: 'todos/toggle'
    })
  } 
}
</script>


