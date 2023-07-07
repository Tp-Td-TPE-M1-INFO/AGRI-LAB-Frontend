import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://agrilab-7qta.onrender.com/api/',
})

axiosInstance.interceptors.request.use((config) => {
  
    config.headers.Authorization = `Bearer USER_TOKEN`
    return config
})

export default axiosInstance
