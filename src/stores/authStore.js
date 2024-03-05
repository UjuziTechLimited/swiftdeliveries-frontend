import { defineStore } from 'pinia';
// import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null,
    }),
    getters: {
        user: (state) => state.authUser,
    },

    actions: {
        async login(email, password) {
            // console.log(email, password)
            // Dummy Login Logic
            if (email === 'admin@admin.com' && password === 'admin') {
                this.authUser = {
                    name: 'Admin',
                    email: 'admin@admin.com',
                }
                console.log(this.authUser)
                return true;

            }
            if (email === 'rider@rider.com' && password === 'rider') {
                this.authUser = {
                    name: 'Rider',
                    email: 'rider@rider.com',
                }
                console.log(this.authUser)
                return true;
            }
            else {
                return false;
            }
        },

        async logout() {
            console.log('Logging out...');

            // Dummy Logout Logic
            this.authUser = null;
            return true;

            // API call to logout

            // try {
            //     await axios.get('/sanctum/csrf-cookie');
            //     await axios.post('/logout')

            //     // Clear cookies
            //     document.cookie.split(';').forEach(function (c) {
            //         const name = c.split('=')[0].trim();
            //         if (name === 'laravel_session' || name === 'XSRF-TOKEN') {
            //             document.cookie = `${name}=;expires=${new Date().toUTCString()};path=/`;
            //         }
            //     });


            //     return true

            // } catch (error) {
            //     console.log(error);
            // }


            // Clear user data, token, and token expiry
            // this.authUser = null;
            // this.token = null;
            // this.tokenExpiry = null;

            // console.log(this.authUser)
        },
    },
});

