import 'zarm-vue/zarm-vue.default.css'
import Vue from 'vue'
import ZarmVue from 'zarm-vue';
import App from './app.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(ZarmVue);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
