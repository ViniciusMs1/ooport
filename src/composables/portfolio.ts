import http from "../http/index"
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import IPortfolio from "../interface/IPortfolio"
export default function Portfolio() {
    const portfolios = ref([])
    const portfolio = ref([])
    const errors = ref('')
    const router = useRouter()
    const disabledClick = ref(false)

    const getPopularPortfolios = () => {

        if (localStorage.getItem('token')) {
            http.get('getPopularPortfilios').then(response => {
                portfolios.value = response.data
            }).catch(error => {
                errors.value = error.message
            })
        } else {
            http.get('getPopularPortfiliosN').then(response => {
                portfolios.value = response.data
            }).catch(error => {
                errors.value = error.message
            })
        }



    }


    const getPortfolios = () => {

        if (localStorage.getItem('token')) {
            http.get('portfolios').then(response => {
                portfolios.value = response.data
            }).catch(error => {
                errors.value = error.message
            })
        } else {
            http.get('portfoliosN').then(response => {
                portfolios.value = response.data
            }).catch(error => {
                errors.value = error.message
            })
        }


    }

    const my_portfolios = () => {
        http.get('my_portfolios').then(response => {
            portfolios.value = response.data
        }).catch(error => {
            errors.value = error.message
        })
    }

    const getPortfolio = (id: String) => {
        http.get('portfolios/' + id).then(response => {
            portfolio.value = response.data.data
        }).catch(error => {
            if (error.response.status == 403) {
                router.push('/my-portfolios')
            }
        })
    }

    const storePortfolio = async (data: any) => {
        errors.value = ''
        try {
            await http.post('/portfolios', data)
            await Swal.fire({
                title: 'Sucesso',
                text: "Portfólio publicado com sucesso!",
                icon: 'success',

            });
            await router.push('/my-portfolios')
        } catch (e: any) {
            disabledClick.value = false
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }


    const updatePortfolio = async (id: String, files: Object, existing_files: Object) => {
        let data = {
            'portfolio': portfolio.value,
            'files': files,
            'existing_files': existing_files
        }
        try {
            await http.post('/update-portfolio', data)

            await Swal.fire({
                title: 'Sucesso',
                text: "Seu portfólio foi atualizado com sucesso!",
                icon: 'success',

            });
            await router.push('/my-portfolios')

        } catch (e: any) {
            await Swal.fire({
                title: 'Erro',
                text: "Não foi possível atualizar seu portfólio.",
                icon: 'warning',

            });
            await router.push('/my-portfolios')
            for (const key in e.response.data.errors) {
                // errors.value += e.response.data.errors[key][0] + ' ';
            }
        }
    }


    const destroyPortfolio = async (id: Number | undefined) => {
        await http.delete(`/portfolios/${id}`)
        await Swal.fire({
            title: 'Sucesso',
            text: "Portfólio foi excluido com sucesso!",
            icon: 'success',
        });
        await router.push('/my-portfolios')
    }


    return {
        my_portfolios,
        updatePortfolio,
        storePortfolio,
        portfolios,
        portfolio,
        errors,
        getPortfolios,
        getPortfolio,
        destroyPortfolio,
        getPopularPortfolios,
        disabledClick,
    }
}