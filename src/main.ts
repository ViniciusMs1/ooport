import { createApp, ref } from 'vue'
import './style.css'
import './index.css'
import router from './router'
import App from './App.vue'
import { key, store } from './store'
import Http from './http'

// const loading = ref(true)

// Http.interceptors.response.use(
//     response => {
//         setTimeout(() => {
//             loading.value = false
//         }, 500)

//         return response
//     },
//     // error => {
//     //     if (error.response.status == 401) {
//     //         Http.post('/refresh')
//     //             .then(response => {
//     //                 console.log('=>' + response)
//     //             }).catch(error => {
//     //                 console.log('Error => ' + error)
//     //             })
//     //     }
//     //     return error
//     // }
// )

// export default loading



createApp(App).use(router).use(store, key).mount('#app')
