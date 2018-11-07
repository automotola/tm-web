<template lang="pug">
  .panel
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
                    
</template>
<script>
export default {
  name: 'uk-input',
  props: [
    'story'
  ],
  computed: {
    input() { return this.story.call.input }
  }
}
</script>

