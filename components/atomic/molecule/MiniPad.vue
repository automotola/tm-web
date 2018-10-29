<template lang="pug">
  .uk-panel
    section.hero.is-medium
      .hero-head
        .uk-container 
            article.uk-section.uk-text-center.uk-article.uk-height-small
              h3.uk-article-meta {{ story.title }}
              p.uk-text-lead {{ story.description }}
      .hero-body.uk-padding-remove-top
            .panel.uk-transition-slide-bottom-small
              tm-input(:story="story" @signature="checkSignature")
              tm-output(:setting="setting" :user="user")
            // .panel
              ul(uk-accordion='')
                li.uk-open
                  a.uk-accordion-title(href='#').uk-input
                    span.uk-icon(uk-icon='play') 
                  .uk-accordion-content.uk-textarea.uk-padding-remove.uk-margin-remove
                    ul.uk-tab(uk-tab='')
                      li.uk-active
                        a Users
                      li 
                        a Messages
                    ul.uk-switcher
                      li
                        dl.uk-description-list.uk-card.uk-card-body
                          template(v-for="user in users") 
                            dt {{ user.name }}
                            dd {{ user.role }}

                      li
                        dl.uk-description-list.uk-card.uk-card-body
                          template(v-for="pulse in stream") 
                            dt {{ pulse.time }}
                            dd {{ pulse.event }}

      .hero-foot
</template>
<style>
a.uk-accordion-title.uk-input::before {
    content: "";
    width: 1.4em;
    height: 1.4em;
    margin-top: 5px;
    margin-left: 10px;
    float: right;
    background-repeat: no-repeat;
    background-position: 50% 50%;
}

.uk-input span.uk-icon svg {
  margin-bottom: 2px;
}

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
import { mapActions } from 'vuex'

import TmInput from '~/components/tm/input'
import TmOutput from '~/components/tm/output'
import UkForm from '~/components/uikit/form'
import UkTable from '~/components/uikit/table'

import initMiniBot from '~/assets/js/bot-mini'
const R = require('rambda')

export default {
  components: {
    TmInput,
    TmOutput,
    UkForm,
    UkTable,
    // BotUI
  },
  props: [
    'story',
    'users',
    'user'
  ],
  data() {
    return {
      setting: {},
      stream: []
    }
  },
  methods: {
    ...mapActions({
      update: 'stream/update' // map `this.add()` to `this.$store.dispatch('increment')`
    }),
    checkSignature(setting) {
      // const account = this.createProfile()
      // const signal = this.createSignal()
      // const stream = this.createStream()
      console.log("SETTING", setting)
      // stream.push(pulse)
      // console.log("STREAM", stream)
      // this.$store.commit('stream/sync', e) 

      
      let profile = {}
      profile.name = setting.user
      profile.role = setting.role
      
      const user = this.user
      const users = this.users
      const findUser = a => a.name === user.name
      const userIndex = R.findIndex(findUser, users)
      console.log("FOUND USER", userIndex, user)

      let profileValues = R.values(profile)
      let state1 = R.contains(undefined, profileValues)  
      let state2 = R.contains('', profileValues) 
      let state3 = userIndex === 1

      let profileCompleted = !(state1 || state2 )
      let profileUnique = !(state3)

      const checkTrue = () => console.log("SEND")
      const checkFalse = () => console.log("DON'T")
      const setUser = (x) => {
        this.$store.commit('user/set', x) 
      }
      const addUser = (x) => {
        this.$store.commit('user/add', x)
      }
      // condition ? checkTrue() : checkFalse()
      profileCompleted ? setUser(profile) : null
      profileUnique ? addUser(profile) : null
      console.log("OLD USER", user)
      console.log("NEW USER", profile)

      let stream = this.stream
      this.setting = setting
      stream.push(setting)
      this.stream = stream
      
      // CREATE NEW SIGNAL
      // CREATE NEW STREAM WITH SIGNAL
      // UPDATE COMPONENT DATA

      // const Signs = this.$gun.get('mini/signs')
      // Signs.put(username)
      // Signs.set(Signs)
    },
    createProfile() {
      let profile = {}
      profile.name = this.setting.user
      profile.description = this.setting.role
      console.log("NEW PROFILE", profile)
      return profile
    },
    createSignal() {
      let signal = {}
      signal.from = this.story.activity[0].input
      signal.message = this.story.activity[1].input
      signal.context = this.story.activity[2].input
      signal.timeStamp = new Date()
      console.log("NEW SIGNAL", signal)
      return signal
    },
    updateSignal (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    updateStream(i) {
      let stream = this.stream
      stream.push(i)
      console.log("NEW STREAM", stream)
      return stream
    }
  },
  created: function() {
    console.log("MINIPAD CREATED:")
  },
  mounted: function() {
    this.$nextTick(function () {
      console.log("MINIPAD LOADED:")
      // initMiniBot()
    });
  }
}
</script>


