<!-- src/App/Modules/Organizations/Components/OrganizationList.vue -->

<script setup>
import { computed, ref } from 'vue';
import { useOrganizationsStore } from '@/stores/organizationsStore';
import OrganizationDetails from './OrganizationDetails.vue';

const organizationsStore = useOrganizationsStore();

const filteredOrganizations = computed(() => organizationsStore.filteredOrganizations)



const openDetailsModal = (organization) => {

    selectedOrganization.value = organization;
    details_modal.showModal();
}

const selectedOrganization = ref(null);

</script>

<template>
    <div class="mx-2 overflow-x-auto">
        <table class="min-w-full table-auto">
            <thead>
                <tr>
                    <th class="font-bold font-headings">ID</th>
                    <th class="font-bold font-headings">Name</th>
                    <!-- <th class="font-bold font-headings">Delivery Type</th> -->
                    <!-- <th class="font-bold font-headings">Assigned Rider</th> -->
                    <!-- <th class="font-bold font-headings">Delivery Status</th> -->
                    <th class="font-bold font-headings">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="organization in filteredOrganizations" :key="organization.id">
                    <td class="px-4 py-2 border-t">{{ organization.id }}</td>
                    <td class="px-4 py-2 border-t">{{ organization.name }}</td>
                    <!-- <td class="px-4 py-2 border-t">{{ organization.orderType }}</td> -->
                    <!-- <td class="px-4 py-2 border-t">{{ organization.assignedRider }}</td> -->
                    <!-- <td class="px-4 py-2 border-t">{{ organization.deliveryStatus }}</td> -->
                    <td class="px-4 py-2 border-t">


                        <!-- View Organization -->
                        <button class="btn" @click="openDetailsModal(organization)">View</button>
                        <!-- onclick="details_modal.showModal()" -->
                        <dialog id="details_modal" class="modal">
                            <div class="modal-box">
                                <form method="dialog">
                                    <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                                </form>
                                <OrganizationDetails :organization="selectedOrganization" />
                            </div>
                        </dialog>


                        <button class="m-2 btn btn-primary"
                            @click="organizationsStore.toggleDeliveryStatus(organization.id)">
                            Toggle Status
                        </button>
                        <button class="m-2 btn btn-error"
                            @click="organizationsStore.removeOrganization(organization.id)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>