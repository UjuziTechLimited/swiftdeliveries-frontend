import { defineStore } from 'pinia';
import { authService } from '@/services/auth.js';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
    }),
    actions: {
        setUser(user) {
            this.user = user;
        },
        login(email, password) {
            email = email.value
            password = password.value
            return authService.login(email, password);
        },
        logout() {
            authService.logout();
        },
    },
});
