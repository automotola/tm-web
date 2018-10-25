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
              .uk-caruk-placeholder.uk-padding-remove.rounded
                .uk-body 
                  pre {{ input }}
                  // .uk-overflow-auto
                    table.uk-table.uk-table-divider.uk-table-hover.uk-margin-remove.uk-table-responsive
                      thead
                        tr
                          th User Name
                      tbody
                        tr(v-for="user in users").rounded
                          td {{ user }}
            // .uk-caruk-card-secondary.rounded
              .uk-panel.uk-text-center
                template(v-for="symbol in state.symbology")
                  a.uk-button {{ symbol }}
            .uk-margin
              .uk-card
                .uk-panel.uk-inline.uk-width-1-1
                    .uk-width-1-1
                      template(v-if="input.type === 'global'")
                        button.uk-form-icon(uk-icon='world').uk-margin-small-left
                      template(v-else-if="input.type === 'social'")
                        button.uk-form-icon(uk-icon='social').uk-margin-small-left
                      template(v-else-if="input.type === 'personal'")
                        button.uk-form-icon(uk-icon='users').uk-margin-small-left
                      template(v-else)
                        button.uk-form-icon(uk-icon='user').uk-margin-small-left
                      div(uk-drop='pos: top-justify; boundary: .uk-width-1-1; boundary-align: true; mode: click')
                        .uk-card.uk-card-small.uk-card-body.uk-card-default.rounded
                          .uk-form-label
                          .uk-form-controls 
                            label(v-for="option in control.message")
                              input.uk-radio(type='radio', :name='"radio-" + option.name' :value="option.name" v-model="input.type" :checked="option.checked")
                              |  {{ option.name }}
                              br
                    span.uk-form-icon.uk-form-icon-flip.uk-margin-small-right
                      a.uk-icon-button(href='', uk-icon='check')
                    input.uk-form-large.uk-input.shadow.rounded(:placeholder="story[0].plot[0].call" type="text" v-model='input.message' @keyup.enter="handleSubmit")
            .uk-margin
              .uk-card
                .uk-grid-collapse(class='uk-child-width-1-4', uk-grid='')
                  template(v-for="symbol in symbols")
                    a.uk-margin-remove
                      .uk-tile.uk-padding-small.uk-text-center
                        i(:class="'icon' + ' ' + 'ion-ios-' + symbol")
      .hero-foot
</template>
<style scoped>
.uk-form-icon-flip~.uk-input {
  padding-right: 50px!important;
}
.uk-form-icon-flip~.uk-input {
  padding-left: 45px!important;
}
.uk-margin-small-right {
  margin-right: 5px!important;
}
.uk-margin-small-left {
  margin-left: 5px!important;
}
</style>

<script>
import { mapMutations } from 'vuex'
import UkForm from '~/components/uikit/form'
import VanillaForm from '~/components/vanilla/form'
export default {
  props: [
    'medium',
    'symbols',
    'user',
    'users'
  ],
  components: {
    UkForm,
    VanillaForm
  },
  data() {
    return {
      input: {
        message: '',
        type: ''
      },
      story: [
        {
          title: 'Mini + Signs',
          description: 'An example use case for MINI.',
          plot: [
            {
              call: "Write your message",
              type: "action"
            }
          ]
        }
      ],
      control: {
        message: [
          { 
            name: 'global',
            checked: 'checked'
          },
          { 
            name: 'social',
            checked: ''
          },
          { 
            name: 'personal',
            checked: ''
          },
          { 
            name: 'private',
            checked: ''
          }
        ],
      }
    }
  },
  computed: {
    origin() { return this.$store.state.account }
  },
  methods: {
    handleSubmit() {
      // Send data to the server or update your stores and such.
      console.log("ACCOUNT FORM SUBMITTED", this.input.message)
      // this.$store.commit('user/set', this.account)
    }
  }
  
}
</script>


