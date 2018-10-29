<template lang="pug">
  form(@submit.prevent @click.prevent="sign")
    .uk-width-1-1(v-for="action in story.activity").uk-margin-remove
      entry(:action="action" @signal="set")
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
import Entry from '~/components/pure/entry'
const R = require('rambda')
const I = require('uuid/v1')
const T = require('moment')

export default {
  name: 'input-tm',
  props: [
    'story'
  ],
  data() {
    return {
      input: {}
    }
  },
  components: {
    Entry
  },
  mounted: () => {
    console.log("ENTRY MOUNTED!")
  },
  methods: {
    set(e) { 
      console.log("SUBMITTED", e)
      let init = this.init
      let input = this.input
      let thread = { [e.target.name] : e.target.value }
      input === null ? input = init : input = R.merge(input, thread)
      this.input = input
      return e
    },
    sign() {
      let input = this.input
      let time = new Date().getTime()
      let id = I()
      input.time = time
      input.id = id
      this.$emit('signature', input)
    }
  },
  computed: {
    init() {
      let list = this.story.activity
      const output = {}
      const input = R.forEach(
        x => output[`${x.name}`] = null
      )(list)
      return output
    }
  }
}
</script>

