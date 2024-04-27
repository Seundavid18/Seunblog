import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://seunblog.azurewebsites.net/api"
    //baseURL: "http://localhost:9000/api"
})