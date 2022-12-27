import axios from "axios"
import router from "../router"
import headers from "./headers"

const Http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: headers
})


Http.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        localStorage.clear()
        location.reload()
    }
    return Promise.reject(error);
});

export default Http