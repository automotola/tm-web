export const state = () => ({
  account: {
    name: 'anonymous',
    pass: 'secret'
  }
})

export const mutations = {
  update(state, account) {
    state.account = account
  }
}

export const actions = {
  async set({ commit }, account) {
    await commit('SET_ACCOUNT', account)
  },
  async put({ state }, account) {
    state.user.account = account
  }
}

/* export const mutations = {
  set(state, id) {
    state.peers.push({
      username: username,
      headline: headline
    })
  },
}
 */