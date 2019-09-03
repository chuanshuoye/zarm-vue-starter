import Vue from 'vue'
import { Button, Alert, Confirm, Toast, Loading } from 'zarm-vue'

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Alert);
Vue.use(Confirm);
Vue.use(Toast);
Vue.use(Loading);


/* eslint-disable no-new */
const App = new Vue({
  el: '#app',
});
