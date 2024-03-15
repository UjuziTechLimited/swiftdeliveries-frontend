import { defineStore } from 'pinia'

import { useUsersStore } from './usersStore'

import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
    }),
    getters: {
        isAuthenticated: (state) => !!state.user && !!state.token,
        role: (state) => state.user?.role,
    },

    actions: {
        async login(email, password) {
            try {
                const response = await axios.get('/auth/login',
                    {
                        email: email,
                        password: password
                    })
                this.user = response.data.user
                this.token = response.data.token

                console.log('Login successful:', response.data.user, response.data.token)
            } catch (error) {
                console.error('Login failed:', error)
                throw error
            }
        },
        // async login(email, password) {

        //     const usersStore = useUsersStore();

        //     if (usersStore.users.some(user => user.email === email)) {
        //         this.authUser = usersStore.users.find(user => user.email === email)
        //         console.log(this.authUser)
        //         return true;
        //     }

        // },


        async register(userData) {
            try {
                const response = await axios.post('/api/auth/register', userData)
                this.user = response.data.user
                this.token = response.data.token
            } catch (error) {
                console.error('Registration failed:', error)
                throw error
            }
        },

        // Dummy Logout Logic
        async logout() {
            console.log('Logging out...');


            this.authUser = null;
            return true;

        },

        // async logout() {
        //         try {
        //             await axios.post('/api/auth/logout', null, {
        //                 headers: {
        //                     Authorization: `Bearer ${this.token}`,
        //                 },
        //             })
        //             this.user = null
        //             this.token = null
        //         } catch (error) {
        //             console.error('Logout failed:', error)
        //         }
        //     },

        async fetchUser() {
            try {
                const response = await axios.get('/api/auth/user', {
                    headers: {
                        Authorization: `Bearer ${this.token}`,
                    },
                })
                this.user = response.data.user
            } catch (error) {
                console.error('Failed to fetch user:', error)
                this.user = null
                this.token = null
            }
        },
    },
})
