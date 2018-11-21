<template lang="pug">
a(href="https://docs.google.com/presentation/d/1F-lxT0Gzq-EuDjB9podaNtnvyhAsh78d2gmhyBw4ctk/edit?usp=sharing") PRESENTATION
      //.hero.is-fullheight
        .hero-body
          nav.column.is-one-third-tablet.is-one-quarter-desktop
            menu-b
          main.column
            card-b(:content="false" :image="true")
        banshee-tabs.hero-body.tile.is-vertical
          banshee-tab-panes(tag="ul").tile.is-parent.is-full-mobile.is-one-quarter-tablet.is-one-quarter-desktop
            banshee-tab-pane.tile.is-child(tag="li" v-for="slide in slides" :key="slide.id")
              card-b(:content="slide.content" :image="slide.image")
          banshee-tab-list.tile.is-parent
            banshee-tab( v-for="tab in slides" :key="tab.index" ) 
              span.icon
                i.fas.fa-home {{ tab.id }}
                
          
</template>
<script>
import menuB from '~/components/pure/bulma/menu'
import cardB from '~/components/pure/bulma/card'
export default {
  layout: 'abrie',
  components: {
    menuB,
    cardB
  },
  data: function() {
    return {
      slides: [
        { id: 1, name: 'Why', image: 'https://raw.githubusercontent.com/automotola/assets/master/mini-pitch/mini-pitch-01.png', content: { text: 'Why?', tags: ['neurodiversity', 'neurology'] } },
        { id: 2, name: 'What', image: 'https://raw.githubusercontent.com/automotola/assets/master/mini-pitch/mini-pitch-02.png', content: { text: 'What?', tags: ['neurodiversity', 'neurology'] } },
        { id: 3, name: 'Where', image: 'https://raw.githubusercontent.com/automotola/assets/master/mini-pitch/mini-pitch-03.png', content: { text: 'Where?', tags: ['neurodiversity', 'neurology'] } },
        { id: 4, name: 'When', image: 'https://raw.githubusercontent.com/automotola/assets/master/mini-pitch/mini-pitch-04.png', content: { text: 'When?', tags: ['neurodiversity', 'neurology'] } },
        { id: 5, name: 'How', image: 'https://raw.githubusercontent.com/automotola/assets/master/mini-pitch/mini-pitch-05.png', content: { text: 'How?', tags: ['neurodiversity', 'neurology'] } },
        { id: 6, name: 'Why', image: 'https://raw.githubusercontent.com/automotola/assets/master/mini-pitch/mini-pitch-06.png', content: { text: 'Why?', tags: ['neurodiversity', 'neurology'] } },
        { id: 7, name: 'What', image: 'https://raw.githubusercontent.com/automotola/assets/master/mini-pitch/mini-pitch-07.png', content: { text: 'What?', tags: ['neurodiversity', 'neurology'] } },
        { id: 8, name: 'Where', image: 'https://raw.githubusercontent.com/automotola/assets/master/mini-pitch/mini-pitch-08.png', content: { text: 'Where?', tags: ['neurodiversity', 'neurology'] } },
        { id: 9, name: 'When', image: 'https://raw.githubusercontent.com/automotola/assets/master/mini-pitch/mini-pitch-09.png', content: { text: 'When?', tags: ['neurodiversity', 'neurology'] } },
        { id: 10, name: 'How', image: 'https://raw.githubusercontent.com/automotola/assets/master/mini-pitch/mini-pitch-10.png', content: { text: 'How?', tags: ['neurodiversity', 'neurology'] } },
        { id: 11, name: 'When', image: 'https://raw.githubusercontent.com/automotola/assets/master/mini-pitch/mini-pitch-11.png', content: { text: 'When?', tags: ['neurodiversity', 'neurology'] } },
        { id: 12, name: 'How', image: 'https://raw.githubusercontent.com/automotola/assets/master/mini-pitch/mini-pitch-12.png', content: { text: 'How?', tags: ['neurodiversity', 'neurology'] } },
        { id: 13, name: 'When', image: 'https://picsum.photos/200?image=1011', content: { text: 'When?', tags: ['neurodiversity', 'neurology'] } },
        { id: 14, name: 'How', image: 'https://picsum.photos/200?image=995', content: { text: 'How?', tags: ['neurodiversity', 'neurology'] } },
        { id: 15, name: 'When', image: 'https://picsum.photos/200?image=1011', content: { text: 'When?', tags: ['neurodiversity', 'neurology'] } },
        { id: 16, name: 'How', image: 'https://picsum.photos/200?image=995', content: { text: 'How?', tags: ['neurodiversity', 'neurology'] } }
      ]
    }
  },
  computed: {
    journey: function() {
      var storetxt = require('~/static/txt/mini.txt')
      var archieml = require('archieml');
      var miniStory = archieml.load(storetxt);
      var journey = miniStory.journey
      return journey
    }
  },
  mounted: function() {
    // console.log(this.journey)
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

