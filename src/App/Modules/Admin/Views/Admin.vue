<!-- src/App/Modules/Orders/Views/Orders.vue -->

<script setup>
import { ref } from 'vue';
import SuperadminLayout from '@/App/Common/Layouts/SuperadminLayout.vue';
import AdminList from '../Components/AdminList.vue';

import { useAdminStore } from '@/stores/adminStore';
// import NewOrderForm from '../Components/NewOrderForm.vue';

const adminStore = useAdminStore();
const searchQuery = ref('');

// const createOrder = (order) => {
//     ordersStore.addOrder(order);

// };
const clearSearch = () => {
    searchQuery.value = ''; // Clear the search box
    adminStore.clearSearchResults(); // Clear the search results
};

// const editOrder = (order) => {
//     ordersStore.selectOrderForEdit(order);
//     // Show the modal
//     orderFormModal.showModal();
// };
</script>

<template>
    <SuperadminLayout>
        <div class="my-4 text-2xl text-center font-headings">Administrators</div>
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

                <input v-model="adminStore.searchQuery" @input="searchAdmins" class="input input-bordered"
                    placeholder="Search Admins" />
                <button class="btn btn-circle btn-error" @click="clearSearch">X</button>
            </div>
            <div>
                <AdminList :admins="adminStore.filteredAdmins" />
            </div>
        </div>
    </SuperadminLayout>
</template>