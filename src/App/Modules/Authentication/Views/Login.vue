<script setup>
import MainLayout from '@/App/Common/Layouts/MainLayout.vue';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

import router from '@/router';

const authStore = useAuthStore();


const email = ref('');
const password = ref('');

const onLogin = async () => {
    console.log('Login  button clicked')
    console.log(authStore.token);

    if (await authStore.login(email.value, password.value)) {
        // Redirect to the dashboard on successful login
        router.push('/dashboard');
    } else {
        // Handle failed login (show error message, etc.)
        console.error('Invalid credentials');
    }
};



</script>
<template>
    <MainLayout>
        <div class="container min-h-screen mx-auto hero bg-base-200 rounded-xl">
            <div class="flex-col hero-content lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Login now!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div class="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
                    <form class="card-body" @submit.prevent="onLogin">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input v-model="email" name="email" type="email" placeholder="someone@example.com"
                                class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input v-model="password" name="password" type="password" placeholder="password"
                                class="input input-bordered" required />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="mt-6 form-control">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </MainLayout>
</template>


<style scoped></style>