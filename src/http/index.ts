import axios from "axios"

const Http = axios.create({
    baseURL: "https://ooport.online/api",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
    }
})

export default Http