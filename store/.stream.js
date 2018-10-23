export const state = () => ({
  me: {
    message: 'started',
    timeStamp: Date.now()
  }
})

export const mutations = {
  increment(signal) {
    state.tick = signal
  }
}
