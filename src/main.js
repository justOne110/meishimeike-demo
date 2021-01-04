import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// rem 
import './assets/js/rem.js'

//axios
import axios from './api'
Vue.prototype.$axios = axios

// vant按需引入
import 'vant/lib/icon/local.css'
import './vant/index.js'


// 路由守卫、
router.beforeEach((to, from, next) => {

  // console.log(to.path)
  let token = sessionStorage.getItem('token')
  if (to.path == "/my") {
    token == null ? next('/login') : ""
  }

  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
