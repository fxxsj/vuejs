import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'
import * as moreActions from './actions'

Vue.use(Vuex)

const state = {
  user: ls.getItem('user'),
  auth: ls.getItem('auth'),
  articles: ls.getItem('articles')
}

const mutations = {
  UPDATE_USER(state, user) {
    state.user = user
    ls.setItem('user', user)
  },
  UPDATE_AUTH(state, auth) {
    state.auth = auth
    ls.setItem('auth', auth)
  },
  // 更改所有文章的事件类型
  UPDATE_ARTICLES(state, articles) {
    state.articles = articles
    ls.setItem('articles', articles)
  }

}

const actions = {
    login({ commit }, user) {
      if (user) commit('UPDATE_USER', user)
      commit('UPDATE_AUTH', true)
      router.push('/')
    },
    logout({ commit }) {
      commit('UPDATE_AUTH', false)
      router.push({ name: 'Home', params: { logout: true } })
    },
    // 更新个人信息
    updateUser({ state, commit }, user) {
      const stateUser = state.user
  
      if (stateUser && typeof stateUser === 'object') {
        user = { ...stateUser, ...user }
      }
  
      commit('UPDATE_USER', user)
    },
    // 使用对象展开运算符混入 moreActions
    // const actions = Object.assign(actions, moreActions)
    ...moreActions
  
  }

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store