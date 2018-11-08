<template lang="pug">
  .uk-panel
    section.hero.is-medium
      .hero-head
        .uk-container 
            article.uk-section.uk-text-center.uk-article
              h3.uk-article-meta {{ story.name }}
              p.uk-text-lead {{ story.description }}
      .hero-body.panel.uk-padding-remove-top
            .panel
              model(:story="story" @instance="createStatement").uk-transition-slide-bottom-small
            .panel
              content-loader.uk-background-muted(v-if='output === undefined', :speed='2', :animate='true', primaryColor="#f3f3f3", secondaryColor="#ecebeb", :height="103", :width="299")
                rect(x='86', y='28', rx='3', ry='3', width='128.64', height='7.42')
                rect(x='50', y='47', rx='3', ry='3', width='201', height='7.42')
                rect(x='50', y='68', rx='3', ry='3', width='201', height='7.42')
              instance(v-else :story="story" :output="output" :user="user")
      .hero-foot
</template>
<script>
import { ContentLoader } from 'vue-content-loader';

import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

import Model from './model'
import Instance from './instance'


import initMiniBot from '~/assets/js/bot-mini'
const R = require('rambda')

export default {
  components: {
    Model,
    Instance,
    ContentLoader
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
      output: undefined
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


