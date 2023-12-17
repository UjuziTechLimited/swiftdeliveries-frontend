import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// import tailwindcss
import './assets/css/tailwind.css'

// Azure Maps
// import VueAzureMaps from 'vue-azure-maps'

// Pinia
import { createPinia } from 'pinia'

const pinia = createPinia()


const app = createApp(App)
    .use(router)
    // .use(VueAzureMaps)
    .use(pinia)
    .mount('#app')
