
<script setup>
import { ref, computed } from 'vue';
import AdminLayout from '@/App/Common/Layouts/AdminLayout.vue';
import RiderList from '../Components/RiderList.vue';
import NewRider from '../Components/NewRider.vue';

import { useRidersStore } from '@/stores/ridersStore';
import DrawerLayout from '@/App/Common/Layouts/DrawerLayout.vue';


const ridersStore = useRidersStore();
const searchQuery = ref('');
const selectedRider = ref(null);

const createRider = (rider) => {

    ridersStore.addRider(rider);

};
const clearSearch = () => {
    searchQuery.value = ''; // Clear the search box
    ridersStore.clearSearchResults(); // Clear the search results
};
const editRider = (rider) => {
    ridersStore.selectRiderForEdit(rider);
    // Show the modal
    my_modal_3.showModal();
};
</script>

<template>
    <DrawerLayout>
        <div class="my-4 text-2xl text-center font-headings">Riders</div>
        <div class="container mx-auto">
            <div class="flex justify-center gap-4">
                <button class="btn" onclick="my_modal_3.showModal()">Add Rider</button>
                <dialog id="my_modal_3" class="modal">
                    <div class="modal-box">
                        <form method="dialog">
                            <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                        </form>
                        <NewRider @submitForm="createRider" />
                    </div>
                </dialog>


                <input v-model="ridersStore.searchQuery" @input="searchRiders" class="input input-bordered"
                    placeholder="Search Riders" />
                <button class="btn btn-circle btn-error" @click="clearSearch">X</button>
            </div>
            <div>
                <RiderList :riders="ridersStore.filteredRiders" />
            </div>
        </div>
    </DrawerLayout>
</template>

