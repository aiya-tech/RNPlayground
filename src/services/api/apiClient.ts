import axios from 'axios'
import {getHttpHeader} from '../utils/request'

let baseURL = 'https://api.thedogapi.com/v1'
let token = ''

const instance = axios.create({
  baseURL,
  timeout: 10000, // 10s
  headers: getHttpHeader(),
})

instance.interceptors.request.use(function (config) {
  if (baseURL) {
    config.baseURL = baseURL
  }
  if (token !== '') {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

const http = {
  get: async <T = any>(url: string, params = {}, headers = {}) => {
    return instance.get(url, {params, headers}).then(res => {
      // return res.data as {data: T; [k: string]: any}
      return {data: res.data}
    })
  },
  post: async <T = any>(url: string, data = {}, headers = {}) => {
    return instance.post(url, data, {headers}).then(res => {
      return res.data as {data: T; [k: string]: any}
    })
  },
  put: async <T = any>(url: string, data = {}, headers = {}) => {
    return instance.put(url, data, {headers}).then(res => {
      return res.data as {data: T; [k: string]: any}
    })
  },
  patch: async <T = any>(url: string, data = {}, headers = {}) => {
    return instance.post(url, data, {headers}).then(res => {
      return res.data as {data: T; [k: string]: any}
    })
  },
}

export default http
