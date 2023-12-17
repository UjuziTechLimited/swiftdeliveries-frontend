import { defineStore } from 'pinia';
import type { User } from '@/types/User';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        isLoggedIn: false,
        currentUser: null as User | null,
        token: null,
    }),
    actions: {
        async login(username: String, password: String) {
            // Replace with your API call or authentication service
            const user: User = { username: "admin@admin.com" };
            this.isLoggedIn = true;
            this.currentUser = user;
            // TODO: Store token if applicable
        },
        logout() {
            this.isLoggedIn = false;
            this.currentUser = null;
            this.token = null;
        },
    },
    getters: {
        isAuthenticated: (state) => state.isLoggedIn,
        currentUser: (state) => state.currentUser,
        getToken: (state) => state.token,
    },
});
