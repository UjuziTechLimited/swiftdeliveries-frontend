import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { createPinia } from 'pinia'

// tailwindcss
import './assets/tailwind.css'

// animate on scroll
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// AOS.init()



//
//
const app = createApp(App)
// app.use(createPinia())
app.use(router)
app.mount('#app')
