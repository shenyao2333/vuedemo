import {defaultRouter} from '@/router/index'

export const routerData = {
  state: {
    routers: [],
    addRouters: []
  },
  mutations: {
    setRouters: (state, routers) => {
      state.routers = routers // 保存动态路由用来addRouter
    }
  },
  actions: {
    newRoutes ({commit}, role) {
      console.log('初始化路由菜单')
      console.log(defaultRouter)
      commit('setRouters', defaultRouter)
    }
  }
}
