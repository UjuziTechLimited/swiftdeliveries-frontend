import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// import tailwindcss
import './assets/tailwind.css'

// Azure Maps



const app = createApp(App)
    .use(router)

    .mount('#app')
