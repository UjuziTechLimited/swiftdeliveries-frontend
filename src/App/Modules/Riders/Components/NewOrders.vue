
<template>
        <div class="mx-2 overflow-x-auto">
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
                    <td class="px-4 py-2 border-t">{{ order.id }}</td>
                    <td class="px-4 py-2 border-t">{{ order.recipient.name }}</td>
                    <td class="px-4 py-2 border-t">{{ order.orderType }}</td>
                    <td class="px-4 py-2 border-t">{{ order.assignedRider }}</td>
                    <td class="px-4 py-2 border-t">{{ order.deliveryStatus }}</td>
                    <td class="px-4 py-2 border-t">


                        <!-- View Order -->
                        
                        <button class="btn" onclick="details_modal.showModal()">View</button>
                        <!-- onclick="details_modal.showModal()" -->
                        <dialog id="details_modal" class="modal">
                            <div class="modal-box">
                                <form method="dialog">
                                    <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                                </form>
                                <h1>Modal Appeared</h1>
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

        <button class="btn" onclick="detail_modal.showModal()">View</button>
                        <!-- onclick="details_modal.showModal()" -->
                        <dialog id="detail _modal" class="modal">
                            <div class="modal-box">
                                <form method="dialog">
                                    <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                                </form>
                                <h1>Modal Appeared</h1>
                            </div>
                        </dialog>

    </div>
    </template>

    <script setup >
import { computed, ref } from 'vue';
import { useOrdersStore } from '@/stores/ordersStore';


const ordersStore = useOrdersStore();

const filteredOrders = computed(() => ordersStore.filteredOrders)



const openDetailsModal = (order) => {

    selectedOrder.value = order;
    details_modal.showModal();
}

const selectedOrder = ref(null);

</script>

<style scoped></style>