import axios from 'axios'

export const axiosInstance =axios.create({
  baseURL:'https://backend-77h5.onrender.com/api',
  withCredentials: true
})
