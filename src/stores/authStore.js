import { defineStore } from 'pinia';

const TOKEN_EXPIRY_SECONDS = 3600; // Token expiration time in seconds (1 hour for example)

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
        tokenExpiry: null,

    }),

    actions: {
        login(email, password) {

            // Dummy authentication, replace with your actual authentication logic
            if (email === 'admin@admin.com' && password === 'admin') {
                // Set dummy user
                this.user = { email: 'admin@admin.com', role: 'admin' };

                // Generate a dummy token and set token expiry
                const token = 'dummy_token'; // Replace with a proper token generation logic
                const tokenExpiry = new Date(Date.now() + TOKEN_EXPIRY_SECONDS * 1000);

                // Set token and token expiry in the state
                this.token = token;
                this.tokenExpiry = tokenExpiry;



                return true; // Successful login
            }

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

