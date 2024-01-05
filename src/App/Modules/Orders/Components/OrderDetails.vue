<!-- src/App/Modules/Orders/Components/OrderDetails.vue -->

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['order']);
</script>


<template>
    <div class="max-w-md p-6 mx-auto mt-4 bg-white rounded-md shadow-md">
        <h1 class="mb-4 text-xl font-bold">Order Details</h1>
        <div v-if="$props.order">
            <p><span class="font-bold">ID:</span> {{ props.order.id }}</p>
            <p><span class="font-bold">Recipient Name:</span> {{ props.order.recipient.name }}</p>
            <p><span class="font-bold">Delivery Type:</span> {{ props.order.orderType }}</p>
            <p><span class="font-bold">Assigned Rider:</span> {{ props.order.assignedRider }}</p>
            <p><span class="font-bold">Delivery Status:</span> {{ props.order.deliveryStatus }}</p>
            <!-- Add more details as needed -->
        </div>
        <div v-else>
            <p>No order selected</p>
        </div>
    </div>
</template>

<style scoped>
/* Add your custom styling here */
</style>