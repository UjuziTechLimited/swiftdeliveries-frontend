<!-- src/App/Modules/Orders/Components/OrderDetails.vue -->

<script setup>

const props = defineProps(['organization']);
</script>


<template>
    <div class="max-w-md p-6 mx-auto mt-4 bg-white rounded-md shadow-md">
        <h1 class="mb-4 text-xl font-bold">Organization Details</h1>
        <div v-if="$props.organization">
            <p><span class="font-bold">ID:</span> {{ props.organization.id }}</p>
            <p><span class="font-bold">Name:</span> {{ props.organization.name }}</p>
            <!-- <p><span class="font-bold">Delivery Type:</span> {{ props.organization.orderType }}</p> -->
            <!-- <p><span class="font-bold">Assigned Rider:</span> {{ props.organization.assignedRider }}</p> -->
            <!-- <p><span class="font-bold">Delivery Status:</span> {{ props.organization.deliveryStatus }}</p> -->
            <!-- Add more details as needed -->
        </div>
        <div v-else>
            <p>No organization selected</p>
        </div>
    </div>
</template>

<style scoped>
/* Add your custom styling here */
</style>