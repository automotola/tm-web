<template lang="pug">
form#authenticationForm
  fieldset.uk-fieldset
    input.uk-input(type='text' placeholder='Username' v-model="name" hidden)
    textarea.uk-textarea(rows='1' placeholder='Passphrase' v-model="pass" hidden)
    .uk-inline.uk-width-1-1
      dl.uk-padding
        dt(v-contenteditable:name="true") 
        dd(v-contenteditable:pass="true")
      .uk-position-right.uk-overlay-default.uk-flex.uk-flex-middle
        a.uk-button(uk-icon='refresh' @click="updateFamily")
</template>
<script>
export default {
  name: 'uk-form',
  data() {
    return {
      name: 'Unknown',
      pass: 'Unknown',
      editable: {
        name: false,
        pass: false
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
        pass: this.pass
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
