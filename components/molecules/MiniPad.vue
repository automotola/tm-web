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
              .uk-card.rounded
                  .uk-body.uk-padding-small
                    #mini-bot
                      bot-ui
                    pre {{ input }}
                    .uk-margin-small(v-for="e in events")
                      pre {{ e }}
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
import Vue from 'vue'
import BotUI from 'botui/build/botui.js'
import 'botui/build/botui.min.css'
import 'botui/build/botui-theme-default.css'

const r = require('rambda')

export default {
  props: [
    'medium',
    'symbols',
    'user',
    'users'
  ],
  components: {
    UkForm,
    VanillaForm,
    BotUI
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
          title: 'Mini + Signs',
          description: 'An example use case for MINI.',
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
    initBot() {
      let botui = BotUI('mini-bot', { vue: Vue })
      botui.message.add({ content: 'Hello World from bot!' })
      .then(function () {
        botui.message.add({
          delay: 1000,
          human: true,
          content: 'Hello World from human!'
        })
      })
    },
    handleSubmit() {
      // Send data to the server or update your stores and such.
      console.log("ACCOUNT FORM SUBMITTED", this.input.message)
      // this.$store.commit('user/set', this.account)
      let signs = []
      const Signs = this.$gun.get('mini/signs')
      Signs.map().once(function(data, key){
        let sign = {}
        sign.text = data.name
        signs.push(sign);
      })

      this.events = signs
      console.log(signs)
    }
  },
  mounted: function() {
    this.$nextTick(function () {
      console.log("MINI PAD LOADED")
      this.initBot()
    });
  },
}
</script>


