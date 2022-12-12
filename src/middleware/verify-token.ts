import http from "../http"
import router from "../router"



export default {
    verifyToken(token: any) {
        const data = {
            token: token.params.token
        }
        http.post('verify-token', data, {
        }).then(response => {
            if (!response.data) {
                router.push('/login')
            }
        }).catch(error => {
            console.log(error)
        })
    }
}