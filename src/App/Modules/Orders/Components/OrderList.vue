<!-- src/App/Modules/Orders/Components/OrderList.vue -->
<script setup>
import { computed } from 'vue';
import { useOrdersStore } from '@/stores/ordersStore';
import EditOrder from './EditOrder.vue';

const ordersStore = useOrdersStore();

const filteredOrders = computed(() => ordersStore.filteredOrders)


// const editOrder = (order) => {
//     ordersStore.selectOrderForEdit(order);
//     // Trigger the modal for editing
//     // ordersStore.showEditOrderModal();
// };


</script>


<template>
<div class="overflow-x-auto mx-2">
    <table class="min-w-full table-auto">
        <thead>
            <tr>
                <th class="px-4 py-2 font-bold">ID</th>
                <th class="px-4 py-2 font-bold">Recipient Name</th>
                <th class="px-4 py-2 font-bold">Delivery Type</th>
                <th class="px-4 py-2 font-bold">Assigned Rider</th>
                <th class="px-4 py-2 font-bold">Delivery Status</th>
                <th class="px-4 py-2 font-bold">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="order in filteredOrders" :key="order.id">
                <td class="border-t px-4 py-2">{{ order.id }}</td>
                <td class="border-t px-4 py-2">{{ order.recipient.name }}</td>
                <td class="border-t px-4 py-2">{{ order.orderType }}</td>
                <td class="border-t px-4 py-2">{{ order.assignedRider }}</td>
                <td class="border-t px-4 py-2">{{ order.deliveryStatus }}</td>
                <td class="border-t px-4 py-2">
                    <button class="m-2 btn btn-primary" @click="ordersStore.toggleDeliveryStatus(order.id)">
                        Toggle Status
                    </button>
                    <button class="m-2 btn btn-error" @click="ordersStore.removeOrder(order.id)">
                        Delete
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>

                        <!-- <button class="m-2 btn btn-primary" @click="markComplete(order)"
                            :disabled="order.deliveryStatus !== 'Pending'">
                            Complete</button> -->

                        <!-- <button class="m-2 btn btn-error" @click="ordersStore.editOrder(order)">Edit</button> -->



