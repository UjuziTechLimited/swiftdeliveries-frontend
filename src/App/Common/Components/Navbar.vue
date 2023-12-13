
<script setup lang="ts">
import { RouterLink } from 'vue-router';



</script>



<template>
    <nav class="sticky shadow ">
        <div class="flex items-center justify-between">
            <RouterLink :to="{ name: 'Homepage' }" class="text-2xl font-bold lg:text-3xl">Swift Deliveries <span
                    class="text-5xl font-bold text-red-500">.</span></RouterLink>
            <div class="flex gap-4">
                <RouterLink :to="{ name: 'Dashboard' }">
                    <h2 class="font-serif font-bold">Dashboard</h2>
                </RouterLink>
                <RouterLink :to="{ name: 'Orders' }">
                    <h2 class="font-serif font-bold">Orders</h2>
                </RouterLink>
                <RouterLink :to="{ name: 'Riders' }">
                    <h2 class="font-serif font-bold">Riders</h2>
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>