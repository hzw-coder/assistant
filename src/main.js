import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/rem.js'
import './assets/style/reset.css'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

// 过滤器
import './utils/filters'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')