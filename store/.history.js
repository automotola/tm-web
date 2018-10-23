export const state = () => ({
  values: []
})

export const mutations = {
  add (state, event) {
    state.values.push({
      event: event,
      time: Date.now()
    })
  }
}
