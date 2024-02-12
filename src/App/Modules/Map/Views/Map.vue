<template>
  <DrawerLayout>
    <div class="max-h-screen">
      <div class="h-96 ">
        <GoogleMap :marker="to_form_markers" :marker_transition="marker_update"/>
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
        <button class="btn btn-block bg-primary" onclick="newOrderForm.showModal()">Confirm Order</button>
        <button class="btn btn-block bg-secondary" @click="updatedirections" >Go to Rider</button>

      </div>

    </div>
  </DrawerLayout>
</template>

<script setup>
import GoogleMap from '../Components/GoogleMap.vue'
import DrawerLayout from '../../../Common/Layouts/DrawerLayout.vue';
import { ref } from 'vue';
import { useMapStore } from '@/stores/mapStore';
import router  from '@/router';

const mapstore = useMapStore();

const to_form_markers = ref({})
const marker_update = ref(true)


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


const updatedirections = async() => {
  await mapstore.getdirections()

  router.push({ name: 'RidersMapView', params: { id: "54we" } })
}



</script>

<style scoped></style>