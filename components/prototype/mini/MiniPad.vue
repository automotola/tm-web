<template lang="pug">
  .uk-panel
    section.hero.is-medium
      .hero-head
        .uk-container 
            article.uk-section.uk-text-center.uk-article
              h3.uk-article-meta {{ story.name }}
              p.uk-text-lead {{ story.description }}
      .hero-body.panel.uk-padding-remove-vertical
            .panel
              model(:story="story" @instance="createStatement").uk-transition-slide-bottom-small
            .panel
              object(:story="story" :output="output" :user="user")
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

import Model from '~/components/tm/model'
import Object from '~/components/tm/object'
import UkForm from '~/components/uikit/form'
import UkTable from '~/components/uikit/table'

import initMiniBot from '~/assets/js/bot-mini'
const R = require('rambda')

export default {
  components: {
    Model,
    Object,
    UkForm,
    UkTable,
    // BotUI
  },
  props: [
    'stream',
    'story',
    'users',
    'user'
  ],
  data() {
    return {
      output: {}
    }
  },
  methods: {
/*     ...mapActions({
      update: 'stream/update' // map `this.add()` to `this.$store.dispatch('increment')`
    }), */
    createStatement(input) {
      this.output = input
    },
    createProfile(input) {
      let profile = {}
      profile.name = input.user
      profile.role = input.role
      return profile
      console.log("PROFILE CREATED", profile)
    },
    checkSignature(input) {

  /*     const user = this.user
      const users = this.users

      const findUser = a => a.name === user.name

      const inputValues = R.values(input)
      const inputKeys = R.values()
      const check1 = R.contains(undefined, inputValues)  
      const check2 = R.contains('', inputValues) 
      const check3 = R.findIndex(findUser, users) === 1
      const hasUser = R.contains('user', inputValues)
      const hasRole = R.contains('role', inputValues)
      const hasMessage = R.contains('message', inputValues)
      const hasContext = R.contains('context', inputValues) 

      const setUser = (x) => this.$store.commit('user/set', x)
      const addUser = (x) => this.$store.commit('user/add', x)

      let profile = {}
      console.log("USER:", hasUser)
      hasUser ? (checkTrue) : checkFalse
      console.log("PROFILE", profile, input, inputValues)

      hasMessage ? message = this.createMessage(input) : null
      hasContext ? context = this.createContext(input) : null

      const addEvent = (x) => this.$store.commit('stream/update', x)

      const profileCompleted = !( check1 || check2 )
      const profileUnique = !( check1 || check2 || check3 )
      profileCompleted ? setUser(profile) : null
      profileUnique ? addUser(input) : null */
      
      
      // condition ? checkTrue() : checkFalse()


      // CREATE NEW SIGNAL
      // CREATE NEW STREAM WITH SIGNAL
      // UPDATE COMPONENT DATA

      // const Signs = this.$gun.get('mini/signs')
      // Signs.put(username)
      // Signs.set(Signs)
    }
  }
}
</script>


