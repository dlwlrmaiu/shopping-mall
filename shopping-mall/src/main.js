import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './assets/config'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    api
  }
}).$mount('#app')
