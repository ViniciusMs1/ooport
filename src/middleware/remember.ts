import router from "../router"



export default {
    remember() {
        if(localStorage.getItem('token')){
            router.push('/my-profile');
        }
    }
}