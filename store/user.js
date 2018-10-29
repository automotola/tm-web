
export const state = () => ({
  profile: {
    name: '',
    role: ''
  },
  contact: [
    { 
      name: "mini",
      role: "message insight network interpreter"
    }
  ]
})

/* export const actions = {
  updateActiveAccount(context, selectedAccount) {
    console.log('ACTION: Registering User , ' + selectedAccount.name)
    context.commit('updateAccount', selectedAccount);
  }
}
 */
export const mutations = {
  set(state, profile) {
    console.log('MUTATION: Registering User Account, ' + profile.name)
    state.account = profile
  },
  add(state, profile) {
    console.log('MUTATION: Adding User to Register: ' + profile.name)
    state.contacts.push(profile)
  },
  remove(state, { profile }) {
    state.contacts.splice(state.contacts.indexOf(profile), 1)
  },
}

export const getters = {
  account(state) {
    console.log('GETTING: Registered User Account')
    return state.account
  },
  contacts(state) {
    console.log('GETTING: Registered User Account')
    return state.contacts
  }
}

/* export const actions = {
  async set({ commit }, account) {
    await commit('SET_ACCOUNT', account)
  },
  async put({ state }, account) {
    state.user.account = account
  }
} */

/* export const mutations = {
  set(state, id) {
    state.peers.push({
      username: username,
      headline: headline
    })
  },
}
 */