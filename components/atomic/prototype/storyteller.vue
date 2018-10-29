<template lang="pug">
div(uk-slider='center: true; clsActivated: uk-transition-active').panel
  .uk-position-relative.uk-visible-toggle.uk-light
    ul.uk-slider-items.uk-grid(class='uk-child-width-1-1@s' )
      li(v-for="script in stories")
        mini-pad(:story="script" :users="contacts" :user="profile")
    a.uk-position-center-left.uk-position-small.uk-hidden-hover(href='#', uk-slidenav-previous='', uk-slider-item='previous')
    a.uk-position-center-right.uk-position-small.uk-hidden-hover(href='#', uk-slidenav-next='', uk-slider-item='next')
  ul.uk-slider-nav.uk-dotnav.uk-flex-center.uk-margin
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
import MiniPad from '~/components/atomic/molecule/MiniPad'

export default {
  props: [
    'story'
  ],
  components: {
    MiniPad
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
    /* users: function() {
      const FamilyRef = this.$gun.get('mini/family')
      let list = []
      FamilyRef.map().once(function(data, key){
        let contact = {}
        contact.name = data.name
        console.log(data, contact)
        list.push(contact);
      });
      console.log("List computed:", list, new Date()) 
      return list
    } */
  },
  computed: {
    stories() { 
      return this.$store.state.story.script
    },
    contacts() { 
      return this.$store.state.user.contact
    },
    profile() {
      return this.$store.state.user.profile
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
      console.log("MINI TEMP LOADED")
    });
  },
}
</script>
