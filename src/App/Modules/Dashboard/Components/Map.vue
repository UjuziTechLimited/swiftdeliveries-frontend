<script setup>
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';

import { Map, MapStyle, Marker, config } from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import * as maptilersdk from '@maptiler/sdk';

const props = defineProps(['searchQuery']);
const emit = defineEmits(['selectLocation']);

const mapContainer = shallowRef(null);
const map = shallowRef(null);

onMounted(() => {
    config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;


    map.value = markRaw(new Map({
        container: mapContainer.value,
        style: MapStyle.STREETS,
        geolocate: maptilersdk.GeolocationType.POINT, // center map based on visitor’s location
        navigationControl: false //disable the navigation control
        // center: [initialState.lng, initialState.lat],
        // zoom: initialState.zoom
    }));

    // new Marker({ color: "#FF0000" })
    //     .setLngLat([36.8189302, -1.2731758])
    //     .addTo(map.value);
}),
    onUnmounted(() => {
        map.value?.remove();
    })
</script>


<template>
    <!-- height: calc(100vh - 200px) /* calculate height of the screen minus the heading */ ; width: 100% -->
    <div class="">
        <div class="w-full h-96" ref="mapContainer"></div> <!-- width: 100% height: 100% -->
    </div>
</template>



<style scoped></style>