
<script setup lang="ts">
import { RouterLink } from 'vue-router';




</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="font-extrabold">Swift Deliveries</h1>
        <div class="my-4">
            <RouterLink :to="{ name: 'Dashboard' }" class="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                Go To Dashboard</RouterLink>
        </div>
    </div>
</template>