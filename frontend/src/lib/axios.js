import axios from 'axios'

export const axiosInstance =axios.create({
  baseURL:'https://chatapplication-backend-i6ae.onrender.com/api',
  withCredentials: true
})