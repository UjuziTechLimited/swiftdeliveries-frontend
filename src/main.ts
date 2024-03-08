import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import { createPinia } from "pinia";
import "./plugins/axios";

import "./assets/css/tailwind.css";
import Vue3Lottie from "vue3-lottie";

import VueGoogleMaps from "vue-google-maps-community-fork";


const pinia = createPinia();

const app = createApp(App)
  .use(router)
  .use(pinia)
  .use(Vue3Lottie)

  .use(VueGoogleMaps, {
    load: {
      key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      libraries: "places",
    },
  })
  .mount("#app");
