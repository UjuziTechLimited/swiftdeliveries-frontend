<script setup>
import { ref } from 'vue';
import DrawerLayout from '../../../Common/Layouts/DrawerLayout.vue';
// import Map from '../Components/Map.vue';
import LeafletMap from '../Components/LeafletMap.vue';
// import GoogleMap from '../Components/GoogleMap.vue'
import NewOrderForm from '@/App/Modules/Orders/Components/NewOrderForm.vue';
import { useOrdersStore } from '@/stores/ordersStore';


const pickupLocation = ref('');
const dropOffLocation = ref('');


const ordersStore = useOrdersStore();

const createOrder = (order) => {

    ordersStore.addOrder(order);

};

</script>
<template>
    <DrawerLayout>
        <div class="max-h-screen">
            <div class="h-96">
                <!-- <Map /> -->
                <LeafletMap />
                <!-- <GoogleMap /> -->
            </div>
            <div class="grid w-full grid-rows-3 gap-5 p-4 rounded-t-3xl bg-base-200">
                <div class="p-2 m-2">
                    <div>PICKUP</div>
                    <input v-model="pickupLocation" type="text" placeholder="Type here" class="w-full input" />
                </div>
                <div class="p-2 m-2">
                    <div>DROP OFF</div>
                    <input v-model="dropOffLocation" type="text" placeholder="Where To?" class="w-full input" />
                </div>
                <button class="btn btn-block bg-primary" onclick="newOrderForm.showModal()">Confirm Order</button>
                <dialog id="newOrderForm" class="modal">
                    <div class="modal-box">
                        <form method="dialog">
                            <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                        </form>
                        <NewOrderForm @submitForm="createOrder" />
                    </div>
                </dialog>
            </div>
        </div>
    </DrawerLayout>
</template>

<style scoped></style>