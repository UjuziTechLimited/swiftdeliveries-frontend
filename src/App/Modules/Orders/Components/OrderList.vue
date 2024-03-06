<!-- src/App/Modules/Orders/Components/OrderList.vue -->

<script setup>
import { computed, ref } from 'vue';
import { useOrdersStore } from '@/stores/ordersStore';
import OrderDetails from './OrderDetails.vue';

const ordersStore = useOrdersStore();

const filteredOrders = computed(() => ordersStore.filteredOrders)



const openDetailsModal = (order) => {

    selectedOrder.value = order;
    details_modal.showModal();
}

const selectedOrder = ref(null);

</script>

<template>
    <div class="mx-2 overflow-x-auto">
        <table class="min-w-full table-auto">
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
                <tr v-for="order in filteredOrders" :key="order.id">
                    <td class="px-4 py-2 border-t">{{ order.id }}</td>
                    <td class="px-4 py-2 border-t">{{ order.recipient.name }}</td>
                    <td class="px-4 py-2 border-t">{{ order.orderType }}</td>
                    <td class="px-4 py-2 border-t">{{ order.assignedRider }}</td>
                    <td class="px-4 py-2 border-t">{{ order.deliveryStatus }}</td>
                    <td class="px-4 py-2 border-t">


                        <!-- View Order -->
                        <button class="btn" @click="openDetailsModal(order)">View</button>
                        <!-- onclick="details_modal.showModal()" -->
                        <dialog id="details_modal" class="modal">
                            <div class="modal-box">
                                <form method="dialog">
                                    <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                                </form>
                                <OrderDetails :order="selectedOrder" />
                            </div>
                        </dialog>


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