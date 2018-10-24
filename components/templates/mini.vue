<template lang="pug">
.panel
  mini-pad(:medium="medium" :symbols="signs4" :user="user" :users="users")
  // mini-bar(:medium="medium" :options="signs4")
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
    'medium'
  ],
  components: {
    MiniPad,
    MiniBar
  },
  computed: {
    users: function() {
      const FamilyRef = this.$gun.get('family')
      let list = []
      FamilyRef.map().once(function(data, key){
        let contact = {}
        contact.name = data.name
        list.push(contact);
      });
      console.log("FAM:", list) 
      return list
    }
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
  mounted: function() {
    this.$nextTick(function () {

      // 
      var mark = {
        name: "Mark",
        pass: "mark@gunDB.io",
      }

      var melissa = {
        name: "Melissa",
        pass: "melissa@gunDB.io",
      }

      var mini = {
        name: "Mini",
        pass: "mini@gunDB.io",
      }

      // Additions
      mini.father = mark
      mini.mother = melissa
      mark.spouse = melissa
      melissa.spouse = mark
      mark.daughter = mini
      melissa.daughter = mini

      // References
      const MiniRef = this.$gun.get('mini')
      const MelissaRef = this.$gun.get('melissa')
      const MarkRef = this.$gun.get('mark')
      const FamilyRef = this.$gun.get('family')

      // partial updates merge with existing data!
      MiniRef.put(mini);
      MarkRef.put(mark);
      MelissaRef.put(melissa);
      
      // access the data as if it is a document.
      MiniRef.get('father').get('name').once(function(data, key){
      // `val` grabs the data once, no subscriptions.
        console.log("Mini's father is", data);
      });
      // traverse a graph of circular references!
      MarkRef.get('daughter').get('father').once(function(data, key){
        console.log("Mark is the father of his daughter!", data);
      });
      FamilyRef.on((data, key) => {
        console.log("family was called!")
      })

      // add both of them to a table!
      FamilyRef.set(MelissaRef);
      FamilyRef.set(MelissaRef.get('spouse'));
      FamilyRef.set(MelissaRef.get('daughter'));
      FamilyRef.once(function(data, key){
        console.log("This is Melissa's family!", data);
      });

      let family = []
      // grab each item once from the table, continuously:
      FamilyRef.map().once(function(data, key){
        let contact = {}
        contact.name = data.name
        contact.pass = data.pass
        // family.push(contact);
      });

      console.log("Family", family)
      this.users = family
    });
  },
}
</script>
