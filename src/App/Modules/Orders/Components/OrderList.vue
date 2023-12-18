<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const orders = ref([]);

onMounted(() => {
    fetchOrders();
});

const fetchOrders = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/orders');
        orders.value = response.data.orders;
    } catch (error) {
        console.error('Error fetching orders', error);
    }
};



</script>


<template>
    <div>
        <h2>Orders</h2>
        <ul>
            <li v-for="order in orders" :key="order.id">
                {{ order.recipient }} - {{ order.packageType }}
                <!-- Display other order details as needed -->
            </li>
        </ul>
    </div>
</template>


<style>
/* Your styling goes here */
</style>
