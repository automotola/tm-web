export const state = () => ({
  me: {
    username: 'anonymous',
    headline: 'Unknown Peer'
  },
  peers: []
})

export const mutations = {
  updateMe(state, user) {
    state.me = user
  },
  addPeer(state, value) {
    merge(state.peers, value)
  },
  remove(state, { item }) {
    state.list.splice(state.list.indexOf(item), 1)
  }
}

export const actions = {
  async get({ commit }) {
    const request = `${host}/query?u=${u}&p=${p}&db=${db[1]}&chunked=${c}&q=${q}`
    await this.$axios.get(request)
      .then((res) => {
        if (res.status === 200) {
          commit('set', res.data)
        }
      })
  },
  async show({ commit }, params) {
    await this.$axios.get(`items/${params.item_id}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setCar', res.data)
        }
      })
  },
  async set({ commit }, item) {
    await commit('set', item)
  }
}