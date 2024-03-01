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

            <GMapCluster>

                <GMapMarker v-for="mymarker in markers" :key="mymarker.id" :position="mymarker.position" :clickable="true"
                    :draggable="false">
                </GMapMarker>
            </GMapCluster>
        </GMapMap>
    </div>
</template> 
  
<script setup>

import { ref, computed, onMounted, watch, toRefs, watchEffect } from "vue";
import { useMapStore } from "@/stores/mapStore";
const mapStore = useMapStore;
const props = defineProps({
    marker_transition: Boolean,
    marker: {}
})
const coords = ref({ lat: -1.2944321, lng: 36.841907 });

// -1.2944321,36.841907

const demomarkers = ref([
    {
        position: {
            lat: 0.093048,
            lng: 36.84212,
        },
    },
    {
        position: {
            lat: 0.093048,
            lng: 37.84212,
        },
    }
])


const { marker_transition } = toRefs(props)

const markers = ref([])

// markers.value.push(props.marker)

watch(marker_transition, async () => {

    markers.value.push(props.marker)
    coords.value.lat = props.marker.position.lat
    coords.value.lng = props.marker.position.lng
    // console.log(mymarker)
}
)
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