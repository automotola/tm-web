<template lang="pug">
.uk-panel.uk-inline.uk-width-1-1
  .uk-width-1-1
    button.uk-form-icon.uk-margin-small-left(uk-icon='world')
    div(uk-drop='pos: top-justify; boundary: .uk-width-1-1; boundary-align: true; mode: click')
      .uk-card.uk-card-small.uk-card-body.uk-card-default.rounded
        .uk-form-label
        .uk-form-controls
          label(v-for='option in control.message')
            input.uk-radio(type='radio', :name='"radio-" + option')
            |  {{ option }}
            br
  span.uk-form-icon.uk-form-icon-flip.uk-margin-small-right
    a.uk-icon-button(href='', uk-icon='check')
  input.uk-form-large.uk-input.shadow.rounded(:placeholder='state.script', type='text', v-model='input.message', @keyup.enter='handleSubmit')

</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'uk-form',
  data() {
    return {
      username: '',
      editable: {
        username: false,
      },
    }
  },
  computed: {
    ...mapState({
      account: state => state.account
    })
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
    ...mapActions({
      updateActiveAccount: 'updateActiveAccount'
    }),
/*     saveAccount() {
      this.$store.dispatch('SAVE_ACCOUNT')
        .then(() => this.$emit('saved'))
    }, */
    submitAccountForm: () => {
      console.log("ACCOUNT FORM SUBMITTED", this.username)
      this.$store.commit('user/update', this.username)
    },
    updateAccount: () => {
      this.$store.commit('user/update', this.name)
      this.$store.commit('user/updateActiveAccount', val)
    },
    updateFamily() {
      let me = {
        name: this.name,
      }
      // this.$store.commit('user/update', me)

      const FamilyRef = this.$gun.get('mini/family')
      const MyRef = this.$gun.get('mini/me')
      MyRef.put(me);
      FamilyRef.set(MyRef);
      // live update the table!
      // FamilyRef.set(contact);
    },
    toggleEditable() {
      this.e = !e
    }
  }
}
</script>
