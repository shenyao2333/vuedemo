import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import { user } from './module/user'
import { routerData } from './module/routerData'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['user', 'routerData']
})
export const store = new Vuex.Store({
  modules: {
    user,
    routerData
  },
  plugins: [vuexLocal.plugin]
})
