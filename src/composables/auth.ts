import http from "../http/index"
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
export default function Auth() {
    const profile = ref([])
    const router = useRouter()
    const errors = ref([])
    const msg = ref()

    const login = async (data: any) => {
        try {
            let response = await http.post('login', data)
            if (response.data.token) {
                sessionStorage.removeItem('msg_login');
                localStorage.setItem('token', response.data.token);
                await router.push('/dashboard')
                await location.reload()
            } else {
                await router.push('/login')
            }
        } catch (e: any) {
            let msg = e.response.data.erro

            await Swal.fire({
                title: 'Falha',
                text: msg,
                icon: 'warning',

            });
        }
    }

    const register = async (data: any) => {
        await http.post('/user', data).then(response => {
            if (response.status == 200) {
                if (!response.data.erro) {
                    sessionStorage.setItem('msg_login', 'true')
                    router.push('/login')
                }
                msg.value = response.data
            }
        }).catch(errors => {
            console.log(errors)
        })
    }

    return {
        profile,
        login,
        register,
        errors,
        msg
    }
}