<template lang="pug">
div(uk-slider='center: true; clsActivated: uk-transition-active').panel
  .uk-position-relative.uk-visible-toggle.uk-light
    ul.uk-slider-items.uk-grid(class='uk-child-width-1-1@s' )
      li(v-for="story in stories")
        sequence(:story="story" :users="contacts" :user="current" :id="story.title")
  ul.uk-slider-nav.uk-dotnav.uk-flex-center.uk-position-bottom.uk-padding-small
</template>
<style>
.spinning {
  animation: rotate 30s infinite linear;
}
@keyframes rotate {
    100% {
        transform: rotateZ(360deg);
    }
}
</style>
<script>
import { mapMutations } from 'vuex'
import sequence from './sequence'

export default {
  props: [
    'story'
  ],
  components: {
    sequence
  },
  data() {
    return {
      signs4: [
        'add-circle-outline',
        'analytics',
        'aperture',
        'apps'
      ],
      signs20: [
        'add-circle-outline',
        'analytics',
        'aperture',
        'apps',
        'barcode',
        'basket',
        'cafe',
        'contact',
        'desktop',
        'fitness',
        'football',
        'globe',
        'moon',
        'rainy',
        'water',
        'trash',
        'thumbs-up',
        'thumbs-down',
        'sunny',
        'gift'
      ]
    }
  },
  computed: {

  },
  computed: {
    users: function() {
      const MiniRef = this.$gun.get('mini')
      let list = []
      MiniRef.map().once(function(data, key){
        let contact = this.
        contact.name = data.name
        console.log(data, contact)
        list.push(contact);
      });
      console.log("List computed:", list, new Date()) 
      return list
    },
    stories() { 
      return this.$store.state.story.script
    },
    contacts() { 
      return this.$store.state.user.contact
    },
    current() {
      return this.$store.state.record.instance
    }
  },
  mounted: function() {
    this.$nextTick(function () {

      // References

      // partial updates merge with existing data!
      // const MiniRef = this.$gun.get('mini')
      // MiniRef.put(mini);

      // access the data as if it is a document OR
      // traverse a graph of circular references

      /* FamilyRef.get('father').get('name').once(function(data, key){
      // `val` grabs the data once, no subscriptions.
        console.log("Mini's father is", data);
      }); */
      
      /* let signs = []
      const AthensRef = this.$gun.get('athens/signs') */

      // FamilyRef.set(MelissaRef);
      // FamilyRef.set(MelissaRef.get('spouse'));
      // FamilyRef.set(MelissaRef.get('daughter'));
      
      // grab each item once from the table, continuously:
      /* AthensRef.map().once(function(data, key){
        let sign = {}
        sign.text = data.name
        signs.push(sign);
      }) */

      // this.users = signs
      console.log("MARCUS APP LOADED")
    });
  },
}
</script>
