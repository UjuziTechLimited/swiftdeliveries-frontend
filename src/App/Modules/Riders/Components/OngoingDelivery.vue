<template>

    <!-- v-if filtered =0 display no ongoing errors else display on-going -->

    <div class="flex flex-wrap justify-between  shadow-md shadow-slate-900 m-2 rounded-md" v-for="ongoing_delivery in ongoing_deliveries" :key="ongoing_delivery.request_id">
        <div class="flex flex-col p-2 text-xl" >
            

            <span class="font font-medium text-md">Item Details</span>
            <span class="font font-semi-bold text-xl">{{ ongoing_delivery.item_details }}</span>
        
        </div>


        <div class="flex flex-col p-2 text-xl" >
            

            <span class="font font-medium">Pickup Time </span>
            <span class="font font-semi-bold">{{ ongoing_delivery.pickup_time }}</span>
        
        </div>


        <div class="flex flex-col p-2 text-xl" >
            

            <span class="font font-medium">Destination</span>
            <span class="font font-semi-bold">Destination</span>
        
        </div>


        <div class="flex flex-col p-2 text-xl" >
            

            <span class="font font-medium">Status</span>
            <span class="font font-semi-bold">{{ ongoing_delivery.delivery_status }}</span>
        
        </div>


        

    </div>
</template>

<script setup>

import { useRidersStore } from "@/stores/ridersStore";
import { computed, ref } from 'vue';

const riderStore = useRidersStore();
 
const ongoing_deliveries = computed( () => riderStore.filtered_ongoing_deliveries)

</script>

<style scoped></style>


