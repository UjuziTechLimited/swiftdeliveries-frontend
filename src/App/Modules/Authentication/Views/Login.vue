<script setup>
import MainLayout from '@/App/Common/Layouts/MainLayout.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';


const router = useRouter();

const email = ref("");
const password = ref("");

const AuthStore = useAuthStore();

const login = async () => {
    try {
        await AuthStore.login(email, password);
        router.push({ name: "dashboard" });
    } catch (error) {
        console.log(error.message);
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
                    <form class="card-body" @submit.prevent="login">
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