<script setup>
import { computed } from 'vue';
import { useRidersStore } from '@/stores/ridersStore';

const ridersStore = useRidersStore();

const filteredRiders = computed(() => ridersStore.filteredRiders)
</script>


<template>
    <div class="mx-2 overflow-x-auto">
        <table class="min-w-full table-auto ">
            <thead>
                <tr>
                    <th class="px-4 py-2 font-bold">ID</th>
                    <th class="px-4 py-2 font-bold">Name</th>
                    <th class="px-4 py-2 font-bold">Phone Number</th>
                    <th class="px-4 py-2 font-bold">Account Status</th>
                    <th class="px-4 py-2 font-bold">Assigned</th>
                    <th class="px-4 py-2 font-bold">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="hover" v-for="rider in ridersStore.filteredRiders" :key="rider.id">
                    <td>{{ rider.id }}</td>
                    <td>{{ rider.name }}</td>
                    <td>{{ rider.phoneNumber }}</td>
                    <td>{{ rider.accountStatus }}</td>
                    <td>{{ rider.assignStatus }}</td>
                    <td>
                        <button class="m-2 btn btn-primary" @click="ridersStore.toggleAccountStatus(rider.id)">
                            Toggle Account Status</button>
                        <button class="m-2 btn btn-primary" @click="ridersStore.toggleAssignStatus(rider.id)">
                            Toggle Assigned Status</button>

                        <!-- 
                            <button class="m-2 btn btn-primary" @click="markComplete(rider)"
                                :disabled="rider.deliveryStatus !== 'Pending'">
                                Complete</button> -->

                        <button class="m-2 btn btn-error" @click="editRider(rider)">Edit</button>
                        <button class="m-2 btn btn-error" @click="ridersStore.removeRider(rider.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



