import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/user/Login'
import en from '../i18n/lang/en'
import Layout from '@/views/layout/Index'
import HomeMain from '@/views/index/mainIndex'
import Test from '@/views/test/Test'
import Demo from '@/views/test/Demo'
import page404 from '@/views/else/page404'
Vue.use(Router)
let routeName = en.routeName

let defaultRouter = [
  {
    path: '/',
    redirect: '/index',
    hidden: true,
    children: []
  },
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true,
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
  },
  {
    path: '/test',
    component: Test,
    name: '测试',
    //hidden: true
  },
  {
    path: '/demo',
    component: Demo,
    name: 'demo页',
    hidden: true
  },
  {
    path: '/*',
    component: page404,
    name: '404',
    hidden: true
  }
]

export default new Router({
  routes: defaultRouter
})

//export {defaultRouter }
