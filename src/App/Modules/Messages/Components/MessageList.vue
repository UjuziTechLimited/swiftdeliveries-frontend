<!-- src/App/Modules/Orders/Components/MessageList.vue -->
<script setup>
import { computed, ref } from 'vue';
import { useMessagesStore } from '@/stores/messagesStore';
import MessageDetails from './MessageDetails.vue';

const messagesStore = useMessagesStore();

const filteredMessages = computed(() => messagesStore.filteredMessages)

const openDetailsModal = (message) => {

    selectedMessage.value = message;
    details_modal.showModal();
}

const selectedMessage = ref(null);

</script>

<template>
    <div class="mx-2 overflow-x-auto">
        <table class="min-w-full table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2 font-bold">ID</th>
                    <th class="px-4 py-2 font-bold">Name</th>
                    <th class="px-4 py-2 font-bold">Email</th>
                    <th class="px-4 py-2 font-bold">Message</th>
                    <th class="px-4 py-2 font-bold">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="message in filteredMessages" :key="message.id">
                    <td class="px-4 py-2 border-t">{{ message.id }}</td>
                    <td class="px-4 py-2 border-t">{{ message.name }}</td>
                    <td class="px-4 py-2 border-t">{{ message.email }}</td>
                    <td class="px-4 py-2 border-t">{{ message.message }}</td>
                    <td class="flex px-4 py-2 border-t">

                        <a :href="`mailto:${message.email}`" class="m-2 btn">Reply</a>
                        <!-- View Order -->
                        <button class="m-2 btn" @click="openDetailsModal(message)">View</button>
                        <!-- onclick="details_modal.showModal()" -->
                        <dialog id="details_modal" class="modal">
                            <div class="modal-box">
                                <form method="dialog">
                                    <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                                </form>
                                <MessageDetails :message="selectedMessage" />
                            </div>
                        </dialog>
                        <button class="m-2 btn btn-error" @click="messagesStore.removeMessage(message.id)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

    



