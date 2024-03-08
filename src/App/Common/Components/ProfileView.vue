<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();

</script>

<template>
    <div v-if="authStore.authUser === null">
        <h1 class="">Error!</h1>
        <h2 class="">Profile Not Found!</h2>
    </div>
    <div v-else>
        <div class="max-w-md p-6 mx-auto mt-4 rounded-md shadow-md">
            <h1 class="mb-4 text-xl font-bold">Profile</h1>
            <div>
                <p><span class="font-bold">Name:</span> {{ authStore.authUser.name }}</p>
                <p><span class="font-bold">Email:</span> {{ authStore.authUser.email }}</p>
                <p><span class="font-bold">Role:</span> {{ authStore.authUser.role }}</p>
                <!-- Add more details as needed -->
            </div>
        </div>

    </div>
</template>


<style scoped></style>