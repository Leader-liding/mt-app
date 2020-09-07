import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  // state,
  // mutations,
  // actions
  state: {
    position: {},
    userName: ''

  },
  // 同步
  mutations: {
    setPosition (state, val) {
      state.position = val
    },
    setUserName (state, val) {
      state.userName = val
    }
  },
  // 异步
  actions: {
    // setPosition ({commit},val) {
    // commit("setPosition",val)
    // }

    setPosition ({ commit }, val) {
      // 异步请求后端获取当前位置数据
      commit('setPosition', val)
      console.log(this.state.position)
    }
  }

})

// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const state = {
//   position: {},
//   userName: ''
// }

// const mutations = {
//   setPosition (state, val) {
//     state.position = val
//   },
//   setUserName (state, val) {
//     state.userName = val
//   }
// }

// const actions = {
//   setPosition ({ commit }, val) {
//     // 异步请求后端获取当前位置数据
//     commit('setPosition', val)
//   }
// }

// export default new Vuex.Store({
//   state,
//   mutations,
//   actions
// })
