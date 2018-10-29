<template lang="pug">
.molecule
  .atom.uk-inline.uk-width-1-1(v-if="call.type === 'text'")
    span.uk-form-icon(:uk-icon='call.symbol')
    input.uk-input(:name="call.name" :type="call.type" :placeholder="call.cue" v-model='entry' @keydown="signal" v-validate="call.valid")
  .atom.uk-inline.uk-width-1-1(v-else-if="call.type === 'option'")
    template(v-for="option in options" v-if="option.value === entry" )
      span.uk-form-icon( :uk-icon='option.symbol')
    select.uk-input.uk-select(:name="call.name" v-model='entry' @change="signal")
      option(v-for="option in options" :value="option.value" :disabled="option.disabled") {{ option.name }}
</template>
<script>
export default {
  props: [
    'call',
  ],
  data() {
    return {
      entry: undefined,
    }
  },
  methods: {
    signal(e) {
      this.$emit('signal', e)
    }
  },
  computed: {
    options() { return this.call.option }
  }
}
</script>
