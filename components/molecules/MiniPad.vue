<template lang="pug">
  .uk-panel
    section.hero.is-medium.is-large
      .hero-head
        .uk-container
          article.uk-section
            h3 {{ story[0].title }}
            p {{ story[0].description }}
      .hero-body.uk-padding-remove
          .uk-container
            .uk-margin
              .uk-card.rounded
                  .uk-card-body.uk-padding-remove
                    pre {{ input }}
            .uk-margin
              .uk-overflow-auto
                    table.uk-table.uk-table-divider.uk-table-hover.uk-margin-remove.uk-table-responsive
                      thead
                        tr
                          th Time
                          th Message
                      tbody
                        tr(v-for="e in events").rounded
                          td {{ e.time }}
                          td {{ e.message }}
            // .uk-caruk-card-secondary.rounded
              .uk-panel.uk-text-center
                template(v-for="symbol in state.symbology")
                  a.uk-button {{ symbol }}
            .uk-margin
              .uk-card
                .uk-panel.uk-inline.uk-width-1-1
                  template(v-if="input.type === 'global'")
                    button.uk-form-icon(uk-icon='world').uk-margin-small-left
                  template(v-else-if="input.type === 'social'")
                    button.uk-form-icon(uk-icon='social').uk-margin-small-left
                  template(v-else-if="input.type === 'personal'")
                    button.uk-form-icon(uk-icon='users').uk-margin-small-left
                  template(v-else)
                    button.uk-form-icon(uk-icon='user').uk-margin-small-left
                  #two.uk-width-1-1
                    button.uk-form-icon.uk-form-icon-flip.uk-margin-small-top.uk-margin-small-right.uk-icon-button(href='', uk-icon='check')
                    div(uk-drop='pos: top-justify; boundary: #two; boundary-align: true; mode: click')
                      .uk-card.uk-card-small.uk-card-body.uk-card-default.rounded.uk-height-medium.uk-flex.uk-flex-middle
                          .uk-form-label
                          .uk-form-controls 
                            label(v-for="option in control.message")
                              input.uk-radio(type='radio', :name='"radio-" + option.name' :value="option.name" v-model="input.type" :checked="option.checked")
                              |  {{ option.name }}
                              br
                  input.uk-form-large.uk-input.shadow.rounded(:placeholder="story[0].plot[0].call" type="text" v-model='input.message' @keyup.enter="handleSubmit")
            // .uk-margin
              .uk-card
                .uk-grid-collapse(class='uk-child-width-1-4', uk-grid='')
                  template(v-for="symbol in symbols")
                    a.uk-margin-remove
                      .uk-tile.uk-padding-small.uk-text-center
                        i(:class="'icon' + ' ' + 'ion-ios-' + symbol")
      .hero-foot
</template>
<style scoped>
.uk-form-large:not(textarea):not([multiple]):not([size]) {
  padding-right: 50px!important;
}
.uk-form-large:not(textarea):not([multiple]):not([size]) {
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
import initMiniBot from '~/assets/js/bot-mini'
const r = require('rambda')

export default {
  props: [
    'medium',
    'symbols',
    'users'
  ],
  components: {
    UkForm,
    VanillaForm,
    // BotUI
  },
  data() {
    return {
      input: {
        message: '',
        type: ''
      },
      events: [

      ],
      story: [
        {
          title: 'Messaging',
          description: 'Write a message!',
          plot: [
            {
              call: "Write your message",
              type: "action"
            }
          ],
          events: []
        },
        {
          title: 'Privacy',
          description: 'Select your level of privacy.',
          plot: [
            {
              call: "Write your message",
              type: "action"
            }
          ],
          events: []
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
            checked: 'unchecked'
          },
          { 
            name: 'personal',
            checked: 'unchecked'
          },
          { 
            name: 'private',
            checked: 'unchecked'
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
      let signal = {}
      signal.from = this.user
      signal.time = new Date()
      signal.message = this.input.message
      signal.type = this.input.type

      console.log("NEW SIGNAL", signal)
      const story = this.events
      console.log("OLD STORY", story)
      story.push(signal)
      console.log("NEW STORY",story)

      // this.$store.commit('user/set', this.account)
      const Signs = this.$gun.get('mini/signs')
      Signs.map().once(function(data, key){
        let sign = {}
        sign.text = data.name
        signs.push(sign);
      })
    }
  },
  mounted: function() {
    this.$nextTick(function () {
      console.log("MINI PAD LOADED")
      console.log("MINI BOT LOADED")
      initMiniBot()
    });
  },
}
</script>


