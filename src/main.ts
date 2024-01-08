import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'
import './plugins/axios'

import './assets/css/tailwind.css'
import Vue3Lottie from 'vue3-lottie'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const pinia = createPinia()

const app = createApp(App)
    .use(router)
    .use(pinia)
    .use(Vue3Lottie)
    .use(VueSweetalert2)
    .mount('#app')
