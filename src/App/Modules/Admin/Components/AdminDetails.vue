<!-- src/App/Modules/Orders/Components/OrderDetails.vue -->

<script setup>

const props = defineProps(['admin']);
</script>


<template>
    <div class="max-w-md p-6 mx-auto mt-4 bg-white rounded-md shadow-md">
        <h1 class="mb-4 text-xl font-bold">Order Details</h1>
        <div v-if="$props.admin">
            <p><span class="font-bold">ID:</span> {{ props.admin.id }}</p>
            <p><span class="font-bold">Name:</span> {{ props.admin.name }}</p>
            <p><span class="font-bold">Email:</span> {{ props.admin.email }}</p>
            <p><span class="font-bold">Organization:</span> {{ props.admin.organization }}</p>
            <!-- <p><span class="font-bold">Delivery Status:</span> {{ props.admin.deliveryStatus }}</p> -->
            <!-- Add more details as needed -->
        </div>
        <div v-else>
            <p>No admin selected</p>
        </div>
    </div>
</template>

<style scoped></style>