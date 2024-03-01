<template>
    <div>
        <GMapMap :center="coords" :zoom="15" map-type-id="terrain" style="width: 79vw; height: 25rem" :options="{
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            rotateControl: true,
            fullscreenControl: true,
        }">
            <GMapPolyline :path="rider_path" ref="polyline" />
            <GMapCluster>
                <GMapMarker v-for="mymarker in rider_markers" :key="mymarker.id" :position="mymarker.position"
                    :clickable="true" :draggable="false">
                </GMapMarker>
            </GMapCluster>
        </GMapMap>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useMapStore } from "@/stores/mapStore";

const mapStore = useMapStore;

const coords = ref({ lat: 1.38, lng: 103.8 });

const rider_markers = ref(null)

const rider_path = ref([
])
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
onMounted(() => {
    getUserLocation()
    rider_path.value = mapStore.directions
    rider_markers.value = mapStore.markerarray

})


</script>

<style></style>