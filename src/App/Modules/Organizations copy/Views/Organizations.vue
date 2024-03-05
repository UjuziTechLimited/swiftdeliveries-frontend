<!-- src/App/Modules/Orders/Views/Orders.vue -->
<script setup>
import { ref } from 'vue';
import DrawerLayout from '@/App/Common/Layouts/DrawerLayout.vue';
import OrderList from '../Components/OrderList.vue';

import { useOrdersStore } from '@/stores/ordersStore';
// import NewOrderForm from '../Components/NewOrderForm.vue';

const ordersStore = useOrdersStore();
const searchQuery = ref('');

// const createOrder = (order) => {
//     ordersStore.addOrder(order);

// };
const clearSearch = () => {
    searchQuery.value = ''; // Clear the search box
    ordersStore.clearSearchResults(); // Clear the search results
};

// const editOrder = (order) => {
//     ordersStore.selectOrderForEdit(order);
//     // Show the modal
//     orderFormModal.showModal();
// };
</script>

<template>
    <DrawerLayout>
        <div class="my-4 text-2xl text-center font-headings">Orders</div>
        <div class="container">
            <div class="flex flex-wrap justify-center gap-10 m-2">
                <!-- <button class="btn" onclick="newOrderForm.showModal()">New Order</button>
                <dialog id="newOrderForm" class="modal">
                    <div class="modal-box">
                        <form method="dialog">
                            <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                        </form>
                        <NewOrderForm @submitForm="createOrder" />
                    </div>
                </dialog> -->

                <input v-model="ordersStore.searchQuery" @input="searchOrders" class="input input-bordered"
                    placeholder="Search Orders" />
                <button class="btn btn-circle btn-error" @click="clearSearch">X</button>
            </div>
            <div>
                <OrderList :orders="ordersStore.filteredOrders" />
            </div>
        </div>
    </DrawerLayout>
</template>
