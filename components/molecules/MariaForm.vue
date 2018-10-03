<template lang="pug">
  form(action="/register" method="POST")
    .uk-margin
      label.uk-form-label(for="text") Text
      .uk-form-controls
        input.uk-input#text
    .uk-margin  
      label.uk-form-label(for="select") Select
      .uk-form-controls
        select.uk-select#select
          option Option 01
          option Option 02
    .uk-margin
      .uk-form-label Radio
      .uk-form-controls.uk-form-controls-text
        label
          input.uk-radio(type="radio" name="radio1")
          span Option 1
        label
          input.uk-radio(type="radio" name="radio1")
          span Option 2
</template>
<script>
export default {
  layout: 'focus'
}
</script>
