import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null,
    }),
    getters: {
        user: (state) => state.authUser,
    },

    actions: {
        async login(email, password) {
            console.log(email, password)

            try {
                await axios.get('/sanctum/csrf-cookie');
                await axios.post('/login', {
                    email,
                    password
                })
                await axios.get('/api/user').then(response => {
                    this.authUser = response.data;
                    console.log(this.authUser);

                })
                return true;

            } catch (error) {
                console.log(error);
            }
        },

        async logout() {
            console.log('Logging out...');

            try {
                await axios.get('/sanctum/csrf-cookie');
                await axios.post('/logout')

                // Clear cookies
                document.cookie.split(';').forEach(function (c) {
                    const name = c.split('=')[0].trim();
                    if (name === 'laravel_session' || name === 'XSRF-TOKEN') {
                        document.cookie = `${name}=;expires=${new Date().toUTCString()};path=/`;
                    }
                });


                return true

            } catch (error) {
                console.log(error);
            }


            // Clear user data, token, and token expiry
            this.authUser = null;
            this.token = null;
            this.tokenExpiry = null;

            console.log(this.authUser)
        },
    },
});

