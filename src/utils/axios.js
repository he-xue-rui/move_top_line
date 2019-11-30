import axios from 'axios'
import JSONBIG from 'json_bigint'
import store from '@/store'

const newAxios = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/',
  transformRequest: [function (data, headers) {
    // 对 data 进行任意转换处理
    return JSONBIG.parse(data)
  }]
})

// 添加请求拦截器
newAxios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (store.state.user.token) {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
newAxios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  try {
    return response.data.data
  } catch (e) {
    return response
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})