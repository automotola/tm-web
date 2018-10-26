<template lang="pug">
.panel
  mini-pad(:story="stories[0]" :users="users")
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
import MiniPad from '~/components/molecules/MiniPad'

export default {
  head: {
    title: 'Machine Insight Network Interpreter',
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/ionicons@4.4.6/dist/css/ionicons.min.css' }
    ],
  },
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
      ],
      stories: [
        {
          title: 'Messaging',
          description: 'Write a message!',
          actions: [
            {
              label: "Create a username",
              symbol: "user",
              input: "",
              control: {
                message: [
                  { 
                    name: 'global',
                    checked: 'checked'
                  },
                  { 
                    name: 'social',
                    checked: 'unchecked'
                  },
                  { 
                    name: 'personal',
                    checked: 'unchecked'
                  },
                  { 
                   name: 'private',
                    checked: 'unchecked'
                  }
                ],
              }
            },
            {
              label: "Write your message",
              symbol: "comment",
              input: ""
            }
          ],
          events: []
        },
        {
          title: 'Privacy',
          description: 'Select your level of privacy.',
          calls: [
            {
              call: "Write your message",
              type: "action",
              
            }
          ],
          events: []
        }
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
    users: function() {
      const Mini = this.$gun.get('mini/athens')
      let members = []
      Mini.map().once(function(data, key){
        let user = {}
        user.name = data.name
        members.push(user);
      })
      console.log(members)
      return members
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
