import { createApp, ref } from 'vue'
import './style.css'
import './index.css'
import router from './router'
import App from './App.vue'
import { key, store } from './store'
import Http from './http'
import VueAnalytics from 'vue-analytics';

// const loading = ref(true)

Http.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response.status == 401) {
            console.log('ok')
            Http.get('/refresh')
                .then(response => {
                    localStorage.setItem('token', response.data)
                    location.reload()
                }).catch(error => {
                    console.log('Error => ' + error)
                })
        }
        return error
    }
)

// export default loading



createApp(App).use(router).use(store, key).mount('#app')
