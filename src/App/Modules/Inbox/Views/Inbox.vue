<!-- src/App/Modules/Orders/Views/Inbox.vue -->
<script setup>
import { ref } from 'vue';
import DrawerLayout from '@/App/Common/Layouts/DrawerLayout.vue';
import InboxList from '../Components/InboxList.vue';

import { useInboxStore } from '@/stores/inboxStore';
import NewOrderForm from '../Components/NewOrderForm.vue';

const inboxStore = useInboxStore();
const searchQuery = ref('');

// const createOrder = (order) => {
//     inboxStore.addOrder(order);

// };


const clearSearch = () => {
    searchQuery.value = ''; // Clear the search box
    inboxStore.clearSearchResults(); // Clear the search results
};

// const editOrder = (order) => {
//     inboxStore.selectOrderForEdit(order);
//     // Show the modal
//     orderFormModal.showModal();
// };
</script>

<template>
    <DrawerLayout>
        <div class="my-4 text-2xl text-center font-headings">Inbox</div>
        <div class="container">
            <div class="flex flex-wrap justify-center gap-10">
                <!-- <button class="btn" onclick="newOrderForm.showModal()">New Order</button>
                <dialog id="newOrderForm" class="modal">
                    <div class="modal-box">
                        <form method="dialog">
                            <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                        </form>
                        <NewOrderForm @submitForm="createOrder" />
                    </div>
                </dialog> -->

                <input v-model="inboxStore.searchQuery" @input="searchInbox" class="input input-bordered"
                    placeholder="Search Inbox" />
                <button class="btn btn-circle btn-error" @click="clearSearch">X</button>
            </div>
            <div>
                <InboxList :inbox="inboxStore.filteredInbox" />
            </div>
        </div>
    </DrawerLayout>
</template>
