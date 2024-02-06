<template>
    <div class="h-96">
        <GMapMap :center="coords" :zoom="10" map-type-id="terrain" style="width: 79vw; height: 25rem" :options="{
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            rotateControl: true,
            fullscreenControl: true,
        }">



        <GMapMarker
          v-for="mymarker in markers"
          :key="mymarker.id"
          :position="marker.position"
          :clickable="true"
          :draggable="true"
          
      >


            <!-- <GMapInfoWindow
              v-if="locationDetails.address != ''"
              :closeclick="true"
              @closeclick="openMarker(null)"
              :opened="openedMarkerID === markerDetails.id"
              :options="{
                pixelOffset: {
                  width: 10,
                  height: 0
                },
                maxWidth: 320,
                maxHeight: 320
              }"
  
            >
              <div class="location-details">
                  <p> Added Info </p>
              </div>
            </GMapInfoWindow> -->


            </GMapMarker> 

        </GMapMap>

    </div>
</template>
  
<script setup>

import { ref, computed, onMounted } from "vue";
import { useMapStore } from "@/stores/mapStore";

const props = defineProps({
    marker: {}
})



const markers = ref([])
markers.value.push(props.marker)


console.log(markers.value)


// markers.value = useMapStore.markerarray

// const markers = useMapStore.markerarray
const coords = ref({ lat: 0.5072, lng: 36.1276 });

// Marker Details
//   const markerDetails = ref({
//     id: "1",
//     position: coords
//   });



// Get users' current location

const getUserLocation = () => {
    // Check if geolocation is supported by the browser
    const isSupported = "navigator" in window && "geolocation" in navigator;
    if (isSupported) {
        // Retrieve the user's current position
        navigator.geolocation.getCurrentPosition((position) => {
            coords.value.lat = position.coords.latitude;
            coords.value.lng = position.coords.longitude;
        });
    }
};

// Open the marker info window
const openMarker = (id) => {
    openedMarkerID.value = id
}


onMounted(() => {
    getUserLocation()
})



</script>
  
  
<style scoped ></style>