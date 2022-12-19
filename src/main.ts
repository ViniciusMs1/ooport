import { createApp, ref } from 'vue'
import './style.css'
import './index.css'
import router from './router'
import App from './App.vue'
import { key, store } from './store'
import Http from './http'
import VueAnalytics from 'vue-analytics';

// const loading = ref(true)



// export default loading



createApp(App).use(router).use(store, key).mount('#app')
