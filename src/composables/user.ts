import http from "../http/index"
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import IUser from "../interface/IUser"
import headers from "../http/headers"
export default function Profile() {
    const profileData = ref([])
    const errors = ref([])
    const router = useRouter()
    const verify_password = ref(false)
    const invalid_current_password = ref(false)
    const preview_photo = ref()
    const loading = ref(true)
    const disabledClick = ref(false)


    const update = async () => {
        await http.post('user/update', profileData.value, { headers: headers }).then(async response => {
            await Swal.fire({
                title: response.data.title,
                text: response.data.text,
                icon: response.data.icon
            });
        }).catch(error => {
            console.log(error)
        }).then(async () => {
            await router.push('/my-profile')
        })
    }


    const updatePhoto = (form: any, file: any) => {
        preview_photo.value = URL.createObjectURL(file)
        http.post('user/update/photo', form, { headers: headers }).then(async response => {
            await Swal.fire({
                title: response.data.title,
                text: response.data.text,
                icon: response.data.icon
            });
        }).catch(error => {
            console.log(error)
        }).then(async () => {
            await router.push('/my-profile')
        })
    }

    const me = async () => {
        await http.get('user/me', { headers: headers }).then(response => {
            localStorage.setItem('photo', response.data.photo)
            profileData.value = response.data
            loading.value = false
        }).catch(error => {
            errors.value = error.message
        })
    }

    const profile = (user: String) => {
        if (localStorage.getItem('token')) {
            http.post('user/profile', { data: user }, { headers: headers }).then(response => {
                profileData.value = response.data
                loading.value = false
            }).catch(error => {
                errors.value = error.message
            })
        } else {
            http.post('no-auth/user/profile', { data: user }).then(response => {
                profileData.value = response.data
                loading.value = false
            }).catch(error => {
                errors.value = error.message
            })
        }
    }



    const updatePassword = async (password: any) => {
        let data = {
            'password': password.current_password,
            'new_password': password.new_password,
        }
        if (password.new_password != password.confirm_password) {
            verify_password.value = true
        } else {
            verify_password.value = false
            await http.post('user/update/password', data, { headers: headers }).then(async response => {
                await Swal.fire({
                    title: response.data.title,
                    text: response.data.text,
                    icon: response.data.icon
                });
            }).catch(errors => {
                console.log(errors)
            })
        }
    }


    return {
        profileData,
        errors,
        me,
        update,
        profile,
        updatePassword,
        verify_password,
        invalid_current_password,
        updatePhoto,
        preview_photo,
        loading,
        disabledClick,
    }
}