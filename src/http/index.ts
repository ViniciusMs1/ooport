import axios from "axios"
import router from "../router"
import headers from "./headers"

const Http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: headers
})






Http.interceptors.response.use(
    response => {
        return response
    },
    async error => {
        if (error.response.status == 401) {
            localStorage.clear()
            router.push('')
            // Http.get('/refresh')
            //     .then(response => {
            //         localStorage.setItem('token', response.data)
            //         // location.reload()
            //     }).catch(error => {
            //         console.log('Error => ' + error)
            //     })
        }
        return error
    }
)

export default Http