<!-- src/App/Modules/Orders/Components/InboxList.vue -->
<script setup>
import { computed, ref } from 'vue';
import { useInboxStore } from '@/stores/inboxStore';
import InboxDetails from './InboxDetails.vue';

const inboxStore = useInboxStore();

const filteredInbox = computed(() => inboxStore.filteredInbox)

const openDetailsModal = (inbox) => {

    selectedInbox.value = inbox;
    details_modal.showModal();
}

const selectedInbox = ref(null);

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
                <tr v-for="inbox in filteredInbox" :key="inbox.id">
                    <td class="px-4 py-2 border-t">{{ inbox.id }}</td>
                    <td class="px-4 py-2 border-t">{{ inbox.name }}</td>
                    <td class="px-4 py-2 border-t">{{ inbox.email }}</td>
                    <td class="px-4 py-2 border-t">{{ inbox.message }}</td>
                    <td class="px-4 py-2 border-t">


                        <!-- View Order -->
                        <button class="btn" @click="openDetailsModal(inbox)">View</button>
                        <!-- onclick="details_modal.showModal()" -->
                        <dialog id="details_modal" class="modal">
                            <div class="modal-box">
                                <form method="dialog">
                                    <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                                </form>
                                <InboxDetails :inbox="selectedInbox" />
                            </div>
                        </dialog>
                        <button class="m-2 btn btn-error" @click="inboxStore.removeInbox(inbox.id)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

    



