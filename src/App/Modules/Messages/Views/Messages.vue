<!-- src/App/Modules/Orders/Views/Message.vue -->
<script setup>
import { ref } from 'vue';
import DrawerLayout from '@/App/Common/Layouts/DrawerLayout.vue';
import MessageList from '../Components/MessageList.vue';

import { useMessagesStore } from '@/stores/messagesStore';

const messagesStore = useMessagesStore();
const searchQuery = ref('');


const clearSearch = () => {
    searchQuery.value = ''; // Clear the search box
    messagesStore.clearSearchResults(); // Clear the search results
};

// const editOrder = (order) => {
//     MessageStore.selectOrderForEdit(order);
//     // Show the modal
//     orderFormModal.showModal();
// };
</script>

<template>
    <DrawerLayout>
        <div class="my-4 text-2xl text-center font-headings">Messages</div>
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

                <input v-model="messagesStore.searchQuery" @input="searchMessages" class="input input-bordered"
                    placeholder="Search Messages" />
                <button class="btn btn-circle btn-error" @click="clearSearch">X</button>
            </div>
            <div>
                <MessageList :messages="messagesStore.filteredMessage" />
            </div>
        </div>
    </DrawerLayout>
</template>
