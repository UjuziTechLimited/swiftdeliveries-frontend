<!-- src/App/Modules/Orders/Views/Orders.vue -->
<script setup>
import { ref, computed } from 'vue';
import AdminLayout from '@/App/Common/Layouts/AdminLayout.vue';
import OrderList from '../Components/OrderList.vue';
import NewOrder from '../Components/NewOrder.vue';

import { useOrdersStore } from '@/stores/ordersStore';

const ordersStore = useOrdersStore();
const searchQuery = ref('');
const selectedOrder = ref(null);

const createOrder = (order) => {

    ordersStore.addOrder(order);

};
const clearSearch = () => {
    searchQuery.value = ''; // Clear the search box
    ordersStore.clearSearchResults(); // Clear the search results
};
const editOrder = (order) => {
    ordersStore.selectOrderForEdit(order);
    // Show the modal
    orderFormModal.showModal();
};
</script>

<template>
    <AdminLayout>
        <div class="my-4 text-2xl text-center font-headings">Orders</div>
        <div class="container mx-auto">
            <div class="flex justify-center gap-4">
                <button class="btn" onclick="my_modal_3.showModal()">New Order</button>
                <dialog id="my_modal_3" class="modal">
                    <div class="modal-box">
                        <form method="dialog">
                            <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                        </form>
                        <NewOrder @submitForm="createOrder" />
                    </div>
                </dialog>


                <input v-model="ordersStore.searchQuery" @input="searchOrders" class="input input-bordered"
                    placeholder="Search Orders" />
                <button class="btn btn-circle btn-error" @click="clearSearch">X</button>
            </div>
            <div>
                <OrderList :orders="ordersStore.filteredOrders" />
            </div>
        </div>
    </AdminLayout>
</template>
