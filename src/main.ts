import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/css/tailwind.css'
import Vue3Lottie from 'vue3-lottie'



const pinia = createPinia()

const app = createApp(App)
    .use(router)
    // .use(VueAzureMaps)
    .use(pinia)
    .use(Vue3Lottie)
    .mount('#app')
