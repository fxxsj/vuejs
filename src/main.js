import Vue from 'vue'
import App from './App'
import router from './router'
import './directives'
import './components'
// 引入 store/index.js 的默认值
import store from './store'
import VueSweetalert2 from './plugins/vue-sweetalert2'

Vue.use(VueSweetalert2)

Vue.config.productionTip = false

new Vue({
  router,
  // 注入 store
  store,
  render: h => h(App),
}).$mount('#app')