import {defaultRouter} from "@/router/index"

export const routerData = {
  state: {
    routers: [],
    addRouters: []
  },
  mutations: {
    setRouters: (state, routers) => {
      state.routers = routers // 保存动态路由用来addRouter
      //state.routers = defaultRouter.concat(routers) // 所有有权限的路由表，用来生成菜单列表
    }
  },
  actions: {
    newRoutes ({commit}, role) {
      console.log("加入加载路由");
      console.log(defaultRouter);
      commit('setRouters', defaultRouter)
    }
  }
}
