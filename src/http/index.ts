import axios from "axios"

const Http = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    }
})

export default Http