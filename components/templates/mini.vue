<template lang="pug">
.panel
  mini-pad(:symbols="signs4" :user="user" :users="signs4")
  // mini-bar( :options="signs4")
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

import MiniBar from '~/components/molecules/MiniBar'
import MiniPad from '~/components/molecules/MiniPad'

export default {
  head: {
    title: 'Machine Insight Network Interpreter',
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/ionicons@4.4.6/dist/css/ionicons.min.css' }
    ],
  },
  props: [
    'content',
  ],
  components: {
    MiniPad,
    MiniBar
  },
  data() {
    return {
      user: null,
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
      
      let family = []
      const FamilyRef = this.$gun.get('mini/family')
      FamilyRef.on((data, key) => {
        console.log(key, "was called.")
      })

      // FamilyRef.set(MelissaRef);
      // FamilyRef.set(MelissaRef.get('spouse'));
      // FamilyRef.set(MelissaRef.get('daughter'));
      
      // grab each item once from the table, continuously:
      FamilyRef.map().once(function(data, key){
        let contact = {}
        contact.name = data.name
        family.push(contact);
        console.log("This is in my family!", contact);
      })

      console.log("Family List:", family)
      this.users = family

    });
  },
}
</script>
