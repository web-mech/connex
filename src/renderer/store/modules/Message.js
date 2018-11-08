const { ipcRenderer } = require('electron')

const state = {
  messages: []
}

const mutations = {
  ADD_MESSAGE (state, message) {
    state.messages.push(message)
  }
}

const actions = {
  sendMessage ({ commit }, message) {
    message = { content: message }
    ipcRenderer.send('send-message', message)
    commit('ADD_MESSAGE', message)
  },
  recieveMessage ({ commit }, message) {
    console.log(message)
    commit('ADD_MESSAGE', message)
  }
}

export default {
  state,
  mutations,
  actions
}
