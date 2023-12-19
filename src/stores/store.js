import { createPinia } from 'pinia'
import { useAuthStore } from './auth'

export const pinia = createPinia();

// install hook globally
export const install = () => {
    pinia.use(store);
}