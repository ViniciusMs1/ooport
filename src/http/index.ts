import axios from "axios"

const Http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    }
})

export default Http