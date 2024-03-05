<script setup>
import { ref } from 'vue';
import DrawerLayout from '../../../Common/Layouts/DrawerLayout.vue';
// import Map from '../Components/Map.vue';
// import LeafletMap from '../Components/LeafletMap.vue';
import GoogleMap from '../Components/GoogleMap.vue'
import NewOrderForm from '@/App/Modules/Orders/Components/NewOrderForm.vue';
import { useOrdersStore } from '@/stores/ordersStore';
import { useMapStore } from '@/stores/mapStore';


const pickupLocation = ref('');
const dropOffLocation = ref('');

const to_form_markers = ref({})
const marker_update = ref(true)

const ordersStore = useOrdersStore();
const mapstore = useMapStore();

const createOrder = (order) => {
    ordersStore.addOrder(order);
}; 0


// Set the location based on the place selected
const setPlace = (place) => {
    const marker_id = ref(Math.random());
    // console.log(place)
    const coords = ref({ lat: 0, lng: 0 })
    coords.value.lat = place.geometry.location.lat();
    coords.value.lng = place.geometry.location.lng();
    // // Update the location details
    // const address = place.formatted_address;
    // locationDetails.value.url = place.url;
    to_form_markers.value = {
        'id': marker_id.value,
        'position': coords.value,
        'address': place.formatted_address,
        'url': place.url
    }
    mapstore.addmarker(to_form_markers.value)
    marker_update.value = !marker_update.value
};
const updatedirections = async () => {
    await mapstore.getdirections()
    router.push({ name: 'RidersMapView', params: { id: "54we" } })
}
</script>
<template>
    <DrawerLayout>
        <div class="max-h-screen">
            <div class="h-96">
                <!-- <Map /> -->
                <!-- <LeafletMap /> -->
                <GoogleMap :marker="to_form_markers" :marker_transition="marker_update" />
            </div>

            <div class="grid w-full grid-rows-3 gap-5 p-4 rounded-t-3xl bg-base-200">
                <div class="p-2 m-2">
                    <div>PICKUP</div>
                    <GMapAutocomplete placeholder="Type here" @place_changed="setPlace" class="w-full input">

                    </GMapAutocomplete>
                </div>
                <div class="p-2 m-2">
                    <div>DROP OFF</div>
                    <GMapAutocomplete placeholder="Where To?" @place_changed="setPlace" class="w-full input">
                    </GMapAutocomplete>
                </div>
                <!-- <button class="btn btn-block bg-primary" onclick="newOrderForm.showModal()">Confirm Order</button>
                <button class="btn btn-block bg-secondary" @click="updatedirections">Go to Rider</button> -->
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



            <!-- <div class="grid w-full grid-rows-3 gap-5 p-4 rounded-t-3xl bg-base-200">
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
            </div> -->
        </div>
    </DrawerLayout>
</template>

<style scoped></style>