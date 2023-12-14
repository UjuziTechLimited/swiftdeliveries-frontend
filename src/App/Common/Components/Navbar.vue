
<script setup lang="ts">
import { RouterLink } from 'vue-router';



</script>

<template>
    <nav class="sticky border-b-2 border-b-gray-100">
        <div class="flex items-center justify-between px-2 py-2">
            <RouterLink :to="{ name: 'Homepage' }" class="text-2xl font-bold">Swift Deliveries <span
                    class="text-5xl font-bold text-red-500">.</span></RouterLink>
            <div class="flex gap-4">
                <RouterLink :to="{ name: 'Dashboard' }">
                    <h2
                        class="p-1 m-1 font-sans font-bold lowercase duration-150 ease-in-out hover:bg-purple-500 rounded-xl">
                        Dashboard</h2>
                </RouterLink>
                <RouterLink :to="{ name: 'Orders' }">
                    <h2
                        class="p-1 m-1 font-sans font-bold lowercase duration-150 ease-in-out hover:bg-purple-500 rounded-xl">
                        Orders</h2>
                </RouterLink>
                <RouterLink :to="{ name: 'Riders' }">
                    <h2
                        class="p-1 m-1 font-sans font-bold lowercase duration-150 ease-in-out hover:bg-purple-500 rounded-xl">
                        Riders</h2>
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>