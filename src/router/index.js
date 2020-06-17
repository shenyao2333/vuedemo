import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/user/Login'
import en from '../i18n/lang/en'
import Layout from '@/views/layout/Index'
import HomeMain from "@/views/index/mainIndex"

Vue.use(Router)
let routeName = en.routeName

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      hidden: true,
      component: Login,
      children: []
    },
    {
      path: '/index',
      iconCls: 'fa fa-dashboard', // 图标样式class
      name: routeName.home,
      component: Layout,
      alone: true,
      children: [
        {
          path: '/index',
          iconCls: 'fa fa-dashboard', // 图标样式class
          name: '主页',
          component: HomeMain,
          children: []
        }
      ]
    }
  ]
})
