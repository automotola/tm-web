export const strict = false

export const state = () => ({
  events: [] 
})

export const mutations = {
  sync(state, payload) {
    console.log('MUTATION: Adding User to Register: ' + payload)
    state.events.push(payload)
  }
}

export const actions = {
  update({ commit }) {
    commit('sync')
  }
}