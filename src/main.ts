import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import api from './services/api'

import { pinia } from './stores/store'

import Vue3Lottie from 'vue3-lottie'


import './assets/css/tailwind.css'


// Set the CSRF token for Axios
api.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector(
    'meta[name="csrf-token"]'
).content;


const app = createApp(App)
    .use(router)
    // .use(VueAzureMaps)
    .use(pinia)
    .use(Vue3Lottie)
    .mount('#app')
