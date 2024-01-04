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
            <div class="fixed bottom-0 flex w-full gap-5 p-4 h-1/4 rounded-t-2xl bg-base-200">
                <div>
                    <div>PICKUP</div>
                    <input v-model="pickupLocation" type="text" placeholder="Type here" class="w-full max-w-xs input" />
                </div>
                <div>
                    <div>DROP OFF</div>
                    <input v-model="dropOffLocation" type="text" placeholder="Where To?" class="w-full max-w-xs input" />
                </div>
            </div>
        </div>
    </DrawerLayout>
</template>

<style scoped></style>