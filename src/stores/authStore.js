import { defineStore } from 'pinia';
import axios from 'axios';

const TOKEN_EXPIRY_SECONDS = 3600; // Token expiration time in seconds (1 hour for example)

export const useAuthStore = defineStore('auth', {
    state: () => ({

        authUser: null,

        users: [
            {
                id: 1,
                name: 'Admin',
                email: 'admin@admin.com',
                password: 'admin',
                role: 'admin',

            },
            {
                id: 2,
                name: 'User',
                email: 'user@user.com',
                password: 'user',
                role: 'user',
            },
        ]

    }),
    getters: {
        user: (state) => state.authUser,
    },

    actions: {
        login(email, password) {



            // // Dummy authentication, replace with your actual authentication logic
            // if (email === 'admin@admin.com' && password === 'admin') {
            //     // Set dummy user
            //     this.authUser = { email: 'admin@admin.com', role: 'admin' };

            //     return true; // Successful login
            // }

            return false; // Failed login
        },

        logout() {
            console.log('Logging out...');
            // Clear user data, token, and token expiry
            this.user = null;
            this.token = null;
            this.tokenExpiry = null;
        },

        // Function to check if the user is authenticated
        isAuthenticated() {
            // return !!this.token && this.tokenExpiry > new Date();
            if (this.token) {
                return true;
            }
            return false;
        },
    },
});

