import axios from 'axios'; // 引入axios


const service = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': "application/json;charset=utf-8"
  },
  timeout: 99999
})

//http response 拦截器
service.interceptors.response.use(
  response => {
    return response.data
  }
)
export default service
