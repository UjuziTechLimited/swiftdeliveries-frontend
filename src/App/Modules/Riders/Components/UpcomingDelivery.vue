
<template>
        <div class="mx-2 overflow-x-auto">
        <table class="min-w-full table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2 font-bold">ID</th>
                    <th class="px-4 py-2 font-bold">Recipient Name</th>
                    <th class="px-4 py-2 font-bold">Items</th>
                    <th class="px-4 py-2 font-bold">Pickup</th>
                    <th class="px-4 py-2 font-bold">Destination</th>
                    <th class="px-4 py-2 font-bold">Pickup Time</th>
                    <th class="px-4 py-2 font-bold">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="upcoming_delivery in upcoming_deliveries" :key="upcoming_delivery.request_id">
                    <td class="px-4 py-2 text-xl font-content text-center">{{ upcoming_delivery.request_id }}</td>
                    <td class="px-4 py-2  text-xl font-content text-center">{{ upcoming_delivery.recipient_name }}</td>
                    <td class="px-4 py-2  text-xl font-content text-center">{{ upcoming_delivery.item_details }}</td>
                    <td class="px-4 py-2  text-xl font-content text-center">CBD</td>
                    <td class="px-4 py-2  text-xl font-content text-center">Kijabe</td>
                    <td class="px-4 py-2  text-xl font-content text-center">{{ upcoming_delivery.pickup_time }}</td>
                    <td class="px-4 py-2  text-xl font-content text-center">


                        <!-- View Order -->
                        
                        <button @click=opendetails(upcoming_delivery.request_id) class="btn m-2 btn-primary" >View</button>

                        <button class="m-2 btn btn-success" >
                            Accept Delivery
                        </button>

                    </td>
                </tr>
            </tbody>
        </table>

        <button class="btn" onclick="detail_modal.showModal()">View</button>
                        <!-- onclick="details_modal.showModal()" -->
                        <dialog id="detail _modal" class="modal">
                            <div class="modal-box">
                                <form method="dialog">
                                    <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                                </form>
                                <h1>Modal Appeared</h1>
                            </div>
                        </dialog>

    </div>
    </template>

    <script setup >
import { computed, ref } from 'vue';
import { useRidersStore } from '@/stores/ridersStore';
import router from '@/router';


const riderStore = useRidersStore();

const upcoming_deliveries = computed(() => riderStore.filtereddeliveries)

const opendetails = (request_id) => {
    // router.push({ name: 'RidersMapView', params: { id: request_id } })
    // riderStore.deliveryid = request_id;
    router.push({ name: 'RidersMapView', params: { id: request_id } })


}


</script>

<style scoped></style>