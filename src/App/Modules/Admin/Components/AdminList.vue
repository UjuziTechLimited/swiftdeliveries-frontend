<!-- src/App/Modules/Orders/Components/OrderList.vue -->

<script setup>
import { computed, ref } from 'vue';
import { useAdminStore } from '@/stores/adminStore';
import AdminDetails from './AdminDetails.vue';

const adminStore = useAdminStore();

const filteredAdmins = computed(() => adminStore.filteredAdmins)

const openDetailsModal = (admin) => {

    selectedAdmin.value = admin;
    details_modal.showModal();
}

const selectedAdmin = ref(null);

</script>

<template>
    <div class="mx-2 overflow-x-auto">
        <table class="min-w-full table-auto">
            <thead>
                <tr>
                    <th class="font-bold font-headings">ID</th>
                    <th class="font-bold font-headings">Name</th>
                    <th class="font-bold font-headings">Email</th>
                    <th class="font-bold font-headings">Organization</th>
                    <th class="font-bold font-headings">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="admin in filteredAdmins" :key="admin.id">
                    <td class="px-4 py-2 border-t">{{ admin.id }}</td>
                    <td class="px-4 py-2 border-t">{{ admin.name }}</td>
                    <td class="px-4 py-2 border-t">{{ admin.email }}</td>
                    <td class="px-4 py-2 border-t">{{ admin.organization }}</td>
                    <td class="px-4 py-2 border-t">


                        <!-- View Order -->
                        <button class="btn" @click="openDetailsModal(admin)">View</button>
                        <!-- onclick="details_modal.showModal()" -->
                        <dialog id="details_modal" class="modal">
                            <div class="modal-box">
                                <form method="dialog">
                                    <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                                </form>
                                <AdminDetails :admin="selectedAdmin" />
                            </div>
                        </dialog>


                        <!-- <button class="m-2 btn btn-primary" @click="adminStore.toggleDeliveryStatus(admin.id)">
                            Toggle Status
                        </button> -->
                        <button class="m-2 btn btn-error" @click="adminStore.removeAdmin(admin.id)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>