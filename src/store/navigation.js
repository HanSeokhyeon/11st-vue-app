export default {
  namespaced: true,
  state: () => ({
    isShowLNB: false
  }),
  mutations: {
    updateState (state, payload) {
      // ['isShowLNB']
      Object.keys(payload).forEach(key => {
        // state.isShowLNB = payload.isShowLNB
        state[key] = payload[key]
      })
    }
  },
  actions: {
    onNav ({ commit }) {
      commit('updateState', {
        isShowLNB: true
      })
      // isShowLNB => true
    },
    offNav ({ commit }) {
      commit('updateState', {
        isShowLNB: false
      })
      // isShowLNB => true
    }
  }
}