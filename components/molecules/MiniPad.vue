<template lang="pug">
  .uk-panel
    section.hero.is-medium.is-large
      .hero-head
        .uk-container.uk-padding-top
            article.uk-section.uk-text-center.uk-article.uk-height-small
              h3.uk-article-meta {{ story.title }}
              p.uk-text-lead {{ story.description }}
      .hero-body.uk-padding-remove-top
            .uk-margin
              .uk-margin-small(v-for="call in story.actions")
                  .uk-panel.uk-inline.uk-width-1-1
                    // #one.uk-width-1-1
                      template(v-if="input.type === 'global'")
                        button.uk-form-icon.uk-form-icon-flip(uk-icon='world').uk-margin-small-right
                      template(v-else-if="input.type === 'social'")
                        button.uk-form-icon.uk-form-icon-flip(uk-icon='social').uk-margin-small-right
                      template(v-else-if="input.type === 'personal'")
                        button.uk-form-icon.uk-form-icon-flip(uk-icon='users').uk-margin-small-right
                      template(v-else)
                        button.uk-form-icon.uk-form-icon-flip(uk-icon='user').uk-margin-small-right
                      div(uk-drop='pos: top-justify; boundary: #one; boundary-align: true; mode: click; offset: 0')
                        .uk-card.uk-card-small.uk-card-body.uk-card-default.rounded.uk-height-small.uk-flex.uk-flex-middle
                          .uk-form-label
                          .uk-form-controls 
                            label(v-for="option in story.control.message")
                              input.uk-radio(type='radio', :name='"radio-" + option.name' :value="option.name" v-model="input.type" :checked="option.checked")
                              |  {{ option.name }}
                              br
                    span.uk-form-icon.uk-margin-small-left(:uk-icon='call.symbol')
                    input.uk-form-large.uk-input.shadow.rounded(:placeholder="call.label" type="text" v-model='call.input' @keyup.enter="handleSubmit")
            .uk-margin
              .uk-card.uk-card-body.uk-padding-remove
                .uk-panel
                  ul.uk-subnav.uk-subnav-pills(uk-tab="connect: #display")
                    // li
                      a(href='#Message') Data
                    li
                      a(href='#Messages')
                        template(v-if="events.length === 0") 
                          span {{ 'Messages' }}
                        template(v-else-if="events.length === 1")
                          span {{ events.length + ' Message'}}
                        template(v-else)
                          span {{ events.length + ' Messages'}}
                    li
                      a(href='#Members')
                        template(v-if="users.length === 0") 
                          span {{ 'Member' }}
                        template(v-else-if="users.length === 1")
                          span {{ users.length + ' Member'}}
                        template(v-else)
                          span {{ users.length + ' Members'}}
                  ul.uk-switcher.uk-margin#display
                    // li
                        pre.uk-height-small {{ events }}
                    li
                        .uk-overflow-auto.uk-height-medium
                          table.uk-table.uk-tsable-small.uk-table-divider.uk-table-hover.uk-margin-remove
                            thead
                              tr
                                th Message
                                th From
 
                            tbody
                              tr(v-for="e in events").rounded
                                td {{ e.message }}
                                td {{ e.from }}

                    li
                        .uk-overflow-auto.uk-height-medium
                          table.uk-table.uk-tsable-small.uk-table-divider.uk-table-hover.uk-margin-remove
                            thead
                              tr
                                th Username
                            tbody
                              tr(v-for="user in users").rounded
                                td {{ user.name }}
      .hero-foot
</template>
<style scoped>
.uk-form-large:not(textarea):not([multiple]):not([size]) {
  padding-right: 45px!important;
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
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
</style>

<script>
import { mapMutations } from 'vuex'
import UkForm from '~/components/uikit/form'
import VanillaForm from '~/components/vanilla/form'
import initMiniBot from '~/assets/js/bot-mini'
const r = require('rambda')

export default {
  components: {
    UkForm,
    VanillaForm,
    // BotUI
  },
  props: [
    'story',
    'users'
  ],
  data() {
    return {
      input: {
        message: '',
        type: ''
      },
      events: [

      ]
    }
  },
  methods: {
    handleSubmit() {
      // Send data to the server or update your stores and such.
      let signal = {}

      
      signal.from = this.story.actions[0].input
      signal.message = this.story.actions[1].input
      signal.time = new Date()
      // signal.type = this.input.type

      console.log("NEW SIGNAL", signal)
      const story = this.events
      console.log("OLD STORY", story)
      story.push(signal)
      console.log("NEW STORY",story)
      this.events = story

      let username = {
        name: this.story.actions[0].input
      }

      this.$store.commit('user/set', username)
      const Signs = this.$gun.get('mini/signs')
      const Mini = this.$gun.get('mini/athens')
      Signs.put(username)
      Mini.set(Signs)


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


