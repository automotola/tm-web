<template lang="pug">
.molecule
  .atom.uk-inline.uk-width-1-1(v-if="action.type === 'text'")
    span.uk-form-icon(:uk-icon='action.symbol')
    input.uk-input(:name="action.name" :type="action.type" :placeholder="action.cue" v-model='entry' @change="signal" v-validate="action.valid")
  .atom.uk-inline.uk-width-1-1(v-if="action.type === 'email'")
    span.uk-form-icon(:uk-icon='action.symbol')
    input.uk-input(:name="action.name" :type="action.type" :placeholder="action.cue" v-model='entry' @change="signal" v-validate="action.valid")
  .atom.uk-inline.uk-width-1-1(v-else-if="action.type === 'option'")
    template(v-for="option in options" v-if="option.value === entry" )
      span.uk-form-icon( :uk-icon='option.symbol')
    select.uk-input.uk-select(:name="action.name" v-model='entry' @change="signal")
      option(v-for="option in options" :value="option.value" :disabled="option.disabled") {{ option.name }}
</template>
<script>
export default {
  props: [
    'action',
  ],
  data() {
    return {
      entry: '',
    }
  },
  methods: {
    signal(e) {
      this.$emit('signal', e)
    }
  },
  computed: {
    options() { return this.action.option }
  }
}
</script>
