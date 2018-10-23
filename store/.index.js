export const state = () => ({
  user: {
    name: 'anonymous',
    headline: 'Unknown Peer'
  }
})

export const mutations = {
  update(state, user) {
    state.user = user
  },
  addPeer(state, value) {
    merge(state.peers, value)
  },
  remove(state, { item }) {
    state.list.splice(state.list.indexOf(item), 1)
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