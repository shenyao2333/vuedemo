import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 999
})

service.interceptors.response.use(
  response => {
    return response.data
  }
)
export default service
