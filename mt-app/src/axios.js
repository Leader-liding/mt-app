import axios from 'axios'
axios.defaults.baseURL = 'https://api.duyiedu.com'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: 'ld_0532_1570283034637'
  }
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
