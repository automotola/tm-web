<template lang="pug">
  form(@submit.prevent="submit" :name="story.title" :action="story.action")
    .uk-width-1-1(v-for="action in story.activity").uk-margin-remove
      entry(:action="action" @signal="readSignal")
    .atom.uk-inline.uk-width-1-1
      span.uk-form-icon(uk-icon='play-circle')
      input.uk-input.uk-button(type="submit")
</template>
<style>
input[type="submit"] {
  text-align: left
}
</style>

<script>
import Entry from './entry'
import VueFormGenerator from "vue-form-generator"

export default {
  name: 'model',
  props: [
    'story'
  ],
  components: {
    "vue-form-generator": VueFormGenerator.component
  },
  data() {
    return {
      instance: {},
    }
  },
  components: {
    Entry
  },
  methods: {
    submit() {
      let instance = this.instance
      instance.type = this.story.name
      this.$emit('instance', instance )
    },
    readSignal(e) {
      console.log("GOT SIGNAL", e)
      let d = e.path[0]
      console.log("GOT DATA", d)
      let dataKeys = [
        'name',
        'value',
      ]
      console.log("THESE KEYS", dataKeys)
      let data = this.$mark.wasObject(dataKeys, d)
      console.log("ACTUAL DATA", data)
      let instance = this.recordData(data)
      console.log("STREAMING RECORD", instance)

      let eventKeys = [
        'type',
        'timeStamp',
        'isTrusted'
      ]
      let event = this.$mark.wasObject(eventKeys, e)
      let signal = this.recordEvent(event, instance)
      this.$store.commit('stream/signal', signal)
      console.log("STREAMING SIGNAL", signal)
      // this.$store.commit('stream/current', current)
    },
    recordData(data) {
      let last = this.instance
      let current = this.$mark.wasEntry(data.name, data.value)
      let next = this.$mark.wasObject(last, current)
      this.instance = next   
      return next
    },
    recordEvent(event, instance) {
      let signal = {}
      signal.source = event
      signal.value = instance
      signal.setting = this.story.title
      return signal
    }
  }
}
</script>

