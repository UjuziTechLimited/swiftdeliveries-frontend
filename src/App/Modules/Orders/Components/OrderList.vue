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
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th class="font-bold font-headings">ID</th>
                    <th class="font-bold font-headings">Recipient Name</th>
                    <th class="font-bold font-headings">Delivery Type</th>
                    <th class="font-bold font-headings">Assigned Rider</th>
                    <th class="font-bold font-headings">Delivery Status</th>
                    <th class="font-bold font-headings">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="hover" v-for="order in filteredOrders" :key="order.id">
                    <td>{{ order.id }}</td>
                    <td>{{ order.recipient.name }}</td>
                    <td>{{ order.orderType }}</td>
                    <td>{{ order.assignedRider }}</td>
                    <td>{{ order.deliveryStatus }}</td>
                    <td>
                        <button class="m-2 btn btn-primary" @click="ordersStore.toggleDeliveryStatus(order.id)">
                            Toggle Status</button>

                        <!-- <button class="m-2 btn btn-primary" @click="markComplete(order)"
                            :disabled="order.deliveryStatus !== 'Pending'">
                            Complete</button> -->

                        <!-- <button class="m-2 btn btn-error" @click="ordersStore.editOrder(order)">Edit</button> -->

                        <button class="m-2 btn btn-error" @click="ordersStore.removeOrder(order.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



