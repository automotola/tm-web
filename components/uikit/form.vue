<template lang="pug">
form#authenticationForm
  fieldset.uk-fieldset
    input.uk-input(type='text' placeholder='Username' v-model="name" hidden)
    .uk-inline.uk-width-1-1
      dl.uk-padding
        dt(v-contenteditable:name="true") 
      .uk-position-right.uk-flex.uk-flex-middle.uk-margin-right
        a(href='', uk-icon='refresh' @click="updateFamily")
</template>
<script>
export default {
  name: 'uk-form',
  data() {
    return {
      name: 'Unknown User',
      editable: {
        name: false,
      },
    }
  },
  /* computed: {
    account: {
      set(account) {
        this.$store.commit('user/set', { account })
      },
      get() {
        return this.$store.state.user.account
      }
    }
  }, */
  methods: {
/*     saveAccount() {
      this.$store.dispatch('SAVE_ACCOUNT')
        .then(() => this.$emit('saved'))
    }, */
    updateFamily() {
      let me = {
        name: this.name,
      }
      const FamilyRef = this.$gun.get('family')
      const MyRef = this.$gun.get('me')
      MyRef.put(me);
      FamilyRef.set(MyRef);
      // live update the table!
      // FamilyRef.set(contact);
    },
    register() {
      console.log('register', this.account)
    },
    login() {
      console.log('login', this.account)
    },
    toggleEditable() {
      this.e = !e
    }
  }
}
</script>
