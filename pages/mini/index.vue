<template lang="pug">
  section.hero.is-fullheight
    .hero-body
      .container
        h1.title
          | MINI
        h2.subtitle
          | A message insight network interpreter
        
      
</template>
<script>
export default {
  layout: 'mini',
  data: function() {
    return {
      world: {
        name: 'athens',
        graph: {
          nodes: [],
          edges: []
        }
      }
    }
  }
}
</script>
