<script setup>
import { ref } from 'vue';
import DrawerLayout from '../../../Common/Layouts/DrawerLayout.vue';
import Map from '../Components/Map.vue';



const pickupLocation = ref('');
const dropOffLocation = ref('');

const handleSelectLocation = (location) => {
    // Handle the selected location, e.g., update the pickup or drop-off location
    if (pickupLocation.value === '') {
        pickupLocation.value = location.place_name;
    } else {
        dropOffLocation.value = location.place_name;
    }
};
</script>
<template>
    <DrawerLayout>
        <div class="flex flex-col">
            <div class="">
                <Map @selectLocation="handleSelectLocation" />
            </div>
            <div class="fixed bottom-0 flex flex-col w-full p-4 rounded-t-2xl bg-base-200">

                <div>
                    <div>PICKUP</div>
                    <input v-model="pickupLocation" type="text" placeholder="Type here" class="w-full max-w-xs input" />
                </div>
                <div>
                    <div>DROP OFF</div>
                    <input v-model="dropOffLocation" type="text" placeholder="Where To?" class="w-full max-w-xs input" />
                </div>
                <!-- show recent deliveries using pills -->
                <div>RECENT DELIVERIES</div>
                <div class="flex">


                </div>
            </div>
        </div>
    </DrawerLayout>
</template>

<style scoped></style>