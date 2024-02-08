import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'
import './plugins/axios'

import './assets/css/tailwind.css'
import Vue3Lottie from 'vue3-lottie'


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import "leaflet/dist/leaflet.css";
import VueGoogleMaps from 'vue-google-maps-community-fork';


const pinia = createPinia()

const app = createApp(App)
    .use(router)
    .use(pinia)
    .use(Vue3Lottie)
    .use(VueSweetalert2)
    .use(VueGoogleMaps, {
        load: {
          key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
          libraries: "places"
        },
      })
    .mount('#app')
