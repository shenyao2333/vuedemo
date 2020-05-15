import service from '../utils/sendRest'

/**
 * 用户登录，POST
 * @param data 表单数据
 */
export const login = (data) => {
  return service({
    url: "/userAuth/login",
    method: 'post',
    data: data
  })
}
