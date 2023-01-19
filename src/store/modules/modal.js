const state = {
  showBronModal: false
}

const getters = {
  showBronModal: state => state.showBronModal
}

const actions = {
  toggleModal ({ commit }, payload) {
    commit('toggleModal', payload)
  }
}

const mutations = {
  toggleModal (state, payload) {
    state.showBronModal = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}