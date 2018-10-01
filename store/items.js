export const state = () => ({
  list: [],
  item: {}
})

export const mutations = {
  set(state, items) {
    state.list = items
  },
  add(state, value) {
    merge(state.list, value)
  },
  remove(state, { item }) {
    state.list.splice(state.list.indexOf(item), 1)
  },
  setItem(state, item) { state.item = item }
}

export const actions = {
  async get({ commit }) {
    const host = 'http://influx.rivm.nl:8086'
    const u = 'motherearth'
    const p = 'Y47bB108'
    const db = [
      legend.database[1][1],
      legend.database[1][2]
    ]
    const c = true
    const query = [
      'SELECT val3 FROM KIT_RTD01 WHERE time > now() - 1h GROUP BY id ',
      'SELECT time, val0, val3 FROM KIT_RTD01 WHERE time > now() - 1h GROUP BY id',
      'SELECT time, id, val0, val3 FROM KIT_RTD01 WHERE time > now() - 1d',
      'SELECT time, id, val0, val3 FROM KIT_RTD01 WHERE time > now() - 1d and time > now() - 0d',
      "SELECT time, id, val0, val1, val3, val4, val5, val9 FROM KIT_RTD01 WHERE time > '2018-08-01 10:00:00' and time < '2018-08-01 10:10:00' "
    ]
    const q = encodeURIComponent(query[0])
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