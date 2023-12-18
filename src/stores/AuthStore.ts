
import { defineStore } from "pinia";
import auth from "@/services/auth.service";
import router from "@/router";


export const useAuthStore = defineStore({
    id: "authStore",

    state: () => {
        return {
            token: {},
            isAuthenticated: false,
        };
    },

    getters: {
    },

    actions: {
        async login(email: string, password: string) {
            try {
                let response = await auth.login(email, password);
                this.token = response.data.token;
                this.isAuthenticated = true;
                router.push("/dashboard");
            } catch (error) {
                console.log(error);
            }
        },
    },
});