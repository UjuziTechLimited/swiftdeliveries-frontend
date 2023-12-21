<script setup>
import { themeChange } from 'theme-change';

import { onMounted } from "vue";
import { RouterLink } from 'vue-router';

import router from '@/router';

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const logout = async () => {
    try {
        await authStore.logout();
        router.push('/login');
    } catch (error) {
        console.log(error);
    }
};

onMounted(() => {
    themeChange(false);
});

</script>

<template>
    <div class="container mx-auto navbar">
        <div class="navbar-start">
            <img src="@/assets/images/logo.png" alt="ujuzitech logo" class="w-12 h-12">
            <RouterLink :to="{ name: 'Homepage' }" class="text-xl font-bold btn btn-ghost">SwiftDeliveries</RouterLink>
        </div>
        <div class="hidden navbar-center lg:flex">
            <ul class="px-1 menu menu-horizontal">
                <li>
                    <RouterLink :to="{ name: 'Dashboard' }" class="text-xl font-bold">Dashboard </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'Orders' }" class="text-xl font-bold">Orders </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'Riders' }" class="text-xl font-bold">Riders </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'Analytics' }" class="text-xl font-bold">Analytics </RouterLink>
                </li>
                <li>
                    <details>
                        <summary class="text-xl font-bold">Other Features</summary>
                        <ul class="p-2">
                            <li><a href="#" class="text-xl font-bold">Feature 1</a></li>
                            <li><a href="#" class="text-xl font-bold">Feature 2</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>

        <div class="navbar-end">
            <!-- logout button -->
            <form @submit.prevent="logout">
                <button class="btn btn-ghost btn-sm rounded-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 19l9-7-9-7m0 14V5m-7 14h14M5 12h13" />
                    </svg>
                    Logout
                </button>
            </form>


            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box ">
                    <li>
                        <RouterLink :to="{ name: 'Dashboard' }" class="text-xl font-bold">Dashboard </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'Orders' }" class="text-xl font-bold">Orders </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'Riders' }" class="text-xl font-bold">Riders </RouterLink>
                    </li>
                    <li>
                        <details>
                            <summary class="text-xl font-bold">Other Features</summary>
                            <ul class="p-2">
                                <li><a href="#" class="text-xl font-bold">Feature 1</a></li>
                                <li><a href="#" class="text-xl font-bold">Feature 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div>

            </div>
            <label class="swap swap-rotate">
                <!-- this hidden checkbox controls the state -->
                <input data-toggle-theme="dark,light" data-act-class="light" type="checkbox" class="theme-controller"
                    value="dark" />
                <!-- sun icon -->
                <svg class="w-8 h-8 fill-current swap-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <!-- moon icon -->
                <svg class="w-8 h-8 fill-current swap-off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
            </label>
        </div>
    </div>
</template>