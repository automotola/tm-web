export const state = () => ({
  tick: {
    message: 'started',
    timeStamp: Date.now()
  }
})

export const mutations = {
  increment(signal) {
    state.tick = signal
  }
}
