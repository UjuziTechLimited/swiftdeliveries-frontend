
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import HomepageLayout from '@/App/Common/Layouts/HomepageLayout.vue';


</script>

<template>
    <HomepageLayout>

        <div class="min-h-screen hero"
            style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="text-center hero-content text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center h-screen">
            <h1 class="font-extrabold">Swift Deliveries</h1>
            <div class="my-4">
                <RouterLink :to="{ name: 'Dashboard' }"
                    class="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                    Go To Dashboard</RouterLink>
            </div>
        </div>
    </HomepageLayout>
</template>