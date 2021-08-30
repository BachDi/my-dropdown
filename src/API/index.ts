import axios from 'axios'
import configs from 'configs'

export const api = axios.create({
  baseURL: configs.apiBaseUrl,
  headers: {
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  }
})
