import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import { store } from '@/store/index'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.prototype.axios = axios;
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
