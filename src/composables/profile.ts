import http from "../http/index"
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import IUser from "../interface/IUser"
export default function Profile() {
    const profile = ref([])
    const errors = ref([])
    const router = useRouter()
    const verify_password = ref(false)
    const invalid_current_password = ref(false)
    const preview_photo = ref()
    const loading = ref(true)
    const disabledClick = ref(false)



    const updatePhoto = (form: any, file: any) => {

        preview_photo.value = URL.createObjectURL(file)

        http.post('update-photo', form).then(async response => {
            await Swal.fire({
                title: 'Sucesso',
                text: "Imagem alterada com sucesso!",
                icon: 'success',

            });
            await router.push('/my-profile')
        }).catch(error => {
            console.log(error)
        })
    }

    const getProfile = async () => {
        await http.get('me').then(response => {
            localStorage.setItem('photo',response.data.photo)
            profile.value = response.data
            loading.value = false
        }).catch(error => {
            errors.value = error.message
        })
    }

    const viewProfile = (user: String) => {
        http.post('viewProfile', { data: user }).then(response => {
            profile.value = response.data
            loading.value = false
        }).catch(error => {
            errors.value = error.message
        })
    }

    const updateProfile = async (id: any) => {
        
        try {
            await http.post('update-user', profile.value)

            await Swal.fire({
                title: 'Sucesso',
                text: "Dados atualizados com sucesso!",
                icon: 'success',

            });
            await router.push('/my-profile')

        } catch (e: any) {

            await Swal.fire({
                title: 'Erro',
                text: "Não foi possível atualizar os dados.",
                icon: 'warning',

            });
            await router.push('/my-profile')
            for (const key in e.response.data.errors) {
                // errors.value += e.response.data.errors[key][0] + ' ';
            }
        }
    }

    const updatePassword = async (password: any, userId: Number | undefined) => {
        let data = {
            'password': password.current_password,
            'new_password': password.new_password,
            'id': userId
        }
        if (password.new_password != password.confirm_password) {
            verify_password.value = true
        } else {
            verify_password.value = false
            await http.post('update-password', data).then(response => {
                if (response.data.invalid_current_password) {
                    invalid_current_password.value = true
                } else {
                    invalid_current_password.value = false
                    Swal.fire({
                        title: 'Sucesso',
                        text: "Senha alterada com sucesso!",
                        icon: 'success',

                    });
                }
            }).catch(errors => {
                console.log(errors)
            })
        }
    }


    return {
        profile,
        errors,
        getProfile,
        updateProfile,
        viewProfile,
        updatePassword,
        verify_password,
        invalid_current_password,
        updatePhoto,
        preview_photo,
        loading,
        disabledClick,
    }
}