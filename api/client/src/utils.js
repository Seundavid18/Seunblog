import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://seunblog.herokuapp.com/api"
})