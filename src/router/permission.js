import NProgress from 'nprogress'
import router from './index'
import store from '../store/'

router.beforeEach((to, from, next) => {
  console.log('--->加载钩子函数' + next)
  NProgress.start()
  if (store.getters.token) {
    if (to.path === '/') {
      next({path: '/Index'})
    } else {
      // eslint-disable-next-line no-unused-expressions
      !(async function getAddRouters () {
        // 省略 axios 请求代码 通过 token 向后台请求用户权限等信息，这里用假数据赋值
        await store.dispatch('newRoutes')
        let newAddRouters = store.getters.addRouters
        await router.addRoutes(newAddRouters)
        next({path: to.path})
      }())
    }
  } else {
    if (to.path === '/login') {
      next()
    }
    next({path: '/login'})
  }
})

router.afterEach(() => {
  NProgress.done()
})
