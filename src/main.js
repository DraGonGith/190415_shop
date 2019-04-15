/*
 * 入口js
*/
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.oductionTip = false


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, // 使用上vue-router
  store,  // 使用上vuex
  // render: h => h(App)
})
