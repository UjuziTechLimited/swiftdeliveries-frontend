<script setup>
import { ref } from 'vue';
import DrawerLayout from '../../../Common/Layouts/DrawerLayout.vue';
import Map from '../Components/Map.vue';



const pickupLocation = ref('');
const dropOffLocation = ref('');

</script>
<template>
    <DrawerLayout>
        <div class="flex flex-col">
            <div class="">
                <Map />
            </div>
            <div class="fixed bottom-0 grid w-full grid-rows-2 gap-5 p-4 h-1/3 rounded-t-3xl bg-base-200">
                <div class="p-2 m-2">
                    <div>PICKUP</div>
                    <input v-model="pickupLocation" type="text" placeholder="Type here" class="w-full input" />
                </div>
                <div class="p-2 m-2">
                    <div>DROP OFF</div>
                    <input v-model="dropOffLocation" type="text" placeholder="Where To?" class="w-full input" />
                </div>
            </div>
        </div>
    </DrawerLayout>
</template>

<style scoped></style>