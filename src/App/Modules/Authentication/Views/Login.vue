<script setup>
import MainLayout from '@/App/Common/Layouts/MainLayout.vue';
import { useAuthStore } from '@/stores/authStore';
import { onMounted, ref } from 'vue';

import router from '@/router';
// import { LogIn } from 'lucide-vue-next';

const authStore = useAuthStore();

const form = ref({
    email: '',
    password: '',
});
// const error = ref('');



const onLogin = async () => {
    if (await authStore.login(form.value.email, form.value.password)) {

        if (authStore.authUser.role === 'super') {
            router.push('/super/')
        }
        if (authStore.authUser.role === 'admin') {
            router.push('/admin/dashboard');
        }
        if (authStore.authUser.role === 'dispatch') {
            router.push('/admin/dashboard');
        }
        if (authStore.authUser.role === 'rider') {
            router.push('/rider/dashboard');
        }

    } else {
        console.error('Invalid credentials');
        alert('Invalid credentials');
    }
};
</script>

<template>
    <MainLayout>
        <div class="container mx-auto bg-base-200 rounded-xl">
            <div class="">
                <div class="shadow-2xl card bg-base-100">
                    <form class="card-body" @submit.prevent="onLogin">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input v-model="form.email" name="email" type="email" placeholder="someone@example.com"
                                class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input v-model="form.password" name="password" type="password" placeholder="password"
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