import http from "../http/index"
import { ref } from 'vue'

export default function ForgotPassword() {
    const errors = ref<any[]>([])
    const showMsg = ref(false)
    const disabledClick = ref(false)
    const verify_password = ref(false)
    const success_forgot = ref(false)
    const msg = ref()

    const sendMail = async (email: any) => {
        await http.post('send-mail', email, {
        }).then(response => {
            showMsg.value = true
        }).catch(error => {
            msg.value = error.response.data
            disabledClick.value = false
        })
    }

    const ForgotPassword = async (password: any) => {

        if (password.password != password.confirm_password) {
            verify_password.value = true
        } else {
            await http.post('forgot-password', password, {
            }).then(response => {
                if (response.data) {
                    success_forgot.value = true
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }

    return {
        sendMail,
        errors,
        showMsg,
        disabledClick,
        ForgotPassword,
        verify_password,
        success_forgot,
        msg
    }
}