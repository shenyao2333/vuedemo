import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/user/Login'
import Index from '@/views/index'
import Main from '@/views/layout/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
