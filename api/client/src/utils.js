import axios from 'axios'

export const axiosInstance = axios.create({
    //baseURL: "https://seundavidblog.herokuapp.com/api"
    baseURL: "http://localhost:9000/api"
})