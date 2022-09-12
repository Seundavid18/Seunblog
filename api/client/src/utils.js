import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://seundavidblog.herokuapp.com/api"
})