import Vue from 'vue'
import Router from 'vue-router'
import cn from '../i18n/lang/cn'
import HomeMain from '@/views/index/mainIndex'
import Demo from '@/views/test/Demo'
Vue.use(Router)
let routeName = cn.routeName

// eslint-disable-next-line no-unused-vars
const defaultRouter = [
  {
    path: '/',
    hidden: true,
    component: () => import('@/views/user/Login')
  },
  {
    path: '/es6',
    name: 'Es6Demo页面',
    alone: true,
    hidden: true,
    component: () => import('@/views/user/Test')
  },
  {
    path: '/login',
    name: '登陆页',
    hidden: true,
    component: () => import('@/views/user/Login')
  },
  {
    path: '/Index',
    iconCls: 'fa fa-dashboard', // 图标样式class
    name: routeName.home,
    alone: true,
    component: () => import('@/views/layout/Index'),
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
    name: routeName.test,
    alone: true,
    component: () => import('@/views/test/Test')
    // hidden: true
  },
  {
    path: '/demo',
    component: Demo,
    name: 'demo页',
    hidden: true
  },
  {
    path: '/*',
    name: '404',
    component: () => import('@/views/else/page404'),
    hidden: true
  }
]

const createRouter = () => new Router({
  routes: defaultRouter
})

const router = createRouter()
export default router
export { defaultRouter }
