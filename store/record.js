export const strict = false

export const state = () => ({
  instance: undefined
})

export const mutations = {
  instance(state, instance) {
    state.instance = instance
  }
}