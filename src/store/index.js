import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: auth.getStorage
  },
  mutations: {
    // 设置token
    setUser (state, data) {
      auth.setStorage(data)
      // 同步更新state中的token
      state.user = data
    },
    delUser (state) {
      state.user = {}
      auth.delUser()
    }
  },
  actions: {
  }
})
