import http from "../http/index"
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import headers from "../http/headers"
export default function Portfolio() {
    const portfolioData = ref([])
    const errors = ref('')
    const router = useRouter()
    const disabledClick = ref(false)

    const populares = () => {
        if (localStorage.getItem('token')) {
            http.get('portfolios/populares', { headers: headers }).then(response => {
                portfolioData.value = response.data
            }).catch(error => {
                errors.value = error.message
            })
        } else {
            http.get('no-auth/portfolios/populares').then(response => {
                portfolioData.value = response.data
            }).catch(error => {
                errors.value = error.message
            })
        }
    }


    const random = () => {
        if (localStorage.getItem('token')) {
            http.get('portfolios/random', { headers: headers }).then(response => {
                portfolioData.value = response.data
            }).catch(error => {
                errors.value = error.message
            })
        } else {
            http.get('no-auth/portfolios/random').then(response => {
                portfolioData.value = response.data
            }).catch(error => {
                errors.value = error.message
            })
        }
    }

    const fromUser = () => {
        http.get('portfolios/fromUser', { headers: headers }).then(response => {
            portfolioData.value = response.data
        }).catch(error => {
            errors.value = error.message
        })
    }

    const portfolio = (id: String) => {
        http.get('portfolio/' + id, { headers: headers }).then(response => {
            portfolioData.value = response.data
        }).catch(error => {
            if (error.response.status == 403) {
                router.push('/my-portfolios')
            }
        })
    }

    const store = async (data: any) => {
        errors.value = ''
        await http.post('/portfolio', data, { headers: headers }).then(async response => {
            await Swal.fire({
                title: response.data.title,
                text: response.data.text,
                icon: response.data.icon
            });
        }).catch(error => {
            console.log(error)
        }).then(async () => {
            await router.push('/my-portfolios')
        })
    }


    const update = async (id: String, files: Object, existing_files: Object) => {
        let data = {
            'portfolio': portfolioData.value,
            'files': files,
            'existing_files': existing_files
        }
        await http.post('portfolios/update', data, { headers: headers }).then(async response => {
            await Swal.fire({
                title: response.data.title,
                text: response.data.text,
                icon: response.data.icon
            });
        }).catch(error => {
            console.log(error)
        }).then(async () => {
            await router.push('/my-portfolios')
        })
    }


    const destroy = async (id: Number | undefined) => {
        await http.delete(`/portfolio/${id}`, { headers: headers }).then(async response => {
            await Swal.fire({
                title: response.data.title,
                text: response.data.text,
                icon: response.data.icon
            });
        }).catch(error => {
            console.log(error)
        }).then(async () => {
            await router.push('/my-portfolios')
        })
    }


    return {
        fromUser,
        update,
        store,
        portfolioData,
        errors,
        random,
        portfolio,
        destroy,
        populares,
        disabledClick,
    }
}