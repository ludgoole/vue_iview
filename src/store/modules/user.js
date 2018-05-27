
const state = {
  loginState: JSON.parse(sessionStorage.getItem('user')) || null,
  loginShow: false
}

const mutations = {
  // 唯一允许更新应用状态的地方
  login (state) {
    if (JSON.parse(sessionStorage.getItem('user'))) {
      state.loginShow = false
      state.loginState = true
    } else {
      state.loginShow = true
    }
  },
  logout (state) {
    state.loginState = false
    state.loginShow = false
  }
}

const actions = {
}

const getters = {
  loginState: function (state) {
    if (JSON.parse(sessionStorage.getItem('user'))) {
      return true
    } else {
      return false
    }
  }
  // 允许组件从 Store 中获取数据
}

export default {
  state,
  mutations,
  actions,
  getters
}
