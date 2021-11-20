import axios from 'axios'

export const API = axios.create({
  baseURL: 'http://localhost:3004/',
  responseType: 'json'
})

export const getData = async (): Promise<any> => {
  return await API.get('/data')
}