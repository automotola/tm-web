export const state = () => ({
  account: {
    username: "Unknown User",
  }
})

/* export const actions = {
  updateActiveAccount(context, selectedAccount) {
    console.log('ACTION: Registering User , ' + selectedAccount.name)
    context.commit('updateAccount', selectedAccount);
  }
}
 */
export const mutations = {
  set(state, username) {
    console.log('MUTATION: Registering User Account, ' + username)
    let account = {
      username: username
    }
    state.account = account
  }
}

export const getters = {
  account(state) {
    console.log('GETTING: Registered User Account')
    return state.account
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