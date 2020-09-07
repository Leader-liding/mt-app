import axios from '@/axios.js'

let api = {
  gethotplaceList () {
    return axios.get('/api/meituan/header/searchHotWords.json')
  },
  getsearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  getmenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  getResultdata () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProductList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getvisitedCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  getPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', params)
  },
  register (params) {
    return axios.get('/api/meituan/register', params)
  }
}

export default api
