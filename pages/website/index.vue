<template lang="pug">
  presentation(:slides="slides")
</template>
<script>
import presentation from '~/components/presentation'
import slideNotes from '~/static/md/presentation.txt'

const archieml = require('archieml-peg')
const parsed = archieml.load(slideNotes)
console.log(parsed)


export default {
  components: {
    presentation
  },
  data:() => {
    return {
      slides: [
        {content: '1'},
        {content: '2'},
        {content: '3'},
        {content: '4'},
        {content: '5'}
      ]
    }
  }
}
</script>
