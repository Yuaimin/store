import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ? '' : process.env.VUE_APP_BASEURL

const http = axios.create({ baseURL })

http.interceptors.request.use(
  config => {
    // config.headers.Authorization = ''
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => {
    const {
      data: { code, data }
    } = response
    if (code === 0) return data
    return null
  },
  error => {
    return Promise.reject(error) && null
  }
)

const get = (url: string, params: object = {}) => http.get(url, { params })
const post = http.post
const put = http.put
const del = (url: string, params: object = {}) => http.delete(url, { params })

export { get, post, put, del }
