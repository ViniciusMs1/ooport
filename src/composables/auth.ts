import http from "../http/index"
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
export default function Auth() {
    const profile = ref([])
    const router = useRouter()
    const errors = ref([])
    const msg = ref()
    const disabledClick = ref(false)

    const login = (data: any) => {

        http.post('login', data).then(async response => {
            console.log(response)

            if (response.data.token) {
                sessionStorage.removeItem('msg_login')
                localStorage.setItem('token', response.data.token)
                await router.push('/my-profile')
                location.reload()
            } else {
                await router.push('/login')
            }
        }).catch(async error => {
            disabledClick.value = false
            await Swal.fire({
                title: 'Falha',
                text: 'Email ou senha inválidos',
                icon: 'warning',

            });
        })



    }

    const register = async (data: any) => {
        await http.post('/user', data).then(response => {
            if (response.status == 200) {
                if (!response.data.erro) {
                    sessionStorage.setItem('msg_login', 'true')
                    router.push('/login')
                }
                disabledClick.value = false
                msg.value = response.data
            }
        }).catch(errors => {
            disabledClick.value = false
        })
    }

    return {
        profile,
        login,
        register,
        errors,
        msg,
        disabledClick
    }
}