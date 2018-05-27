import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)
// 数据
export default new Vuex.Store({
  modules: {
    user
  }
})
