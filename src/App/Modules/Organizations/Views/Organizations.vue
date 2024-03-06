<!-- src/App/Modules/Organizations/Views/Organizations.vue -->

<script setup>
import { ref } from 'vue';
import SuperadminLayout from '@/App/Common/Layouts/SuperadminLayout.vue';
import OrganizationsList from '../Components/OrganizationsList.vue';

import { useOrganizationsStore } from '@/stores/organizationsStore';
// import NewOrganizationForm from '../Components/NewOrganizationForm.vue';

const organizationsStore = useOrganizationsStore();
const searchQuery = ref('');

// const createOrganization = (organization) => {
//     organizationsStore.addOrganization(organization);

// };
const clearSearch = () => {
    searchQuery.value = ''; // Clear the search box
    organizationsStore.clearSearchResults(); // Clear the search results
};

// const editOrganization = (organization) => {
//     organizationsStore.selectOrganizationForEdit(organization);
//     // Show the modal
//     orderFormModal.showModal();
// };
</script>

<template>
    <SuperadminLayout>
        <div class="my-4 text-2xl text-center font-headings">Organizations</div>
        <div class="container">
            <div class="flex flex-wrap justify-center gap-10 m-2">
                <!-- <button class="btn" onclick="newOrganizationForm.showModal()">New Organization</button>
                <dialog id="newOrganizationForm" class="modal">
                    <div class="modal-box">
                        <form method="dialog">
                            <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                        </form>
                        <NewOrganizationForm @submitForm="createOrganization" />
                    </div>
                </dialog> -->

                <input v-model="organizationsStore.searchQuery" @input="searchOrganizations"
                    class="input input-bordered" placeholder="Search Organizations" />
                <button class="btn btn-circle btn-error" @click="clearSearch">X</button>
            </div>
            <div>
                <OrganizationsList :orders="organizationsStore.filteredOrganizations" />
            </div>
        </div>
    </SuperadminLayout>
</template>