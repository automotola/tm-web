export const strict = false

export const state = () => ({
  signals: [] 
})

export const mutations = {
  signal(state, event) {
    state.signals.push(event)
  } 
}