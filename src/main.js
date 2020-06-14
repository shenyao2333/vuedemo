import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import { store } from '@/store/index'
import i18n from './i18n/i18n'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueRouter)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
  i18n
})
