import axios from "axios"

const Http = axios.create({
    baseURL: "https://ooport.online/api",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    }
})

export default Http