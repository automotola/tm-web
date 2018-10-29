<template lang="pug">
  form(@submit.prevent='handleSubmit')
    label 
    | Username:
    input(type='text', v-model='name' )
    button(type='submit') Submit
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'vanilla-form',
  data() {
    return {
        name: ''
    }
  },
  computed: {
    ...mapState({
      updateAccount: state => state.account
    })
  },
  methods: {
    handleSubmit() {
      // Send data to the server or update your stores and such.
      console.log("ACCOUNT FORM SUBMITTED", this.name)
      // this.$store.commit('user/set', this.account)
    }
  }
}
</script>