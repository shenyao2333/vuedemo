import { login } from '@/api/user'
import router from '@/router/index'
// eslint-disable-next-line no-unused-vars
import { Message } from 'element-ui'

export const user = {
  state: {
    userInfo: {
      userId: '',
      mobile: '',
      userName: '',
      photoUrl: '',
      sex: ''
    },
    token: '',
    validTime: ''
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    setToken (state, token) {
      state.token = token
    },
    setValidTime (state, validTime) {
      state.validTime = validTime
    },
    // 注销登陆
    loginOut (state) {
      state.userInfo = {}
      state.token = ''
      state.validTime = ''
      router.push({ name: 'login', replace: true })
      sessionStorage.clear()
      window.location.reload()
    },
    // 刷新用户信息
    resetUserInfo (state, userInfo = {}) {
      state.userInfo = {...state.userInfo,
        ...userInfo
      }
    }
  },
  getters: {
    userInfo (state) {
      return state.userInfo
    },
    token (state) {
      return state.token
    },
    validTime (state) {
      return state.validTime
    }
  },
  actions: {
    async LoginIn ({commit}, loginInfo) {
      const res = await login(loginInfo)
      if (res.status) {
        commit('setUserInfo', res.data.userVo)
        commit('setToken', res.data.token)
        commit('setValidTime', res.data.validTime)
        const redirect = router.history.current.query.redirect
        if (redirect) {
          router.push({path: redirect})
        } else {
          router.push({path: '/Index'})
        }
      } else {
        Message.error(res.message);
      }
    }
  }

}
