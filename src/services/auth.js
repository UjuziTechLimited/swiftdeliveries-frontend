import { useAuthStore } from '@/stores/auth';
import api from '@/services/api';


export const authService = {
    async login(email, password) {

        try {
            const response = await api.post('login', { email, password },);
            const { user, token } = response.data;

            // Set the user in the Pinia store
            useAuthStore().setUser(user);

            // Save the user and token in localStorage to persist the login state
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);

            return user;

        } catch (error) {
            throw new Error('Invalid credentials');
        }
    },
    logout() {
        // Clear the user and token in the Pinia store
        useAuthStore().setUser(null);

        // Remove the user from localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    },
    // Add more authentication-related methods as needed
};
