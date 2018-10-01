export const state = () => ({
  evolution: []
})

export const mutations = {
  add (state, list) {
    state.evolution.push({
      list: list,
      time: Date.now()
    })
  }
}
