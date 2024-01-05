<!-- src/App/Modules/Orders/Components/InboxDetails.vue -->

<script setup>

const props = defineProps(['inbox']);
</script>


<template>
    <div class="max-w-md p-6 mx-auto mt-4 bg-white rounded-md shadow-md">
        <h1 class="mb-4 text-xl font-bold">Message Details</h1>
        <div v-if="$props.inbox">
            <p><span class="font-bold">ID:</span> {{ props.inbox.id }}</p>
            <p><span class="font-bold">Name:</span> {{ props.inbox.name }}</p>
            <p><span class="font-bold">Email:</span> {{ props.inbox.email }}</p>
            <p><span class="font-bold">Message:</span> {{ props.inbox.message }}</p>
            <!-- Add more details as needed -->
        </div>
        <div v-else>
            <p>No Message selected</p>
        </div>
    </div>
</template>

<style scoped>
/* Add your custom styling here */
</style>