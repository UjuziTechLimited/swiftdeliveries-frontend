import { defineStore } from 'pinia';
import { useAuthStore } from './AuthStore'; // Import the login store

export const useUserStore = defineStore('user', {
  state: () => ({
    // User specific data (e.g., preferences, address)
    preferences: {},
    address: {},
  }),
  actions: {
    async updatePreferences(newPreferences) {
      // Update user preferences based on provided data
      this.preferences = newPreferences;
      // TODO: Call API to update user preferences on backend (optional)
    },
    async updateAddress(newAddress) {
      // Update user address based on provided data
      this.address = newAddress;
      // TODO: Call API to update user address on backend (optional)
    },
  },
  getters: {
    getUserPreferences: (state) => state.preferences,
    getUserAddress: (state) => state.address,
    // Combine user data from user and login stores
    combinedUserData: (state) => ({
      ...state,
      isLoggedIn: useAuthStore().isAuthenticated,
      currentUser: useAuthStore().currentUser,
    }),
  },
});
