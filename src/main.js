import Vue from 'vue'
import ZarmVue from 'zarm-vue'
import App from './app.vue'
import router from './router'

import 'zarm-vue/zarm-vue.default.css'

Vue.use(ZarmVue)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
