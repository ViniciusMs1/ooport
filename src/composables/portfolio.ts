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
    const loading = ref(true)
    const imgRandom = ref()


    const randomImagem = () => {
        var imgRandomArray = [
            "https://cdn.pixabay.com/photo/2018/04/29/07/59/flowers-3359253_1280.png",
            "https://cdn.pixabay.com/photo/2022/11/30/01/25/christmas-7625680_1280.jpg",
            "https://cdn.pixabay.com/photo/2022/11/30/01/16/christmas-7625666_1280.jpg",
            "https://cdn.pixabay.com/photo/2019/06/22/00/10/postcard-memories-4290548_1280.jpg",
            "https://cdn.pixabay.com/photo/2019/05/01/01/03/vintage-4169862_1280.jpg",
            "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413_1280.jpg",
            "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
        ]
        imgRandom.value = imgRandomArray[Math.floor(Math.random() * 7)]
    }


    const populares = () => {
        if (localStorage.getItem('token')) {
            http.get('portfolios/populares', { headers: headers }).then(response => {
                portfolioData.value = response.data
                loading.value = false
            }).catch(error => {
                errors.value = error.message
            })
        } else {
            http.get('no-auth/portfolios/populares').then(response => {
                portfolioData.value = response.data
                loading.value = false
            }).catch(error => {
                errors.value = error.message
            })
        }
    }


    const random = () => {
        if (localStorage.getItem('token')) {
            http.get('portfolios/random', { headers: headers }).then(response => {
                portfolioData.value = response.data
                loading.value = false
            }).catch(error => {
                errors.value = error.message
            })
        } else {
            http.get('no-auth/portfolios/random').then(response => {
                portfolioData.value = response.data
                loading.value = false
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
        loading,
        randomImagem,
        imgRandom
    }
}